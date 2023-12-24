import { BaseModel } from '../base-model';
import { FlexibleData } from '../flexible-data.interface';
import { RequestDataBuilder } from '../request-data-builder';
import { RequestStringBuilder } from '../request-string-builder';
import { BasketItemType } from './enums';

export class BasketItem extends BaseModel {
  private id: string;
  private price: string;
  private name: string;
  private category1: string;
  private category2: string;
  private itemType: BasketItemType;
  private subMerchantKey: string;
  private subMerchantPrice: string;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getPrice(): string {
    return this.price;
  }

  public setPrice(price: string): void {
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCategory1(): string {
    return this.category1;
  }

  public setCategory1(category1: string): void {
    this.category1 = category1;
  }

  public getCategory2(): string {
    return this.category2;
  }

  public setCategory2(category2: string): void {
    this.category2 = category2;
  }

  public getItemType(): BasketItemType {
    return this.itemType;
  }

  public setItemType(itemType: BasketItemType): void {
    this.itemType = itemType;
  }

  public getSubMerchantKey(): string {
    return this.subMerchantKey;
  }

  public setSubMerchantKey(subMerchantKey: string): void {
    this.subMerchantKey = subMerchantKey;
  }

  public getSubMerchantPrice(): string {
    return this.subMerchantPrice;
  }

  public setSubMerchantPrice(subMerchantPrice: string): void {
    this.subMerchantPrice = subMerchantPrice;
  }

  public getRequestData(): FlexibleData {
    return RequestDataBuilder.create()
      .add('id', this.getId())
      .add('price', this.getPrice())
      .add('name', this.getName())
      .add('category1', this.getCategory1())
      .add('category2', this.getCategory2())
      .add('itemType', this.getItemType())
      .add('subMerchantKey', this.getSubMerchantKey())
      .add('subMerchantPrice', this.getSubMerchantPrice())
      .get();
  }

  public toPKIRequestString(): string {
    return RequestStringBuilder.create()
      .append('id', this.getId())
      .append('price', this.getPrice())
      .append('name', this.getName())
      .append('category1', this.getCategory1())
      .append('category2', this.getCategory2())
      .append('itemType', this.getItemType())
      .append('subMerchantKey', this.getSubMerchantKey())
      .append('subMerchantPrice', this.getSubMerchantPrice())
      .getRequestString();
  }
}
