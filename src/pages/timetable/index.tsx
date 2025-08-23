"use client";
import React, { useState } from "react";

interface Slot {
  id: number;
  day: string;
  time: string;
  subject: string;
}

const TimetablePage = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");

  const addSlot = () => {
    if (!day || !time || !subject) return;
    const newSlot: Slot = {
      id: Date.now(),
      day,
      time,
      subject,
    };
    setSlots([...slots, newSlot]);
    setDay("");
    setTime("");
    setSubject("");
  };

  const deleteSlot = (id: number) => {
    setSlots(slots.filter((slot) => slot.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 text-black">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📅 My Timetable
      </h1>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-5 mb-6">
        <h2 className="text-xl font-semibold mb-3">Add New Slot</h2>
        <div className="grid md:grid-cols-4 gap-3">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border p-2 rounded-lg"
          >
            <option value="">Day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <input
            type="text"
            value={subject}
            placeholder="Subject / Task"
            onChange={(e) => setSubject(e.target.value)}
            className="border p-2 rounded-lg"
          />
          <button
            onClick={addSlot}
            className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* Timetable */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">My Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-center">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-2">Day</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Subject / Task</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {slots.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-4 text-gray-500">
                    No slots added yet.
                  </td>
                </tr>
              ) : (
                slots.map((slot) => (
                  <tr key={slot.id} className="hover:bg-gray-50">
                    <td className="border p-2">{slot.day}</td>
                    <td className="border p-2">{slot.time}</td>
                    <td className="border p-2">{slot.subject}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => deleteSlot(slot.id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        ❌ Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
