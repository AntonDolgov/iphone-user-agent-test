import Bowser from 'bowser'

export function App() {
  const browser = Bowser.getParser(window.navigator.userAgent)
  const browserName = browser.getBrowserName()
  const browserVersion = browser.getBrowserVersion()

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
          padding: '8px',
          textAlign: 'center',
          fontSize: '16px',
          fontFamily: 'Tahoma, sans-serif',
        }}
      >
        <p style={{ fontSize: '14px' }}>Вот твой юзер-агент:</p>

        {navigator.userAgent}
        <br />
        <br />
        <br />

        <p style={{ fontSize: '14px' }}>Попробуем угадать твой браузер:</p>
        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{browserName}</p>
        <p style={{ fontSize: '12px' }}>(версия: {browserVersion})</p>
      </div>
    </div>
  )
}
