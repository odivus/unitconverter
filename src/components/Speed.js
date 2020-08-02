import React, { useState, useEffect } from 'react';
import Header from './Header';

function Speed() {
  useEffect(() => {
    document.title = 'Speed';
  });

  return (
    <div className='wrap'>
      <section>
        <Header />
      </section>

      <section className='contol'>

      </section>
    </div>
  );
}

export default Speed;
