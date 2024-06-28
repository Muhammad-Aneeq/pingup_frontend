import { UserTable } from "@/custom_components/Table/UserTable";
import React from "react";
import { getAllUsers } from "../server";

const page = async () => {
  const users = await getAllUsers();

  return <UserTable data={users} />;
};

export default page;
