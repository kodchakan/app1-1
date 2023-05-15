import logo from './logo.svg';
import './App.css';
import './mystyle.css';

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '5px',
    margin: '10px'
  }
  return (
    <div style={divStyle}>
      <h3>Hello React;</h3>
      <p style={{color:'green'}}>My Nickname is ja</p>
    </div>
  );
}

function App2() {
  let r ='React'
  let rn='React Native'
  const el =(
    <div>
      <h2>Create web & Mobile App</h2> <br/>
      <div className="title">with {r} & {rn}</div>
    </div>
  )
  return el
}
export default App2;
