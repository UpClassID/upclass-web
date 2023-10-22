"use client";

import Landing from "@/components/Landing";
import { BulbTwoTone, MailTwoTone, StarTwoTone } from "@ant-design/icons";
import { Row, Col, Button, Card } from "antd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing>
        <Row className="h-screen px-10">
          <Col span={24} className="flex items-center justify-center">
            <div className="w-4/5">
              <h1 className="text-center text-lg sm:text-4xl lg:text-8xl font-bold mb-8">
                Empower your organization with{" "}
                <span style={{ color: "#20C49F" }}>UpClass</span>
              </h1>
              <p className="text-center text-base sm:text-xl mb-5">
                Our platform seamlessly blends educational excellence with
                user-friendly technology for engaging and advanced learning
                experiences
              </p>
              <div className="flex justify-center">
                <Button type="primary" size="large" className="mx-3">
                  Check Our Services
                </Button>
                <Button size="large" className="mx-3">
                  View Pricing
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="h-80">
          <Col span={24} className="flex items-center justify-center">
            <div className="w-4/5">
              <p className="text-center text-base font-semibold mb-3">
                Trusted by some exceptional startups
              </p>
              <div className="flex justify-center align-middle">
                <img
                  src="logo-upclass.png"
                  alt="logo-upclass"
                  width={150}
                  height={20}
                  className="mx-3"
                />
                <img
                  src="logo-upclass.png"
                  alt="logo-upclass"
                  width={150}
                  height={20}
                  className="mx-3"
                />
                <img
                  src="logo-upclass.png"
                  alt="logo-upclass"
                  width={150}
                  height={20}
                  className="mx-3"
                />
                <img
                  src="logo-upclass.png"
                  alt="logo-upclass"
                  width={150}
                  height={20}
                  className="mx-3"
                />
                <img
                  src="logo-upclass.png"
                  alt="logo-upclass"
                  width={100}
                  height={10}
                  className="mx-3"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="h-screen px-10">
          <Col span={24} className="flex items-center justify-center">
            <div className="w-4/5">
              <h1 className="text-center text-4xl font-bold mb-5">
                Say Goodbye to Your Worries
              </h1>
              <p className="text-center text-base sm:text-xl mb-5">
                Just create courses and watch them get done. It's that easy.
              </p>
              <Row gutter={16}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={8}
                  className="flex my-1"
                >
                  <Card>
                    <div className="w-12 h-12 shadow rounded-full p-3 flex items-center justify-center mb-3">
                      <MailTwoTone className="text-lg" />
                    </div>
                    <h3 className="text-lg font-bold">Subscribe to a plan</h3>
                    <p>
                      Subscribe to a plan and create as many tasks as you need
                    </p>
                  </Card>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={8}
                  className="flex my-1"
                >
                  <Card>
                    <div className="w-12 h-12 shadow rounded-full p-3 flex items-center justify-center mb-3">
                      <StarTwoTone className="text-lg" />
                    </div>
                    <h3 className="text-lg font-bold">Receive your design</h3>
                    <p>
                      Receive your design within a few business days on average,
                      Monday to Friday.
                    </p>
                  </Card>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={8}
                  className="flex my-1"
                >
                  <Card>
                    <div className="w-12 h-12 shadow rounded-full p-3 flex items-center justify-center mb-3">
                      <BulbTwoTone className="text-lg" />
                    </div>
                    <h3 className="text-lg font-bold">
                      Perfect design you like
                    </h3>
                    <p>We'll revise the designs until you're 100% satisfied.</p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Landing>
    </main>
  );
}
