import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sider>Side Menu</Sider>
      <Layout>
        <Header>Top Menu</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}
