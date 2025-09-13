import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { PageHeader } from '@/components/PageHeader';

export default function ResearchPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <PageHeader
        title="研究洞察"
        subtitle="我们坚信持续的深度研究是创造卓越回报的基石，在此分享对市场的洞察与前沿技术的探索"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {allPostsData.map(({ id, date, title, summary }) => (
              <Link href={`/research/${id}`} key={id} className="block p-8 bg-surface rounded-lg border border-border hover:border-primary transition-colors">
                <p className="text-sm text-text-secondary mb-2">{date}</p>
                <h2 className="text-2xl font-semibold text-text-main mb-3">{title}</h2>
                <p className="text-text-secondary text-lg">{summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}