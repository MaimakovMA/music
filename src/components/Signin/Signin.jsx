
import * as S from './Signin.styles.js'
import { GlobalStyle } from './components/Global.styles/Global.styles.js';

const signIn = () => {
    return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInputLogin
              className="login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              className="password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <a href="../index.html">Войти</a>
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp>
              <a href="signup.html">Зарегистрироваться</a>
            </S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  </>
    )
}

export default signIn;