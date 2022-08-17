import Button from "../../Atoms/Button";
import Collections from "../../Molecules/Collections";

const OurCollections = () => {
  return (
    <section className="our-collect-wrapper">
      <div className="our-collect-title">
        <h2>Our Collections</h2>
        <Button type="btn secondary-style">View All</Button>
      </div>
      <div className="our-collect-content">
        <Collections
          image="collection1"
          title="Gursken Bedde"
          desc="Bed Room"
        />
        <Collections
          image="collection2"
          title="Hembjudden"
          desc="Living Room"
        />
        <Collections
          image="collection3"
          title="Pearlbath Haven"
          desc="Bath Room"
        />
        <Collections image="collection4" title="Bind Ascent" desc="Kitchen" />
      </div>
    </section>
  );
};

export default OurCollections;
