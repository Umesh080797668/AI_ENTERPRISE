'use client';

import { useState } from 'react';
import { 
  File, 
  Search, 
  Upload, 
  Filter, 
  MoreVertical, 
  Download, 
  Trash2, 
  Grid, 
  List, 
  FileText,
  Image as ImageIcon,
  Database,
  Cloud,
  CheckCircle2,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const docs = [
  { id: 1, name: 'Q3 Financial Report', type: 'pdf', size: '2.4 MB', date: 'Oct 24, 2024', status: 'Ready' },
  { id: 2, name: 'Project Alpha Specs', type: 'docx', size: '1.2 MB', date: 'Oct 23, 2024', status: 'Processing' },
  { id: 3, name: 'Customer Feedback Agg', type: 'csv', size: '856 KB', date: 'Oct 22, 2024', status: 'Ready' },
  { id: 4, name: 'Logo Assets', type: 'png', size: '3.1 MB', date: 'Oct 20, 2024', status: 'Ready' },
  { id: 5, name: 'Meeting Notes', type: 'txt', size: '12 KB', date: 'Oct 19, 2024', status: 'Ready' },
  { id: 6, name: 'Backend Architecture', type: 'pdf', size: '5.6 MB', date: 'Oct 18, 2024', status: 'Failed' },
];

export default function DocumentsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [dragActive, setDragActive] = useState(false);
  const [documents, setDocuments] = useState(docs);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Mock upload logic would go here
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="text-rose-500" />;
      case 'docx': return <FileText className="text-blue-500" />;
      case 'csv': return <Database className="text-emerald-500" />;
      case 'png': return <ImageIcon className="text-purple-500" />;
      default: return <File className="text-slate-400" />;
    }
  };

  const filteredDocs = selectedType 
    ? documents.filter(d => d.type === selectedType) 
    : documents;

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10" onDragEnter={handleDrag}>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Documents</h1>
          <p className="text-slate-500 mt-1">Manage and organize your knowledge base.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-100/50 p-1 rounded-lg">
            <Button 
                variant={viewMode === 'grid' ? "secondary" : "ghost"} 
                size="sm" 
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? "shadow-sm text-indigo-600 bg-white" : "text-slate-500"}
            >
                <Grid size={16} />
            </Button>
            <Button 
                variant={viewMode === 'list' ? "secondary" : "ghost"} 
                size="sm" 
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? "shadow-sm text-indigo-600 bg-white" : "text-slate-500"}
            >
                <List size={16} />
            </Button>
        </div>
      </div>

      {/* Drag & Drop Area Overlay */}
      {dragActive && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-500/10 backdrop-blur-sm border-2 border-indigo-500 border-dashed m-4 rounded-3xl"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center animate-bounce">
            <Cloud size={64} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold text-indigo-700">Drop files to upload</h3>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search files..." 
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2">
           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600">
                    <Filter className="h-4 w-4 mr-2" />
                    {selectedType ? selectedType.toUpperCase() : "Filter"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setSelectedType(null)}>All Types</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedType('pdf')}>PDF</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedType('docx')}>Word</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedType('csv')}>Spreadsheets</DropdownMenuItem>
              </DropdownMenuContent>
           </DropdownMenu>
           
           <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200" onClick={() => {}}>
              <Upload className="h-4 w-4 mr-2" />
              Upload
           </Button>
        </div>
      </div>

      {/* Content */}
      {documents.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
             <div className="bg-white p-4 rounded-full inline-block shadow-sm mb-4">
                <Cloud size={32} className="text-slate-400" />
             </div>
             <h3 className="text-lg font-semibold text-slate-900">No documents yet</h3>
             <p className="text-slate-500 mt-1 mb-6">Upload documents to start training your AI.</p>
             <Button variant="outline">Browse Files</Button>
        </div>
      ) : (
        <>
            {viewMode === 'list' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <div className="col-span-6 pl-2">Name</div>
                        <div className="col-span-2">Type</div>
                        <div className="col-span-2">Size</div>
                        <div className="col-span-2 text-right pr-2">Actions</div>
                    </div>
                    {filteredDocs.map((doc) => (
                         <div key={doc.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
                            <div className="col-span-6 flex items-center gap-3 pl-2">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    {getIcon(doc.type)}
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">{doc.name}</p>
                                    <p className="text-xs text-slate-400">{doc.date}</p>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="uppercase text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                                    {doc.type}
                                </span>
                            </div>
                            <div className="col-span-2 text-sm text-slate-500">{doc.size}</div>
                            <div className="col-span-2 flex justify-end gap-1 pr-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600">
                                    <Download size={16} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                                    <Trash2 size={16} />
                                </Button>
                            </div>
                         </div>
                    ))}
                </div>
            )}

            {viewMode === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Add New Card */}
                    <div 
                        className="group flex flex-col items-center justify-center h-full min-h-[200px] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-300 transition-all cursor-pointer"
                        onClick={() => {}} // Trigger upload
                    >
                        <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform mb-3">
                            <Plus size={24} className="text-indigo-500" />
                        </div>
                        <p className="font-semibold text-slate-600 group-hover:text-indigo-600">Upload New</p>
                    </div>

                    {filteredDocs.map((doc) => (
                        <Card key={doc.id} className="group rounded-2xl border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300 cursor-pointer overflow-hidden relative">
                             {/* Status Indicator */}
                            <div className="absolute top-3 right-3 z-10">
                                {doc.status === 'Ready' && <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full"><CheckCircle2 size={14} /></div>}
                                {doc.status === 'Processing' && <div className="bg-amber-100 text-amber-600 p-1 rounded-full animate-spin"><Cloud size={14} /></div>}
                            </div>

                            <CardContent className="p-0">
                                {/* Preview Area */}
                                <div className="h-32 bg-slate-50 group-hover:bg-slate-100 transition-colors flex items-center justify-center border-b border-slate-100">
                                     <div className="transform group-hover:scale-110 transition-transform duration-300">
                                        {React.cloneElement(getIcon(doc.type) as React.ReactElement, { size: 48 } as any)}
                                     </div>
                                </div>
                                
                                {/* Info Area */}
                                <div className="p-4">
                                     <div className="flex justify-between items-start mb-2">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-slate-900 truncate" title={doc.name}>{doc.name}</h3>
                                            <p className="text-xs text-slate-400 mt-1">{doc.size} • {doc.date}</p>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-slate-400">
                                                    <MoreVertical size={16} />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>Download</DropdownMenuItem>
                                                <DropdownMenuItem>Rename</DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                     </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </>
      )}

    </div>
  );
}

// Helper for React element cloning type safety
import React from 'react';
