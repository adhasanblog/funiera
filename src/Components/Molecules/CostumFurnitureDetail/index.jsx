import Button from "../../Atoms/Button";

const CustomFurnitureDetail = () => {
  return (
    <div className="custom-furniture-detail">
      <div className="custom-furniture-detail-title">
        <h3>Low Price, Exclusive Product</h3>
        <h2>Easy Custom Furniture</h2>
        <p>
          Can't find what you want in terms of color or size of the furniture?
          Don't worry, you can customize the furniture the way you want
        </p>
      </div>
      <div className="custom-furniture-detail-features">
        <div className="features-item">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="52"
              height="52"
              rx="12"
              fill="#D38669"
              fillOpacity="0.1"
            />
            <path
              d="M26.6667 19.2C29.0401 19.2 29.9201 20.3333 30.0001 22H32.9467C32.8534 19.7067 31.4534 17.6 28.6667 16.92V14H24.6667V16.88C23.9601 17.04 23.2934 17.28 22.6934 17.6L24.6534 19.56C25.2001 19.3333 25.8667 19.2 26.6667 19.2ZM17.1067 15.4133L15.4134 17.1067L20.0001 21.6933C20.0001 24.4667 22.0801 25.9733 25.2134 26.9067L29.8934 31.5867C29.4401 32.2267 28.4934 32.8 26.6667 32.8C23.9201 32.8 22.8401 31.5733 22.6934 30H19.7601C19.9201 32.92 22.1067 34.56 24.6667 35.1067V38H28.6667V35.1333C29.9467 34.8933 31.0934 34.4 31.9334 33.64L34.8934 36.6L36.5867 34.9067L17.1067 15.4133Z"
              fill="#D38669"
            />
          </svg>

          <h3>No Extra Const</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="features-item">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="52"
              height="52"
              rx="12"
              fill="#D38669"
              fillOpacity="0.1"
            />
            <path
              d="M14 14H24.6667V24.6667H14V14ZM27.3333 14H38V24.6667H27.3333V14ZM14 27.3333H24.6667V38H14V27.3333ZM34 27.3333H31.3333V31.3333H27.3333V34H31.3333V38H34V34H38V31.3333H34V27.3333Z"
              fill="#D38669"
            />
          </svg>

          <h3>No Extra Const</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <Button type="btn primary-size primary-style">Order Custom</Button>
    </div>
  );
};

export default CustomFurnitureDetail;
