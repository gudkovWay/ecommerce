import SectionHeader from "@/shared/ui/header";
import BlogCard from "./BlogCard";
import blogs from "@/shared/constants/blogs.json";

import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.blog__wrapper}>
          <SectionHeader header="Статьи" link="/blog" linkName="Все статьи" />
          <div className={styles.blog__list}>
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                description={blog.description}
                time={blog.time}
                imageSrc={blog.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
