export function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '8px',
          textAlign: 'center',
          fontSize: '18px',
          fontFamily: 'Tahoma, sans-serif',
        }}
      >
        {navigator.userAgent}
      </div>
    </div>
  )
}
