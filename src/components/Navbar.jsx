import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="/about">{props.aboutText} About</a>
        </li> */}
        <li classaName="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>

      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick= {props.toggleMode}type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>

</>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string    
}

Navbar.defaultProps = {
  title: 'Set title Here',
  aboutText:'About text Here'
}


// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// export default function Navbar(props) {
//   return (
//     <>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">{props.title}</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">{props.aboutText} About</Link>
//               </li>
//             </ul>

//             <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//               <input
//                 className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"
//               />
//               <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string    
// };

// Navbar.defaultProps = {
//   title: 'Set title Here',
//   aboutText: 'About text Here'
// };
