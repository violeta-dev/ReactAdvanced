import React from 'react';
import { BrowserRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>Something went wrong!</div>;
    }

    return this.props.children;
  }
}

const Root = ({ children }) => (
  <ErrorBoundary>
    <BrowserRouter>{children}</BrowserRouter>
  </ErrorBoundary>
);

export default Root;
