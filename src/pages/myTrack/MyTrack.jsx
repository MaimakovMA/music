import * as S from './myTrack.styles.js'
import { GlobalStyle } from '../../components/Global.styles/Global.styles';

export const MyTrackPage = () => {
    return(
        <>
        <GlobalStyle />
        <S.Wrapper>
          <S.Container>
            <S.Text>
                Здесь будут треки <br />
                конкретного пользователя
            </S.Text>
          </S.Container>
        </S.Wrapper>
        </>
    );
};