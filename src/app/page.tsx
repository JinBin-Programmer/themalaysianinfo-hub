import type { Metadata } from "next";
import HubContent from "@/components/HubContent";
import { toGuideCards } from "./(site)/panduan/_lib/registry";

export const metadata: Metadata = {
  title: "The Malaysian Info — Portal Maklumat Malaysia",
};

export default function HomePage() {
  return <HubContent guides={toGuideCards()} />;
}
