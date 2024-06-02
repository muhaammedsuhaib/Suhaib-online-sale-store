import React, { useContext, useRef, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge
} from "mdb-react-ui-kit";
// import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import toast from 'react-hot-toast';

import { passingProduct } from "./Main";

// import Swal from "sweetalert2";
// import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  
    const [openBasic, setOpenBasic] = useState(false);

  const { user, setUser, login, setLogin ,account, setAccount ,register, setRegister,auth,setAuth,paystate, setpaystate,addressstate, setAddressstate} = useContext(passingProduct);

  const payOpen = () => setpaystate(!paystate);
  
  const registerOpen = () => setRegister(!register);
  
  const loginOpen = () => setAccount(!account);

  // const [register, setRegister] = useState(false);
  // const [account, setAccount] = useState(false);
  

  const nav = useNavigate();
  const createRef = useRef();
  const loginRef = useRef();

  const addressOpen = () => setAddressstate(!addressstate);

  // create account functions
  const createHandle = (e) => {
    e.preventDefault();
    let Name = createRef.current.username.value;
    let Email = createRef.current.email.value;
    let Password = createRef.current.password.value;
    if (user.find((item) => item.userEmail === Email)) {
      toast('Already have Account , login continue...', {
        duration: 4000,
        position: 'top-center',
        // Custom style
        style: {
          background: '#000',
          color: '#fff',
        },
        // Custom icon
        icon: '🔐',
      });
    } else {
      setUser([
        ...user,
        { userName: Name, userEmail: Email, userPassword: Password, cart:[] ,wishlist:[],address:[],payment:[] },
      ]);
      // toast.dark(`Account created successfully for ${Email} ,Please login`);
      toast(`Account created successfully for ${Email} ,Please login`, {
        duration: 4000,
        position: 'top-center',
        // Custom style
        style: {
          background: '#000',
          color: '#fff',
        },
        // Custom icon
        icon: '🤝',
      });
    }
  };

  // login functions
  const loginHandle = (e) => {
    e.preventDefault();
    let Email = loginRef.current.email.value;
    let Password = loginRef.current.password.value;
    let dataUser = user.find((item) => item.userEmail === Email);
    if (dataUser && dataUser.userPassword === Password) {
      setLogin(dataUser);
      toast.success(`Welcome, ${dataUser.userName} !`)
      setTimeout(() => {
        setAccount(!account)
      }, 500);
    } else {
      // toast.warning(
      //   `Can't find account We can't find an account with .Try another email address,or if you don't have an Pet shope account,you can sign up TRY AGAIN `
      // );
      toast(`Can't find account We can't find an account with .Try another email address,or if you don't have an Pet shope account,you can sign up TRY AGAIN `, {
        duration: 4000,
        position: 'bottom-center',
        // Custom style
        style: {
          background: '#000',
          color: '#fff',
        },
        // Custom icon
        icon: '↻ ',
      });   
     
    }
  };

  const addressRef= useRef();
  const payRef= useRef();

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
  const payHandle = (e) => {
    e.preventDefault();
    let Name = payRef.current.userNumber.value;
    let cardNumber = payRef.current.pincode.value;
    let CVV =payRef.current.street.value;

    // login?.payment?.push({phone,pincode,street,city,state,country});
    setpaystate(!paystate);
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
    <>
      <MDBNavbar expand="lg" bgColor="black" fixed="top">
        <MDBContainer fluid>
          <MDBNavbarBrand
            href="#"
            className="text-white"
            onClick={() => nav("/")}
          >
            SUHAIB
          </MDBNavbarBrand>

          <MDBNavbarToggler
            className="text-white"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <input
              type="search"
              placeholder="Search "
              name=""
              id=""
              style={{
                width: "110px",
                height: "20px",
                paddingRight: "20px",
                borderRadius: "20px",
                border: "0",
              }}
            />
            <MDBIcon
              fas
              icon="user-alt"
              size="1x"
              style={{ paddingRight: "20px", paddingLeft: "20px" }}
              onClick={loginOpen}
            />
            <MDBIcon
              fas
              icon="shopping-cart"
              onClick={()=>nav('/cart')}
              size="1x"
              style={{ paddingRight: "20px" }}
            />
            <MDBIcon icon="bars" fas onClick={() => setOpenBasic(!openBasic)} />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-white"
                  onClick={() => nav("/all")}
                >
                  ALL
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-white"
                  onClick={() => nav("/shirts")}
                >
                  SHIRTS
                </MDBNavbarLink>
              </MDBNavbarItem>

              {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-white' role='button' onClick={()=>nav('/shirts')}>
                  SHIRTS
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link >FULL SLEEVE</MDBDropdownItem>
                  <MDBDropdownItem link>REGULAR FIT</MDBDropdownItem>
                  <MDBDropdownItem link>STRAIGHT FIT</MDBDropdownItem>
                  <MDBDropdownItem link>TAPERED FIT</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-white"
                  onClick={() => nav("/blazer")}
                >
                  BLAZERS
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-white"
                  onClick={() => nav("/jackets")}
                >
                  JACKETS
                </MDBNavbarLink>
              </MDBNavbarItem>

              {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-white' role='button' >
                  JEANS
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>SLIM FIT</MDBDropdownItem>
                  <MDBDropdownItem link>REGULAR FIT</MDBDropdownItem>
                  <MDBDropdownItem link>STRAIGHT FIT</MDBDropdownItem>
                  <MDBDropdownItem link>TAPERED FIT</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>              
                <MDBDropdownToggle tag='a' className='nav-link text-white' role='button'>
                  T-SHIRTS
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>CREW NECK</MDBDropdownItem>
                  <MDBDropdownItem link>HENLEY</MDBDropdownItem>
                  <MDBDropdownItem link>POLO</MDBDropdownItem>
                  <MDBDropdownItem link>V NECK</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-white' role='button'>
                  OFFICEWEAR
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem link>BOTTOMWEAR</MDBDropdownItem>
                  <MDBDropdownItem link>SHIRTS</MDBDropdownItem>
                  <MDBDropdownItem link>TAILORING</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}
            </MDBNavbarNav>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            {/* wishlist  */}

            {!login ?<MDBIcon
              className="p-2"
              fas
              icon= "heart"
              size="2x"
              onClick={ loginOpen }
            />:<div
            className=' position-relative mx-2 text-end'
          >
            <MDBIcon
                className="p-0"
                fas icon="heart"  
                size="2x"
                onClick={()=>nav('/wishlist')}
              />
            <MDBBadge pill color='danger' className='position-absolute top-0 start-100 translate-middle'>
              {login?.wishlist?.length} <span className='visually-hidden'>unread messages</span>
            </MDBBadge>
          </div>} 

          {/* CART          */}
            {!login ?<MDBIcon
              className="p-2"
              fas
              icon= "shopping-cart"
              size="2x"
              onClick={ loginOpen }
            />:<div
            className=' position-relative mx-2 text-end'
          >
            <MDBIcon
                className="p-0"
                fas icon="shopping-cart"  
                size="2x"
                onClick={()=>nav('/cart')}
              />
            <MDBBadge pill color='danger' className='position-absolute top-0 start-100 translate-middle'>
              {login?.cart?.length} <span className='visually-hidden'>unread messages</span>
            </MDBBadge>
          </div>}         
            {!login ?<MDBIcon
              className="p-2"
              fas
              icon= "user-alt-slash"
              size="2x"
              onClick={ loginOpen }
            />:<MDBIcon
            className="p-2"
            fas
            icon="user-alt " 
            size="2x"
            onClick={()=> nav('/profil')}
          />}         
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      {/* Login */}
      <MDBModal
        staticBackdrop
        tabIndex="-1"
        open={account}
        setOpen={setAccount}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className="bg-dark text-white">
              <MDBModalTitle>Please Login</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={loginOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={loginHandle} ref={loginRef}>
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                />
                <MDBBtn rounded className="mx-2" color="dark" type="submit">
                  Login
                </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                rounded
                className="mx-2"
                color="dark"
                onClick={registerOpen}
              >
                Create new account
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal
        animationDirection="right"
        open={register}
        tabIndex="-1"
        setOpen={setRegister}
      >
        {/* create acount */}

        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-dark text-white">
              <MDBModalTitle>Create new account</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={registerOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={createHandle} ref={createRef}>
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Name"
                  type="text"
                  name="username"
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                />
                <MDBBtn rounded className="mx-2" color="dark" type="submit">
                  Registration
                </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn rounded color="dark" onClick={registerOpen}>
                Login
              </MDBBtn>
              {/* <MDBBtn outline color='info' >
          Close
        </MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      {/* payment */}

      <MDBModal
        animationDirection="right"
        open={paystate}
        tabIndex="-1"
        setOpen={setpaystate}
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-dark text-white">
              <MDBModalTitle>Add your Bank Details</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={payOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={payHandle} ref={payRef}>
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




      <MDBModal
        animationDirection="right"
        open={paystate}
        tabIndex="-1"
        setOpen={setpaystate}
      >
        {/* add address */}

        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-dark text-white">
              <MDBModalTitle>Add your address</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={payOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={payHandle} ref={payRef}>
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
      {/* <ToastContainer /> */}
    </>
  );
}
