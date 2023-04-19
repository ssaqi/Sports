import React from 'react';
import Image from 'next/image';
import place from '../public/images/1.jpg'
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function MoreCards() {
  return (
    <>
       <div className='container'>

<div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
    <div className="col">
        <div className="card " style={{ border: "none" }}>
            <Image src={place} style={{ height: 200 }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color: "#0072ff",textTransform: "uppercase"}}>Pokemon</h5>
                <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </p>
                <Button variant="contained" endIcon={<ShoppingCartOutlinedIcon/>} style={{textTransform: "capitalize"}}  >
                    Buy now
                </Button>

            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={{ border: "none" }}>
            <Image src={place} style={{ height: 200 }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color: "#0072ff",textTransform: "uppercase"}}>Sports</h5>
                <p className="card-text">  This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
                <Button variant="contained" endIcon={<ShoppingCartOutlinedIcon/>} style={{textTransform: "capitalize"}}>
                    Buy now
                </Button>


            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={{ border: "none" }}>
            <Image src={place} className="card-img-top" style={{ height: 200 }} alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color: "#0072ff",textTransform: "uppercase"}}>Magic: The Gathering</h5>
                <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in
                    to additional content.
                </p>
                <Button variant="contained" endIcon={<ShoppingCartOutlinedIcon/>} style={{textTransform: "capitalize"}}>
                    Buy now
                </Button>

            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}
