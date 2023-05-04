import axios from "axios"
import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import '../App.css';

export default function S1() {
    const [vaccineData, setVaccineData] = useState('');
    function getData() {
        // axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=5&date=09-03-2023").then(res =>{
        //     console.log(res.data);
        //     setVaccineData(res.data);
        //})
    }

    const dates = [];
    const datesIN = [];
    const today = new Date();
    // const currentDate = String(today.getDate()).padStart(2, '0') + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + today.getFullYear();

    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    for (let i = 0; i <= 4; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        dates.push(nextDate.toLocaleDateString('en-IN', options));
        datesIN.push((String(nextDate.getDate()).padStart(2, '0') + '-' + String(nextDate.getMonth() + 1).padStart(2, '0') + '-' + nextDate.getFullYear()))
    }

    console.log(dates);
    console.log(datesIN);

    useEffect(() => { getData(); }, [])

    return (
        <>
            <br />
            <br />
            <Row>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Details</th>
                                {dates && dates.map((d, i) => {
                                    return <React.Fragment key={i}>
                                        <th>{d}</th>
                                    </React.Fragment>

                                })}

                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td>
                                    <div>Hsp Name</div>
                                    <div>Hsp address</div>
                                </td>
                                <td>44</td>
                                <td>23</td>
                                <td>35</td>
                                <td>77</td>
                                <td>46</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>Hsp Name</div>
                                    <div>Hsp address</div>
                                </td>
                                <td>44</td>
                                <td>23</td>
                                <td>35</td>
                                <td>77</td>
                                <td>46</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>

            {/* <section class="main-content">
        <div class="container">
            <h1>Appointment Table UI</h1>
            <br/>
            <br/>

            <table class="table">
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Status</th>
                        <th>Appointment</th>
                        <th>Phone</th>
                        <th>Doctor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="user-info">
                                <div class="user-info__img">
                                    <img src="clasm.png" alt="User Img" />
                                </div>
                                <div class="user-info__basic">
                                    <h5 class="mb-0">Kiran Acharya</h5>
                                    <p class="text-muted mb-0">28 yrs, Male</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="btn btn-success">Consult</span>
                        </td>
                        <td>
                            <h6 class="mb-0">06:00 PM</h6>
                            <small>2 Feb 2021</small>
                        </td>
                        <td>
                            <h6 class="mb-0">+91 9876543215</h6>
                            <a href="#!"><small>Contact</small></a>
                        </td>
                        <td>
                            <h6 class="mb-0">Dr. Ananth</h6>
                        </td>
                        <td>
                            <div class="dropdown open">
                                <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            <i class="fa fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="triggerId1">
                                    <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                                    <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="user-info">
                                <div class="user-info__img">
                                    <img src="clasm.png" alt="User Img" />
                                </div>
                                <div class="user-info__basic">
                                    <h5 class="mb-0">Kiran Acharya</h5>
                                    <p class="text-muted mb-0">28 yrs, Male</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="btn btn-primary">Revisit</span>
                        </td>
                        <td>
                            <h6 class="mb-0">06:00 PM</h6>
                            <small>2 Feb 2021</small>
                        </td>
                        <td>
                            <h6 class="mb-0">+91 9876543215</h6>
                            <a href="#!"><small>Contact</small></a>
                        </td>
                        <td>
                            <h6 class="mb-0">Dr. Ananth</h6>
                        </td>
                        <td>
                            <div class="dropdown open">
                                <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            <i class="fa fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="triggerId1">
                                    <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                                    <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="user-info">
                                <div class="user-info__img">
                                    <img src="clasm.png" alt="User Img" />
                                </div>
                                <div class="user-info__basic">
                                    <h5 class="mb-0">Kiran Acharya</h5>
                                    <p class="text-muted mb-0">28 yrs, Male</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="btn btn-success">Consult</span>
                        </td>
                        <td>
                            <h6 class="mb-0">06:00 PM</h6>
                            <small>2 Feb 2021</small>
                        </td>
                        <td>
                            <h6 class="mb-0">+91 9876543215</h6>
                            <a href="#!"><small>Contact</small></a>
                        </td>
                        <td>
                            <h6 class="mb-0">Dr. Ananth</h6>
                        </td>
                        <td>
                            <div class="dropdown open">
                                <a href="#!" class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            <i class="fa fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="triggerId1">
                                    <a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
                                    <a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section> */}
        </>
    )
}


function extraCode() {
    let date = e.target.value; // yyyy-mm-dd
    let ar = date.split("-"); // ['yyyy','mm','dd']
    let newFormatDate = ar[2] + "-" + ar[1] + "-" + ar[0]; //dd-mm-yyyy
    console.log(newFormatDate);


    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const newFormatDate2 = dd + '-' + mm + '-' + yyyy;

    {/* <InputGroup >
                        <InputGroup.Text style={{width:'12vh'}}>DATE</InputGroup.Text>
                        <Field type="date" name="appointmentDate" className="form-control" onBlur={(e) =>{getVaccineAvailability(e)}} />
                        <ErrorMessage name="district" component="div" className="text-error" />
                        </InputGroup> */}

    {/** ***************************  */ }
    {/* {appointments && appointments.map((ap,i) => {
                    return<>
                    <br/>
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <ul>
                            <li className="fw-bold">{ap.vaccine+" - "+ap.fee_type+" - "+(ap.fee ? ap.fee + " /-" :"")}</li>
                            <li>{ap.name}</li>
                            <li>{ap.address+", "+ap.block_name}</li>
                            <li>{ap.district_name+", "+ap.state_name+", "+ap.pincode}</li>
                        </ul>
                    </Col>
                    {ap.slots && ap.slots.map((sl,i) => {
                        return <>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>{sl.time}<br/>Slots: {sl.seats}</Col>
                    </>
                    })}
                </Row>
                    </>
                })}
                 */}
}