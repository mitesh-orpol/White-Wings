import React from "react";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
  };

  return (
    <div className="testimonial">
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="box">
              <div className="client-img">
                <img src="./images/home/clientimg.png" alt="" />
              </div>
              <p className="roboto">
                Recently had a front door and two windows installed by the
                Window & Door Company. The product is of great quality and the
                workmanship first class. I will definitely use them again when
                installing double glazing to the back of the house
              </p>
              <h4 className="roboto">cordin reddy</h4>
              <h6 className="roboto">Our Client</h6>
            </div>
            <div className="box">
              <div className="client-img">
                <img src="./images/home/clientimg.png" alt="" />
              </div>
              <p className="roboto">
                {" "}
                Workmen worked really well and left job immaculately. The
                workmanship was finished perfectly and the door itself with
                locking system was excellent. Would highly recommend.Outstanding
                service and care to detail from Sales to install.
              </p>
              <h4 className="roboto">cordin reddy</h4>
              <h6 className="roboto">Our Client</h6>
            </div>
            <div className="box">
              <div className="client-img">
                <img src="./images/home/clientimg.png" alt="" />
              </div>
              <p className="roboto">
                {" "}
                I had an excellent experience with W & D in February this year
                from choosing the right doors, through to how quickly they were
                ordered, delivered and then fitted. They are a great team of
                guys and very helpful and knowledgeable in windows and doors.
              </p>
              <h4 className="roboto">cordin reddy</h4>
              <h6 className="roboto">Our Client</h6>
            </div>
            {/* <div className="box">
              <div className="client-img">
                  <img src="./images/home/clientimg.png" alt="" />
              </div>
              <p className='roboto'><img src="./images/home/client2.png" alt="" /> BrixalProviding international construction services company and is a leading Plumber in diverse market segments. The company has earned recognition for undertaking large, complex projects, fostering innovation,
              embracing emerging technologies, and making a difference for their clients, employees and community. <img src="./images/home/client1.png" alt="" />
              </p>
              <h4 className='roboto'>cordin reddy</h4>
              <h6 className='roboto'>Guest</h6>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
