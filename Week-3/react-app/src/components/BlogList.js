import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "Designing Clean User Interfaces",
      description: "Principles of minimal UI design, spacing, and visual hierarchy for modern web apps.",
      author: "Creative Desk",
      date: "Dec 2025",
    },
    {
      id: 2,
      title: "Getting Started with React",
      description: "A beginner-friendly introduction to React components, props, and rendering lists.",
      author: "Tech Editorial",
      date: "Dec 2025",
    },
    {
      id: 3,
      title: "Building Responsive Layouts",
      description: "How to create mobile-first, responsive layouts using modern CSS techniques.",
      author: "UI Studio",
      date: "Dec 2025",
    },
  ];

  return (
    <section className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          date={blog.date}
        />
      ))}
    </section>
  );
}

export default BlogList;
