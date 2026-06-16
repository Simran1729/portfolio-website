import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "escrowia",
    title: "Escrowia",
    period: {
      start: "03.2026",
    },
    link: "https://dev-app.escrowia.ae/login/",
    skills: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Table",
    ],
    description: `Built a production-grade escrow platform supporting KYC/KYB onboarding, contract creation, and contract lifecycle management.
- Architected the frontend from scratch, implementing authentication, protected routes, API integration layers, state management, and reusable UI systems.
- Developed multi-step onboarding workflows with document uploads, draft persistence, progress tracking, and validation using React Hook Form and Zod.
- Implemented contract workflows including amendments, disputes, and status-based transitions while integrating 20+ REST APIs.`,
    isExpanded: true,
  },
  {
    id: "scribe",
    title: "Scribe",
    period: {
      start: "05.2026",
    },
    link: "https://github.com/simran1729/scribe",
    skills: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma"],
    description: `Architected and developed a developer-focused publishing platform enabling users to create, manage, and share technical articles and knowledge resources.
- Built a developer-focused publishing platform with JWT authentication, refresh tokens, email verification, and RBAC.
- Designed PostgreSQL schemas supporting blogs, comments, likes, followers, tags, and user activity tracking.
- Implemented nested comments, follow/following systems, and content engagement features using Prisma ORM.
- Architected the backend as a modular monolith with Zod validation and structured logging using Pino.
- Implementing feed generation and cursor-based pagination to support scalable content discovery and user engagement workflows.
`,
    isExpanded: true,
  },
  //   {
  //     id: "nexus-code",
  //     title: "Nexus Code",
  //     period: {
  //       start: "01.2024",
  //     },
  //     link: "https://github.com/Simran1729/Nexus-Code",
  //     skills: [
  //       "React.js",
  //       "Node.js",
  //       "Express.js",
  //       "Piston",
  //       "WebSockets",
  //       "TypeScript",
  //       "Socket.io",
  //     ],
  //     description: `Built a real-time collaborative IDE enabling users to join shared rooms and live-sync code across sessions.
  // - Integrated live code editing, chat messaging, improving real-time coding coordination by up to 90%.
  // - Added a visual canvas mode for collaborative white boarding – supporting instant sync across connected users.`,
  //     isExpanded: true,
  //   },
]
