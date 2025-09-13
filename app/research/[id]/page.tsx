import { getPostData } from '@/lib/posts';
import { PageHeader } from '@/components/PageHeader'; // 确保这一行存在
import { Calendar } from 'lucide-react';

type Params = {
  id: string
}

export default async function Post({ params }: { params: Params }) {
  const postData = await getPostData(params.id);

  return (
    <article>
      {/* 这里是之前出错的地方，现在已修复 */}
      <PageHeader title={postData.title} subtitle="" />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center text-text-secondary mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={postData.date}>{postData.date}</time>
          </div>
          <div
            className="prose prose-invert prose-lg max-w-none prose-p:text-text-secondary prose-headings:text-text-main prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </div>
    </article>
  );
}