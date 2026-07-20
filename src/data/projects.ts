export type Project = {
  id: string;
  year: number;
  month?: string; // e.g. "April"
  monthNum?: number; // 1-12, used for sorting
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  problem: string;
  tech: string[];
  image: string;
  images?: string[];
  videos?: string[];
  embeds?: string[]; // external embed URLs (e.g. Google Drive /preview) rendered as iframes
  github?: string;
  inProgress?: boolean;
  partOf?: string;
};

const raw: Project[] = [
  {
    id: "p11",
    year: 2026,
    month: "May",
    monthNum: 5,
    title: "Eco Eats — Perishable Food Rescue",
    shortDesc: "Hardware-AI logistics platform that rescues perishable food before it spoils.",
    description:
      "Eco Eats is a hardware-AI logistics platform for perishable food rescue. Instead of just listing donated food, it uses live IoT telemetry — MQ gas and DHT temperature/humidity sensors — to score freshness and decide whether food can still be delivered safely and where it should go first, then optimizes dispatch routes to demand centers before the food becomes waste. The v1 intelligence layer is deterministic (Q10 spoilage logic + route/demand matching) rather than ML-based.",
    problem:
      "Traditional food-donation apps rely on static expiry dates and stop at inventory listing — they can't answer whether perishable food is still safe to deliver, or where it should be routed first.",
    features: [
      "IoT freshness scoring from MQ gas + DHT sensors (Q10 spoilage logic)",
      "Deterministic hardware-AI dispatch engine (no ML in v1)",
      "Route optimization via Nominatim, OSRM & OpenStreetMap",
      "Priority dispatch queue with feasibility checks and claim locking",
      "Donor & receiver dashboards plus a freshness simulation lab",
    ],
    tech: ["React 19", "Vite", "Leaflet", "Node.js", "Express 5", "MongoDB", "OSRM", "MQ Gas Sensor", "DHT Sensor"],
    image: "/images/eco-eats/system-flow.svg",
    images: [
      "/images/eco-eats/system-flow.svg",
      "/images/eco-eats/hardware-ai-pipeline.svg",
      "/images/eco-eats/backend-logistics-flow.svg",
    ],
    github: "https://github.com/karandev125/eco-eats-zero-hunger",
  },
  {
    id: "p12",
    year: 2026,
    month: "April",
    monthNum: 4,
    title: "Voice Assistant — Vector Subsystem",
    shortDesc: "Voice interface for Vector — Phase 1 running Xiaozhi AI on an ESP32-S3.",
    description:
      "The voice assistant is the conversational brain and control interface for Vector (Virtual Engine for Task Control and Operation Robotics) — letting it take spoken commands to run tasks, control home automation, drive the Hermes agent, answer questions, and direct the autonomous robot to go places and pick & place objects. Phase 1 (shown in the demo) runs the Xiaozhi AI voice-assistant firmware on-device on an ESP32-S3 for wake-word and voice interaction. Phase 2, currently in development, moves the pipeline to a cloud stack — Google Gemini as the LLM brain, Deepgram for speech-to-text and Google Cloud TTS for speech synthesis. Phase 3 will bring the entire STT → LLM → TTS loop fully in-house, running a custom fine-tuned model on my own server to drive home automation, the Hermes agent and the physical robot with no third-party APIs.",
    problem:
      "Vector needs a natural, low-latency voice interface to understand spoken commands and act on them — controlling smart-home devices, agents and the robot itself without touching a screen.",
    features: [
      "Phase 1: Xiaozhi AI voice assistant running on-device on ESP32-S3",
      "Voice control for home automation, the Hermes agent and live Q&A",
      "Commands the autonomous robot to navigate and pick & place objects",
      "Phase 2 (in progress): Gemini LLM + Deepgram STT + Google Cloud TTS",
      "Phase 3 (planned): fully local STT/LLM/TTS on a self-hosted fine-tuned model",
    ],
    tech: ["ESP32-S3", "Xiaozhi AI", "Google Gemini", "Deepgram STT", "Google Cloud TTS", "Home Automation"],
    image: "/images/tesla-coil-2025.jpg",
    embeds: ["https://drive.google.com/file/d/1_9hNVV2ijxJvtqPZi_YVeyw7rcprjbKl/preview"],
    inProgress: true,
    partOf: "Vector",
  },
  {
    id: "p2",
    year: 2026,
    month: "April",
    monthNum: 4,
    title: "Robotic Arm — Vector Subsystem",
    shortDesc: "Articulated robotic arm — part of the Vector project.",
    description:
      "A multi-DOF robotic arm being developed as the manipulation subsystem of Vector. Currently focused on smooth servo coordination, kinematics and a clean mechanical build that will later integrate with Vector's vision and AI stack.",
    problem: "Vector needs precise, smooth physical manipulation to interact with real-world objects.",
    features: [
      "Multi-DOF servo-driven articulation",
      "Smooth coordinated motion control",
      "Designed to integrate with Vector main controller",
      "Future vision-guided pick & place",
    ],
    tech: ["Servo Control", "Embedded C", "Inverse Kinematics", "3D Printed"],
    image: "/images/tesla-coil-2025.jpg",
    videos: ["/videos/robotic-arm-2026.mp4"],
    inProgress: true,
    partOf: "Vector",
  },
  {
    id: "p1",
    year: 2026,
    month: "March",
    monthNum: 3,
    title: "Robo Eye — Vector Subsystem",
    shortDesc: "Animated robotic eye module — part of the Vector project.",
    description:
      "An expressive animated robotic eye built as a perception/personality subsystem of Vector — a larger humanoid-style companion robot currently in development. The eye renders smooth emotive animations on a round display and will eventually be paired with vision and voice modules.",
    problem: "Vector needs a face that can express state, attention and emotion in a believable, low-latency way.",
    features: [
      "Smooth emotive eye animations on round display",
      "Modular driver designed to plug into Vector's main controller",
      "Low-latency rendering on embedded MCU",
      "Designed for future gaze + attention tracking",
    ],
    tech: ["Embedded C", "GC9A01 Display", "ESP32", "LVGL"],
    image: "/images/tesla-coil-2025.jpg",
    videos: ["/videos/robo-eye-2026.mp4"],
    inProgress: true,
    partOf: "Vector",
  },
  {
    id: "p13",
    year: 2026,
    month: "January",
    monthNum: 1,
    title: "Home Server — Self-Hosted Homelab",
    shortDesc: "Raspberry Pi homelab running home automation, a local LLM, a personal NAS and the Hermes agent.",
    description:
      "A single-board home server built on a Raspberry Pi running Ubuntu Server, wired into the home network over Ethernet. A Docker stack turns it into a private, self-hosted homelab: Home Assistant for whole-home automation, Ollama running a small on-device LLM, Nextcloud as a personal NAS/drive, and Hermes — a custom agentic assistant that ties it all together. Everything runs on my own hardware with nothing in a third-party cloud; Hermes' own storage (memory, notes, documents and vector index) lives on the same disk that backs the NAS. This is the infrastructure that hosts the Hermes agent and home automation which Vector's voice assistant drives.",
    problem:
      "I wanted a private, always-on box I fully control — home automation, personal cloud storage and an AI assistant that can actually act on my house and files — without renting someone else's cloud or leaking personal data to external APIs.",
    features: [
      "Ubuntu Server on a Raspberry Pi, wired over Ethernet, Docker-based stack",
      "Home Assistant for whole-home automation and device control",
      "Local LLM via Ollama — fully on-device, nothing leaves the house",
      "Nextcloud personal NAS/drive backed by USB storage",
      "Hermes agent: tool-calling assistant for home control, file search, memory & reminders",
      "Caddy reverse proxy with TLS, automated backups and health checks",
    ],
    tech: ["Raspberry Pi", "Ubuntu Server", "Docker", "Home Assistant", "Ollama", "Nextcloud", "Python", "Caddy"],
    image: "/images/home-server-2026.jpg",
    github: "https://github.com/LuisMarksman/Server",
  },
  {
    id: "p4",
    year: 2025,
    month: "April",
    monthNum: 4,
    title: "Line Following Car (V1 & V2)",
    shortDesc: "Two generations of line-following robots — DIY to high-speed racer.",
    description:
      "A two-version line follower project built in April 2025. V1 is an Arduino UNO based learning build with IR sensors, L298N motor driver and 18650 cells on a hand-cut chassis. V2 is a high-speed racing rebuild with an STM32, an 8-IR sensor array and N20 micro gearmotors on a custom perfboard for fast PID line tracking.",
    problem: "Iterate from a basic educational line follower to a competition-grade high-speed racing platform.",
    features: [
      "V1: Arduino UNO + IR sensors + L298N driver",
      "V1: 18650 powered, hand-built chassis",
      "V2: STM32 controller with 8-IR sensor array",
      "V2: N20 gearmotors + LiPo, tuned for high-speed PID racing",
    ],
    tech: ["Arduino UNO", "STM32", "Embedded C", "PID", "N20 Motors", "8x IR Array"],
    image: "/images/line-follower-v2-2025.jpg",
    images: ["/images/line-follower-v1-2025.jpg", "/images/line-follower-v2-2025.jpg"],
  },
  {
    id: "p3",
    year: 2025,
    month: "March",
    monthNum: 3,
    title: "18-inch Tesla Coil",
    shortDesc: "High-voltage solid-state Tesla coil build (March 2025).",
    description:
      "A self-built 18-inch Tesla coil with a hand-wound secondary, foil-wrapped toroid and bench-tested driver electronics — a deep dive into resonant high-voltage circuit design, RF tuning and safe high-voltage assembly.",
    problem: "Design and tune a working resonant high-voltage Tesla coil from scratch using bench instruments and DIY parts.",
    features: [
      "Hand-wound secondary coil",
      "Foil-wrapped toroid top load",
      "Bench-tuned driver with oscilloscope verification",
      "Lab power supply driven for controlled testing",
    ],
    tech: ["High-Voltage", "Resonant Circuits", "Analog Electronics", "RF Tuning"],
    image: "/images/tesla-coil-2025.jpg",
  },
  {
    id: "p7",
    year: 2019,
    title: "Automatic Vacuum Cleaner Robot",
    shortDesc: "Obstacle-avoiding autonomous floor cleaning bot.",
    description:
      "A self-built autonomous vacuum cleaner robot using an Arduino Nano, ultrasonic distance sensing, and a custom chassis built from a household container — capable of navigating rooms while avoiding obstacles and sweeping the floor.",
    problem: "Wanted to build a low-cost, fully DIY robotic vacuum cleaner using everyday materials and basic electronics.",
    features: [
      "Ultrasonic obstacle detection & avoidance",
      "Dual DC motor differential drive",
      "Onboard suction + sweeping mechanism",
      "Fully custom-built chassis from recycled parts",
    ],
    tech: ["Arduino Nano", "Embedded C", "Ultrasonic Sensor", "L298N"],
    image: "/images/vacuum-cleaner-2019.jpg",
    images: ["/images/vacuum-cleaner-2019.jpg", "/images/vacuum-cleaner-2019-2.jpg"],
  },
  {
    id: "p8",
    year: 2018,
    title: "Ultrasonic Radar System",
    shortDesc: "Arduino + Processing radar for real-time object scanning.",
    description:
      "A radar-style object detection system using a servo-mounted ultrasonic sensor and Arduino, with a real-time graphical sweep visualization rendered on a laptop using Processing — awarded 1st place at the District Science Club exhibition (Jhansi, 2018).",
    problem: "Demonstrate radar-style spatial scanning using only a microcontroller, a single ultrasonic sensor, and open-source visualization tools.",
    features: [
      "180° servo-swept HC-SR04 ultrasonic sensor",
      "Real-time radar visualization in Processing",
      "Live angle & distance telemetry over serial",
      "1st prize — District Science Club, Jhansi",
    ],
    tech: ["Arduino UNO", "Processing", "HC-SR04", "Servo"],
    image: "/images/radar-2018.jpg",
    images: ["/images/radar-2018.jpg", "/images/radar-2018-2.jpg"],
  },
  {
    id: "p9",
    year: 2018,
    title: "Mini Snooker Table",
    shortDesc: "Hand-crafted miniature snooker / pool table build.",
    description:
      "A fully hand-built miniature snooker table with felt playing surface, corner pockets and wooden cushions — a precision woodworking project completed during early experiments with mechanical builds.",
    problem: "Combine craftsmanship and precision assembly to recreate a functional miniature version of a real snooker table.",
    features: [
      "Hand-cut wooden frame & rails",
      "Felt-covered playing surface",
      "Six functional corner & side pockets",
      "Smooth ball roll & cushion rebound",
    ],
    tech: ["Woodworking", "Mechanical Design", "DIY"],
    image: "/images/snooker-table-2018.jpg",
  },
  {
    id: "p10",
    year: 2017,
    title: "Ultrasonic Smart Belt for the Visually Impaired",
    shortDesc: "Wearable obstacle-detection belt with haptic feedback.",
    description:
      "A wearable assistive belt embedded with multiple ultrasonic sensors and an Arduino, designed to help visually impaired users detect nearby obstacles through audio/vibration alerts — my first real embedded systems project.",
    problem: "Visually impaired individuals need an affordable, hands-free way to detect obstacles around them while walking.",
    features: [
      "Multi-direction ultrasonic obstacle sensing",
      "Buzzer + vibration haptic feedback",
      "Lightweight wearable foam-belt form factor",
      "Battery-powered, fully self-contained",
    ],
    tech: ["Arduino UNO", "Embedded C", "HC-SR04", "Wearable"],
    image: "/images/ultrasonic-belt-2017.jpg",
  },
];

// Newest first by (year, monthNum)
export const projects: Project[] = [...raw].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return (b.monthNum ?? 0) - (a.monthNum ?? 0);
});
