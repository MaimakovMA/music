import { useState } from 'react';
import PlayList from '../PlayList/PlayList';
import AuthorList from '../SearchBy/AuthorList';
import YearList from '../SearchBy/YearList';
import GenreList from '../SearchBy/GenreList';
import * as S from './Centerblock.styles'



function centerBlock () {
  const [filterActive, setFilterActive] = useState(null)
  const toggleFilter = (nameFilter) => {
    if (filterActive===nameFilter) {
      setFilterActive(null)
      return
    }
    setFilterActive(nameFilter)

  }

    return (
      <S.MainCenterBlock>
        <S.CenterblockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterblockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
          <S.FilterTitle>Искать по:</S.FilterTitle>
          <S.WrapperFilter>
            <S.FilterButton $isActive={filterActive==='author'} onClick={() => toggleFilter("author")}>
              исполнителю
            </S.FilterButton>
            {filterActive==='author' && <AuthorList/>}
          </S.WrapperFilter> 
          <S.WrapperFilter>
            <S.FilterButton $isActive={filterActive==='year'} onClick={() => toggleFilter("year")}>
              году выпуска
            </S.FilterButton>
            {filterActive==='year' && <YearList/>}
          </S.WrapperFilter>        
          <S.WrapperFilter>
            <S.FilterButton $isActive={filterActive==='genre'} onClick={() => toggleFilter("genre")}>
              жанру
            </S.FilterButton>
            {filterActive==='genre' && <GenreList/>}             
          </S.WrapperFilter>               
        </S.CenterblockFilter>
        <S.CenterblockContent>
          <S.ContentTitle className="playlist-title">
            <S.PlayListTitleCol1>Трек</S.PlayListTitleCol1>
            <S.PlayListTitleCol2>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol2>
            <S.PlayListTitleCol3>АЛЬБОМ</S.PlayListTitleCol3>
            <S.PlayListTitleCol4>
              <S.PlayListTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </S.PlayListTitleSvg>
            </S.PlayListTitleCol4>
          </S.ContentTitle>
            <PlayList />
        </S.CenterblockContent>
      </S.MainCenterBlock>
          
    )
}

export default centerBlock;