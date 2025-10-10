import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@yourmail.com",
    link: "mailto:hello@yourmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 812 3456 7890",
    link: "tel:+6281234567890",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Palangkaraya, Indonesia",
    link: "https://maps.google.com",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/yourusername",
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
