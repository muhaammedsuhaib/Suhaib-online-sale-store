import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTable, MDBTableHead, MDBTableBody,
    MDBTypography,
    MDBListGroup
    } from "mdb-react-ui-kit";
    import {
      MDBCardText,
      MDBBreadcrumb,
      MDBBreadcrumbItem,
      MDBProgress,
      MDBProgressBar,
      MDBListGroupItem
    } from 'mdb-react-ui-kit';
    import {
      MDBCardTitle,
      MDBRipple
    } from 'mdb-react-ui-kit';
    import React, { useContext, useState } from "react";
import { passingProduct } from "./Main";
    
    export default function Cart() {
    
     

    const {login,auth,setAuth}=useContext(passingProduct);
    
    const iscartEmpty = login?.cart?.length === 0;

    const removeCart=(ritem)=>{
      let filterData=login.cart.filter((items)=>items.id !== ritem.id )
      login.cart=filterData
      setAuth(!auth);
    }
    return (
    // <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    //   {login?.cart?.map((item)=>(
    //   <MDBContainer className="py-5 h-100">
    //     <MDBRow className="justify-content-center align-items-center h-100">
    //       <MDBCol>
    //         <MDBCard>
    //           <MDBCardBody className="p-4">
    //             <MDBRow>
    //               <MDBCol lg="12"> 
    //                 <MDBCard className="mb-3">
    //                   <MDBCardBody>
    //                     <div className="d-flex justify-content-between">
    //                       <div className="d-flex flex-row align-items-center">
    //                         <div>
    //                           <MDBCardImage
    //                             src={item.img}
    //                             fluid className="rounded-3" style={{ width: "150px" }}
    //                             alt="Shopping item" />
    //                         </div>
    //                         <div className="ms-3">
    //                           <MDBTypography tag="h5">
    //                             {item.ProductName}
    //                           </MDBTypography>
    //                           <p className="small mb-0">1TB, Graphite</p>
    //                         </div>
    //                       </div>
    //                       <div className="d-flex flex-row align-items-center">
    //                         <div style={{ width: "50px" }}>
    //                           <MDBTypography tag="h5" className="fw-normal mb-0">
    //                             1
    //                           </MDBTypography>
    //                         </div>
    //                         <div style={{ width: "80px" }}>
    //                           <MDBTypography tag="h5" className="mb-0">
    //                             $1799
    //                           </MDBTypography>
    //                         </div>
    //                         <a href="#!" style={{ color: "#cecece" }}>
    //                           <MDBIcon fas icon="trash-alt" />
    //                         </a>
    //                       </div>
    //                     </div>
    //                   </MDBCardBody>
    //                 </MDBCard>
    //               </MDBCol>
    
                  
    //             </MDBRow>
    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   ))}
    // </section>
    <>
     <section>
      <MDBContainer className="py-5 mt-4">

        {iscartEmpty &&<>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem active>Hi {login.userName}! Your cart is empty. Add items.</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>        
        </>}

        <MDBRow>
          <MDBCol lg="7">
            {login?.cart?.map((item)=>(
              <>
            <MDBCard className="mb-1 text-white" style={{background:'#282829'}}>
              <MDBCardBody >
              <div className="container">
                <div className="row">
                <div className="col-3">
                <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage src={item.img} fluid alt="..." width={"100%"} />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                >
                  <MDBCardImage src={item.img1} fluid alt="..."/>
                </div>
              </MDBRipple>
                </div>
                <div className="col-9">    
                <p className="text-end" onClick={()=>removeCart(item)}>
                  <MDBIcon fas icon="trash" />
                  </p>              
                  <h6>{item.ProductName}</h6>
                  <pre>Quantity: {item.quantity}</pre>
                  <pre>₹{item.price*item.quantity}</pre>
                  <MDBBtn color="success" rounded outline>BUY</MDBBtn>
                </div>
              </div>
              </div>
              </MDBCardBody>
            </MDBCard>
              
              </>
            ))}

           
          </MDBCol>
          <MDBCol lg="5">
            <MDBCard className="mb-0">
              <MDBCardBody>
              <h6 className="mt-2 mb-1 text-primary text-uppercase">Payment Details  </h6>
            <hr />             
            <p>Hello! {login?.userName}, kindly share your payment information.</p>
            <MDBBtn block size="sm" className="mt-1 mb-3" color="primary" rounded>
              Add Bank account
              </MDBBtn>
            {!iscartEmpty&&
            <div className="container">
            <MDBTable small>
            <MDBTableHead>
                    <tr>
                  <th scope='col'>No</th>
                  <th scope='col'>Product</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {login?.cart?.map((item,index)=>(
                  <>    
                <tr key={index}>
                  <th scope='row'>{index+1}</th>
                  <td className="text-break">{item.ProductName}</td>
                  <td className="text-break text-center">{item.quantity}</td>
                  <td className="text-break">₹{item.price}</td>
                </tr>
                  </>
                ))}      
                </MDBTableBody>
        
            </MDBTable>
            <MDBBtn block size="sm" className="mt-3" color="dark" rounded>
                Total amount: ₹ <span className="text-warning" style={{fontSize:"15px"}}> {login?.cart?.reduce((acc,curr)=>acc+=curr.price*curr.quantity,0)}</span> 
              </MDBBtn>
            </div>
            }          
              
             
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

      {/* <div className="mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <img src="https://i.imgur.com/qHX7vY1.webp" alt=".." width={"70px"}/>
                  <div className="d-flex flex-column ms-3">
                    <span className="h5 mb-1">Credit Card</span>
                    <span className="small text-muted">
                      2344 XXXX XXXX 8880
                    </span>
                  </div>
                </div>
               
              </div> */}

               
{/* <MDBInput
                label="Email address"
                id="form3"
                size="lg"
                type="email"
              /> */}
    </>
    );
    }

    