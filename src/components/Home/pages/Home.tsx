import LoadingIndicator from 'common/LoadingIndicator/LoadingIndicator';
import Card from 'components/Home/components/Card';
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
          <p className="text-center">
            <b>All items loaded!</b>
          </p>
        }
      >
        <div className="justify-center flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-5">
            {fetchCharacters?.map((character) => (
              <Card character={character} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </MainLayout>
  );
};

export default Home;
