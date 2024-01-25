export type Post = {
  id: number;
  title: string;
  imageUrl: string;
  comment: Comment[];
};

export type Comment = {
  id: number;
  content: string;
  postId: number;
};
