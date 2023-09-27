"use client";

import { Button, Card, Checkbox, Col, Input, Row } from "antd";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
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
        <div
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
          }}
        >
          <Card
            className="rounded-[24px] drop-shadow-lg"
            style={{ width: "30vw" }}
          >
            <div>Image</div>
            <div className="text-center">Sign Up</div>
            <div className="text-center">Start your journey with us</div>
            <div className="my-3">
              Full Name
              <Input placeholder="Enter your full name..." />
            </div>
            <div className="my-3">
              E-Mail Address
              <Input placeholder="Enter your email..." />
            </div>
            <div className="my-3">
              Password
              <Input.Password placeholder="Enter your password..." />
            </div>
            <Row className="my-3">
              <Col span={24}>
                <Checkbox>
                  I agree to all the{" "}
                  <span className="hover:underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="hover:underline cursor-pointer">
                    Terms of Use
                  </span>
                </Checkbox>
              </Col>
            </Row>
            <Row className="my-3">
              <Col span={24}>
                <Button className="w-full">Continue</Button>
              </Col>
            </Row>
            <div className="text-center">
              Have an account?{" "}
              <span
                className="hover:underline cursor-pointer"
                onClick={() => {
                  setIsRegister(false);
                }}
              >
                Sign In
              </span>
            </div>
          </Card>
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

        <div
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
          }}
        >
          <Card
            className="rounded-[24px] drop-shadow-lg"
            style={{ width: "30vw" }}
          >
            <div>Image</div>
            <div className="text-center">Welcome back!</div>
            <div className="text-center">
              Please enter your details to sign in
            </div>
            <div className="my-3">
              E-Mail Address
              <Input placeholder="Enter your email..." />
            </div>
            <div className="my-3">
              Password
              <Input.Password placeholder="Enter your password..." />
            </div>
            <Row className="my-3">
              <Col span={12} className="flex justify-start">
                <Checkbox>Remember me</Checkbox>
              </Col>
              <Col span={12} className="flex justify-end">
                <Link href="/">Forgot password?</Link>
              </Col>
            </Row>
            <Row className="my-3">
              <Col span={24}>
                <Button className="w-full">Sign in</Button>
              </Col>
            </Row>
            <div className="text-center">
              Don't have account yet?{" "}
              <span
                className="hover:underline cursor-pointer"
                onClick={() => {
                  setIsRegister(true);
                  setFirstAnimation(false);
                }}
              >
                Sign Up
              </span>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
