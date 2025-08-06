import { ApolloProvider } from "@apollo/client"
import {client} from './apollo-client'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { LanguageProvider } from "./contexts/LanguageContext"
import BrandPage from "./pages/BrandPage"
import ModelsPage from "./pages/ModelsPage"
import GuitarDetailsPage from "./pages/GuitarDetailsPage"

function App() {
  

  return (
    <>
    <ApolloProvider client={client}>
    <LanguageProvider>
<Router>
  <div className="App">
    <Routes>
    <Route path="/" element={<BrandPage/>}/>
    <Route path="/brand/:brandId" element={<ModelsPage/>}/>
    <Route path="/brand/:brandId/guitar/:modelId" element={<GuitarDetailsPage/>}/>
    </Routes>
  </div>
</Router>
    </LanguageProvider>
    </ApolloProvider>
      
    </>
  )
}

export default App
