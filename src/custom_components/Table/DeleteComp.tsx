"use client";
import { deleteUser } from "@/app/client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteComp = ({ id }: any) => {
  const router = useRouter();
  const handleDelete = async (id: any) => {
    const res = await deleteUser(id);

    if (res) {
      toast("User Deleted Successfully!");
      setTimeout(() => {
        router.refresh();
      }, 2000)
    }


  };
  return (
    <>
      <MdDelete
        className="text-end cursor-pointer"
        fontSize={20}
        onClick={() => handleDelete(id)}
      />

    </>
  );
};

export default DeleteComp;
