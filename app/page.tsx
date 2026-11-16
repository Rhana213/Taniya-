export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px",
        background: "#FAF5EA",
        color: "#14342B",
        fontFamily: "Georgia, serif",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", lineHeight: 1.15, margin: 0 }}>
        Vos clients satisfaits ne reviennent pas. Ils oublient.
      </h1>
      <p style={{ fontSize: "1.1rem", marginTop: 16 }}>
        Retour les rappelle à votre place, au bon moment.
      </p>
      <a
        href="#"
        style={{
          marginTop: 28,
          padding: "16px 20px",
          background: "#14342B",
          color: "#FAF5EA",
          textAlign: "center",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Commencer, c'est gratuit
      </a>
    </main>
  );
}
