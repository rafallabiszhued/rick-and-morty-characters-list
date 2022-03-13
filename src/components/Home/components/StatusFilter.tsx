import RadioButton from 'common/Inputs/RadioButton';
import { useContextState } from 'contexts/GlobalContext';
import useDispatchGlobalContext from 'hooks/useDispatchGlobalContext';
import React, { useMemo } from 'react';
import { CharacterStatus } from 'utils/constants';

interface StatusFilterProps {}

const StatusFilter: React.FC<StatusFilterProps> = (props) => {
  const { dispatchCharacterStatus } = useDispatchGlobalContext();
  const { stateContext } = useContextState();

  const character = useMemo(() => stateContext.characterStatus, [stateContext.characterStatus]);

  const handleChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatchCharacterStatus(value);
  };

  return (
    <div className="flex">
      <span className="mr-2">Character status: </span>
      <RadioButton
        label={'ANY'}
        option={CharacterStatus.ANY}
        handleChangeRadioButton={handleChangeRadioButton}
        value={character}
      />
      <RadioButton
        label={'ALIVE'}
        option={CharacterStatus.ALIVE}
        handleChangeRadioButton={handleChangeRadioButton}
        value={character}
      />
      <RadioButton
        label={'DEAD'}
        option={CharacterStatus.DEAD}
        handleChangeRadioButton={handleChangeRadioButton}
        value={character}
      />
      <RadioButton
        label={'UNKNOWN'}
        option={CharacterStatus.UNKNOWN}
        handleChangeRadioButton={handleChangeRadioButton}
        value={character}
      />
    </div>
  );
};

export default StatusFilter;
