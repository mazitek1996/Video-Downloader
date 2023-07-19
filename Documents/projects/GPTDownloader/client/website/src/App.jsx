import { Fragment, useState } from 'react'
import { Route, Routes } from "react-router-dom"

import IndexHome from './components/IndexHome'
import ErrorPage from './components/ErrorPage'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {

  return (
    <Fragment>
<Routes>
<Route path='' element={<IndexHome/>}/>
<Route path='*' element={<ErrorPage/>}/>
</Routes>
    </Fragment>
  )
}

export default App
