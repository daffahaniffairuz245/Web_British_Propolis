"use client";
import { useState } from "react";

interface UserProfile {
  name: string;
  age: string;
  email: string;
}

const App: React.FC = () => {
  const [identitas, setIdentitas] = useState<UserProfile>({
    name: "hardi",
    age: "17L",
    email: "",
  });

  const [taks, setTaks] = useState<string[]>([]);
  const [taksInput, setTaksInput] = useState<string>("");

  const addTaks = () => {
    if (taksInput.trim()) {
      setTaks([...taks, taksInput]);
      setTaksInput("");
    }
  };

  const removeTaks = (index: number) => {
    setTaks(taks.filter((_, x) => x !== index));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      {/* Input untuk Nama */}
      <div className="mb-4">
        <input
          className="border p-2 rounded-md text-black w-full"
          placeholder="Enter your name"
          onChange={(i) => {
            setIdentitas((prevState) => ({
              ...prevState,
              name: i.target.value,
            }));
          }}
        />
      </div>

      {/* Input untuk Umur */}
      <div className="mb-4">
        <input
          className="border p-2 rounded-md text-black w-full"
          placeholder="Enter your age"
          onChange={(i) => {
            setIdentitas((prevState) => ({
              ...prevState,
              age: i.target.value,
            }));
          }}
        />
      </div>

      {/* Input untuk Email */}
      <div className="mb-4">
        <input
          className="border p-2 rounded-md text-black w-full"
          placeholder="Enter your email"
          onChange={(i) => {
            setIdentitas((prevState) => ({
              ...prevState,
              email: i.target.value,
            }));
          }}
        />
      </div>

      {/* Menampilkan Profil Saat Ini */}
      <div className="bg-blue-50 rounded-md mb-8 p-4">
        <h2 className="text-blue-700 text-lg font-semibold">Current Profile</h2>
        <p className="text-blue-800">Name: {identitas.name || "-"}</p>
        <p className="text-blue-800">Age: {identitas.age || "N/A"}</p>
        <p className="text-blue-800">Email: {identitas.email || "N/A"}</p>
      </div>

      {/* Daftar Tugas */}
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={taksInput}
          onChange={(e) => setTaksInput(e.target.value)}
          className="border p-2 rounded-md text-black w-full"
        />
        <button
          onClick={addTaks}
          className="ml-2 bg-green-500 text-white p-2 rounded-md"
        >
          Add Task
        </button>
      </div>

      <ul className="list-disc pl-5">
        {taks.length === 0 ? (
          <div className=" w-full ">
            <p className="text-white  p-4 rounded-md mb-4  text-center">No tasks added</p>
          </div>
        ) : (
          taks.map((task, index) => (
            <li key={index} className="flex justify-between mb-2 text-green-500">
              {task}
              <button
                onClick={() => removeTaks(index)}
                className="text-red-500 ml-2"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
