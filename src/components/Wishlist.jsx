import React, { useContext } from 'react'
import { passingProduct } from './Main'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import toast from 'react-hot-toast';
const Wishlist = () => {
    const {login,auth,setAuth}= useContext(passingProduct);

    const addCart =(item)=>{

      let foundItem=login.cart.find((items)=>items.id ===item.id);
          if(!foundItem){
            // login.cart.push({ ...item, quantity: 1 }); 
            login.cart.push(item); 
            setAuth(!auth);
            toast.success("Item added to cart!");
          }else{
            foundItem.quantity += 1;
            setAuth(!auth);
            toast('Item already in cart.', {
                duration: 4000,
                position: 'top-center',
                style: { background: '#000', color: '#fff' },
                icon: '🛒',
            });
            
          }
        }
  return (<>
    <div>
      <br /><br /><br /> 
         <div className="container">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {login?.wishlist?.map((item)=>(
        <>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={item.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardText>
            <MDBCardTitle style={{fontSize:'12px'}} >{item.ProductName}</MDBCardTitle>
            <MDBCardTitle style={{fontSize:'12px'}} >{item.price}</MDBCardTitle>
            <MDBBtn
                  className="col-10 "
                  color="light"
                  size="sm"
                  onClick={()=>addCart(item)}
                >
                 <i class="fas fa-cart-shopping"></i> Add to cart
                </MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        </>
      ))}
    </MDBRow>
    </div>
    </div>
        </>
  )
}

export default Wishlist
