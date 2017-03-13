export const BACKEND_API_URL:string = '/shop/api';

export class UrlRegistry {

  ngOnInit() {}

  public static rootBackendUrl():string {
    return BACKEND_API_URL;
  }

}