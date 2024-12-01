import IconCloud from "@/components/ui/icon-cloud";
import { themes } from "@/data/themes";
import React from "react";

const ThematicsCloud = () => {
    return (
        <div className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden">
            <IconCloud customIcons={themes}></IconCloud>
        </div>
    );
};

export default ThematicsCloud;
