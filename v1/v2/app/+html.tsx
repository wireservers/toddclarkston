import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

const GA_ID = "G-D22Z6E71YP";
const SITE_URL = "https://www.toddclarkston.com";
const TITLE = "Todd Clarkston — Lead Software Architect";
const DESCRIPTION =
  "Lead Software Architect with 20+ years delivering secure .NET, React Native, and Azure platforms for healthcare, financial services, and SaaS.";

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={DESCRIPTION} />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/TC-44.jpg`} />
        <meta name="twitter:card" content="summary" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Todd Clarkston",
              jobTitle: "Lead Software Architect",
              url: SITE_URL,
              email: "mailto:todd@toddclarkston.com",
              address: { "@type": "PostalAddress", addressLocality: "Centennial", addressRegion: "CO", addressCountry: "US" },
              sameAs: ["https://www.linkedin.com/in/toddclarkston/", "https://github.com/tclarkston"],
            }),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
        />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />

        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
