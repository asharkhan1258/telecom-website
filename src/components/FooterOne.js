import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,

} from 'react-icons/fa';

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Get Our Latest  Telecompaybill.us Updates</h2>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-black border-radius-0" href="#">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                <Link href="/index-1">
             <h3 className='text-white '>Telecompaybill.us </h3>
            </Link>
                </div>
                <div className="details">
                  <p>
                    Leading provider of 5G and fiber-optic <br /> internet solutions for homes and businesses
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="widget widget_about">
                
                <div className="details">
                  <p className="mt-3">
                    <FaPhoneAlt />  +1 888 427 7915
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> support@ Telecompaybill.us.com
                  </p>
                 
                </div>
              </div>
            </div>
           
            
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>©  Telecompaybill.us 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="/termsandcondition">Terms & Conditions</Link>
                <Link href="/privacypolicy">Privacy Policy</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
