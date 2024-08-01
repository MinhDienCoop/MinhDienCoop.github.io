import { Button, Upload, Select, Form, message } from "antd";
import type { UploadProps, FormProps } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { info } from "console";

interface UploadModalProps {}

type FieldType = {
  file: string;
  fileType: string;
};

const UploadModal = ({}: UploadModalProps) => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    // action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="file"
        rules={[{ required: true, message: "Please input your file!" }]}
      >
        <Upload.Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Upload.Dragger>
      </Form.Item>

      <Form.Item<FieldType>
        label="File type"
        name="fileType"
        rules={[{ required: true, message: "Please select fileType!" }]}
      >
        <Select
          defaultValue="lucy"
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
      </Form.Item>

      <Form.Item className="w-full">
        <Button type="primary" htmlType="submit" className="w-full">
          Upload
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UploadModal;
