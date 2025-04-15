export type tResponse = {
  message: string;
  success: boolean;
  statusCode: number;
  path: string;
  timestamp: string | Date;
  data: any | null;
  error: any | null;
};
