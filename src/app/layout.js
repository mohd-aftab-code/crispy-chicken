// src/layout.js
import './globals.css';
import Navbar from './components/header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tidio Chatbot Script */}
        <script src="//code.tidio.co/YOUR_UNIQUE_ID.js" async></script> {/* Replace with your unique ID */}

        {/* Link to Material Icons */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* Link to Google Fonts if needed */}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
