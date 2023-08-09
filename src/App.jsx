import React from 'react';
import Box from '@mui/material/Box';
import Form from './features/Form';
import formModel from './formModel';

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
          <Form.TextField {...formModel.firstName} />
          <Form.TextField {...formModel.lastName} />
          <Form.TextField {...formModel.middleInitial} />
          <Form.TextField {...formModel.emailAddress} />
          <Form.CheckOption type="checkbox" {...formModel.agree} />
          <Form.TextField {...formModel.condtionalField} />
        </Form>
      </Box>
    </main>
  );
}
