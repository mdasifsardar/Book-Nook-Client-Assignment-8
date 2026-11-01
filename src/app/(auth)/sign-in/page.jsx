import SignInForm from "@/components/auth/SignInForm";
import React from "react";

const page = () => {
  return (
    <div
      className="flex my-24
       items-center justify-center bg-[#FAF6EF] px-5"
    >
      <SignInForm />
    </div>
  );
};

export default page;
