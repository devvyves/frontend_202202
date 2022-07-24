import logo from './logo.svg';
import './App_source.scss';

function App() {

  const audioImg = `url(${process.env.PUBLIC_URL}img/audio.svg)`

  return (
    <div className="App">
      <h1 className='blind_area'>
        <a href="#" style={{backgroundImage: `url(${logo})`}}>  
          <span>company</span>
        </a>
      </h1>
      <div className='size' style={{backgroundImage: audioImg}}>
        <img src={`${process.env.PUBLIC_URL}img/audio.svg`} />
      </div>
    </div>
  );
}

export default App;

// import = src
// 함수 = public 에서 불러옴
