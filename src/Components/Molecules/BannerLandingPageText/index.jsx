import Button from '../../Atoms/Button';

const BannerLandingPageText = () => {
  return (
    <div className='banner-lp-text-wrapper'>
      <h2 className='banner-lp-subheading'>Low Price, Good Quality</h2>
      <h1 className='banner-lp-heading'>
        Make your room Interior View Smarter and more comfortable
      </h1>
      <p className='banner-lp-paragraph'>
        Looking for quality design furniture? then your choice is right have
        visited our website. We have furniture with reverse quality ready to be
        sent to you
      </p>
      <div className='banner-lp-button'>
        <Button type='btn primary-size primary-style'>Shop Now</Button>
        <Button type='btn primary-size secondary-style'>Order Custom</Button>
      </div>
    </div>
  );
};

export default BannerLandingPageText;
