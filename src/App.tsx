import { Button, Card, Col, Layout, Row, Typography } from "antd";
import { motion } from "framer-motion";
import Aeroplane from "./assets/aeroplane1.jpg";
import Dubai from "./assets/dubai.jpg";
import Flights from "./assets/flights.jpg";
import Holiday from "./assets/holiday.jpg";
import Hotel from "./assets/hotel.jpg";
import Available from "./assets/icon/24-hour.png";
import BestPrice from "./assets/icon/best-price.png";
import Dependable from "./assets/icon/dependable.png";
import London from "./assets/palace.jpg";
import Paris from "./assets/paris.jpg";
import ReachOut from "./assets/reach-out.jpg";
import logo from "./assets/icon/logo.jpg";

import "antd/dist/reset.css";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#e6f7ff" }}>
      {/* Header Section */}
      <Header
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "12px 50px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          height: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" height={60} />
          <Title level={3} style={{ color: "#1890ff", margin: 0 }}>
            Universe
          </Title>
        </div>
      </Header>

      {/* Hero Section */}
      <Content
        style={{
          padding: "80px 50px",
          background: "linear-gradient(to bottom, #1890ff, #001529)",
          color: "#fff",
          textAlign: "center",
          minHeight: "50vh",
        }}
      >
        <Row justify="center" align="middle" gutter={[32, 32]}>
          {/* Left Content */}
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Title
                style={{ color: "#fff", fontSize: "56px", fontWeight: "bold" }}
              >
                Explore the World with Ease
              </Title>
              <Text style={{ fontSize: "20px", color: "#e0e0e0" }}>
                Book your dream vacation or business trip through our trusted
                TravelStart platform.
              </Text>
              <br />
              <br />
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#ffcc00",
                    borderColor: "#ffcc00",
                    fontSize: "22px",
                    padding: "14px 40px",
                    boxShadow: "0 6px 12px rgba(255, 204, 0, 0.3)",
                    color: "#001529",
                    fontWeight: "bold",
                  }}
                  href="https://www.travelstart.com.ng/?affId=220029&utm_source=affiliate&utm_medium=220029"
                  target="_blank"
                >
                  Book Now
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col xs={24} md={12}>
            <motion.img
              src={Aeroplane}
              alt="Travel Banner"
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </Content>

      {/* Holiday, Hotel, Flights Section */}
      <Content
        style={{
          padding: "50px",
          backgroundColor: "#fff",
        }}
      >
        <Title style={{ color: "#1890ff", textAlign: "center" }}>
          Our Services
        </Title>
        <Text
          style={{
            fontSize: "16px",
            color: "#595959",
            textAlign: "center",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Discover how we make your travel planning seamless and enjoyable.
        </Text>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Holiday" src={Holiday} />}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Meta
                title="Holiday Packages"
                description="Plan your perfect holiday with amazing packages tailored for you."
              />
              <Button
                type="link"
                href="https://www.travelstart.com.ng/?affId=220029&utm_source=affiliate&utm_medium=220029"
                target="_blank"
                style={{ marginTop: "10px", color: "#1890ff" }}
              >
                Book Now
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Hotel" src={Hotel} />}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Meta
                title="Hotels & Resorts"
                description="Find the best deals on top-rated hotels and luxurious resorts."
              />
              <Button
                type="link"
                href="https://www.travelstart.com.ng/?affId=220029&utm_source=affiliate&utm_medium=220029"
                target="_blank"
                style={{ marginTop: "10px", color: "#1890ff" }}
              >
                Book Now
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Flight" src={Flights} />}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Meta
                title="Flights"
                description="Book affordable flights to your favorite destinations with ease."
              />
              <Button
                type="link"
                href="https://www.travelstart.com.ng/?affId=220029&utm_source=affiliate&utm_medium=220029"
                target="_blank"
                style={{ marginTop: "10px", color: "#1890ff" }}
              >
                Book Now
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Reach Out Section */}
      <Content
        style={{
          padding: "50px",
          backgroundImage: `url(${ReachOut})`,
          height: "360px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            padding: "50px",
            borderRadius: "10px",
            display: "inline-block",
          }}
        >
          <Title style={{ color: "#fff" }}>Ready to Plan Your Trip?</Title>
          <Text style={{ fontSize: "18px", color: "#ddd" }}>
            Let us help you book the perfect trip with ease and confidence.
          </Text>
          <br />
          <br />
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              fontSize: "20px",
              padding: "10px 30px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            href="https://www.travelstart.com.ng/?affId=220029&utm_source=affiliate&utm_medium=220029"
            target="_blank"
          >
            Book Now
          </Button>
        </div>
      </Content>

      {/* Why Choose Us Section */}
      <Content style={{ padding: "50px", backgroundColor: "#fff" }}>
        <Row gutter={[16, 16]} justify="center">
          <Col span={24}>
            <Title style={{ color: "#1890ff", textAlign: "center" }}>
              Why Choose Us?
            </Title>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <img
              src={BestPrice}
              alt="icon"
              style={{ marginBottom: "10px" }}
              height={100}
            />
            <Title level={4} style={{ color: "#1890ff" }}>
              Affordable Prices
            </Title>
            <Text>
              Get the best deals for your travels at unbeatable prices.
            </Text>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <img
              src={Dependable}
              alt="icon"
              style={{ marginBottom: "10px" }}
              height={100}
            />
            <Title level={4} style={{ color: "#1890ff" }}>
              Reliable Service
            </Title>
            <Text>We partner with TravelStart to ensure smooth bookings.</Text>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <img
              src={Available}
              alt="icon"
              style={{ marginBottom: "10px" }}
              height={100}
            />
            <Title level={4} style={{ color: "#1890ff" }}>
              24/7 Support
            </Title>
            <Text>Our team is available around the clock to assist you.</Text>
          </Col>
        </Row>
      </Content>

      {/* Popular Destinations Section */}
      <Content style={{ padding: "50px", backgroundColor: "#fff" }}>
        <Title style={{ color: "#1890ff", textAlign: "center" }}>
          Popular Destinations
        </Title>
        <Text
          style={{
            fontSize: "16px",
            color: "#595959",
            textAlign: "center",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Explore the most visited cities around the world.
        </Text>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={
                <img alt="paris" src={Paris} style={{ height: "355px" }} />
              }
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Meta title="Paris" description="Eiffel Tower, Louvre Museum" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="dubai" src={Dubai} />}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Meta title="Dubai" description="Burj Khalifa, Desert Safari" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="london" src={London} />}
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            >
              <Meta title="London" description="Big Ben, Buckingham Palace" />
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#1890ff",
          color: "#fff",
        }}
      >
        <Text>Universal Express Travels & Tours Limited © 2025</Text>
      </Footer>
    </Layout>
  );
};

export default App;
