import NavMenu from '../../components/NavMenu/NavMenu.jsx';
import Centerblock from '../../components/Centerblock/Centerblock.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer.jsx';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js'
import { useEffect, useState } from 'react';
import { getAllTracks } from '../../Api.jsx';


export const MainPage = () => {

  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTracksError, setLoadingTracksError] = useState(false);

  useEffect (() => {
    getAllTracks()
      .then((response) => {
        setTracks(response)
      })
      .catch((error) => {
        setLoadingTracksError(error.message)
      })
      .finally(() => setIsLoading(false))
  },[]);

    return(
        <>
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <NavMenu />
              <Centerblock 
              tracks={tracks}
              isLoading={isLoading}
              loadingTracksError={loadingTracksError}
              />
              <Sidebar />
            </S.Main>
            <AudioPlayer />
            <footer className="footer" />
          </S.Container>
        </S.Wrapper>
        </>
    )
}