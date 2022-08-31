function Header(props) {
  return (  
    <div className='Header-Div'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.firstName} {props.lastName}</p>
      <p>{props.date}</p>
      <p>{props.status}</p>
    </div>   
  );
}

function Button (props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}