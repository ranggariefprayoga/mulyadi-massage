"use client";

import IconLogoWhatsapp from "@/components/Logo/WhatsApp";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { DataLayanan } from "@/data/DataLayanan";
import { motion } from "framer-motion";

const LayananContent = () => {
  return (
    <section className="w-full px-6 md:px-20 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DataLayanan.map((layanan) => (
          <motion.div key={layanan.id} className="relative bg-white transition-shadow duration-300 flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            {/* Gambar */}
            <img src={layanan.gambarUtama} alt={layanan.namaLayanan} className="w-full h-auto max-h-[300px] object-contain rounded-t-xl" />
            {/* Konten */}
            <div className="p-5 flex flex-col gap-4 flex-grow">
              <h3 className="text-lg text-center font-bold text-gray-800">{layanan.namaLayanan}</h3>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {layanan.paket.map((paket, idx) => (
                  <AccordionItem value={`paket-${layanan.id}-${idx}`} key={idx} className="border-b-2 border-gray-300  ">
                    <AccordionTrigger
                      className="group text-left px-4 py-2 text-sm font-semibold text-gray-700 
             hover:bg-[#9DBA98] hover:no-underline hover:text-white
             transition-colors 
             data-[state=open]:bg-[#88A584] data-[state=open]:text-white 
             flex items-center justify-between w-full 
             focus:outline-none focus:ring-0"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[#9DBA98] font-bold transition-all duration-200
                 group-hover:text-[#9DBA98]
                 group-data-[state=open]:text-white"
                        >
                          <span className="group-data-[state=open]:hidden text-black">+</span>
                          <span className="hidden group-data-[state=open]:inline">−</span>
                        </span>
                        <span>{paket.nama.replace(/^•\s*/, "")}</span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 py-3 border-t border-gray-200 bg-white">
                      <div className="space-y-2">
                        {paket.daftarDurasi.map((item, i) => (
                          <div key={i} className="flex justify-between items-center bg-gray-100 px-3 py-2  text-sm text-gray-800">
                            <div className="flex gap-1">
                              <span>{item.durasi}</span>
                              <span className="font-semibold text-[#FFA500]">({item.harga})</span>
                            </div>

                            <a
                              href={`https://wa.me/6281316673714?text=${encodeURIComponent(`Halo min, aku mau nanya tentang layanan ${paket.nama.replace(/^•\s*/, "")} durasi ${item.durasi} dengan harga ${item.harga}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow transition duration-200"
                            >
                              <IconLogoWhatsapp className="w-4 h-4" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LayananContent;
