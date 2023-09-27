"use client";

import Landing from "@/components/Landing";
import { Row, Col, Button } from "antd";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Landing>
        <Row className="w-screen h-screen">
          <Col span={24} className="flex items-center justify-center">
            <Row>
              <Col>
                <h1 className="text-center text-8xl font-bold">
                  Empower your organization's growth
                </h1>
                <p>
                  Our team's design brilliance is matched by our no-code
                  wizardry, resulting in exceptional products that are both
                  visually stunning and technically robust - with no-code.
                </p>
                <div>
                  <Button type="primary" className="mx-3">
                    Primary Button
                  </Button>
                  <Button className="mx-3">Default Button</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
      </Landing>
    </main>
  );
}
