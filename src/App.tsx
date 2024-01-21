import { Route, Routes } from "react-router-dom"
import Page from "./page"
import NotFound from "./notfound"


function App() {


  return (
    
      <>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Page />} />
        </Routes>
        
      </>
    

    
  )
}

export default App
