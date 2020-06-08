import React from 'react'
import Posts from './components/Posts/Posts'
import './App.css'

const App = () =>{
    return (
        <div className="main">
            <h1 className="main-title">Breaking News</h1>
            <Posts />
        </div>
    )
}

export default App