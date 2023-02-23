import "./globals.css";
import Providers from "./Providers"
import Header from "../components/Header";
import Navbar from "../components/Navbar"


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
            <Providers >
                <Header />
                <Navbar />
                {children}
                </Providers>
            </body>
        </html>
    );
}
