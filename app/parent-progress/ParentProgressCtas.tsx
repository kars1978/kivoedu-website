"use client";

import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackParentProgressCta(eventName: "cta_try_click" | "cta_parent_dashboard_click") {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, { page: "parent_progress" });
}

export function TryKivoCta({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="pp-btn"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackParentProgressCta("cta_try_click")}
    >
      Try Kivo Demo <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}

export function ParentDashboardCta({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="pp-btn pp-btn-ghost"
      onClick={() => trackParentProgressCta("cta_parent_dashboard_click")}
    >
      See Parent Dashboard
    </a>
  );
}