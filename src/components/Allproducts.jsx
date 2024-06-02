import React, { useContext, useState } from "react";
import { passingProduct } from "./Main";

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBBtn,
  MDBCardBody,
  MDBRadio,
  MDBBtnGroup,
  MDBCard,
  MDBCardImage,
  MDBRipple,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

import all_banner from "./Images/all_banner.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Allproducts = () => {

  const nav=useNavigate();
  // sample
  const [sample, setSample] = useState(true);

  const { product,login,account, setAccount ,register, setRegister,auth,setAuth} = useContext(passingProduct);
  const [clickedData, setClickedData] = useState(null);
  const [optSmModal, setOptSmModal] = useState(false);


  const toggleOpen1 = () => setAccount(!account);
  const toggleOpen2 = () => setRegister(!register);
  
  const toggleOpen = (Item) => {
    setClickedData(Item);
    setOptSmModal(!optSmModal);
  };

  const addwishlist = (item) => {

    if (!login) {
        toast('Please login', { duration: 4000, position: 'bottom-center', style: { background: '#000', color: '#fff' }});
        setTimeout(() => { setAccount(true); }, 400);
        return; // Exit the function early
    }

    if (login && login.wishlist) {
        const foundItem = login.wishlist.find(wishlistItem => wishlistItem === item);
        
        if (foundItem) {
          toast('Item already in favorites.', {
            duration: 4000,
            position: 'top-center',
            style: {
              background: '#000',
              color: '#fff',
            },
            icon: '❤️',
          })
        } else {
          setSample(sample?true:false)
            login.wishlist = [...login.wishlist, item];
            toast.success("Favorite added!");
            setAuth(!auth)
        }
    }
}


// const addCart = (item) => {
//   if (!login) {
//     toast('Please login', { duration: 4000, position: 'bottom-center', style: { background: '#000', color: '#fff' }});
//     setTimeout(() => { setAccount(true); }, 400);
//     return;
//   }
//   else if(login.cart){
//     let foundItem=login.cart.find((items)=>items.id ===item.id);
//     if(!foundItem){
//       // login.cart.push({ ...item, quantity: 1 }); 
//       login.cart.push(item); 
//       toast.success("Item added to cart!");
//     }else{
//       foundItem.quantity += 1;
//       toast('Item already in cart.', {
//           duration: 4000,
//           position: 'top-center',
//           style: { background: '#000', color: '#fff' },
//           icon: '❤️',
//       });
//       setTimeout(() => {
//           nav('/cart');
//       }, 1000);
//     }
//   }

