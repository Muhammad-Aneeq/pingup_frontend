"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  defaultValues,
  editDefaultValues,
  editFormSchema,
} from "@/utils/formSchema";

import FormItems from "@/custom_components/Form/FormItems";
import Image from "next/image";
import { editUser } from "@/app/client";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import Link from "next/link";

const UserProfile = ({ data }: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    defaultValues: editDefaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof editFormSchema>) {
    const res = await editUser(data._id, values);
    const role = Cookies.get('role')
    if (res) {
      form.reset(res);
      setIsEdit(false)
      toast("User Editted Successfully!");
      setTimeout(() => {
        if (role === "admin") {
          router.push("/users")
          router.refresh()
        } else {
          router.refresh();
        }
      }, 2000)
    }

  }

  useEffect(() => {
    const { _id, password, __v, ...rest } = data;

    // Reset form values with the updated data
    form.reset(rest);
  }, [data, form]);
  return (
    <div className="py-8 ">
      <div className="w-9/12 mx-auto px-8 text-end">
        <Link href="/login">Log Out</Link>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-9/12 mx-auto my-5 p-8  bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl"
        >
          <div className="flex justify-center">
            <Image
              src="/userProfile.jfif"
              alt="user"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="sm:block md:flex justify-between items-center gap-4">
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItems
                    label="Full Name"
                    placeholder="John Doe"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItems
                    label="Email"
                    placeholder="john.doe@example.com"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
          </div>
          <div className="sm:block md:flex justify-between items-center gap-4">
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItems
                    label="Phone Number"
                    placeholder="1234567890"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="cnic"
                render={({ field }) => (
                  <FormItems
                    label="CNIC"
                    placeholder="12345-1234567-1"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
          </div>
          <div className="sm:block md:flex justify-between items-center gap-4">
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItems
                    label="City"
                    placeholder="Your city"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItems
                    label="Country"
                    placeholder="Your country"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
          </div>
          <div className="sm:block md:flex justify-between items-center gap-4">
            <div className="w-1/2 my-2">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItems
                    label="Role"
                    placeholder="Your Role"
                    field={field}
                    isDisabled={!isEdit}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Button type="button" onClick={() => setIsEdit(true)}>Edit</Button>
            {isEdit && <Button type="submit">Save</Button>}
          </div>
        </form>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
