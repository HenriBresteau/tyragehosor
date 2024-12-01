/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                gilroy: ["Gilroy", "cursive"],
                fanwood: ["Fanwood", "cursive"],
            },
            colors: {
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                green: "hsl(var(--green))",
                greenlight: "hsl(var(--greenlight))",
                light: "#eff5f3",
                bg: "#66c268",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            animation: {
                rotateCenter: "rotateCenter 3.6s ease-in-out both;",
                zoom: "zoom 6s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards",
                marquee: "marquee var(--duration) infinite linear",
                "marquee-vertical":
                    "marquee-vertical var(--duration) linear infinite",
            },
            keyframes: {
                rotateCenter: {
                    "0%": {
                        transform: "rotate(0)",
                    },
                    "100% ": {
                        transform: "rotate(720deg)",
                    },
                },
                zoom: {
                    "0%": {
                        transform: "scale(2) translate(-25%,-25%)",
                    },
                    "50% ": {
                        transform: "scale(1) translate(-50%,-50%)",
                        borderRadius: "50%",
                    },
                    "75% ": {
                        opacity: "1",
                    },
                    "100% ": {
                        transform: "translate(-50%,75px)",
                        borderRadius: "50%",
                        opacity: "0",
                    },
                },
                marquee: {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(calc(-100% - var(--gap)))",
                    },
                },
                "marquee-vertical": {
                    from: {
                        transform: "translateY(0)",
                    },
                    to: {
                        transform: "translateY(calc(-100% - var(--gap)))",
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
