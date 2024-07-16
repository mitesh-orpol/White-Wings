import React from "react";
import Navbar from "../navbar/Navbar";
import "./blog.css";
import Footer from "../footer/Footer";
import Whatsapp from "../whatsapp/Whatsapp";

const Blog = () => {
  return (
    <>
      <div className="blog-bg">
        <Navbar />
        <div className="container">
          <h1 className="playfair">Blogs</h1>
        </div>
      </div>
      <div className="blog-page">
        <div className="container">
          <h2 className="roboto">Blogs, Articles & News</h2>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4">
              <div class="card">
                <img
                  src="./images/blog/b1.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div className="date">
                    <span className="roboto">
                      14 <br />
                      June
                    </span>
                  </div>
                  <h4 className="roboto">
                    The Integration of Technology in Trendy Sliding Door Systems
                  </h4>
                  <p className="roboto">
                    Whether it is for the patio or the balcony, the sliding door
                    design has always been a popular choice among homeowners
                    thanks to the several benefits it offers.Technology has kept
                    advancing everyday
                  </p>
                  <div className="more">
                    <a href="" className="roboto">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div class="card">
                <img
                  src="./images/blog/b2.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div className="date">
                    <span className="roboto">
                      23 <br />
                      May
                    </span>
                  </div>
                  <h4 className="roboto">
                    Common Mistakes to Avoid When Buying Glass Doors and Windows
                  </h4>
                  <p className="roboto">
                    Glass doors and windows define the aesthetic appeal,
                    functionality, and ambiance of a house. From balcony glass
                    doors to sliding glass windows, they enhance the visual
                    appeal of a home.{" "}
                  </p>
                  <div className="more">
                    <a href="" className="roboto">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div class="card">
                <img
                  src="./images/blog/b3.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div className="date">
                    <span className="roboto">
                      03 <br />
                      Apr
                    </span>
                  </div>
                  <h4 className="roboto">
                    How to Increase Security for Glass Windows in a Home?
                  </h4>
                  <p className="roboto">
                    It is vital to have ample protection against any kind of
                    intrusion in your home. Nowadays, even the safest of
                    neighborhoods cannot be considered completely theft-proof.{" "}
                  </p>
                  <div className="more">
                    <a href="" className="roboto">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4">
              <div class="card">
                <img
                  src="./images/blog/b5.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div className="date">
                    <span className="roboto">
                      16 <br />
                      Mar
                    </span>
                  </div>
                  <h4 className="roboto">
                    How To: Installing a Backsplash for Your Kitchen
                  </h4>
                  <p className="roboto">
                    A creative tile backsplash has found a permanent place in
                    kitchen interior design as it can do wonders when it comes
                    to enhancing the look of your kitchen.
                  </p>
                  <div className="more">
                    <a href="" className="roboto">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div class="card">
                <img
                  src="./images/blog/b7.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div className="date">
                    <span className="roboto">
                      31
                      <br />
                      Oct
                    </span>
                  </div>
                  <h4 className="roboto">
                    How to Choose the Right Balcony Windows for Your Home?
                  </h4>
                  <p className="roboto">
                    In today’s urban apartments, the concept of large outdoor
                    spaces seems to have disappeared completely because of space
                    constraints.{" "}
                  </p>
                  <div className="more">
                    <a href="" className="roboto">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div class="card">
                <img
                  src="./images/blog/b6.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <div className="date">
                    <span className="roboto">
                      25
                      <br />
                      Oct
                    </span>
                  </div>
                  <h4 className="roboto">
                    Advantages of Investing in Aluminium Casement Windows
                  </h4>
                  <p className="roboto">
                    Aluminium casement windows are a type of window that opens
                    outward or inward on hinges and may even be operated with a
                    crank handle.
                  </p>
                  <div className="more">
                    <a href="" className="roboto">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row mt-5">
                <div className="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./images/blog/b8.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="date">
                                <span className='roboto'>22 <br />Jan</span>
                            </div>
                            <h4 className='roboto'>Authentic Taste & Finest Ingredients</h4>
                            <p className='roboto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <div className="more">
                                <a href="" className='roboto'>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./images/blog/b9.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="date">
                                <span className='roboto'>22 <br />Jan</span>
                            </div>
                            <h4 className='roboto'>Authentic Taste & Finest Ingredients</h4>
                            <p className='roboto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <div className="more">
                                <a href="" className='roboto'>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div class="card">
                        <img src="./images/blog/b1.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="date">
                                <span className='roboto'>22 <br />Jan</span>
                            </div>
                            <h4 className='roboto'>Authentic Taste & Finest Ingredients</h4>
                            <p className='roboto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <div className="more">
                                <a href="" className='roboto'>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>

      <Whatsapp />
      <div className="foo">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
