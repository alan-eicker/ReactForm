import React from 'react';
import Box from '@mui/material/Box';
import Form, { validate } from './features/Form';

import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const submitForm = async (form) => {
  console.log(form);
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
        <Form onSubmit={submitForm}>
          <Form.TextField
            cols={{ xs: 12, md: 5 }}
            name="firstName"
            label="First Name"
            validator={validate.string().required('Required field')}
          />
          <Form.TextField
            cols={{ xs: 12, md: 5 }}
            name="lastName"
            label="Last Name"
            validator={validate.string().required('Required field')}
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
              .required('Required field')}
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
      </Box>
    </main>
  );
}
