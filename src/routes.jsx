import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/Signin/Signin";
import { SingUp } from "./pages/Signup/Signup";
import { MainPage } from "./pages/main/main";
import { MyTrackPage } from "./pages/myTrack/MyTrack";
import { NotFoundPage } from "./pages/NotFound/notFound";
import { PlaylistPage } from "./pages/playlistPage/playlistPage";
import { Protection } from "./components/Protection/Protection";





export const AppRoutes = ({user}) => {
    return(
        <Routes>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/SignUp" element={<SingUp />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route element={<Protection isAllowed={Boolean(user)} />}>
                <Route path="/favorites" element={<MyTrackPage />}></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/category/:id" element={<PlaylistPage />}></Route>
            </Route>
        </Routes>
    )
}