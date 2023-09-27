"use client";

import { Button } from "antd";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function Login() {
  const controls = useAnimationControls();
  const [firstAnimation, setFirstAnimation] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!firstAnimation) {
      if (isRegister) {
        controls.start(() => ({
          x: 0,
          initial: { x: windowWidth * -0.5 },
          transition: { delay: 0.5, duration: 1.5 },
        }));
      } else {
        controls.start(() => ({
          x: windowWidth * -0.5,
          initial: { x: 0 },
          transition: { delay: 0.5, duration: 1.5 },
        }));
      }
    }
  }, [isRegister]);

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        animate={controls}
        initial={{ x: windowWidth * -0.5 }}
        style={{ width: "150vw", height: "100vh", display: "flex" }}
      >
        <div style={{ width: "50%", height: "100vh" }}>
          Register <Button onClick={() => setIsRegister(false)}>Login</Button>
        </div>
        <div style={{ width: "50%", height: "100vh", display: "flex" }}>
          <img
            src="login.jpg"
            alt="login"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ width: "50%", height: "100vh" }}>
          Login{" "}
          <Button
            onClick={() => {
              setIsRegister(true);
              setFirstAnimation(false);
            }}
          >
            Register
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
