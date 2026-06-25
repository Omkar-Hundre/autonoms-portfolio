export const PROJECTS = [
  // 1. CRM / ERPs
  {
    id: "cosem",
    title: "COSEM — Industrial Quotation ERP",
    category: "CRM / ERP",
    description:
      "Offline-first desktop app and web portal that reduced industrial quotation time from 7 days to 5 minutes. Deployed in major hydraulic manufacturing firms.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A dual-architecture system — secure Electron desktop app for factory operators (works offline) and a centralized React portal for management. Handles dynamic cost calculations, nested assemblies, and automated document generation.",
    technologies: ["Electron", "React", "Supabase", "PostgreSQL"],
    highlights: [
      "7 days → 5 minutes quotation time",
      "Offline-first with background cloud sync",
      "Nested assembly tree with dynamic pricing",
      "Deployed in 3 industrial manufacturing units",
    ],
    liveUrl: "https://youtu.be/iWkT6TT8JnM",
    githubUrl: null,
  },
  {
    id: "crescent-rems",
    title: "Crescent REMS & ERP",
    category: "CRM / ERP",
    description:
      "Comprehensive Real Estate Management System and ERP for tracking properties, leads, and operational workflows.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A full-scale enterprise resource planning solution tailored for the real estate sector. Centralizes property inventory, customer relationship management (CRM), and sales pipelines into a single, cohesive dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Cloud Deployment"],
    highlights: [
      "Real estate inventory management",
      "Integrated CRM and sales pipelines",
      "Custom workflow automation",
      "Enterprise-grade security",
    ],
    liveUrl: null,
    githubUrl: null,
  },

  // 2. Web Applications
  {
    id: "thinksoul-lms",
    title: "ThinkSoul LMS",
    category: "Mobile App",
    description:
      "Multi-tenant learning management system with live collaborative wikis, Kanban boards, and strict multi-tier permissions.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A real-time learning platform built for startup incubators. Combines Notion-style document editing, interactive Kanban boards, and a live admin dashboard — all synchronized instantly via WebSockets.",
    technologies: ["Next.js", "Supabase", "Tailwind", "AWS", "PostgreSQL"],
    highlights: [
      "Notion-style block editing with real-time sync",
      "Drag-and-drop Kanban with instant persistence",
      "Multi-tier RBAC with middleware-protected routes",
      "Live admin dashboard tracking cohort progress",
    ],
    liveUrl: "https://thinksoul.in",
    githubUrl: null,
  },
  {
    id: "jain-bus-tracking",
    title: "Jain Bus Tracking System",
    category: "Web Application",
    description:
      "Multi-role bus tracking platform for college — students, drivers, and admins with live GPS tracking and ETA. Adopted college-wide.",
    image: "https://images.unsplash.com/photo-1570125909517-53cb21c89f28?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A real-time transportation management system with role-based access for students, drivers, and administrators. Features live GPS tracking, route management, driver assignments, and occupancy updates — deployed across the college transport system.",
    technologies: ["Firebase", "HTML/CSS", "JavaScript", "Geolocation"],
    highlights: [
      "Live GPS tracking with ETA",
      "Multi-role access (students, drivers, admins)",
      "Real-time route editing and driver assignments",
      "Adopted by entire college transport system",
    ],
    liveUrl: "https://omkar-hundre.github.io/bustrackjce/",
    githubUrl: "https://github.com/Omkar-Hundre/bustrackjce",
  },

  // 3. AI / Automation Workflows
  {
    id: "funnel-lead-engine",
    title: "Funnel — Lead Generation Engine",
    category: "AI / Automation",
    description:
      "Automated lead discovery and enrichment pipeline that scrapes, classifies, scores, and deduplicates business leads 24/7.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A continuous lead-generation engine with three layers: discovery (structured web scraping), enrichment (contact extraction and scoring via AI), and pipeline (deduplication, Excel/Sheets sync). Runs as a persistent background service.",
    technologies: ["Python", "Playwright", "Pandas", "Gemini API"],
    highlights: [
      "24/7 continuous lead discovery",
      "AI-powered lead scoring and classification",
      "Automatic deduplication and Excel sync",
      "Smart business categorization",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "olai",
    title: "OLAI — AI-Native Automation",
    category: "AI / Automation",
    description:
      "Visual node-based automation platform where users build AI workflows by connecting modular blocks — no code required.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A zero-code automation playground with a dual-file delivery system: JSON config for frontend node generation and TypeScript handlers for custom backend logic. Supports Python, PowerShell, Bash, and Node.js runtimes.",
    technologies: ["TypeScript", "Node.js", "Python", "AI/ML"],
    highlights: [
      "Visual node-based workflow builder",
      "Zero-code — JSON config + TypeScript handlers",
      "Multi-runtime support (Python, Bash, Node.js)",
      "Registered under MSME Udyam",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "llm-noapi-automation",
    title: "LLM No-API Automation",
    category: "AI / Automation",
    description:
      "Browser automation framework that operates LLMs and messaging platforms without official APIs — WhatsApp, Gmail, and more.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A modular plugin system with shared browser management and a unified REST API. Automates WhatsApp messaging, Gmail operations, and other platforms through browser-level interaction — no API keys required.",
    technologies: ["Node.js", "Puppeteer", "REST API", "WebSockets"],
    highlights: [
      "Modular plugin architecture",
      "WhatsApp + Gmail automation",
      "Unified REST API for all plugins",
      "Shared browser instance management",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "ai-patient-monitoring",
    title: "AI-Powered Patient Monitoring",
    category: "AI / ML",
    description:
      "System monitoring patient vitals, movement, and behavior using live camera and sensor data with ML models trained on patient habits.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "Uses computer vision and sensor fusion to monitor patients in real-time. ML models learn individual patient behavior patterns and provide spoken feedback, triggering emergency responses and caregiver notifications on detecting risky behavior.",
    technologies: ["Python", "OpenCV", "ML", "Sensors", "Speech"],
    highlights: [
      "Real-time computer vision monitoring",
      "ML models trained on individual patient habits",
      "Spoken feedback and emergency alerts",
      "Caregiver notification system",
    ],
    liveUrl: "https://youtu.be/h3A_OyecCoY",
    githubUrl: "https://github.com/Omkar-Hundre/AegisAI",
  },

  // 4. Mobile Apps & Desktop
  {
    id: "leocliq",
    title: "LeoCliq",
    category: "Mobile App",
    description:
      "Full-stack mobile application with a creator portal, push notifications, and Supabase backend — built for content creators and their communities.",
    image: "https://images.unsplash.com/photo-1611746872915-43089b418653?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A mobile-first platform connecting content creators with their communities. Features a dedicated creator portal, real-time push notifications, and a scalable Supabase backend with Row Level Security.",
    technologies: ["React Native", "Supabase", "PostgreSQL", "Push Notifications"],
    highlights: [
      "Creator portal with analytics dashboard",
      "Real-time push notification system",
      "Supabase RLS for data isolation",
      "Cross-platform mobile deployment",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "rlink-remote-desktop",
    title: "RLink — Remote Desktop",
    category: "Desktop + Mobile",
    description:
      "Control your Windows PC from your Android phone — no port forwarding needed. Streams at 60FPS with hardware-accelerated encoding and maps every touch perfectly.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A self-hosted remote desktop system streaming the entire desktop at 60FPS using NVIDIA NVENC, capturing system audio, and mapping touch input with pixel-perfect accuracy. Connects through Cloudflare Tunnel and authenticates via QR code pairing — no cloud services, no accounts.",
    technologies: ["Python", "Kotlin", "FFmpeg", "WebSockets", "Cloudflare"],
    highlights: [
      "60FPS hardware-accelerated streaming via NVENC",
      "Pixel-perfect touch mapping with virtual trackpad",
      "QR code pairing — zero accounts, zero cloud",
      "Privacy curtain blacks out physical monitor",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Omkar-Hundre",
  },

  // 5. Infrastructure
  {
    id: "zorabase",
    title: "Zorabase Real-time Cloud",
    category: "Infrastructure",
    description:
      "High-performance Firebase alternative supporting 1500+ concurrent connections via optimized multi-threading with real-time security rules.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    longDescription:
      "A custom real-time database engine built from scratch. Implements WebSocket-based data synchronization, a security rules engine, and a centralized monitoring dashboard — handling 1500+ simultaneous connections.",
    technologies: ["Python", "Redis", "WebSocket", "Multi-threading"],
    highlights: [
      "1500+ concurrent connections",
      "Custom security rules engine",
      "Zero-latency WebSocket sync",
      "Centralized health monitoring dashboard",
    ],
    liveUrl: "https://zorabase-demo.vercel.app/",
    githubUrl: "https://github.com/Omkar-Hundre",
  },
];
