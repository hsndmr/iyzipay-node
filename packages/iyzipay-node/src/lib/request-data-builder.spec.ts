import { RequestDataBuilder } from './request-data-builder';
import { RequestDataSupplier } from './request-data-supplier.interface';

describe('RequestDataBuilder', () => {
  it('should create an empty instance', () => {
    // Arrange
    const builder = RequestDataBuilder.create();

    // Act & Assert
    expect(builder.get()).toEqual({});
  });

  it('should add key-value pairs correctly', () => {
    // Arrange
    const builder = RequestDataBuilder.create()
      .add('key1', 'value1')
      .add('key2', 123);

    // Act & Assert
    expect(builder.get()).toEqual({ key1: 'value1', key2: 123 });
  });

  it('should ignore null and undefined values', () => {
    // Arrange
    const builder = RequestDataBuilder.create()
      .add('key1', null)
      .add('key2', undefined);

    // Act & Assert
    expect(builder.get()).toEqual({});
  });

  it('should handle RequestDataSupplier instances correctly', () => {
    // Arrange
    const mockSupplier = {
      getRequestData: jest.fn().mockReturnValue({ key: 'value' }),
      toRequestDataString: () => 'mockSupplier',
    };

    const builder = RequestDataBuilder.create().add(
      'supplierKey',
      mockSupplier as RequestDataSupplier
    );

    // Act && Assert
    expect(builder.get()).toEqual({ supplierKey: { key: 'value' } });
    expect(mockSupplier.getRequestData).toHaveBeenCalled();
  });

  it('should add arrays correctly', () => {
    // Arrange
    const mockSupplier = {
      getRequestData: jest.fn().mockReturnValue({ key: 'value' }),
      toRequestDataString: () => 'mockSupplier',
    };

    const builder = RequestDataBuilder.create().addArray('arrayKey', [
      'value1',
      'value2',
      mockSupplier as RequestDataSupplier,
    ]);

    // Act && Assert
    expect(builder.get()).toEqual({
      arrayKey: ['value1', 'value2', { key: 'value' }],
    });
  });

  it('should add empty array', () => {
    // Arrange
    const builder = RequestDataBuilder.create().addArray('arrayKey', []);

    // Act && Assert
    expect(builder.get()).toEqual({
      arrayKey: [],
    });
  });
});
