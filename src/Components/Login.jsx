import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as majji from "react-bootstrap";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { SweetAlertGeneral, SweetAlertLoginSuccess } from "./CommonFiles/SweetAlerts";

const Login = () => {
  // const divContainer = {
  //   backgroundColor: "white",
  //   borderRadius: "8px",
  //   margin: "5vh",
  // };

  // const [sampleLogin, setSampleLogin] = useState({
  //   userId: "Admin",
  //   password: "Admin@123",
  // });

  const sampleLogin = {
    userId: "Admin",
    password: "Admin@123"
  }

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    onSubmit: (values) => {
      //  alert(JSON.stringify(values));
      if (
        values.userId === sampleLogin.userId &&
        values.password === sampleLogin.password
      ) {
        SweetAlertLoginSuccess();
        navigate("/services");
      } else {
        SweetAlertGeneral("Wrong Password", "", "error")
      }
    },
  });

  return (
    <>
      {/* <div
        style={{ backgroundColor: "#ededed", height: "100vh", width: "100vw" }}
      > */}
      <majji.Row className="my-2">
        <majji.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></majji.Col>
        <majji.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <div>{/* style={divContainer} */}
            <majji.Row>
              <majji.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <FormikProvider value={formik}>
                  <Form autoComplete="off">
                    <majji.Row className="my-5 py-5">
                      <majji.Row>
                        <majji.Col xs={12} className="text-center">
                          <img src="gOneLogin.png" style={{ width: '15vw' }} alt="G-One" />
                        </majji.Col>
                      </majji.Row>
                      <majji.Row className="my-2">
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={2}
                          xl={2}
                          xxl={2}
                        ></majji.Col>
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={8}
                          xl={8}
                          xxl={8}
                        >
                          <majji.InputGroup>
                            <Field
                              type="text"
                              name="userId"
                              className="form-control "
                              maxLength="30"
                              placeholder="UserId"
                              autoComplete="off"
                            />
                            <ErrorMessage
                              name="userId"
                              component="div"
                              className="text-error"
                            />
                          </majji.InputGroup>
                        </majji.Col>
                      </majji.Row>
                      <majji.Row className="my-2">
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={2}
                          xl={2}
                          xxl={2}
                        ></majji.Col>
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={8}
                          xl={8}
                          xxl={8}
                        >
                          <majji.InputGroup>
                            <Field
                              type="password"
                              name="password"
                              className="form-control"
                              maxLength="30"
                              placeholder="Password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-error"
                            />
                          </majji.InputGroup>
                        </majji.Col>
                      </majji.Row>
                      <majji.Row className="my-2">
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={2}
                          xl={2}
                          xxl={2}
                        ></majji.Col>
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={8}
                          xl={8}
                          xxl={8}
                          className="btn-group"
                        >
                          <button type="submit" className="btn btn-success ">
                            <SlArrowUpCircle /> Login
                          </button>

                          <button type="button" className="btn btn-primary">
                            <SlArrowDownCircle /> Register
                          </button>
                        </majji.Col>
                      </majji.Row>
                      <majji.Row className="my-2">
                        <majji.Col
                          xs={12}
                          sm={12}
                          md={12}
                          lg={6}
                          xl={5}
                          xxl={5}
                        ></majji.Col>
                        Forget Password?
                      </majji.Row>
                    </majji.Row>
                  </Form>
                </FormikProvider>
              </majji.Col>
              {/* <majji.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
                    <div className="vr" />
                    </majji.Col> */}
              <majji.Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                xxl={6}
                className=" text-center"
              >
                <img
                  src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=826&t=st=1676541336~exp=1676541936~hmac=41c42d4807d6fbf8836e480cf963e4a53819be3d6cb7d58501e76d727807105f"
                  className="img-fluid"
                  alt="mlogo"
                />
              </majji.Col>
            </majji.Row>
          </div>
        </majji.Col>
        <majji.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></majji.Col>
      </majji.Row>
      {/* </div> */}
    </>
  );
};
export default Login;
