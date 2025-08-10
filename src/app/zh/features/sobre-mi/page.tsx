import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata = {
  title: '关于我 | businessenglish.vip',
  description: '了解 Harry Michael Ernest 的教学经验、学术背景与对专业英语教学的热情。',
  openGraph: {
    title: '关于我 | businessenglish.vip',
    description: '拥有 40+ 年教学经验的英语母语教师，专注商务英语及多行业定制课程。',
    url: 'https://businessenglish.vip/zh/features/sobre-mi',
    siteName: 'businessenglish.vip',
    locale: 'zh_CN',
    type: 'profile',
    images: [{ url: 'https://businessenglish.vip/og/prof.png', width: 1200, height: 630, alt: '讲师 Harry Michael Ernest' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我 | businessenglish.vip',
    description: '40+ 年国际教学经验，帮助各行业专业人士自信使用英语。',
    images: ['https://businessenglish.vip/og/prof.png'],
  },
};

export default function SobreMiZh() {
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
          <h1 className="text-3xl font-bold mb-6">关于我</h1>

          {/* 顶部圆形头像（与 ES 版一致） */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/sobre-mi.png"
              alt="讲师 Harry Michael Ernest"
              width={180}
              height={180}
              className="rounded-full shadow-lg"
              priority
            />
          </div>

          <p className="text-gray-700 mb-12">
            我是 <span className="font-semibold">Harry Michael Ernest</span>，英语母语教师，
            拥有 <span className="font-semibold">40+ 年</span> 国际教学经验，专注为各行业专业人士提供高效、实用的英语培训。
          </p>

          {/* 角色图片网格 —— 使用固定尺寸避免布局跳动 */}
          <div className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center mb-12">
            <Image
              src="/logos/student.png"
              alt="学生学员"
              width={120}
              height={120}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="/logos/awacs.png"
              alt="航空与防务专业人士"
              width={120}
              height={120}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="/logos/doctor.png"
              alt="医生与医疗专业人士"
              width={120}
              height={120}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="/logos/businessman.png"
              alt="商务人士"
              width={120}
              height={120}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="/logos/engineer.png"
              alt="工程师与技术人员"
              width={120}
              height={120}
              className="rounded-2xl shadow-md object-cover"
            />
            <Image
              src="/logos/child.png"
              alt="少儿学习者"
              width={120}
              height={120}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* 简短分块说明（保持与 ES 一致的结构感） */}
          <div className="space-y-8 text-gray-800 text-left md:text-center">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-center">教学理念</h2>
              <p>
                将真实工作场景与语言心理学结合，强调互动、即时反馈与可落地的表达框架，
                让你在会议、演示、邮件与谈判中快速上手。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-center">资历与认证</h2>
              <p>
                • 教育硕士（TEFL & 教育心理学）<br />
                • CELTA 剑桥英语教师资格<br />
                • 跨行业专业英语培训经验（商务、医学、工程、法律等）
              </p>
            </section>
          </div>

          {/* CTA container —— 独立容器，避免影响主布局 */}
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

