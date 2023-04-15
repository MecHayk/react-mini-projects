import React, { useEffect, useState } from 'react';
import '../../styles/photo.scss';
import Collection from './Collection';

const cats = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

function PhotoApp() {
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : '';

    fetch(`https://63d7cc2b5dbd7232442d40de.mockapi.io/photos?page=${page}&limit=3&${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="photoBody">
      <div className="PhotoApp">
        <h1>Моя коллекция фотографий</h1>
        <div className="top">
          <ul className="tags">
            {cats.map((obj, i) => (
              <li
                onClick={() => setCategoryId(i)}
                className={categoryId === i ? 'active' : ''}
                key={obj.name}>
                {obj.name}
              </li>
            ))}
          </ul>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
            placeholder="Поиск по названию"
          />
        </div>
        <div className="content">
          {isLoading ? (
            <h2>Идет загрузка...</h2>
          ) : (
            collection
              .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, i) => <Collection key={i} name={obj.name} images={obj.photos} />)
          )}
        </div>
        <ul className="pagination">
          {[...Array(5)].map((_, i) => (
            <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotoApp;
