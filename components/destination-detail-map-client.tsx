"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type DestinationDetailMap from "@/components/destination-detail-map";

const DestinationDetailMapNoSSR = dynamic(
  () => import("@/components/destination-detail-map"),
  { ssr: false },
);

type Props = ComponentProps<typeof DestinationDetailMap>;

export default function DestinationDetailMapClient(props: Props) {
  return <DestinationDetailMapNoSSR {...props} />;
}
