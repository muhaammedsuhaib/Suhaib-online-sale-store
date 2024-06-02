import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import banner_1 from './Images/banner-1.png';
import banner_2 from './Images/banner-2.png';
import banner_3 from './Images/banner-3.png';

import black from './Images/black-category.png';
import white from './Images/white-category.png';
import brown from './Images/brown-category.png';
import green from './Images/green-category.png';
import linenshirt from './Images/linenshirtscategory.png';
import stripped from './Images/strippedshirts-category.png';
import blazer from './Images/greyblazercategory.png';
import check from './Images/check-category.png';

import bottum_1 from './Images/bottom-1.png';
import bottum_2 from './Images/bottom-2.png';


const Home = () => {

  return (
    <>
      <br />
      <br />
      <MDBCarousel showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src={banner_1}
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src={banner_3}
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src={banner_2}
            className="d-block w-100"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarousel>

      <div className="container-fluid g-0 p-1" >
        <div className="row g-2 p-2 ">
          <div className="col-3 ">
          <img src={black} className='img-fluid shadow-4' alt='...' />

          </div>
          <div className="col-3">
          <img src={white} className='img-fluid shadow-4' alt='...' />

          </div>
          <div className="col-3">
          <img src={brown} className='img-fluid shadow-4' alt='...' />

          </div>
          <div className="col-3">
          <img src={green} className='img-fluid shadow-4' alt='...' />

          </div>
        </div>
        <div className="row g-2 p-2 ">
          <div className="col-3 ">
          <img src={linenshirt} className='img-fluid shadow-4' alt='...' />

          </div>
          <div className="col-3">
          <img src={stripped} className='img-fluid shadow-4' alt='...' />

          </div>
          <div className="col-3">
          <img src={blazer} className='img-fluid shadow-4' alt='...' />

          </div>
          <div className="col-3">
          <img src={check} className='img-fluid shadow-4' alt='...' />

          </div>
        </div>
      </div>

      <img src={bottum_1} className='img-fluid shadow-4 p-1' alt='...' />
      <img src={bottum_2} className='img-fluid shadow-4 p-1' alt='...' />

    
    </>
  );
};

export default Home;
