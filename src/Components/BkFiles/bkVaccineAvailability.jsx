import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik"
import { Form as bForm,FloatingLabel } from "react-bootstrap";
import * as majji from "react-bootstrap";

import * as Yup from "yup";
import Header from "../Header";

// import { FloatingLabelFormikField } from "../FloatingLabelFormikField";

export default function VaccineAvailability()
{
    const validationSchema = Yup.object({
        pincode: Yup.string().required("Required"),
      });

    const formik = useFormik({
        initialValues:{
            state:'',
            district:'',
            mandal:'',
            pincode:'',
        },
        validationSchema:validationSchema,
        onSubmit:(values) => {
            alert(JSON.stringify(values));
        }
    })

    return(<>
    <Header></Header>
    <FormikProvider value={formik}>
        <Form>
        <majji.Row className="my-2">
          <majji.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></majji.Col>
          <majji.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <FloatingLabel
            controlId="floatingInput"
            label="PinCode"
            className="mb-3"
            size="sm"
        >
        <bForm.Control 
            type="pincode" 
            name='pincode' 
            value={formik.values.pincode}
            onChange={formik.handleChange} 
            placeholder="name@example.com" 
        />
        <ErrorMessage name="pincode" component="div"/>
      </FloatingLabel>
          </majji.Col>
          <majji.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></majji.Col>
        </majji.Row>
        <button type="submit">Abc</button>
        </Form>
    </FormikProvider>
    </>)
}