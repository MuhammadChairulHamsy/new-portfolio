import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "mach.hamsy@gmail.com",
    link: "mailto:hello@yourmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 89649945443",
    link: "tel:+6281234567890",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Binjai, Sumatra Utara, Indonesia",
    link: "https://maps.google.com",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/MuhammadChairulHamsy/",
    color: "hover:text-slate-100",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    color: "hover:text-sky-400",
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://facebook.com/yourusername",
    color: "hover:text-blue-500",
  },
];
