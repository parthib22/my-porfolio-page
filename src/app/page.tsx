"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [Disclaimer, setDisclaimer] = useState(false);

  return (
    <>
      <div className={`disclaimer ${Disclaimer && "ds"}`}>
        <span>
          Thank you for visiting my portfolio! This page is still under
          development.
        </span>
        <button id="close-btn" onClick={() => setDisclaimer(true)}>
          <svg
            fill="#000000b3"
            height="12px"
            width="12px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            // xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
            </g>
          </svg>
        </button>
      </div>
      <main className="intro">
        <div>
          <Image src={"/me.jpg"} height={200} width={200} alt={"pfp"}></Image>
        </div>
        <span>
          Parthib<span style={{ color: "darkgrey" }}>DS</span>
        </span>
        <desc>Hello there! 👋</desc>
      </main>
      <main className="projects">
        <div className="pro">
          <Image
            src={"/weatherize.png"}
            width={1920}
            height={970}
            alt="pro"
          ></Image>
        </div>
        <div className="pro">
          <Image
            src={"/weathernxt.png"}
            width={1920}
            height={970}
            alt="pro"
          ></Image>
        </div>
        <div className="pro">
          <Image src={""} width={1920} height={970} alt="pro"></Image>
        </div>
      </main>
    </>
  );
}
