import { Field, Form, FormikProvider, useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import { SweetAlertInfo } from "./CommonFiles/SweetAlerts";


export default function ContactUs() {
    const alertFunction = (flag) => {

        const Address = "Manipal Hospital Road, Tadepalli, Vijayawada";
        const Phone = "+91 8499007575";
        const Email = "ramasiva2022@gmail.com";
        const imgLink1 = "https://th.bing.com/th/id/OIP.fxKWPhbz4eoxXiCNVlhFNgAAAA?pid=ImgDet&rs=1";
        const imgLink2 = "https://th.bing.com/th/id/OIP.ZbZxdCrtalJVB3OIWp31MQHaHa?pid=ImgDet&rs=1";
        const imgLink3 = "https://www.pngkit.com/png/full/207-2072661_jpg-free-stock-location-clipart-office-address-orange.png";

        if (flag === 1) { SweetAlertInfo(imgLink1, "Call Us At", Phone) }
        else if (flag === 2) { SweetAlertInfo(imgLink2, "Email Us At", Email) }
        else if (flag === 3) { SweetAlertInfo(imgLink3, "Our Address Is", Address) }
        else { };
    };

    const btnstyle = {
        color: "white",
        backgroundColor: "#ff9100",
        border: "0px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",

    };

    const formik = useFormik({
        initialValues: {
            "name": '',
            "email": '',
            "message": '',
        }
    },
    )

    return (
        <>
            <FormikProvider value={formik}>
                <Form>
                    <Row className="my-5 ">
                        <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                            <Row className="container-fluid bg-white ">
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} align="center">
                                        <Row>
                                            <img src="https://img.freepik.com/free-vector/contact-concept-landing-page_52683-21298.jpg?w=826&t=st=1679310032~exp=1679310632~hmac=6ac586836a849da7655e973a284df505576e3b3b78bccba25a93484d0b828fd3"
                                                className='img-fluid img-thumbnail border-0 ' alt="mlogo" />
                                        </Row>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} >
                                        <Row className="mt-5 mb-2">
                                            <Col align="center"><span className="h4 text-muted">Message Us</span></Col>
                                        </Row>
                                        <Row >
                                            <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} align="center">

                                                <Row className="mt-3">

                                                    <Field type="input" name="name" className="form-control text-center shadow-sm" placeholder="First & Last Name" />

                                                </Row>
                                                <Row className="mt-3">

                                                    <Field type="email" name="email" className="form-control text-center shadow-sm" placeholder="Email Address" />

                                                </Row>
                                                <Row className="mt-3">

                                                    <Field as="textarea" rows={3} name="message" className="form-control text-center shadow-sm" placeholder="Message Here ....." />

                                                </Row>
                                                <Row className="mt-3">

                                                    <button type="submit" className="btn fw-bold" style={{ backgroundColor: "#ff9100", color: "white" }}><MdSend size={18} /> Send</button>

                                                </Row>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="p-3 m-3">
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} align="center">
                                        <div>
                                            <button type="button" style={btnstyle} onClick={() => alertFunction(1)}>
                                                <FaPhoneAlt size={31} />
                                            </button>
                                        </div>
                                        <div>
                                            <span className="fw-bold text-muted">Phone</span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} align="center">
                                        <div>
                                            <button type="button" style={btnstyle} onClick={() => alertFunction(2)}>
                                                <MdEmail size={32} />
                                            </button>
                                        </div>
                                        <div>
                                            <span className="fw-bold text-muted">Email</span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} align="center">
                                        <div>
                                            <button type="button" style={btnstyle} onClick={() => alertFunction(3)}>
                                                <FaMapMarkerAlt size={32} />
                                            </button>
                                        </div>
                                        <div>
                                            <span className="fw-bold text-muted">Address</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                    </Row>
                </Form>
            </FormikProvider>
        </>
    )
}