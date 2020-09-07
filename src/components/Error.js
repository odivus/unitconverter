import React from 'react';
import errorMessages from '../data/error-messages';

const Error = ({ errorType }) => (
  <div>
    {errorMessages[errorType]}
  </div>
);

export default Error;
