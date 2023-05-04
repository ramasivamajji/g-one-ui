import * as majji from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaClinicMedical } from "react-icons/fa";
import { BsFillCaretDownSquareFill, BsArrowRightSquare } from "react-icons/bs";
import { TbVaccineBottle } from "react-icons/tb";
import { Link } from "react-router-dom";
import Fade from 'react-bootstrap/Fade';


export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <majji.Row className="my-2">
        <majji.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></majji.Col>
        <majji.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <div>
            <majji.Row>
              <majji.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className=" text-center">

                <img
                  src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?w=740&t=st=1676916805~exp=1676917405~hmac=cbc001a4a9328fef379f7a8c7ca9ac8a2999f15709d968a175b9ce38aa851899"
                  className="img-fluid"
                  alt="mlogo"
                />

              </majji.Col>
              <majji.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="my-5">
                <majji.Row>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    style={{ width: '100%', backgroundColor: '#ff9100', color: 'white', fontWeight: 'bold', borderRadius: '0' }}
                    variant="outline-warning"
                    className="text-start"

                  >
                    <majji.Row>
                      <majji.Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}><FaClinicMedical style={{ fontSize: '1.3em' }} /></majji.Col>{/* */}
                      <majji.Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}> Health Services</majji.Col>
                      <majji.Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}><BsFillCaretDownSquareFill /></majji.Col>
                    </majji.Row>

                  </Button>
                  <Fade in={open}>
                    <table style={{ width: '100%', color: '#02044d' }} className="border border-warning">
                      <thead >
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center"><span><TbVaccineBottle style={{ fontSize: '1.3em' }} />Check Vaccine Availability</span> <span><Link to="/vaccineavailability"><BsArrowRightSquare /></Link></span></th></tr>
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center">Sample service ------------ 1 <span><BsArrowRightSquare /></span></th></tr>
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center">Sample service ------------ 2 <span><BsArrowRightSquare /></span></th></tr>
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center">Sample service ------------ 3 <span><BsArrowRightSquare /></span></th></tr>
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center">Sample service ------------ 4 <span><BsArrowRightSquare /></span></th></tr>
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center">Sample service ------------ 5 <span><BsArrowRightSquare /></span></th></tr>
                        <tr className="border border-warning"><th className="p-2 d-flex justify-content-between align-items-center">Sample service ------------ 6 <span><BsArrowRightSquare /></span></th></tr>

                      </thead>
                    </table>
                  </Fade>
                </majji.Row>
              </majji.Col>
            </majji.Row>
          </div>
        </majji.Col>
        <majji.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></majji.Col>
      </majji.Row>
    </>
  )
}