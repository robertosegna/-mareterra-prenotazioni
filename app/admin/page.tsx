"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: number;
  nome: string;
  tavolo: number;
  orario: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔄 Simulazione di prenotazioni (in futuro collegheremo Firebase o DB reale)
    const fakeData: Booking[] = [
      { id: 1, nome: "Mario Rossi", tavolo: 5, orario: "20:00" },
      { id: 2, nome: "Luca Bianchi", tavolo: 2, orario: "21:00" },
    ];

    setTimeout(() => {
      setBookings(fakeData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#00cc66" }}>✅ Admin Dashboard - Mare Terra</h1>
      <p>Benvenuto nella pagina di amministrazione.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Prenotazioni del giorno</h2>

        {loading ? (
          <p>Caricamento prenotazioni...</p>
        ) : bookings.length === 0 ? (
          <p>Nessuna prenotazione trovata.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Nome</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Tavolo</th>
                <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Orario</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td style={{ padding: "8px 0" }}>{b.nome}</td>
                  <td>{b.tavolo}</td>
                  <td>{b.orario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}