import MealDefault from "../assets/images/meal.webp";

const Meal = (props) => {
  return (
    <div key={props.mealData.id} className="meal">
      <div>
        <h3>{props.mealData.title}</h3>
        <p>{props.mealData.description.slice(0, 80) + "..."}</p>
        <div className="meal-bottom-line">
          <p>{props.mealData.price + " €"}</p>
          {props.mealData.popular && (
            <span className="icon-STAR_FILL">Populaire</span>
          )}
        </div>
      </div>
      <img
        src={props.mealData.picture ? props.mealData.picture : MealDefault}
        alt="petite assieste bien garnie"
      />
    </div>
  );
};

export default Meal;
