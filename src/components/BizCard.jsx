const BizCard = ({ id, img, alt, title, body, url, btnTitle }) => {
  return (
    <div className="single-bizcard-container">
      <div className="image-box">
        <img src={`${img}`} alt={alt} />
      </div>
      <div className="content-box">
        <h3>{title}</h3>
        <p>{body}</p>
        <button className="home-btn home-btn-white bizcard-btn">
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default BizCard;
