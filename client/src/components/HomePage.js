import React from "react";
import { Form, Input, Button } from 'antd';
import Movie from "./Movie";


const HomePage = () => {
    return (
      <div>
        {/* <Category/> */}
        <Button type="link">Movie</Button>
        <Button type="link">Drama</Button>
        <Button type="link">Book</Button>
        <Movie/>
      </div>
    );
  }

export default HomePage;