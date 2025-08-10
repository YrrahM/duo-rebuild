import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: '个性化课程 | businessenglish.vip',
  description:
    '为您的职业目标量身定制的英语课程：医学、工程、法务、酒店、航空、IT 等多行业场景练习与表达框架。',
  openGraph: {
    title: '个性化课程 | businessenglish.vip',
    description:
      '根据行业与目标定制内容：术语、场景对话、邮件与报告模板、会议与演示训练等。',
    url: 'https://businessenglish.vip/zh/features/clases-personalizadas',
    siteName: 'businessenglish.vip',
    locale: 'zh_CN',
    type: 'article',
    images: [
      {
        url: 'https://businessenglish.vip/og/homepage.png',
        width: 1200,
        height: 630,
        alt: '个性化课程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '个性化课程 | businessenglish.vip',
    description:
      '以结果为导向的定制化英语课程：真实任务、可复用模板与行业标准表达。',
    images: ['https://businessenglish.vip/og/homepage.png'],
  },
};

export default function PersonalizedClassesZh() {
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
          <h1 className="text-3xl font-bold mb-4">个性化课程</h1>
          <p className="text-gray-700 mb-8">
            课程围绕你的<span className="font-semibold">职位、行业与目标</span>精准定制，
            通过真实任务训练与可复用模板，帮助你在最短时间内获得可见成果。
          </p>

          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-xl font-semibold mb-2">常见定制方向</h2>
              <p>
                • 医学与护理：病史采集、交接班、会诊沟通、英文病历与报告
                <br />
                • 工程与技术：需求澄清、技术说明、规范解读、测试与验收
                <br />
                • 法务与合规：合同条款沟通、意见备忘录、风险陈述
                <br />
                • 酒店与旅游：接待、投诉处理、服务话术与升级方案
                <br />
                • 商务与销售：方案陈述、报价谈判、跟进与客户成功
                <br />
                • IT / 软件：产品演示、工单与发布说明、跨团队协作
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">课程结构</h2>
              <p>
                1) 目标与场景访谈 → 2) 术语与表达框架 → 3) 场景演练与即时反馈 →
                4) 模板固化（邮件/汇报/会议纪要）→ 5) 持续优化与复盘。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">你将获得</h2>
              <p>
                • 贴合岗位的高频表达清单与句型库
                <br />
                • 可直接复用的邮件/报告/演示模板
                <br />
                • 可落地的会议与谈判策略
                <br />
                • 发音与流利度的针对性提升建议
              </p>
            </section>
          </div>

          {/* CTA container (consistent pattern) */}
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
