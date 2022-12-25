import React from 'react';

const Error = ({ errorText }) => (
  <div className='center'>
    <div className='error'>
      {errorText}
    </div>
  </div>
);

export default Error;
