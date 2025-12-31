"use client";
import { Great_Vibes } from "next/font/google";
import OpenInvitationButton from "@/components/Button"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LandingMain({ onOpen }: { onOpen: () => void }) {
  const router = useRouter();
  return (
    <div className="relative min-h-screen max-w-md sm:max-w-lg md:max-w-xl mx-auto flex items-center justify-center overflow-hidden">
      {/* 1️⃣ Background utama */}
      <div className="absolute inset-0 bg-[url('/background.jpeg')] bg-cover bg-center z-0"></div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[350px] right-[-0px] left-[-270px] z-10">
          <img
            src="/kupu-kupu.png"
            alt="kupu kupu"
            className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[450px] h-auto mx-auto opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[150px] right-[-325px] z-30">
          <img
            src="/burung.png"
            alt="burung"
            className="w-40sm:w-[210px] md:w-[310px] lg:w-[410px] h-auto mx-auto opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[90px] z-20">
          <img
            src="/Bingkai.png"
            alt="bingkai"
            className="w-[260px] sm:w-[310px] md:w-[410px] lg:w-[510px] h-auto mx-auto opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[140px]  z-10">
          <img
            src="/cpw.jpg"
            alt="foto bingkai"
            className="w-50 h-auto mx-auto rounded-full opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[25px] right-5px  z-30">
          <img
            src="/bunga.png"
            alt="bunga bingkai"
            className="w-50 h-auto mx-auto opacity-100"
          />
        </div>

      {/*  Konten utama */}
      <main className="relative w-full max-w-wd text-center p-6 space-y-10 z-40">
        
        

      </main>
    </div>
  );
}
