import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: '联系我 | businessenglish.vip',
  description:
    '预约免费体验课或咨询课程详情：通过电子邮件或电话联系 Harry Michael Ernest。',
  openGraph: {
    title: '联系我 | businessenglish.vip',
    description:
      '预约免费体验课，了解商务英语与个性化课程的详情与时间安排。',
    url: 'https://businessenglish.vip/zh/features/contactame',
    siteName: 'businessenglish.vip',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: 'https://businessenglish.vip/og/contactame.png',
        width: 1200,
        height: 630,
        alt: '联系页面',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '联系我 | businessenglish.vip',
    description:
      '通过邮件或电话联系，预约免费体验课与课程咨询。',
    images: ['https://businessenglish.vip/og/contactame.png'],
  },
};

export default function ContactameZh() {
  return (
    <>
      <main
        className="min-h-screen w-full text-gray-900"
        style={{
          background:
            'linear-gradient(to bottom, rgba(221,233,255,0.9) 0%, rgba(255,255,255,1) 60%, rgba(221,233,255,0.9) 100%)',
          paddingBottom: '220px',
          textAlign: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">联系我</h1>
          <p className="text-gray-700 mb-8">
            想了解课程或预约 <span className="font-semibold">免费体验课</span>？欢迎联系我：
          </p>

          <div className="mx-auto inline-block text-left bg-white/80 rounded-2xl shadow-md px-6 py-6">
            <p className="mb-3">
              <span className="font-semibold">电子邮件：</span>
              <a
                href="mailto:harry@businessenglish.vip"
                className="text-blue-700 underline"
              >
                harry@businessenglish.vip
              </a>
            </p>
            <p className="mb-1">
              <span className="font-semibold">电话 / WhatsApp：</span>
              <a
                href="tel:+529992286047"
                className="text-blue-700 underline"
              >
                +52 999 228 6047
              </a>
            </p>
            <p className="text-sm text-gray-600">
              请简单说明您的职业背景与学习目标，我会尽快回复并安排时间。
            </p>
          </div>

          {/* CTA container */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="mailto:harry@businessenglish.vip?subject=%E9%A2%84%E7%BA%A6%E5%85%8D%E8%B4%B9%E4%BD%93%E9%AA%8C%E8%AF%BE&body=%E6%88%91%E6%9C%9B%E9%A1%BE%E9%A2%84%E7%BA%A6%E5%85%8D%E8%B4%B9%E4%BD%93%E9%AA%8C%E8%AF%BE%E3%80%82%E8%81%8C%E4%B8%9A%EF%BC%9A_____%0A%E7%9B%AE%E6%A0%87%EF%BC%9A_____%0A%E5%8F%AF%E7%94%A8%E6%97%B6%E9%97%B4%EF%BC%9A_____%0A"
              className="px-6 py-3 rounded-2xl font-semibold shadow-md border border-blue-600 bg-blue-600 text-white hover:opacity-90"
            >
              预约免费体验课（邮件）
            </a>
            <Link
              href="/zh/features"
              className="px-5 py-3 rounded-2xl font-semibold shadow-md border border-blue-600 text-blue-700 hover:bg-blue-50"
            >
              ← 返回
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
