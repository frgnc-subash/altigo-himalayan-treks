"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type DestinationMap from "@/components/destination-map";

const DestinationMapNoSSR = dynamic(() => import("@/components/destination-map"), {
  ssr: false,
});

type Props = ComponentProps<typeof DestinationMap>;

export default function DestinationMapClient(props: Props) {
  return <DestinationMapNoSSR {...props} />;
}
