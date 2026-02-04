function BlogCard({ title, description, author, date }) {
  return (
    <div className="blog-card glass hover-lift">
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <div className="meta">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
export default BlogCard;
