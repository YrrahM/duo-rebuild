import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: '课程特色 | businessenglish.vip',
  description: '个性化英语课程：商务英语、定制化课程、讲师简介、学员评价与联系信息。',
  openGraph: {
    title: '课程特色 | businessenglish.vip',
    description: '个性化英语课程：商务英语、定制化课程、讲师简介、学员评价与联系信息。',
    url: 'https://businessenglish.vip/zh/features',
    siteName: 'businessenglish.vip',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: 'https://businessenglish.vip/og/homepage.png', width: 1200, height: 630, alt: '课程特色' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '课程特色 | businessenglish.vip',
    description: '了解商务英语、定制化课程与学员评价，并预约免费体验课。',
    images: ['https://businessenglish.vip/og/homepage.png'],
  },
};

export default function FeaturesZh() {
  return (
    <>
      <main
        className="min-h-screen w-full text-gray-900"
        style={{
          background:
            'linear-gradient(to bottom, rgba(221,233,255,0.9) 0%, rgba(255,255,255,1) 60%, rgba(221,233,255,0.9) 100%)',
          paddingBottom: '220px',
          textAlign: 'center', // ✅ hard force center
        }}
      >
        <div
          className="max-w-3xl mx-auto px-6 py-16 text-center"
          style={{ textAlign: 'center' }} // ✅ hard force center
        >
          <h1 className="text-3xl font-bold mb-8" style={{ textAlign: 'center' }}>
            我提供什么？
          </h1>

          {/* 商务英语 */}
          <p className="mb-2" style={{ textAlign: 'center' }}>
            <Link href="/zh/features/business-english" className="underline font-semibold text-blue-700">
              商务英语
            </Link>
          </p>
          <p className="mb-6 text-gray-700" style={{ textAlign: 'center' }}>
            学习会议沟通、演示汇报与专业邮件写作等实用技能。
          </p>

          {/* 定制化课程 */}
          <p className="mb-2" style={{ textAlign: 'center' }}>
            <Link href="/zh/features/clases-personalizadas" className="underline font-semibold text-blue-700">
              多样化的个性化课程
            </Link>
          </p>
          <p className="mb-6 text-gray-700" style={{ textAlign: 'center' }}>
            根据您的职业目标量身设计：医学、工程、法务、酒店等领域。
          </p>

          {/* 关于我 */}
          <p className="mb-2" style={{ textAlign: 'center' }}>
            <Link href="/zh/features/sobre-mi" className="underline font-semibold text-blue-700">
              关于我
            </Link>
          </p>
          <p className="mb-6 text-gray-700" style={{ textAlign: 'center' }}>
            了解我的教学经验、学术背景与对专业英语教学的热情。
          </p>

          {/* 学员评价 */}
          <p className="mb-2" style={{ textAlign: 'center' }}>
            <Link href="/zh/features/testimonias" className="underline font-semibold text-blue-700">
              学员评价
            </Link>
          </p>
          <p className="mb-6 text-gray-700" style={{ textAlign: 'center' }}>
            听听学员们如何评价课程效果与工作中的实际提升。
          </p>

          {/* 联系我 */}
          <p className="mb-2" style={{ textAlign: 'center' }}>
            <Link href="/zh/features/contactame" className="underline font-semibold text-blue-700">
              联系我
            </Link>
          </p>
          <p className="mb-8 text-gray-700" style={{ textAlign: 'center' }}>
            准备好提升你的专业英语了吗？发送消息，我们开始吧。
          </p>

          {/* CTA container */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/zh/features/contactame"
              className="px-6 py-3 rounded-2xl font-semibold shadow-md border border-blue-600 bg-blue-600 text-white hover:opacity-90"
            >
              预约免费体验课
            </Link>
            <Link
              href="/zh"
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
