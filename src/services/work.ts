import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {AxiosService} from './apiService';
import {Work} from '../types/work';

class WorkService {
  private static workService: WorkService;
  private baseURL: string | undefined = '';
  private axiosService: AxiosService;

  private constructor() {
    this.baseURL = process.env.API_URL;
    this.axiosService = AxiosService.instance();
  }

  public static instance = () => {
    if (!WorkService.workService) {
      WorkService.workService = new WorkService();
    }
    return WorkService.workService;
  };

  public getWork = async (workKey: string): Promise<AxiosResponse<Work>> => {
    const url = `${this.baseURL}${workKey}.json`;
    const config: AxiosRequestConfig = {
      url: url,
    };

    return await this.axiosService.get<Work>(url, config);
  };
}

export {WorkService};
