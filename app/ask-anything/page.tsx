import { getLandingMetadata, LandingPage } from "../landingPages";

export const metadata = getLandingMetadata("ask-anything");

export default function AskAnythingPage() {
  return <LandingPage slug="ask-anything" />;
}
