const container = document.getElementById('root')

// OLD WAY////////
// class MyButton extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       counter: 0
//     }
//     this.incrementCounter = this.incrementCounter.bind(this)
//   }

//   incrementCounter() {
//     this.setState({ counter: this.state.counter + 1 })
//   }

//   render() {
//     return React.createElement(
//       'button',
//       { onClick: this.incrementCounter },
//       this.state.counter
//     )
//   }
// }

// const ClassButton = React.createElement(MyButton)

// ReactDOM.render(ClassButton, container)
/// NEW WAY
// const Button = () => {
//   const [counter, updateCounter] = React.useState(0)
//   const handleCounterUpdate = () => {
//     updateCounter(counter + 1)
//   }
//   return React.createElement(
//     'button',
//     {
//       onClick: handleCounterUpdate,
//       className: 'my-button'
//     },
//     counter
//   )
// }

// const root = ReactDOM.createRoot(container)
// root.render(React.createElement(Button))

// NEWEST WAY ////////
const Button = () => {
  const [counter, updateCounter] = React.useState(0)
  const handleCounterUpdate = () => {
    updateCounter(counter + 1)
  }
  return React.createElement(
    'button',
    {
      onClick: handleCounterUpdate,
      className: 'my-button'
    },
    counter
  )
}

return (
  <button className="babel-button" onClick={handleCounterUpdate}>
    {counter}
  </button>
)

const root = ReactDOM.createRoot(container)
root.render(<Button />)
