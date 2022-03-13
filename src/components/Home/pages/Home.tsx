import ErrorAlert from 'common/ErrorAlert/ErrorAlert';
import LoadingIndicator from 'common/LoadingIndicator/LoadingIndicator';
import Card from 'components/Home/components/Card';
import StatusFilter from 'components/Home/components/StatusFilter';
import { ICharacter } from 'components/Home/models/home.models';
import homeService from 'components/Home/services/home.service';
import { useContextState } from 'contexts/GlobalContext';
import MainLayout from 'layouts/MainLayout';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from 'react-query';
import { IGenericResponse } from 'utils/commonModels';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const defaultPage = 1;
  const [page, setPage] = useState(defaultPage);
  const [hasMore, setHasMore] = useState(true);
  const [fetchCharacters, setFetchCharacters] = useState<ICharacter[]>([]);
  const { stateContext } = useContextState();

  const searchName = useMemo(() => stateContext.search, [stateContext.search]);

  const { data: characters, isError, error } = useQuery<IGenericResponse<ICharacter>, Error>(
    ['characters', page, searchName],
    () => homeService.getCharactersList(page, searchName),
    {
      onSuccess: ({ results }) => {
        handleFetchCharacters(results);
      },
      onError: () => {
        //if not found elements, for example by search, api should response empty results in status 200 and alert show not found results. Now is error 404.
        resetFetchCharacters();
      },
    },
  );

  const handleFetchCharacters = useCallback(
    (results: ICharacter[]) => {
      if (page === defaultPage) {
        return setFetchCharacters(results);
      }
      setFetchCharacters(prevFetchCharacters => prevFetchCharacters?.concat(results));
    },
    [page],
  );

  //reset if active filters
  const resetFetchCharacters = useCallback(() => {
    setFetchCharacters([]);
    setPage(defaultPage);
    setHasMore(true);
  }, []);

  const fetchMoreData = useCallback(() => {
    if (characters) {
      const totalCountItem = characters?.info?.count;
      if (fetchCharacters?.length >= totalCountItem) {
        setHasMore(false);
        return;
      }
      setPage(prevPage => prevPage + 1);
    }
  }, [characters, fetchCharacters?.length]);

  //reset state if change filter search
  useEffect(() => {
    resetFetchCharacters();
  }, [resetFetchCharacters, searchName]);

  console.log(fetchCharacters, page, searchName, hasMore);

  return (
    <MainLayout>
      <ErrorAlert error={error} isError={isError} />
      <StatusFilter />
      <InfiniteScroll
        dataLength={fetchCharacters.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<LoadingIndicator isLoading={!isError} />}
        endMessage={
          <p className="text-center">
            <b>All items loaded!</b>
          </p>
        }
      >
        <div className="justify-center flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-5">
            {fetchCharacters?.map((character, index) => (
              <Card character={character} key={index} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </MainLayout>
  );
};

export default Home;
