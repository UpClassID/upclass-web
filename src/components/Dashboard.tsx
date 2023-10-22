"use client";

import {
  ArrowLeftOutlined,
  BookOutlined,
  FundOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import Link from "next/link";
import "../styles/dashboard.css";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Sider, Content } = Layout;

const items: MenuItem[] = [
  {
    key: "overview",
    icon: <FundOutlined />,
    label: <Link href="/admin">Overview</Link>,
  },
  {
    key: "users",
    icon: <UserOutlined />,
    label: <Link href="/admin/users">Users</Link>,
  },
  {
    key: "groups",
    icon: <TeamOutlined />,
    label: <Link href="/admin/groups">Groups</Link>,
  },
  {
    key: "courses",
    icon: <BookOutlined />,
    label: <Link href="/">Courses</Link>,
    children: [
      {
        key: "courses-1",
        icon: <BookOutlined />,
        label: <Link href="/courses">Courses 1</Link>,
      },
      {
        key: "courses-2",
        icon: <BookOutlined />,
        label: <Link href="/courses">Courses 2</Link>,
      },
      {
        key: "courses-3",
        icon: <BookOutlined />,
        label: <Link href="/courses">Courses 3</Link>,
      },
      {
        key: "courses-4",
        icon: <BookOutlined />,
        label: <Link href="/courses">Courses 4</Link>,
      },
    ],
  },
  {
    key: "menu-3",
    icon: <MenuOutlined />,
    label: <Link href="/admin">Menu 3</Link>,
  },
  {
    key: "menu-4",
    icon: <MenuOutlined />,
    label: <Link href="/admin">Menu 4</Link>,
  },
  {
    key: "menu-5",
    icon: <MenuOutlined />,
    label: <Link href="/admin">Menu 5</Link>,
  },
];

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="relative"
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["overview"]}
          items={items}
        />
        <Menu
          className="menu-secondary"
          theme="dark"
          mode="inline"
          items={[
            {
              key: "website",
              icon: <ArrowLeftOutlined />,
              label: <Link href="/">Back to Website</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: "0 24px",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
