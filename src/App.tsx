import './styles.css'
import IMAGE from './react.png'
import IMAGE_SVG from './react.svg'
import Counter from './component/Counter'

const App = () => {
  return (
    <div>
      <h1>
        React Typescript Template and Webpack Setup {process.env.NODE_ENV} -{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={IMAGE_SVG} alt="React Logo" width="300" height="200" />
      <Counter />
    </div>
  )
}

export default App
