import { useState } from "react";
import clsx from "clsx";

import styles from "./StateTransition.module.css";

type AnimationState = "idle" | "enter" | "leave";

/**
 * To get a fade animation, we need to hide the element from view,
 * and animate it when it is entering and leaving.
 *
 * Unfortunately, display: none and visibility: hidden cannot be animated.
 * Instead, we can setup animation states: idle, enter and leave.
 *
 * Idle is where we set visibility: hidden and max-height: 0
 * Enter is where we change the opacity to fade an element in
 * Leave is a transitional state
 *
 * We need to listen to the leave animation. Once it's finished,
 * we set the animation state to idle, removing the node from view.
 *
 * <idle> => <fade-in> => <leave> => <fade-out> => <idle>
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
    <div>
      <button onClick={handleToggle}>Click me</button>
      <div
        onTransitionEnd={() => {
          if (animate === "leave") {
            setAnimate("idle");
          }
        }}
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
