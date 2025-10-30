"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { on } from "events";

export default function LandingGate({ onFinish }: { onFinish: () => void }) {
  const [openGate, setOpenGate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // jalankan animasi 0.5 detik setelah halaman muncul
     const startTimer = setTimeout(() => setOpenGate(true), 500);

    // 2️⃣ Pindah ke halaman landingmain.tsx setelah animasi selesai (4 detik)
    const navigateTimer = setTimeout(() => {
      onFinish();
    }, 3500); // durasi animasi 4s + sedikit buffer 0.5s
     return () => {
      clearTimeout(startTimer);
      clearTimeout(navigateTimer);
    };
  }, [onFinish]);

  return (
    <div className="relative min-h-screen max-w-sm mx-auto flex items-center justify-center overflow-hidden">
          {/* 1️⃣ Background utama */}
          <div className="absolute inset-0 bg-[url('/bgrnd.png')] bg-cover bg-center opacity-40 z-0"></div>
          
            {/*  komponen ui */}
          <div className="absolute inset-0 flex items-center justify-center z-40 scale-120">
            <img
              src="/width_498.webp"
              alt="Gerbang Dekorasi"
              className="w-[500px] md:w-[600px] h-auto opacity-100"
            />
          </div>

          {/*  gerbang kiri */}
          <div className="absolute left-10 top-[240px]  z-30 ">
            <img
              src="/door left.png"
              alt="Pintu kiri"
              className={`w-[150px] h-auto opacity-100 transition-transform duration-[4000ms] ease-in-out ${
            openGate ? "translate-x-[-100%]" : "translate-x-0"}`}
            />
          </div>

          {/*  gerbang kanan */}
          <div className="absolute left-[190px] top-[240px] z-30">
            <img
              src="/door right.png"
              alt="Pintu kanan"
              className={`w-[150px] h-auto opacity-100 transition-transform duration-[4000ms] ease-in-out ${
            openGate ? "translate-x-[100%]" : "translate-x-0"
          }`}
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
    
          {/*  Konten utama */}
          <main className="relative w-full max-w-wd text-center p-6 space-y-10 z-40">
            
          </main>
        </div>
  );
}
