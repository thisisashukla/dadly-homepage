'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { trackWillingToPay, trackNotifyMe } from '@/lib/mixpanel'

type Platform = 'apple' | 'google'
type Step = 'platform' | 'email' | 'done'

const AppleLogo = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15.69 11.37c-.02-2.03 1.66-3.01 1.73-3.06-0.94-1.38-2.41-1.57-2.93-1.59-1.25-.13-2.44.74-3.07.74-.63 0-1.61-.72-2.65-.7-1.36.02-2.62.79-3.32 2.01-1.42 2.46-.36 6.1 1.02 8.1.68.98 1.48 2.08 2.53 2.04 1.02-.04 1.4-.66 2.63-.66 1.23 0 1.57.66 2.64.64 1.09-.02 1.78-.99 2.45-1.97.78-1.13 1.1-2.23 1.12-2.29-.02-.01-2.14-.82-2.15-3.26zM13.72 5.16c.56-.68.94-1.63.84-2.58-.81.03-1.79.54-2.37 1.21-.52.6-.98 1.57-.86 2.49.9.07 1.82-.46 2.39-1.12z" fill="currentColor"/>
  </svg>
)

const GooglePlayLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.114 1.037A1.25 1.25 0 0 0 1 2.25v15.5a1.25 1.25 0 0 0 1.114 1.213l8.636-8.963L2.114 1.037z" fill="#00C8FF"/>
    <path d="M14.396 7.073l-2.27-1.316-3.003 3.118 3.003 3.118 2.3-1.333a1.25 1.25 0 0 0-.03-3.587z" fill="#FFCE00"/>
    <path d="M12.126 5.757 2.114 1.037l8.636 8.963 1.376-4.243z" fill="#00E676"/>
    <path d="m2.114 18.963 10.012-4.72-1.376-4.243-8.636 8.963z" fill="#FF3D00"/>
  </svg>
)

const CheckCircle = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="var(--gold-bg)"/>
    <path d="M14 24l7 7 13-14" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const platformLabel: Record<Platform, string> = {
  apple: 'iOS',
  google: 'Android',
}

export default function WaitlistPage() {
  const [step, setStep] = useState<Step>('platform')
  const [platform, setPlatform] = useState<Platform | null>(null)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)

  const handlePlatformClick = (p: Platform) => {
    trackWillingToPay(p)
    setPlatform(p)
    setStep('email')
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError('Please enter a valid email address.')
      emailRef.current?.focus()
      return
    }
    setEmailError('')
    trackNotifyMe(trimmed, platform!)
    setStep('done')
  }

  return (
    <main className="waitlist-outer">
      <div className="waitlist-card">

        {/* ── Step 1: platform choice ── */}
        {step === 'platform' && (
          <>
            <div className="waitlist-eyebrow">Early interest</div>
            <h1 className="waitlist-heading">
              I&apos;d pay <em>$4.99/mo</em><br />for this.
            </h1>
            <p className="waitlist-sub">
              Dadly isn&apos;t in the App Store yet — but knowing which platform you&apos;re on helps us launch in the right place first. Pick yours and we&apos;ll let you know when it&apos;s live.
            </p>

            <div className="waitlist-btns">
              <button
                className="waitlist-btn waitlist-btn-apple"
                onClick={() => handlePlatformClick('apple')}
              >
                <AppleLogo />
                Yes — I&apos;d pay for the <strong>iOS</strong> app
              </button>

              <button
                className="waitlist-btn waitlist-btn-google"
                onClick={() => handlePlatformClick('google')}
              >
                <GooglePlayLogo />
                Yes — I&apos;d pay for the <strong>Android</strong> app
              </button>
            </div>

            <p className="waitlist-note">No account needed. Just a tap.</p>
          </>
        )}

        {/* ── Step 2: email capture ── */}
        {step === 'email' && (
          <>
            <div className="waitlist-eyebrow">
              {platform === 'apple' ? <><AppleLogo /> iOS</> : <><GooglePlayLogo /> Android</>}
            </div>
            <h2 className="waitlist-heading" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>
              Want a heads-up when<br />Dadly goes live?
            </h2>
            <p className="waitlist-sub">
              We&apos;ll send you one email when Dadly lands on the {platformLabel[platform!]} store. Nothing else.
            </p>

            <form className="waitlist-email-form" onSubmit={handleEmailSubmit} noValidate>
              <div className="waitlist-email-field">
                <input
                  ref={emailRef}
                  type="email"
                  className={`waitlist-email-input${emailError ? ' waitlist-email-input-error' : ''}`}
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
                  autoFocus
                  autoComplete="email"
                  inputMode="email"
                />
                {emailError && <p className="waitlist-email-error">{emailError}</p>}
              </div>
              <button type="submit" className="waitlist-btn waitlist-btn-apple" style={{ marginTop: '4px' }}>
                Notify me when the app is out
              </button>
            </form>

            <button
              className="waitlist-back-btn"
              onClick={() => { setStep('platform'); setPlatform(null) }}
            >
              ← Change platform
            </button>
          </>
        )}

        {/* ── Step 3: confirmation ── */}
        {step === 'done' && (
          <div className="waitlist-thanks">
            <CheckCircle />
            <h2 className="waitlist-thanks-heading">You&apos;re on the list.</h2>
            <p className="waitlist-thanks-sub">
              We&apos;ll send one email to <strong>{email.trim()}</strong> the moment Dadly is live on the {platformLabel[platform!]} store. That&apos;s it — no newsletter, no spam.
            </p>
            <Link href="/" className="waitlist-back">
              ← Back to Dadly
            </Link>
          </div>
        )}

      </div>
    </main>
  )
}
