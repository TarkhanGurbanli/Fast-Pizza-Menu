import Pizza from "./Pizza";
import { pizzaData } from "../data";

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((item) => (
            <Pizza key={item.name} item={item} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
