import Skeleton from 'react-loading-skeleton'
import * as S from './Sidebar.styles'
import { useEffect, useState } from 'react'


function sidebar () {
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }, [])

    if(isLoading) {
      
      return (
        <S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
              <S.SidebarIcon>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"> </use>
                </svg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
              <S.SidebarList>
                <S.SidebarItem>
                  <Skeleton
                    width={250}
                    height={150}
                    count={3}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
                </S.SidebarItem>
              </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
      )
    }
    return (
        <S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
              <S.SidebarIcon>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"> </use>
                </svg>
              </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
              <S.SidebarList>
                <S.SidebarItem>
                  <S.SidebarLink href="http://">
                    <S.SidebarImg
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                  <S.SidebarLink href="http://">
                    <S.SidebarImg
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                <S.SidebarItem>
                  <S.SidebarLink href="http://">
                    <S.SidebarImg
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>
    )
}

export default sidebar;