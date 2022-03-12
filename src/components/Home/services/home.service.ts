import { ICharacter } from 'components/Home/models/home.models';
import { CharacterController, http } from 'config/services';
import { IGenericResponse } from 'utils/commonModels';

const getCharactersList = async (page?: string) => {
  const { data } = await http.get<IGenericResponse<ICharacter>>(CharacterController.CHARACTER, {
    params: {
      page,
    },
  });
  return data;
};

const homeService = {
  getCharactersList,
};

export default homeService;
