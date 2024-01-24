import LightButton from "./LightButton";

const BizCard = ({ id, img, alt, title, body, url, btnTitle }) => {
  return (
    <div className="single-bizcard-container">
      <div>
        <img src={`${img}`} alt={alt} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <LightButton url={url} content={btnTitle} />
      </div>
    </div>
  );
};

export default BizCard;
