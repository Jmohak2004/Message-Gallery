import request from 'supertest';
import app from '../src/app';
import * as AuthService from '../src/services/auth.service';

jest.mock('../src/services/auth.service');

describe('Auth Endpoints', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user successfully', async () => {
      const mockResult = {
        user: { id: '1', name: 'Test', email: 'test@example.com' },
        token: 'fake-token'
      };

      (AuthService.registerUser as jest.Mock).mockResolvedValue(mockResult);

      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test',
          email: 'test@example.com',
          password: 'password123'
        });

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockResult);
    });

    it('should return 400 for invalid email', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Test',
          email: 'invalid-email',
          password: 'password123'
        });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Validation Error');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login an existing user successfully', async () => {
      const mockResult = {
        user: { id: '1', name: 'Test', email: 'test@example.com' },
        token: 'fake-token'
      };

      (AuthService.loginUser as jest.Mock).mockResolvedValue(mockResult);

      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123'
        });

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockResult);
    });
  });
});
