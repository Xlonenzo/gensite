import React, { useState, useEffect } from 'react';
import { File, Download, Calendar, User, Trash2 } from 'lucide-react';
import { getDocuments, deleteDocument, Document } from '../../utils/documentStorage';

export function DocumentList() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      setIsLoading(true);
      const docs = await getDocuments();
      setDocuments(docs);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar documentos');
      console.error('Error loading documents:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (doc: Document) => {
    const link = document.createElement('a');
    link.href = doc.content;
    link.download = doc.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este documento?')) {
      try {
        await deleteDocument(id);
        await loadDocuments();
      } catch (err) {
        console.error('Error deleting document:', err);
        alert('Erro ao excluir documento');
      }
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brown-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Carregando documentos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p>{error}</p>
        <button
          onClick={loadDocuments}
          className="mt-4 px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="p-2 bg-brown-100 rounded-lg">
              <File className="w-8 h-8 text-brown-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <span className="bg-brown-100 text-brown-600 px-2 py-1 rounded-full">
                  {doc.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(doc.dateUploaded)}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {doc.author}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {doc.fileType} • {formatFileSize(doc.fileSize)}
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDownload(doc)}
                    className="flex items-center text-brown-600 hover:text-brown-700 font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {documents.length === 0 && (
        <div className="text-center text-gray-600 py-8">
          Nenhum documento encontrado.
        </div>
      )}
    </div>
  );
}