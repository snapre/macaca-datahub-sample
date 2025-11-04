import { Form, Input, Button, notification } from "antd";
import userService from "../service/user";

const openNotification = (title, value) => {
  notification.open({
    message: `Notification: ${title}`,
    description: JSON.stringify(value, null, 2),
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

// Reusable form field configuration
const formFields = [
  {
    label: "Username",
    name: "username",
    message: "Please input your username!",
  },
  {
    label: "Email",
    name: "email",
    message: "Please input your email!",
  },
  {
    label: "Name",
    name: "name",
    message: "Please input your name!",
  },
  {
    label: "Mobile",
    name: "mobile",
    message: "Please input your mobile!",
  },
];

function CreateUser() {
  const onFinish = async (values) => {
    const res = await userService.createUser(values);
    if (res.success) {
      openNotification("Create user successfully", res);
      return;
    }
    openNotification("Create user failed", res.data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        username: "snapre",
        email: "snapre@gmail.com",
        name: "XiaoRui",
        mobile: "150xxxx4561",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{
        margin: "auto",
        width: "500px",
        padding: "32px",
        border: "1px solid #f0f0f0",
        borderRadius: "4px",
      }}
    >
      {formFields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={[
            {
              required: true,
              message: field.message,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ))}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateUser;
