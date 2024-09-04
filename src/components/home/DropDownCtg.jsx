import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "../../style/styles";

export default function DropDownCtg({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  const handleSubmit = (ctg) => {
    navigate(`/products?category=${ctg.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[200px] lg:w-[270px] bg-white absolute shadow-md rounded-b-md z-30">
      {categoriesData &&
        categoriesData.map((ctg) => (
          <div
            key={ctg.title}
            onClick={() => handleSubmit(ctg)}
            className={`${styles.noramlFlex}`}
          >
            <img
              src={ctg.image_Url}
              className="w-6 h-6 object-contain ml-2 lg:ml-3 select-none"
              alt=""
              srcSet=""
            />
            <h1 className="m-3 cursor-pointer select-none">{ctg.title}</h1>
          </div>
        ))}
    </div>
  );
}

DropDownCtg.propTypes = {
  categoriesData: PropTypes.array.isRequired,
  setDropDown: PropTypes.func.isRequired,
};
