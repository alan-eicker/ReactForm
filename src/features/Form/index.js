import Form from './components/Form';
import * as yup from 'yup';

import CheckOption from './components/CheckOption';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

Form.TextField = TextField;
Form.Autocomplete = Autocomplete;
Form.CheckOption = CheckOption;
Form.Select = Select;
Form.Slider = Slider;
Form.Switch = Switch;

export const validate = yup;

export default Form;
