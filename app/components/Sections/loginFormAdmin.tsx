"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginFormAdmin: React.FC = () => (
  <Form
    name="basic"
    layout="vertical"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      className="text-start"
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="w-full bg-[var(--btn-bg)] text-[var(--btn-text)] hover:!bg-[var(--btn-bg-hv)] hover:!text-[var(--btn-text-hv)]"
      >
        Login
      </Button>
    </Form.Item>
  </Form>
);

export default LoginFormAdmin;
