"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

import { defaultValues, formSchema } from "@/utils/formSchema";

import FormItems from "@/custom_components/Form/FormItems";
import { registerUser } from "../client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await registerUser(values);
    if (res) {
      router.push("/login");
    }
    form.reset(defaultValues);
  }
  return (
    <div className="py-8 ">
      <h1 className="text-center text-3xl font-bold">Sign Up </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-9/12 mx-auto my-5 p-8  bg-blue-400 rounded-xl"
        >
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
                  />
                )}
              />
            </div>
            <div className="w-full my-2">
              <FormField
                control={form.control}
                name="cpassword"
                render={({ field }) => (
                  <FormItems
                    label="Confirm Password"
                    placeholder="••••••••"
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItems
                    label="Phone Number"
                    placeholder="1234567890"
                    field={field}
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
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button type="submit">Submit</Button>
            <Link href="/login"> Already Signed In? Login Now </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
