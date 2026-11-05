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
import { Field, FieldDescription } from "../ui/field";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignUpForm() {
  const router = useRouter();

  // Password States
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // Password Validation
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }

    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }

    return null;
  };

  // Password Input Change
  const handlePasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);
    setError(validatePassword(value));
  };

  // Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check Password
    const passwordError = validatePassword(password);

    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError(null);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        ...user,
      });

      if (error) {
        toast.error(error.message || "Something went wrong!");
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

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });

      if (error) {
        toast.error(error.message || "Google login failed!");
        return;
      }

      if (data) {
        toast.success("Google login successful!");
      }
    } catch (error) {
      toast.error(error.message || "Error");
    }
  };

  // Github Login
  const handleGithubLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "github",
      });

      if (error) {
        toast.error(error.message || "Github login failed!");
        return;
      }

      if (data) {
        toast.success("Github login successful!");
      }
    } catch (error) {
      toast.error(error.message || "Error");
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
          {/* Name */}
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

          {/* Email */}
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

          {/* Photo URL */}
          <div className="space-y-2">
            <Label htmlFor="photoURL">Photo URL</Label>

            <Input
              id="photoURL"
              name="image"
              type="url"
              placeholder="Image URL"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />

              {/* Eye Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Password Error */}
            {error && (
              <p className="text-xs text-red-500 font-medium mt-1">{error}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <Field>
            <Button
              type="submit"
              className="w-full bg-[#1E3A34] hover:bg-[#152B26] cursor-pointer text-white py-5"
            >
              Sign Up
            </Button>

            <FieldDescription className="text-sm">
              Have an account?
              <Link
                href="/sign-in"
                className="text-[#C89B5A] ml-1 hover:text-[#B78A4C]"
              >
                Login
              </Link>
            </FieldDescription>
          </Field>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-grow border-t border-slate-200"></div>

            <span className="px-3 text-sm text-slate-500 font-medium">
              Or continue with
            </span>

            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Social Login */}
          <Field>
            <Button
              onClick={handleGoogleLogin}
              variant="fill"
              type="button"
              className="w-full bg-[#1E3A34] hover:bg-[#152B26] cursor-pointer text-white py-5"
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
