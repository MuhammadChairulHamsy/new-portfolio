import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
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
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Semua field harus diisi",
    });
  }

  // Validaso email format
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
    to: process.env.EMAIL_PASS,
    subject: `🔔 Portfolio Contact: Pesan dari ${name}`,
    html: `
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
          .value { color: #333; margin-bottom: 15px; }
          .message-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
        
      
      
        
          
            📧 Pesan Baru dari Portfolio
            Anda menerima pesan kontak baru
          
          
            
              👤 Nama:
              ${name}
              
              📧 Email:
              ${email}
              
              📅 Waktu:
              ${new Date().toLocaleString("id-ID", {
                dateStyle: "full",
                timeStyle: "short",
                timeZone: "Asia/Jakarta",
              })}
            
            
            Pesan:
            ${subject}
            
              💬 Pesan:
              ${message}
            
            
            
              Email ini dikirim otomatis dari portfolio website Anda
            
          
        
      
      
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

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` 
    🚀 Server is running!            
    📍 http://localhost:${PORT}         
    ✅ Ready to receive contacts
`);
});
