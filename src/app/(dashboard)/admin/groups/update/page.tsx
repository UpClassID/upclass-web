"use client";

import Dashboard from "@/components/Dashboard";
import { Breadcrumb } from "antd";

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
              href: "/admin",
            },
            {
              title: "Users",
              href: "/admin/users",
            },
            {
              title: "Update Group",
            },
          ]}
        />
        <div>Content will be here</div>
      </Dashboard>
    </main>
  );
}
