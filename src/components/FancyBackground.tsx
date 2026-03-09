import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const FancyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Characters for the rain
        const chars = "01$>{ }#[]/\\!@%&*()_+-=;:'\",.<>?|";
        const keywords = ["DOCKER", "AWS", "BASH", "LINUX", "GIT", "CI/CD", "K8S", "YAML", "SSH"];

        const fontSize = 14;
        const columns = Math.ceil(canvas.width / fontSize);

        // An array of drops - one per column
        const drops: number[] = [];
        // An array to store if a column is currently writing a keyword
        const activeKeywords: { word: string; index: number; row: number }[] = new Array(columns).fill(null);

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height / fontSize;
        }

        const draw = () => {
            // Create a fading effect
            ctx.fillStyle = theme === "dark" ? "rgba(10, 11, 15, 0.1)" : "rgba(250, 250, 250, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

            for (let i = 0; i < columns; i++) {
                let text = "";

                // Decide whether to start a keyword or a random char
                if (!activeKeywords[i] && Math.random() > 0.995) {
                    activeKeywords[i] = {
                        word: keywords[Math.floor(Math.random() * keywords.length)],
                        index: 0,
                        row: Math.floor(drops[i])
                    };
                }

                if (activeKeywords[i]) {
                    text = activeKeywords[i].word[activeKeywords[i].index];
                    activeKeywords[i].index++;

                    // If word finished, clear it
                    if (activeKeywords[i].index >= activeKeywords[i].word.length) {
                        activeKeywords[i] = null;
                    }
                } else {
                    text = chars[Math.floor(Math.random() * chars.length)];
                }

                // Color based on theme
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Highlight keywords or specific symbols
                if (text.match(/[A-Z]/)) {
                    ctx.fillStyle = theme === "dark" ? "hsla(160, 80%, 45%, 0.4)" : "hsla(160, 80%, 38%, 0.2)";
                } else {
                    ctx.fillStyle = theme === "dark" ? "hsla(160, 80%, 45%, 0.15)" : "hsla(160, 80%, 38%, 0.08)";
                }

                ctx.fillText(text, x, y);

                // Sending the drop back to the top randomly after it has crossed the screen
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Incrementing Y coordinate
                drops[i]++;
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Vignette Overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(var(--background),_0.4)_100%)]" />

            {/* Subtle Scanline (keeping this from previous version) */}
            <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </div>
    );
};

export default FancyBackground;
