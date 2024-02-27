import React, { useState, FormEvent } from "react";
import InputField from "./InputField";
import LoginButton from "./LoginButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <>
      {/* the top purple bar */}
      <div
        className="fixed top-0 w-full py-4 z-10"
        style={{
          backgroundColor: "rgba(106, 30, 213, 0.6)",
          textAlign: "left",
          paddingLeft: "1rem",
        }}
      >
        <span
          className="text-[#8c91f1] font-bold text-2xl"
          style={{ color: "rgba(140, 145, 241, 0.7)" }}
        >
          hurd
        </span>

        {/* the background and form */}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-0 md:pt-16">
        <div className="w-full max-w-md p-8 py-20 md:py-14 space-y-3 md:rounded-lg bg-[#120d17] bg-opacity-90 shadow-lg">
          <h1 className="text-5xl py-4 font-bold text-[#686fed]">hurd</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Forgot Password?
              </a>
              <p>
                {" "}
                <span className="text-blue-500 hover:text-[#3b82f6]">
                  Don&apos;t have an account? Sign up!
                </span>
              </p>
            </div>
            <LoginButton>Login</LoginButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
