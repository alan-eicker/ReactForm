import Form from './Form';
import * as yup from 'yup';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

Form.TextField = TextField;
Form.Autocomplete = Autocomplete;

export const validate = yup;

export default Form;
