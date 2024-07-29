"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";

type FieldType = {
  username: string;
  email: string;
  password?: string;
  resetPassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
  if (values.password !== values.resetPassword) {
    return message.error("Password and Reset password must match.");
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterForm: React.FC = () => (
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
      label="Email"
      name="email"
      rules={[
        { required: true, message: "Please input your username!" },
        { type: "email" },
      ]}
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
      label="Reset password"
      name="resetPassword"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="w-full bg-[var(--btn-bg)] text-[var(--btn-text)] hover:!bg-[var(--btn-bg-hv)] hover:!text-[var(--btn-text-hv)]"
      >
        Register
      </Button>
    </Form.Item>
  </Form>
);

export default RegisterForm;
