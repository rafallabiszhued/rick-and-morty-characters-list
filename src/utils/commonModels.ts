export interface IGenericResponse<T> {
  info: IInfoResponse;
  results: T[];
}

export interface IInfoResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
