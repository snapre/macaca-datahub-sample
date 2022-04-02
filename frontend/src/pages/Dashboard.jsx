import React, { useEffect, useState } from "react";
import { Card, Avatar, Alert } from "antd";
import userService from "../service/user";

const { Meta } = Card;

function Dashboard() {
  const [user, setUser] = useState({});
  const [dataType, setDataType] = useState("");

  useEffect(() => {
    async function getUser() {
      const res = await userService.getUserByUsername("snapre");
      if (res.success) {
        setUser(res.data);
        setDataType(res.type);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <Alert
        message={`Data source: ${dataType}`}
        type={dataType.includes("datahub") ? "info" : "success"}
        style={{ width: "500px", margin: "auto" }}
        showIcon
      />
      <Card
        style={{ width: 500, margin: "auto", marginTop: "16px" }}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={user.name}
          description={user.username}
        />
        <div style={{ marginTop: "16px" }}>
          <p>email: {user.email}</p>
          <p>mobile: {user.mobile}</p>
        </div>
      </Card>
    </>
  );
}

export default Dashboard;
