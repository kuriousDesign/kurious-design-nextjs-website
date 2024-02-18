// projectData.ts

// Define enum for project IDs
export enum ProjectId {
  BOOMBLEBEE = 'boomblebee',
  SHARKHOLE = 'sharkhole',
  URBANPUTTCOURSE = 'urbanputtcourse',
  STREETARTMURALE = 'streetartmurale',
}

export enum TechId {
  COMPUTERVISION = 'computerVision',
  MOTIONCONTROL = 'motionControl',
  PROJECTIONMAPPING = 'projectionMapping',
  ACOUSTICDETECTION = 'acousticDetection',
  LIGHTINGCONTROL = 'lightingControl',
  NOVELMECHANICAL = 'novelMechanicalDesign',
  NOVELELECTRICAL = 'novelElectricalDesign',
  ELECTROMECHANICAL = 'electroMechanical',
}

export enum ToolId {
  REACTJS = 'reactjs',
  ARDUINO = 'arduino',
  CPP = 'c++',
  ROS2 = 'ros2',
  NODEJS = 'nodejs',
  MEDIAPIPE = 'mediapipe',
  PYGAME = 'pygame',
  OPENCV = 'opencv',
  // Add more project IDs as needed
}

export enum ScopeId {
  IDEATION = 'ideation',
  EXECUTION = 'execution',
  CONSULT = 'consult',
}

export enum TaskId {
  MECHANICAL = 'mechanical',
  ASSEMBLY = 'assembly',
  SCHEMATICS = 'createSchematics',
  FABRICATION = 'fabrication',
  ELECTRICAL = 'electrical',
  WIRING = 'wiring',
  FIRMWAREDEV = 'firmwareDev',
  PROCESSCONTROLDEV = 'processControlDev',
  FULLSTACKDEV = 'fullstackDev',
  UIDEV = 'uiDev',
  CUSTOMERTRAINING = 'customerTraining',
  PROJECTMANAGMENT = 'projectManagement',
  BOMMANAGEMENT = 'bomManagement',
}

export enum HardwareId {
  MOTOR = 'motor',
  SENSOR = 'sensor',
  PRINT3D = '3dPrinting',
}

// Define interface for project data
export interface ProjectData {
  title: string;
  thumbUrl: string;
  quickBlurb: string;
  youtubeEmbedId: string;
  youtubePlaylistUrl: string;
  bgColor: string;
  techTags: TechId[];
  taskTags: TaskId[];
  description: string;
  comments: string;
}

// Map to store project data by project ID
export const projectMap: Map<ProjectId, ProjectData> = new Map([
  [
    ProjectId.BOOMBLEBEE,
    {
      title: "The BoombleBee",
      thumbUrl: "/thumb_boomblebee.jpg",
      quickBlurb: "An acoustically-triggered mechatronic bee that is driven by a stereo amplifier.",
      youtubeEmbedId: "RFKhKwp5L1E",
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLy1rmiokprEAhllRvMEWWEFmkzGGALtqz",
      bgColor: "#FFFFFF",
      techTags: [TechId.MOTIONCONTROL, TechId.NOVELELECTRICAL, TechId.NOVELMECHANICAL, TechId.ACOUSTICDETECTION],
      taskTags: [TaskId.MECHANICAL, TaskId.ASSEMBLY, TaskId.ELECTRICAL, TaskId.BOMMANAGEMENT, TaskId.FABRICATION, TaskId.PROCESSCONTROLDEV, TaskId.FIRMWAREDEV],
      toolTags: [ToolId.ARDUINO, ToolId.CPP],
      description: "",
      comments: "",
    },
  ],
  [
    ProjectId.SHARKHOLE,
    {
      title: "The Shark Hole",
      thumbUrl: "/thumb_sharkhole.jpg",
      quickBlurb: "Camera-triggered anamatronic shark that you have to putt your ball into. Be careful when you retrive the ball from his mouth, he might bite!",
      youtubeEmbedId: "ZoQKe_2ViOc",
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLy1rmiokprEAjp2gfcE_vvVxXnCTpg4T4",
      bgColor: "#FFFFFF",
      techTags: [TechId.MOTIONCONTROL, TechId.COMPUTERVISION],
      taskTags: [TaskId.MECHANICAL, TaskId.ASSEMBLY, TaskId.ELECTRICAL, TaskId.FABRICATION, TaskId.PROCESSCONTROLDEV, TaskId.FIRMWAREDEV, TaskId.FULLSTACKDEV],
      toolTags: [ToolId.ROS2, ToolId.OPENCV, ToolId.MEDIAPIPE, ToolId.CPP],
      description: "",
      comments: "",
    },
  ],
  [
    ProjectId.URBANPUTTCOURSE,
    {
      title: "The UrbanPutt Course",
      thumbUrl: "/thumb_urbanputtcourse.jpg",
      quickBlurb: "Camera-triggered anamatronic shark that you have to putt your ball into. Be careful when you retrive the ball from his mouth, he might bite!",
      youtubeEmbedId: "RFKhKwp5L1E",
      youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PLy1rmiokprECUNV190g_L2cmQc_acPOAS",
      bgColor: "#FFFFFF",
      techTags: [TechId.MOTIONCONTROL, TechId.LIGHTINGCONTROL, TechId.ELECTROMECHANICAL],
      taskTags: [TaskId.MECHANICAL, TaskId.ASSEMBLY, TaskId.ELECTRICAL, TaskId.FABRICATION, TaskId.PROCESSCONTROLDEV, TaskId.FIRMWAREDEV, TaskId.FULLSTACKDEV],
      toolTags: [ToolId.ROS2, ToolId.ARDUINO, ToolId.MEDIAPIPE, ToolId.CPP],
      description: "",
      comments: "",
    },
  ],
  [
    ProjectId.STREETARTMURALE,
    {
      title: "Interactive Street Art Murale",
      thumbUrl: "/thumb_interactivestreetartmurale.jpg",
      quickBlurb: "The intersection of computer vision, video game animation, projection mapping and painted murale.",
      youtubeEmbedId: "D02ehLxhhyo",
      youtubePlaylistUrl: "https://youtube.com/playlist?list=PLy1rmiokprEANgjsLdYJ7PaOGlIK7EOEV&si=4DotRx6gWsyGisrJ",
      bgColor: "#FFFFFF",
      techTags: [TechId.COMPUTERVISION, TechId.PROJECTIONMAPPING],
      taskTags: [TaskId.PROCESSCONTROLDEV, TaskId.FIRMWAREDEV, TaskId.CUSTOMERTRAINING],
      toolTags: [ToolId.ROS2, ToolId.PYGAME, ToolId.MEDIAPIPE],
      description: "Ever been next to a murale that was so vibrant you wanted to play with it. Well that was the idea here, I partnered with a street are muralist from Buenos Aires to create an exhibit for drunken bar goers and kids to enjoy.",
      comments: "I really enjoyed this project, because it augments classical art techniques; not replace. I have a great appreciation for art techniques that have been around long before the computer."
    },
  ],
  // Add more projects as needed
]);