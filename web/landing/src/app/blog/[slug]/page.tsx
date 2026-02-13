'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { ArrowLeft, User, Calendar, Clock, Share2, Printer } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  // This would typically come from an API or database based on the slug
  const post = {
    title: slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Article Title",
    content: `
      <p class="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-slate-900">Introduction</h2>
      <p class="mb-6">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-slate-900">Key Concepts</h2>
      <p class="mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <blockquote class="border-l-4 border-blue-600 pl-4 italic text-slate-700 mb-6 bg-slate-50 py-2 pr-2 rounded-r">
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      </blockquote>
      <h2 class="text-2xl font-bold mb-4 text-slate-900">Conclusion</h2>
      <p class="mb-6">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </p>
    `,
    author: "AI Team",
    date: "February 15, 2026",
    readTime: "5 min read",
    category: "Insights"
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-64 md:h-80 bg-gradient-to-r from-blue-600 to-indigo-700 w-full relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center border-b border-slate-100 pb-8 mb-8">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
                    <Printer className="h-4 w-4" />
                    Print
                  </button>
                </div>
              </div>

              <div 
                className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
