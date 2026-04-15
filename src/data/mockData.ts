import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";

export type EventTag = "tech" | "workshop" | "seminar" | "competition" | "cultural";

export interface FeedEvent {
  id: string;
  type: "event" | "highlight" | "startup" | "society";
  title: string;
  description: string;
  image?: string;
  date: string;
  time?: string;
  tags: EventTag[];
  likes: number;
  comments: number;
  society?: string;
  isUrgent?: boolean;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  tags: EventTag[];
}

export interface Society {
  id: string;
  name: string;
  members: number;
  image?: string;
}

export const events: FeedEvent[] = [
  {
    id: "1",
    type: "event",
    title: "AI & Machine Learning Workshop",
    description: "Hands-on session on building ML models with TensorFlow. Open to all departments.",
    image: event2,
    date: "2026-04-17",
    time: "2:00 PM",
    tags: ["tech", "workshop"],
    likes: 124,
    comments: 18,
    society: "Tech Society",
    isUrgent: true,
  },
  {
    id: "2",
    type: "highlight",
    title: "Hackathon 2026 Highlights",
    description: "Relive the best moments from this year's 48-hour hackathon! 200+ participants, 50 teams.",
    image: event1,
    date: "2026-04-12",
    tags: ["tech", "competition"],
    likes: 312,
    comments: 45,
    society: "CS Department",
  },
  {
    id: "3",
    type: "event",
    title: "Entrepreneurship Seminar: From Idea to IPO",
    description: "Join industry leaders as they share their startup journeys and lessons learned.",
    image: event3,
    date: "2026-04-18",
    time: "10:00 AM",
    tags: ["seminar"],
    likes: 89,
    comments: 12,
    society: "E-Cell",
    isUrgent: true,
  },
  {
    id: "4",
    type: "society",
    title: "Drama Club Announces Spring Play Auditions",
    description: "Auditions for 'A Midsummer Night\'s Dream' begin next week. All years welcome!",
    date: "2026-04-14",
    tags: ["cultural"],
    likes: 67,
    comments: 23,
    society: "Drama Club",
  },
  {
    id: "5",
    type: "event",
    title: "Annual Cultural Fest - Spectrum 2026",
    description: "Three days of music, dance, art, and food. Registrations now open!",
    image: event4,
    date: "2026-04-20",
    time: "5:00 PM",
    tags: ["cultural"],
    likes: 456,
    comments: 78,
    society: "Cultural Committee",
  },
  {
    id: "6",
    type: "startup",
    title: "CampusEats Launches Delivery Service",
    description: "Student-run food delivery startup now serves all campus hostels. Order via app!",
    date: "2026-04-13",
    tags: ["tech"],
    likes: 201,
    comments: 34,
    society: "E-Cell",
  },
  {
    id: "7",
    type: "event",
    title: "Web Development Bootcamp",
    description: "5-day intensive bootcamp covering React, Node.js, and cloud deployment.",
    image: event2,
    date: "2026-04-19",
    time: "9:00 AM",
    tags: ["tech", "workshop"],
    likes: 156,
    comments: 21,
    society: "GDSC",
  },
  {
    id: "8",
    type: "highlight",
    title: "Inter-University Debate Championship Recap",
    description: "Our team secured 2nd place at the national level! Watch the highlights.",
    image: event3,
    date: "2026-04-11",
    tags: ["competition"],
    likes: 189,
    comments: 29,
    society: "Debate Society",
  },
];

export const startups: Startup[] = [
  { id: "s1", name: "CampusEats", description: "Food delivery for students, by students", logo: "🍕", tags: ["tech"] },
  { id: "s2", name: "StudyBuddy", description: "AI-powered study group matching", logo: "📚", tags: ["tech"] },
  { id: "s3", name: "GreenCampus", description: "Sustainability tracking for universities", logo: "🌱", tags: ["tech"] },
];

export const societies: Society[] = [
  { id: "so1", name: "Tech Society", members: 450 },
  { id: "so2", name: "Drama Club", members: 120 },
  { id: "so3", name: "E-Cell", members: 300 },
  { id: "so4", name: "GDSC", members: 380 },
  { id: "so5", name: "Debate Society", members: 95 },
  { id: "so6", name: "Cultural Committee", members: 200 },
];

export const allTags: EventTag[] = ["tech", "workshop", "seminar", "competition", "cultural"];

export const eventTypes = ["workshop", "seminar", "competition", "cultural"] as const;
