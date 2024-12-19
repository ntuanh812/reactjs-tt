import React, { Component } from 'react';
import axios from 'axios';
import Headers from '.';
import { Button, Alert, Form, Input, Typography, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const RegisterForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/register', values);
      message.success('Registration successful!');
    } catch (error) {
      message.error('Registration failed. Please try again.');
    }
    // Ví dụ gọi API để gửi dữ liệu
    axios.post('/api/register', values)
      .then((response) => {
        console.log('Success:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="container">
      <Headers/>
      <h2>ĐĂNG KÝ</h2>
      <div className="form-register">
    <Form
      form={form}
      name="dependencies"
      autoComplete="off"
      style={{
        width: 600,
      }}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Fullname"
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password visibilityToggle={true} type="password"/>
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password visibilityToggle={true} type="password"/>
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default RegisterForm;
