// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {

  const [data, setData] = useState([])
  useEffect(function() {
    async function getMessages(url) {
      const res = await fetch(url)
      setData(await res.json())
    }
    getMessages('http://localhost:3001/clubs')
  }, [])

  /*
    data is:
    [
  { id: 'winc', name: 'WinC', members: ['Alice'] },
  { id: 'techatnyu', name: 'tech@nyu', members: ['Bob'] },
  { id: 'bugsatnyu', name: 'BUGS@NYU', members: ['Carol', 'Dave'] },
  { id: 'acm', name: 'ACM', members: ['Eve'] },
  ]
  */

  // modify data into::
  /* 
    <div id=''winc>Members of WinC: Alice</div>
    <div id=''techatnyu>Members of tech@nyu: Bob</div>
  */

  const paragraph = data.map((item) => {
    return (
      <div id={item.id} key={item.id}>Members of {item.name}: {item.members}</div>
    )
  })

  console.log(paragraph)

  return (<div>{paragraph}</div>)
}

// http://localhost:3001/clubs

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> )

