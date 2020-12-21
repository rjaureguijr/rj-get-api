import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/rjaureguijr/repos`;

    fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
  }, [setAppState]);

  return (
      <div className='App'>
        <div className='container'>
          <h1>Repos</h1>
        </div>
        <div className='repo-container'>
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
        <footer>
          <div className='footer'>
            Built by me
          </div>
        </footer>
      </div>
  );
}

export default App;
