const container = document.getElementById('root')

function Button() {
  const [counter, updateCounter] = React.useState(0)

  return React.createElement(
    'button',
    {
      onClick: () => updateCounter(counter + 1),
      className: 'my-button'
    },
    counter
  )
}

const element = React.createElement(Button)

ReactDOM.render(element, container)
