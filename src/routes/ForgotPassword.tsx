import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-md">
        <h1 className="text-3xl font-bold  text-green-600">Circle</h1>
        <h1 className="text-md font-bold mb-4">Forgot Password</h1>
        <form className="space-y-4 w-full max-w-md">
          <Input id="email" type="email" placeholder="Email / Username" />
          <Button
            type="submit"
            className="w-full rounded-full bg-green-600 text-lg font-bold"
          >
            Send Introduction
          </Button>
        </form>
        <div className="mt-4">
          Already have account?{" "}
          <NavLink to="/login" className="text-green-600">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
