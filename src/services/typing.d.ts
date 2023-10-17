declare namespace API {
  type Response<T> = {
    statusCode: number;
    data: T;
    message: string;
  };
  type TableResponse<T> = Response<{ total: number; list: T[] }>;
  type TableParams<T> = T & { current: number; pageSize: number };
}
