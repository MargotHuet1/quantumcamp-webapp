import React, { Suspense } from "react";
import type { Metadata } from "next";
import "../globals.css";
import ClientLayout from "@/components/ClientLayout";
import '@/fontawesomeconfig';
import { GTMWrapper } from "@/components/cookies/GTMWrapper";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, defaultLocale } from '@/i18n';

export const metadata: Metadata = {
  title: "Quantum Camp",
  description: "Apprenez l'informatique quantique facilement.",
  icons: {
    icon: "/assets/quantum.png",
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const resolvedLocale = locales.includes(locale as any) ? locale : defaultLocale;
  const messages = await getMessages();

  return (
    <html lang={resolvedLocale}>
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        <NextIntlClientProvider locale={resolvedLocale} messages={messages}>
          <GTMWrapper />
          <ClientLayout>
            <Suspense fallback={<div>Chargement...</div>}>
              {children}
            </Suspense>
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
