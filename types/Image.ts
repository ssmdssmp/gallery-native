export interface IImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    first_name: string;
    last_name: string;
  };
}
