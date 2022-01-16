import React, {useState} from "react";
import { Input } from 'antd';
import { CalendarOutlined, TrophyOutlined, MoreOutlined, MinusOutlined } from '@ant-design/icons'

function HomePage() {
    const [items, setItems] = useState([
        {
          id: 1,
          rank: <TrophyOutlined outlinedColor="gray"/>,
          title: '첫 번째 할 일',
          note: "언니랑 집에서",
          date: "0000-00-00",
          edit: <MoreOutlined />,
          checked: true
        },
        {
          id: 2,
          rank: <TrophyOutlined />,
          title: '두 번째 할 일',
          note: "친구집에서",
          date: "0000-00-00",
          edit: <MoreOutlined />,
          checked: true
        },
        {
          id: 3,
          rank: <TrophyOutlined />,
          title: '세 번째 할 일',
          note: "영화관에서",
          date: "0000-00-00",
          edit: <MoreOutlined />,
          checked: false
        },
        {
          id: 4,
          rank: <MinusOutlined />,
          title: '네 번째 할 일',
          note: "cgv",
          date: "0000-00-00",
          edit: <MoreOutlined />,
          checked: false
        }
      ])
    
    const itemList = items.map((item) => <li key={item.id}>{item.rank} {item.title} {item.note} {item.date} {item.edit}</li>)

    return (
      <div>
        <h2>2022 영화<MoreOutlined/></h2>
        <Input placeholder="영화을(를) 추가하시오." /><CalendarOutlined />
        {itemList}
        
      </div>
    );
  }

export default HomePage;