import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import Loadingscreen from '../Loadingscreen/Loadingscreen';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css'



export default function Cart() {
  const {condition, updateitems, numberofcartItems, cartproducts, totalCartPrice, removeitems } = useContext(CartContext);

  const [countnumber, setcountnumber] = useState();


  // function plus() {

  //   console.log('hellloooo');
  // }
  // function remove() {

  // }


  // useEffect(() => {
  //   plus()

  //   remove()
  //   return () => {

  //   };
  // }, [countnumber]);

  return <>


    {cartproducts ? <>

      <section>
        <div className="container">
          <h2 className='text-info'>totlaPrice:{totalCartPrice}</h2>
          <div className='d-flex justify-content-between'>

            <h2 className='text-info'> numberOfItems:{numberofcartItems}</h2>

          </div>
          <div className="row">
            {cartproducts.map(function (pro, ind) {


              return <> <div key={ind} className="col-md-4 col-sm-4">
                <div className="itemCart">
                  <div className='homedivImg'><img className='w-100' src={pro.product.imageCover} alt={pro.product.title} /></div>
                  <h3>name: {pro.product.title.slice(0, 10)}</h3>
                  <h3>count:{pro.count}</h3>
                  <h3>price:{pro.price}</h3>


                  <div className='inputDiv'>
                    <button onClick={function (e) { condition(pro.product._id, pro.count + 1) }} className='btn btn-info mt-1 mx-1'>+</button>
                    <input className='form-control cartinputnumber' placeholder='count' value={pro.count} />
                    <button onClick={function (e) { condition(pro.product._id, pro.count - 1) }} className='btn btn-info mt-1 mx-1'>-</button>
                  </div>



                  <div><button onClick={function () { removeitems(pro.product._id) }} className='btn btn-danger'>remove item </button>
                  </div>
                  <div className='paymentDiv'>     <Link to={'/paymentcash'}><button className='btn  btn-info'>payment cash</button></Link>
                    <Link to={'/onlinepayment'}><button className='btn  btn-info'>payment cridet</button></Link>
                  </div>
                </div>
              </div>

              </>
            })}



          </div>


        </div>
      </section>
    </> : <Loadingscreen />}
  </>
}
