import Link from "next/link";
import "../styles/landing.css";

import { Button, Col, Layout, Row } from "antd";

const { Header, Footer, Content } = Layout;

export default function Landing({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header className="landing-header">
        <Row>
          <Col span={6} className="flex justify-start items-center">
            <img
              src="logo-upclass.png"
              alt="logo-upclass"
              width={100}
              height={10}
            />
          </Col>
          <Col span={12} className="flex justify-center">
            <Link href="/" className="mx-5">
              Home
            </Link>
            <Link href="/about" className="mx-5">
              About
            </Link>
            <Link href="/services" className="mx-5">
              Services
            </Link>
            <Link href="/pricing" className="mx-5">
              Pricing
            </Link>
            <Link href="/contact" className="mx-5">
              Contact
            </Link>
          </Col>
          <Col span={6} className="flex justify-end items-center">
            <Button type="text" href="/login">
              Sign in
            </Button>
          </Col>
        </Row>
      </Header>
      <Content className="landing-content">{children}</Content>
      <Footer className="landing-footer">
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            © 2023 UpClass Indonesia. All rights reserved.
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
