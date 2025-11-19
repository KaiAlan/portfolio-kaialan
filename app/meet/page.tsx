"use client";

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const meetCode = process.env.NEXT_PUBLIC_GOOGLE_MEET_CODE ?? ''

export default function MeetRedirect() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  // console.log(meetCode)

  useEffect(() => {
    // Set up interval to update countdown every second
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          router.push(`https://meet.google.com/${meetCode}`)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [router])

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-start min-h-screen p-5">
      <h1 className="text-2xl sm:text-4xl text-center font-semibold font-space-grotesk mt-12 mb-4">You are being redirected to Google Meet</h1>
      <p className="mb-4 text-xs text-center">
        If the redirect does not happen automatically,{' '}
        <Link
          className="text-blue-600 underline"
          href={`https://meet.google.com/${meetCode}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </Link>
        .
      </p>
      <p className="text-gray-600 text-xs">Redirecting in {countdown} seconds...</p>
    </div>
  )
}