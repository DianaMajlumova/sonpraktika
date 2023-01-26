import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TrendingProduct.scss";
const baseURL = "http://localhost:7007/cards";
function TrendingProduct() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className="trending_product_section">
      <div className="trending_product_section_text_img">
        <div className="trending_product_section_text">
          <p>Popular Item in the market</p>
          <h5>Trending Product</h5>
        </div>
        <div className="trending_cards">
          {post.map((e) => {
            return (
              <div className="trending_card">
                <img src={e.image} alt="card" />
                <h4>{e.categories}</h4>
                <h1>{e.name}</h1>
                <p>{e.price}</p>
                <div className="buttons">
                <Link to={`detail/${e._id}`}>
                  <button>Detail</button>
                </Link>
                <button>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
