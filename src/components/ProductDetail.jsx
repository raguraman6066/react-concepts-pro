import PropTypes from "prop-types";

const ProductDetail = ({ name, price = "25000", desc }) => {
  return (
    <section>
      <h3>{name}</h3>
      <h6>{price}</h6>
      <p>{desc}</p>
    </section>
  );
};

export default ProductDetail;
ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};
