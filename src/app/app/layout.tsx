import Link from "next/link";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>hi dear</h1>
      {children}
    </>
  );
}
