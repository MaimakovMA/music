import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/Signin/Signin";
import { SingUp } from "./pages/Signup/Signup";
import { MainPage } from "./pages/main/main";
import { MyTrackPage } from "./pages/myTrack/MyTrack";
import { NotFoundPage } from "./pages/NotFound/notFound";
import { PlaylistPage } from "./pages/playlistPage/playlistPage";
import { Protection } from "./components/Protection/Protection";





export const AppRoutes = ({ user, tracks, setTracks, isLoading, setIsLoading, isPlayerVisible, setIsPlayerVisible,
    loadingTracksError, setActiveTrack}) => {
    return(
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SingUp />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<Protection isAllowed={Boolean(user)} />}>
                <Route path="/favorites" element={<MyTrackPage />} />
                <Route path="/" element={<MainPage
                    tracks={tracks}
                    setTracks={setTracks}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    isPlayerVisible={isPlayerVisible}
                    setIsPlayerVisible={setIsPlayerVisible}
                    loadingTracksError={loadingTracksError}
                    setActiveTrack={setActiveTrack}
                 />} />
                <Route path="/category/:id" element={<PlaylistPage />} />
            </Route>
        </Routes>
    )
}