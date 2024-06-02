import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const PopupContent = dynamic(() => import('../components/PopupContent'), {
  ssr: false,
})

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Head>
        <title>Next.js Popup</title>
      </Head>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/backimg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: showPopup ? 'blur(5px)' : 'none', 
        }}
      >
        
          <div className={`min-h-screen flex items-center justify-center`}>
            <button
              className="px-4 py-2 bg-transparent text-white border border-white rounded-lg btn-animated font-bold"
              onClick={() => setShowPopup(true)}
            >
              Show Popup
            </button>
            <Link href="/effect" passHref>
              <button className="px-4 py-2 bg-transparent text-white border border-white rounded-lg ml-4 btn-animated font-bold">
                Go to Effect Page
              </button>
            </Link>
          </div>
       
      </div>

      {showPopup && <PopupContent onClose={() => setShowPopup(false)} />}
    </>
  )
}
