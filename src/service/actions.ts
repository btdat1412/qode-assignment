"use server";
import { revalidatePath } from "next/cache";
import { db } from "../lib/db";

export async function addPost(postData: any) {
  try {
    const post = await db.post.create({
      data: {
        title: postData.title,
        imageUrl: postData.imageUrl,
      },
    });
    revalidatePath("/");
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating post");
  }
}

export async function getPosts() {
  try {
    const posts = await db.post.findMany({
      include: {
        comment: true,
      },
    });
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting posts");
  }
}

export async function addComment(commentData: any) {
  try {
    const comment = await db.comment.create({
      data: {
        content: commentData.content,
        postId: commentData.postId,
      },
    });
    revalidatePath("/");
    return comment;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating comment");
  }
}
