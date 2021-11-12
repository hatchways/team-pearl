import { FetchOptions } from '../../interface/FetchOptions';
import { AuthApiData } from '../../interface/AuthApiData';
import { API_BASE_URL } from './contants';

export async function updateProfile(username: string, email: string): Promise<AuthApiData> {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email }),
    credentials: 'include',
  };

  return await fetch(`${API_BASE_URL}/users/update`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}

export async function updatePassword(password: string, oldPassword: string): Promise<AuthApiData> {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, oldPassword }),
    credentials: 'include',
  };

  return await fetch(`${API_BASE_URL}/auth/update`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
