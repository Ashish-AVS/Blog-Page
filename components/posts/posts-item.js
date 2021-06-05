import Link from "next/link";
import Image from "next/image";
import classes from "./posts-item.module.css";

export default function PostItem(props) {
  const { title, image, excerpt, slug, date } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              // src={imagePath}
              src="/images/posts/test.jpg"
              alt={title}
              width={390}
              height={220}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <time>{formattedDate}</time>
            <p>Ashish</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

