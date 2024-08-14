'use client';

import { useChat } from 'ai/react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      keepLastMessageOnError: true,
    });

  return (
    <>
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch gap-8">
      {messages.map(message => (
        <div key={message.id} className='whitespace-pre-wrap'>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}

      {isLoading && (
        <div className='flex gap-8'>
          ...Loading
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className='flex gap-8 text-black'>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          placeholder='Type something...'
          className='p-2 border border-gray-300 rounded shadow-xl text-black'
        />
        <button className='text-black bg-green-500 p-2 rounded-md' >Submit</button>
      </form>
      </div>
    </>
  );
}