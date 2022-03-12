type ConfigType = {
  API_URL: string;
};
const dev: ConfigType = {
  API_URL: 'https://rickandmortyapi.com/api',
};

const prod: ConfigType = {
  API_URL: 'https://rickandmortyapi.com/api',
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
