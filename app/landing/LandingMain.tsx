"use client";
import { Great_Vibes } from "next/font/google";
import OpenInvitationButton from "@/components/Button"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LandingMain({ onOpen }: { onOpen: () => void }) {
  const router = useRouter();
  return (
    <div className="relative min-h-screen max-w-md mx-auto flex items-center justify-center overflow-hidden">
      {/* 1️⃣ Background utama */}
      <div className="absolute inset-0 bg-[url('/background.jpeg')] bg-cover bg-center z-0"></div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[350px] right-[-0px] left-[-270px] z-10">
          <img
            src="/kupu-kupu.png"
            alt="kupu kupu"
            className="w-50 h-auto mx-auto opacity-100 rotate-"
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[150px] right-[-325px] left-[-0px] z-30">
          <img
            src="/burung.png"
            alt="burung"
            className="w-40 h-auto mx-auto opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[90px] right-[-0px] left-[-0px] z-20">
          <img
            src="/Bingkai.png"
            alt="bingkai"
            className="w-65 h-auto mx-auto opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[140px] right-[-0px] left-[-0px] z-10">
          <img
            src="/cpw.jpg"
            alt="foto bingkai"
            className="w-50 h-auto mx-auto rounded-full opacity-100 "
          />
        </div>

      <div className="absolute inset-0 bg-white/0"></div>
        <div className=" absolute top-[25px] right-[-20px] left-[-0px] z-30">
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
