'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Paperclip, 
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw,
  Clock,
  MessageSquare,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth-context';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sources?: string[];
}

export default function ChatPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I've analyzed the documents you uploaded. Based on the Q3 Financial Report, revenue has increased by 18% compared to the previous quarter, driven primarily by the Enterprise sector expansion.",
        timestamp: new Date(),
        sources: ['Q3_Financial_Report.pdf', 'Executive_Summary_Oct.docx']
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const suggestions = [
      "Summarize the latest financial report",
      "Draft an email about project delays",
      "Explain the new architecture diagram",
      "Find discrepancies in the Q3 data"
  ];

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-100px)] -mt-4 gap-6">
      
      {/* Sidebar - History */}
      <div className="hidden lg:flex w-80 flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
         <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md cursor-pointer" onClick={() => setMessages([])}>
                <Sparkles size={16} className="mr-2" />
                New Chat
            </Button>
         </div>
         <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase px-3 py-2">Today</p>
            {["Project Alpha Review", "Financial Analysis Q3", "Client Meeting Notes"].map(title => (
                <div key={title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 cursor-pointer group transition-colors">
                    <MessageSquare size={16} className="text-slate-400 group-hover:text-indigo-500" />
                    <span className="truncate text-sm font-medium">{title}</span>
                </div>
            ))}
            <p className="text-xs font-semibold text-slate-400 uppercase px-3 py-2 mt-4">Yesterday</p>
            {["System Refactor Ideas", "Bug Report #402"].map(title => (
                <div key={title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 cursor-pointer group transition-colors">
                    <MessageSquare size={16} className="text-slate-400 group-hover:text-indigo-500" />
                    <span className="truncate text-sm font-medium">{title}</span>
                </div>
            ))}
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full relative">
        
        {/* Header (Mobile Only or refined) */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white z-10">
            <div className="flex items-center gap-3">
                 <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                    <Bot size={20} />
                 </div>
                 <div>
                    <h2 className="font-bold text-slate-900">AI Assistant</h2>
                    <p className="text-xs text-green-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Online & Ready
                    </p>
                 </div>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600">
                <MoreHorizontal size={20} />
            </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/30">
            {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                     <div className="h-20 w-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 shadow-sm rotate-3 transform hover:rotate-6 transition-transform">
                        <Sparkles size={40} className="text-indigo-500" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-800 mb-2">How can I help you today?</h3>
                     <p className="text-slate-500 max-w-md mb-8">I can analyze documents, summarize workflows, or help you generate new content for your projects.</p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                        {suggestions.map((text, i) => (
                            <button 
                                key={i}
                                onClick={() => setInput(text)}
                                className="p-4 text-left bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md hover:text-indigo-600 rounded-xl transition-all duration-200 text-sm font-medium text-slate-600"
                            >
                                {text}
                            </button>
                        ))}
                     </div>
                </div>
            ) : (
                messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={cn(
                            "flex gap-4 max-w-4xl mx-auto w-full animate-fade-in",
                            msg.role === 'user' ? "justify-end" : "justify-start"
                        )}
                    >
                        {msg.role === 'assistant' && (
                            <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-sm mt-1">
                                <Bot size={14} />
                            </div>
                        )}
                        
                        <div className={cn(
                            "flex flex-col relative group",
                            msg.role === 'user' ? "items-end max-w-[80%]" : "items-start max-w-[80%]"
                        )}>
                             <div className={cn(
                                "p-4 rounded-2xl shadow-sm text-sm leading-relaxed",
                                msg.role === 'user' 
                                    ? "bg-indigo-600 text-white rounded-br-none" 
                                    : "bg-white border border-slate-100 text-slate-700 rounded-bl-none"
                            )}>
                                {msg.content}
                            </div>
                            
                            {/* Sources Section for Assistant */}
                            {msg.role === 'assistant' && msg.sources && (
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {msg.sources.map(source => (
                                        <div key={source} className="flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-500 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer transition-colors shadow-sm">
                                            <FileText size={10} />
                                            {source}
                                        </div>
                                    ))}
                                </div>
                            )}

                             {/* Feedback Actions (Assistant Only) */}
                             {msg.role === 'assistant' && (
                                <div className="absolute -bottom-6 left-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600"><Copy size={12} /></button>
                                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600"><ThumbsUp size={12} /></button>
                                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600"><ThumbsDown size={12} /></button>
                                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600"><RefreshCw size={12} /></button>
                                </div>
                             )}
                        </div>

                         {msg.role === 'user' && (
                            <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mt-1">
                                {user ? user.name.charAt(0) : <User size={14} />}
                            </div>
                        )}
                    </div>
                ))
            )}
            
            {isTyping && (
                <div className="flex gap-4 max-w-4xl mx-auto w-full">
                     <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-sm">
                        <Bot size={14} />
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 rounded-bl-none shadow-sm flex gap-1 items-center h-10">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
             <div className="max-w-4xl mx-auto relative flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all shadow-sm">
                <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl">
                    <Paperclip size={20} />
                </Button>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-0 focus:ring-0 p-2.5 max-h-32 min-h-[44px] resize-none outline-none text-slate-700"
                    rows={1}
                />
                <Button 
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className={cn(
                        "h-10 w-10 rounded-xl transition-all shadow-md",
                        input.trim() 
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                            : "bg-slate-200 text-slate-400"
                    )}
                    size="icon"
                >
                    <Send size={18} />
                </Button>
             </div>
             <p className="text-center text-xs text-slate-400 mt-2">AI can make mistakes. Please verify important information.</p>
        </div>
      </div>
    </div>
  );
}
