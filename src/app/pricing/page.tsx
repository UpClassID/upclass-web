"use client";

import Landing from "@/components/Landing";
import { SmileOutlined, DownOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  MenuProps,
  Dropdown,
  Space,
  Collapse,
  Table,
} from "antd";

const items: MenuProps["items"] = [
  {
    key: "pricing-personal",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Personal
      </a>
    ),
  },
  {
    key: "pricing-bussiness",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Bussiness
      </a>
    ),
  },
  {
    key: "pricing-industry",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Industry
      </a>
    ),
  },
];

const productDataSource = [
  {
    key: "1",
    feature: "Account",
    basic: "30",
    pro: "50",
    business: "50 + 1 Ops + 1 Owner",
  },
  {
    key: "2",
    feature: "Memory",
    basic: "10 gb",
    pro: "10 gb",
    business: "30 gb",
  },
  {
    key: "3",
    feature: "Courses",
    basic: "10",
    pro: "15",
    business: "20",
  },
  {
    key: "4",
    feature: "Sub Courses",
    basic: "10",
    pro: "15",
    business: "15",
  },
];

const columns = [
  {
    title: "Feature",
    dataIndex: "feature",
    key: "feature",
    width: "25%",
  },
  {
    title: "Basic",
    dataIndex: "basic",
    key: "basic",
    width: "25%",
  },
  {
    title: "Pro",
    dataIndex: "pro",
    key: "pro",
    width: "25%",
  },
  {
    title: "Business",
    dataIndex: "business",
    key: "business",
    width: "25%",
  },
];

const { Panel } = Collapse;

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <Landing>
        <Row className="h-first mt-first">
          <Col span={24} className="p-10">
            <Row className="mt-10">
              <Col span={24}>
                <div className="text-5xl text-center font-semibold">
                  Pricing for{" "}
                  <Dropdown menu={{ items }}>
                    <a style={{ color: "#20C49F" }}>
                      <Space>
                        Bussiness
                        <DownOutlined className="text-xl" />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </Col>
            </Row>
            <Row gutter={16} className="mt-5 mb-10">
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                className="flex p-1 my-1"
              >
                <Card className="w-full h-full">
                  <h3 className="font-bold">Subscribe to a plan</h3>
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
                className="flex p-1 my-1"
              >
                <Card className="w-full h-full">
                  <h3 className="font-bold">Receive your design</h3>
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
                className="flex p-1 my-1"
              >
                <Card className="w-full h-full">
                  <h3 className="font-bold">Perfect design you like</h3>
                  <p>We'll revise the designs until you're 100% satisfied.</p>
                </Card>
              </Col>
            </Row>
            <Row className="my-10">
              <Col span={24}>
                <h3 className="text-3xl font-bold text-center mb-5">
                  Compare All Features
                </h3>
                <Card>
                  <Row className="px-[12px]">
                    <Col span={6} className="px-[12px]"></Col>
                    <Col span={6} className="px-[12px]">
                      Basic
                    </Col>
                    <Col span={6} className="px-[12px]">
                      Pro
                    </Col>
                    <Col span={6} className="px-[12px]">
                      Bussiness
                    </Col>
                  </Row>
                  <Collapse ghost>
                    <Panel
                      header={<span className="font-bold">Core Features</span>}
                      key="1"
                    >
                      <Table
                        showHeader={false}
                        pagination={false}
                        dataSource={productDataSource}
                        columns={columns}
                      />
                    </Panel>
                    <Panel
                      header={<span className="font-bold">Live Sessions</span>}
                      key="2"
                    >
                      <Table
                        showHeader={false}
                        pagination={false}
                        dataSource={productDataSource}
                        columns={columns}
                      />
                    </Panel>
                    <Panel
                      header={<span className="font-bold">Team Meet</span>}
                      key="3"
                    >
                      <Table
                        showHeader={false}
                        pagination={false}
                        dataSource={productDataSource}
                        columns={columns}
                      />
                    </Panel>
                  </Collapse>
                </Card>
              </Col>
            </Row>
            <Row className="my-10">
              <Col span={24}>
                <h3 className="text-3xl font-bold text-center mb-5">
                  Frequently Asked Questions
                </h3>
                <Card>
                  <Collapse ghost>
                    <Panel
                      header={<span className="font-bold">Question 1</span>}
                      key="1"
                    >
                      <p>Test</p>
                    </Panel>
                    <Panel
                      header={<span className="font-bold">Question 2</span>}
                      key="2"
                    >
                      <p>Test</p>
                    </Panel>
                    <Panel
                      header={<span className="font-bold">Question 3</span>}
                      key="3"
                    >
                      <p>Test</p>
                    </Panel>
                  </Collapse>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Landing>
    </main>
  );
}
