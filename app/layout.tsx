export const metadata = {
  title: "Retour : le rappel qui fait revenir vos clients",
  description:
    "Retour rappelle vos clients à votre place, au bon moment, avec une offre de retour simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
