export const BACKEND_API_URL:string = '/shopapi';

export class UrlRegistry {

  ngOnInit() {}

  public static rootBackendUrl():string {
    return BACKEND_API_URL;
  }

}
