import { ICharacter } from 'components/Home/models/home.models';
import homeService from 'components/Home/services/home.service';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { useQuery } from 'react-query';
import { IGenericResponse } from 'utils/commonModels';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const {
    data: characters,
    isFetching,
    error,
    isError,
  } = useQuery<IGenericResponse<ICharacter>>(['characters'], () => homeService.getCharactersList());

  console.log(characters, 'chars');

  return (
    <MainLayout>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-5">
          {characters?.results.map((result) => (
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={result.image} alt={result.name} />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-bold mb-2">{result.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
