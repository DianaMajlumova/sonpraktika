import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const [post, setPost] = useState({});
  let { _id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:7007/cards/${_id}`).then((response) => {
      setPost(response.data);
    });
  }, [_id]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <>
        <div>
          <img src={post.image} alt="card "/>
          <h4>{post.categories}</h4>
          <h4>{post.name}</h4>
          <p>{post.price}</p>
        </div>
      </>
    </>
  );
}

export default Detail;
