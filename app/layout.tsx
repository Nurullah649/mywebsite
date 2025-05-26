import type React from "react"
import ClientLayout from "./ClientLayout"
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata = {
  title: "Nurullah Kurnaz | Kişisel Portfolyo",
  description: "Nurullah Kurnaz - Konya Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisi. Yapay Zeka ve Robotik alanındaki projelerim ve deneyimlerim.",
    generator: 'Nurullah Kurnaz'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}<SpeedInsights /></ClientLayout>
}


import './globals.css'