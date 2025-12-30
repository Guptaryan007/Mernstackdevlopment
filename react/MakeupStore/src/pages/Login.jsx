import React from "react";

const Login = () => {
  return (
    <>
      <div class="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Enter your Email"
          class="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Enter your Password"
          class="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
