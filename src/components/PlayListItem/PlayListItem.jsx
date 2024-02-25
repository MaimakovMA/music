import { useEffect, useState } from 'react';
import  Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './PlayListItem.styles.js'
import { ConvertTime } from '../../helpers.js';



function PlayListItem ({ track, isLoading, setCurrentTrack }) {
  

    return (
      <S.PlaylistItem onClick={() => setCurrentTrack(track)}>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
            {isLoading ? (
                          <Skeleton
                          width={55}
                          height={55}
                          baseColor="#202020"
                          highlightColor="#444"/>
                        ): (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
                        )}
            </S.TrackTitleImage>
            {isLoading ? (
                        <Skeleton
                        width={270}
                        baseColor="#202020"
                        highlightColor="#444"/>                        
                      ): (
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">{track.name}
              <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
                      )}
          </S.TrackTitle>
          <S.TrackAuthor>
          {isLoading ? (
                      <Skeleton
                      width={270}
                      baseColor="#202020"
                      highlightColor="#444"/>
                 ) : (
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
                 )}
          </S.TrackAuthor>
          <S.TrackAlbum>
          {isLoading ? (
                      <Skeleton
                      width={350}
                      baseColor="#202020"
                      highlightColor="#444"/>
                  ) : (
            <S.TrackAlbumLink href="http://">{track.album}
            </S.TrackAlbumLink>
                  )}
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{ConvertTime(track.duration_in_seconds) }</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
}

export default PlayListItem;