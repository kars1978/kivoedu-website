import { getLandingMetadata, LandingPage } from "../landingPages";

export const metadata = getLandingMetadata("parent-progress");

export default function ParentProgressPage() {
  return <LandingPage slug="parent-progress" />;
}
