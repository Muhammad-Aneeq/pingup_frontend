"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from 'js-cookie'
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { loginDefaultValues, loginFormSchema } from "@/utils/formSchema";
import FormItems from "@/custom_components/Form/FormItems";
import { useRouter } from "next/navigation";
import { loginUser } from "../client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginDefaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const res = await loginUser(values);
    toast("User logged In Successfully!");

    if (res.user.role !== "admin") {
      router.push(`/users/${res.user._id}`);
    } else {
      router.push("/users");
    }
    Cookies.set('role', res.user.role)
    form.reset(loginDefaultValues);
  }
  return (
    <div className="py-8 h-screen flex justify-center items-center flex-col">
      <h1 className="text-center text-3xl font-bold">Sign In </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-2/4 mx-auto my-5 p-8  bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-xl"
        >
          <div className="sm:block md:flex justify-between items-center gap-4">
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItems
                    label="Email"
                    placeholder="john.doe@example.com"
                    field={field}
                  />
                )}
              />
            </div>
          </div>
          <div className="sm:block md:flex justify-between items-center gap-4">
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItems
                    label="Password"
                    placeholder="••••••••"
                    field={field}
                    type="password"
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-between items-center" >
            <Button type="submit">Submit</Button>
            <Link href="/signup"> Signup Now </Link>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
