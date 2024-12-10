import React, { useState } from 'react';
import { Upload, File, Plus } from 'lucide-react';
import { saveDocument } from '../../utils/documentStorage';

export function DocumentUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const content = await readFileAsBase64(file);
      const doc = await saveDocument({
        ...formData,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        content,
        author: 'Usuário Atual', // In a real app, this would come from auth
      });

      // Reset form
      setFormData({ title: '', category: '', description: '' });
      event.target.value = '';
      
      // Trigger page refresh to show new document
      window.location.reload();
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Erro ao fazer upload do documento. Tente novamente.');
    } finally {
      setIsUploading(false);
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Enviar Documento</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título do Documento
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Categoria
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="reports">Relatórios</option>
            <option value="research">Pesquisas</option>
            <option value="articles">Artigos</option>
            <option value="presentations">Apresentações</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descrição
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
            required
          ></textarea>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4 flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-medium text-brown-600 hover:text-brown-700"
              >
                <span>Fazer upload de arquivo</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                />
              </label>
              <p className="pl-1">ou arraste e solte</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOCX, XLSX até 10MB</p>
          </div>
        </div>

        {isUploading && (
          <div className="text-center text-gray-600">
            Fazendo upload do documento...
          </div>
        )}
      </form>
    </div>
  );
}