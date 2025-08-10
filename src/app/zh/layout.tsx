// src/app/zh/layout.tsx
export const metadata = {
  title: "Business English 专业课程",
  description: "为讲西班牙语的专业人士提供个性化英语培训。",
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  // No <html> or <body> here — root layout already provides them
  return <>{children}</>;
}
