import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import { useVideo } from './context/video-context';


function App() {

  const { videoData, searchedText} = useVideo();

  return (
    <div className="">
        <Header />
    {
      searchedText ?
      <div className='card-display'>
        {videoData?.map((el,i)=> (
          <Card 
            details = {el}
            key={i}
          />
        ))
        }
        </div>
        :
        <div className='no-result'>
        <img src='https://img.freepik.com/free-vector/girl-doing-yoga-cartoon-character_1308-118212.jpg' alt='img' />
        <p>Search to start your fitness journey !!</p>
        </div>
    }        
    </div>
  );
}

export default App;
