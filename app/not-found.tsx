"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GlobalLoading } from "@/components/global-loading";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

export default function NotFound() {
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <GlobalLoading />;

  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-black">
        <Navbar />

        <div className="flex flex-col items-center text-center space-y-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            className="w-80 sm:w-[75%] lg:w-[50%] rounded-xl pointer-events-none"
          >
            <source src="/404.webm" type="video/webm" />
          </video>

          <h1 className="text-primary text-3xl font-extrabold">
            {t("notfound.title")}
          </h1>

          <div className="px-5">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              {t("notfound.description")}
            </p>
          </div>

          <Link href="/">
            <div className="bg-primary/60 rounded-xl text-white text-md font-bold px-4 py-2 hover:bg-primary/40 transition">
              {t("notfound.buttontitle")}
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
