"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import IconLogoInstagram from "../Logo/Instagram";
import IconLogoWhatsapp from "../Logo/WhatsApp";
import IconLogoTiktok from "../Logo/Tiktok";
import IconLogoFacebook from "../Logo/Facebook";

const Footer = () => {
  const units = ["Treatment Umum", "Paket Treatment", "Paket Keluarga", "Pijat Relaksasi dan Laktasi", "Paket Ibu Hamil", "Paket Pengantin", "Paket Bekam", "Additional Paket"];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 }, // Fungsi custom harus mengembalikan objek yang sesuai dengan tipe TargetAndTransition
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4, // Menggunakan array Bezier curve untuk 'easeOut'
        ease: [0, 0, 0.58, 1], // [0, 0, 0.58, 1] adalah kurva Bezier untuk 'easeOut'
      },
    }),
  };

  return (
    <footer className="w-max-[1280px] bg-white text-black px-8 md:px-28 py-12" id="kontak">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 max-w-[1280px] mx-auto">
        {/* Logo & Deskripsi */}
        <div className="flex flex-col gap-4">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
            <Image src="/logo.png" alt="Logo Mulyadi Massage" width={100} height={100} className="object-contain rounded-full" />
          </motion.div>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={1} className="text-sm md:text-base text-black/80">
            Layanan Home Massage Bagi Pria dan Wanita di Jakarta Selatan, Jakarta Pusat, Jakarta Barat, dan Tangerang Selatan.
          </motion.p>
        </div>

        {/* Kontak Kami */}
        <div>
          <motion.h4 variants={fadeInUp} initial="hidden" animate="visible" custom={2} className="text-base md:text-lg font-semibold mb-4">
            Kontak Kami
          </motion.h4>
          <ul className="flex flex-col gap-3 text-sm md:text-base">
            {[
              {
                icon: <IconLogoWhatsapp style={{ color: "#192A56" }} className="w-4 h-4" />,
                text: "+62 813-1667-3714",
                href: "https://wa.me/6281316673714",
              },
              {
                icon: <IconLogoInstagram style={{ color: "#192A56" }} className="w-4 h-4" />,
                text: "@pijat_pak_mul_panggilan",
                href: "https://www.instagram.com/pijat_pak_mul_panggilan/",
              },
              {
                icon: <Globe className="w-4 h-4 text-[#192A56]" />,
                text: "www.mulyadimassage.my.id",
                href: "https://www.mulyadimassage.my.id/",
              },
              {
                icon: <IconLogoTiktok style={{ color: "#192A56" }} className="w-4 h-4" />,
                text: "Mulyadi massage",
                href: "https://tiktok.com/@mulyadigomassage",
              },
              {
                icon: <IconLogoFacebook style={{ color: "#192A56" }} className="w-4 h-4" />,
                text: "Mulyadi massage",
                href: "https://www.facebook.com/share/1EzZ2FTymN",
              },
              {
                icon: <MapPin className="w-4 h-4 text-[#192A56] mt-0.5" />,
                text: "Jakarta Selatan, Jakarta Pusat, Jakarta Barat, dan Tangerang Selatan",
              },
            ].map((item, i) => (
              <motion.li key={i} variants={fadeInUp} initial="hidden" animate="visible" custom={3 + i} className="flex items-start gap-3">
                <div className="flex items-center justify-center gap-2">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Unit Kami */}
        <div>
          <motion.h4 variants={fadeInUp} initial="hidden" animate="visible" custom={10} className="text-base md:text-lg font-semibold mb-4">
            Layanan Kami
          </motion.h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-black">
            {units.map((unit, i) => (
              <motion.li key={i} variants={fadeInUp} initial="hidden" animate="visible" custom={11 + i} className="flex items-start">
                ✅ {unit}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bawah */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={30} className="text-center text-xs sm:text-sm text-black/80 mt-8 border-t border-white/20 pt-4 space-y-1">
        <p>&copy; {new Date().getFullYear()} Mulyadi Massage. All rights reserved.</p>
        <p>
          Website ini dibuat oleh{" "}
          <a href="https://randraweb.com" target="_blank" rel="noopener noreferrer" className="text-[#192A56] hover:underline font-semibold transition-all duration-300">
            Randra Web
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
