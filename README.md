# React Form Component

A simple React form component with Build in layout and validation features.

### Usage

```jsx
import React from 'react';
import Form, { validate } from './Form';
import TextField from '@mui/material/TextField';

const layout = {
  firstName: { xs: 12, md: 5 },
  lastName: { xs: 12, md: 5 },
  mi: { xs: 12, md: 2 },
  emailAddress: { xs: 12, md: 12 },
};

export default function App() {
  return (
    <Form>
      <TextField
        cols={layout.firstName}
        name="firstName"
        label="First Name"
        validator={validate.string().required('First name is required')}
      />
      <TextField
        cols={layout.lastName}
        name="lastName"
        label="Last Name"
        validator={validate.string().required('Last name is required')}
      />
      <TextField cols={layout.mi} name="middleInitial" label="MI" />
      <TextField
        cols={layout.emailAddress}
        name="emailAddress"
        label="Email Address"
        validator={validate
          .string()
          .email('Invalid email address')
          .required('Email address is required')}
      />
    </Form>
  );
}
```

### Validation

The Form component uses `Formik` and `Yup` to handle the form state. Adding a `validator` prop with a validation rule to a form field will apply that validation rule to that field. The rule below will make the `firsName `field required and show the error message "First name is required" when the field is invalid.

```jsx
<TextField
  name="firstName"
  label="First Name"
  validator={validate.string().required('First name is required')}
/>
```
