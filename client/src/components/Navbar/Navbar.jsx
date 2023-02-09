import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-stackoverflow.png'
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import SearchIcon from '@mui/icons-material/Search';
// import { TextField } from '@mui/material';


const navbar = () => {

  var user = null

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
          <SearchIcon className='SearchIcon'/>
          <input type="text" placeholder='Search....' />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </form>
        {/* if statement */}
        {user === null ?
          <Link to='/Auth' className='nav-item nav-links'>log in</Link>
          :
          <>
          <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white"><Link to='/User' style={{color:"white", textDecoration:'none'}}> K </Link></Avatar>
          <button className='nav-item nav-links'>Log out</button>
          </>}

      </div>
    </nav>
  )
}

export default navbar
