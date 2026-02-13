import { motion } from 'framer-motion';
import { FileText, Folder, Image, Video, File, Upload, Search, Plus, Download } from 'lucide-react';
import { useState } from 'react';

const initialFileItems = [
  { name: 'Company_Policies.pdf', type: 'pdf', size: '2.4 MB', icon: <FileText className="h-4 w-4" />, color: 'text-red-500', id: 1 },
  { name: 'Q4_Reports.xlsx', type: 'excel', size: '1.8 MB', icon: <FileText className="h-4 w-4" />, color: 'text-green-500', id: 2 },
  { name: 'Product_Demo.mp4', type: 'video', size: '45.2 MB', icon: <Video className="h-4 w-4" />, color: 'text-blue-500', id: 3 },
  { name: 'Team_Photos', type: 'folder', size: '128 MB', icon: <Folder className="h-4 w-4" />, color: 'text-yellow-500', id: 4 },
  { name: 'Wireframes.fig', type: 'figma', size: '892 KB', icon: <File className="h-4 w-4" />, color: 'text-purple-500', id: 5 },
  { name: 'Screenshots', type: 'folder', size: '67 MB', icon: <Folder className="h-4 w-4" />, color: 'text-yellow-500', id: 6 },
  { name: 'Meeting_Notes.docx', type: 'word', size: '456 KB', icon: <FileText className="h-4 w-4" />, color: 'text-blue-600', id: 7 },
  { name: 'Dashboard_Mockup.png', type: 'image', size: '3.2 MB', icon: <Image className="h-4 w-4" />, color: 'text-pink-500', id: 8 },
];

export const FileManagement = () => {
  const [fileItems, setFileItems] = useState(initialFileItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const filteredFiles = fileItems.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNewFile = () => {
    const newFile = {
      name: `New_Document_${fileItems.length + 1}.txt`,
      type: 'text',
      size: '0 KB',
      icon: <FileText className="h-4 w-4" />,
      color: 'text-gray-500',
      id: Date.now()
    };
    setFileItems([newFile, ...fileItems]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Simulate file upload
    const newFile = {
      name: 'Uploaded_File.pdf',
      type: 'pdf',
      size: '1.2 MB',
      icon: <FileText className="h-4 w-4" />,
      color: 'text-red-500',
      id: Date.now()
    };
    setFileItems([newFile, ...fileItems]);
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-4">
            Universal File Support
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Connect any data source and watch as our AI transforms your files into searchable knowledge.
            From PDFs to videos, we handle it all with enterprise-grade security.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
          >
            {/* File Manager Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Knowledge Base Files</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search files..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addNewFile}
                    className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    title="Create new file"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* File List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredFiles.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-between px-6 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded ${file.type === 'folder' ? 'bg-yellow-50' : 'bg-slate-50'}`}>
                      <div className={file.color}>
                        {file.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {file.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {file.size} • {file.type.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <button className="hover:text-blue-600" title="Download">
                      <Download className="h-3 w-3" />
                    </button>
                    <span>Preview</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upload Zone */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-slate-200 p-6"
            >
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                  isDragOver
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-slate-300 hover:border-blue-400'
                } group`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className={`h-8 w-8 mx-auto mb-4 transition-colors ${
                  isDragOver ? 'text-blue-500' : 'text-slate-400 group-hover:text-blue-500'
                }`} />
                <div className={`transition-colors ${
                  isDragOver ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  <div className="font-medium mb-1">
                    {isDragOver ? 'Drop files here' : 'Drop files here or click to upload'}
                  </div>
                  <div className="text-sm text-slate-500">
                    Supports PDF, DOCX, XLSX, PPTX, images, videos, and more
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Integration Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-slate-500 mb-6">Connect with your favorite tools</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Google Drive', 'OneDrive', 'Dropbox', 'Slack', 'Notion', 'Jira', 'GitHub', 'Confluence'].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-slate-50 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};