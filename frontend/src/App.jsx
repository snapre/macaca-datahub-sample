import { Routes, Route, Link } from "react-router-dom";
import logo from "./favicon.svg";
import "./App.css";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";

import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <a className="logo" href="/">
            <Icon
              style={{ fontSize: 32, color: "#fff" }}
              component={() => <img width={64} src={logo} alt="logo" />}
            />
          </a>
          <div className="menu">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
              <Menu.Item key="/">
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="/create">
                <Link to="/create">Create</Link>
              </Menu.Item>
              <Menu.Item key="/about">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ backgroundColor: "#ffffff" }}>
          <div className="body-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Content>
        <Footer className="footer-container">
          <div>{`DataHub sample frontend ©${new Date().getFullYear()} Created by Macaca Team`}</div>
        </Footer>
      </Layout>
    </div>
  );
}

function About() {
  return (
    <div style={{ width: '80vw', margin: '0 auto'}}>
      <h2>Who are we?</h2>
      <p>Macaca Team: <a href="https://github.com/macacajs" target="_blank">https://github.com/macacajs</a></p>
    </div>
  );
}

export default App;
