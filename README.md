# React Form Component

A simple React form component with Build in layout and validation features.

### Usage

```jsx
import React from 'react';
import Form, { validate } from './Form';

const layout = {
  firstName: { xs: 12, md: 5 },
  lastName: { xs: 12, md: 5 },
  mi: { xs: 12, md: 2 },
  emailAddress: { xs: 12, md: 12 },
};

export default function App() {
  return (
    <Form>
      <Form.TextField
        cols={layout.firstName}
        name="firstName"
        label="First Name"
        validator={validate.string().required('First name is required')}
      />
      <Form.TextField
        cols={layout.lastName}
        name="lastName"
        label="Last Name"
        validator={validate.string().required('Last name is required')}
      />
      <Form.TextField cols={layout.mi} name="middleInitial" label="MI" />
      <Form.TextField
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

### Form API

[<Form.TextField />](https://mui.com/material-ui/react-text-field/)
[<Form.Autocomplete />](https://mui.com/material-ui/react-autocomplete/)\
[<Form.Checkbox />](https://mui.com/material-ui/react-checkbox/)\
[<Form.FormControlLabel />](https://mui.com/material-ui/api/form-control-label/)\
[<Form.Radio />](https://mui.com/material-ui/api/radio/)\
[<Form.Select />](https://mui.com/material-ui/react-select/)\
[<Form.Slider />](https://mui.com/material-ui/react-slider/)\
[<Form.Switch />](https://mui.com/material-ui/react-switch/)

### Validation

The Form component uses `Formik` and `Yup` to handle the form state. Adding a `validator` prop with a validation rule to a form field will apply that validation rule to that field. The rule below will make the `firsName `field required and show the error message "First name is required" when the field is invalid.

```jsx
<TextField
  name="firstName"
  label="First Name"
  validator={validate.string().required('First name is required')}
/>
```

The imported `validate` variable is an alias for `yup`, which is exported as part for the Form component.

For more information on Yup validation schemas, checkout the [Yup](https://github.com/jquense/yup) documentation page.

### Layout

The forms layout utilizes Material UI Grid and can be adjusted by adding the `cols` prop to specify column widths for different breakpoints.

```jsx
<TextField
  name="firstName"
  label="First Name"
  cols={{ xs: 12, sm: 6, md: 6 }}
/>
```

For more information about Material UI Grid, checkout the [Material UI Grid](https://v4.mui.com/components/grid/) documentation page.

### Conditional Fields

Coming soon!
