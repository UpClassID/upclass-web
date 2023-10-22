"use client";

import { Card, Input, Row, Col, Button } from "antd";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card className="rounded-[24px] drop-shadow-lg" style={{ width: "30vw" }}>
        <div>Image</div>
        <div className="text-center">Forgot Password?</div>
        <div className="text-center">
          Enter your email address and we'lll send you a link to reset your
          password
        </div>

        <div className="my-3">
          E-Mail Address
          <Input placeholder="Enter your email..." />
        </div>
        <Row className="my-3">
          <Col span={24}>
            <Button className="w-full">Send Email</Button>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Link href="/login">Back to Login</Link>
        </div>
      </Card>
    </div>
  );
}
