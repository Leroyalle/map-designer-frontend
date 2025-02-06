import { AuthTokens } from '@/types';
import Cookie from 'js-cookie';

class FetchClient {
  private API_URL = process.env.API_URL as string;

  constructor(private defaultHeaders: Record<string, string> = {}) {}

  async get<T>(
    path: string,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T, undefined>(path, 'GET', isAuth, undefined, headers);
  }

  async post<T, B>(
    path: string,
    body?: Record<string, B>,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T, B>(path, 'POST', isAuth, body, headers);
  }

  async put<T, B>(
    path: string,
    body?: Record<string, B>,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T, B>(path, 'PUT', isAuth, body, headers);
  }

  async delete<T>(
    path: string,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T, undefined>(path, 'DELETE', isAuth, undefined, headers);
  }

  async patch<T, B>(
    path: string,
    body?: Record<string, B>,
    isAuth: boolean = false,
    headers?: Record<string, string>,
  ): Promise<T> {
    return this.fetch<T, B>(path, 'PATCH', isAuth, body, headers);
  }

  private async fetch<T, B>(
    path: string,
    method: string,
    isAuth: boolean,
    body?: Record<string, B>,
    headers?: Record<string, string>,
  ): Promise<T> {
    const url = `${this.API_URL}${path}`;
    const jwtToken = Cookie.get(AuthTokens.JWT);
    const authorizationHeader: HeadersInit =
      isAuth && jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {};

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...this.defaultHeaders,
          ...authorizationHeader,
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const $fetch = new FetchClient();
