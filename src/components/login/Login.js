import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Spinner,
  Image
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../config/config";
import './Login.css';

export default function Login() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const [userConfirmPassword, setUserConfirmPassword] = useState("");

  const [isLoding, setIsLoding] = useState(false);

  const login = () => {
    setIsLoding(true);

    if (/* firstName === "" || lastName === "" ||*/ userEmail === "" || userPassword === "" ) {
      setIsLoding(false);
      toast.error("Please fill the all informations.");
      return;
    }

    const data = {
      // firstName: firstName,
      // lastName: lastName,
      email: userEmail,
      password: userPassword,
    };

    axios
      .post(SERVER_URL + "/auth/login", data)
      .then((res) => {
        if (res.data.status) {
          setTimeout(() => {
            setIsLoding(false);
            toast.success(res.data.message);
          }, 2000);
        } else {
          setIsLoding(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Failed to Login!")
        console.log(err);
      });
  };

  return(
    <div className="register-page overflow-hidden">
      <Row>
        <Col
          lg={6}
          md={6}
          // sm={6}
          style={{
            backgroundImage: `url("/assets/images/bg.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="main-form-content d-flex align-items-center justify-content-center"
        >
          <Container className="col-md-8 col-lg-8 col-sm-10">
            <Form>
              <div className="fs-1 fw-bold text-center text-white" onClick={()=>login()}>
                Log in to Ybalah Guide!
              </div>
              <div className="fs-5-2 text-center text-white mt-1 account-login">
                No account yet?
                <Link to="/register" className="nav-link d-inline-block fw-bold text-white">
                  Create an account
                </Link>
              </div>
              {/* <Row>
                <Form.Group as={Col} md="6" sm="12" className="pe-1" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="py-4 ps-4 mt-3 input-box"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" sm="12" className="ps-1" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="py-4 ps-4 mt-3 input-box"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row> */}
              <Row className="mt-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    value={userEmail}
                    className="py-4 ps-4 input-box"
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group controlId="validationCustom01">
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    className="py-4 ps-4 input-box"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mt-3 d-flex mb-5 justify-content-center align-items-center">
                <Col lg={12} md={12} sm={12}>
                  {isLoding ? (
                    <Button className="w-100 p-3 bg-primary-2 border border-0" disabled>
                      <Spinner animation="grow" />
                    </Button>
                  ) : (
                    <Button className="create-account w-100 d-flex bg-white align-items-center justify-content-center text-primary-1 border border-0 fw-bold border-none" onClick={()=>{login()}}>
                      <div className='my-2'>Login with Email</div>
                      <Image className="ms-3" src="/assets/images/mail.svg"/>
                    </Button>
                  )}
                </Col>
              </Row>
              <div className="fs-6 text-center text-white mb-3">or Login with</div>
              <Row className="justify-content-center">
                <Button className="social-btn bg-white h-50 border border-0 align-items-center px-4 py-3">
                  <Image src="/assets/images/go.svg" width="50"/>
                </Button>
                <Button className="social-btn bg-white h-50 border border-0 align-items-center px-4 py-3">
                  <Image src="/assets/images/fc.svg" width="50"/>
                </Button>
              </Row>
              <div className="fs-6 text-center text-white mt-4">
                By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement
              </div>
            </Form>
          </Container>
        </Col>
        <Col
          lg={6}
          md={6}
          className="d-md-flex align-items-center justify-content-center media-section-right"
          style={{
            backgroundImage: `url("/assets/images/bg1.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Image src="/assets/images/logo.svg"/>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}