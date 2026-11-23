import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/im-fell-english/400.css";
import "@fontsource/im-fell-english/400-italic.css";
import "@fontsource/spectral/300.css";
import "@fontsource/spectral/300-italic.css";
import "@fontsource/spectral/400.css";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./globals.css";

// The site's public address. Vercel fills this in on every build: your
// .vercel.app address for now, and your own domain once you add one.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const SITE_URL = productionHost ? `https://${productionHost}` : "http://localhost:3000";

const DESCRIPTION =
  "Aster is an AI tarot journal. Ask a question, draw from the Dr. Moorne deck, and reflect on a reading written back to you.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Aster · Ask. Draw. Reflect.",
  description: DESCRIPTION,
  // Every deployment (previews too) points search engines to the main address.
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aster · Ask. Draw. Reflect.",
    description: DESCRIPTION,
    url: "/",
    siteName: "Aster",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}