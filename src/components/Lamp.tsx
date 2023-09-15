import { CanToggleElement } from "@playhtml/react";
import { SoundContext, SoundType } from "../context/SoundProvider";
import { useContext } from "react";
import classNames from "classnames";

export function Lamp({
  imgSrc,
  name,
  className,
  style,
  height,
  width,
  selectorId,
  id,
}: {
  imgSrc: string;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | null;
  height?: number | null;
  selectorId?: string;
  id?: string;
}) {
  const { playSound } = useContext(SoundContext);

  return (
    <CanToggleElement>
      {(data) => (
        <img
          id={id}
          src={imgSrc}
          alt={name}
          className={classNames(`lamp`, className)}
          width={width === null || width ? width || "" : "200"}
          height={height === null || height ? height || "" : "200"}
          loading="lazy"
          style={style}
          selector-id={selectorId}
          onClick={() =>
            // TODO: this is opposite of what logically should be the case because this is happening
            // _after_ the setData update
            data ? playSound(SoundType.LampOn) : playSound(SoundType.LampOff)
          }
        />
      )}
    </CanToggleElement>
  );
}
