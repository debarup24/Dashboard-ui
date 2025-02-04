import React from "react";
import Header from "../components/common/Header";
import Login from "../components/common/Login";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Signup / Login" />

      <div className="max-w-xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div>
          <Login />
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
