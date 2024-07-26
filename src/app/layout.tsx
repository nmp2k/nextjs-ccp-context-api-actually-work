import clsx from "clsx";
import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <html lang="en">
      <head>
        <title>next-intl example</title>
      </head>
      <body className={clsx("flex min-h-[100vh] flex-col bg-slate-100")}>
        <h1> home page layout</h1>
        {children}
      </body>
    </html>
  );
}
