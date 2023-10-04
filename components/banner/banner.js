import style from "./banner.module.css";

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;
  const handleOnPlay = () => {
    console.log("play");
  };
  return (
    <div>
      <h3>{title}</h3>
      <h3>{subTitle}</h3>
      <button onClick={handleOnPlay}>Play</button>
      <div
        className={style.img}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;
