import LoadingIndicator from 'common/LoadingIndicator/LoadingIndicator';
import { ICharacter } from 'components/Home/models/home.models';
import homeService from 'components/Home/services/home.service';
import MainLayout from 'layouts/MainLayout';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from 'react-query';
import { IGenericResponse } from 'utils/commonModels';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [fetchCharacters, setFetchCharacters] = useState<ICharacter[]>([]);

  const { data: characters } = useQuery<IGenericResponse<ICharacter>>(
    ['characters', page],
    () => homeService.getCharactersList(page),
    {
      onSuccess: (response) => {
        handleFetchCharacters(response.results);
      },
    },
  );

  const handleFetchCharacters = (results: ICharacter[]) => {
    setFetchCharacters((prevFetchCharacters) => prevFetchCharacters?.concat(results));
  };

  const fetchMoreData = () => {
    if (characters) {
      const totalCountItem = characters?.info?.count;
      if (fetchCharacters?.length >= totalCountItem) {
        setHasMore(false);
        return;
      }
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <MainLayout>
      <InfiniteScroll
        dataLength={fetchCharacters.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingIndicator isLoading />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>All items loaded!</b>
          </p>
        }
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-5">
            {fetchCharacters?.map((character) => (
              <div className="flex justify-center" key={character.id}>
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                  <img className="rounded-t-lg" src={character.image} alt={character.name} />
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-bold mb-2">{character.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </MainLayout>
  );
};

export default Home;
