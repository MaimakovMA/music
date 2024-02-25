// import './App.style.js';
import { GlobalStyle } from './components/Global.styles/Global.styles.js';
import * as S from './App.style.js'
import { AppRoutes } from './routes.jsx';
import { UserContext } from './Authorization.js';
import { useState } from 'react';





function App() {


const [userData, setUserData] = useState(
  JSON.parse(JSON.stringify(localStorage.getItem('user'))) ?? 'Не авторизован'
)
  

  

  return (
    <>
    <GlobalStyle />
    <UserContext.Provider value={[userData, setUserData]}>
    <S.Wrapper>
      <S.Container>
        <AppRoutes 
          user={localStorage.getItem('user')}/>        
      </S.Container>
    </S.Wrapper>
    </UserContext.Provider>
    </>
  );
}

export default App;
