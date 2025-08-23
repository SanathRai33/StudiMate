"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import Link from "next/link";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "JSON/Error.json",
    });

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (media.matches) animRef.current?.pause();
      else animRef.current?.play();
    };
    if (media.matches) animRef.current.pause();
    media.addEventListener?.("change", onChange);

    return () => {
      media.removeEventListener?.("change", onChange);
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, []);

  return (
    <main className="min-h-[100%] w-full bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 flex items-center justify-center">
      <div className="mx-auto w-full max-w-3xl bg-[#f5f5f5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Lottie box */}
          <div className="w-full">
            <div
              ref={containerRef}
              aria-hidden
              className="mx-auto h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96"
            />
          </div>

          {/* Text & actions */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Error 404
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Oops! Page not found
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              The page you’re looking for doesn’t exist or has been moved.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Go Home
              </Link>
              <button
                onClick={() => (typeof window !== "undefined" ? window.history.back() : null)}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Go Back
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600" />
              It’s not you, it’s the URL.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
