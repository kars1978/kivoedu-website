import { getLandingMetadata, LandingPage } from "../landingPages";
import ChatMockup from "./ChatMockup";

export const metadata = getLandingMetadata("ask-anything");

export default function AskAnythingPage() {
  return <LandingPage slug="ask-anything" mockup={<ChatMockup />} />;
}
