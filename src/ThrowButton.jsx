import { useState } from 'react';

const ThrowButton = () => {
  const [hasError, setHasError] = useState(false);
  if (hasError) throw new Error('Boom!!');
  return <button onClick={() => setHasError(true)}>💥 Throw 💥</button>;
};

export default ThrowButton;
