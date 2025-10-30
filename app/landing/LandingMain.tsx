"use client";
import { Great_Vibes } from "next/font/google";
import OpenInvitationButton from "@/components/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

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
      <main className="relative mt-[400px] w-full max-w-wd text-center p-6 space-y-3  z-40">
        {/* Nama pasangan */}
        <h1 className={`${greatVibes.className} text-5xl text-amber-400 `}>
          Ary & Resy
        </h1>

        <div className="bg-[url('/background-tanggal.png')] p-6 h-[260px]  bg-top bg-contain rounded-lg">
          <p className="text-xl">30.01.2025</p>
          <p className={`${greatVibes.className} mt-6 text-3xl text-amber-700`}>
            Menuju Hari Bahagia
          </p>

          {/* Jam */}
          <div className="flex space-x-5 mt-3">
            <div className="flex flex-col space-y-0.5">
              <div className="flex space-x-0.5 font-serif">
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  2
                </div>
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  9
                </div>
              </div>

              <h5 className="font-serif text-lg">Hari</h5>
            </div>

            <div className="flex flex-col">
              <div className="flex space-x-0.5 font-serif">
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  0
                </div>
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  8
                </div>
              </div>

              <h5 className="font-serif text-lg">Jam</h5>
            </div>

            <div className="flex flex-col">
              <div className="flex space-x-0.5 font-serif">
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  1
                </div>
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  3
                </div>
              </div>

              <h5 className="font-serif text-lg">Menit</h5>
            </div>

            <div className="flex flex-col">
              <div className="flex space-x-0.5 font-serif">
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  3
                </div>
                <div className="px-3 py-2 rounded-2xl text-white bg-amber-950/90">
                  3
                </div>
              </div>

              <h5 className="font-serif text-lg">Detik</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
