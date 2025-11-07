# 🚀 Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring stunning animations, interactive UI components, and a powerful backend for contact form handling.

![Portfolio Preview](./preview.png)

## ✨ Features

- **Modern UI/UX Design** - Clean, professional interface with smooth animations
- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Interactive Components** - Engaging animations using OGL particles and custom components
- **Contact Form** - Functional contact form with email integration
- **Tech Stack Display** - Animated logo carousel showcasing technologies
- **Project Showcase** - Beautiful project cards with hover effects
- **Dark Theme** - Elegant dark mode design with gradient accents
- **Performance Optimized** - Fast loading with Vite and optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest version of React for building UI
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Icons** - Popular icon library
- **OGL** - Minimal WebGL library for particle effects
- **Class Variance Authority** - For component variants

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web application framework
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   └── shine-border.jsx
│   │   ├── Particles.jsx
│   │   ├── LogoLoop.jsx
│   │   └── ProfileCard.jsx
│   ├── data/
│   │   └── personal-data.js
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── server.js
│   ├── .env
│   └── package.json
├── public/
│   ├── image/
│   ├── projects/
│   └── logos/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd server
npm install
cd ..
```

4. **Setup environment variables**

Create a `.env` file in the `server` directory:

```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=receiver@gmail.com
```

> **Note:** For Gmail, you need to generate an [App Password](https://support.google.com/accounts/answer/185833)

### Development

**Run both frontend and backend concurrently:**
```bash
npm run dev:all
```

**Or run them separately:**

Frontend only:
```bash
npm run dev
```

Backend only:
```bash
npm run dev:server
```

The frontend will be available at `http://localhost:5173`  
The backend API will run on `http://localhost:3001`

## 📦 Build for Production

### Build frontend
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Start backend server
```bash
cd server
npm start
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/personal-data.js`:

```javascript
export const personalData = {
  name: "YOUR NAME",
  designation: "Your Title",
  description: "Your bio...",
  email: "your@email.com",
  phone: "+1234567890",
  address: "Your Location",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ... more fields
}
```

### Modify Theme Colors

Edit `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Add Projects

Update the projects array in `src/components/sections/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "/projects/project-1.png",
    technologies: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    category: "Web App"
  },
  // ... more projects
]
```

### Update Skills

Modify the tech logos in `src/components/sections/Skills.jsx` to showcase your technology stack.

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. Make sure to:

1. Configure your email credentials in `server/.env`
2. Enable less secure app access or use App Passwords for Gmail
3. Update the email template in `server/server.js` if needed

## 🎭 Components

### Key Components

- **Header** - Navigation with responsive mobile menu
- **Hero** - Landing section with animated particles background
- **About** - Personal information with profile card
- **Skills** - Animated tech stack with LogoLoop
- **Projects** - Project showcase with gradient cards
- **Contact** - Contact form with social links
- **Footer** - Site footer with links and newsletter

### UI Components

- **Particles** - WebGL particle animation background
- **LogoLoop** - Infinite scrolling logo carousel
- **ShineBorder** - Animated border effect component
- **ProfileCard** - Interactive profile card with tilt effect

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend development server |
| `npm run dev:server` | Start backend development server |
| `npm run dev:all` | Run both frontend and backend |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend Deployment (Heroku/Railway/Render)

1. Push the `server` directory to your hosting platform
2. Set environment variables
3. Start command: `npm start`

## 📝 Environment Variables

### Backend (.env)

```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=receiver@gmail.com
NODE_ENV=production
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muhammad Chairul Hamsy**

- GitHub: [@MuhammadChairulHamsy](https://github.com/MuhammadChairulHamsy)
- Email: mach.hamsy@gmail.com

## 🙏 Acknowledgments

- Design inspiration from various modern portfolio websites
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [OGL](https://github.com/oframe/ogl)
- UI components from [Magic UI](https://magicui.design/)
- UI components from [React bits](https://reactbits.dev/)

## 📸 Screenshots

### Desktop View
![Desktop](./screenshots/desktop.png)

### Mobile View
![Mobile](./screenshots/mobile.png)

### Dark Theme
![Dark Theme](./screenshots/dark-theme.png)

---

⭐️ If you like this project, please give it a star on GitHub!

**Built with ❤️ by [Muhammad Chairul Hamsy](https://github.com/MuhammadChairulHamsy)**