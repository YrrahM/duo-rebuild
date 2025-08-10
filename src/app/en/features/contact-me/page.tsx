'use client';

import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function ContactMePage() {
  return (
    <MainLayout>
      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
          }}
        >
          Contact Me
        </h1>

        <p
          style={{
            maxWidth: '640px',
            margin: '0 auto 2rem auto',
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75rem',
          }}
        >
          Have questions? Want to book a class? Send me a message and I’ll get back to you as soon
          as possible.
        </p>

        {/* Form container */}
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'left',
          }}
        >
          <form action="/api/contact" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #d1d5db',
                }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #d1d5db',
                }}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #d1d5db',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#2563eb',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CTA buttons */}
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link
            href="https://calendar.app.google/M3DnLoa1754P9qdHA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Book a Free Class
          </Link>

          <Link
            href="/en/features"
            style={{
              display: 'inline-block',
              color: '#2563eb',
              fontWeight: 'bold',
              border: '2px solid #2563eb',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#2563eb';
            }}
          >
            ← Back
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
