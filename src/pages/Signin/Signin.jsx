import * as S from './Signin.styles.js'
import { GlobalStyle } from '../../components/Global.styles/Global.styles.js'; 
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate()
  const onClick = () => {
    localStorage.setItem('user', 'token')
    navigate('/')
  }
    return (
  <>
    <GlobalStyle />
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <S.ModalButtonLink to="/">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.ModalButtonLink>
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
            <S.ModalBtnEnter onClick={onClick}>
              <S.ModalButtonLink to="/">Войти</S.ModalButtonLink>
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp>
              <S.ModalButtonLink to="/register">Зарегистрироваться</S.ModalButtonLink>
            </S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  </>
    )
}

