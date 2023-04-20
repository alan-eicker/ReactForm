import React from 'react';
import Box from '@mui/material/Box';
import Form, { validate } from './Form';

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
      <Box
        component="div"
        sx={{
          p: 3,
          background: '#fff',
          boxShadow: '0 0 7px rgba(0, 0, 0, 0.17)',
          borderRadius: '4px',
        }}
      >
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
          <Form.CheckOption
            type="checkbox"
            name="agree"
            label="I agree to the terms and conditions"
            validator={validate
              .string()
              .oneOf(['true'])
              .required('Please agree to the terms and conditions')}
          />
        </Form>
      </Box>
    </main>
  );
}
