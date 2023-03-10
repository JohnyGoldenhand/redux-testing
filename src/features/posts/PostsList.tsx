import { useSelector } from "react-redux";
import { SelectPosts } from "./postsSlice";
import { PostAuthor } from "./postAuthor";

export const PostsList = () => {
  const posts = useSelector(SelectPosts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId!} />
    </article>
  ));

  return (
    <div>
      <h3>Posts</h3>
      {renderPosts}
    </div>
  );
};
