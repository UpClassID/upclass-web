import "../styles/landing.css";

import { Col, Layout, Row } from "antd";

const { Header, Footer, Content } = Layout;

export default function Landing({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header className="landing-header">
        <Row>
          <Col span={6} className="flex justify-start">
            UpClass Icon
          </Col>
          <Col span={12} className="flex justify-center">
            Menu
          </Col>
          <Col span={6} className="flex justify-end">
            Login
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
