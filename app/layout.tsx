import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Fuse Bull — The Bull of Fuse', description: 'The bull has entered the Fuse. A concept site for the Fuse Bull mascot.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
