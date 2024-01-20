import React from "react";
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>navbar</nav>
      <div>{children}</div>
      <footer>foooter</footer>
    </>
  );
}
