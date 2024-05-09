import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {AxiosService} from './apiService';
import {BookRequest} from '../interfaces/book';
import {SearchResultBooks} from '../types/book';

class BooksService {
  private static bookService: BooksService;
  private baseURL: string | undefined = '';
  private axiosService: AxiosService;

  private constructor() {
    this.baseURL = process.env.API_URL;
    this.axiosService = AxiosService.instance();
  }

  public static instance = () => {
    if (!BooksService.bookService) {
      BooksService.bookService = new BooksService();
    }
    return BooksService.bookService;
  };

  public searchBooks = async (
    params: BookRequest,
  ): Promise<AxiosResponse<SearchResultBooks>> => {
    const url = `${this.baseURL}/search.json`;
    const config: AxiosRequestConfig = {
      url: url,
      params: params,
    };

    return await this.axiosService.get<SearchResultBooks>(url, config);
  };
}

export {BooksService};
