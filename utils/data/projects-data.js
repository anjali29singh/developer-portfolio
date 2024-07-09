import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Tech News App ",
    description:
      "I have developed an android app called Tech News App. The app fetches the latest tech news from the News API and displays them in a recycler view. I used Retrofit to fetch the data from the API and Glide to load the images. I implemented the MVVM architecture pattern and used LiveData and ViewModel to handle the data",
    tools: [
      "Java",
      "RESTAPI",
      "Retrofit",
      "AWS SES",
      "Glide",
      "LiveData",
      "Android Studio",
    ],
    role: "Android developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Automatic Irrigation System",
    description:
      "I developed an group project known as Automatic Irrigation System that uses a soil moisture sensor to detect the moisture level and turn on the water pump when the moisture level is below a certain threshold. When it crosses the threshold is automatically stops the water pump.",
    tools: [
      "Keil micro vision",
      "C++",
      "8051 microcontroller",
      "Soil Moisture Sensor",
      "Motor Pump etc",
    ],
    role: "",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Shrink Url",
    description:
      " A fullstack application that allows users to shorten long URLS. We can share and use this url everytime.",
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "Express",
      ,
      "MongoDB",
      "Mircosoft Azure",
      "Docker",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Code conversion tool (codetransit)",
    description:
      "A web application that allows users to convert code from one programming language to another. It supports multiple programming languages and provides a user-friendly interface for code conversion.",
    tools: ["ReactJS", "TailwindCss", "OpenAI API", "Material UI", "Vscode"],
    code: "",
    demo: "",
    image: ayla,
    role: "Frontend Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
