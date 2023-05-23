import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useFetchToken } from 'hooks';
import { Favorites } from 'components/pages/favorites';
import { Error } from 'components/pages/error';
import { SearchJobItem } from 'components/pages/searchJobItem';
import { SearchJobList } from 'components/pages/searchJobList';
import { HeaderComponent } from './components/headerComponent'
import styles from './App.module.css';


function App() {
  const menuLinks = [
    { link: "/", label: "Поиск вакансий" },
    { link: "/favorites", label: "Избранное" }
  ]

  const { getData } = useFetchToken();
  if (!localStorage.access_token) {
    getData()
  }
  console.log(JSON.parse(localStorage.access_token).access_token)


  return (
    <div className={styles.app}>
      <HeaderComponent links={menuLinks} />
      <Routes>
        <Route path='/favorites' element={<Favorites />} errorElement={<Error />} />
        <Route path='/vacancy/:id' element={<SearchJobItem id='someID' />} errorElement={<Error />} />
        <Route path='/' index element={<SearchJobList />} errorElement={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export { App };
