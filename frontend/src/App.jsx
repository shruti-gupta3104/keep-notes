import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
// import NoteDetail from './pages/NoteDetailPage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div data-theme="synthwave">
     
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
