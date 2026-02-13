'use client';

import { useState } from 'react';
import api from '../../lib/axios';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'chat'>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([]);
  const [isChatting, setIsChatting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUploadStatus('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);
    setUploadStatus('');

    try {
      await api.post('/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully!');
      setFile(null);
    } catch (error: any) {
      console.error('Upload error:', error);
      if (error.response) {
        setUploadStatus(`Error: ${error.response.data.message || error.response.statusText}`);
      } else {
         setUploadStatus('Error uploading file. Please try again.');
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleSendMessage = async () => {
      if (!chatMessage.trim()) return;

      const newMessage = { role: 'user', content: chatMessage };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      setIsChatting(true);

      try {
          const response = await api.post('/documents/chat', { query: chatMessage });
          setChatHistory(prev => [...prev, { role: 'assistant', content: response.data.answer }]);
      } catch (error: any) {
          console.error("Chat error", error);
          setChatHistory(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error processing your request." }]);
      } finally {
          setIsChatting(false);
      }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('upload')}
            className={`${
              activeTab === 'upload'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Upload Document
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`${
              activeTab === 'chat'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Chat with AI
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === 'upload' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload Context Document</h2>
            <div className="max-w-xl">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select File (PDF, DOCX, TXT - Max 10MB)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.txt"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                />
                <button
                  onClick={handleUpload}
                  disabled={isUploading || !file}
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                    ${isUploading || !file ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
              {uploadStatus && (
                <div className={`mt-4 p-3 rounded-md text-sm ${uploadStatus.startsWith('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  {uploadStatus}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="flex flex-col h-[600px]">
            <h2 className="text-xl font-semibold mb-4">Chat with Knowledge Base</h2>
            
            <div className="flex-1 overflow-y-auto mb-4 border rounded-md p-4 bg-gray-50 space-y-4">
              {chatHistory.length === 0 ? (
                <div className="text-gray-400 text-center mt-10">Ask a question to get started...</div>
              ) : (
                chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-white border text-gray-900 shadow-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask your question..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
              />
              <button
                onClick={handleSendMessage}
                disabled={isChatting || !chatMessage.trim()}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
