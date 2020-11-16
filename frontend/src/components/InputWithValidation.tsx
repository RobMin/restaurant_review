import React, { useEffect, useState } from 'react';
import {
  createStyles,
  TextField,
  TextFieldProps,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';

import * as validators from '../utils/validators';

const styles = (theme: Theme) => createStyles({
});

interface InputWithValidationProps extends WithStyles {
  setValue: (email: string) => void;
  value: string;
  validator: 'email' | 'password' | 'comment';
  textFieldProps: TextFieldProps;
  noHelperTextPlaceHolder?: boolean;
}

const InputWithValidation = ({ value, setValue, textFieldProps, validator, noHelperTextPlaceHolder }: InputWithValidationProps) => {
  const [ input, setInput ] = useState(value);
  const [ error, setError ] = useState<null | string>(null);
  useEffect(() => {
    if (value === input) {
      return;
    }

    const changeTimeout = setTimeout(() => {
      const err = validators[validator](input);
      if (err) {
        return setError(err);
      }

      setError(null);
      setValue(input)
    }, 500);

    return () => clearTimeout(changeTimeout);
  }, [ input, setValue, setError, value, validator ])

  return (
    <TextField
      { ...textFieldProps }
      value={ input }
      error={ !!error }
      onChange={ (e) => setInput(e.target.value) }
      helperText={ error || (noHelperTextPlaceHolder ? null : ' ') }
    />
  );
}

export default withStyles(styles)(InputWithValidation);
