import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import './index.css'
import App from './App.tsx'

class ErrorBoundary extends Component<{children: React.ReactNode}, {hasError: boolean; error: any; errorInfo: any}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', background: '#333' }}>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

console.log('🚀 Starting GIC App...');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('❌ Root element not found!');
  document.body.innerHTML = '<div style="color: white; background: #333; padding: 20px; font-family: monospace;">Error: Root element not found. Check your HTML.</div>';
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <HeroUIProvider>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
    </HeroUIProvider>
  </StrictMode>,
)

console.log('✅ App rendered successfully');
