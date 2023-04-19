import React from 'react';
import Image from 'next/image';
import IMG from '../public/images/making-grading-more-fun.jpg';
import IMG1 from '../public/images/2023-01-pokemon-special.jpg';
import IMG2 from '../public/images/2023-01-pokemon-trusted.jpg';

export default function HeroSection() {
  return (
  <>
  <div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={IMG} className="d-block w-100" style={{height: 500}} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={IMG1} className="d-block w-100" style={{height: 500}} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={IMG2} className="d-block w-100" style={{height: 500}} alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  
  </>
  )
}
