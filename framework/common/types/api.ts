export type ApiFetcherOptions = {
  query: string;
  variables?: Variables;
};

export type Variables = { [key: string]: string | any | undefined };

export type ApiFetcherResult<T> = {
  data: T;
};

export interface ApiConfig {
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResult<T>>;
}

export interface ApiHooks {
  cart: {
    useAddItem: any;
  };
}

export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResult<T>>;

export interface ApiProviderContext {
  hooks: ApiHooks;
  fetcher: ApiFetcher;
}
