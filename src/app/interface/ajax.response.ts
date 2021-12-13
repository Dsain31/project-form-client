export interface AjaxResponse<T = void> {
  data: T;
  message: string;
  error: boolean;
}