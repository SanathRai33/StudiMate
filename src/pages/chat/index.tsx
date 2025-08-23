"use client";

import { useState } from "react";
import { Bot, User, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate Bot Reply (replace with API call later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot" as const,
          text: `🤖 Bot reply to: "${userMessage.text}"`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="flex h-[calc(100% - 1px)] w-full p-1">
      <div className="w-1/5 h-full bg-gray-100 shadow rounded-l-2xl">
        <h1 className="text-center text-black text-xl font-semibold shadow p-4">
          Chats
        </h1>
      </div>

      <div className="flex flex-col h-full w-4/5 bg-gray-50  rounded-r-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow ">
          <Bot size={28} />
          <h1 className="text-xl font-semibold">AI Chatbot</h1>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-2 max-w-lg ${
                msg.sender === "user" ? "ml-auto justify-end" : "mr-auto"
              }`}
            >
              {msg.sender === "bot" && (
                <Bot className="text-blue-600 mt-1" size={20} />
              )}
              <div
                className={`px-4 py-2 rounded-2xl shadow text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <User className="text-gray-600 mt-1" size={20} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-white shadow-md flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500 text-black bg-gray-200 "
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
