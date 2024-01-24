// import './App.style.js';
import NavMenu from './components/NavMenu/NavMenu'
import Centerblock from './components/Centerblock/Centerblock';
import Sidebar from './components/Sidebar/Sidebar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.style.js'




function App() {
  return (
    <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <Centerblock />
          <Sidebar />
        </S.Main>
        <AudioPlayer />
        <footer className="footer" />
      </S.Container>
    </S.Wrapper>
    </>
  );
}

export default App;
