// import { useEffect, useState } from 'react';
import  Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PlayListItem from '../PlayListItem/PlayListItem';
import * as S from './PlayList.styles.js'




function PlayList ({ tracks, isLoading, setCurrentTrack, loadingTracksError }) {
  
    return (
      
        <S.ContentPlaylist>
          
          {loadingTracksError && (
            <S.LoadingTracksError>
              Не удалось загрузить плейлист, попробуйте позже
            </S.LoadingTracksError>             
          )}
          
        {tracks.map((track) => {
            return (              
              <PlayListItem 
              track={track}
              isLoading={isLoading}
              setCurrentTrack={setCurrentTrack}
              key={track.id}
              />
            )

          })} 
          </S.ContentPlaylist>
          
          )
        }
                
        
export default PlayList;