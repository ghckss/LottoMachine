import React from "react";

import { Ball } from "./ball";
import { Machine } from "./machine.js";

const Canvas = (props) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const stageWidth = document.body.querySelector(".lotto__machine")
      .clientWidth;
    const stageHeight = document.body.querySelector(".lotto__machine")
      .clientHeight;

    window.addEventListener(
      "resize",
      () => resize(canvas, context, stageWidth, stageHeight),
      true
    );
    resize(canvas, context, stageWidth, stageHeight);

    const machine = createMachine(stageWidth, stageHeight);
    const balls = createBall(machine);

    window.requestAnimationFrame(() =>
      animate(context, machine, balls, stageWidth, stageHeight)
    );
  }, [props.active]);

  const createBall = (machine) => {
    const balls = [];
    for (let i = 0; i < 45; i++) {
      var color;
      var angle = Math.floor(Math.random() * 140 + 110);
      if (i <= 10) {
        color = "#e4a716";
      } else if (i <= 20) {
        color = "#1993da";
      } else if (i <= 30) {
        color = "#e96353";
      } else if (i <= 40) {
        color = "#8f8f8f";
      } else if (i <= 45) {
        color = "#5ab545";
      }

      balls.push(new Ball(machine, 30, angle, i, color));
    }
    return balls;
  };

  const createMachine = (stageWidth, stageHeight) => {
    return new Machine(stageWidth, stageHeight, 200);
  };

  const resize = (canvas, context, stageWidth, stageHeight) => {
    canvas.width = stageWidth * 2;
    canvas.height = stageHeight * 2;
    context.scale(2, 2);
  };

  const animate = (context, machine, balls, stageWidth, stageHeight) => {
    window.requestAnimationFrame(() =>
      animate(context, machine, balls, stageWidth, stageHeight)
    );

    context.clearRect(0, 0, stageWidth, stageHeight);
    machine.draw(context);

    balls.forEach((ball) => {
      ball.draw(context, machine, props.active);
    });
  };

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
