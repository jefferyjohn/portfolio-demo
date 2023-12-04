"use client"
import Head from 'next/head';
import Image from 'next/image'
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import "react-multi-carousel/lib/styles.css";


export default function Home() {

  // Clarity
  useEffect(() => {
    clarity.init('k0lg58jnzr');
  }
    , []);

  useEffect(() => {
    // Function to initialize Calendly script
    const initializeCalendlyScript = () => {
      // Check if Calendly is defined
      if ((window as any).Calendly !== 'undefined') {
        // Initialize Calendly inline widget
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/jefferyjohn/45-minute-meeting?hide_event_type_details=1&hide_gdpr_banner=1',
        });
      } else {
        // Retry initialization after a delay
        setTimeout(initializeCalendlyScript, 1000);
      }
    };

    // Load Calendly script only if it hasn't been loaded before
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initializeCalendlyScript;
      document.head.appendChild(script);
    } else {
      initializeCalendlyScript();
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main>
      <Head>
        {/* Calendly Widget Script */}
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </Head>


      <script
        dangerouslySetInnerHTML={
          {
            __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "k0lg58jnzr");`,
          }}
      />
      <header className="flex justify-end items-start">
        <div className="nav">
          <ul className="flex space-x-4">
            <li><a href="#hero">Home</a></li>
            <li><a href="https://docs.google.com/document/d/1P_OGRLE3YFpMaA_HrIfT9GhvJX6ZVo1uLXGaagscEcE/export?format=pdf">Resume</a></li>
            <li><a href="https://docs.google.com/document/d/1_hXpiQh4v_hvvW-0ZLLrTg2pLDjdtK_U/edit?usp=sharing&ouid=103091850561061166757&rtpof=true&sd=true">98-019</a></li>
            <li><a href="#media">Media</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <section className="hero relative">
        <div className="hero-container relative">
          {/* Image */}
          <div className="hero-image relative">
            <Image src="/hero.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
          </div>

          {/* Text */}
          <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-6xl font-bold">Jeffery John</h1>
            <h2 className="text-2xl">Developer & Designer</h2>
            <p className="text-xl">Carnegie Mellon University</p>
          </div>
        </div>
      </section>
      <section className="media">
        <h1 className="text-6xl font-bold text-center">Media</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-1.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/p/B1WW17PpF61/" className="block h-48">
              <Image src="/test-2.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-3.jpg" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-4.jpg" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-5.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-6.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-7.jpg" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-8.jpg" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
          <div className="col">
            <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="block h-48">
              <Image src="/test-9.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
            </a>
          </div>
        </div>
      </section>


      <section className="projects">
        <h1 className="text-6xl font-bold text-center">Projects</h1>

        <div className="carousel-container overflow-hidden relative">
          <div className="carousel-wrapper flex animate-slide" id="carousel">
            {/* First carousel item */}
            <div className="carousel-item">
              <a href="https://blink-weld.vercel.app/" className="">
                <Image src="/c1.png" alt="Jeffery John" width={300} height={300} className="object-cover w-full h-full" />
              </a>
            </div>

            {/* Second carousel item */}
            <div className="carousel-item">
              <a href="https://jefferyjohn.github.io/poke/" className="">
                <Image src="/c2.png" alt="Image 2" width={300} height={300} className="object-cover w-full h-full" />
              </a>
            </div>

            {/* Third carousel item */}
            <div className="carousel-item">
              <a href="https://irislunarrover.space/" className="">
                <Image src="/c3.png" alt="Image 3" width={300} height={300} className="object-cover w-full h-full" />
              </a>
            </div>

            {/* Add more carousel items as needed */}
          </div>

          <style jsx>{`
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-slide {
      animation: slide 15s linear infinite;
    }

    .animate-slide:hover {
      animation-play-state: paused;
    }

    .carousel-wrapper {
      display: flex; /* Ensure all carousel items are in a row */
      width: 300%; /* Set the width based on the number of slides */
    }

    .carousel-item {
      flex: 0 0 33.33%; /* Each carousel item takes up 1/3 of the container width */
    }
  `}</style>
        </div>

      </section>
      <section className="contact">
        <h1 className="text-6xl font-bold text-center">Contact</h1>

        <div className="calendly-container">
          <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} />
        </div>

        <style jsx>{`
        .calendly-container {
          overflow: hidden;
        }
      `}</style>
      </section>
    </main >
  )
}
