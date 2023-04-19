import React from 'react';
import Form, { validate } from './Form';
import TextField from '@mui/material/TextField';

import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const layout = {
  firstName: { xs: 12, md: 5 },
  lastName: { xs: 12, md: 5 },
  mi: { xs: 12, md: 2 },
  emailAddress: { xs: 12, md: 12 },
};

export default function App() {
  return (
    <main>
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
    </main>
  );
}
