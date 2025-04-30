/*shared layout file*/

import "./globals.css";
import NavBar from "@/components/navBar";

export const metadata = {
  title: "Slotion",
  description: "App description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar /> {/* This stays fixed across all pages */}
      </body>
    </html>
  );
}
