import NavMenu from '../../components/NavMenu/NavMenu.jsx';
import Centerblock from '../../components/Centerblock/Centerblock.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer.jsx';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js'


export const MainPage = () => {
    return(
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
    )
}