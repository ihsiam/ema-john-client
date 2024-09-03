import { Link } from "react-router-dom";
import xbox from "../../assets/img/xbox.png";
import styles from "../../style/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat bg-[#d9d8d6] justify-between ${styles.noramlFlex}`}
    >
      <div className={`${styles.section} flex justify-between items-center`}>
        <div>
          <h1
            className={`text-[35px] leading-[1.2] md:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          >
            Best Collection for <br /> home Decoration
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
            quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
            <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
        <div>
          <img src={xbox} alt="" className="border-2 h-[80vh]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
