export default function clientId({ params }) {
  return (
    <div style={{ width: '25%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <h2>Id Id Id Page </h2>
      <h2>{ params.clientId }</h2>      
    </div>
  )
}
