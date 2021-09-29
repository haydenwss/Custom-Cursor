import './App.css';
import Cursor from './components/Cursor';


function App() {
  return (
    <div className="app-container">
      <Cursor />
      <div className='menu'>
        <i class="fas fa-bars fa-2x"></i>
      </div>
       <div className='border'>
          <h1>Transparent Custom Cursor</h1>
            <div className='text'>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          <button className='button'>learn more <i class="fas fa-arrow-right"></i></button>
       </div>
    </div>
  );
}

export default App;
