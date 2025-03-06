import { useState, useEffect } from "react";
import clsx from "clsx";

import styles from "./NodeTransition.module.css";

type AnimationState = "idle" | "enter" | "leave";

/**
 * Transitions can only run when changes are made to elements ALREADY existing
 * in the DOM. Just making an element appear will not run the transition.
 *
 * To get around this, we split the render and the transition.
 * Render first, then in an effect, apply the css class that will run a transition.
 *
 * When the leaving animation has finished, then we remove the node from the DOM
 * @returns
 */
export const NodeTransition = () => {
  const [animate, setAnimate] = useState<AnimationState>("idle");
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      setAnimate("enter");
    }
  }, [shouldRender]);

  const handleToggle = () => {
    if (!shouldRender) {
      setShouldRender(true);
    } else {
      setAnimate("leave");
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>Click me</button>
      {shouldRender && (
        <div
          onTransitionEnd={() => {
            if (animate === "leave") {
              setShouldRender(false);
              setAnimate("idle");
            }
          }}
          className={clsx(styles["default"], {
            [styles["enter"]]: animate === "enter",
            [styles["leave"]]: animate === "leave",
          })}
        >
          Something here
        </div>
      )}
    </div>
  );
};
