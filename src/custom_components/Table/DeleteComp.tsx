"use client";
import { deleteUser } from "@/app/client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteComp = ({ id }: any) => {
  const router = useRouter();
  const handleDelete = async (id: any) => {
    const res = await deleteUser(id);
    console.log("res>>>", res);
    router.refresh();
  };
  return (
    <MdDelete
      className="text-end cursor-pointer"
      fontSize={20}
      onClick={() => handleDelete(id)}
    />
  );
};

export default DeleteComp;
