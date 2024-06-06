import React from 'react';

export const CancelButton: React.FC = () => {
  return (
    <button type="button" onClick={() => window.location.reload()}>Cancelar</button>
  );
};