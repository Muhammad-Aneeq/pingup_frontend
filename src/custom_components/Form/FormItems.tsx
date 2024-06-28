import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormItems = ({ label, placeholder, field, isDisabled = false }: any) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input disabled={isDisabled} placeholder={placeholder} {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FormItems;
