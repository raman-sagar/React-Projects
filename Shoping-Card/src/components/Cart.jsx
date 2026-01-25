import { useCart } from "../context/CardContext";

export const Cart = () => {
  const { cart, removeFromCart, updateQty, total } = useCart();

  return (
    <div className="container">
      <h2 className="mb-3">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty</div>
      ) : (
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td style={{ width: "100px" }}>
                  <input
                    className="form-control text-center"
                    min="1"
                    type="number"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                  />
                </td>
                <td>${item.price * item.qty}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="m-1 mx-sm-2  btn btn-outline-info btn-sm"
                    onClick={() =>
                      alert(
                        "This is a clone website so you can't buy anything here.If you want to purchase something.Please buy on flipkart or amazon"
                      )
                    }
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-end fw-bold fs-5">Total: ${total.toFixed(2)}</div>
    </div>
  );
};
