"use client";

import { useState } from "react";

const GREEN = "#14342B";
const CREAM = "#FAF5EA";

export default function Apercu() {
  const [salon, setSalon] = useState("");
  const [copie, setCopie] = useState(false);

  const nom = salon.trim() || "votre salon";
  const message = `Bonjour, ici ${nom}. Ça fait un moment qu'on ne s'est pas vus ! Pour votre prochaine visite, profitez de -10 % avec le code RETOUR10 (valable une seule fois). À très vite !`;

  async function copier() {
    try {
      await navigator.clipboard.writeText(message);
      setCopie(true);
    } catch {
      setCopie(false);
    }
  }

  const box: React.CSSProperties = {
    padding: 20,
    background: "#fff",
    border: `2px solid ${GREEN}`,
    borderRadius: 8,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 24,
        background: CREAM,
        color: GREEN,
        fontFamily: "Georgia, serif",
      }}
    >
      <p style={{ fontSize: "0.95rem", margin: 0 }}>Votre premier rappel</p>
      <h1 style={{ fontSize: "1.8rem", lineHeight: 1.2, margin: "8px 0 20px" }}>
        Voilà un message prêt à envoyer.
      </h1>

      <label style={{ fontSize: "1rem" }}>Nom de votre salon</label>
      <input
        value={salon}
        onChange={(e) => setSalon(e.target.value)}
        placeholder="Ex. Salon Léa"
        style={{
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          margin: "8px 0 20px",
          padding: "14px 16px",
          fontSize: "1.1rem",
          fontFamily: "Georgia, serif",
          border: `2px solid ${GREEN}`,
          borderRadius: 8,
          background: "#fff",
          color: GREEN,
        }}
      />

      <div style={box}>
        <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: 1.5 }}>
          {message}
        </p>
      </div>

      <button
        onClick={copier}
        style={{
          width: "100%",
          marginTop: 16,
          padding: "16px 20px",
          background: GREEN,
          color: CREAM,
          border: "none",
          borderRadius: 8,
          fontSize: "1.1rem",
          fontFamily: "Georgia, serif",
          cursor: "pointer",
        }}
      >
        {copie ? "Message copié" : "Copier ce message"}
      </button>

      <h2 style={{ fontSize: "1.3rem", margin: "36px 0 12px" }}>
        La suite, avec Retour
      </h2>
      {[
        "Envoi automatique au bon moment, sans y penser",
        "Offre de retour à usage unique pour chaque client",
        "Compteur : clients revenus et chiffre généré",
      ].map((t) => (
        <div
          key={t}
          style={{
            ...box,
            marginBottom: 10,
            opacity: 0.55,
            borderStyle: "dashed",
          }}
        >
          <p style={{ margin: 0, fontSize: "1rem" }}>
            <strong>Verrouillé.</strong> {t}
          </p>
        </div>
      ))}

      <a
        href="#"
        style={{
          display: "block",
          marginTop: 20,
          padding: "16px 20px",
          background: GREEN,
          color: CREAM,
          textAlign: "center",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Débloquer la suite
      </a>
    </main>
  );
}
