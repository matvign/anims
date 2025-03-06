import { useState } from "react";
import clsx from "clsx";

import styles from "./StateTransitionCapture.module.css";

type AnimationState = "idle" | "enter" | "leave";

/**
 * This one is similar to the StateTransition component.
 * The difference is that it uses a transition event listener
 * on a parent node.
 *
 * If you have multiple transitions you want to listen to,
 * this solution will probably be inadequate.
 */
export const StateTransition = () => {
  const [animate, setAnimate] = useState<AnimationState>("idle");

  const handleToggle = () => {
    if (animate !== "enter") {
      setAnimate("enter");
    } else {
      setAnimate("leave");
    }
  };

  return (
    <div
      onTransitionEnd={(event: React.TransitionEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const target = event.target as HTMLDivElement;
        const transitionId = target.dataset.transitionId;

        if (animate === "leave" && transitionId === "fade") {
          setAnimate("idle");
        }
      }}
    >
      <button onClick={handleToggle}>Click me</button>
      <div
        data-transition-id="fade"
        className={clsx(styles["default"], {
          [styles["idle"]]: animate === "idle",
          [styles["enter"]]: animate === "enter",
        })}
      >
        Something here
      </div>
    </div>
  );
};
