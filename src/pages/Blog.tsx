import React from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { DocumentList } from '../components/blog/DocumentList';
import { BlogCategories } from '../components/blog/BlogCategories';

export function Blog() {
  return (
    <>
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <DocumentList />
          </div>
          <div>
            <BlogCategories />
          </div>
        </div>
      </div>
    </>
  );
}