"use client";

import { useState } from "react";

interface Goal {
  id: number;
  title: string;
  description: string;
  deadline: string;
  createdAt: string;
  completed: boolean;
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const addGoal = () => {
    if (!title.trim() || !deadline) return;

    const newGoal: Goal = {
      id: Date.now(),
      title,
      description,
      deadline,
      createdAt: new Date().toLocaleDateString(),
      completed: false,
    };

    setGoals([...goals, newGoal]);
    setTitle("");
    setDescription("");
    setDeadline("");
  };

  const toggleComplete = (id: number) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎯 Goal Setting</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3"
        />

        <button
          onClick={addGoal}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Goal
        </button>
      </div>

      {/* Goals List */}
      <div className="mt-8 max-w-3xl mx-auto">
        {goals.length === 0 ? (
          <p className="text-center text-gray-500">No goals yet. Add one!</p>
        ) : (
          <div className="space-y-4">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
              >
                <div>
                  <h2
                    className={`text-xl font-bold ${
                      goal.completed ? "line-through text-green-600" : ""
                    }`}
                  >
                    {goal.title}
                  </h2>
                  <p className="text-gray-600">{goal.description}</p>
                  <p className="text-sm text-gray-500">
                    Created: {goal.createdAt} | Deadline: {goal.deadline}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleComplete(goal.id)}
                    className={`px-3 py-1 rounded-lg text-white ${
                      goal.completed ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {goal.completed ? "Completed" : "Pending"}
                  </button>
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className="px-3 py-1 rounded-lg bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
