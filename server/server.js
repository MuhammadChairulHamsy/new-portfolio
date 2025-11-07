import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default port
    credentials: true,
  })
);
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running!", timestamp: new Date() });
});

// Konfigurasi Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email configuration error:", error);
  } else {
    console.log("✅ Email server ready to send messages");
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validasi
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Semua field harus diisi",
    });
  }

  // Validasi email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Format email tidak valid",
    });
  }

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `🔔 Portfolio Contact: Pesan dari ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;">
        <h2>📩 Pesan Baru dari Portofolio</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong><br>${message}</p>
        <hr/>
        <small>Email ini dikirim otomatis dari website Portfolio Anda</small>
      </div>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent from: ${email}`);

    res.status(200).json({
      success: true,
      message: "Email berhasil dikirim! Terima kasih telah menghubungi saya.",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({
      success: false,
      message:
        "Gagal mengirim email. Silakan coba lagi atau hubungi saya melalui email langsung.",
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║   🚀 Server is running!              ║
║   📍 http://localhost:${PORT}          ║
║   ✅ Ready to receive contacts       ║
╚═══════════════════════════════════════╝
  `);
});
