import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/images/cardfan.png'

export default function About() {
  return (
   <>
<div className="container-fluid mt-5" >
  <br />
  <br />
  <br />
  <div className="container">
    <div className="row featurette my-4">
      <div className="col-md-7">
        <br />
        <h3 data-aos="fade-down">About us</h3>
        <p
          className="lead"
          data-aos="fade-right"
          style={{ fontSize: 18, textAlign: "justify",fontWeight:"400" }}
        >
          Collaboration plays a key role in developing high-quality software. It
          enables software developers to share their knowledge with the whole
          world by posting informational articles. I would personally recommend
          you to regularly.It means that you can easily have a look at the
          source code which powers this amazing website Read more .
        </p>
      </div>
      <div
        className="col-md-5"
        data-aos="fade-left px-5"
        style={{ borderRadius: 15 }}
      >
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ border: "none", borderRadius: 3 }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src={AboutImg}
                className="d-block w-100"
                alt="..."
                style={{ width: 180, height: 300 }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={AboutImg}
                className="d-block w-100"
                alt="..."
                style={{ width: 180, height: 300 }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={AboutImg}
                className="d-block w-100"
                alt="..."
                style={{ width: 180, height: 300 }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={AboutImg}
                className="d-block w-100"
                alt="..."
                style={{ width: 180, height: 300 }}
              />
            </div>
            <div className="carousel-item">
              <Image
                src={AboutImg}
                className="d-block w-100"
                alt="..."
                style={{ width: 180, height:300 }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden" style={{border:"none"}}>Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden" >Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

   </>

  )
}
