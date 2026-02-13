'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isRegistering, setIsRegistering] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    if (searchParams.get('mode') === 'signup') {
      setIsRegistering(true);
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const endpoint = isRegistering ? '/auth/register' : '/auth/authenticate';
      const payload = isRegistering 
        ? { firstname, lastname, email, password } 
        : { email, password };

      const response = await api.post(endpoint, payload);

      const { token } = response.data;
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(isRegistering ? 'Registration failed.' : 'Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">
          {isRegistering ? 'Create Account' : 'Login'}
        </h2>
        
        {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          {isRegistering && (
            <div className="flex gap-2">
              <input
                 type="text"
                 placeholder="First Name"
                 value={firstname}
                 onChange={(e) => setFirstname(e.target.value)}
                 className="w-1/2 p-2 border rounded"
                 required
              />
              <input
                 type="text"
                 placeholder="Last Name"
                 value={lastname}
                 onChange={(e) => setLastname(e.target.value)}
                 className="w-1/2 p-2 border rounded"
                 required
              />
            </div>
          )}
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {isRegistering ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm">
          <button 
            type="button" 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-500 hover:underline"
          >
            {isRegistering ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
