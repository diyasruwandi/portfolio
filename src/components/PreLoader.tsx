import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import d1 from "../assets/img/person/d1.jpeg";
import d2 from "../assets/img/person/d2.jpg";
import d3 from "../assets/img/person/d3.jpg";
import d5 from "../assets/img/person/d5.jpg";

gsap.registerPlugin(CustomEase);

// Variabel global dalam cakupan modul. Hanya akan di-reset (kembali false)
// ketika pengguna menekan tombol Refresh / muat ulang halaman atau menutup web.
let hasRunOnce = false;

// Fungsi manual untuk menggantikan SplitText premium GSAP
const manualSplitText = (
  selector: string,
  type: "chars" | "lines",
  innerClass: string,
) => {
  const elements = document.querySelectorAll(selector);
  const result: { chars: HTMLElement[]; lines: HTMLElement[] } = {
    chars: [],
    lines: [],
  };

  elements.forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = "";

    if (type === "chars") {
      const words = text.split(" ");
      words.forEach((word) => {
        const wordSpan = document.createElement("div");
        wordSpan.style.display = "inline-block";
        wordSpan.className = "word";
        word.split("").forEach((char) => {
          const charWrap = document.createElement("div");
          charWrap.style.overflow = "hidden";
          charWrap.style.display = "inline-block";
          charWrap.className = "char-mask";

          const charInner = document.createElement("div");
          charInner.style.display = "inline-block";
          charInner.className = innerClass;
          charInner.textContent = char;
          charInner.innerHTML = char === " " ? "&nbsp;" : char;

          charWrap.appendChild(charInner);
          wordSpan.appendChild(charWrap);
          result.chars.push(charInner);
        });
        el.appendChild(wordSpan);
        el.appendChild(document.createTextNode(" "));
      });
    } else if (type === "lines") {
      // Pembagian line secara sederhana
      const lineWrap = document.createElement("div");
      lineWrap.style.overflow = "hidden";
      lineWrap.style.display = "inline-block";

      const lineInner = document.createElement("div");
      lineInner.style.display = "inline-block";
      lineInner.className = innerClass;
      lineInner.textContent = text;

      lineWrap.appendChild(lineInner);
      el.appendChild(lineWrap);
      result.lines.push(lineInner);
    }
  });

  return result;
};

const PreLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasRunOnce) return;

    // Redirect langsung ke Home jika pertama kali load (saat efek loading berjalan)
    navigate("/");

    const ctx = gsap.context(() => {
      try {
        CustomEase.create("hop", "0.9, 0, 0.1, 1");

        const splitPreloaderHeader = manualSplitText(
          ".preloader-header a",
          "chars",
          "char",
        );
        const splitPreloaderCopy = manualSplitText(
          ".preloader-copy p",
          "lines",
          "line",
        );
        const splitHeader = manualSplitText(".header-row h1", "lines", "line");

        const chars = splitPreloaderHeader.chars;
        const lines = splitPreloaderCopy.lines;
        const headerLines = splitHeader.lines;
        const initialChar = chars[0];
        const lastChar = chars[chars.length - 1];

        if (chars.length) {
          chars.forEach((char: any, index: number) => {
            gsap.set(char, { yPercent: index % 2 === 0 ? -100 : 100 });
          });
        }

        if (lines.length) gsap.set(lines, { yPercent: 0 });
        if (headerLines.length) gsap.set(headerLines, { yPercent: 0 });

        const preloaderImages = gsap.utils.toArray(".preloader-image .img");
        const preloaderImagesInner = gsap.utils.toArray(
          ".preloader-image .img img",
        );

        const tl = gsap.timeline({ delay: 0.25 });

        if (document.querySelector(".progress-bar")) {
          tl.to(".progress-bar", {
            scaleX: 1,
            duration: 4,
            ease: "power3.inOut",
          })
            .set(".progress-bar", { transformOrigin: "right" })
            .to(".progress-bar", {
              scaleX: 0,
              duration: 1,
              ease: "power3.in",
            });
        }

        preloaderImages.forEach((preloaderImg, index) => {
          tl.to(
            preloaderImg as Element,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "hop",
              delay: index * 0.75,
            },
            "-=5",
          );
        });

        preloaderImagesInner.forEach((imgInner, index) => {
          tl.to(
            imgInner as Element,
            {
              scale: 1,
              duration: 1.5,
              ease: "hop",
              delay: index * 0.75,
            },
            "-=5.25",
          );
        });

        if (lines.length) {
          tl.to(
            lines,
            {
              yPercent: 0,
              duration: 2,
              ease: "hop",
              stagger: 0.1,
            },
            "-=5.5",
          );
        }

        if (chars.length) {
          tl.to(
            chars,
            {
              yPercent: 0,
              duration: 1,
              ease: "hop",
              stagger: 0.025,
            },
            "-=5",
          );
        }

        if (document.querySelector(".preloader-image")) {
          tl.to(
            ".preloader-image",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 1,
              ease: "hop",
            },
            "-=1.5",
          );
        }

        if (lines.length) {
          tl.to(
            lines,
            {
              y: "-290%",
              duration: 2,
              ease: "hop",
              stagger: 0.1,
            },
            "-=2",
          );
        }

        if (chars.length) {
          tl.to(
            chars,
            {
              yPercent: (index: number) => {
                if (index === 0 || index === chars.length - 1) {
                  return 0;
                }
                return index % 2 === 0 ? 100 : -100;
              },
              duration: 1,
              ease: "hop",
              stagger: 0.025,
              delay: 0.5,
              onStart: () => {
                const initialCharMask = initialChar?.parentElement;
                const lastCharMask = lastChar?.parentElement;

                if (
                  initialCharMask &&
                  initialCharMask.classList.contains("char-mask")
                ) {
                  initialCharMask.style.overflow = "visible";
                }

                if (
                  lastCharMask &&
                  lastCharMask.classList.contains("char-mask")
                ) {
                  lastCharMask.style.overflow = "visible";
                }

                const viewportWidth = window.innerWidth;
                const centerX = viewportWidth / 2;
                const initialCharRect = initialChar?.getBoundingClientRect();
                const lastCharRect = lastChar?.getBoundingClientRect();

                if (
                  initialChar &&
                  lastChar &&
                  initialCharRect &&
                  lastCharRect
                ) {
                  gsap.to([initialChar, lastChar], {
                    duration: 1,
                    ease: "hop",
                    delay: 0.5,
                    x: (i: number) => {
                      if (i === 0) {
                        return (
                          centerX - initialCharRect.left - initialCharRect.width
                        );
                      } else {
                        return centerX - lastCharRect.left;
                      }
                    },
                    onComplete: () => {
                      if (document.querySelector(".preloader-header")) {
                        gsap.set(".preloader-header", {
                          mixBlendMode: "difference",
                        });
                        gsap.to(".preloader-header", {
                          y: "2rem",
                          scale: 0.35,
                          duration: 1.75,
                          ease: "hop",
                        });
                      }
                    },
                  });
                }
              },
            },
            "-=2.5",
          );
        }

        if (document.querySelector(".preloader")) {
          tl.to(
            ".preloader",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 1.75,
              ease: "hop",
            },
            "-=0.5",
          );
        }

        if (document.querySelector(".header-row .line")) {
          tl.to(
            ".header-row .line",
            {
              yPercent: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            },
            "-=0.75",
          );
        }

        if (document.querySelector(".divider")) {
          tl.to(
            ".divider",
            {
              scaleX: 1,
              duration: 1,
              ease: "power4.out",
              stagger: 0.1,
            },
            "<",
          );
        }

        // Menyembunyikan seluruh container preloader setelah animasi selesai agar tidak menghalau klik pada halaman
        tl.set(containerRef.current, {
          autoAlpha: 0,
          pointerEvents: "none",
          onComplete: () => {
            hasRunOnce = true;
          },
        });
      } catch (err) {
        console.error("GSAP Animation error, check premium plugins:", err);
        // Fallback hide preloader if error
        gsap.set(containerRef.current, {
          autoAlpha: 0,
          pointerEvents: "none",
          display: "none",
        });
        hasRunOnce = true;
      }
    }, containerRef); // Scoped ke containerRef

    return () => ctx.revert();
  }, []);

  if (hasRunOnce) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 pointer-events-auto">
      <div className="preloader fixed top-0 left-0 w-full h-[100svh] bg-[#111] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] will-change-[clip-path] overflow-hidden z-40">
        <div className="progress-bar absolute top-0 left-0 w-full h-[7px] bg-white scale-x-0 origin-left will-change-transform"></div>

        <div className="preloader-image absolute top-[35%] lg:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10rem] h-[10rem] lg:w-[25rem] lg:h-[25rem] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] will-change-[clip-path] overflow-hidden">
          <div className="img absolute w-full h-full [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)] will-change-[clip-path] overflow-hidden">
            <img
              src={d1}
              alt=""
              className="relative w-full h-full object-cover scale-[2] will-change-transform"
            />
          </div>
          <div className="img absolute w-full h-full [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)] will-change-[clip-path] overflow-hidden">
            <img
              src={d5}
              alt=""
              className="relative w-full h-full object-cover scale-[2] will-change-transform"
            />
          </div>
          <div className="img absolute w-full h-full [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)] will-change-[clip-path] overflow-hidden">
            <img
              src={d3}
              alt=""
              className="relative w-full h-full object-cover scale-[2] will-change-transform"
            />
          </div>
          <div className="img absolute w-full h-full [clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)] will-change-[clip-path] overflow-hidden">
            <img
              src={d2}
              alt=""
              className="relative w-full h-full object-cover scale-[2] will-change-transform"
            />
          </div>
        </div>

        {/* <div className="preloader-copy absolute bottom-20 left-1/2 -translate-x-1/2 w-[80%] lg:w-[30%] text-white overflow-hidden">
          <p className="uppercase text-center text-[0.8rem] font-[400] font-sans">
            A frontend developer passionate about crafting modern, responsive,
            and user-friendly web experiences.
          </p>
        </div> */}
      </div>

      <div className="preloader-header fixed w-full flex justify-center items-center translate-y-[50svh] lg:translate-y-[60svh] origin-top will-change-transform overflow-hidden z-50 pointer-events-none">
        <a
          href="#"
          className="uppercase text-white text-[8vw] sm:text-[4rem] lg:text-[5rem] font-bold leading-[0.9] block font-sans"
        >
          creative portfolio
        </a>
      </div>
    </div>
  );
};

export default PreLoader;
