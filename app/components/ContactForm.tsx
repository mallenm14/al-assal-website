'use client';

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { email: "", message: "" };

    if (!form.email) newErrors.email = "Email is required.";
    if (!form.message) newErrors.message = "Message is required.";

    if (newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-md rounded-lg relative">
      <div className="absolute inset-0 bg-secondary opacity-50 w-full h-full z-[-10]"></div>

      <form onSubmit={handleSubmit} className="space-y-4 p-10 inset-0 text-gray-200">
        <h2 className="text-gray-50 text-2xl font-bold">Contact Us</h2>
        <div> 
          <label className="block font-medium">Name (Optional)</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tertiary rounded"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tertiary rounded placeholder:text-gray-400"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-tertiary"
            placeholder="Message"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white py-4 rounded hover:bg-secondary-dark transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm