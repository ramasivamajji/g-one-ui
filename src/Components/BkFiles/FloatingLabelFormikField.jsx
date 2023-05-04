import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { Field, ErrorMessage } from 'formik';

export const FloatingLabelFormikField = ({ label, name, ...rest }) => (
  <Form.Group>
    <Form.Label htmlFor={name}>{label}</Form.Label>
    <Field
      as={Form.Control}
      id={name}
      name={name}
      {...rest}
    />
    <ErrorMessage name={name} component={Form.Control.Feedback} type="invalid" />
  </Form.Group>
);
