import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { data, NavLink } from "react-router-dom";
import { schemaRegister } from "@/schema/schema";

type FormData = z.infer<typeof schemaRegister>;
// const form = useForm<FormData>({
//   resolver: zodResolver(schemaRegister),
//   defaultValues: {
//     username: "",
//     email: "",
//     password: "",
//   },
//   mode: "onChange",
// });

// const onSubmit = (data: FormData) => {
//   console.log(form);
//   console.log("ini data register", data);
// };
// console.log(onSubmit);
function AuthRegister() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-md">
        <h1 className="text-3xl font-bold text-green-600">Circle</h1>
        <h1 className="text-2xl font-bold mb-4">Create Account Circle</h1>

        <form className="space-y-4 w-full">
          <Input id="username" placeholder="Username" />
          <Input id="email" type="email" placeholder="Email" />
          <Input id="password" type="password" placeholder="Password" />
          <Button
            type="submit"
            className="w-full rounded-full bg-green-600 font-bold text-lg"
          >
            Create
          </Button>
        </form>

        <div className="text-sm mt-3">
          Already have account? {""}
          <NavLink
            to="/login"
            className=" hover:underline font-bold text-green-600"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;
