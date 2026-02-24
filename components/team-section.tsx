"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "HIDAYAH ADYAN TOKAN",
    university: "Universitas Teknologi Digital Indonesia (UTDI)",
    program: "Bisnis Digital",
    nim: "255720019",
    image: "/team/Dayah.png",
    github: "https://www.instagram.com/devhito/",
  },
  {
    name: "MUHAMMAD FADIL AKMAL HAFIZ",
    university: "Universitas Teknologi Digital Indonesia (UTDI)",
    program: "Informatika",
    nim: "255410056",
    image: "/team/Aqmal.png",
    github: "https://www.instagram.com/akml_hafiz/",
  },
  {
    name: "XAVIER CHRISTIAN RIHI",
    university: "Universitas Teknologi Digital Indonesia (UTDI)",
    program: "Informatika",
    nim: "255410048",
    image: "/team/Xavier.png",
    github: "https://www.instagram.com/christianxavier225/",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-md uppercase tracking-widest text-green-500 mb-3 font-medium">
            Tim Kami
          </h2>

          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bertumbuh Bersama Inovasi dan Teknologi
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Kami adalah mahasiswa dari Universitas Teknologi Digital Indonesia
            (UTDI) yang terus mengembangkan kemampuan di bidang Teknologi
            Komputer dan Artificial Intelligence. Project ini merupakan bagian
            dari proses upskilling kami dalam membangun solusi berbasis AI.
          </p>
        </div>

        {/* ===== Card Grid ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-green-900/40 rounded-2xl p-6 
                         shadow-lg hover:shadow-green-900/40 
                         transition-all duration-300 hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="w-full aspect-square relative mb-6 rounded-xl overflow-hidden border border-green-800/40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h4 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h4>

              <p className="text-sm text-green-400 mb-1">{member.university}</p>

              <p className="text-sm text-muted-foreground mb-4">
                {member.program} - {member.nim}
              </p>

              {/* Button */}
              <Button
                asChild
                className="w-full bg-green-700 hover:bg-green-600 
                           shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <a href={member.github} target="_blank">
                  <Instagram className="w-4 h-4 mr-2" />
                  About Me
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
