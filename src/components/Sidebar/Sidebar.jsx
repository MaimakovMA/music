import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Sidebar.styles'
// import { useEffect, useState } from 'react'
import { Categories } from '../../constant';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Authorization';

function sidebar ({isLoading}) {

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  const [userData] = useContext(UserContext)
 
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
              <S.SidebarPersonalName>{userData}</S.SidebarPersonalName>
              <S.SidebarIcon onClick={handleLogout}>
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