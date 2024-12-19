import React, { useState } from 'react';
import axios from 'axios';
import Headers from '.';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => { 
  const navigate = useNavigate();


  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      localStorage.setItem('token', response.data.token); // Lưu token
      message.success('Login successful!');
      navigate('/home'); // Chuyển hướng đến trang chủ
    } catch (error) {
      message.error('Login failed. Please try again.');
    }
  };
  return (
    <div className="container">
      <Headers/>
      <h2 className="header-login">ĐĂNG NHẬP</h2>
      <div className="form-login">
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        width: 540,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password visibilityToggle={true} prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="/forgot">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="/register">Register now!</a>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default Login;