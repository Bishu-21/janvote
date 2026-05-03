import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoteFlow | 2026 Election Results Tracker",
  description: "Real-time results, constituency analysis, and civic engagement for the 2026 Assembly Elections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Work+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* Google Analytics Integration */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VOTEFLOW"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VOTEFLOW');
          `
        }} />
        {/* Structured Data for SEO/AEO/GEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Election",
            "name": "2026 Federation Assembly Elections",
            "electionDate": "2026-05-03",
            "areaServed": {
              "@type": "Country",
              "name": "The Federation"
            },
            "description": "Live results and tracker for the 2026 Assembly Elections across North, South, East, and West Provinces.",
            "mainEntityOfPage": "https://voteflow.gov.in"
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the results of the 2026 Assembly Elections?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As of May 3, 2026, the counting is in its final phase. The Apple Party is leading with a clear mandate in the North Province."
                }
              },
              {
                "@type": "Question",
                "name": "How can I find my polling booth?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Users can use the BoothFinder tool on VoteFlow to locate their specific polling station using GPS or by selecting their province."
                }
              }
            ]
          })
        }} />
      </head>
      <body className="min-h-full flex flex-col font-work-sans bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
