import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Skills Explorer',
  description: 'Explore and develop your professional skills',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="maze-universal-snippet" strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              (function (m, a, z, e) {
                var s, t;
                try {
                  t = m.sessionStorage.getItem('maze-us');
                } catch (err) {}
                if (!t) {
                  t = new Date().getTime();
                  try {
                    m.sessionStorage.setItem('maze-us', t);
                  } catch (err) {}
                }
                s = a.createElement('script');
                s.src = z + '?apiKey=' + e;
                s.async = true;
                a.getElementsByTagName('head')[0].appendChild(s);
                m.mazeUniversalSnippetApiKey = e;
              })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '1278db49-a166-4851-86ef-08730ca33aac');
            `
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
