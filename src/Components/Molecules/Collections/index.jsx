const Collections = props => {
  return (
    <div className="collection-item">
      <img src={`./Images/Collections/${props.image}.png`} alt={props.title} />
      <div className="collection-description">
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Collections;
