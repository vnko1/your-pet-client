export interface IApiError {
  statusCode: number;
  path: string;
  errorType: string;
  errorMessage: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isApiError = (error: any): error is IApiError => {
  return (
    "statusCode" in error &&
    "path" in error &&
    "errorType" in error &&
    "errorMessage" in error
  );
};
