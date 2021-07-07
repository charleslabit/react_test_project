import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Layout } from "antd";
import { Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [drawer, setDrawer] = useState(false);
  const toggle = () => {
    setDrawer(!drawer);
  };
  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Row justify="end" style={{ textAlign: "right" }}>
              <Col md={0} xxl={12} xl={12} lg={12}>
                <Button type="text" style={{ color: "white" }}>
                  <Link to="/">Home</Link>
                </Button>
                <Button type="text" style={{ color: "white" }}>
                  <Link to="/about">About</Link>
                </Button>
                <Button type="text" style={{ color: "white" }}>
                  <Link to="/contact">Contact</Link>
                </Button>
              </Col>
            </Row>
          </Header>
          <Content style={{ marginLeft: "1em", marginTop: "5em" }}>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
            </Switch>
          </Content>
          <Footer
            style={{
              backgroundColor: "rgba(0,21,41)",
              color: "white",
              textAlign: "right",
            }}
          >
            Charles Kenneth C. Labit - @2021
          </Footer>
        </Layout>
      </Router>
    </>
  );
};

export default App;
