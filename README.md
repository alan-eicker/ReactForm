# React Form Component

A simple React form component with Build in layout and validation features.

View the [demo](https://alaneicker1975.github.io/ReactForm/).

## Usage

```jsx
import React from 'react';
import Form, { validate } from './Form';

const submitForm = async (form) => {
  const response = await fetch('/path/to/api', {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });

  return response.json();
};

export default function App() {
  return (
    <Form onSubmit={submitForm}>
      <Form.TextField
        cols={{ xs: 12, md: 5 }}
        name="firstName"
        label="First Name"
        validator={validate.string().required('First name is required')}
      />
      <Form.TextField
        cols={{ xs: 12, md: 5 }}
        name="lastName"
        label="Last Name"
        validator={validate.string().required('Last name is required')}
      />
      <Form.TextField
        cols={{ xs: 12, md: 2 }}
        name="middleInitial"
        label="MI"
      />
      <Form.TextField
        cols={{ xs: 12, md: 12 }}
        name="emailAddress"
        label="Email Address"
        validator={validate
          .string()
          .email('Invalid email address')
          .required('Email address is required')}
      />
      <Form.CheckOption
        type="checkbox"
        name="agree"
        label="I trigger a conditional field"
      />
      <Form.TextField
        showIf={['agree', true]}
        cols={{ xs: 12, md: 12 }}
        name="condtionalField"
        label="Conditional Field"
        validator={validate.string().when('agree', {
          is: true,
          then: () => validate.string().required('Required field'),
        })}
      />
    </Form>
  );
}
```

## Form API

&lt;Form />

### Props

| Prop             | Type     |
| ---------------- | -------- |
| onSubmit         | Function |
| submitButtonText | String   |

## Form Fields API

[<Form.TextField />](https://mui.com/material-ui/react-text-field/)\
[<Form.Autocomplete />](https://mui.com/material-ui/react-autocomplete/)\
<Form.CheckOption />\
[<Form.Select />](https://mui.com/material-ui/react-select/)\
[<Form.Slider />](https://mui.com/material-ui/react-slider/)\
[<Form.Switch />](https://mui.com/material-ui/react-switch/)

### Props

The above form fields accept all props specific to the Material UI documentation as well as the following optional props:

| Prop      | Type                   |
| --------- | ---------------------- |
| cols      | Object                 |
| validator | Yup Validator Instance |

## Validation

The Form component uses `Formik` and `Yup` to handle the form state. Adding a `validator` prop with a validation rule to a form field will apply that validation rule to that field. The rule below will make the `firsName `field required and show the error message "First name is required" when the field is invalid.

```jsx
<Form.TextField
  name="firstName"
  label="First Name"
  validator={validate.string().required('First name is required')}
/>
```

The imported `validate` variable is an alias for `yup`, which is exported as part for the Form component.

For more information on Yup validation schemas, checkout the [Yup](https://github.com/jquense/yup) documentation page.

## Layout

The forms layout utilizes Material UI Grid and can be adjusted by adding the `cols` prop to specify column widths for different breakpoints.

```jsx
<Form.TextField
  name="firstName"
  label="First Name"
  cols={{ xs: 12, sm: 6, md: 6 }}
/>
```

For more information about Material UI Grid, checkout the [Material UI Grid](https://v4.mui.com/components/grid/) documentation page.

## Conditional Fields

Conditional fields can be toggled based on the value of another field. The `showIf` prop takes an array with two items. The first references the field name that will toggle the conditional field, and the second is the value of the reference field that will toggle the conditional field.

In the example below, the `condtionalField` will be shown only if the value of `condtionalTrigger` is `true`. Also, notice that the validation on the conditional field is only applied if the `showIf` condition is met.

```jsx
<Form.CheckOption
  type="checkbox"
  name="condtionalTrigger"
  label="I agree"
/>

<Form.TextField
  showIf={['condtionalTrigger', true]}
  name="condtionalField"
  label="Conditional Field"
  validator={validate.string().when('condtionalTrigger', {
    is: true,
    then: () => validate.string().required('Required field'),
  })}
/>
```
