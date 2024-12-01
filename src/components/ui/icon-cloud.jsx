"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 4,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
        // dragControl: false,
    },
};

export const renderCustomIcon = (icon, theme) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};

export default function IconCloud({ iconSlugs, customIcons }) {
    const [data, setData] = useState(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (iconSlugs) {
            fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
        }
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        const simpleIcons =
            data?.simpleIcons &&
            Object.values(data.simpleIcons).map((icon) =>
                renderCustomIcon(icon, theme || "light")
            );

        const customRenderedIcons = customIcons?.map((icon) => (
            <a
                key={icon.id}
                title={icon.name}
                className="text-9xl transition-transform hover:scale-110 flex justify-center items-center "
            >
                <img
                    src={icon.url}
                    alt={icon.name}
                    className="w-40 h-40"
                    width={28}
                    height={28}
                />
            </a>
        ));

        return [...(simpleIcons || []), ...(customRenderedIcons || [])];
    }, [data, theme, customIcons]);

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    );
}
