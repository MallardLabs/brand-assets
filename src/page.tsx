'use client'

import Image from "next/image"
import Link from "next/link"
import { Download, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: '--font-inter',
})

export default function BrandAssets() {
  return (
    <div className={`${inter.variable} min-h-screen bg-black flex flex-col items-center justify-center p-4`}>
      <Card className="w-full max-w-xl bg-[#f5f5f7] backdrop-blur-xl bg-opacity-90 border-0 shadow-2xl">
        <div className="p-8 space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-24">
                <Image
                  src="/mallardlabs_logo.svg"
                  alt="Mallard Labs"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                  priority
                />
              </div>
              <Separator orientation="vertical" className="h-4 bg-black" />
              <span className="text-lg font-extrabold text-zinc-900">Brand Assets</span>
            </div>
            <Separator className="bg-black" />
          </div>

          {/* Content Section */}
          <CardContent className="space-y-6 p-0">
            <h2 className="text-2xl font-extrabold text-zinc-900">
              Download the Mallard Labs Brand kit below
            </h2>
            
            <Button 
              variant="default" 
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white justify-between h-14 text-base rounded-xl shadow-lg transition-all duration-200 hover:scale-[0.99]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center">
                  <Download className="h-4 w-4" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-extrabold text-zinc-900">MallardLabs_BrandKit.zip</span>
                  <span className="text-xs text-zinc-400">Version 1.0</span>
                </div>
              </div>
              <span className="text-zinc-400">12MB</span>
            </Button>
          </CardContent>
        </div>
      </Card>
      
      <Link 
        href="/"
        className="mt-8 text-zinc-500 hover:text-white flex items-center gap-2 transition-all duration-200 hover:gap-3"
      >
        <Home className="h-4 w-4" />
        <span className="font-medium">Return to homepage</span>
      </Link>
    </div>
  )
}

