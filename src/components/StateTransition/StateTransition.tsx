import { useState } from "react";
import clsx from "clsx";

import styles from "./StateTransition.module.css";

export const StateTransition = () => {
  const [visible, setVisible] = useState(0);

  const handleToggle = () => {
    if (visible <= 0) {
      setVisible(1);
    } else {
      setVisible(0);
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>Click me</button>
      <div
        onTransitionEnd={() => {
          if (visible === 0) {
            setVisible(-1);
          }
        }}
        className={clsx(styles["default"], {
          [styles["faded"]]: visible === -1,
          [styles["fade-in"]]: visible === 1,
        })}
      >
        Something here
      </div>
    </div>
  );
};
