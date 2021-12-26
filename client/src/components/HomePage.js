import React from "react";
import { Input } from 'antd';
import { StarOutlined, CalendarOutlined } from '@ant-design/icons'

function HomePage() {
    return (
      <div>
        <h2>2021 OO</h2>
        <Input placeholder="OO을(를) 추가하시오." /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><CalendarOutlined />
      </div>
    );
  }

export default HomePage;