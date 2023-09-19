import React from "react";
import { Lamp } from "./components/Lamp";

interface StoreItemBase {
  id: string;
  name: string;
  description: string | React.ReactNode;
  imgSrc: string;
  sourceUrl?: string;
  className: string;
  component: (props: unknown) => JSX.Element;
  originalPrice: number;
  maxPrice?: number;
}

export type StoreItem = StoreItemBase &
  ({ price: number } | { discount: number });
type StoreItemWithoutId = Omit<StoreItem, "id">;

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
  "35N",
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
const LampPrices: Record<string, number> = {
  "Akari 100D": 1300,
  "Akari 10A": 600,
  "Akari 10D": 600,
  "Akari 120A": 1800,
  "Akari 125F": 1800,
  "Akari 12A": 900,
  "Akari 13A": 900,
  "Akari 14A": 900,
  "Akari 15A": 900,
  "Akari 16A": 500,
  "Akari 17A": 500,
  "Akari 1A": 175,
  "Akari 1AD": 200,
  "Akari 1AG": 200,
  "Akari 1AR": 200,
  "Akari 1AS": 200,
  "Akari 1AT": 200,
  "Akari 1AV": 200,
  "Akari 1AY": 200,
  "Akari 1N": 175,
  "Akari 1P": 125,
  "Akari 20N": 400,
  "Akari 21A": 400,
  "Akari 21N": 1800,
  "Akari 22N": 400,
  "Akari 23A": 300,
  "Akari 23N": 1800,
  "Akari 24A": 200,
  "Akari 24N": 400,
  "Akari 25N": 1800,
  "Akari 26A": 200,
  "Akari 26N": 400,
  "Akari 27N": 1800,
  "Akari 2A UKAI": 450,
  "Akari 2A": 400,
  "Akari 2N": 175,
  "Akari 2P": 175,
  "Akari 2X": 300,
  "Akari 30A": 200,
  "Akari 30D": 200,
  "Akari 30F": 200,
  "Akari 30P": 1800,
  "Akari 31N": 800,
  "Akari 32N": 1500,
  "Akari 33N": 850,
  "Akari 33NW": 2000,
  "Akari 33X": 200,
  "Akari 35N": 1300,
  "Akari 36N": 1800,
  "Akari 37D": 225,
  "Akari 3A UKAI": 450,
  "Akari 3A": 400,
  "Akari 3AB": 450,
  "Akari 3AD": 450,
  "Akari 3AR": 450,
  "Akari 3AV": 450,
  "Akari 3X": 175,
  "Akari 40DL": 300,
  "Akari 40F": 250,
  "Akari 40XP": 350,
  "Akari 45A": 250,
  "Akari 45D": 250,
  "Akari 4A": 400,
  "Akari 4N": 175,
  "Akari 50EN": 350,
  "Akari 50F": 350,
  "Akari 55A": 350,
  "Akari 55D": 350,
  "Akari 55F": 350,
  "Akari 5A": 400,
  "Akari 5AD": 450,
  "Akari 5N": 200,
  "Akari 60D": 450,
  "Akari 60F": 450,
  "Akari 6A": 500,
  "Akari 70EN": 550,
  "Akari 70F": 600,
  "Akari 75A": 600,
  "Akari 75D": 600,
  "Akari 7A": 500,
  "Akari 7AD": 550,
  "Akari 95EN": 900,
  "Akari 95F": 1200,
  "Akari 9A": 550,
  "Akari 9AD": 600,
  "Akari 9AY": 600,
  "Akari BB3 33S": 2600,
  "Akari BB3 55DD": 1800,
  "Akari BB3 55FF": 1800,
  "Akari BB3 70FF": 2000,
  "Akari BB3 70XN": 1800,
  "Akari BB3 75DD": 2000,
  "Akari BB3 75DL": 2000,
  "Akari BB3 X3": 1800,
  "Akari BB3 YA1": 1800,
  "Akari UF3 DL": 700,
  "Akari UF3 FF": 700,
  "Akari UF3 H": 700,
  "Akari UF3 L6": 700,
  "Akari UF3 Q": 900,
  "Akari UF3 S": 700,
  "Akari UF3 U": 700,
  "Akari UF3 XN": 700,
  "Akari UF4 31N": 1300,
  "Akari UF4 33N": 1300,
  "Akari UF4 J1": 1300,
  "Akari UF4 L10": 1800,
  "Akari UF4 L5": 1300,
  "Akari UF4 L6": 1300,
  "Akari UF4 L8": 1800,
  "Akari UF4 L9": 1300,
  "Akari UF5 31NW": 2000,
  "Akari UF5 32N": 2000,
  "Akari UF5 33NW": 2000,
  "Akari VB 13T": 400,
  "Akari XP1": 175,
  "Akari YA2": 200,
};

export const Lamps: StoreItemWithoutId[] = Object.values(
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
    description:
      "Akari Light Sculptures by Isamu Noguchi are considered icons of modern design. Designed by Noguchi beginning in 1951 and handmade for a half century by the original manufacturer in Gifu, Japan, the paper lanterns are a harmonious blend of Japanese handcraft and modernist form. The lamps are created from handmade washi.",
    name: lampName,
    imgSrc: lampFile,
    className: HangingLamps.has(lampName.replace("Akari ", ""))
      ? "hangingLamp"
      : "lamp",
    sourceUrl: `https://shop.noguchi.org/products/${lampName
      .replace(" ", "-")
      .toLowerCase()}`,
    component: Lamp,
    originalPrice: LampPrices[lampName],
    discount: 0.99,
    maxPrice: 5,
  };
});

export const Store: Record<string, StoreItem> = Object.fromEntries(
  [...Lamps].map((lamp) => {
    const id = lamp.name.replace(" ", "-");
    return [id, { ...lamp, id }];
  })
);

export function getProduct(id: string): StoreItem {
  return Store[id];
}
