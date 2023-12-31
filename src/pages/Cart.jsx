import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { numItemsInCart } = useSelector((store) => store.cartState);
  const { user } = useSelector((store) => store.userState);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your Cart Is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="mt-8 btn btn-primary btn-block">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="mt-8 btn btn-primary btn-block">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
