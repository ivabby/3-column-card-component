import classes from "./App.module.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "./components/Card";

const App = (props) => {
  const carData = [
    {
      image: "images/icon-sedans.svg",
      background_color: "hsl(31, 77%, 52%)",
      carType: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip.",
    },
    {
      image: "images/icon-suvs.svg",
      background_color: "hsl(184, 100%, 22%)",
      carType: "SUVs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      image: "images/icon-luxury.svg",
      background_color: "hsl(179, 100%, 13%)",
      carType: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
    },
  ];

  return (
    <div
      className={`${props.className} ${classes.font} pt-4 pb-4`}
      style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
    >
      <div
        className={`${classes.card_list} d-flex flex-column flex-md-row p-4 justify-content-center align-items-center align-items-md-stretch`}
      >
        {carData.map((data) => {
          return <Card data={data} key={data.carType} />;
        })}
      </div>
    </div>
  );
};

export default App;
