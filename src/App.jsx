
import { Provider } from 'react-redux'
import './App.css'
import Cart from './Cart'
import { store } from './redux/store'
const Livre = [
  {
    "titre": "java css js react ",
    "autour": "yassin",
    "edition": "paket",
    "poster": "https://images.pexels.com/photos/14854394/pexels-photo-14854394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    "titre": "java css js react ",
    "autour": "yassin",
    "edition": "paket",
    "poster": "https://images.pexels.com/photos/14854394/pexels-photo-14854394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    "titre": "java css js react ",
    "autour": "yassin",
    "edition": "paket",
    "poster": "https://images.pexels.com/photos/14854394/pexels-photo-14854394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  }
]
function App() {


  return (
    <Provider store={store}>  
      <div className="App">
      <Cart Livre={Livre} />
    </div>
     </Provider> )
  
}

export default App
