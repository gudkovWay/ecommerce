import SectionHeader from "@/shared/ui/header";
import BlogCard from "./BlogCard";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <SectionHeader header="Статьи" link="/blog" linkName="Все статьи" />
      <BlogCard />
    </div>
  );
};

export default Blog;
