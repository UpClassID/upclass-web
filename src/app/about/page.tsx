import Landing from "@/components/Landing";
import { Row, Col, Card } from "antd";

export default function About() {
  return (
    <main className="min-h-screen">
      <Landing>
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
      </Landing>
    </main>
  );
}
