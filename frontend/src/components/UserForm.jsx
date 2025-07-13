import React, { useState } from 'react';
import axios from 'axios';

export default function UserForm({ setMatches }) {
  const [form, setForm] = useState({ name: '', age: '', interests: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const interests = form.interests.split(',').map(i => i.trim());
    try {
      await axios.post("http://localhost:3000/users", { ...form, age: parseInt(form.age), interests });
      alert("User created successfully");
      const res = await axios.get(`http://localhost:3000/matches/${form.name}`);
      setMatches(res.data);
      console.log("User created and matches found:", res.data);
    } catch (err) {
      alert("Submission error");
    }
  };

  return (
    <div className='max-h-96 bg-gray-800 p-6 rounded-lg shadow-lg'>
      <form className='flex flex-col gap-2 border-gray-300' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold text-center'>Create Your Profile</h1>
        <p className='mt-2 text-center'>Enter your details to find matches</p>
        <input
          className='border-2 border-gray-300 p-2 rounded'
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className='border-2 border-gray-300 p-2 rounded'
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <textarea
          className='border-2 border-gray-300 p-2 rounded'
          name="interests"
          placeholder="Interests (comma separated)"
          value={form.interests}
          onChange={handleChange}
          required
        />
        <button
          className='p-2 mt-4 rounded-lg text-white bg-violet-400 hover:bg-violet-900'
          type="submit">
          Create Profile & Find Matches
        </button>
      </form>
    </div>
  );
};
