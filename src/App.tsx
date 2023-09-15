import { CanToggleElement, playhtml } from "@playhtml/react";
import "./App.scss";
import akariUF4L8 from "./assets/lamps/Akari-UF4-L8.png";
import akari10D from "./assets/lamps/Akari-10D.png";
import akariBB3_33S from "./assets/lamps/Akari-BB3-33S.png";
import akariUF3Q from "./assets/lamps/Akari-UF3-Q.png";
import akari16A from "./assets/lamps/Akari-16A.png";
import akariVB13T from "./assets/lamps/Akari-VB-13T.png";
import classNames from "classnames";
import {
  SoundContext,
  SoundProvider,
  SoundType,
} from "./components/SoundProvider";
import { useContext } from "react";

interface StoreItem {
  name: string;
  description: string;
  imgSrc: string;
  className: string;
}

const HangingLamps = new Set([
  "100D",
  "120A",
  "125F",
  "15A",
  "16A",
  "17A",
  "21A",
  "23A",
  "24A",
  "26A",
  "30A",
  "30D",
  "30F",
  "30P",
  "31N",
  "32N",
  "33N",
  "33X",
  "33NW",
  "36N",
  "37D",
  "40DL",
  "40F",
  "40XP",
  "45A",
  "45D",
  "50EN",
  "50F",
  "55A",
  "55D",
  "55F",
  "60D",
  "60F",
  "70EN",
  "70F",
  "75A",
  "75D",
  "95EN",
  "95F",
]);

const Lamps: StoreItem[] = Object.values(
  import.meta.glob("./assets/lamps/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
).map((lampFile) => {
  const lampName = lampFile
    .split("/")
    .slice(-1)[0]
    .split(".")[0]
    .split("-")
    .join(" ");

  return {
    description: "",
    name: lampName,
    imgSrc: lampFile,
    className: HangingLamps.has(lampName.replace("Akari ", ""))
      ? "hangingLamp"
      : "lamp",
  };
});

playhtml.init({});

function App() {
  return (
    <SoundProvider>
      <main id="contentContainer">
        <h1>play(html)store</h1>

        <div className="header">
          <div className="headerImgContainer">
            <Lamp
              imgSrc={akariUF4L8}
              name="Akari UF4-L8"
              selectorId={".headerImg"}
              className="headerImg"
              height={null}
              style={{
                transform: "translate(-39px, 41px)",
              }}
            />
          </div>
          <div className="headerImgContainer">
            <Lamp
              imgSrc={akari10D}
              name="Akari 10D"
              selectorId={".headerImg"}
              className="headerImg"
              height={null}
              style={{
                transform: "translate(9px, -39px)",
              }}
            />
          </div>
          <div className="headerImgContainer">
            <Lamp
              imgSrc={akariBB3_33S}
              name="akariBB3_33S"
              selectorId={".headerImg"}
              className="headerImg"
              height={null}
              style={{
                transform: "translate(359px, -19px)",
                maxWidth: "150px",
              }}
            />
          </div>
          <div className="headerImgContainer">
            <Lamp
              imgSrc={akariVB13T}
              name="akariVB13T"
              selectorId={".headerImg"}
              className="headerImg"
              height={null}
              style={{
                transform: "scale(-1,1) translate(40px, -20px)",
              }}
            />
          </div>
          <div
            className="headerImgContainer"
            style={{
              position: "absolute",
              height: "inherit",
              alignSelf: "flex-start",
              marginRight: "-155px",
            }}
          >
            <Lamp
              imgSrc={akari16A}
              name="akari16A"
              selectorId={".headerImg"}
              className="headerImg"
              height={null}
            />
          </div>
          <div className="headerImgContainer">
            <Lamp
              imgSrc={akariUF3Q}
              name="akariUF3Q"
              selectorId={".headerImg"}
              className="headerImg"
              height={null}
              style={{
                transform: "translate(-30px, 13px)",
              }}
            />
          </div>
        </div>
        <div className="itemGrid">
          {Lamps.map((lamp) => (
            <ItemPreview {...lamp} />
          ))}
        </div>
      </main>
      <footer>
        a <a href="https://playhtml.fun">playhtml</a> store | stewarded by{" "}
        <a href="https://spencerchang.me">spencer chang</a>
      </footer>
    </SoundProvider>
  );
}

function ItemPreview(item: StoreItem) {
  return (
    <div className="itemPreview">
      <Lamp
        {...item}
        className={classNames("itemPreviewImg", item.className)}
      />
      <h3 className="itemPreviewTitle">{item.name}</h3>
    </div>
  );
}

function Lamp({
  imgSrc,
  name,
  className,
  style,
  height,
  width,
  selectorId,
}: {
  imgSrc: string;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | null;
  height?: number | null;
  selectorId?: string;
}) {
  const { playSound } = useContext(SoundContext);

  return (
    <CanToggleElement>
      <img
        id={imgSrc}
        src={imgSrc}
        alt={name}
        className={classNames(`lamp`, className)}
        width={width === null || width ? width || "" : "200"}
        height={height === null || height ? height || "" : "200"}
        loading="lazy"
        style={style}
        selector-id={selectorId}
        onClick={() => playSound(SoundType.LampOn)}
      />
    </CanToggleElement>
  );
}

export default App;
