import ThrowButton from './ThrowButton';
import ErrorBoundary from './ErrorBoundary';

const SomeComponent = () => {
  return (
    <ErrorBoundary
      logCallback={(error, errorInfo) => console.error(error, errorInfo)}
      fallback={<h1>Oh no!!!</h1>}
    >
      <h3>
        <pre>Functional:</pre>
        <ThrowButton />
      </h3>
    </ErrorBoundary>
  );
};

export default SomeComponent;
