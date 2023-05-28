const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default async function Contact() {
  const posts = await getPostsData();
  return (
    <main>
      <h4>Contact page</h4>
      <ol>
        {posts.map((post: any) => (
          <li>{post.title}</li>
        ))}
      </ol>
    </main>
  );
}
