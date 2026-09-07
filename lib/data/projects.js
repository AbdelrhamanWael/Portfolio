export const projects = [
  {
    id: "converso-ai-lms",
    title: "Converso - AI Companion LMS SaaS",
    description: "A next-generation Learning Management System that integrates interactive AI companions for dynamic learning.",
    longDescription: "Converso is a next-generation Learning Management System (LMS) that integrates interactive AI companions to create personalized, engaging, and dynamic learning experiences. Engage with intelligent voice and text companions powered by Vapi AI. Browse, search, and filter a wide variety of AI companions tailored to specific subjects. Bookmark favorites, track session history, and unlock premium subscriptions via Stripe billing.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Clerk", "Supabase", "Vapi AI"],
    image: "/images/Screenshot 2026-07-20 123650.png",
    gallery: [
      "/images/Screenshot 2026-07-20 123650.png",
      "/images/Screenshot 2026-07-20 123707.png",
      "/images/Screenshot 2026-07-20 123736.png",
      "/images/Screenshot 2026-07-20 124703.png",
      "/images/Screenshot 2026-07-20 124721.png"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/AbdelrhamanWael/LMS-SaaS-App.git",
    category: "Full Stack",
    features: [
      "AI-Powered Companions (Voice & Text via Vapi AI)",
      "Companion Library with advanced filtering",
      "Personalized Journey (Bookmarks & Session History)",
      "Premium Subscriptions via Stripe (Clerk Billing)",
      "Modern UI/UX with glassmorphism and micro-animations",
      "Next.js App Router, Supabase PostgreSQL & Sentry"
    ],
    role: "Full Stack Developer",
    duration: "Recent",
    featured: true
  },
  {
    id: "rag-chatbot-dashboard",
    title: "Customer Support RAG — Intelligent Chatbot Dashboard",
    description:
      "A real-time MLOps monitoring dashboard for a Retrieval-Augmented Generation (RAG) chatbot.",
    longDescription:
      "A real-time MLOps monitoring dashboard for a Retrieval-Augmented Generation (RAG) customer-support chatbot. Tracks query performance, model experiments, pipeline stages, embedding schedules, and more — all in a beautiful, dark-themed UI. Features live auto-polling and graceful fallback for seamless data fetching.",
    tech: ["React 19", "Vite", "Tailwind CSS v4", "Recharts 3", "MLOps"],
    image: "/images/Screenshot 2026-06-16 202016.png",
    gallery: [
      "/images/Screenshot 2026-06-16 202016.png",
      "/images/Screenshot 2026-06-16 202051 - Copy.png",
      "/images/Screenshot 2026-06-16 202036.png",
      "/images/Screenshot 2026-06-16 202051.png"
    ],
    liveUrl: "https://customer-support-rag-powered-intell.vercel.app/",
    githubUrl: "https://github.com/AbdelrhamanWael/Dashboard",
    category: "Frontend UI",
    features: [
      "Live query logs and RAGAS scores monitoring",
      "Hourly latency & satisfaction timeline charts",
      "MLflow-style experiment tracker with param comparison",
      "Embedding schedule and knowledge-base indexing status",
      "Stage-by-stage RAG pipeline progress bar",
      "Auto-polling live connection with graceful fallback"
    ],
    role: "Frontend Developer",
    duration: "Recent",
  },
  {
    id: "studyco-frontend",
    title: "StudyCo Frontend - Bilingual Landing Page",
    description:
      "A modern, high-performance, bilingual landing page built for StudyCo, an educational consulting agency, using Next.js 16 and Tailwind CSS v4.",
    longDescription:
      "A modern, high-performance, bilingual landing page built for StudyCo, an educational consulting agency dedicated to helping students (especially from Indonesia) achieve their dreams of studying abroad in top universities. Features full support for both Arabic (ar) and Indonesian (id) languages with dynamic RTL/LTR layout adjustments using i18next.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion", "i18next", "TypeScript"],
    image: "/images/ar.png",
    gallery: [
      "/images/ar.png",
      "/images/id.png",
    ],
    liveUrl: "https://study-co-beta.vercel.app/ar ",
    githubUrl: "https://github.com/AbdelrhamanWael/StudyCo.git",
    category: "Frontend UI",
    features: [
      "Bilingual Support (RTL & LTR) with Arabic and Indonesian",
      "Modern UI with glassmorphism, gradients, and clean typography",
      "Engaging scroll animations and hover effects via Framer Motion",
      "Next.js App Router for optimal performance and SEO",
      "React 19 ready with Babel React Compiler",
      "Fully responsive design for all devices"
    ],
    role: "Frontend Developer",
    duration: "Recent",
  },
  {
    id: "medichat-ai",
    title: "MediChat AI - Full-Stack Medical Chatbot",
    description:
      "A production-ready Medical Chatbot built with Python/Flask, React/Vite, Langchain, and Google Gemini (RAG).",
    longDescription:
      "A production-ready full-stack Medical Chatbot built using a Python/Flask backend and a modern React/Vite frontend. It uses Langchain, HuggingFace Embeddings, Pinecone Vector Database, and Google's Generative AI (Gemini) to perform Retrieval-Augmented Generation (RAG) based on uploaded medical documents.",
    tech: ["React", "Flask", "LangChain", "Gemini", "Pinecone", "Tailwind CSS"],
    image: "/images/Screenshot 2026-07-08 215403.png",
    gallery: [
      "/images/Screenshot 2026-07-08 215457.png",
      "/images/Screenshot 2026-07-08 220107.png"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/AbdelrhamanWael/Medical-Chatbot",
    category: "AI & Agents",
    features: [
      "Retrieval-Augmented Generation (RAG) pipeline for medical context",
      "Google Gemini & LangChain AI integration",
      "Pinecone Vector Database for similarity searches",
      "Python/Flask robust REST API backend",
      "React, Tailwind CSS v4 & Framer Motion modern frontend",
      "HuggingFace sentence embeddings integration"
    ],
    role: "Full Stack AI Engineer",
    duration: "Recent",
  },
  {
    id: "ecommerce-amazon-clone",
    title: "E-Commerce Platform – Amazon Clone",
    description:
      "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
    longDescription:
      "A comprehensive e-commerce platform inspired by Amazon, built from the ground up with a modern tech stack. Features fully functional shopping experience including product browsing with advanced filters, shopping cart management, user authentication, and secure checkout with Stripe integration. Admin panel provides real-time inventory tracking, order management, and analytics dashboard with sales metrics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/images/amazon-five-alpha.vercel.app_.png",
    gallery: ["/images/amazon-five-alpha.vercel.app_.png"],
    liveUrl: "https://lnkd.in/eYG3vTbS",
    githubUrl: "https://github.com/Mohamedghanem2002/ecommerce-amazon.git",
    category: "Full Stack",
    features: [
      "Product listing with search and filter functionality",
      "Shopping cart with real-time price calculation",
      "Secure payment processing via Stripe",
      "User authentication and profile management",
      "Responsive design for all devices",
      "Admin dashboard with analytics",
    ],
    role: "Full Stack Developer",
    duration: "3 months",
  },
  {
    id: "task-management-system",
    title: "Task Management System",
    description:
      "A collaborative task and project management platform with Firebase authentication, real-time updates, and a clean dashboard UI.",
    longDescription:
      "Built during my internship at DevWave, this task management system provides a seamless experience for managing projects and tasks. Features a modern dashboard with drag-and-drop task organization, real-time collaboration through Firebase Realtime Database, and comprehensive authentication system.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "React Router", "Context API"],
    image: "/images/crud-opration-iota.vercel.app_.png",
    gallery: ["/images/crud-opration-iota.vercel.app_.png"],
    liveUrl: "https://crud-opration-iota.vercel.app/",
    githubUrl: "https://github.com/Mohamedghanem2002/crud-opration",
    category: "Frontend UI",
    features: [
      "Full CRUD operations for task management",
      "Firebase authentication (Email/Password & Google)",
      "Real-time data synchronization",
      "Clean and intuitive dashboard UI",
      "Task filtering and sorting capabilities",
      "Context API for state management",
    ],
    role: "Frontend Developer (Intern at DevWave)",
    duration: "2 months",
  },
  {
    id: "medical-center-website",
    title: "Medical Center Website & Dashboard",
    description:
      "A complete medical center web application with client-facing website and admin dashboard built with React and Firebase.",
    longDescription:
      "A full-featured medical center platform consisting of a public-facing website and an admin management dashboard. The client website showcases medical services, doctor profiles with specializations, appointment booking functionality, and patient testimonials.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/images/deluxe-moonbeam-d6009c.netlify.app_.png",
    gallery: ["/images/deluxe-moonbeam-d6009c.netlify.app_.png"],
    liveUrl: "https://deluxe-moonbeam-d6009c.netlify.app/",
    githubUrl: "https://github.com/AbdelrhamanWael/Appointment-Center.git",
    category: "Frontend UI",
    features: [
      "Dynamic doctor listings with specializations",
      "Appointment booking system",
      "Admin dashboard for content management",
      "Responsive design for mobile and desktop",
      "Firebase authentication for secure access",
      "Service pages with detailed descriptions",
    ],
    role: "Full Stack Developer",
    duration: "2.5 months",
  },
  {
    id: "movie-discovery-app",
    title: "Movie Discovery App",
    description:
      "A modern movie discovery platform with TMDB API integration, Firebase auth, trailer playback, and Netflix-style UI.",
    longDescription:
      "A Netflix-inspired movie discovery application that leverages the TMDB API to deliver a rich browsing experience. Users can explore trending movies, search by genre, view detailed movie information including trailers and cast details, and save favorites.",
    tech: ["React", "Vite", "Firebase", "TMDB API", "CSS3"],
    image: "/images/www.netflix.com_eg-en_.png",
    gallery: ["/images/www.netflix.com_eg-en_.png"],
    liveUrl: "https://netflix-clone-psi-nine.vercel.app/",
    githubUrl: "https://github.com/AbdelrhamanWael/Netflix-Clone.git",
    category: "Frontend UI",
    features: [
      "Browse movies by genre and trending",
      "Real-time movie data from TMDB API",
      "Firebase user authentication",
      "Movie trailer playback",
      "Search functionality with filters",
      "Responsive Netflix-style UI",
    ],
    role: "Frontend Developer",
    duration: "1.5 months",
  },
  {
    id: "zentry-gaming-website",
    title: "Zentry Gaming Website",
    description:
      "An immersive Awwwards-winning style gaming website with advanced GSAP animations, 3D effects, and bento-style layout.",
    longDescription:
      "Built from scratch using React 19, Vite, and Tailwind CSS v4 with a focus on delivering an Awwwards-level visual experience. Features dynamic hero with multi-video transitions, scroll-triggered clip-path morphing, interactive 3D tilt effects on bento cards.",
    tech: ["React 19", "Vite", "Tailwind CSS v4", "GSAP", "ScrollTrigger"],
    image: "/images/Animmated.png",
    gallery: [
      "/images/Animmated.png",
      "/images/Screenshot 2026-02-12 135000.png",
      "/images/Screenshot 2026-02-12 135033.png",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/AbdelrhamanWael/zentry-animated-website.git",
    category: "Frontend UI",
    features: [
      "Dynamic hero with multi-video transitions and click-to-expand GSAP animations",
      "Scroll-triggered clip-path morphing from polygon to full-screen",
      "Interactive 3D tilt effect on bento cards using mouse-position tracking",
      "Floating image with real-time mouse-driven GSAP transforms",
      "Reusable AnimatedTitle component with per-word 3D rotation",
      "Sticky navbar with scroll-direction detection and smooth transitions",
    ],
    role: "Frontend Developer",
    duration: "2 months",
  },
  {
    id: "aspnet-blog-application",
    title: "ASP.NET Core Blog Application",
    description:
      "A modern blog application with ASP.NET Core MVC, Entity Framework, role-based auth, glassmorphism UI, and full CRUD.",
    longDescription:
      "Built from scratch using ASP.NET Core 9.0 MVC with Entity Framework Core and SQL Server. Implements secure user authentication and role-based authorization using ASP.NET Core Identity with Admin and User roles.",
    tech: ["C#", "ASP.NET Core 9.0", "Entity Framework Core", "SQL Server", "ASP.NET Identity", "Razor Views"],
    image: "/images/Blog App.png",
    gallery: [
      "/images/Blog App.png",
      "/images/Screenshot_12-2-2026_18474_localhost.jpeg",
      "/images/Screenshot_12-2-2026_184623_localhost.jpeg",
      "/images/Screenshot_12-2-2026_184638_localhost.jpeg",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/AbdelrhamanWael/aspnet-blog-app.git",
    category: "Full Stack",
    features: [
      "Secure authentication & authorization with ASP.NET Core Identity",
      "Full CRUD operations for blog posts with rich text content",
      "Featured image upload system with server-side file management",
      "Dynamic category filtering to browse posts by topic",
      "Interactive commenting system with admin moderation",
      "Premium dark-themed UI with glassmorphism and gradients",
    ],
    role: "Backend Developer",
    duration: "1 month",
  },
  {
    id: "trainhub-api",
    title: "TrainHub API",
    description: "Production-deployed RESTful API for managing a training center with 3-tier RBAC and full analytics.",
    longDescription: "A comprehensive RESTful API built with ASP.NET Core 10 and Clean Architecture for managing a training center. Handles students, instructors, tracks, enrollments, payments, and analytics reports. Features a 3-tier Role-Based Access Control (Admin, Instructor, Student), full audit trail via Activity Log, and extensive analytics dashboards.",
    tech: ["ASP.NET Core 10", "EF Core 10", "SQL Server", "JWT", "Swagger/OpenAPI", "Clean Architecture"],
    image: "/images/Blog App.png",
    gallery: [],
    liveUrl: "https://training-center-api.runasp.net/swagger/index.html",
    githubUrl: "https://github.com/AbdelrhamanWael/trainhub-api",
    category: "Backend Systems",
    features: [
      "JWT Authentication + BCrypt password hashing",
      "Role-Based Access Control (Admin / Instructor / Student)",
      "Full CRUD with soft-delete and server-side pagination",
      "Payment system with status tracking",
      "8 analytics report endpoints (revenue, capacity, workload, etc)",
      "Global exception middleware for consistent error responses"
    ],
    role: "Backend Developer",
    duration: "2 months",
  },
  {
    id: "techmaster-ticketing",
    title: "TechMaster - Support Ticketing Platform",
    description: "Enterprise-grade SaaS support ticketing backend using CQRS pattern and Clean Architecture.",
    longDescription: "An enterprise-grade SaaS support ticketing backend designed to replace scattered email support with a structured, auditable system. Supports SLA enforcement, role-based ticket ownership, and complete lifecycle tracking from creation through resolution.",
    tech: ["ASP.NET Core 8", "MediatR (CQRS)", "EF Core", "ASP.NET Identity", "FluentValidation", "Scalar OpenAPI"],
    image: "/images/Screenshot 2026-09-07 083336.png",
    gallery: [
      "/images/Screenshot 2026-09-07 083336.png",
      "/images/erd-diagram.png"

    ],
    liveUrl: "https://support-ticketing-api.runasp.net/scalar/v1",
    githubUrl: "https://github.com/AbdelrhamanWael/Support-Ticketing-Platform",
    category: "Backend Systems",
    features: [
      "4-tier RBAC (Admin / SupportLead / Agent / Customer)",
      "SLA policy configuration and risk reporting",
      "Agent workload and performance reports",
      "Internal notes system (agent-only comments)",
      "Customer ticket history and full lifecycle tracking",
      "Comprehensive Unit and Integration test suite"
    ],
    role: "Backend Developer",
    duration: "2 months",
  }
];

export const filters = ["All", "AI & Agents", "Full Stack", "Backend Systems", "Frontend UI"];

import { supabase } from "@/lib/supabase";

export async function fetchProjectsFromSupabase() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return projects;
    }

    return data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      longDescription: row.long_description || row.description,
      tech: Array.isArray(row.tech) ? row.tech : [],
      image: row.image,
      gallery: Array.isArray(row.gallery) ? row.gallery : [],
      liveUrl: row.live_url || "",
      githubUrl: row.github_url || "",
      category: row.category,
      features: Array.isArray(row.features) ? row.features : [],
      role: row.role,
      duration: row.duration,
      featured: Boolean(row.featured),
    }));
  } catch (err) {
    console.error("Error fetching projects from Supabase, using fallback:", err);
    return projects;
  }
}