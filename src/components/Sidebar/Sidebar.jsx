import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Sidebar.styles'
import { useEffect, useState } from 'react'
import { Categories } from '../../constant';

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
                {Categories.map((category) => {
                  return (
                    <S.SidebarItem key={category.id}>
                  <S.SidebarLink id={category.id}
                  to={`/category/${category.id}`}>
                    <S.SidebarImg
                      src={category.img}
                      alt={category.img}
                    />
                  </S.SidebarLink>
                </S.SidebarItem>
                  )
                })}                
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>
    )
}

export default sidebar;