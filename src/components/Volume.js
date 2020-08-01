import React, { useState, useEffect } from 'react';

function Volume() {
  useEffect(() => {
    document.title = 'Volume';
  });

  return (
    <div>
      Volume
    </div>
  );
}

export default Volume;
