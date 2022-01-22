import React, {useState} from "react";
import { Form, Input, Button } from 'antd';
import { Table, DatePicker, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons'

const Movie = () => {
    const onDateChange = (date, dateString) => {
      console.log(date, dateString);
    }

    const [items, setItems] = useState([
        {
          key: '1',
          title: '첫 번째 할 일',
          date: "0000-00-00",
          edit: <MoreOutlined />,
        },
        {
          key: '2',
          title: '두 번째 할 일',
          date: "0000-00-00",
          edit: <MoreOutlined />,
        },
        {
          key: '3',
          title: '세 번째 할 일',
          date: "0000-00-00",
          edit: <MoreOutlined />,
        },
        {
          key: '4',
          title: '네 번째 할 일',
          date: "0000-00-00",
          edit: <MoreOutlined />,
        }
      ])
    const itemList = items.map((item) => <li>{item.title} {item.date} {item.edit}</li>)

    return (
      <div>

        
        <Form
          style={{display:"flex"}}
        >
          <Input style={{ width: 200 }} placeholder="영화을(를) 추가하시오." />
          <Space> 
            <DatePicker onChange={onDateChange} />
          </Space>
          <Button type="primary" htmlType="submit">
          등록
          </Button>
        </Form>
        
        {itemList}

        
      </div>
    );
}

export default Movie