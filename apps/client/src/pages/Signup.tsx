import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField } from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "@/integration/users";
import { ApiResponse } from "@/integration/IntegrationUtils";
/**
 * Home or login page
 */

const formSchema = z.object({
  userName: z
    .string()
    .min(5, "User Name should be greater than 5 chars")
    .max(15, "User Name cannot be more than 15 chars"),
  password: z.string().min(6, "Password cannot be less than 6 chars"),
});

export default function Signup() {
  // console.log(all);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { userName: "", password: "" },
  });

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await CreateUser(values);
      console.log(res);
    } catch (err: any) {
      const res = err.response.data as ApiResponse;
      // gets the first key of the error object if exitst

      // if there are errors just take the first error, as we show only one error per field
      let errorField, error;
      if (Object.keys(res.errors || {}).length) {
        // check the length of the error obj
        // if there is an error get its first keys value
        errorField = Object.keys(res?.errors || {})[0];
        const firstError = res?.errors?.[errorField];
        // check whether the passed in error is [] or string, if its an array take its first elemtn
        error = firstError instanceof Array ? firstError[0] : firstError;
      }

      if (errorField)
        form.setError(
          errorField as keyof z.infer<typeof formSchema>,
          { message: error },
          { shouldFocus: true },
        );
    }
  }

  return (
    <Card className="w-[350px] glass-back">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Form {...form}>
              <FormField
                name={"userName"}
                render={(fieldProps) => {
                  const error = fieldProps.fieldState?.error?.message;
                  return (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Username</Label>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="username"
                          {...fieldProps.field}
                        />
                      </FormControl>
                      <p
                        className={`transition-transform text-sm font-medium text-destructive text-center ${
                          error ? "scale-100" : "scale-0"
                        }`}
                      >
                        {" "}
                        {error}
                      </p>
                    </div>
                  );
                }}
              ></FormField>

              <FormField
                name={"password"}
                render={(fieldProps) => {
                  const error = fieldProps.fieldState.error?.message;
                  return (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <FormControl>
                        <Input
                          id="name"
                          type="password"
                          placeholder="password"
                          {...fieldProps.field}
                        />
                      </FormControl>
                      <p
                        className={`transition-transform text-sm  font-medium text-destructive text-center ${
                          error ? "scale-100" : "scale-0"
                        }`}
                      >
                        {error || ""}
                      </p>
                    </div>
                  );
                }}
              ></FormField>
            </Form>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center flex-col gap-3">
          <Button type="submit">Sign Up</Button>
          <p
            className="text-xs underline font-light cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            user Already? Sign in
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
