import * as S from './Signup.styles.js'
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js'; 

export const SingUp = () => {
    return (
    <>
      <GlobalStyle />
        <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalButtonLink to="/">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.ModalButtonLink>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
            />
            <S.ModalBtnEnter>
              <S.ModalButtonLink to="/">Зарегистрироваться</S.ModalButtonLink>
            </S.ModalBtnEnter>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  </>
    )
}

