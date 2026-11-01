"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Field, FieldDescription, FieldSeparator } from "../ui/field";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignInForm = () => {
  //    Use Router
  const router = useRouter();

  // Form Sumbmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        ...user,
      });

      if (error) {
        toast.error(error?.message || "Somthing went wrong!");
        return;
      }

      if (data) {
        toast.success("Login successfully!");
        router.push("/");
      }
    } catch (error) {
      toast.error(error?.message || "Error");
    }
  };

  //      Social login by google
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error(error?.message || "Google login failed!!");
        return;
      }

      if (data) {
        toast.success("Google login Successfull!");
      }
    } catch (error) {
      toast.error(error?.message || "Error");
    }
  };

  //      Social login by github
  const handleGithubLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "github",
      });

      if (error) {
        toast.error(error?.message || "Github login failed!!");
        return;
      }

      if (data) {
        toast.success("Github login Successfull!");
      }
    } catch (error) {
      toast.error(error?.message || "Error");
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="text-center mb-3">
        <CardTitle className="text-3xl">Login your account</CardTitle>
        <CardDescription className="text-sm">
          Login to start using BookNook.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Your Password"
              // value={password}
              // onChange={handlePasswordChange}
              required
            />

            {/* {error && (
              <p className="text-xs text-red-500 font-medium mt-1">{error}</p>
            )} */}
          </div>

          <Field>
            <Button
              type="submit"
              className="w-full bg-[#1E3A34] hover:bg-[#152B26] cursor-pointer text-white py-5 "
            >
              Login
            </Button>
            <FieldDescription className="text-sm">
              Don&apos;t have an account?
              <a href="#" className="text-[#C89B5A] ml-1 hover:text-[#B78A4C]">
                Sign up
              </a>
            </FieldDescription>
          </Field>

          <div className="flex items-center ">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="px-3 text-sm text-slate-500 font-medium">
              Or continue with
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <Field>
            <Button
              onClick={handleGoogleLogin}
              variant="fill"
              type="button"
              className="w-full bg-[#1E3A34] hover:bg-[#152B26]  cursor-pointer text-white py-5"
            >
              <FcGoogle className="w-5 h-5" />
              Login with Google
            </Button>
            <Button
              onClick={handleGithubLogin}
              variant="fill"
              type="button"
              className="w-full bg-[#1E3A34] hover:bg-[#152B26] cursor-pointer text-white py-5"
            >
              <FaGithub className="w-5 h-5" />
              Login with Github
            </Button>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
