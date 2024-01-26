import LightButton from "./LightButton";

const BizCard = ({ id, img, alt, title, body, url, btnTitle }) => {
  return (
    <div className="single-bizcard-container">
      <div className="image-box">
        <img src={`${img}`} alt={alt} />
      </div>

      <div className="content-box">
        <h3>{title}</h3>

        <div>
          <p>{body}</p>
          <LightButton url={url} content={btnTitle} />
        </div>
      </div>
    </div>
  );
};

export default BizCard;
