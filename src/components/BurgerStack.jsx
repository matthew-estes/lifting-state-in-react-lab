function BurgerStack({ stack, removeFromBurger }) {
  return (
    <ul>
      {stack.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeFromBurger(ingredient)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default BurgerStack;
