"use client";

import IconLogoWhatsapp from "../Logo/WhatsApp";

const FloatingWA = () => {
  const phoneNumber = "6281316673714";
  const message = encodeURIComponent("Halo min, aku mau tanya-tanya terkait layanan di Mulyadi Massage.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2"
    >
      <IconLogoWhatsapp className="h-5 w-5" />
      <span className="hidden sm:block font-medium">WhatsApp</span>
    </a>
  );
};

export default FloatingWA;
