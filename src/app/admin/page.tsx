"use client";

import Dashboard from "@/components/Dashboard";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Col, Row, Statistic } from "antd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Dashboard>
        <Breadcrumb
          className="mb-5"
          separator=">"
          items={[
            {
              title: "Admin",
            },
          ]}
        />
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </Dashboard>
    </main>
  );
}
