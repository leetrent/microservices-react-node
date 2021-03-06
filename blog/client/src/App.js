
import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
  <div className="container">
    <h1>Create Post</h1>
    <PostCreate />
    <hr />
    <h1>Posts</h1>
    <PostList />
  </div>
  );
};


////////////////////////////////////////////////////////////////////////
// ORIGINAL BOILER-PLATE CODE
////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
