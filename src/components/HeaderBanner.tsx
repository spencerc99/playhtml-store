import { Lamp } from "./Lamp";
import akariUF4L8 from "../assets/lamps/Akari-UF4-L8.png";
import akari10D from "../assets/lamps/Akari-10D.png";
import akariBB3_33S from "../assets/lamps/Akari-BB3-33S.png";
import akariUF3Q from "../assets/lamps/Akari-UF3-Q.png";
import akari16A from "../assets/lamps/Akari-16A.png";
import akariVB13T from "../assets/lamps/Akari-VB-13T.png";

const HeaderAssets = [
  {
    name: "Akari UF4-L8",
    imgSrc: akariUF4L8,
    style: {
      transform: "translate(-39px, 41px)",
    },
  },
  {
    name: "Akari 10D",
    imgSrc: akari10D,
    style: {
      transform: "translate(9px, -39px)",
    },
  },
  {
    name: "Akari BB3-33S",
    imgSrc: akariBB3_33S,
    style: {
      transform: "translate(359px, -19px)",
      maxWidth: "150px",
    },
  },
  {
    name: "Akari VB-13T",
    imgSrc: akariVB13T,
    style: {
      transform: "scale(-1,1) translate(40px, -20px)",
    },
  },
  {
    name: "Akari 16A",
    imgSrc: akari16A,
    containerStyle: {
      position: "absolute",
      height: "inherit",
      alignSelf: "flex-start",
      marginRight: "-155px",
    } as const,
  },
  {
    name: "Akari UF3-Q",
    imgSrc: akariUF3Q,
    style: {
      transform: "translate(-30px, 13px)",
    },
  },
];

export function HeaderBanner() {
  return (
    <div className="header">
      {HeaderAssets.map((asset) => (
        <div className="headerImgContainer" style={asset.containerStyle}>
          <Lamp
            {...asset}
            selectorId={".headerImg"}
            className="headerImg"
            height={null}
          />
        </div>
      ))}
    </div>
  );
}
