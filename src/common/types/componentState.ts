import { AxiosError } from 'axios';

export interface IComponentState {
  loading: boolean;
  error: AxiosError | null;
  complete: boolean | null;
}
