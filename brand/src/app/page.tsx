import Image from "next/image"
import Link from "next/link"
import { Download, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function BrandAssets() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-3 sm:p-4">
      <Card className="w-full max-w-xl bg-[#f5f5f7] backdrop-blur-xl bg-opacity-90 border-0 shadow-2xl">
        <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
          {/* Header Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <a href="https://mallardlabs.xyz">
                <div className="relative h-6 sm:h-7 w-24 sm:w-28">
                  <Image
                    src="/mallardlabs_logo.svg"
                    alt="Mallard Labs"
                    width={140}
                    height={28}
                    className="h-6 sm:h-7 w-auto"
                    priority
                  />
                </div>
              </a>
              <Separator orientation="vertical" className="h-4 bg-black" />
              <span className="text-base sm:text-lg font-bold text-zinc-800">Brand Assets</span>
            </div>
            <Separator className="bg-black" />
          </div>

          {/* Content Section */}
          <CardContent className="space-y-6 p-0">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-negative-4 mb-4">
              Download the Mallard Labs Brand Kit
            </h2>
            
            <a 
              href="/MallardLabs_BrandKit.zip"
              download
            >
              <Button 
                variant="default" 
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white justify-between h-12 sm:h-14 text-sm sm:text-base rounded-xl shadow-lg transition-all duration-200 hover:scale-[0.99]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-700 rounded-lg flex items-center justify-center">
                    <Download className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-sm sm:text-base">MallardLabs_BrandKit.zip</span>
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-400">V1.1</span>
                  </div>
                </div>
                <span className="font-bold text-zinc-400 text-sm sm:text-base">49MB</span>
              </Button>
            </a>
          </CardContent>
        </div>
      </Card>
      
      <a 
        href="https://mallardlabs.xyz"
        className="mt-8 text-zinc-500 hover:text-white flex items-center gap-2 transition-all duration-200 hover:gap-3"
      >
        <Home className="h-4 w-4" />
        <span className="font-semibold">Return to homepage</span>
      </a>
    </div>
  )
}

