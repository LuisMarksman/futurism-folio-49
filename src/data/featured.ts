// Curated "hero" project showcase — the two flagship builds surfaced above the
// full project timeline so visitors see the best work without scrolling.
// Facts mirror src/data/projects.ts; copy here is tuned for the showcase.

export type FeaturedMedia = {
  type: "video" | "image" | "embed";
  src: string;
  /** Optional caption shown under gallery items. */
  label?: string;
};

export type SubProject = {
  title: string;
  /** Short role tag, e.g. "Manipulation". */
  tag: string;
  desc: string;
  media: FeaturedMedia;
  tech: string[];
  inProgress?: boolean;
};

export type FeaturedProject = {
  id: string;
  /** Display index, e.g. "01". */
  index: string;
  name: string;
  /** Expanded name / acronym meaning. */
  expansion?: string;
  tagline: string;
  description: string;
  accent: "purple" | "cyan";
  statusLabel?: string;
  highlights: string[];
  tech: string[];
  github?: string;
  /** Anchor to the matching entry in the timeline. */
  timelineHref?: string;
  /** For umbrella projects made of several sub-systems (VECTOR). */
  subProjects?: SubProject[];
  /** For single projects with a set of diagrams/screens (Eco Eats). */
  gallery?: FeaturedMedia[];
};

export const featured: FeaturedProject[] = [
  {
    id: "vector",
    index: "01",
    name: "VECTOR",
    expansion: "Virtual Engine for Control, Tasks & Operational Robotics",
    tagline:
      "A personal robotics + AI ecosystem — one brain across voice, vision, home automation and an autonomous robot.",
    description:
      "VECTOR is my most ambitious build: an autonomous robot with a wheeled chassis, a manipulator arm and an expressive robotic eye on top, driven by a self-hosted AI brain. You talk to it, and it plans and acts — controlling the home, answering questions, navigating, and picking & placing real-world objects. It's being built subsystem by subsystem, each a project in its own right.",
    accent: "purple",
    statusLabel: "In active development",
    highlights: [
      "Autonomous wheeled robot with a manipulator arm + expressive robotic eye",
      "Voice-driven control for tasks, home automation and the Hermes agent",
      "Vision-guided navigation and pick & place of real-world objects",
      "Self-hosted AI brain — no third-party cloud in the loop",
    ],
    tech: [
      "ESP32-S3",
      "ROS2",
      "Servo Control",
      "Inverse Kinematics",
      "LVGL",
      "Xiaozhi AI",
      "Google Gemini",
      "Home Automation",
      "Edge AI",
    ],
    github: "https://github.com/LuisMarksman/VECTOR",
    timelineHref: "#projects",
    subProjects: [
      {
        title: "Robotic Arm",
        tag: "Manipulation",
        desc: "Multi-DOF servo arm for smooth, coordinated motion and future vision-guided pick & place.",
        media: { type: "video", src: "/videos/robotic-arm-2026.mp4" },
        tech: ["Servo Control", "Embedded C", "Inverse Kinematics"],
        inProgress: true,
      },
      {
        title: "Robo Eye",
        tag: "Perception & personality",
        desc: "Expressive animated eye on a round display — VECTOR's face for attention and emotion.",
        media: { type: "video", src: "/videos/robo-eye-2026.mp4" },
        tech: ["ESP32", "GC9A01", "LVGL"],
        inProgress: true,
      },
      {
        title: "Voice Assistant",
        tag: "Interface",
        desc: "The conversational brain — spoken commands drive tasks, home automation and the robot.",
        media: {
          type: "embed",
          src: "https://drive.google.com/file/d/1f3Zb9w7XPZgTTMHA1O9i3rG_Kdn9eAL0/preview",
        },
        tech: ["ESP32-S3", "Xiaozhi AI", "Gemini"],
        inProgress: true,
      },
      {
        title: "Rover",
        tag: "Mobility",
        desc: "ESP32 4WD wheeled base — the mobile chassis that carries VECTOR's arm and eye, driven over WiFi from a browser.",
        media: { type: "video", src: "/videos/vector-rover-prototype.mp4" },
        tech: ["ESP32", "4WD Drive", "L298N", "WiFi Control"],
        inProgress: true,
      },
    ],
  },
  {
    id: "eco-eats",
    index: "02",
    name: "Eco Eats",
    expansion: "Perishable Food Rescue",
    tagline:
      "Hardware-AI logistics that rescues perishable food before it spoils.",
    description:
      "Eco Eats is a hardware-AI logistics platform for perishable food rescue. Instead of just listing donated food, it uses live IoT telemetry — MQ gas and DHT temperature/humidity sensors — to score freshness, decide whether food can still be delivered safely, and route it to demand centers before it becomes waste. The v1 intelligence layer is deterministic (Q10 spoilage logic + route/demand matching) rather than ML-based.",
    accent: "cyan",
    highlights: [
      "IoT freshness scoring from MQ gas + DHT sensors (Q10 spoilage logic)",
      "Deterministic hardware-AI dispatch engine — feasibility checks + claim locking",
      "Route optimization via Nominatim, OSRM & OpenStreetMap",
      "Donor & receiver dashboards plus a freshness simulation lab",
    ],
    tech: [
      "React 19",
      "Vite",
      "Leaflet",
      "Node.js",
      "Express 5",
      "MongoDB",
      "OSRM",
      "MQ Gas Sensor",
      "DHT Sensor",
    ],
    github: "https://github.com/karandev125/eco-eats-zero-hunger",
    timelineHref: "#projects",
    gallery: [
      { type: "image", src: "/images/eco-eats/system-flow.svg", label: "System Flow" },
      { type: "image", src: "/images/eco-eats/hardware-ai-pipeline.svg", label: "Hardware-AI Pipeline" },
      { type: "image", src: "/images/eco-eats/backend-logistics-flow.svg", label: "Backend & Logistics" },
    ],
  },
];
