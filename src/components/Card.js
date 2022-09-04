import classes from "./Card.module.css";

// import logo from '../images/icon-luxury.svg'
const Card = (props) => {
  return (
    <div
      className={
        "col-12 col-sm-10 col-md-4 col-lg-3 p-5 d-md-flex flex-md-column justify-content-md-around"
      }
      style={{ backgroundColor: props.data.background_color, color: "white" }}
    >
      <img
        className="col-4 mt-2 mb-3"
        src={process.env.PUBLIC_URL + `/${props.data.image}`}
        alt={`icon ${props.data.carType}`}
      />
      <h1
        className={`mt-3 mb-3 ${classes.color}`}
        style={{
          textTransform: "uppercase",
          fontFamily: "Big Shoulders Display",
          fontWeight: 700,
        }}
      >
        {props.data.carType}
      </h1>
      <p className={`mt-3 mb-3 ${classes.p}`}>{props.data.description}</p>
      <button
        className={`btn ${classes.btn} ${classes.color} mt-4 mb-1 col-6 col-sm-9 col-lg-10`}
        style={{ backgroundColor: "white", color: props.data.background_color }}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
