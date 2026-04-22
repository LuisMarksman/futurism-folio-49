export type Project = {
  id: string;
  year: number;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  problem: string;
  tech: string[];
  image: string;
  images?: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    year: 2026,
    title: "Autonomous Swarm Drone System",
    shortDesc: "Edge-AI powered drone swarm for disaster mapping.",
    description:
      "A coordinated swarm of micro-drones running on-device computer vision for real-time disaster zone mapping and survivor detection.",
    problem: "First responders lack rapid aerial situational awareness in collapsed structures and post-disaster zones.",
    features: [
      "Edge-AI object & survivor detection on Jetson Nano",
      "Mesh-networked swarm coordination over LoRa",
      "Auto-stitched 3D point-cloud terrain map",
      "Battery-aware mission planner",
    ],
    tech: ["ROS2", "Python", "PyTorch", "Jetson", "LoRa", "OpenCV"],
    image: "/images/proj-drone.jpg",
    github: "https://github.com/",
  },
  {
    id: "p2",
    year: 2025,
    title: "Industrial IoT Predictive Maintenance",
    shortDesc: "ML-driven anomaly detection for factory machinery.",
    description:
      "An end-to-end IIoT platform that ingests vibration & thermal telemetry from ESP32 nodes and predicts mechanical failure 72h in advance.",
    problem: "Unplanned downtime costs manufacturers thousands per hour due to undetected bearing & motor faults.",
    features: [
      "ESP32 + MPU6050 vibration sensing nodes",
      "MQTT pipeline → InfluxDB → Grafana",
      "LSTM anomaly model with 94% precision",
      "Slack & SMS alerting workflow",
    ],
    tech: ["ESP32", "Embedded C", "MQTT", "TensorFlow", "InfluxDB"],
    image: "/images/proj-iiot.jpg",
    github: "https://github.com/",
  },
  {
    id: "p3",
    year: 2024,
    title: "Voice-Controlled Robotic Arm",
    shortDesc: "6-DOF arm controlled via natural language commands.",
    description:
      "A 6-DOF robotic manipulator that accepts spoken instructions, parses intent with an on-device LLM, and executes pick-and-place tasks.",
    problem: "Industrial robotic arms require complex teach-pendant programming, locking out non-engineering operators.",
    features: [
      "Whisper-based on-device speech recognition",
      "Inverse kinematics solver in Python",
      "STM32 motor controller over CAN",
      "Vision-guided grasp planning",
    ],
    tech: ["STM32", "ROS", "Python", "Whisper", "OpenCV", "CAN"],
    image: "/images/proj-arm.jpg",
    github: "https://github.com/",
  },
  {
    id: "p4",
    year: 2023,
    title: "Smart Agriculture Edge Network",
    shortDesc: "Solar-powered LoRa mesh for precision farming.",
    description:
      "A low-power sensor mesh for soil, weather and crop-health monitoring across 200+ acres, with edge inference for irrigation decisions.",
    problem: "Smallholder farms lack affordable, connectivity-independent precision agriculture tooling.",
    features: [
      "Solar + supercap powered nodes",
      "LoRaWAN gateway with edge ML",
      "Soil NPK + moisture + canopy temp sensing",
      "Mobile dashboard with irrigation suggestions",
    ],
    tech: ["LoRa", "Embedded C", "TinyML", "React Native"],
    image: "/images/proj-agri.jpg",
    github: "https://github.com/",
  },
  {
    id: "p5",
    year: 2022,
    title: "AI Traffic Vision System",
    shortDesc: "Real-time vehicle classification & flow optimization.",
    description:
      "A YOLOv7-based traffic monitoring system deployed on Raspberry Pi clusters at intersections to optimize adaptive signal timing.",
    problem: "Fixed-cycle traffic signals cause unnecessary congestion in dynamic urban traffic patterns.",
    features: [
      "YOLOv7 vehicle & pedestrian detection",
      "Multi-camera fusion at intersections",
      "Adaptive signal timing controller",
      "Anonymized traffic analytics dashboard",
    ],
    tech: ["YOLOv7", "Raspberry Pi", "Python", "OpenCV", "Flask"],
    image: "/images/proj-traffic.jpg",
    github: "https://github.com/",
  },
  {
    id: "p6",
    year: 2021,
    title: "Wearable Health Monitor",
    shortDesc: "BLE wearable with on-chip ECG anomaly detection.",
    description:
      "A wrist-worn device with on-chip ECG, SpO2 and motion sensing, running a quantized CNN to flag arrhythmia in real time.",
    problem: "Continuous cardiac monitoring is rarely accessible outside clinical environments.",
    features: [
      "Nordic nRF52 SoC with BLE 5",
      "Quantized CNN arrhythmia model",
      "7-day battery life",
      "Companion mobile app & cloud sync",
    ],
    tech: ["nRF52", "Embedded C", "TinyML", "BLE", "Flutter"],
    image: "/images/proj-wearable.jpg",
    github: "https://github.com/",
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
