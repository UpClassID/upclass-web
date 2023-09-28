"use client";

import Landing from "@/components/Landing";
import { Row, Col, Button, Card } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.pageYOffset);
      console.log(scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollY]);

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
                  Check our services
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
              <p className="text-center text-base font-bold mb-3">
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
                Just create tasks and watch them get done. It's that easy.
              </p>
              <Row gutter={16}>
                <Col span={8}>
                  <Card>
                    <p>Card content</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <p>Card content</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card>
                    <p>Card content</p>
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
