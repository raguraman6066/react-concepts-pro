import PropTypes from "prop-types";
import { UserContext } from "../App";
import { useContext } from "react";

const ProductDetail = ({ name, price = "25000", desc }) => {
  let { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <section>
      <article>UserName : {user.username}</article>
      <h3>{name}</h3>
      <h6>{price}</h6>
      <p>{desc}</p>
      <button
        onClick={() => setUser({ username: "demo", price: "10rs", desc: "hi" })}
      >
        update user
      </button>
    </section>
  );
};

export default ProductDetail;
ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};
