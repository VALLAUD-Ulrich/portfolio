// pages/index.js
"use client";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoi des données à ReSend
    try {
      const response = await axios.post("https://api.resend.io/v1/messages", {
        to: "ulrichvallaud@digitaluniverse.fr",
        subject: "Nouveau message de contact",
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      console.log("Message envoyé avec succès:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error.message);
    }
  };

  return (
    <form className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md flex flex-col items-center">
      <label className="block mb-4">
        <span className="text-gray-700">Nom:</span>
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type="text"
          value={name}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          className="mt-1 p-2 w-full border rounded-md"
          type="email"
          value={email}
          placeholder="testemail@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message:</span>
        <textarea
          className="mt-1 p-2 w-full border rounded-md"
          value={message}
          placeholder="Votre message..."
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        type="submit"
        onClick={handleSubmit}
      >
        Envoyer
      </button>
    </form>
  );
};

export default Contact;
