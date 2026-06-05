"use client";

import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type LandingPageActionsProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  analyticsPage?: string;
};

function track(eventName: "cta_try_click" | "cta_how_it_works_click", page?: string) {
  if (!page || typeof window === "undefined") return;
  window.gtag?.("event", eventName, { page });
}

export function LandingPageActions({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  analyticsPage,
}: LandingPageActionsProps) {
  return (
    <div className="lp-actions">
      <a
        href={primaryHref}
        className="lp-btn"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("cta_try_click", analyticsPage)}
      >
        {primaryLabel}
        <ArrowRight size={16} aria-hidden="true" />
      </a>
      {secondaryHref && secondaryLabel && (
        <a
          href={secondaryHref}
          className="lp-btn lp-btn-secondary"
          onClick={() => track("cta_how_it_works_click", analyticsPage)}
        >
          {secondaryLabel}
        </a>
      )}
    </div>
  );
}
