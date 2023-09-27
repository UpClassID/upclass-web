"use client";

import Landing from "@/components/Landing";
import { Row, Col, Button } from "antd";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Landing>
        <Row>
          <Col span={24} className="flex items-center justofy-center">
            <div>
              <h1>Empower your organization's growth</h1>
              <p></p>
              <div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Landing>
    </main>
  );
}
