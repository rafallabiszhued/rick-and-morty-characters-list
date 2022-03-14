import { ICharacter } from 'components/Home/models/home.models';
import { IGenericResponse } from 'utils/commonModels';

export const getTotalCountItem = (characters: IGenericResponse<ICharacter>) => {
  return characters?.info?.count;
};
