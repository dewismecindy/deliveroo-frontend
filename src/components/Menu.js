import Meal from "./Meal";
import Bucket from "./Bucket";

const Menu = ({ data, bucket, setBucket, cart, setCart }) => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu-items">
          {data.categories.map((category, index) => {
            // console.log("category =>", category);
            return (
              <div key={index}>
                {category.meals.length > 0 && (
                  <>
                    <h2>{category.name}</h2>
                    <div className="category-meals">
                      {category.meals.map((meal) => {
                        console.log("meal => ", meal);
                        return (
                          <Meal
                            mealData={meal}
                            bucket={bucket}
                            setBucket={setBucket}
                            cart={cart}
                            setCart={setCart}
                          />
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <Bucket
          bucket={bucket}
          setBucket={setBucket}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
};

export default Menu;
