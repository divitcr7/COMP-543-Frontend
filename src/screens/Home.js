import React from 'react'
import Sidebar from '../components/Sidebar'
import Shorten from './Shorten'
function Home() {
    return (
        <div className = 'flex'>
          {/* <Sidebar currentPage= 'Home' />
          Home page */}
          <Shorten />
        </div>
      )
}

export default Home
