import axios from "axios";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Fade, InputGroup, Row } from "react-bootstrap";
import { FcAddDatabase, FcSearch } from "react-icons/fc";
import { TbVaccineBottle, TbCalendarStats, TbBuildingBank, TbBoxMultiple, TbBoxMultiple1, TbBoxMultiple2, TbArrowRight } from "react-icons/tb";
import { GiBottledBolt } from "react-icons/gi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { SweetAlertGeneral } from "../CommonFiles/SweetAlerts";


export default function VaccineAvailability() {

    const [open, setOpen] = useState(false);

    const addressAlert = (data) => {
        const title = data.name;
        const address = data.address + ", " + data.block_name + ", " + data.district_name + ", " + data.state_name + " - " + data.pincode;
        console.log(title);
        console.log(address);

        SweetAlertGeneral(title, address, "info")
    }

    const formik = useFormik({
        initialValues: {
            "state": '',
            "district": '',
            "mandal": '',
            "appointmentDate": '',
            "pincode": '',
        }
    });

    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [vaccineData, setVaccineData] = useState('');



    const getStates = () => {
        let url = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
        setOpen(false);
        axios.get(url).then(res => {
            setStates(res.data.states);
        })
    }

    const getDistricts = (e) => {
        let url = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" + e.target.value;
        setOpen(false);
        axios.get(url).then(res => {
            setDistricts(res.data.districts);
        })
    }

    const getVaccineAvailability = () => {
        let currentDate = new Date();
        let currDdMmYyyy = (String(currentDate.getDate()).padStart(2, '0') + '-' + String(currentDate.getMonth() + 1).padStart(2, '0') + '-' + currentDate.getFullYear())
        let url = "https://cdn-api.co-vin.in/api/v4/appointment/sessions/public/calendarByDistrict?district_id=" + formik.values.district + "&date=" + currDdMmYyyy
        setOpen(false);
        axios.get(url).then(res => {
            setVaccineData(res.data.centers);
            setOpen(true);
        })
    }

    useEffect(() => { getStates(); }, []);


    return (<>
        <FormikProvider value={formik}>
            <Form >

                <Row className="my-4">
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <Row className="mb-3">
                            <Col>
                                <h4 className="h-blue">VACCINE APPOINTMENT AVAILABILITY</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                <InputGroup >
                                    <InputGroup.Text><FcAddDatabase style={{ fontSize: '1.3em' }} /></InputGroup.Text>
                                    <Field as="select" name="state" className="form-select" onInput={(e) => { getDistricts(e) }} >
                                        <option value="" >Select State</option>
                                        {states && states.map((st, i) => {
                                            return <React.Fragment key={i}>
                                                <option key={st.state_id} value={st.state_id} >{st.state_name}</option>
                                            </React.Fragment>
                                        })}
                                    </Field>
                                    <ErrorMessage name="state" component="div" className="text-error" />
                                </InputGroup>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                <InputGroup >
                                    <InputGroup.Text ><FcAddDatabase style={{ fontSize: '1.3em' }} /></InputGroup.Text>
                                    <Field as="select" name="district" className="form-select" >
                                        {/* onInput={getDistricts(formik.values.district)} */}
                                        <option value="" >Select District</option>
                                        {districts && districts.map((dt, i) => {
                                            return <React.Fragment key={i}>
                                                <option key={dt.district_id} value={dt.district_id} >{dt.district_name}</option>
                                            </React.Fragment>
                                        })}
                                    </Field>
                                    <ErrorMessage name="district" component="div" className="text-error" />
                                </InputGroup>
                            </Col>

                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                <button type="button" className="btn form-control" style={{ backgroundColor: "#ff9100", color: "white" }} onClick={getVaccineAvailability}><FcSearch style={{ fontSize: '1.3em' }} /> Search</button>
                            </Col>
                        </Row>
                        <Fade in={open}>
                            <Row>
                                {vaccineData.length > 0 ? <>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="my-4">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '20vw' }}><TbBuildingBank className="icon-clasic" /> ADDRESS</th>
                                                    <th style={{ width: '20vw' }}><TbCalendarStats className="icon-clasic" /> DATE</th>
                                                    <th style={{ width: '20vw' }}><TbVaccineBottle className="icon-clasic" /> VACCINE</th>
                                                    <th style={{ width: '15vw' }}><TbBoxMultiple className="icon-clasic" /> TOTAL</th>
                                                    <th style={{ width: '15vw' }}><TbBoxMultiple1 className="icon-clasic" /> DOSE-1</th>
                                                    <th style={{ width: '15vw' }}><TbBoxMultiple2 className="icon-clasic" /> DOSE-2</th>
                                                    <th style={{ width: '15vw' }}><GiBottledBolt className="icon-clasic" /> BOOSTER</th>
                                                    {/* < className="icon-clasic"/> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {vaccineData.map((centers, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            {centers.sessions && centers.sessions.map((sessions, index) => {
                                                                return (
                                                                    <React.Fragment key={index}>
                                                                        <tr>
                                                                            <td>
                                                                                <div>{centers.name}</div>
                                                                                <div>{centers.block_name}</div>
                                                                                <div className="text-muted">{"Min Age: " + sessions.min_age_limit + "+"}</div>
                                                                                <div><TbArrowRight /><span onClick={() => addressAlert(centers)} className="text-decoration-underline font-monospace text-danger p-1 rounded-circle"><HiOutlineMapPin />view</span></div>
                                                                            </td>
                                                                            <td>{sessions.date}</td>
                                                                            <td>
                                                                                <div className="bg-info text-light rounded-pill">{sessions.vaccine}</div>
                                                                                <div className="text-muted">
                                                                                    <span >{centers.fee_type}</span> &nbsp;
                                                                                    <span >{centers.vaccine_fees.filter((fees) => fees.vaccine === sessions.vaccine)[0].fee}</span>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                {sessions.available_capacity > 0 ? <span className="bg-success text-light p-2 rounded-circle">{sessions.available_capacity}</span> : <span className="text-muted">n/a</span>}
                                                                            </td>
                                                                            <td>
                                                                                {sessions.available_capacity_dose1 > 0 ? <span className="bg-success text-light p-2 rounded-circle">{sessions.available_capacity_dose1}</span> : <span className="text-muted">n/a</span>}
                                                                            </td>
                                                                            <td>
                                                                                {sessions.available_capacity_dose2 > 0 ? <span className="bg-success text-light p-2 rounded-circle">{sessions.available_capacity_dose2}</span> : <span className="text-muted">n/a</span>}
                                                                            </td>
                                                                            <td>
                                                                                {sessions.precaution_online_dose_one_available > 0 ? <span className="bg-success text-light p-2 rounded-circle">{sessions.precaution_online_dose_one_available}</span> : <span className="text-muted">n/a</span>}
                                                                            </td>
                                                                        </tr>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </tbody>

                                        </table>
                                    </Col>
                                </> : <>
                                    <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}></Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <span className="text-center">
                                            <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1679625784~exp=1679626384~hmac=daa388c86f549b8946a68d65d0e4fe1461bf9c4a4e60bd61877fd268dcacf734" className="img-fluid" alt="No Data Found !" />
                                        </span>
                                    </Col></>}
                            </Row>
                        </Fade>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                </Row>
            </Form>
        </FormikProvider>

    </>)
}