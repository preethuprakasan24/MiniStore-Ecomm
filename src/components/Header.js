import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";
import { productSearch } from "../Redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData); //useSelector () is used to get data from redux
  const dispatch = useDispatch();
  console.log("Header is called", result);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/main-logo.png"}
            alt="Logo"
            className="logo"
          />
        </Link>
        <div className="search_box">
          <input
            type="text"
            placeholder="Search here"
            onChange={(event) => dispatch(productSearch(event.target.value))}
          />
        </div>
        <Link to="/cart">
          <div className="cart_icon">
            <span>{result.length}</span>
            <i className="fa fa-shopping-cart"></i>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
