import GrootVideo from "assets/videos/groot2.mp4";
import PlanningControlVideo from "assets/videos/planning_control.mp4";
import SensorsToggleVideo from "assets/videos/sensors_toggle.mp4";
import AppFeaturesVideo from "assets/videos/application_features.mp4";
import VizVideo from "assets/videos/visualization.mp4";

const cardItems = [
  {
    videoSrc: GrootVideo,
    description: "Many unique and complex robot behaviors may be designed using Behavior Trees in the application and navigation scopes. Model optimal robot behaviors to accomplish a broad range of tasks with state of the art & verifiable structures. Powered by industry-standard library, BehaviorTree.CPP.",
    oneWord: "INTELLIGENT",
    title: "Powered by Behavior Trees",
  },
  // {
  //   videoSrc: "",
  //   description: "Operates on a wide range of physical platforms and simulation engines including Gazebo Classic, Gazebo, Nvidia Isaac Sim, Unity, and more. Nav2 provides demos for Gazebo Classic and Gazebo with vendor-provided integrations for advanced photo-realistic simulation.",
  //   oneWord: "ADAPTABLE",
  //   title: "Hardware and Simulator Agnostic",
  // },
  {
    videoSrc: PlanningControlVideo,
    description: "Deploys modern Autonomous Vehicles technologies which are optimized and reworked for the unique needs of mobile robotics in dynamic environments. Fully leverages mobility’s semantics and unique constraints to provide best-in-class behavior for a wide range of robots, applications, and environments.",
    oneWord: "CUTTING EDGE",
    title: "Planning & Control",
  },
  {
    videoSrc: AppFeaturesVideo,
    description: "Includes commonly needed and essential product capabilities on top of advanced navigation: auto-docking for charging and static infrastructure, collision monitoring, assisted teleoperation, waypoint execution, and more growing by the day.",
    oneWord: "POWERFUL",
    title: "Mature Application Capabilities"
  },
  {
    videoSrc: SensorsToggleVideo,
    description: "Integrates with any type of sensor modality, perception model, semantic annotations, AI, and spatial intelligence to build the environmental model for planning & control. Provides default support for 2D, 3D lidars, depth cameras, sonars and ultrasonics, maps, semantic zones, and more!",
    oneWord: "PERCEPTIVE",
    title: "Multimodal Sensing Integrations",
  },
  {
    videoSrc: VizVideo,
    description: "Out-of-the-box raw data and navigation process visualizations with Rviz - including panels to issue commands, select algorithms, store/load waypoint information, and display state metadata for a polished getting started and debugging experience.",
    oneWord: "EASY TO USE",
    title: "3D Visualization and Command & Control",
  },
]

export default cardItems;
