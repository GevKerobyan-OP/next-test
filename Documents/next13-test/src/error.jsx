'use client'

const ErrorPage = ({ error, reset }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '25px' }}>
      <h2>{error.message}</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '25px' }}>
        <button onClick={reset}>Retry</button>
        <button>Go back</button>
      </div>
    </div>
  )
}

export default ErrorPage