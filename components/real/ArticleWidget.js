import s from "./ArticleWidget.module.css";
import Image from "@/components/core/Image";
import cn from "classnames";

const ArticleWidget = ({ title, category, description, imgId }) => (
  <article className={s.root}>
    <figure className={s.figure}>
      <Image
        publicId={imgId}
        alt="image"
        width="690"
        height="493"
        className={s.img}
      />
    </figure>
    <div className={s.header}>
      <span className={s.category}>{category}</span>
      <h2 className={s.title}>{title}</h2>
    </div>
    <p className={s.description}>{description}</p>
  </article>
);

export default ArticleWidget;
