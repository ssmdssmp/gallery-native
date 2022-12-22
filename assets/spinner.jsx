import * as React from "react";
import Svg, { Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animate */

const Spinner = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(30 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(60 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(90 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(120 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(150 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(180 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(210 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(240 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(270 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(300 50 50)"
    ></Rect>
    <Rect
      x={47}
      y={24}
      rx={3}
      ry={6}
      width={6}
      height={12}
      fill="#ffb6bb"
      transform="rotate(330 50 50)"
    ></Rect>
  </Svg>
);

export default Spinner;
