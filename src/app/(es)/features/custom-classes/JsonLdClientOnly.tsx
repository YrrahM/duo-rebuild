'use client';

import JsonLdCustomClasses from '@/components/JsonLdCustomClasses';
import JsonLdBreadcrumbCustomClasses from '@/components/JsonLdBreadcrumbCustomClasses';

export default function JsonLdClientOnly() {
  return (
    <>
      <JsonLdBreadcrumbCustomClasses />
      <JsonLdCustomClasses />
    </>
  );
}
