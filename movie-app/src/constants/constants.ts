export const useQuery = (locationSearch: string) => {
  return new URLSearchParams(locationSearch);
};

export const getNavUrl = (searchParams: any) => {
  let queryParams = new URLSearchParams();
  for (let param in searchParams) {
    if (searchParams[param]) {
      queryParams.append(param, searchParams[param]);
    }
  }
  return `?${queryParams.toString()}`;
};
