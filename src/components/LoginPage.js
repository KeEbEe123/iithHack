// LoginPage.js
import React, { useState } from "react";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      console.log("User logged in:", data.user);
      // You can redirect or update your state here
    } catch (err) {
      console.error("Error during login:", err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-8">Login</h2>
        <button
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-4"
        >
          Login with Google
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <p className="text-sm text-gray-400 text-center">or</p>
        <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-gray-700 text-white w-full py-2 px-4 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-red-500 hover:text-red-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
