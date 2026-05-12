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

const SECRET = "marvel";
/** Tailwind `lg` — keyboard easter egg + extra portrait only on large viewports. */
const DESKTOP_MEDIA = "(min-width: 1024px)";

type MarvelContextValue = {
  revealed: boolean;
};

const MarvelContext = createContext<MarvelContextValue | null>(null);

export function useMarvelEasterEgg(): MarvelContextValue {
  const ctx = useContext(MarvelContext);
  if (!ctx) {
    throw new Error("useMarvelEasterEgg must be used within MarvelEasterEggProvider");
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

export function MarvelEasterEggProvider({ children }: { children: ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  const revealedRef = useRef(false);

  const value = useMemo(() => ({ revealed }), [revealed]);

  useEffect(() => {
    revealedRef.current = revealed;
  }, [revealed]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let buffer = "";
    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const clearBufferSoon = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        buffer = "";
      }, 2000);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (revealedRef.current) return;
      if (!window.matchMedia(DESKTOP_MEDIA).matches) return;
      if (isTypingContext(e.target)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key.length !== 1 || !/[a-zA-Z]/.test(e.key)) return;

      buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      clearBufferSoon();

      if (buffer === SECRET) {
        buffer = "";
        if (idleTimer) clearTimeout(idleTimer);
        revealedRef.current = true;
        setRevealed(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  const runCelebration = useCallback(() => {
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
  }, []);

  useEffect(() => {
    if (!revealed) return;

    runCelebration();

    const scrollToMarvel = () => {
      const el = document.getElementById("marvel-easter-reveal");
      if (!el) return;
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "center",
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToMarvel);
    });
  }, [revealed, runCelebration]);

  return (
    <MarvelContext.Provider value={value}>{children}</MarvelContext.Provider>
  );
}
