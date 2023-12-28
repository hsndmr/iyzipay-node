import { ResponseData, ResponseDataManager } from '../../response-data-manager';
import { IyzipayResource } from '../resources/iyzipay-resource';

export class IyzipayResourceMapper {
  protected responseData: ResponseData;

  constructor(data: ResponseData) {
    this.setResponseData(data);
  }

  setResponseData(data: ResponseData) {
    this.responseData = data;
  }

  public mapResourceFrom(
    resource: IyzipayResource,
    responseData
  ): IyzipayResource {
    const responseDataManager = new ResponseDataManager(responseData);

    resource.setStatus(responseDataManager.get('status'));
    resource.setConversationId(responseDataManager.get('conversationId'));
    resource.setErrorCode(responseDataManager.get('errorCode'));
    resource.setErrorMessage(responseDataManager.get('errorMessage'));
    resource.setErrorGroup(responseDataManager.get('errorGroup'));
    resource.setLocale(responseDataManager.get('locale'));
    resource.setSystemTime(responseDataManager.get('systemTime'));
    resource.setResponseData(responseData);

    return resource;
  }

  public mapResource(resource: IyzipayResource): IyzipayResource {
    return this.mapResourceFrom(resource, this.responseData);
  }
}
