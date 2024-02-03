import { GlobalStyle } from "../../components/Global.styles/Global.styles";
import { useParams } from "react-router-dom";
import { Categories } from "../../constant";
import * as S from './playlistPage.styles'

export const PlaylistPage = () => {
    const params = useParams()
    const category = Categories.find(
        (category) => category.id === Number(params.id),
    )
    const title = `${category.title}`

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <S.Text>
                        Здесь будет плейлист: {title}
                    </S.Text>
                </S.Container>
            </S.Wrapper>
        </>
    )
}