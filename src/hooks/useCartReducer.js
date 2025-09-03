import { useMemo, useReducer } from "react";

const ADD = "ADD";
const SUB = "SUB";
const REMOVE = "REMOVE";
const CLEAR = "CLEAR";

/** Cart state is a map: { [productId]: qty } */
function reducer(state, action) {
  switch (action.type) {
    case ADD: {
      const id = action.id;
      return { ...state, [id]: (state[id] || 0) + 1 };
    }
    case SUB: {
      const id = action.id;
      const next = { ...state, [id]: Math.max(0, (state[id] || 0) - 1) };
      if (next[id] === 0) delete next[id];
      return next;
    }
    case REMOVE: {
      const next = { ...state };
      delete next[action.id];
      return next;
    }
    case CLEAR: {
      return {};
    }
    default:
      return state;
  }
}

export function useCart(products) {
  const [cart, dispatch] = useReducer(reducer, {});

  const items = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const p = products.find((x) => x.id === id);
        return p && qty > 0 ? { ...p, qty } : null;
      })
      .filter(Boolean);
  }, [cart, products]);

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const shipping = useMemo(() => (subtotal > 500_000 || subtotal === 0 ? 0 : 20_000), [subtotal]);
  const total = subtotal + shipping;
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const actions = {
    add: (id) => dispatch({ type: ADD, id }),
    sub: (id) => dispatch({ type: SUB, id }),
    remove: (id) => dispatch({ type: REMOVE, id }),
    clear: () => dispatch({ type: CLEAR }),
  };

  return { cart, items, subtotal, shipping, total, count, ...actions };
}
