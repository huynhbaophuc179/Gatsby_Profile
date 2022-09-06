import React, { useState, useEffect } from "react";
import "../../css/app.scss";
import Layout from '../components/layout'
import { fadeInUp } from "react-animations";
import { Link, useStaticQuery, graphql } from 'gatsby';
import SmoothScroll from "../components/SmoothScroll";
import { motion } from "framer-motion"
function IndexPage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {


    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const RenderContent = () => (
    <>
      <div className="overlay">
        <div className="Parallax__content__heading">
          <h1 className="Parallax__content__heading__text">Welcome</h1>
          <h2 className="Parallax__content__heading__caption">
            To my personal space!
          </h2>
        </div>
      </div>
      <div className="overlay">
        <div className="Parallax__content__cta">
          <p>

            <b ><Link to="/blog" style={{ color: "inherit" }}>See my blogs</Link> // </b>
            I just wrote them yesterday 😂
          </p>
          <p>
            <b style={{ color: "#f08080" }}> <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}><u>About Me</u>!</Link></b> // Hint, I am not Me!
          </p>
          <p>
            <b> <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}><u>References</u> </Link> //</b> If you are curious 😘
          </p>
        </div>
      </div>
    </>
  );

  return (
    // <Layout pageTitle={"HI"} >

    <div >
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <SmoothScroll>
          <div className="Parallax__content">{RenderContent()}</div>\
        </SmoothScroll >
      </section>
    </div>

    // </Layout>
  );
}
export default IndexPage