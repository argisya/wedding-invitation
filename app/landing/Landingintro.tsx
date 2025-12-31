"use client";
import { Great_Vibes } from "next/font/google";
import OpenInvitationButton from "@/components/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function LandingIntro({ onOpen }: { onOpen: () => void }) {
  const router = useRouter();
  return (
    <div className="relative min-h-screen w-full sm:max-w-md mx-auto flex items-center justify-center overflow-hidden">
      {/* 1️⃣ Background utama */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-[url('/bgrnd.png')] bg-cover bg-center bg-no-repeat opacity-40 z-0"></div>
      
        {/*  komponen ui */}
=======
      <div className="absolute inset-0 bg-[url('/bgrnd.png')] bg-cover bg-center opacity-40 z-0"></div>

      {/*  komponen ui */}
>>>>>>> d9ed679c912c7c5c074470520034f5a90278b672
      <div className="absolute inset-0 flex items-center justify-center z-10 scale-120">
        <img
          src="/width_498.webp"
          alt="Gerbang Dekorasi"
          className="w-[500px] h-auto opacity-35"
        />
      </div>

      <div className="absolute inset-0 bg-white/30"></div>

      <div className=" absolute top-[-188px] right--10px] left-[-55px] z-20">
        <img
          src="/Bunga merah 2.webp"
          alt="Ornament Atas"
          className="w-100 h-auto mx-auto opacity-79"
        />
      </div>

<<<<<<< HEAD
        <div className=" absolute top-[-188px] right-[-150px]  z-20">
          <img
            src="/Bunga merah 2.webp"
            alt="Ornament Atas"
            className="w-100 h-auto mx-auto transform scale-x-[-1] opacity-79"
          />
        </div>

        <div className=" absolute right-2.5 left-[-100px] z-30">
          <img
            src="/cloud.webp"
            alt="Ornament Atas"
            className="w-100 h-auto mx-auto opacity-87"
          />
        </div>

        <div className=" absolute top-[-120px] right-[-410px] left-2.5 z-30">
          <img
            src="/width_375.webp"
            alt="Ornament Atas"
            className="w-50 h-auto mx-auto transform scale-x-[-1] opacity-100 rotate-90"
          />
        </div>

        <div className=" absolute top-[550px] left-[-300px] z-30 rotate-">
          <img
            src="/width_375.webp"
            alt="Ornament Bawah"
            className="w-50 h-auto mx-auto opacity-100 rotate-90"
          />
        </div>

        <div className=" absolute top-[500px] right-[-200px] z-30 rotate-">
          <img
            src="/width_499.webp"
            alt="Ornament Bawah"
            className="w-80 h-auto mx-auto transform scale-y-[-1]  opacity-100 rotate-90"
          />
        </div>

        <div className=" absolute top-[350px]  left-60 z-30">
          <img
            src="/bunga merah.webp"
            alt="Ornament Atas"
            className="w-70 h-auto mx-auto transform scale-x-[-1] opacity-80 rotate-130"
          />
        </div>
        
        <div className=" absolute top-[350px] right-60  z-30">
          <img
            src="/bunga merah.webp"
            alt="Ornament Atas"
            className="w-70 h-auto mx-auto opacity-80 rotate-230"
          />
        </div>
=======
      <div className=" absolute top-[-188px] right-[-90px] left-[-0px] z-20">
        <img
          src="/Bunga merah 2.webp"
          alt="Ornament Atas"
          className="w-100 h-auto mx-auto transform scale-x-[-1] opacity-79"
        />
      </div>

      <div className=" absolute top-[-0px] right-[-10px] left-[-100px] z-30">
        <img
          src="/cloud.webp"
          alt="Ornament Atas"
          className="w-100 h-auto mx-auto opacity-87"
        />
      </div>

      <div className=" absolute top-[-120px] right-[-410px] left-[-10px] z-30">
        <img
          src="/width_375.webp"
          alt="Ornament Atas"
          className="w-50 h-auto mx-auto transform scale-x-[-1] opacity-100 rotate-90"
        />
      </div>

      <div className=" absolute top-[550px] right-[0px] left-[-300px] z-30 rotate-">
        <img
          src="/width_375.webp"
          alt="Ornament Bawah"
          className="w-50 h-auto mx-auto opacity-100 rotate-90"
        />
      </div>

      <div className=" absolute top-[500px] right-[-200px] left-[-0px] z-30 rotate-">
        <img
          src="/width_499.webp"
          alt="Ornament Bawah"
          className="w-80 h-auto mx-auto transform scale-y-[-1]  opacity-100 rotate-90"
        />
      </div>

      <div className=" absolute top-[350px] right-[-0px] left-[-240px] z-30">
        <img
          src="/bunga merah.webp"
          alt="Ornament Atas"
          className="w-70 h-auto mx-auto transform scale-x-[-1] opacity-80 rotate-130"
        />
      </div>

      <div className=" absolute top-[350px] right-[-240px] left-[-0px] z-30">
        <img
          src="/bunga merah.webp"
          alt="Ornament Atas"
          className="w-70 h-auto mx-auto opacity-80 rotate-230"
        />
      </div>
>>>>>>> d9ed679c912c7c5c074470520034f5a90278b672

      {/*  Konten utama */}
      <main className="relative w-full max-w-wd text-center p-6 space-y-10 z-40">
        {/*  Teks pembuka */}
        <p
          className={`${greatVibes.className} text-5xl italic text-gray-800 font-bold`}
        >
          The Wedding Of
        </p>

        {/* Nama pengantin */}
        <h1
          className={`${greatVibes.className} text-6xl font-bold text-amber-800`}
        >
          Ary & Resi
        </h1>

        {/*  Teks sapaan */}
        <div className="text-center text-amber-900">
          <p className="font-bold text-3xl tracking-wide">KEPADA YTH:</p>
          <p className="text-base font-medium">Bapak/Ibu/Saudara/i</p>
          <p className="text-xl font-semibold mt-1">Aditya Pramu Bambang</p>
        </div>

        {/* Tombol buka undangan */}
        <OpenInvitationButton onClick={onOpen} />
      </main>
    </div>
  );
}
