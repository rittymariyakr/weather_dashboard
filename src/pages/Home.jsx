import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <div>
            <div style={{ backgroundImage: "url(https://e1.pxfuel.com/desktop-wallpaper/700/844/desktop-wallpaper-blue-color-backgrounds-plane-colour-background.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '780px' }}>
                <div style={{ height: '600px' }} className='d-flex  align-items-center '>
                    <Container className='text-center' >
                        <h1 style={{ fontWeight: 'bold', fontSize: '70px', color: 'black' }}>The Weather Says a lot </h1>
                        <Link style={{ textDecoration: 'none' }} to={'/login'}><button style={{ backgroundColor: 'black', color: 'white' }} className='btn rounded'><b>Get Started</b></button></Link>

                    </Container>

                </div>
            </div>
            </div>
        </>
    )
}

export default Home