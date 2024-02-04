/* eslint-disable no-unused-vars */

import productOneImage from "../assets/MVP.png";
import productTwoImage from "../assets/ar3 (1).webp";
import Range_svg from "../assets/slider-h-range.svg";
import cyber from "../assets/cyber-security-banner.jpg";
import Unmanned from "../assets/unmanned-aircraft.jpeg";
import defense from "../assets/defencejpeg.jpeg";
const products = [
  {
    id: 1,
    index: 1,
    img: productOneImage,
    productName: "GM-5 Reconnecence Attack UVA",
    productDesc: "Amazing drone ",
    features: [
      {
        featureName: "Comms Range",
        description:
          "The communication range of the vehicle is 100 kilometers.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/comms-1.png",
        index: "1",
      },
      {
        featureName: "Cruise Speed",
        description:
          "The vehicle has a cruise speed of 75-90 kilometers per hour.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/speed.png        ",
        index: "2",
      },
      {
        featureName: "MTOW",
        description: "25kg",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/weight.png        ",
        index: "3",
      },
      {
        featureName: "Launch Method",
        description:
          "The vehicle can be launched using either VTOL (Vertical Takeoff and Landing) or catapult.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/airstrip.png        ",
        index: "4",
      },
      {
        featureName: "Recovery Method",
        description:
          "The vehicle can be recovered using either VTOL, parachute, net, belly landing, or water landing methods.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/parachute-1.png",
        index: "5",
      },
      {
        featureName: "Flight Endurance",
        description: "VTOL: 8 hours/Fixed: 16 hours",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/endurance-1.png        ",
        index: "6",
      },
    ],
  },
  {
    id: 2,
    index: 1,
    img: productTwoImage,
    productName: "AR3 Long-range VTOL UAV",
    productDesc:
      "Long-range maritime surveillance UAV with optional hybrid VTOL capability    ",
    features: [
      {
        featureName: "Comms Range",
        description:
          "The communication range of the vehicle is 100 kilometers.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/comms-1.png",
        index: "1",
      },
      {
        featureName: "Cruise Speed",
        description:
          "The vehicle has a cruise speed of 75-90 kilometers per hour.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/speed.png        ",
        index: "2",
      },
      {
        featureName: "MTOW",
        description: "25kg",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/weight.png        ",
        index: "3",
      },
      {
        featureName: "Launch Method",
        description:
          "The vehicle can be launched using either VTOL (Vertical Takeoff and Landing) or catapult.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/airstrip.png        ",
        index: "4",
      },
      {
        featureName: "Recovery Method",
        description:
          "The vehicle can be recovered using either VTOL, parachute, net, belly landing, or water landing methods.",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/parachute-1.png",
        index: "5",
      },
      {
        featureName: "Flight Endurance",
        description: "VTOL: 8 hours/Fixed: 16 hours",
        icon: "https://www.tekever.com/wp-content/uploads/2021/05/endurance-1.png        ",
        index: "6",
      },
    ],
  },
];

export const PagesContent = [
  {
    name: "Cyber Security",
    slug: "cyber-security",
    img: cyber,
    description: `Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks.

    It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.`,
    features: [
      {
        title: "Aircraft Component Manufacturing:",
        description: "Manufacturing specific aircraft components, and systems.",
      },
      {
        title: "Aircraft Maintenance, Repair, and Overhaul (MRO):",
        description:
          "Maintenance, repair, and overhaul services for aircraft components, engines, avionics, and other systems to ensure airworthiness and safety.",
      },
      {
        title: "Aviation Consulting Services:",
        description:
          "Consulting services to help aviation businesses optimize operations, navigate regulatory challenges, and implement best practices for safety and efficiency. ",
      },
      {
        title: "Advertising at Airports:",
        description: "Manufacturing specific aircraft components, and systems.",
      },
      {
        title: "Aircraft Component Manufacturing:",
        description: `Digital Screens: Utilize digital screens and displays for dynamic and engaging content. These can include video ads, animations, and real-time updates.


        Static Displays: Placing large posters, banners, and signs strategically in high-traffic areas to capture attention.
        
        .`,
      },
      {
        title: "Aircraft Leasing and Financing:",
        description:
          "Consulting services to help aviation businesses optimize operations, navigate regulatory challenges, and implement best practices for safety and efficiency. ",
      },
    ],
  },
  {
    name: "Unmanned Systems",
    slug: "unmanned-systems",
    img: Unmanned,
    description: `any electromechanical system which has the ability to carry out a predetermined or described task, or a portion of that task, and do it automatically with limited or no human intervention`,
    features: [
      {
        title: "Aircraft Component Manufacturing:",
        description: "Manufacturing specific aircraft components, and systems.",
      },
      {
        title: "Aircraft Maintenance, Repair, and Overhaul (MRO):",
        description:
          "Maintenance, repair, and overhaul services for aircraft components, engines, avionics, and other systems to ensure airworthiness and safety.",
      },
      {
        title: "Aviation Consulting Services:",
        description:
          "Consulting services to help aviation businesses optimize operations, navigate regulatory challenges, and implement best practices for safety and efficiency. ",
      },
      {
        title: "Advertising at Airports:",
        description: "Manufacturing specific aircraft components, and systems.",
      },
      {
        title: "Aircraft Component Manufacturing:",
        description: `Digital Screens: Utilize digital screens and displays for dynamic and engaging content. These can include video ads, animations, and real-time updates.


        Static Displays: Placing large posters, banners, and signs strategically in high-traffic areas to capture attention.
        
        .`,
      },
      {
        title: "Aircraft Leasing and Financing:",
        description:
          "Consulting services to help aviation businesses optimize operations, navigate regulatory challenges, and implement best practices for safety and efficiency. ",
      },
    ],
  },
  {
    name: "Defense & Military",
    slug: "defense-military",
    img: defense,
    description: `Unlike earlier days, combat drones or unmanned aerial vehicles (UAVs) have changed and modified their functionalities, to perform various operations in the commercial industry. Previously, these drones were basically used in military and defense fields. However, now by adopting modern technologies including advanced hardware such as sensors and cameras and upgraded software, these drones are capable of helping the defense and military sector on a broader scale. Currently, defense drones can be used for purposes, starting from carrying heavy `,
    features: [
      {
        title: "Aircraft Component Manufacturing:",
        description: "Manufacturing specific aircraft components, and systems.",
      },
    ],
  },
];
export default products;
