import { Poppins } from "next/font/google";
import './style.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
