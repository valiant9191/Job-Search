// import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useFetchToken } from 'hooks';
import { Error } from './pages/error';
import { Favorites } from './pages/favorites';
import { SearchJobItem } from './pages/searchJobItem';
import { SearchJobList } from './pages/searchJobList';
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
  // console.log(JSON.parse(localStorage.access_token).access_token)




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
