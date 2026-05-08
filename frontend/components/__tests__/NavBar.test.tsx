import { render, screen } from '@testing-library/react';
import Navbar from '../NavBar';


// Mock zustand store
jest.mock('@/store/authStore', () => ({
  useAuthStore: () => ({
    isAuthenticated: false,
    user: null,
    logout: jest.fn(),
  }),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test('renders Navbar with branding', () => {
  render(<Navbar />);
  expect(screen.getByText('MessageMate')).toBeDefined();
});

test('renders Sign In link when not authenticated', () => {
  render(<Navbar />);
  expect(screen.getByText('Sign In')).toBeDefined();
});
