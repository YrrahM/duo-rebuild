import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: '学员评价 | businessenglish.vip',
  description:
    '来自不同行业学员的真实反馈，展示在会议、演示、邮件与谈判中的实际提升。',
  openGraph: {
    title: '学员评价 | businessenglish.vip',
    description:
      '学员对课程效果的真实评价：自信表达、专业写作与跨文化沟通能力显著提升。',
    url: 'https://businessenglish.vip/zh/features/testimonias',
    siteName: 'businessenglish.vip',
    locale: 'zh_CN',
    type: 'article',
    images: [
      {
        url: 'https://businessenglish.vip/og/homepage.png',
        width: 1200,
        height: 630,
        alt: '学员评价',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '学员评价 | businessenglish.vip',
    description:
      '真实反馈展示课程带来的可见改变与职业场景中的实战成果。',
    images: ['https://businessenglish.vip/og/homepage.png'],
  },
};

export default function TestimonialsZh() {
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
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-10">学员评价</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Testimonial 1 */}
            <article className="rounded-2xl bg-white/70 shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                {/* 使用固定尺寸避免图片“占版面” */}
                <Image
                  src="/logos/quezada.jpg"
                  alt="Alejandro Javier Quezada Ramírez（公司标识）"
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold">Alejandro Javier Quezada Ramírez</p>
                  <p className="text-sm text-gray-600">工程与项目管理</p>
                </div>
              </div>
              <p className="text-gray-800">
                “课程非常实用。我们把真实会议和演示内容带入课堂，逐步搭建表达框架并反复演练。
                现在我能在英语会议中更自然地陈述方案并回答问题，邮件写作也更专业、清晰。”
              </p>
            </article>

            {/* Testimonial 2 */}
            <article className="rounded-2xl bg-white/70 shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                {/* 若没有公司 logo，也可使用占位图或头像路径 */}
                <Image
                  src="/logos/businessman.png"
                  alt="Banjamin Porras（行业标识）"
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold">Banjamin Porras</p>
                  <p className="text-sm text-gray-600">商务与运营管理</p>
                </div>
              </div>
              <p className="text-gray-800">
                “课程重点直击工作场景：谈判、汇报和邮件模板都能直接复用。
                我在跨部门会议上的表达更自信，也更有效率。”
              </p>
            </article>
          </div>

          {/* CTA container */}
          <div className="mt-12 flex items-center justify-center gap-4">
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
