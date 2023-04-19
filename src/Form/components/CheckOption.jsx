import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiRadio from '@mui/material/Radio';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormHelperText from '@mui/material/FormHelperText';

const CheckOption = (props) => {
  const FormOption = props.type === 'checkbox' ? MuiCheckbox : MuiRadio;
  const id = uniqid();

  return (
    <>
      <MuiFormControlLabel
        htmlFor={id}
        control={
          <FormOption
            id={id}
            {...(props.error && {
              sx: {
                color: '#d32f2f',
              },
            })}
          />
        }
        {...props}
      />
      {props.error && (
        <MuiFormHelperText error>{props.helperText}</MuiFormHelperText>
      )}
    </>
  );
};

CheckOption.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

export default CheckOption;
