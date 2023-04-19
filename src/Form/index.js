import Form from './Form';
import * as yup from 'yup';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

Form.TextField = TextField;
Form.Autocomplete = Autocomplete;
Form.Checkbox = Checkbox;
Form.FormControlLabel = FormControlLabel;
Form.Radio = Radio;
Form.Select = Select;
Form.Slider = Slider;
Form.Switch = Switch;

export const validate = yup;

export default Form;
