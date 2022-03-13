import { ICharacter } from 'components/Home/models/home.models';
import React, { memo } from 'react';

interface CardProps {
  character: ICharacter;
}

const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg" src={character.image} alt={character.name} />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">{character.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
