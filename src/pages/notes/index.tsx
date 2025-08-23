"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";

interface Note {
  id: number;
  heading: string;
  link: string;
  description: string;
  date: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [heading, setHeading] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  // Add Note
  const addNote = () => {
    if (!heading.trim()) return; // prevent empty note
    const newNote: Note = {
      id: Date.now(),
      heading,
      link,
      description,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
    setHeading("");
    setLink("");
    setDescription("");
  };

  // Delete Note
  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleAddNote = () => {
    if (!heading.trim() || !description.trim()) return;

    const newNote: Note = {
      id: Date.now(),
      heading,
      link,
      description,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    setNotes([newNote, ...notes]);
    setHeading("");
    setLink("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📒 My Notes</h1>

      {/* Form */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <input
          type="text"
          placeholder="Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg text-black"
        />

        <input
          type="url"
          placeholder="Link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg text-black"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg text-black"
        />

        <button
          onClick={handleAddNote}
          className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 relative"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {note.heading}
            </h2>
            <button
              onClick={() => deleteNote(note.id)}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm absolute top-2 right-1 flex gap-1 items-center justify-center"
            >
              <Trash2 size={22}/> <span className="text-sm font-bold py-1 h-6" >Delete</span>
            </button>
            {note.link && (
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline"
              >
                {note.link}
              </a>
            )}
            <p className="text-gray-600 mt-2">{note.description}</p>
            <p className="text-xs text-gray-400 mt-3">📅 {note.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}