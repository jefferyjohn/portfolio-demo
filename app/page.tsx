"use client"
import Head from 'next/head';
import Image from "next/legacy/image"
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import "react-multi-carousel/lib/styles.css";
import '../public/main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { InlineWidget } from 'react-calendly';

export default function Home() {

  // Clarity
  useEffect(() => {
    clarity.init('k0lg58jnzr');
  }
    , []);

  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/cafed16778.js" crossOrigin="anonymous"></script>
      </Head>


      <script
        // As a limitation of the NextJS, this is the only reliable way for the analytics script to be loaded
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
        <div className="nav shadow-lg ">
          <ul className="flex space-x-4 pt-5 pr-16 shadow-xl rounded-full p-3">
            <li><a href="#home" className="text-xl">Home</a></li>
            <li><a href="https://docs.google.com/document/d/1P_OGRLE3YFpMaA_HrIfT9GhvJX6ZVo1uLXGaagscEcE/export?format=pdf" className="text-xl">Resume</a></li>
            <li><a href="https://docs.google.com/document/d/1_hXpiQh4v_hvvW-0ZLLrTg2pLDjdtK_U/edit?usp=sharing&ouid=103091850561061166757&rtpof=true&sd=true" className="text-xl">98-019</a></li>
            <li><a href="#media" className="text-xl">Media</a></li>
            <li><a href="#projects" className="text-xl">Projects</a></li>
            <li><a href="#contact" className="text-xl">Contact</a></li>
          </ul>
        </div>
      </header>

      <section id="home" className="hero relative" >
        <div className="hero-container relative">
          {/* Image */}
          <div className="hero-image relative h-screen">
            <Image src="/hero.png" alt="Jeffery John" layout="fill"
              className="object-cover w-full h-full" priority={true} />
          </div>

          {/* Text */}
          <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-8xl font-bold">JEFFERY JOHN</h1>
            <div className="socials flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/jefferyjohn/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a href="https://www.youtube.com/@jefferyjohn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="3x" />
              </a>
              <a href="https://github.com/jefferyjohn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a href="https://www.instagram.com/jefferyjohn_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
              <a href="https://open.spotify.com/user/themagicalwarlock" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} size="3x" />
              </a>
              <a href="mailto:jefferyjohn@cmu.edu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            </div>
            <div id="about" className="pt-16">
              <h3 id="description" className="text-2xl">Hi! I'm a developer, maker, and hacker @ Carnegie Mellon University.</h3>
              {/* Animated Arrows */}
              <div className="flex justify-center space-x-4 mt-4 pt-36 animate-bounce">
                <a href="#media">
                  <FontAwesomeIcon icon={faArrowDown} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="content">
        <section id="media" className="media w-9/10 pt-12">
          <h1 className="text-6xl font-bold text-center">Media</h1>
          <div className="flex flex-col items-center">
            <section id="news" className="news w-9/10 pt-12">
              <div className="grid grid-cols-3 gap-4 gap-y-8 mt-4">
                <div className="news-item">
                  <a href="https://top.mlh.io/2022/profiles/jeffery-john" className="">
                    <Image src="/media/mlh-top50.png" alt="Major League Hacking Top 50" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div> 
                <div className="news-item">
                  <a href="https://www.redandblack.com/uganews/uga-s-small-satellite-research-lab-looks-to-the-stars-for-solutions-on-earth/article_0d71f854-36d3-11ec-8210-6f0ff0ab47f6.html" className="">
                    <Image src="/media/small-sat.png" alt="UGA Small Satellite Research Lab" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://news.uga.edu/traveling-mars-complicated-teamwork/" className="">
                    <Image src="/media/fusion.png" alt="UGA Project FUSION" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://news.uga.edu/student-tour-of-georgia-2020/" className="">
                    <Image src="/media/uga-tour.png" alt="Student Tour of Georgia" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.linkedin.com/pulse/acm-uga-2021-2022-uga-acm" className="">
                    <Image src="/media/uga-acm.png" alt="ACM @ UGA 2021-2022 Recap" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://picoctf.org/about.html" className="">
                    <Image src="/media/picoctf.png" alt="picoCTF Overview" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.acmatcmu.com/hackcmu/" className="">
                    <Image src="/media/hackcmu.png" alt="ACM@CMU HackCMU Overview" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.forsythnews.com/local/lifestyles/club-at-pinecrest-combines-crafting-with-service/" className="">
                    <Image src="/media/crafters-club.png" alt="Crafter's Club Pinecrest Academy" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.instagram.com/p/B1WW17PpF61/" className="">
                    <Image src="/media/sanford-print.png" alt="UGA 3D Printing of Sanford Stadium" width={400} height={400} className="object-cover w-full" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="projects" className="projects w-9/10 pt-20" >
          <h1 className="text-6xl font-bold text-center">Projects</h1>

          <div className="carousel-container overflow-hidden relative pt-24">
            <div className="carousel-wrapper flex animate-slide" id="carousel">
              <div className="carousel-item">
                <a href="https://blink-weld.vercel.app/" className="">
                  <Image src="/projects/blink.png" alt="Retrieval Augmented Generation Chat App" width={700} height={700} className="object-cover w-1/3 " />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://jefferyjohn.github.io/poke/" className="">
                  <Image src="/projects/poke.png" alt="Physics based simulator with drawing" width={700} height={700} className="object-cover w-1/3 " />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://irislunarrover.space/" className="">
                  <Image src="/projects/iris-moonyard.png" alt="MoonYard for Iris" width={700} height={700} className="object-cover w-1/3 " />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://redrobot.roboclub.org/" className="">
                  <Image src="/projects/red-robot.png" alt="Robotics Club Red Robot" width={700} height={700} className="object-cover w-1/3 " />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://www.acmatcmu.com/hackcmu/" className="">
                  <Image src="/projects/hackcmu.png" alt="ACM@CMU HackCMU" width={700} height={700} className="object-cover w-1/3 " />
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://cmrocketcommand.wordpress.com/" className="">
                  <Image src="/projects/rocket-club.png" alt="Carnegie Mellon Rocket Command" width={700} height={700} className="object-cover w-1/3 " />
                </a>
              </div>
            </div>

          </div>

        </section>
        <section id="contact" className="contact w-9/10 pt-20">
          <h1 className="text-6xl font-bold text-center">Contact</h1>
          <div className="calendly-container" >
            {/* As a limitation of the API, no class or id declarations are allowed here - direct style tag is unavoidable */}
            <InlineWidget url="https://calendly.com/jefferyjohn/45-minute-meeting" styles={{ height: '1000px' }} />
          </div>
        </section>
      </div>
    </main >
  )
}
