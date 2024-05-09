import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

export class AxiosService {
  private static axiosService: AxiosService;

  private constructor() {}

  public static instance() {
    if (!AxiosService.axiosService) {
      AxiosService.axiosService = new AxiosService();
    }

    return AxiosService.axiosService;
  }

  public async post<Body, ReturnType>(
    url: string,
    config: AxiosRequestConfig<Body>,
  ): Promise<AxiosResponse<ReturnType>> {
    return axios
      .post(url, config.data, config)
      .then((result: AxiosResponse<ReturnType>) => {
        return Promise.resolve(result);
      })
      .catch(this.errorHandler);
  }

  async get<ReturnType>(
    url: string,
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<ReturnType>> {
    return axios
      .get(url, config)
      .then((result: AxiosResponse<ReturnType>) => {
        return Promise.resolve(result);
      })
      .catch(this.errorHandler);
  }

  public async patch<ReturnType>(
    url: string,
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<ReturnType>> {
    return axios
      .patch(url, config.data, config)
      .then((result: AxiosResponse<ReturnType>) => {
        return Promise.resolve(result);
      })
      .catch(this.errorHandler);
  }

  public async put<Body, ReturnType>(
    url: string,
    config: AxiosRequestConfig<Body>,
  ): Promise<AxiosResponse<ReturnType>> {
    return axios
      .put(url, config.data, config)
      .then((result: AxiosResponse<ReturnType>) => {
        return Promise.resolve(result);
      })
      .catch(this.errorHandler);
  }

  public async delete<Body, ReturnType>(
    url: string,
    config: AxiosRequestConfig<Body>,
  ): Promise<AxiosResponse<ReturnType>> {
    return axios
      .delete(url, config)
      .then(result => {
        return Promise.resolve(result);
      })
      .catch(this.errorHandler);
  }

  private errorHandler = (err: AxiosError) => {
    return Promise.reject(err);
  };
}
