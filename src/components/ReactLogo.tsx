import reactLogo from '../logo.svg'

export const ReactLogo = () => {
  return (
    <img
        src={reactLogo}
        alt="React Logo"
        style={{
            bottom: '20px',
            position: 'fixed',
            right: '20px',
            width: '100px',
        }}
    />
  )
}
