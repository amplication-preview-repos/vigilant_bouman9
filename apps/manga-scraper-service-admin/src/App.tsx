import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MangaList } from "./manga/MangaList";
import { MangaCreate } from "./manga/MangaCreate";
import { MangaEdit } from "./manga/MangaEdit";
import { MangaShow } from "./manga/MangaShow";
import { ArtistList } from "./artist/ArtistList";
import { ArtistCreate } from "./artist/ArtistCreate";
import { ArtistEdit } from "./artist/ArtistEdit";
import { ArtistShow } from "./artist/ArtistShow";
import { AuthorList } from "./author/AuthorList";
import { AuthorCreate } from "./author/AuthorCreate";
import { AuthorEdit } from "./author/AuthorEdit";
import { AuthorShow } from "./author/AuthorShow";
import { ChapterList } from "./chapter/ChapterList";
import { ChapterCreate } from "./chapter/ChapterCreate";
import { ChapterEdit } from "./chapter/ChapterEdit";
import { ChapterShow } from "./chapter/ChapterShow";
import { GenreList } from "./genre/GenreList";
import { GenreCreate } from "./genre/GenreCreate";
import { GenreEdit } from "./genre/GenreEdit";
import { GenreShow } from "./genre/GenreShow";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MangaScraperService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Manga"
          list={MangaList}
          edit={MangaEdit}
          create={MangaCreate}
          show={MangaShow}
        />
        <Resource
          name="Artist"
          list={ArtistList}
          edit={ArtistEdit}
          create={ArtistCreate}
          show={ArtistShow}
        />
        <Resource
          name="Author"
          list={AuthorList}
          edit={AuthorEdit}
          create={AuthorCreate}
          show={AuthorShow}
        />
        <Resource
          name="Chapter"
          list={ChapterList}
          edit={ChapterEdit}
          create={ChapterCreate}
          show={ChapterShow}
        />
        <Resource
          name="Genre"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
          show={GenreShow}
        />
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
      </Admin>
    </div>
  );
};

export default App;
