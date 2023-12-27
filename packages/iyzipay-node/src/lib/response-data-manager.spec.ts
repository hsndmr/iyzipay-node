import { ResponseDataManager, ResponseData } from './response-data-manager';

describe('ResponseDataManager', () => {
  const initialData: ResponseData = { name: 'Hasan Demir', age: 28 };

  it('should return initial data with getData()', () => {
    // Arrange
    const manager = new ResponseDataManager(initialData);

    // Act & Assert
    expect(manager.getData()).toEqual(initialData);
  });

  it('should update data with setData()', () => {
    // Arrange
    const manager = new ResponseDataManager(initialData);
    const updatedData: ResponseData = { name: 'Hasan Demir', age: 29 };

    // Act
    manager.setData(updatedData);

    // Assert
    expect(manager.getData()).toEqual(updatedData);
  });

  it('should return specific data with get<T>()', () => {
    // Arrange
    const manager = new ResponseDataManager(initialData);

    // Act
    const name = manager.get<string>('name');

    // Assert
    expect(name).toBe('Hasan Demir');
  });

  it('should return undefined for non-existing key with get<T>()', () => {
    // Arrange
    const manager = new ResponseDataManager(initialData);

    // Act
    const nonExisting = manager.get<string>('nonExistingKey');

    // Assert
    expect(nonExisting).toBeUndefined();
  });
});
