import cssPic from "../img/icons/css.png";
import sassPic from "../img/icons/sass.png";
import jsPic from "../img/icons/javascript.png";
import reactPic from "../img/icons/react.png";
import bootstrapPic from "../img/icons/bootstrap.png";
import tailwindPic from "../img/icons/tailwind.png";


import nodeJsPic from "../img/icons/nodeJs.png";
import mongoDbPic from "../img/icons/mongoDB.png";
import dockerPic from "../img/icons/docker.png";
import vuePic from "../img/icons/vueJS.png";
import typeScriptPic from "../img/icons/typeScript.png"

import reduxPic from "../img/icons/reduxLogo.png"
import vuexPic from "../img/icons/vuex.png"


import photoshopPic from "../img/icons/photoshop.png";
import illustratorPic from "../img/icons/illustrator.png";

const iconArray = [
  cssPic,
  sassPic,
  jsPic,
  reactPic,
  bootstrapPic,
  tailwindPic,
  nodeJsPic,
  mongoDbPic,
  dockerPic,
  photoshopPic,
  illustratorPic,
  vuePic,
  typeScriptPic,
  reduxPic,
  vuexPic
];

const iconNameArray = [
  "css",
  "sass",
  "js",
  "react",
  "bootstrap",
  "tailwind",
  "node",
  "mongoDb",
  "docker",
  "photoshop",
  "illustrator",
  "vue",
  "typeScript",
  "redux",
  "vuex"
];

const techniqDatas = [
  ["CSS", "#30a0d1", "#030b7e"],

  ["SASS", "#c45f92", "#78069b"],
  ["Javascript", "#f0cd39", "#dd9817"],
  ["ReactJS", "#04c9ee", "#1c2d9b"],
  ["Bootstrap", "#7b45c1", "#3a0964"],
  ["Tailwind", "#0cc4b8", "#0c46c4"],
  ["NodeJs", "#48a64c", "#0f3f0f"],
  ["MongoDB", "#67a344", "#283c17"],
  ["Docker", "#0091e2", "#022083"],
  ["Adobe  PhotoShop", "#2f9ff2", "#001c33"],
  ["Adobe  Illustrator", "#f29200", "#300000"],
  ["VueJS", "#314559", "#49b180"],
  ["Typescript", "#2d79c7", "#2d79c7"],
  ["Redux", "#764abc", "#764abc"],
  ["Vuex", "#764abc", "#764abc"],
];

export const existTechniqIcons = (inputArray) => {
  let iconList = [];
  iconNameArray.map((icon, iterator) => {
    if (inputArray.indexOf(icon) !== -1) {
      iconList.push(iconArray[iterator]);
    }
  });
  return iconList;
};

export const returnIcon = (skillName) => {
  let placeInArray = iconNameArray.indexOf(skillName);

  return [
    iconArray[placeInArray],
    techniqDatas[placeInArray][0],
    techniqDatas[placeInArray][1],
    techniqDatas[placeInArray][2],
  ];
};
