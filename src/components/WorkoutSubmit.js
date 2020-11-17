import React from 'react'

import {Card, Form, InputNumber, TimePicker, Button, Checkbox} from 'antd';

function WorkoutSubmit() {

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <Card>
      <Form
      {...formItemLayout}
      name="This Week Submission"
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      >
        This Event's scoring style: AMRAP - As Many Reps As Possible
        <Form.Item
        label="Ski"
        name="Event 1"
        key={1}
        rules={[{require: true, message:"Please input your results"}]}
        >
          <TimePicker style={{width:"100%"}}/>
          
        </Form.Item>

      </Form>
      
    </Card>
  )
}

export {WorkoutSubmit}
