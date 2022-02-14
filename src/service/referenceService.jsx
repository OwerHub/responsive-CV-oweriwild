import resCvPic from "../img/pics/response-cv-1.jpg";
import resCvPicIncognito from "../img/pics/response-cv-1.jpg";
import hoolieDayz from "../img/pics/hoolieDazy.jpg";
import parallaxPizza from "../img/pics/parallax-pizza.jpg";
import showRoomPic from "../img/pics/showroom-demo.jpg";

const projectPictures = [resCvPic, hoolieDayz, parallaxPizza, showRoomPic];

export const referencePictures = (number) => {
  /* console.log("in funct", typeof number, number); */
  return projectPictures[number];
};
