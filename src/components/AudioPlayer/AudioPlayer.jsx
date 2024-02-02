import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './audioPlayer.style.js'



function AudioPlayer ()  {
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }, [])

    return (
        <S.Bar>
          <S.BarContent>
            <S.BarPlayerPprogress></S.BarPlayerPprogress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" /> 
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      {isLoading ? (
                              <Skeleton
                                width={55}
                                height={55}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                      ) : (
                        <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </S.TrackPlaySvg>
                      )}                      
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      {isLoading ? (
                              <Skeleton
                                width={90}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                      ) : (
                        <S.TrackPlayAuthorLink href="http://"
                        >Ты та...</S.TrackPlayAuthorLink>
                      )}                      
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      {isLoading ? (
                                <Skeleton
                                   width={90}
                                   baseColor="#202020"
                                   highlightColor="#444"
                                />
                      ) : (
                        <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                      )}                      
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <S.VolumeProgressLine
                      type="range"
                      name="range"
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
    );
}

export default AudioPlayer;