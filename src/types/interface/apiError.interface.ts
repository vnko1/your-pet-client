export interface IApiError {
  statusCode: number;
  path: string;
  errorType: string;
  errorMessage: string;
}

export const isApiError = (error: object): error is IApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    typeof error.statusCode === "number" &&
    typeof error.path === "string" &&
    typeof error.errorType === "string" &&
    typeof error.errorMessage === "string"
  );
};
