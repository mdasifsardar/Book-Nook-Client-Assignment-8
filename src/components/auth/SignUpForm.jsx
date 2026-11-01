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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";
// import { useState } from "react";

export default function SignUpForm() {
  //    Use Router
  const router = useRouter();

  //  Password Check route
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // const validatePassword = (password) => {
  //   if (password.length < 6) {
  //     return "Password must be at least 6 characters long.";
  //   }
  //   if (!/[A-Z]/.test(password)) {
  //     return "Password must contain at least one uppercase letter.";
  //   }
  //   if (!/[a-z]/.test(password)) {
  //     return "Password must contain at least one lowercase letter.";
  //   }
  //   return null;
  // };

  // const handlePasswordChange = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);

  //   const validationError = validatePassword(value);
  //   setError(validationError);
  // };

  // Form Sumbmit
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        ...user,
      });

      if (error) {
        toast.error(error.message || "Somthing went wrong!");
        return;
      }

      if (data) {
        toast.success("Account created successfully!");
        router.push("/");
      }
    } catch (error) {
      toast.error(error.message || "Error");
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
        <CardTitle className="text-3xl">Create an account</CardTitle>
        <CardDescription className="text-sm">
          Register to start using BookNook.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

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
            <Label htmlFor="photoURL">Photo URL</Label>
            <Input
              id="photoURL"
              name="image"
              type="url"
              placeholder="Image URL"
            />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                // value={password}
                // onChange={handlePasswordChange}
                required
              />

              {/* Eye Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" /> // Password dekhar shomoy eta dekhabe
                ) : (
                  <Eye className="w-4 h-4" /> // Password hide thakle eta dekhabe
                )}
              </button>
            </div>

            {/* {error && (
              <p className="text-xs text-red-500 font-medium mt-1">{error}</p>
            )} */}
          </div>

          <Field>
            <Button
              type="submit"
              className="w-full bg-[#1E3A34] hover:bg-[#152B26] cursor-pointer text-white py-5 "
            >
              Sign Up
            </Button>

            <FieldDescription className="text-sm">
              Have an account?
              <a
                href="/sign-in"
                className="text-[#C89B5A] ml-1 hover:text-[#B78A4C]"
              >
                Login
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
}
