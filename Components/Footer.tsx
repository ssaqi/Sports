import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/Expert Logo web.png'
import insta from '../public/images/Group 3276.png'
import twit from '../public/images/Group 3279.png'
import pin from '../public/images/Group 3281.png'
import yt from '../public/images/Group 3282.png'
import linkln from '../public/images/Group 3285.png'
export default function Footer() {
    return (
        <>
            <div className='container-fluid'>

                <>
                    {/* Footer */}
                    <footer className=" text-center text-white " style={{ backgroundColor: "black", marginTop: 20 }}  >
                        {/* Grid container */}
                        <div className="container p-4">

                            {/* Section: Form */}
                            <section className="">
                                <form action="">
                                    {/*Grid row*/}
                                    <div className="row d-flex justify-content-start">
                                        {/*Grid column*/}
                                        <div className="col-auto">
                                            <p className="pt-0">
                                                    <h4 style={{color: "white"}}>LOGO HERE</h4>
                                            </p>
                                        </div>
                                        {/*Grid column*/}
                                        {/*Grid column*/}
                                        <div className="col-md-5 col-12">
                                            {/* Email input */}

                                        </div>

                                    </div>
                                    {/*Grid row*/}
                                </form>
                            </section>
                            {/* Section: Form */}
                            {/* Section: Text */}
                            <section className="mb-4">
                                <p style={{ textAlign: "justify", color: "white" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam, commodi
                                    optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
                                    voluptate quas.
                                </p>
                            </section>
                            {/* Section: Text */}
                            {/* Section: Links */}
                            <section className="">
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase text-white text-start">Sports</h5>
                                        <ul className="list-unstyled mb-0 text-start">
                                            <li>
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    obscure
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    Lorem Ipsum
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    predefined
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    structures
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ float: "left" }}>
                                        <h5 className="text-uppercase text-white text-start">Sports</h5>
                                        <ul className="list-unstyled mb-0 text-start">
                                            <li>
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    obscure
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    Lorem Ipsum
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    predefined
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    structures
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase text-white text-start">Sports</h5>
                                        <ul className="list-unstyled mb-0 text-start">
                                            <li>
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    obscure
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    Lorem Ipsum
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    predefined
                                                </a>
                                            </li>
                                            <li>
                                                <br />
                                                <a href="#!" className="text-white" style={{ textDecoration: "none", textTransform: "capitalize" }}>
                                                    structures
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                        <h5 className="text-uppercase text-start text-white" >Social</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#!" className="text-white">
                                                    <div className="form-outline form-white mb-4">
                                                        <label className="form-label" style={{ float: "left", color: "white" }} htmlFor="form5Example21">
                                                            Email address
                                                        </label>
                                                        <div className="input-group mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Type email here"
                                                                aria-label="Recipient's username"
                                                                aria-describedby="button-addon2"
                                                                style={{backgroundColor:"white",textDecoration:"none"}}
                                                            />
                                                            <button
                                                                className="btn btn-outline-secondary "
                                                                type="button"
                                                                id="button-addon2"
                                                                 style={{color:"#fff",}}

                                                            >
                                                                subscribe
                                                            </button>
                                                        </div>




                                                    </div>
                                                </a>

                                            </li>
                                            {/* Section: Social media */}
                                            <section className="mb-4">
                                                {/* Facebook */}
                                                <a
                                                    className="btn btn-outline-secondary  btn-floating m-1"
                                                    href="#!"
                                                    role="button"
                                                >
                                                    <Image src={twit} alt='' style={{ width: "27px", height: "27px",margin:3 }} />
                                                </a>
                                                {/* Twitter */}
                                                <a
                                                    className="btn btn-outline-secondary  btn-floating m-1"
                                                    href="#!"
                                                    role="button"
                                                >
                                                    <Image src={yt} alt=''  style={{ width: "27px", height: "27px",margin:3 }} />
                                                </a>
                                                {/* Google */}
                                                <a
                                                    className="btn btn-outline-secondary  btn-floating m-1"
                                                    href="#!"
                                                    role="button"
                                                >
                                                    <Image src={pin} alt=''  style={{ width: "27px", height: "27px",margin:3 }} />
                                                </a>
                                                {/* Instagram */}
                                                <a
                                                    className="btn btn-outline-secondary  btn-floating m-1"
                                                    href="#!"
                                                    role="button"
                                                >
                                                    <Image src={insta} alt=''  style={{ width: "27px", height: "27px",margin:3 }} />
                                                </a>
                                                {/* Linkedin */}
                                                <a
                                                    className="btn btn-outline-secondary btn-floating m-1"
                                                    href="#!"
                                                    role="button"
                                                >
                                                    <Image src={linkln} alt=''  style={{ width: "27px", height: "27px",margin:3 }} />
                                                </a>
                                                {/* Github */}
                                                {/* <a
                  className="btn btn-outline-dark btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github" />
                </a> */}
                                            </section>
                                            {/* Section: Social media */}
                                        </ul>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                            </section>
                            {/* Section: Links */}
                        </div>
                        {/* Grid container */}
                        {/* Copyright */}
                        <div
                            className="text-center p-1 text-white"
                            style={{ backgroundColor: "#0f0f0f" }}
                        >
                            <div className='container'>
                                <p style={{ textAlign: "start" }}> <br /> <i>© 2020:Abcd.LTD</i>
                                </p></div>
                        </div>
                        {/* Copyright */}
                    </footer>

                    {/* Footer */}

                </>

            </div>


        </>
    )
}
