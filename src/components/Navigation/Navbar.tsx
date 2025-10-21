"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    // Tutup drawer
    setIsOpen(false);

    setTimeout(() => {
      document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  const handleLayananClick = () => {
    // Tutup drawer
    setIsOpen(false);

    setTimeout(() => {
      document.querySelector("#layanan")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  const handleKontakClick = () => {
    // Tutup drawer
    setIsOpen(false);

    setTimeout(() => {
      document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-2 md:py-4">
          <div className="flex md:space-x-3 items-center font-bold ms-4 lg:ms:8">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-12 md:h-12 rounded-full" />
            <h1 className="hidden md:block md:text-lg lg:text-2xl text-[#192A56]">Mulyadi Massage</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6 me-4 lg:me-8">
            <button onClick={handleHomeClick} className="group relative font-semibold inline-block text-[#192A56] hover:text-[#2C3E70] cursor-pointer">
              Beranda
              <span className="absolute bottom-[-4px] left-0 h-0.5 w-full scale-x-0 bg-[#2C3E70] transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
            <button onClick={handleLayananClick} className="group relative font-semibold inline-block text-[#192A56] hover:text-[#2C3E70] cursor-pointer">
              Layanan
              <span className="absolute bottom-[-4px] left-0 h-0.5 w-full scale-x-0 bg-[#2C3E70] transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
            <button onClick={handleKontakClick} className="group relative font-semibold inline-block text-[#192A56] hover:text-[#2C3E70] cursor-pointer">
              Kontak
              <span className="absolute bottom-[-4px] left-0 h-0.5 w-full scale-x-0 bg-[#2C3E70] transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </nav>

          {/* Mobile drawer */}
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild className="me-8">
              <Button variant="default" className="md:hidden bg-[#192A56]">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="text-center">
                  <DrawerTitle>Menu</DrawerTitle>
                  <DrawerDescription>Selamat datang di Mulyadi Massage</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0 space-y-4">
                  <button onClick={handleHomeClick} className="text-start relative inline-block w-full font-semibold text-[#192A56] hover:text-white group cursor-pointer">
                    <span className="block py-2 px-4 transition-colors group-hover:bg-[#192A56] group-hover:rounded-lg">Beranda</span>
                  </button>
                  <button onClick={handleLayananClick} className="text-start relative inline-block w-full font-semibold text-[#192A56] hover:text-white group cursor-pointer">
                    <span className="block py-2 px-4 transition-colors group-hover:bg-[#192A56] group-hover:rounded-lg">Layanan</span>
                  </button>
                  <button onClick={handleKontakClick} className="text-start relative inline-block w-full font-semibold text-[#192A56] hover:text-white group cursor-pointer">
                    <span className="block py-2 px-4 transition-colors group-hover:bg-[#192A56] group-hover:rounded-lg">Kontak</span>
                  </button>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="default" className="w-full bg-[#192A56] text-white">
                      Tutup
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
}
