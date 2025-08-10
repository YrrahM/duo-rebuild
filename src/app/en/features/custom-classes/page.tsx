'use client';

import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import JsonLdBreadcrumbCustomClasses from '@/components/JsonLdBreadcrumbCustomClasses';

export default function CustomClassesPage() {
  return (
    <MainLayout>
      {/* ✅ Inject breadcrumb structured data */}
      <JsonLdBreadcrumbCustomClasses />

      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem',
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
          Personalized Classes
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
          Every student has different needs. I offer classes tailored to your profession, interests, current
          level, and specific goals. Whether you work in medicine, engineering, law, or are starting from
          scratch, we will plan an effective program together just for you.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link
            href="https://calendar.app.google/M3DnLoa1754P9qdHA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your free class with Harry Michael Ernest"
            title="Book a personalized English class with Harry Michael Ernest"
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
