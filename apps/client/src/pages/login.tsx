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
import { LoginUser } from "@/integration/users";
import { ApiResponse } from "@/integration/IntegrationUtils";
import { toast } from "sonner";
import { ErrorAltert } from "@/cutomComponents/ErrorAlert";

/**
 * Home or login page
 */

const formSchema = z.object({
  username: z
    .string()
    .min(5, "User Name should be greater than 5 chars")
    .max(15, "User Name cannot be more than 15 chars"),
  password: z.string().min(6, "Password cannot be less than 6 chars"),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  const navigate = useNavigate();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await LoginUser(values);
      console.log(res);
    } catch (err: any) {
      const res = err.response.data as ApiResponse;
      // gets the first key of the error object if exitst

      if (res.statusCode === 401) {
        const ErrorToast = <ErrorAltert message={res.message} />;
        toast(ErrorToast);
      }
    }
  }

  return (
    <Card className="w-[350px] glass-back">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Form {...form}>
              <FormField
                name={"username"}
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
          <Button type="submit">Login</Button>
          <p
            className="text-xs underline font-light cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            New User ? Sign up
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
