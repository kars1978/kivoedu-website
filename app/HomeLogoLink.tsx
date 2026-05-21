"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "./constants";

export default function HomeLogoLink() {
  return (
    <Link
      href="/"
      className="logo-link"
      aria-label="KivoEdu home"
      onClick={(event) => {
        if (window.location.pathname !== "/") return;
        event.preventDefault();
        window.history.replaceState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Image
        src={LOGO_SRC}
        alt="KivoEdu"
        width={138}
        height={52}
        style={{ objectFit: "contain", height: "auto" }}
        priority
      />
    </Link>
  );
}
