import { Route, Routes } from "react-router-dom"
import Page from "./page"
import NotFound from "./notfound"


function App() {


  return (
    
      <main className="flex h-screen">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Page />} />
        </Routes>
        
      </main>
    

    
  )
}

export default App
