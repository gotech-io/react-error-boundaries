import PropTypes from 'prop-types';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catches exceptions generated in descendant components. Unhandled exceptions will cause
    // the entire component tree to unmount.
    this.props.logCallback && this.props.logCallback(error, errorInfo);
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.node,
  logCallback: PropTypes.func,
};

export default ErrorBoundary;
