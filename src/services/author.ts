import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {AxiosService} from './apiService';
import {Author} from '../types/author';

class AuthorService {
  private static authorService: AuthorService;
  private baseURL: string | undefined = '';
  private axiosService: AxiosService;

  private constructor() {
    this.baseURL = process.env.API_URL;
    this.axiosService = AxiosService.instance();
  }

  public static instance = () => {
    if (!AuthorService.authorService) {
      AuthorService.authorService = new AuthorService();
    }
    return AuthorService.authorService;
  };

  public getAuthor = async (
    authorKey: string,
  ): Promise<AxiosResponse<Author>> => {
    const url = `${this.baseURL}/authors/${authorKey}.json`;
    const config: AxiosRequestConfig = {
      url: url,
    };

    return await this.axiosService.get<Author>(url, config);
  };
}

export {AuthorService};
