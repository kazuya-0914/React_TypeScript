import { ErrorBoundary } from 'react-error-boundary';
import ErrorThrow from './ErrorThrow';

export default function ErrorRoot() {
  const handleFallback = ({ 
    error,
    resetErrorBoundary 
  }: {
    error: Error;
    resetErrorBoundary: () => void;
  }) => {
    const handleClick = () => resetErrorBoundary();
    return (
      <div>
        <h4>以下のエラーが発生しました。</h4>
        <p>{error.message}</p>
        <button type="button" onClick={handleClick}>
          Retry
        </button>
      </div>
    );
  };
  const handleReset = () => console.log('Retry!!');

  return (
    <>
      <h3>Error Boundaryの基本</h3>
      <ErrorBoundary
        onReset={handleReset}
        fallbackRender={handleFallback}
        // FallbackComponent={ErrorFallback}
      >
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
}