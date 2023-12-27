import axios from 'axios';
import { IyzipayHttpClient } from './iyzipay-http-client';
import { Options } from './options';
import { Request } from './request';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('IyzipayHttpClient', () => {
  let client: IyzipayHttpClient;
  let options: Options;

  beforeEach(() => {
    mockedAxios.create.mockReturnValue(mockedAxios);
    options = new Options();
    options.setApiKey('testApiKey');
    options.setBaseUrl('https://api.example.com');
    options.setSecretKey('testSecretKey');
    client = new IyzipayHttpClient(options);
  });

  describe('get method', () => {
    it('should make a GET request and return data', async () => {
      // Arrange
      const mockResponse = { data: 'response data' };
      mockedAxios.get.mockResolvedValue(mockResponse);

      // Act
      const response = await client.get('/test-url');

      // Assert
      expect(response).toEqual(mockResponse);
      expect(mockedAxios.get).toHaveBeenCalledWith('/test-url', undefined);
    });

    it('should handle GET request errors', async () => {
      // Arrange
      const errorMessage = 'Network Error';
      mockedAxios.get.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      expect(client.get('/test-url')).rejects.toThrow(errorMessage);
    });
  });

  describe('post method', () => {
    it('should make a POST request and return data', async () => {
      // Arrange
      const mockResponse = { data: 'response data' };
      const postData = { key: 'value' };
      mockedAxios.post.mockResolvedValue(mockResponse);

      // Act
      const response = await client.post('/test-url', postData);

      // Assert
      expect(response).toEqual(mockResponse);
      expect(mockedAxios.post).toHaveBeenCalledWith(
        '/test-url',
        postData,
        undefined
      );
    });

    it('should handle POST request errors', async () => {
      // Arrange
      const errorMessage = 'Network Error';
      mockedAxios.post.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      expect(client.post('/test-url', {})).rejects.toThrow(errorMessage);
    });
  });

  describe('put method', () => {
    it('should make a PUT request and return data', async () => {
      // Arrange
      const mockResponse = { data: 'response data' };
      const putData = { key: 'value' };
      mockedAxios.put.mockResolvedValue(mockResponse);

      // Act
      const response = await client.put('/test-url', putData);

      // Assert
      expect(response).toEqual(mockResponse);
      expect(mockedAxios.put).toHaveBeenCalledWith(
        '/test-url',
        putData,
        undefined
      );
    });

    it('should handle PUT request errors', async () => {
      // Arrange
      const errorMessage = 'Network Error';
      mockedAxios.put.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      expect(client.put('/test-url', {})).rejects.toThrow(errorMessage);
    });
  });

  describe('delete method', () => {
    it('should make a DELETE request and return data', async () => {
      const mockResponse = { data: 'response data' };
      mockedAxios.delete.mockResolvedValue(mockResponse);

      const response = await client.delete('/test-url');
      expect(response).toEqual(mockResponse);
      expect(mockedAxios.delete).toHaveBeenCalledWith('/test-url', undefined);
    });

    it('should handle DELETE request errors', async () => {
      // Arrange
      const errorMessage = 'Network Error';
      mockedAxios.delete.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      expect(client.delete('/test-url')).rejects.toThrow(errorMessage);
    });
  });

  describe('setOptions method', () => {
    it('should update the base URL', () => {
      // Arrange
      const newOptions = new Options();
      newOptions.setBaseUrl('https://api.newexample.com');
      client.setOptions(newOptions);

      // Act & Assert
      expect(client.getOptions().getBaseUrl()).toEqual(
        'https://api.newexample.com'
      );
    });
  });

  describe('Http Headers Generation', () => {
    it('should generate correct headers', () => {
      // Arrange
      const request = new Request();

      // Act
      const headers = client.getHttpHeaders(request);

      // Assert
      expect(headers['Accept']).toEqual('application/json');
      expect(headers['Content-type']).toEqual('application/json');
      expect(headers['Authorization']).toMatch('IYZWS testApiKey');
      expect(headers['x-iyzi-rnd']).toHaveLength(16);
    });

    it('should generate correct headers v2', () => {
      // Arrange
      const request = new Request();

      // Act
      const headers = client.getHttpHeadersV2('uri', request);

      // Assert
      expect(headers['Accept']).toEqual('application/json');
      expect(headers['Content-type']).toEqual('application/json');
      expect(headers['Authorization']).toMatch('IYZWSv2');
    });
  });

  describe('Authorization String Generation', () => {
    const request = new Request();

    it('should generate correct Authorization string', () => {
      // Arrange
      const rnd = 'randomString';

      // Act
      const authString = client.prepareAuthorizationString(request, rnd);

      // Assert
      expect(authString).toEqual(
        'IYZWS testApiKey:CQMLmtpLvadhF8ObJxhudvO+z6Q='
      );
    });

    it('should generate correct Authorization string V2', () => {
      // Arrange
      const rnd = 'randomString';
      const uri = '/test';

      // Act
      const authStringV2 = client.prepareAuthorizationStringV2(
        uri,
        request,
        rnd
      );

      // Assert
      expect(authStringV2).toEqual(
        'IYZWSv2 YXBpS2V5OnRlc3RBcGlLZXkmcmFuZG9tS2V5OnJhbmRvbVN0cmluZyZzaWduYXR1cmU6MDgwODY2YjdjYzYyZDFmNTUwNTExOGMxMjI3ZWI5MWRmNGE5YmVlYWI4OGU2NTcyY2RjYWI2YzRmMThlNWNhMg=='
      );
    });
  });
});
