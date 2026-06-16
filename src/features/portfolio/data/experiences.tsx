import { CodeXmlIcon, GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "ldt-technology",
    companyName: "LDT Technology",
    positions: [
      {
        id: "1",
        title: "Software Developer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Contributed to multiple production applications including School Management Systems, Loan Management Systems, and other client platforms.\n- Built and maintained frontend modules for a fintech escrow platform using Next.js, TypeScript, TanStack Query, Zustand, React Hook Form, Zod, and Tailwind CSS.\n- Established frontend architecture from scratch, including project structure, API integrations, authentication, route protection, and reusable components.\n- Developed KYC/KYB onboarding, document workflows, and multi-step forms with validation and draft persistence.\n- Implemented contract lifecycle features including approvals, amendments, disputes, and status-based workflows through 20+ REST API integrations.\n- Collaborated on backend design for third-party integrations involving transactions, webhooks, and data synchronization.\n- Performed PR reviews, code merges, Docker deployments on EC2, and mentored junior interns.",
        skills: [
          "Next.js",
          "TypeScript",
          "TanStack Query",
          "Zustand",
          "Zod",
          "Tailwind CSS",
          "Docker",
          "EC2",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "helios-tech-labs",
    companyName: "Helios Tech Labs",
    positions: [
      {
        id: "1",
        title: "Software Development Intern",
        employmentPeriod: {
          start: "12.2024",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Collaborated with a team to build custom workflow tools and interactive widgets using Node.js and React.js.
- Developed a voice-activated ticketing system with React.js and Express.js, integrating OpenAI Whisper and GPT to cut manual effort by ~70%.
- Engineered a batch-processing pipeline in Node.js to ingest Excel exports from a legacy RC system, automating updates for 100+ project entries with rate-limit handling.
- Leveraged Postman, GitHub, and internal API docs for seamless integration testing and version control.
- Delivered fully functional modules aligned with client needs for production deployment.`,
        skills: [
          "Node.js",
          "React.js",
          "Express.js",
          "OpenAI Whisper",
          "OpenAI GPT",
          "Postman",
          "GitHub",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Lyallpur Khalsa College Technical Campus, Jalandhar",
        employmentPeriod: {
          start: "07.2021",
          end: "07.2025",
        },
        icon: <GraduationCapIcon />,
        description: `- BTech CSE
- CGPA: 8.29/10
- Relevant Coursework: Data Structure & Algorithms, Operating Systems, Computer Architecture, Python, C++, DBMS, Computer Networks, Finite Automata, Machine Learning, Artificial Intelligence`,
        skills: [
          "C++",
          "Python",
          "Data Structures",
          "Algorithms",
          "DBMS",
          "Machine Learning",
        ],
        isExpanded: true,
      },
    ],
  },
]
