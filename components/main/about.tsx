"use client";

import Image from "next/image";

export const About = () => {
  return (
    <section id="about-me" className="py-16 px-6 md:px-20 bg-[#030014] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/pp.webp"
            alt="Muhammad Wasif Ali"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
            draggable={false}
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300">I&apos;m a passionate full-stack developer with a focus on creating user-friendly web applications.
          </p>
          <p className="text-gray-300 mt-2">
            I have experience with React, Node.js, and various other technologies. My goal is to build innovative solutions that make a difference.
          </p>
          <p className="text-gray-300 mt-2">
            Making AI apps, working on AI
          </p>
        </div>
      </div>
    </section>
  );
};