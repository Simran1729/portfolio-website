import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Simran",
  lastName: "Bhatnagar",
  displayName: "Simran Bhatnagar",
  username: "Simran1729",
  gender: "female",
  pronouns: "she/her",
  bio: "Full Stack Software Engineer with experience building scalable web applications.",
  flipSentences: [
    "Building things for the web.",
    "Interested in systems & products.",
    "Full-Stack Developer",
    "Creating with code.",
  ],
  address: "Chandigarh, India",
  phoneNumber: "KzkxIDk1MDEyMDY1ODU=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YmhhdG5hZ2Fyc2ltcmFuMTMwNkBnbWFpbC5jb20=", // base64 encoded
  website: "https://github.com/Simran1729",
  jobTitle: "Software Developer",
  jobs: [
    {
      title: "Software Developer",
      company: "LDT Technology",
      website: "https://github.com/Simran1729",
      experienceId: "ldt-technology",
    },
  ],
  about: `
- Full Stack Software Engineer with experience building scalable web applications using Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and modern web technologies.
- Skilled in authentication systems, REST APIs, frontend architecture, and full-stack application development.

`,
  avatar: "https://avatars.githubusercontent.com/u/90986438?v=4",
  avatarVariants: {
    lightOff: "https://avatars.githubusercontent.com/u/90986438?v=4",
    lightOn: "https://avatars.githubusercontent.com/u/90986438?v=4",
    darkOff: "https://avatars.githubusercontent.com/u/90986438?v=4",
    darkOn: "https://avatars.githubusercontent.com/u/90986438?v=4",
  },
  ogImage: "https://avatars.githubusercontent.com/u/90986438?v=4",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Simran",
    "Simran1729",
    "software engineer",
    "full-stack developer",
  ],
  dateCreated: "2024-01-01",
}
