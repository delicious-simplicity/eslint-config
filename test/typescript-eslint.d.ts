export type Email = string;
export type Password = string;
export type User = string;
export type PhoneNumber = string;
export type Token = string;

export type HttpMethod = 'get' | 'options' | 'head' | 'request' | 'delete' | 'post' | 'put' | 'patch';

export interface BaseAccountResponse {
  active: number;
  jwt: Token;
  physicalLimitation: boolean;
  privacyPolicyVersion?: number;
  termsOfServiceVersion?: number;
  isPromoEligible: boolean;
}

export interface AccountSensitiveInfo {
  emailAddress: Email;
  phoneNumber: PhoneNumber;
}

export interface Dictionary<T> {
  [Key: string]: T;
}

export interface AxiosOptions<CancelToken> {
  method: HttpMethod;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: Dictionary<any> | Record<string, unknown>;
  cancelToken?: CancelToken;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Dictionary<any> | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Dictionary<any> | string;
}
