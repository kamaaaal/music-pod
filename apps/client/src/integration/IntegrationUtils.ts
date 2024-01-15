/* genertic api response Type */

export type ApiResponse<resPayload = any> = {
  status: string;
  message: string;
  payload?: resPayload;
  statusCode?: number;
  errors?: Record<string, string[]>;
};
