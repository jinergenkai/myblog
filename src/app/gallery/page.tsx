import {
    fetchDatabase,
    fetchPageBlocks,
    fetchPages,
    notion,
} from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default async function Gallery() {
    const post = await fetchPages();
    if (!post) notFound();

    const blocks = await fetchPageBlocks(post.id);
    console.log(blocks);

    const renderer = new NotionRenderer({
        client: notion,
    });

    //   renderer.use(hljsPlugin());
    //   renderer.use(bookmarkPlugin());

    const html = await renderer.render(...blocks);
    console.log("````````````````````````````````````");
    console.log(blocks);
    // const img = blocks[1].image.file.url;
        return (
        <div className={styles.col5}>
            {blocks.map((block) => {
                if (block.type == "image" && block.image.type == "file")
                    return (
                        <div key={block.id}>
                            <Image
                                className=" rounded-2xl"
                                src={block.image.file.url}
                                width={1000}
                                height={1000}
                                alt="Picture"
                            />
                        </div>
                    );
            })}
        </div>
    );
    // return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
