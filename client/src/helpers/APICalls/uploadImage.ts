import { FetchOptions } from '../../interface/FetchOptions';
import { AuthApiData } from '../../interface/AuthApiData';

export async function updateProfilePicture(formData: FormData): Promise<AuthApiData> {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: formData,
    credentials: 'include',
  };

  return await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/upload-image`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
