import { getLandingMetadata, LandingPage } from "../landingPages";

export const metadata = getLandingMetadata("exam-ready");

export default function ExamReadyPage() {
  return <LandingPage slug="exam-ready" />;
}
