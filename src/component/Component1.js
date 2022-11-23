import React from 'react'
import './Component1.css'
export function Component1() {
    return (

        <div className='ctr1' >

            <div className='navbar'>
                <p className='menu'>

                    Menu</p>
                <ul>
                    <li>KUDIX</li>
                    <li>RESERVATION</li>
                    <li>BREWERY</li>

                </ul>
                <p className='btn'>FIND BY BEER
                    <i class="fa-sharp fa-solid fa-paper-plane"></i></p>
            </div>
            <div className='title'>
                <p className='toil'>TOIT</p>
                <p className='beer'>BEER</p>

            </div>
            <div className='ctr2'>
                <div className='img1'>
                    <h1 className='txt1'>BARS</h1>
                    <p className='caption'>Loreum Ipsum Dollar Dummy Text should be here.........</p>
                </div>
                <div className='img2'>
                    <h1 className='txt1'>BEERS</h1>
                    <p className='caption'>Loreum Ipsum Dollar Dummy Text should be here.........</p>
                </div>
                <div className='img3'>
                    <h1 className='txt3'>BREWERY</h1>
                    <p className='caption3'>Loreum Ipsum Dollar Dummy Text should be here.........</p>
                </div>

            </div>
        </div>
    )
}

export default Component1()