import {Nunito} from "next/font/google";
import "./globals.sass";

const nunito = Nunito({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={nunito.className}>
    {children}
    </body>
    </html>
  );
}
