import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../static/data";
import styles from "../../style/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block shadow`}>
        <div className="my-8 lg:my-12 flex justify-between w-full shadow-sm bg-white p-1 lg:p-2 rounded-md">
          {brandingData &&
            brandingData.map((brand, index) => (
              <div className="flex items-center p-2" key={index}>
                {brand.icon}
                <div className="px-2">
                  <h3 className="font-bold text-sm lg:text-base">
                    {brand.title}
                  </h3>
                  <p className="text-xs lg:text-sm">{brand.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} py-5 md:p-0 rounded-lg mb-4 md:mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[8px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((ctg) => {
              const handleSubmit = (ctg) => {
                navigate(`/products?category=${ctg.title}`);
              };
              return (
                <div
                  className="w-full bg-white px-3 py-2 md:px-6 h-[100px] rounded-sm shadow flex items-center justify-between cursor-pointer overflow-hidden"
                  key={ctg.id}
                  onClick={() => handleSubmit(ctg)}
                >
                  <h5 className={`text-[15px] md:text-[18px] leading-[1.3]`}>
                    {ctg.title}
                  </h5>
                  <img
                    src={ctg.image_Url}
                    className="w-[100px] md:w-[120px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
