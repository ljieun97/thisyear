import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage'
import { Layout, Menu } from 'antd';

import './App.css'

function App() {

  const { Header, Content, Footer } = Layout;

  return (
    <Router>
      <Layout>
        <Header style={{
          display:"flex", 
          justifyContent:"space-between",
          alignItems:"center",
          background:"grey"
          }}>
          <div>logo</div>
          <Menu style={{display:"flex", listStyle:"none"}}>
            <Menu.Item key="1">menu 1</Menu.Item>
            <Menu.Item key="2">menu 2</Menu.Item>
            <Menu.Item key="3">menu 3</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{
          display:"flex", 
          background:"#e9ecef"
          }}>


            <Menu style={{listStyle:"none"}}>
              <Menu.Item key="1">menu 1</Menu.Item>
              <Menu.Item key="2">menu 2</Menu.Item>
              <Menu.Item key="3">menu 3</Menu.Item>
            </Menu>
          <Layout style={{background:"#fff", flexGrow:"1"}}>
            <Menu style={{display:"flex", listStyle:"none"}}>
              <Menu.Item key="1">menu 1</Menu.Item>
              <Menu.Item key="2">menu 2</Menu.Item>
              <Menu.Item key="3">menu 3</Menu.Item>
            </Menu>
            <Content>
              <Routes>
                <Route exact path="/" element={<HomePage/>} />
              </Routes>
            </Content>
          </Layout>
          
        </Layout>
        
        <Footer style={{ textAlign: 'center' }}>THISYEAR &copy; {new Date().getFullYear()} ljieun </Footer>
      </Layout>
    </Router>
  );
}

export default App;
