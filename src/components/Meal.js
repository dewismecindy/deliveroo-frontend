import MealDefault from "../assets/images/meal.webp";

const Meal = (mealData, bucket, setBucket, cart, setCart) => {
  return (
    <div
      key={mealData.id}
      className="meal"
      onClick={() => {
        let change = false;
        //console.log(meal.id);
        const copytab = [...bucket];
        if (copytab.length === 0) {
          copytab.push({
            id: mealData.id,
            quantity: 1,
            title: mealData.title,
            price: parseFloat(mealData.price),
            amount: parseFloat(mealData.price),
          });
        } else {
          for (let i = 0; i < copytab.length; i++) {
            if (copytab[i].id === mealData.id) {
              copytab[i].quantity += 1;
              copytab[i].amount = copytab[i].price * copytab[i].quantity;
              change = false;
              break;
            } else {
              change = true;
            }
          }
          if (change) {
            copytab.push({
              id: mealData.id,
              quantity: 1,
              title: mealData.title,
              price: parseFloat(mealData.price),
              amount: parseFloat(mealData.price),
            });
          }
        }
        console.log(copytab);
        setBucket(copytab);

        let count = 0;
        for (let i = 0; i < copytab.length; i++) {
          count = count + copytab[i].amount;
        }
        console.log(count);
        setCart(count);
      }}
    >
      <div className="object">
        <h3>{mealData.title}</h3>
        <p>{mealData.description.slice(0, 80) + "..."}</p>
        <div className="meal-bottom-line">
          <p>{mealData.price + " €"}</p>
          {mealData.popular && (
            <span className="icon-STAR_FILL">Populaire</span>
          )}
        </div>
      </div>
      <img
        src={mealData.picture ? mealData.picture : MealDefault}
        alt="petite assieste bien garnie"
      />
    </div>
  );
};

export default Meal;
