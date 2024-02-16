// projectData.ts

// Define enum for project IDs
export enum ProjectId {
  BOOMBLEBEE = 'boomblebee',
  SHARKHOLE = 'sharkhole',
  // Add more project IDs as needed
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

export enum SoftwareId {
  REACTJS = 'reactjs',
  ARDUINO = 'arduino',
  CPP = 'c++',
  ROS2 = 'ros2',
  NODEJS = 'nodejs',
  MEDIAPIPE = 'mediapipe',
  // Add more project IDs as needed
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
  bgColor: string;
  techTags: TechId[];
  taskTags: TaskId[];
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
      bgColor: "#FFFFFF",
      techTags: [TechId.MOTIONCONTROL, TechId.NOVELELECTRICAL, TechId.NOVELMECHANICAL, TechId.ACOUSTICDETECTION],
      taskTags: [TaskId.MECHANICAL, TaskId.ASSEMBLY, TaskId.ELECTRICAL, TaskId.BOMMANAGEMENT, TaskId.FABRICATION, TaskId.PROCESSCONTROLDEV, TaskId.FIRMWAREDEV]
    },
  ],
  [
    ProjectId.SHARKHOLE,
    {
      title: "The Shark Hole",
      thumbUrl: "/thumb_sharkhole.jpg",
      quickBlurb: "Camera-triggered anamatronic shark that you have to putt your ball into. Be careful when you retrive the ball from his mouth, he might bite!",
      youtubeEmbedId: "RFKhKwp5L1E",
      bgColor: "#FFFFFF",
      techTags: [TechId.MOTIONCONTROL, TechId.COMPUTERVISION],
      taskTags: [TaskId.MECHANICAL, TaskId.ASSEMBLY, TaskId.ELECTRICAL, TaskId.FABRICATION, TaskId.PROCESSCONTROLDEV, TaskId.FIRMWAREDEV, TaskId.FULLSTACKDEV]
    },
  ],
  // Add more projects as needed
]);