import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const posts = [
  {
    title: "Liderança Negra nas Organizações: Transformando o Ambiente Corporativo",
    excerpt: "Como a presença de lideranças negras está revolucionando a cultura organizacional e promovendo mudanças estruturais nas empresas brasileiras.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    date: "25 de Março, 2024",
    author: "Carlos Santos",
    category: "Liderança"
  },
  {
    title: "Tecnologia e Inclusão: Iniciativas que Estão Mudando o Cenário Tech",
    excerpt: "Conheça projetos inovadores que estão ampliando a presença de profissionais negros no setor de tecnologia.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    date: "23 de Março, 2024",
    author: "Patricia Silva",
    category: "Tecnologia"
  },
  {
    title: "ESG Racial: O Futuro dos Negócios é Antirracista",
    excerpt: "Como empresas estão incorporando práticas antirracistas em suas estratégias ESG e transformando o mercado.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093",
    date: "22 de Março, 2024",
    author: "Roberto Oliveira",
    category: "ESG"
  },
  {
    title: "Educação Antirracista: Práticas Transformadoras em Sala de Aula",
    excerpt: "Metodologias e abordagens inovadoras para implementar uma educação verdadeiramente inclusiva e antirracista.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    date: "20 de Março, 2024",
    author: "Maria Santos",
    category: "Educação"
  },
  {
    title: "Ancestralidade e Inovação: O Poder do Conhecimento Tradicional",
    excerpt: "Como saberes ancestrais africanos estão inspirando soluções inovadoras para desafios contemporâneos.",
    image: "https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa",
    date: "18 de Março, 2024",
    author: "Ana Oliveira",
    category: "Cultura"
  },
  {
    title: "Empreendedorismo Afro: Histórias de Sucesso e Superação",
    excerpt: "Conheça empreendedores negros que estão revolucionando o mercado e inspirando novas gerações.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    date: "16 de Março, 2024",
    author: "João Silva",
    category: "Empreendedorismo"
  }
];

export function BlogPosts() {
  return (
    <div className="space-y-12">
      {posts.map((post, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.category}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-brown-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-brown-600 hover:text-brown-700 font-medium group"
            >
              Ler mais
              <svg 
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      ))}

      <div className="flex justify-center mt-12">
        <button className="bg-brown-600 text-white px-8 py-3 rounded-full hover:bg-brown-700 transition-colors">
          Carregar mais posts
        </button>
      </div>
    </div>
  );
}