import React, { useContext, useRef, useState } from 'react'
import { passingProduct } from './Main';
import toast from 'react-hot-toast';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Profil = () => {

    const { user, setUser, login, setLogin ,paystate, setpaystate,addressstate, setAddressstate} = useContext(passingProduct);
    
    const isAddressEmpty = login?.address?.length === 0;
    const isPaymentEmpty = login?.payment?.length === 0;



    const addressOpen = () => setAddressstate(!addressstate);
    const payOpen = () => setpaystate(!paystate);

    const [render,setRender]=useState(true);
    
    // const addaddress=()=>{
    //   login?.address?.push(['sss']) ;
    //   setRender(!render?true:false)
    // }
      
    const addressRef= useRef();
    const addressHandle = (e) => {
      e.preventDefault();
      let phone = addressRef.current.userNumber.value;
      let pincode = addressRef.current.pincode.value;
      let street =addressRef.current.street.value;
      let city =addressRef.current.city.value;
      let state =addressRef.current.state.value;
      let country =addressRef.current.country.value;

      login?.address?.push({phone,pincode,street,city,state,country});
      setAddressstate(!addressstate);
//       setRender(!render?true:false)
    //   if (user.find((item) => item.userEmail === Email)) {
    //     toast('Already have Account , login continue...', {
    //       duration: 4000,
    //       position: 'top-center',
    //       // Custom style
    //       style: {
    //         background: '#000',
    //         color: '#fff',
    //       },
    //       // Custom icon
    //       icon: '🔐',
    //     });
    //   } else {
    //     setUser([
    //       ...user,
    //       { userName: Name, userEmail: Email, userPassword: Password, cart: [] ,wishlist:[],address:[] },
    //     ]);
    //     // toast.dark(`Account created successfully for ${Email} ,Please login`);
    //     toast(`Account created successfully for ${Email} ,Please login`, {
    //       duration: 4000,
    //       position: 'top-center',
    //       // Custom style
    //       style: {
    //         background: '#000',
    //         color: '#fff',
    //       },
    //       // Custom icon
    //       icon: '🤝',
    //     });
    //   }
    // };
    }
  return (
    <div>
       <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5 mt-4">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-2">
              <MDBCardBody className="text-center">
              <MDBIcon fas icon="user-circle" size='6x'/>
                <p className="text-muted mt-2 mb-1">{login?.userName}</p>                
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">                  
                  <MDBIcon fas icon="user-circle fa-xl" />
                  <MDBBtn color='tertiary' rippleColor='light'>Account settings</MDBBtn>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="truck fa-xl" />
                  <MDBBtn color='tertiary' rippleColor='light'>MY ORDERS</MDBBtn>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="shopping-cart fa-xl" />
                  <MDBBtn color='tertiary' rippleColor='light'>MY CART</MDBBtn>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fab icon="gratipay fa-xl" />
                  <MDBBtn color='tertiary' rippleColor='light'>MY wishlist</MDBBtn>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="sign-out-alt fa-xl" />
                  <MDBBtn color='tertiary' className='text-danger' rippleColor='light'>Log out </MDBBtn>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <MDBIcon fas icon="user-plus fa-xl" />
                  <MDBBtn color='tertiary' rippleColor='light'>Add new account </MDBBtn>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-2">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{login?.userName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{login?.userEmail}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                {!isAddressEmpty ? (
        <div>{login?.address.map((item)=>(<> 
          <div>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{`${item.street}, ${item.city}, ${item.state}, ${item.pincode}, ${item.country}`}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                {/* <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Street</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.street}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.city}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>State</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.state}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Country</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.country}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr /> */}
                <MDBRow>
                  <MDBCol className='text-end' sm="12">
                    <MDBBtn rounded color='dark' ><MDBIcon far icon="edit"  /> edit address</MDBBtn>                  
                  </MDBCol>
                </MDBRow>
                </div>       
        </>))}       
        </div>
      ) : (
        <>
         <MDBRow>
                  <MDBCol sm="3">                    
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"><MDBBtn onClick={addressOpen} rounded color='dark' >Add Address</MDBBtn></MDBCardText>
                  </MDBCol>
                </MDBRow>
        </>
      )}
               
              </MDBCardBody>
            </MDBCard>

            {/* Payment */}

            <MDBCard className="mb-2">
              <MDBCardBody>
              <MDBCol sm="12 text-center">
                  <h6 className="mt-2 mb-1 text-primary text-uppercase">Payment Details  </h6>
                  <hr />
                  </MDBCol>
                {!isPaymentEmpty ? (
        <div>{login?.payment?.map((item)=>(<> 
          <div>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{`${item.street}, ${item.city}, ${item.state}, ${item.pincode}, ${item.country}`}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                {/* <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Street</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.street}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.city}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>State</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.state}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Country</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.country}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr /> */}
                <MDBRow>
                  <MDBCol className='text-end' sm="12">
                    <MDBBtn rounded color='link' ><MDBIcon far icon="edit"  /> Edit Bank details </MDBBtn>                  
                  </MDBCol>
                </MDBRow>
                </div>       
        </>))}       
        </div>
      ) : (
        <>
        <MDBRow>                
                  <MDBCol sm="12 text-center">
                  <p>Hello! {login?.userName}, kindly furnish your bank details.</p>
            <MDBBtn  size="sm" className="mt-1 mb-3" color="primary" rounded onClick={payOpen}>
              Add Bank account
              </MDBBtn>
                  </MDBCol>
                </MDBRow>
        </>
      )}
               
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    
    <MDBModal
        animationDirection="right"
        open={addressstate}
        tabIndex="-1"
        setOpen={setAddressstate}
      >
        {/* add address */}

        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-dark text-white">
              <MDBModalTitle>Add your address</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={addressOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={addressHandle} ref={addressRef}>
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Phone Number"
                  type="number"
                  name="userNumber"
                />                               
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Street"
                  type="text"
                  name="street"
                />               
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="City"
                  type="text"
                  name="city"
                />               
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="State"
                  type="text"
                  name="state"
                /> 
                 <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Pincode"
                  type="number"
                  name="pincode"
                />              
                 <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Country"
                  type="text"
                  name="country"
                />              
                <MDBBtn rounded className="mx-2" color="dark" type="submit">
                Submit
                </MDBBtn>
              </form>
            </MDBModalBody>            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

   {/* payment  */}

       
    </div>
  )
}

export default Profil
