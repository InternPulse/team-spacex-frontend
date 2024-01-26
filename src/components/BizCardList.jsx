import BizCard from "./BizCard";
import "../css/bizcard.css";
import { businessType } from "../constants";

const BizCardList = () => {
  return (
    <section className="bizcardlist-container">
      <h2>Invoicing Tools Built for Any Sized Business</h2>

      <div className="all-bizcard-container">
        {businessType.map((item) => {
          const { id, img, alt, title, body, url, btnTitle } = item;

          return (
            <BizCard
              key={id}
              img={img}
              alt={alt}
              title={title}
              body={body}
              url={url}
              btnTitle={btnTitle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BizCardList;
