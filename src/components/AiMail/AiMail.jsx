import React from "react";
import Header from "../common/Header";
import { motion } from "framer-motion";
import { ResponsiveContainer } from "recharts";
import { Input } from "postcss";

const AiMail = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="AI Mail" />

      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-full h-auto">
            <ResponsiveContainer>
              <h1 className="text-xl">AI Powered Email</h1>

              <div className="py-5">
                <form>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Recipients (comma-separated)
                    </label>
                    <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-[#333A5C]">
                      <input
                        type="email"
                        // value={recipients}
                        //onChange={(e) => setRecipients(e.target.value)}
                        placeholder="john@example.com, jane@example.com"
                        className="w-full bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-[#333A5C]">
                      <input
                        type="email"
                        // value={recipients}
                        //onChange={(e) => setRecipients(e.target.value)}
                        placeholder="Enter Mail Subject"
                        className="w-full bg-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Prompt
                    </label>
                    <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-xl bg-[#333A5C]">
                      <textarea
                        placeholder="Enter your prompt for AI email generation..."
                        className="w-full min-h-24"
                      />
                    </div>
                    <button className="p-3 m-1 bg-gray-700 font-semibold rounded-lg cursor-pointer px-4">
                      Generate Email
                    </button>
                  </div>
                </form>
              </div>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AiMail;
