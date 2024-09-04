import { Link } from "react-router-dom";
import xbox from "../../assets/img/xbox.png";
import styles from "../../style/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] lg:min-h-[80vh] w-full bg-no-repeat bg-[#d9d8d6] justify-between ${styles.noramlFlex}`}
    >
      <div
        className={`${styles.section} flex flex-col-reverse md:flex-row md:justify-between items-center`}
      >
        <div className="md:w-[60%] px-2 pb-4 md:px-0 md:pb-0">
          <h1
            className={`text-[30px] leading-[1.2] lg:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          >
            Best Collection of <br /> Gadget and Gears
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
        <div className="md:w-[35%] flex justify-center md:justify-end">
          <img src={xbox} alt="" className="h-[40vh] w-auto lg:h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
