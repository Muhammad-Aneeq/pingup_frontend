import { getUser } from "@/app/server";
import UserProfile from "@/custom_components/Profile/UserProfile";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await getUser(id);
  return <UserProfile data={user} />;
};

export default page;
