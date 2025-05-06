"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <Image
        src="/logo-mareterra.png" // 🔄 Se hai il logo, altrimenti lascia /vercel.svg
        alt="Logo Mare Terra"
        width={180}
        height={60}
        priority
      />
      <h1 style={{ marginTop: "1rem", color: "#00cc66" }}>
        Benvenuto al Ristorante Mare Terra
      </h1>
      <p>Scopri i sapori autentici del nostro mare</p>

      <a
        href="/prenota"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "1rem 2rem",
          backgroundColor: "#00cc66",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem"
        }}
      >
        Prenota ora
      </a>
    </main>
  );
}export default function PrenotaPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📅 Prenotazione</h1>
      <p>Qui potrai presto inserire i tuoi dati per prenotare un tavolo al Mare Terra.</p>
    </main>
  );
}