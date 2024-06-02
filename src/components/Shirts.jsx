import React, { useContext, useState } from "react";

import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBBtn,
  MDBRadio,
  MDBBtnGroup,
  MDBCarousel,
  MDBCarouselItem,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

import { passingProduct } from "./Main";

import shirt_banner from "./Images/shirt-banner.png";

const Shirts = () => {
  const [sample, setSample] = useState(false);
  const [clickedData, setClickedData] = useState(null);
  const [optSmModal, setOptSmModal] = useState(false);
  const toggleOpen = (Item) => {
    setClickedData(Item);
    setOptSmModal(!optSmModal);
  };

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const { product } = useContext(passingProduct);
  const filteredData1 = product.filter(
    (item) => item.type === "shirtFullsleeve"
  );
  const filteredData2 = product.filter(
    (item) => item.type === "shirtshortsleeve"
  );
  return (
    <>
      <br />
      <br />
      <img src={shirt_banner} className="img-fluid shadow-4" alt="..." />
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            FULL SLEEVES
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            SHORT SLEEVES
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={basicActive === "tab1"}>
          <div
            className="container-fluid d-flex align-items-center justify-content-center flex-wrap"
            style={{ gap: "10px" }}
          >
            {filteredData1.map((item) => (
              <>
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                    onClick={() => toggleOpen(item)}
                  >
                    <MDBCardImage
                      src={item.img}
                      fluid
                      alt="..."
                      width={"300px"}
                    />

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
                  </MDBCardBody>
                </MDBCard>
              </>
            ))}
          </div>
        </MDBTabsPane>
        <MDBTabsPane open={basicActive === "tab2"}>
          <div
            className="container-fluid d-flex align-items-center justify-content-center flex-wrap"
            style={{ gap: "10px" }}
          >
            {filteredData2.map((item) => (
              <>
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                    onClick={() => toggleOpen(item)}
                  >
                    <MDBCardImage
                      src={item.img}
                      fluid
                      alt="..."
                      width={"300px"}
                    />

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
                      {""}
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
                  </MDBCardBody>
                </MDBCard>
              </>
            ))}
          </div>
        </MDBTabsPane>
      </MDBTabsContent>

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

export default Shirts;
