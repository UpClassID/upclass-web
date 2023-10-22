"use client";

import Landing from "@/components/Landing";
import { Row, Col, Card, Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function Contact() {
  const [form] = Form.useForm();

  return (
    <main className="min-h-screen">
      <Landing>
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
