import { Component } from 'react';
import ThrowButton from './ThrowButton';

class SomeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <h3>
        <pre>Class:</pre>
        <ThrowButton />
      </h3>
    );
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catches exceptions generated in descendant components. Unhandled exceptions will cause
    // the entire component tree to unmount.
    console.error(error, errorInfo);
  }
}

export default SomeClassComponent;
