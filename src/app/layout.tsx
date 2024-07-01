import {ReactNode} from "react";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: 'lightblue',
          padding: '1rem'
        }}>
            <p>
              Header
            </p>
        </header>
      {children}
        <footer>
            <p>
              Footer
            </p>
        </footer>
      </body>
    </html>
  )
}