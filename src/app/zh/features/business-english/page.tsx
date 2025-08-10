import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: '商务英语 | businessenglish.vip',
  description:
    '面向专业人士的商务英语：会议沟通、演示汇报、邮件写作与谈判技巧，助你在国际职场中自信表达。',
  openGraph: {
    title: '商务英语 | businessenglish.vip',
    description:
      '会议沟通、演示汇报、邮件写作与谈判技巧，助你在国际职场中自信表达。',
    url: 'https://businessenglish.vip/zh/features/business-english',
    siteName: 'businessenglish.vip',
    locale: 'zh_CN',
    type: 'article',
    images: [
      {
        url: 'https://businessenglish.vip/og/homepage.png',
        width: 1200,
        height: 630,
        alt: '商务英语课程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '商务英语 | businessenglish.vip',
    description:
      '实战导向的商务英语：会议、演示、邮件与谈判能力全面提升。',
    images: ['https://businessenglish.vip/og/homepage.png'],
  },
};

export default function BusinessEnglishZh() {
  return (
    <>
      <main
        className="min-h-screen w-full text-gray-900"
        style={{
          background:
            'linear-gradient(to bottom, rgba(221,233,255,0.9) 0%, rgba(255,255,255,1) 60%, rgba(221,233,255,0.9) 100%)',
          paddingBottom: '220px', // keep footer clear
          textAlign: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">商务英语</h1>
          <p className="text-gray-700 mb-8">
            专为职场专业人士设计，聚焦你每天真正会用到的英语：开会、演示、邮件、谈判与跨文化沟通。
          </p>

          <div className="space-y-6 text-gray-800">
            <section>
              <h2 className="text-xl font-semibold mb-2">你将收获</h2>
              <p>
                • 自然清晰的会议表达与问答
                <br />
                • 结构化的演示汇报（开场、过渡、结尾）
                <br />
                • 专业而得体的邮件写作模板
                <br />
                • 谈判与协商语言（提出条件、让步与达成一致）
                <br />
                • 跨文化沟通要点与常见误区
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">适合人群</h2>
              <p>
                商务、工程、医学、法务、酒店与技术岗位等需要在工作中使用英语进行沟通、汇报或对外交流的专业人士。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">课程形式</h2>
              <p>
                线上一对一或小组课；基于你的行业与目标定制内容，提供可复用的表达框架与真实场景模拟。
              </p>
            </section>
          </div>

          {/* CTA container (consistent with ES pattern) */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/zh/features/contactame"
              className="px-6 py-3 rounded-2xl font-semibold shadow-md border border-blue-600 bg-blue-600 text-white hover:opacity-90"
            >
              预约免费体验课
            </Link>
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
