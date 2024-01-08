import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { useForm } from "react-hook-form";

/**
 * Home or login page
 */
export function Login() {
  const form = useForm();
  console.log(form.formState);
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="UserName"
        render={() => (
          <FormItem>
            <FormLabel />
            <FormControl></FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={() => (
          <FormItem>
            <FormLabel title="Password" />
            <FormControl></FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
