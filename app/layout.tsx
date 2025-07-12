import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-poppins",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dora Healthcare",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Plataforma digital de saúde que conecta pacientes a profissionais e cuidadores por meio de geolocalização, oferecendo uma experiência acessível, segura e eficiente. O sistema atende desde filhos que cuidam de pais idosos até pacientes em reabilitação, promovendo o encontro com fisioterapeutas, enfermeiros, nutricionistas e outros especialistas. A proposta entrega agilidade no agendamento, confiança nas avaliações e transparência nos preços. Para os profissionais, a plataforma amplia o alcance e facilita a gestão de atendimentos. Já parceiros comerciais encontram um canal direto com um público segmentado. A aplicação prioriza design intuitivo, performance otimizada, segurança de dados (LGPD) e uma interface humanizada.",
  openGraph: {
    title: "Dora Healthcare",
    description:
      "Conectando pacientes e profissionais de saúde com empatia e eficiência.",
    url: "https://dora-healthcare.vercel.app",
    siteName: "Dora Healthcare",
    images: [
      {
        url: "https://dora-healthcare.vercel.app/dora-icon.png", // caminho completo
        width: 1200,
        height: 630,
        alt: "Banner da Dora Healthcare",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dora Healthcare",
    description:
      "Conectando pacientes e profissionais de saúde com empatia e eficiência.",
    images: ["https://dora-healthcare.vercel.app/dora-icon.png"], // também no Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
