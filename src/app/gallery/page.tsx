// "use client";
import {
    fetchPageBlocks,
    fetchPages,
    notion,
} from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
// import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default async function Gallery() {
    const post = await fetchPages();
    if (!post) notFound();

    const blocks = await fetchPageBlocks(post.id);
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
}
