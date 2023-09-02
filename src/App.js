import { Route, Routes } from "react-router-dom";
import { Layout } from "./Component/Layout";
import { Home } from "./Component/Home";
import { Trending } from "./Component/Trending";
import { Subscriptions } from "./Component/Subscriptions";
import { VideoPage } from "./Component/VideoPage";
import { Profil } from "./Component/profil";
import { ProfileHome } from "./Component/profil/ProfileHome";
import { Nora } from "./Component/Nora";
import { NoraHome } from "./Component/Nora/noraHome";
import { BelleHome } from "./Component/profileBelle/belleHome";
import { ProfileBelle } from "./Component/profileBelle";
import { Video } from "./Component/profil/Video";
import { Profileemma } from "./Component/ProfileEmma";
import { EmmaHome } from "./Component/ProfileEmma/EmmaHome";
import { Video2 } from "./Component/Nora/video2";
import { Video3 } from "./Component/profileBelle/video3";
import { Video4 } from "./Component/ProfileEmma/video4";
import { Library } from "./Component/library";
import { History } from "./Component/history";
import { Watch } from "./Component/watch";
import { Favourites } from "./Component/Favourites";
import { Liked } from "./Component/liked";
import { Music } from "./Component/music";
import { Games } from "./Component/games";
import { ErrorPage } from "./Component/errorPage";
// import {Auth} from './Component/auth/auth'





function App() {
  return (
   <Layout>
    <Routes>
      {/* <Route path='/' element={<Auth/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route path='/videoPage/:id' element={<VideoPage/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path='/subscriptions' element={<Subscriptions/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/watch' element={<Watch/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/liked' element={<Liked/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/games' element={<Games/>}/>
      <Route path='/profile' element={<Profil/>}>
        <Route index element={<ProfileHome/>}/>
        <Route path='video' element={<Video/>}/>
      </Route>
      <Route path='/nora' element={<Nora/>}>
        <Route index element={<NoraHome/>}/>
        <Route path='/nora/video2' element={<Video2/>}/>
      </Route>
      <Route path='/belle' element={<ProfileBelle/>}>
        <Route index element={<BelleHome/>}/>
        <Route path='/belle/video3' element={<Video3/>}/>
      </Route>
      <Route path='/emma' element={<Profileemma/>}>
        <Route index element={<EmmaHome/>}/>
        <Route path='/emma/video4' element={<Video4/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
   </Layout>
  );
}

export default App;
