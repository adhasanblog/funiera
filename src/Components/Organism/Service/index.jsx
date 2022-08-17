import Button from "../../Atoms/Button";

const Service = () => {
  return (
    <div className="container service">
      <div className="service-content">
        <h3>why should the service be us?</h3>
        <h2>Build Your Home With A Comfortable Room By Using Our Furniture</h2>
        <p>
          Looking for quality design furniture? then your choice is right have
          visited our website. We have furniture with reverse quality ready to
          be sent to you
        </p>
      </div>
      <div className="service-button">
        <Button type="btn primary-style primary-size">Shop Now</Button>
        <Button type="btn secondary-style primary-size">Order Custom</Button>
      </div>
    </div>
  );
};

export default Service;
