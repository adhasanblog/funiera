import CustomFurnitureDetail from "../../Molecules/CostumFurnitureDetail";

const CustomFurniture = () => {
  return (
    <section className="container custom-furniture-wrapper">
      <div className="custom-furniture-image">
        <img src="./Images/custom-furniture.png" alt="Easy Custom Furniture" />
      </div>
      <CustomFurnitureDetail />
    </section>
  );
};

export default CustomFurniture;
