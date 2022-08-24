export interface ContainerInfoInterface {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ContainerListResponse {
  Response: string;
  Search: ContainerInfoInterface[];
  totalResults: string;
}

export interface ContainerInterface {
  Title: string;
  Type: string;
  Year: string;
}

export interface ContainerTableInfo {
  containerId: string;
  origin: string;
  destination: string;
  status: string;
  description: string;
  dimensions: string;
  isBooked: string;
}
