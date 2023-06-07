import { fetchPageBlocks, fetchPage, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import hljs from "@notion-render/hljs-plugin";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Page() {
    const post = await fetchPage(1);
    if (!post) notFound();

    const blocks = await fetchPageBlocks(post.id);

    const renderer = new NotionRenderer({
        client: notion,
    });

    renderer.use(hljsPlugin());

    const html = await renderer.render(...blocks);

    return (
        <div>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
            <script>hljs.initHighlightingOnLoad();</script> */}
            <div
                className="notion-render"
                dangerouslySetInnerHTML={{ __html: html }}
            ></div>
        </div>
    );
}
