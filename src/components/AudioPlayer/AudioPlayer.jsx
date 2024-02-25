import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './audioPlayer.style.js'
import { useEffect, useRef, useState } from 'react';
import { ConvertTime } from '../../helpers.js';



function AudioPlayer ({ currentTrack })  {

  
  const [isLooped, setIsLooped] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [currentVolume, setCurrentVolume] = useState(0.1)
  const [isPlaying, setIsPlaying] = useState(true);

  
  const progressBarRef = useRef(null)
  const volumeBarRef = useRef(null)

  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      handlePlay()
    }
  },[currentTrack]);

  // useEffect(() => {
  //   if (currentTrack) {
  //     handlePlay();
  //   } else {
  //     handlePause()
  //   }
  // },[currentTrack]);

  const duration = audioRef.current ? audioRef.current.duration : 0

  
  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  }; 

  const handleLoop = () => {
    audioRef.current.loop = true
      setIsLooped(true)
  }

  const handleUnloop = () => {
    audioRef.current.loop = false
    setIsLooped(false)
}

  const togglePlay = isPlaying ? handlePause : handlePlay;  
  const toggleLoop = isLooped ? handleUnloop : handleLoop;

  
  

  

  const FunctionMissing = () => {
    alert('Еще не реализовано')
  }


  
// console.log(currentTrack)
    return (      
        <> 
        <audio
            controls="controls"
            src={currentTrack.track_file}
            ref={audioRef}
            autoPlay={true}
            onTimeUpdate={() => {
              setCurrentTime(audioRef.current.currentTime)
            }}    
        ></audio>
        <S.TrackTime>
          {duration && ConvertTime(currentTime)} / {duration && ConvertTime(duration)}
        </S.TrackTime>
        <S.Bar>
          <S.BarContent>
            <S.BarPlayerProgress
              ref={progressBarRef}
              type="range"
              min={0}
              value={currentTime}
              step={0.01}
              onChange={(a) => {
                audioRef.current.currentTime = a.target.value
              }}
              $color="#ff0000"
            >
            </S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg onClick={FunctionMissing} alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" /> 
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    <S.PlayerBtnPlaySvg onClick={() => togglePlay()} alt="play">
                      {isPlaying ? (
                        <svg 
                        width="15" 
                        height="19" 
                        viewBox="0 0 15 19" 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="5" height="19" fill="#D9D9D9"/>
                        <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                        </svg>
                      ) : (
                        <svg 
                        width="15" 
                        height="20" 
                        viewBox="0 0 15 20" 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z" fill="#D9D9D9"/>
                        </svg>
                      )}
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg onClick={FunctionMissing} alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat>
                    <S.PlayerBtnRepeatSvg $islooped={isLooped} onClick={toggleLoop} alt="repeat">
                      {isLooped ? (
                        <svg 
                        width="18" 
                        height="12" 
                        viewBox="0 0 20 18" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                        fill="white"/>
                        <path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                        fill="white"/>
                        </svg>
                      ) : (
                        <svg 
                        width="18" 
                        height="12" 
                        viewBox="0 0 20 18" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                        fill="#696969"/>
                        <path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                        fill="#696969"/>
                        </svg>
                      )}
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg onClick={FunctionMissing} alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>                      
                        <S.TrackPlaySvg alt="music">
                          {currentTrack ? (
                                currentTrack.logo
                              ) : (
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                          )}                        
                      </S.TrackPlaySvg>                                            
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>                      
                        <S.TrackPlayAuthorLink href="http://"
                        >{currentTrack.name}</S.TrackPlayAuthorLink>                      
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>                      
                        <S.TrackPlayAlbumLink href="http://">{currentTrack.author}</S.TrackPlayAlbumLink>                                           
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike>
                      <S.TrackPlayLikeSvg onClick={FunctionMissing} alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike>
                      <S.TrackPlayDislikeSvg onClick={FunctionMissing} alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg onClick={FunctionMissing} alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <S.VolumeProgressLine
                      type="range"
                      name="range"
                      ref={volumeBarRef}
                      value={currentVolume}
                      min={0}
                      max={1}
                      step={0.01}
                      onChange={() => {
                        setCurrentVolume(
                          audioRef.current.volume,
                        )
                        audioRef.current.volume = volumeBarRef.current.value
                      }}
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
        </>
    );
}

export default AudioPlayer;