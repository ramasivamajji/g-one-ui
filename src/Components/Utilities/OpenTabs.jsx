import { Field, Form, FormikProvider, useFormik } from "formik";
import { Col, FormGroup, FormLabel, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { MdOutlineOpenInNew, MdMotionPhotosAuto } from "react-icons/md";
import { DiBingSmall } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { GiAutoRepair, GiInfo } from "react-icons/gi";
import { useState } from "react";

export default function OpenTabs() {
    const openTabs = () => {

        let searchEngineUrl = (formik.values.searchEngine === "bing" ? "https://www.bing.com/search?q=" : "https://www.google.com/search?q=");
        let num = parseInt(formik.values.startNum) - 1;
        if (formik.values.modes === "auto") {

            for (let i = 1; i <= formik.values.tabsCount; i++) {

                setTimeout(() => {
                    num = num + 1;
                    window.open(searchEngineUrl + num, '_blank');

                }, i * (formik.values.timeDelay * 1000));

            }
        }
        else {
            let tab_count = localStorage.getItem("tab_count");
            if (!tab_count) {
                tab_count = 0;
            }
            const newValue = parseInt(tab_count) + 1;
            localStorage.setItem("tab_count", newValue);
            window.open(searchEngineUrl + newValue, '_blank');
        }

    };

    let stockImageUrl =
        "https://img.freepik.com/premium-vector/review-quality-control-expertise-text-research-content-online-phone_212005-505.jpg?w=740";


    const btnstyle = {
        backgroundColor: "white",
        border: "0px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    let formik = useFormik({
        initialValues: {
            tabsCount: '',
            searchEngine: 'bing',
            timeDelay: '',
            modes: 'manual',
            startNum: ''
        },
        onSubmit: openTabs
    });

    const [mode, setMode] = useState('manual');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleModeChange = (val) => {
        setMode(val);
        formik.setFieldValue("modes", val);

        if (val === "manual") {
            formik.setFieldValue("tabsCount", '1');
            formik.setFieldValue("timeDelay", '0');
            formik.setFieldValue("startNum", 50);
            localStorage.setItem("tab_count", 50);
            setIsReadOnly(true);

        }
        else if (val === "auto") {
            formik.setFieldValue("tabsCount", '');
            formik.setFieldValue("timeDelay", '');
            formik.setFieldValue("startNum", 1)
            setIsReadOnly(false);
        }
    }

    function setStartNumLocal(e) {
        localStorage.setItem("tab_count", e.target.value);
    }

    return (
        <>
            <FormikProvider value={formik}>
                <Form>
                    <Row className="my-5 ">
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
                            <Row className="container-fluid bg-white shadow-lg rounded">
                                <Row>

                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} >
                                        <Row className="mt-5 mb-2">
                                            <Col align="center"><span className="h4 text-muted fw-bold">MULTIPLE TABS OPENER</span></Col>
                                        </Row>
                                        <Row className="mt-3 mb-2">
                                            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>


                                                <ul className="list-unstyled">
                                                    <li className="d-flex align-items-center"><GiInfo className="me-2 text-primary" /> For Auto Mode, Allow Popups In Browser Settings.</li>
                                                    <li className="d-flex align-items-center"><GiInfo className="me-2 text-primary" /> Manual Mode Is Specially Designed For Mobiles.</li>

                                                </ul>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                                        </Row>
                                        <Row >
                                            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                                            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} >
                                                <Row>

                                                    <ToggleButtonGroup type="radio" name="modes" value={mode}>
                                                        <ToggleButton variant="outline-primary" value="auto" onClick={() => { handleModeChange("auto") }}><MdMotionPhotosAuto size={22} /> Auto</ToggleButton>
                                                        <ToggleButton variant="outline-primary" value="manual" onClick={() => { handleModeChange("manual") }} ><GiAutoRepair size={20} /> Manual</ToggleButton>
                                                    </ToggleButtonGroup>

                                                </Row>
                                                <Row className="mt-3">
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}><Field type="radio" name="searchEngine" value="bing" /></Col>
                                                    <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}><div className="shadow" style={btnstyle}><DiBingSmall size={32} className="text-primary" /></div></Col>
                                                    <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}><Field type="radio" name="searchEngine" value="google" /></Col>
                                                    <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}><div className="shadow" style={btnstyle}><FcGoogle size={25} /></div></Col>
                                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                                                </Row>
                                                {formik.values.modes === "auto" && <Row className="mt-3">

                                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <FormGroup className="form-group">
                                                            <FormLabel className="fw-bold">NUMBER OF TABS</FormLabel>
                                                            <Field type="number" name="tabsCount" className="form-control text-center shadow-sm" readOnly={isReadOnly} />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <FormGroup className="form-group">
                                                            <FormLabel className="fw-bold">TIME DELAY (In Sec)</FormLabel>
                                                            <Field type="number" name="timeDelay" className="form-control text-center shadow-sm" readOnly={isReadOnly} />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>}
                                                <Row className="mt-3 ">
                                                    <FormGroup className="form-group">
                                                        <FormLabel className="fw-bold">Starting With (number) </FormLabel>
                                                        <Field type="number" name="startNum" onBlur={(e) => { setStartNumLocal(e) }} className="form-control text-center shadow-sm" />
                                                    </FormGroup>
                                                </Row>
                                                {formik.values.modes === "manual" && <Row className="mt-3" align='center'>
                                                    <div className="d-flex justify-content-center align-items-center text-primary fw-bold">
                                                        <div className="shadow " style={btnstyle}>{localStorage.getItem("tab_count")}</div>
                                                    </div>
                                                </Row>}
                                                <Row className="mt-3 ">

                                                    <button type="submit" className="btn btn-primary fw-bold "><MdOutlineOpenInNew size={22} /> OPEN TABS</button>

                                                </Row>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} align="center">
                                        <Row>
                                            <img src={stockImageUrl} className='img-fluid img-thumbnail border-0 ' alt="mlogo" />
                                        </Row>
                                    </Col>
                                </Row>

                            </Row>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
                    </Row>
                </Form>
            </FormikProvider>
        </>
    )
}