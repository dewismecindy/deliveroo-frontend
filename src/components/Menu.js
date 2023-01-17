import Meal from "./Meal";

const Menu = ({ data, bucket }) => {
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
                        return <Meal mealData={meal} />;
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="bucket">
          {bucket.map((element, index) => {
            console.log("bucket element >", element);
            return (
              <div>
                <p>+</p>
                <p>-</p>
                <p>Peut-être</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
