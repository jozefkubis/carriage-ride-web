"use client";

import dynamic from "next/dynamic";

// Dynamický import Map komponentu bez SSR
const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

export default function MapWrapper({ address }) {
    return <DynamicMap address={address} />;
}
