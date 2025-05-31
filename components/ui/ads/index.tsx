import { useEffect, CSSProperties } from "react";

type Props = {
  slot: string;
  format?: string;
  className?: string;
  style?: CSSProperties;
};

export default function AdBanner({
  slot,
  format = "auto",
  className = "",
  style = {},
}: Props) {
  useEffect(() => {
    (() => {
      try {
        if (typeof window !== "undefined") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error("Adsense error", e);
      }
    })();
  }, []);

  return (
    <ins
      className={`gg-ads-c adsbygoogle ${className}`}
      style={{ ...style }}
      data-ad-client="ca-pub-7834120314991304"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    ></ins>
  );
}
