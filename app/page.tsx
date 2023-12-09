"use client"
import Image from "next/legacy/image"
import "react-multi-carousel/lib/styles.css";
import '../public/main.css';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { InlineWidget } from 'react-calendly';
import Script from 'next/script'


export default function Home() {

  return (
    <main>

      <Script id="microsoft-clarity"
        // As a limitation of NextJS, this is the only reliable way for the analytics script to be loaded
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
      <Script id="font-awesome" src="https://kit.fontawesome.com/cafed16778.js" crossOrigin="anonymous"></Script>


      <header className="flex justify-end items-start">
        <div className="nav">
          <ul id="nav-links" className="flex space-x-4 pt-5 shadow-xl rounded-full p-3">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="https://docs.google.com/document/d/e/2PACX-1vQGcTnn04P98Dhf_3I_VcoWb4gJdDe_Fx9C5PSYBOawNxDKwoqhXAHjuABavXHeTCAFeHlT20NmfrTx/pub" className="nav-link">Resume</a></li>
            <li><a href="https://docs.google.com/document/d/e/2PACX-1vT5R1FEjbl1pmb2dP8ZfhcxLsTrRrUKNT8HEIF5YH6IQfM_tiXbDdu4h9xkk_T47Q/pub" className="nav-link">98-019</a></li>
            <li><a href="#media" className="nav-link">Media</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </header>

      <section id="home" className="hero relative" >
        <div className="hero-container relative">
          {/* Image */}
          <div className="hero-image relative h-screen">
            <Image src="/hero.png" alt="SPOC satellite" layout="fill"
              className="object-cover w-full h-full" priority={true} />
          </div>

          {/* Text */}
          <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 id="name" className="text-8xl font-bold">JEFFERY JOHN</h1>
            <div className="socials flex justify-center space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/jefferyjohn/" target="_blank" rel="noopener noreferrer" className="social" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a href="https://www.youtube.com/@jefferyjohn" target="_blank" rel="noopener noreferrer" className="social" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} size="3x" />
              </a>
              <a href="https://github.com/jefferyjohn" target="_blank" rel="noopener noreferrer" className="social" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a href="https://www.instagram.com/jefferyjohn_/" target="_blank" rel="noopener noreferrer" className="social" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
              <a href="https://open.spotify.com/user/themagicalwarlock" target="_blank" rel="noopener noreferrer" className="social" aria-label="Spotify">
                <FontAwesomeIcon icon={faSpotify} size="3x" />
              </a>
              <a href="mailto:jefferyjohn@cmu.edu" target="_blank" rel="noopener noreferrer" className="social" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            </div>
            <div id="about" className="pt-16">
              <h3 id="description" className="text-2xl">Hi! I&apos;m a developer, maker, and hacker @ Carnegie Mellon University.</h3>
              {/* Animated Arrows */}
              <div className="flex justify-center space-x-4 mt-4 pt-36 animate-bounce">
                <a href="#media" aria-label="arrow down to media section">
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
                  <a href="https://top.mlh.io/2022/profiles/jeffery-john">
                    <div className="image-container">
                      <Image src="/media/mlh-top50.png" alt="Major League Hacking Top 50" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">MLH | Major League Hacking Top 50</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.redandblack.com/uganews/uga-s-small-satellite-research-lab-looks-to-the-stars-for-solutions-on-earth/article_0d71f854-36d3-11ec-8210-6f0ff0ab47f6.html" >
                    <div className="image-container">
                      <Image src="/media/small-sat.png" alt="UGA Small Satellite Research Lab" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">UGA | Small Satellite Research Lab</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://news.uga.edu/traveling-mars-complicated-teamwork/" >
                    <div className="image-container">
                      <Image src="/media/fusion.png" alt="UGA Project FUSION" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">UGA | Project FUSION</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://news.uga.edu/student-tour-of-georgia-2020/">
                    <div className="image-container">
                      <Image src="/media/uga-tour.png" alt="Student Tour of Georgia" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">UGA | Student Tour of Georgia</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.linkedin.com/pulse/acm-uga-2021-2022-uga-acm" >
                    <div className="image-container">
                      <Image src="/media/uga-acm.png" alt="ACM @ UGA 2021-2022 Recap" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">UGA | ACM 2021-2022</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://picoctf.org/about.html" >
                    <div className="image-container">
                      <Image src="/media/picoctf.png" alt="picoCTF Overview" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">picoCTF | Overview</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.acmatcmu.com/hackcmu/" >
                    <div className="image-container">
                      <Image src="/media/hackcmu.png" alt="ACM@CMU HackCMU 2023" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">CMU | ACM HackCMU 2023</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.forsythnews.com/local/lifestyles/club-at-pinecrest-combines-crafting-with-service/" >
                    <div className="image-container">
                      <Image src="/media/crafters-club.png" alt="Crafter's Club Pinecrest Academy" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">Forsyth News | Crafter&apos;s Club</div>
                    </div>
                  </a>
                </div>
                <div className="news-item">
                  <a href="https://www.instagram.com/p/B1WW17PpF61/" >
                    <div className="image-container">
                      <Image src="/media/sanford-print.png" alt="UGA 3D Printing of Sanford Stadium" width={400} height={400} className="object-cover w-full" />
                      <div className="news-title">UGA | Sanford Stadium</div>
                    </div>
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
                <a href="https://blink-weld.vercel.app/"  >
                  <div className="image-container boxShadow">
                    <Image src="/projects/blink.png" alt="Retrieval Augmented Generation Chat App" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">RAG Chat App</div>
                  </div>
                </a>

              </div>
              <div className="carousel-item">
                <a href="https://jefferyjohn.github.io/poke/">
                  <div className="image-container boxShadow">
                    <Image src="/projects/poke.png" alt="Physics based simulator with drawing" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Physics simulator</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://irislunarrover.space/">
                  <div className="image-container boxShadow">
                    <Image src="/projects/iris-moonyard.png" alt="MoonYard for Iris" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Sandbox for rover</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://redrobot.roboclub.org/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/red-robot.png" alt="Mobile robot picker" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Mobile robot picker</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://www.acmatcmu.com/hackcmu/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/hackcmu.png" alt="ACM@CMU HackCMU" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">ACM@CMU HackCMU 2023</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://cmrocketcommand.wordpress.com/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/rocket-club.png" alt="Carnegie Mellon Rocket Club" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Carnegie Mellon Rocket Club</div>
                  </div>
                </a>
              </div>
              {/* Duplicate slides so that it's a seamless loop */}
              <div className="carousel-item">
                <a href="https://blink-weld.vercel.app/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/blink.png" alt="Retrieval Augmented Generation Chat App" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">RAG Chat App</div>
                  </div>
                </a>

              </div>
              <div className="carousel-item">
                <a href="https://jefferyjohn.github.io/poke/" aria-label="Physics based siumulator with drawing">
                  <div className="image-container boxShadow">
                    <Image src="/projects/poke.png" alt="Physics based simulator with drawing" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Physics simulator</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://irislunarrover.space/">
                  <div className="image-container boxShadow">
                    <Image src="/projects/iris-moonyard.png" alt="MoonYard for Iris" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Sandbox for rover</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://redrobot.roboclub.org/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/red-robot.png" alt="Mobile robot picker" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Mobile robot picker</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://www.acmatcmu.com/hackcmu/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/hackcmu.png" alt="ACM@CMU HackCMU" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">ACM@CMU HackCMU 2023</div>
                  </div>
                </a>
              </div>
              <div className="carousel-item">
                <a href="https://cmrocketcommand.wordpress.com/" >
                  <div className="image-container boxShadow">
                    <Image src="/projects/rocket-club.png" alt="Carnegie Mellon Rocket Club" width={700} height={700} className="object-cover w-1/3 carousel-image" />
                    <div className="image-container item-label">Carnegie Mellon Rocket Club</div>
                  </div>
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
