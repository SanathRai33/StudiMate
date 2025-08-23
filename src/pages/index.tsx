
"use client";
import Link from "next/link";
import { MessageCircle, Notebook, Calendar, Target } from "lucide-react";

export default function Home() {
  const features = [
    {
      name: "Chat with AI",
      desc: "Ask questions, solve doubts, and get instant help.",
      href: "/chat",
      icon: MessageCircle,
    },
    {
      name: "Notes",
      desc: "Save and organize your study notes with links and dates.",
      href: "/notes",
      icon: Notebook,
    },
    {
      name: "Time Table",
      desc: "Plan your study schedule and stay consistent.",
      href: "/timetable",
      icon: Calendar,
    },
    {
      name: "Goals",
      desc: "Set your goals, track progress, and stay motivated.",
      href: "/goals",
      icon: Target,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          📊 Student Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all flex flex-col"
            >
              <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">
                {feature.name}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}