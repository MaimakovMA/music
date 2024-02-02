import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from './NotFound.Styles.js';


export const NotFoundPage = () => {

const [visible, setVisible] = useState(false);
const toggleVisibility = () => setVisible(!visible);

const navigate = useNavigate()
const onClick = () => {
    navigate('/')
    }

    return (

    <S.Wrapper>
     <S.Container>
       <S.Main>
       <S.MainNav>
            <S.NavLogo>
              <S.LogoImage className="_btn" src="img/logo.png" alt="logo" />
            </S.NavLogo>             
            <S.NavBurger className="_btn" onClick={toggleVisibility}>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>            
            {visible && (
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink to="/">Главное </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink>Мой плейлист </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink>Войти</S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
            )}
        </S.MainNav>
        <S.MainCenterBlock>
        <S.CenterblockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </S.SearchSvg>
          <S.SearchText
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"/>
        </S.CenterblockSearch>
        <S.TitelNotfound>
            <S.TitelNotfoundErrorText>404</S.TitelNotfoundErrorText>
            <S.TitelNotfoundErrorInformation>Страница не найдена<img src="img/smilecrying.png" alt="smilecrying" /></S.TitelNotfoundErrorInformation>
            <S.TitelNotfoundInfo>Возможно, она была удалена<br/> или перенесена на другой адрес</S.TitelNotfoundInfo>
            <S.NotfoundButton onClick={onClick}>Вернуться на главную</S.NotfoundButton>
        </S.TitelNotfound>
        </S.MainCenterBlock>
        <S.MainSidebar>
          <S.SidebarIcon>
            <svg alt="logout">
                <use xlinkHref="img/icon/sprite.svg#logout"> </use>
            </svg>
          </S.SidebarIcon>
        </S.MainSidebar>        
       </S.Main>
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
                        <Skeleton
                        width={55}
                        height={55}
                        baseColor="#202020"
                        highlightColor="#444"
                        />
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>                    
                       <S.TrackPlayAuthorLink href="http://">
                         <Skeleton
                            width={90}
                            baseColor="#202020"
                            highlightColor="#444"
                          />
                        </S.TrackPlayAuthorLink>                                            
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">
                        <Skeleton
                            width={90}
                            baseColor="#202020"
                            highlightColor="#444"
                        />
                      </S.TrackPlayAlbumLink>                                           
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
     </S.Container>
    </S.Wrapper>
    )
}