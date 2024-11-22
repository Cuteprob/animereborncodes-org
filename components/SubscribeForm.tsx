'use client';

import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      // TODO: 实现实际的订阅逻辑
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // });
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') {
              setStatus('idle');
              setMessage('');
            }
          }}
          placeholder="Enter your email"
          className={`w-full rounded-lg bg-gray-700 px-4 py-2 text-white placeholder-gray-400 transition focus:outline-none focus:ring-2 ${
            status === 'error' ? 'ring-2 ring-red-500' : 'focus:ring-yellow-500'
          }`}
        />
        {message && (
          <p
            className={`mt-1 text-sm ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'success'}
        className={`rounded-lg px-6 py-2 font-lilita-one font-bold text-black transition ${
          status === 'success'
            ? 'bg-green-500 cursor-not-allowed'
            : 'bg-yellow-500 hover:bg-yellow-400'
        }`}
      >
        {status === 'success' ? 'Subscribed!' : 'Subscribe'}
      </button>
    </form>
  );
};

export default SubscribeForm;
