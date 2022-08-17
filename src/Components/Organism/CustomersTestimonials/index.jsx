import Button from "../../Atoms/Button";
import TestimonialsComment from "../../Molecules/TestimonialsComment";

const CustomersTestimonials = () => {
  return (
    <section className="testimonials-wrapper">
      <header className="testimonials-header">
        <h3>Happy Costumers</h3>
        <h2>How Happy They Are With Our Service</h2>
      </header>
      <div className="testimonials-content">
        <TestimonialsComment
          name="Nana Nia"
          job="Housewife"
          image="nana-nia"
          item="1"
        >
          Lorem Ipsum is simply dummy text of the printing & typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </TestimonialsComment>
        <TestimonialsComment
          name="Uni Sriwahyu"
          job="Artist & Model"
          image="uni-Sriwahyu"
          item="2"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </TestimonialsComment>
        <TestimonialsComment
          name="Iky Cahyo"
          job="College Student"
          image="iky-cahyo"
          item="3"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </TestimonialsComment>
        <TestimonialsComment
          name="Picky Bobocil"
          job="Retiredman"
          image="picky-bobocil"
          item="4"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </TestimonialsComment>
        <TestimonialsComment
          name="Uni Sriwahyu"
          job="Artist & Model"
          image="uni-Sriwahyu"
          item="5"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </TestimonialsComment>
      </div>
      <div className="button-wrapper">
        <Button type="btn primary-style">View All</Button>
      </div>
    </section>
  );
};

export default CustomersTestimonials;
