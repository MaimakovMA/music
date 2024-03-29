import NavMenu from '../../components/NavMenu/NavMenu.jsx';
import Centerblock from '../../components/Centerblock/Centerblock.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer.jsx';
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js';
import * as S from './main.styles.js'
import { useEffect, useState } from 'react';
import { getAllTracks } from '../../Api.jsx';


export const MainPage = () => {

  const [tracks, setTracks] = useState([
    { id: 1, name: 1, author: 1, album: 1 },
    { id: 2, name: 2, author: 2, album: 2 },
    { id: 3, name: 3, author: 3, album: 3 },
    { id: 4, name: 4, author: 4, album: 4 },
    { id: 5, name: 5, author: 5, album: 5 },
    { id: 6, name: 6, author: 6, album: 6 },
    { id: 7, name: 7, author: 7, album: 7 },
    { id: 8, name: 8, author: 8, album: 8 },
    { id: 9, name: 9, author: 9, album: 9 },
    { id: 10, name: 10, author: 10, album: 10  },
]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTracksError, setLoadingTracksError] = useState(false);
  const [currentTrack, setCurrentTrack ] = useState(null)
  

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
              setCurrentTrack={setCurrentTrack}
              
              />
              <Sidebar />
            </S.Main>
            {currentTrack && (
            <AudioPlayer 
            currentTrack={currentTrack}           
             />
            )}
            <footer className="footer" />
          </S.Container>
        </S.Wrapper>
        </>
    )
}