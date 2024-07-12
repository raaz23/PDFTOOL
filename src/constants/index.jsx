import {
  FileText,
  MessageCircle,
  Lock,
  Repeat,
  Image,
  FastForward,
  FilePlus,
  PrinterCheck
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.avif";
import user2 from "../assets/profile-pictures/user2.avif";
import user3 from "../assets/profile-pictures/user3.avif";
import user4 from "../assets/profile-pictures/user4.avif";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpeg";


export const navItems = [
  { label: "Home", href: "#" },
  { label: "Tools", href: "#tools" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "Rahul Gupta",
    company: "TechSavvy India",
    image: user1,
    text: "I am extremely impressed with PDFTOOL's services. The platform's intuitive design and seamless functionality make it a must-have for anyone dealing with PDF files.",
  },
  {
    user: "Nitin Sharma",
    company: "Digital Bharat",
    image: user2,
    text: "PDFTOOL has been a game-changer for us. It simplifies complex tasks like merging and converting PDFs into quick, easy steps. Highly recommended and i suggest to use it!",
  },
  {
    user: "Sanjay Patel",
    company: "TechGenius Solutions",
    image: user3,
    text: "Working with PDFTOOL has been a delight. Their commitment to quality and user-friendly interface sets them apart. They truly understand the needs of Indian users.",
  },
  {
    user: "Anish Verma",
    company: "Innovate India Tech",
    image: user4,
    text: "PDFTOOL has revolutionized how we manage documents. The tools are robust, efficient, and perfect for businesses looking to streamline their document workflows.",
  },
  {
    user: "Amit Kumar",
    company: "SmartSoft India",
    image: user5,
    text: "I've found PDFTOOL incredibly helpful in my daily tasks. Whether it's compressing PDFs or extracting pages, it's a versatile tool that meets all our document needs. A great platform to easily do pdf task.",
  },
  {
    user: "Subham Singh",
    company: "TechInnovate Labs",
    image: user6,
    text: "The team behind PDFTOOL deserves applause for their dedication to improving document management. Their tools are indispensable for professionals across India.",
  },
];


export const features = [
  {
    icon: <FileText />,
    text: "Editing and Modifying Text",
    description: "Edit text directly, customize fonts, sizes, and colors."
  },
  {
    icon: <MessageCircle />,
    text: "Annotating and Commenting",
    description: "Add comments, notes, highlights, and markups."
  },
  {
    icon: <FilePlus />,
    text: "Adding and Removing Pages",
    description: "Add, delete, or rearrange pages easily. Merge PDFs."
  },
  {
    icon: <Lock />,
    text: "Securing Documents",
    description: "Add passwords and encryption. Sign documents digitally."
  },
  {
    icon: <Repeat />,
    text: "Converting Files",
    description: "Convert PDFs to/from Word, Excel, PowerPoint, and images."
  },
  {
    icon: <Image />,
    text: "Enhancing Visuals",
    description: "Insert images, videos, and links. Compress file sizes."
  },
  {
    icon: <FastForward />,
    text: "Automating Processes",
    description: "Use batch processing and integrate with other tools."
  },
  {
    icon:<PrinterCheck />,
    text: "Accessibility",
    description: "Create accessible PDFs. Add bookmarks and hyperlinks."
  },
];


export const checklistItems = [
  { title: 'Merge PDFs with Ease', description: 'Combine multiple PDF files into one seamless document quickly and effortlessly.' },
{ title: 'Compress PDFs for Easy Sharing', description: 'Reduce the file size of your PDFs while maintaining high quality for faster sharing and storage.' },
{ title: 'Convert PDFs to Other Formats', description: 'Easily convert PDFs to Word, Excel, PowerPoint, and other formats, and vice versa.' },
{ title: 'Secure Your PDFs', description: 'Protect your PDF documents with passwords and encryption to ensure your data remains safe.' }

];

export const plans = [
  {
    name: "Free",
    mPrice: 0,
    yPrice:0,
    features: [
      "Merge PDFs",
      "Split PDFs",
      "Compress PDFs",
      "Convert to Word",
      "Convert to Excel",
     
    ],
  },
  {
    name: "Pro",
    mPrice: 12,
    yPrice:48,
    features: [
      "All Free features",
      "No ads",
      "Unlimited file sizes",
      "Batch processing",
      "OCR for scanned PDFs",
      "Priority support",
      
    ],
    type:"popular"
  },
  {
    name: "Business",
    mPrice: 40,
    yPrice:120,
    features: [
      "All Pro features",
      "Team management",
      "Advanced security",
      "Centralized billing",
      "No Ads",
      "Dedicated support",
      "Rotate PDFs",
      "Unlock PDFs",
      "Watermark PDFs",
    ],
  },
];



export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];