"use client";

import Landing from "@/components/Landing";
import {
  BulbTwoTone,
  DownOutlined,
  MailTwoTone,
  StarTwoTone,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Button,
  Card,
  Form,
  Input,
  Collapse,
  Dropdown,
  MenuProps,
  Space,
  Table,
} from "antd";
import TextArea from "antd/es/input/TextArea";

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

export default function Home() {
  const [form] = Form.useForm();

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

        <Row className="h-first px-10">
          <Col span={24} className="flex items-center justify-center">
            <Card className="w-4/5">
              <h1 className="text-5xl font-bold text-center mb-5">
                Professionals and Lifelong Learning Comes Here
              </h1>
              <p className="text-center">
                The best online platform to start your education with live tech
                bootcamps and online classes
              </p>
            </Card>
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
                  <Card className="w-full h-full">
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
                  <Card className="w-full h-full">
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
                  <Card className="w-full h-full">
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

        <Row className="h-first mt-first">
          <Col span={24} className="p-10">
            <Row className="mt-10">
              <Col span={24}>
                <div className="text-5xl text-center font-semibold">
                  Pricing for{" "}
                  <Dropdown menu={{ items }}>
                    <a style={{ color: "#20C49F" }}>
                      Bussiness
                      <DownOutlined className="text-xl" />
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

        <Row className="h-first mt-first md:mt-0">
          <Col span={24} className="flex items-center justify-center px-10">
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="flex items-center px-10 my-3"
              >
                <div>
                  <h1 className="text-4xl font-bold my-3">Contact Us</h1>
                  <div className="text-xl my-3">
                    UpClass Indonesia keeps you and your team connected no
                    matter where you are, allowing you to accomplish more
                    simultaneously. Fill out the form to get in touch with one
                    of our representatives. You can also request for a Free
                    UpClass Demo.
                  </div>
                  <div className="text-xl font-semibold my-3">
                    Have questions? Don&apos;t hestitate to contact us!
                  </div>
                  <div className="text-xl my-3">Contact Information</div>
                </div>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="px-10 my-3"
              >
                <Card>
                  <Form
                    layout={"vertical"}
                    form={form}
                    initialValues={{ layout: "vertical" }}
                  >
                    <Row>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        className="px-1"
                      >
                        <Form.Item label="First Name">
                          <Input placeholder="First Name" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        className="px-1"
                      >
                        <Form.Item label="Last Name">
                          <Input placeholder="Last Name" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        className="px-1"
                      >
                        <Form.Item label="Work E-mail">
                          <Input placeholder="Work e-mail address" />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        className="px-1"
                      >
                        <Form.Item label="Additional information related to your business needs">
                          <TextArea
                            rows={4}
                            placeholder="Describe your bussiness needs"
                            maxLength={6}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        className="px-1"
                      >
                        <Button className="flex">Send</Button>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Landing>
    </main>
  );
}
