"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SECRET_MARVEL = "marvel";
const SECRET_BRUNO = "bruno";
/** Tailwind `lg` — keyboard easter eggs + extra portraits only on large viewports. */
const DESKTOP_MEDIA = "(min-width: 1024px)";

export type FoundPortraitEasterEggsValue = {
  marvelRevealed: boolean;
  brunoRevealed: boolean;
};

const FoundPortraitEasterEggsContext =
  createContext<FoundPortraitEasterEggsValue | null>(null);

export function useFoundPortraitEasterEggs(): FoundPortraitEasterEggsValue {
  const ctx = useContext(FoundPortraitEasterEggsContext);
  if (!ctx) {
    throw new Error(
      "useFoundPortraitEasterEggs must be used within FoundPortraitEasterEggProvider",
    );
  }
  return ctx;
}

function isTypingContext(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (target.isContentEditable) return true;
  if (target.closest("[contenteditable='true']")) return true;
  return Boolean(target.closest("input, textarea, select"));
}

function celebrateAndScrollTo(elementId: string) {
  void import("canvas-confetti").then(({ default: confetti }) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const count = 3;
    const defaults = { spread: 75, ticks: 200, gravity: 0.9, decay: 0.94, startVelocity: 35 };

    const fire = (
      particleRatio: number,
      opts: Partial<Parameters<typeof confetti>[0]>,
    ) => {
      confetti({
        ...defaults,
        particleCount: Math.floor(200 * particleRatio),
        ...opts,
      });
    };

    fire(0.25, { origin: { y: 0.65, x: 0.2 } });
    fire(0.2, { origin: { y: 0.7, x: 0.5 } });
    fire(0.25, { origin: { y: 0.65, x: 0.8 } });

    let i = 0;
    const interval = window.setInterval(() => {
      confetti({ ...defaults, particleCount: 40, angle: 60, spread: 55, origin: { x: 0, y: 0.6 } });
      confetti({ ...defaults, particleCount: 40, angle: 120, spread: 55, origin: { x: 1, y: 0.6 } });
      i += 1;
      if (i >= count) window.clearInterval(interval);
    }, 280);
  });

  const scrollTo = () => {
    const el = document.getElementById(elementId);
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "center",
    });
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(scrollTo);
  });
}

export function FoundPortraitEasterEggProvider({ children }: { children: ReactNode }) {
  const [marvelRevealed, setMarvelRevealed] = useState(false);
  const [brunoRevealed, setBrunoRevealed] = useState(false);
  const marvelRevealedRef = useRef(false);
  const brunoRevealedRef = useRef(false);

  const value = useMemo(
    () => ({ marvelRevealed, brunoRevealed }),
    [marvelRevealed, brunoRevealed],
  );

  useEffect(() => {
    marvelRevealedRef.current = marvelRevealed;
  }, [marvelRevealed]);

  useEffect(() => {
    brunoRevealedRef.current = brunoRevealed;
  }, [brunoRevealed]);

  const onReveal = useCallback((which: "marvel" | "bruno") => {
    if (which === "marvel") {
      if (marvelRevealedRef.current) return;
      marvelRevealedRef.current = true;
      setMarvelRevealed(true);
      celebrateAndScrollTo("marvel-easter-reveal");
    } else {
      if (brunoRevealedRef.current) return;
      brunoRevealedRef.current = true;
      setBrunoRevealed(true);
      celebrateAndScrollTo("bruno-easter-reveal");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let bufMarvel = "";
    let bufBruno = "";
    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const clearBuffersSoon = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        bufMarvel = "";
        bufBruno = "";
      }, 2000);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!window.matchMedia(DESKTOP_MEDIA).matches) return;
      if (isTypingContext(e.target)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key.length !== 1 || !/[a-zA-Z]/.test(e.key)) return;

      const ch = e.key.toLowerCase();
      bufMarvel = (bufMarvel + ch).slice(-SECRET_MARVEL.length);
      bufBruno = (bufBruno + ch).slice(-SECRET_BRUNO.length);
      clearBuffersSoon();

      if (bufMarvel === SECRET_MARVEL) {
        bufMarvel = "";
        bufBruno = "";
        if (idleTimer) clearTimeout(idleTimer);
        onReveal("marvel");
      } else if (bufBruno === SECRET_BRUNO) {
        bufMarvel = "";
        bufBruno = "";
        if (idleTimer) clearTimeout(idleTimer);
        onReveal("bruno");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [onReveal]);

  return (
    <FoundPortraitEasterEggsContext.Provider value={value}>
      {children}
    </FoundPortraitEasterEggsContext.Provider>
  );
}
