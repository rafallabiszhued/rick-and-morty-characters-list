import { ICharacter } from 'components/Home/models/home.models';
import { CharacterController, http } from 'config/services';
import { IGenericResponse } from 'utils/commonModels';
import { convertToString } from 'utils/converts';

const getCharactersList = async (page: number, name?: string) => {
  const { data } = await http.get<IGenericResponse<ICharacter>>(CharacterController.CHARACTER, {
    params: {
      page: convertToString(page),
      name,
    },
  });
  return data;
};

const homeService = {
  getCharactersList,
};

export default homeService;
