import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useDispatchCart, useCart } from "../components/cart/contextReducer";
import "../styles/detailview.css";

export default function Detailviewproduct() {
  const { API } = useAuth();
  const params = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getSingleProductData = async () => {
      try {
        const response = await fetch(`${API}/api/data/product/${params._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProductData(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleProductData();

    return () => {
      setProductData(null);
    };
  }, [API, params._id]);

  let dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setQty] = useState(1);

  const handleAddToCart = async () => {
    let cartproduct = [];
    for (const item of data) {
      if (item.id === productData._id) {
        cartproduct = item;
        break;
      }
    }

    if (cartproduct != []) {
      if (cartproduct.id === productData._id) {
        await dispatch({
          type: "UPDATE",
          id: productData._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else {
        await dispatch({
          type: "ADD",
          id: productData._id,
          product: productData.product,
          category: productData.category,
          price: finalPrice,
          provider: productData.provider,
          url: productData.url,
          qty: qty,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: productData._id,
      product: productData.product,
      category: productData.category,
      price: finalPrice,
      provider: productData.provider,
      url: productData.url,
      qty: qty,
    });

    console.log(data);
  };

  const finalPrice = productData ? parseInt(productData.price, 10) * qty : 0;

  const mainprice = productData ? parseInt(productData.price, 10) + 1000 : 0;

  return (
    <>
      {productData ? (
        <div className="product-container">
          <div className="product-image">
            <img src={productData.url} alt="product-image" className="image" />
          </div>
          <div className="product-details">
            <div className="product-info">
              <p className="product-name playfair-display-sc-regular text-6xl">
                {productData.product}
              </p>
              <p className="product-provider quicksand">
                Product by {productData.provider}
              </p>
              <p className="product-price quicksand text-3xl">
                ₹ {productData.price}
              </p>
              <p className="product-mainprice quicksand text-1xl">
                M.R.P.: <strike>₹{mainprice}</strike>
              </p>
              <p className="product-data">
                Inclusive of all taxes EMI starts at ₹238. No Cost EMI available
              </p>
              <p className="product-category quicksand text-1xl">
                Category : {productData.category}
              </p>

              <p className="product-description quicksand ">
                {productData.description}
              </p>
            </div>

            <div className="quantity quicksand">
              Quantity :
              <select onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="final-price quicksand text-3xl">
              Final price : ₹{finalPrice}/-
            </div>

            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
