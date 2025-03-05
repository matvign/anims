import { useState, useEffect } from "react";
import clsx from "clsx";

import styles from "./NodeTransition.module.css";

export const NodeTransition = () => {
  const [visible, setVisible] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      setVisible(1);
    }
  }, [shouldRender]);

  const handleToggle = () => {
    if (!shouldRender) {
      setShouldRender(true);
    } else {
      setVisible(0);
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>Click me</button>
      {shouldRender && (
        <div
          onTransitionEnd={() => {
            if (!visible) setShouldRender(false);
          }}
          className={clsx(styles["default"], {
            [styles["fade-in"]]: visible === 1,
          })}
        >
          Something here
        </div>
      )}
    </div>
  );
};
