"use client";

// AdSense ad slots. Ads stay visually empty until the AdSense account is
// approved for this domain; the loader script lives in the root layout.
// Once approved, uncomment the useEffect + <ins> block to activate.

interface AdBannerProps {
  slot: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return <div className={className} />;
}
