import React from 'react'

const NavBar = ({notes}) => {
  return (
    <section className='nav-con'>
        <h1 className="fire-note-con">Fire Notes</h1>
        <div>
          <p>Total notes - <span>{notes.length}</span></p>
        </div>
    </section>
  )
}

export default NavBar