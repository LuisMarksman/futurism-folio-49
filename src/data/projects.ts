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
    title: "Line-Following Maze Robot",
    shortDesc: "Award-winning autonomous maze-solving bot.",
    description:
      "A high-speed differential-drive robot using PID line tracking and a flood-fill maze-solving algorithm, winner of inter-college bot wars.",
    problem: "Build a low-cost competitive robot that can self-learn and solve unknown mazes in minimal time.",
    features: [
      "Custom dual-H-bridge motor driver PCB",
      "PID-tuned line following at 1.2 m/s",
      "Flood-fill shortest-path solver",
      "On-device telemetry over UART",
    ],
    tech: ["AVR", "Embedded C", "PCB Design", "PID"],
    image: "/images/proj-maze.jpg",
    github: "https://github.com/",
  },
  {
    id: "p8",
    year: 2017,
    title: "First Arduino Home Automation",
    shortDesc: "The project that started it all.",
    description:
      "A simple Arduino + relay-based home automation system controllable from a custom Android app — my first real embedded project.",
    problem: "Wanted to learn microcontrollers by solving a tangible everyday problem at home.",
    features: [
      "Arduino UNO + 4-channel relay",
      "HC-05 Bluetooth control",
      "Custom Android app",
      "Manual override switches",
    ],
    tech: ["Arduino", "C++", "Bluetooth", "Android"],
    image: "/images/proj-arduino.jpg",
    github: "https://github.com/",
  },
];
