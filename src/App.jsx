// import './App.style.js';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.style.js'
import { AppRoutes } from './routes.jsx';




function App() {
  return (
    <>
    <GlobalStyle />
    <S.Wrapper>
      <S.Container>
        <AppRoutes user={localStorage.getItem('user')} />
      </S.Container>
    </S.Wrapper>
    </>
  );
}

export default App;
