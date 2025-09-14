import React from "react";

const Page = () => {
  // Env variables
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;
  const emailLink = `mailto:${process.env.NEXT_PUBLIC_EMAIL}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-6 py-10">
      {/* Intro */}
      <div className="max-w-3xl text-center">
        <p className="text-lg font-bold text-gray-700 mb-2">
          Here you can find all the things that your seniors know about your current curriculum.
        </p>
        <p className="text-md text-gray-600 mb-6">
          Teachers evaluation, resources, PYQs, notes, lab file format
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-2xl bg-white shadow-md rounded-2xl p-6 text-gray-800 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">About Myself</h1>
        <p className="text-base leading-relaxed mb-6">
          I am <span className="font-semibold">Twinkle Kumari, from CSE'28</span>.  
          I have made this website so that you can find everything at one place.  
          If you think that I have missed something or if you want to add extra things,  
          then you can contact me through the buttons below 👇
        </p>

        {/* Contact Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <a
            href={emailLink}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
