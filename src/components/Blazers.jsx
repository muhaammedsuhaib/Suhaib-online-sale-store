import React, { useContext, useState } from "react";
import { passingProduct } from "./Main";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBBtn,
  MDBModalBody,
  MDBRadio,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

const Blazers = () => {
  const [sample, setSample] = useState(false);
  const { product } = useContext(passingProduct);
  const filteredData = product.filter((item) => item.type === "blazer");
  const [clickedData, setClickedData] = useState(null);
  const [optSmModal, setOptSmModal] = useState(false);
  const toggleOpen = (Item) => {
    setClickedData(Item);
    setOptSmModal(!optSmModal);
  };

  return (
    <>
      {" "}
      <br />
      <br />
      <img
        src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/sl_blazer_clp_web_19022024.webp"
        className="img-fluid shadow-4 mb-2"
        alt="..."
      />
      <div
        className="container-fluid d-flex align-items-center justify-content-center flex-wrap"
        style={{ gap: "10px" }}
      >
        {filteredData.map((item) => (
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
                      onClick={() => setSample(!sample ? true : false)}
                    ></i>
                  ) : (
                    <i
                      class="fas fa-heart fa-2x text-black"
                      onClick={() => setSample(!sample ? true : false)}
                    ></i>
                  )}
                </MDBBtn>
                {/* <MDBBtn className="col-10 p-0 bg-black" color="tertiary" onClick={()=>toggleOpen()} >  view product</MDBBtn>*/}
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
                            onClick={() => setSample(!sample ? true : false)}
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

                    <MDBBtn className="mx-2" color="dark">
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

export default Blazers;
