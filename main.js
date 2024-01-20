const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content - (
// <div>
//     <h1 className="titie" >Today : {(new Date()).toDateString()}</h1>
// </div>
// )
function Counter(){
    return(
        <div className="counter">
        <button>+</button>
        <h2>{0}</h2>
        <button>-</button>
        <button>C</button>

        </div>
    )
}function SumInfo(props)  {
    console.log(props)
  const stTitle = {
    color : props.color,
    fontSize : props.size==='big' ? '50px' : '40px'
  }
  return (
    <div className='suminfo'>
      {/* <h1 style={style}>Sum = 0</h1> */}
      <h1 style={{ color: props.color,fontSize: '50px'}}>Sum = 0</h1>
    </div>
  )
}



function App() {
    return(
        <div>
         <h1>Today : {new Date().toDateString()}</h1>
         <h2>Sum = 0</h2>
         <button>Add Counter</button>
         <Counter />
        </div>
    );
}

root.render(<App/>)

    