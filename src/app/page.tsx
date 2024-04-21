import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/6d12d8b1-336b-48fb-8a4b-d3762050f1e7-1x9aim.jpeg",
  "https://utfs.io/f/23fa48ff-65a7-4dcc-bea0-00ce6a7673a0-1x9ahw.jpeg",
  "https://utfs.io/f/71d0f89f-184b-44d2-903a-12bea83da510-1x9ai0.jpeg",
  "https://utfs.io/f/32e4a8fa-f8a0-4e6d-a953-96c22b584c51-1x9ahy.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
