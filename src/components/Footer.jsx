import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='mt-5' style={{ backgroundColor: "white", marginTop: "-1%" }}>
                <div className='container'>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h3 className='text-primary'> <b>Contact Us</b></h3>
                            <div>
                                <Link style={{ textDecoration: 'none', color: '#1e1e38' }}> <i className="fa-solid fa-phone me-3"></i>123-456-7890</Link>
                                <br />
                                <Link style={{ textDecoration: 'none', color: '#1e1e38' }}> <i className="fa-solid fa-envelope me-3"></i>Skilltech@gmail.com</Link>
                            </div>

                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h4 className='text-primary'> <b>Links</b></h4>
                            <Link style={{ textDecoration: 'none',color: '#1e1e38'   }}>Home</Link>
                            <Link style={{ textDecoration: 'none', color: '#1e1e38' }}>Admin</Link>
                            <Link style={{ textDecoration: 'none', color: '#1e1e38' }}>Courser</Link>
                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h3 className='text-primary' > <b>Services</b></h3>
                            <Link style={{ color: '#1e1e38', textDecoration: 'none' }}>Learning</Link>
                            <Link style={{ color: '#1e1e38', textDecoration: 'none' }}>Wind Speed</Link>
                            <Link style={{ color: '#1e1e38', textDecoration: 'none' }}>Weather</Link>
                        </div>

                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h3 className='text-primary'     > <b>TURBO</b></h3>
                            <p>Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.</p>
                        </div>
                        <div className='col-lg-12 col-sm-12 d-flex justify-content-center align-items-center icons mt-5'>
                            <Link to={'https://www.instagram.com/'} className='text-primary'   style={{ textDecoration: 'none', }}><i className="fa-brands fa-instagram fa-2x me-4"></i></Link>
                            <Link to={'https://www.facebook.com/'} className='text-primary'  style={{ textDecoration: 'none'}}><i className="fa-brands fa-facebook fa-2x me-4 "></i></Link>
                            <Link to={'https://www.linkedin.com/'} className='text-primary'  style={{ textDecoration: 'none' }}><i className="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
                            <Link to={'https://twitter.com/'} className='text-primary'  style={{ textDecoration: 'none' }}><i className="fa-brands fa-twitter fa-2x "></i></Link>
                        </div>
                        <div style={{ color: '#1e1e38' }} className='mt-2'>
                            <center><p>Copyright © 2024 <span style={{ color: "#1e1e38" }}>TURBO</span>.Build With React.</p></center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer