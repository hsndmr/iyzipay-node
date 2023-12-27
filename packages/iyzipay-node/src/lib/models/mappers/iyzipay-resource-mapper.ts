import { ResponseData, ResponseDataManager } from '../../response-data-manager';
import { IyzipayResource } from '../resources/iyzipay-resource';

export class IyzipayResourceMapper {
  protected responseData: ResponseData;
  protected responseDataManager: ResponseDataManager;

  constructor(data: ResponseData) {
    this.responseData = data;
    this.responseDataManager = new ResponseDataManager(data);
  }

  public mapResourceFrom(
    resource: IyzipayResource,
    responseData: ResponseData
  ) {
    resource.setStatus(this.responseDataManager.get('status'));
    resource.setConversationId(this.responseDataManager.get('conversationId'));
    resource.setErrorCode(this.responseDataManager.get('errorCode'));
    resource.setErrorMessage(this.responseDataManager.get('errorMessage'));
    resource.setErrorGroup(this.responseDataManager.get('errorGroup'));
    resource.setLocale(this.responseDataManager.get('locale'));
    resource.setSystemTime(this.responseDataManager.get('systemTime'));
    resource.setRawResult(this.responseDataManager.get('rawResult'));

    return resource;
  }

  public mapResource(resource: IyzipayResource) {
    return this.mapResourceFrom(resource, this.responseData);
  }
}
