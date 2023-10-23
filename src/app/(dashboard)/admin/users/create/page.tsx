"use client";

import Dashboard from "@/components/Dashboard";
import { Breadcrumb, Button, Card, Form, Input, Radio } from "antd";

export default function Home() {
  const [form] = Form.useForm();

  return (
    <main className="min-h-screen">
      <Dashboard>
        <Breadcrumb
          className="mb-5"
          separator=">"
          items={[
            {
              title: "Admin",
              href: "/admin",
            },
            {
              title: "Users",
              href: "/admin/users",
            },
            {
              title: "Create User",
            },
          ]}
        />
        <Card>
          <Form
            layout={"vertical"}
            form={form}
            initialValues={{ layout: "vertical" }}
          >
            <Form.Item label="Field A">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Card>
      </Dashboard>
    </main>
  );
}
