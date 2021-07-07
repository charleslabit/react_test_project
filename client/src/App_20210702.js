import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";
import "antd/dist/antd.css";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { Row, Col } from "antd";
const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [drawer, setDrawer] = useState(false);
  const toggle = () => {
    setDrawer(!drawer);
  };
  return (
    <>
      <Router>
        <Layout style={{position:"relative"}}>
          <Sider
            trigger={null}
            collapsible
            collapsed={drawer}
            style={{ position: "fixed", height:'100%'}}
          >
            <Header style={{ padding: 0, color: "white", textAlign: "center" }}>
              {React.createElement(
                drawer ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  onClick: toggle,
                }
              )}
            </Header>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Header style={{ color: "white" }}>My Simple React Project</Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                height: "100%",
              }}
            >
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/about">
                  <About></About>
                </Route>
              </Switch>
            </Content>
            {/* <Footer
                style={{
                  backgroundColor: "rgba(0,21,41)",
                  color: "white",
                  textAlign: "right",
                }}
              >
                Charles Kenneth C. Labit - 2021
              </Footer> */}
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

export default App;
