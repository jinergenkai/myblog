import { fetchPageBlocks, fetchPageBySlug, fetchPages, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";

export default async function Page() {
  const post = await fetchPages();
  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin());
  renderer.use(bookmarkPlugin());

  const html = await renderer.render(...blocks);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}