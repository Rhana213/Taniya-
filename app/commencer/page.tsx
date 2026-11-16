"use client";

import { useState } from "react";

const GREEN = "#14342B";
const CREAM = "#FAF5EA";

const questions = [
  {
    titre: "Combien de clients recevez-vous par semaine ?",
    options: [
      { label: "Moins de 20", value: 15 },
      { label: "Entre 20 et 40", value: 30 },
      { label: "Entre 40 et 60", value: 50 },
      { label: "Plus de 60", value: 70 },
    ],
  },
  {
    titre: "Quel est le prix moyen d'une prestation ?",
    options: [
      { label: "Moins de 20 €", value: 15 },
      { label: "Entre 20 et 35 €", value: 28 },
      { label: "Entre 35 et 50 €", value: 43 },
      { label: "Plus de 50 €", value: 60 },
    ],
  },
  {
    titre: "Sur 10 clients, combien ne reviennent jamais ?",
    options: [
      { label: "1 sur 10", value: 10 },
      { label: "2 sur 10", value: 20 },
      { label: "3 sur 10", value: 30 },
      { label: "4 ou plus sur 10", value: 40 },
    ],
  },
];

function euros(n: number) {
  return n.toLocaleString("fr-FR") + " €";
}

export default function Commencer() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function choisir(value: number) {
    setAnswers([...answers, value]);
    setStep(step + 1);
  }

  const page: React.CSSProperties = {
    minHeight: "100vh",
    padding: "24px",
    background: CREAM,
    color: GREEN,
    fontFamily: "Georgia, serif",
    display: "flex",
    flexDirection: "column",
  };

  if (step < 3) {
    const q = questions[step];
    return (
      <main style={page}>
        <div style={{ height: 8, background: "#E3DAC4", borderRadius: 4 }}>
          <div
            style={{
              height: 8,
              width: `${((step + 1) / 3) * 100}%`,
              background: GREEN,
              borderRadius: 4,
            }}
          />
        </div>
        <p style={{ marginTop: 12, fontSize: "0.95rem" }}>
          Question {step + 1} sur 3
        </p>
        <h1 style={{ fontSize: "1.8rem", lineHeight: 1.2, margin: "16px 0 28px" }}>
          {q.titre}
        </h1>
        {q.options.map((o) => (
          <button
            key={o.label}
            onClick={() => choisir(o.value)}
            style={{
              padding: "18px 20px",
              marginBottom: 12,
              background: "#fff",
              color: GREEN,
              border: `2px solid ${GREEN}`,
              borderRadius: 8,
              fontSize: "1.1rem",
              fontFamily: "Georgia, serif",
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            {o.label}
          </button>
        ))}
      </main>
    );
  }

  const [parSemaine, prix, part] = answers;
  const perdusMois = Math.round(parSemaine * 4.3 * (part / 100));
  const perteMois = perdusMois * prix;
  const recupere = Math.round(perteMois / 4);

  return (
    <main style={page}>
      <p style={{ fontSize: "0.95rem" }}>Votre résultat</p>
      <h1 style={{ fontSize: "1.8rem", lineHeight: 1.2, margin: "8px 0 20px" }}>
        Vous perdez environ {euros(perteMois)} par mois.
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
        Avec {parSemaine} clients par semaine, une prestation à {prix} € et{" "}
        {part} % de clients qui ne reviennent jamais, cela fait environ{" "}
        {perdusMois} clients perdus chaque mois.
      </p>
      <div
        style={{
          marginTop: 20,
          padding: 20,
          background: "#fff",
          border: `2px solid ${GREEN}`,
          borderRadius: 8,
        }}
      >
        <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.5 }}>
          Si Retour ramène seulement <strong>1 client perdu sur 4</strong>, vous
          récupérez environ <strong>{euros(recupere)} par mois</strong>.
          L'abonnement coûte 29 € par mois.
        </p>
      </div>
      <a
        href="#"
        style={{
          marginTop: 28,
          padding: "16px 20px",
          background: GREEN,
          color: CREAM,
          textAlign: "center",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Voir mon message de rappel
      </a>
    </main>
  );
}
