// import { useDispatch } from 'react-redux';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../Redux/Action";
import { productList } from "../Redux/productAction";
import "./Main.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const result = useSelector((state) => state.productData);
  console.log("API  is called", result);
  const dispatch = useDispatch();
  //   const Product = {
  //     name: "iphone",
  //     category: "mobile phone",
  //     price: 53000,
  //     color: "red",
  //   };
  React.useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#f2f2f2" }}>
          <div className="col-md-6">
            <div className="banner-content p-5">
              <h1 className="display-2 text-uppercase text-dark pb-5 mt-5">
                Your Products<br></br> Are Great.
              </h1>
              <a
                href={process.env.PUBLIC_URL + "/banner-image.png"}
                className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
              >
                Shop Product
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-holder ">
              <img
                src={process.env.PUBLIC_URL + "/banner-image.png"}
                alt="banner"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <span>{result}</span> */}
      {/* <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button> */}
      <div>
        {/* <button onClick={() => dispatch(removeFromCart(Product.name))}>
          Remove From Cart
        </button> */}
      </div>
      {/* <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> */}
      {/* <div>
        <button onClick={() => dispatch(productList())}>Product</button>
      </div> */}
      <section id="company-services" class="padding-large">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  {/* <svg class="cart-outline">
                    <use xlink:href="#cart-outline"></use>
                  </svg> */}
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">
                    Free delivery
                  </h3>
                  <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  {/* <svg class="quality">
                    <use xlink:href="#quality"></use>
                  </svg> */}
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">
                    Quality guarantee
                  </h3>
                  <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  {/* <svg class="price-tag">
                    <use xlink:href="#price-tag"></use>
                  </svg> */}
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">
                    Daily offers
                  </h3>
                  <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  {/* <svg class="shield-plus">
                    <use xlink:href="#shield-plus"></use>
                  </svg> */}
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">
                    100% secure payment
                  </h3>
                  <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="product_heading">
        <h2 class="display-7 text-dark text-uppercase mt-5 ml-5">
          Mobile Products
        </h2>
      </div>
      <div className="product_container">
        {result.map((item) => (
          <div className="product_list" key={item.key}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="240px"
                image={item.photo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Color:{item.color}
                  <br></br>Price:{item.price}
                  <br></br>Category:{item.category}
                  <br></br>Brand:{item.brand}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </Button>
                <Button
                  size="small"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove From Cart
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