//   if (login.cart) {
//       let foundItem = login.cart.find(cartItem => cartItem === item);
//       if (foundItem ) {
//           // Update quantity if item already in cart
//           foundItem.quantity += 1;
//           toast('Item already in cart.', {
//               duration: 4000,
//               position: 'top-center',
//               style: { background: '#000', color: '#fff' },
//               icon: '❤️',
//           });
//           setTimeout(() => {
//               nav('/cart');
//           }, 1000);
//       } else {
//           login.cart.push({ ...item, quantity: 1 }); 
//           toast.success("Item added to cart!");
//       }
//   } else {
//       // If cart doesn't exist in login object, initialize it
//       login.cart = [{ ...item, quantity: 1 }];
//       toast.success("Item added to cart!");
//   }
// }
const addCart =(item)=>{
  if (!login) {
    toast('Please login', { duration: 4000, position: 'bottom-center', style: { background: '#000', color: '#fff' }});
    setTimeout(() => { setAccount(true); }, 400);
    return; // Exit the function early
}
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



  return (
    <>
      <br />
      <br />
      <img src={all_banner} className="img-fluid shadow-4 mb-3" alt="..." />
      <div
        className="container-fluid d-flex align-items-center justify-content-center flex-wrap md"
        style={{ gap: "10px" }}
      >
        {product.map((item) => (
          <>
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
                onClick={() => toggleOpen(item)}
              >
                <MDBCardImage src={item.img} fluid alt="..." width={"300px"} />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                >
                  <MDBCardImage src={item.img1} fluid alt="..." width={"300px"} />
                </div>
              </MDBRipple>
              <MDBCardBody className="p-0 m-0">
                <div className="p-0 m-0 text-center">
                  ₹<b>{item.price} </b>
                </div>
                <MDBBtn
                  className="col-10 "
                  color="light"
                  size="sm"
                  onClick={() => toggleOpen(item)}
                >
                  SHOPE NOW
                </MDBBtn>
                <MDBBtn className="col-2 p-0 m-0" color="tertiary">
                  {" "}
                  {sample ? (
                    <i
                      class="far fa-heart fa-2x text-black"
                      // onClick={() => setSample(!sample ? true : false)}
                      onClick={()=>addwishlist(item)}
                    ></i>
                  ) : (
                    <i
                      class="fas fa-heart fa-2x text-black"
                      onClick={() => setSample(!sample ? true : false)}
                    ></i>
                  )}
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </>
        ))}
      </div>

      <MDBModal
        open={optSmModal}
        tabIndex="-1"
        onClose={() => setOptSmModal(false)}
      >
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Shope Now</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <MDBCarousel showControls>
                      <MDBCarouselItem itemId={1}>
                        <img
                          src={clickedData?.img}
                          className="d-block w-100"
                          alt="..."
                        />
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId={2}>
                        <img
                          src={clickedData?.img1}
                          className="d-block w-100"
                          alt="..."
                        />
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId={3}>
                        <img
                          src={clickedData?.img2}
                          className="d-block w-100"
                          alt="..."
                        />
                      </MDBCarouselItem>
                    </MDBCarousel>
                  </div>
                  <div className="col-lg-6 text-center">
                    <div className="row">
                      <div className="col-10">
                        {" "}
                        <h5>{clickedData?.ProductName} </h5>
                      </div>
                      <div className="col-2">
                        {sample ? (
                          <i
                            class="far fa-heart fa-2x"
                            // onClick={() => setSample(!sample ? true : false)}
                            onClick={()=>addwishlist(clickedData)}
                          ></i>
                        ) : (
                          <i
                            class="fas fa-heart fa-2x text-black"
                            onClick={() => setSample(!sample ? true : false)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <h6 className="text-start">₹{clickedData?.price}</h6>
                    <pre className="text-start">
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">Color</th>
                            <td>{clickedData?.color}</td>
                          </tr>
                          <tr>
                            <th scope="row">Fabric </th>
                            <td>{clickedData?.fabric}</td>
                          </tr>
                          <tr>
                            <th scope="row">Fit</th>
                            <td>{clickedData?.fit}</td>
                          </tr>
                          <tr>
                            <th scope="row">Pattern</th>
                            <td>{clickedData?.pattern}</td>
                          </tr>
                          <tr>
                            <th scope="row">Care Instruction</th>
                            <td>{clickedData?.CareInstruction}</td>
                          </tr>
                          <tr>
                            <th scope="row">Sleeve</th>
                            <td>{clickedData?.Sleeve}</td>
                          </tr>
                        </tbody>
                      </table>
                    </pre>
                    <MDBBtnGroup className="flex-wrap justify-content-center mb-3">
                      <MDBRadio
                        btn
                        btnColor="light"
                        id="btn-radio"
                        name="options"
                        wrapperTag="span"
                        label="S"
                      />
                      <MDBRadio
                        btn
                        btnColor="light"
                        id="btn-radio2"
                        name="options"
                        wrapperTag="span"
                        label="M"
                        defaultChecked
                      />
                      <MDBRadio
                        btn
                        btnColor="light"
                        id="btn-radio3"
                        name="options"
                        wrapperTag="span"
                        label="X"
                      />
                      <MDBRadio
                        btn
                        btnColor="light"
                        id="btn-radio4"
                        name="options"
                        wrapperTag="span"
                        label="XL"
                      />
                    </MDBBtnGroup>

                    <pre className="text-start">
                      <i class="fas fa-scissors"></i> Free Alterations at Store{" "}
                      <br />
                      <i class="fas fa-retweet"></i> 7 days return policy <br />
                      <i class="fas fa-money-check"></i> Easy with multiple
                      payment options
                    </pre>

                    <MDBBtn className="mx-2" color="dark" onClick={()=>addCart(clickedData)}>
                      <i class="fas fa-cart-shopping"></i> Add to cart
                    </MDBBtn>
                    <MDBBtn color="success">
                      <i class="fas fa-bag-shopping"></i> BUY NOW
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Allproducts;
