
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {

 const navigate=useNavigate()

 return (
        <div>
      <div className='navBar'>
      <div>
        <div className='pos'>
          <br />
</div>
<form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Type your text" required="" type="text"/>
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
  </div>
  <br />
  <br />
  <br />
  <h2 className='g'onClick={()=>{ navigate("/Card") }}>POSTY</h2>
  <h2 className='e'onClick={()=>{navigate('/Create')}}>Add</h2>
  <h2 className='c'onClick={()=>{ navigate("/Profile") }}>Profile</h2>
  </div>

</div>
    
  )
}


export default Home
