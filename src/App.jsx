import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Listarticles from './components/articles/Listarticles';
import Listcategories from './components/categories/Listcategories';
import Listscategories from './components/scategories/Listscategories';


import Menu from './components/Menu';
function App() {
return (
<>
<Router>
<Menu/>
  <Routes>
 

<Route path="/articles" element={<Listarticles/>}/>
<Route path="/categories"  element={<Listcategories/>}/>
<Route path="/scategories" element={<Listscategories/>}/>

</Routes>
</Router>
</>
)
}
export default App
