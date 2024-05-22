import type { Metadata } from "next";

import { manrope, inter, poppins } from "@/fonts";

import "../styles/globals.scss";
import { Header } from "./ui";
import { ProfileProvider } from "@/context";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Your Pet ",
  description: "Your pet app - applications about pets",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      >
        <ProfileProvider>
          <Header user={null} />
          {children}
        </ProfileProvider>
      </body>
    </html>
  );
}
