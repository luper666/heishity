import { getPostData, getSortedPostsData } from '@/lib/posts'; // <-- 修改：多引入一个函数
import { PageHeader } from '@/components/PageHeader';
import { Calendar } from 'lucide-react';

type Params = {
  id: string
}

// V-- 这是新增的核心函数 --V
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map(post => ({
    id: post.id,
  }));
}
// ^-- 新增函数结束 --^

export default async function Post({ params }: { params: Params }) {
  const postData = await getPostData(params.id);

  return (
    <article>
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
