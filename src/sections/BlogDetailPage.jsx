import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import blogPosts from '../data/blogData';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-poppins">
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
            <h1 className="text-4xl font-bold font-montserrat">Blog post not found</h1>
            <Link to="/blog" className="text-primary hover:underline text-sm font-bold uppercase tracking-widest">
              ← Back to Blog
            </Link>
          </div>
          <Footer />
      </div>
    );
  }

  const sameCategoryPosts = blogPosts.filter(p => p.id !== slug && p.category === post.category).slice(0, 3);
  const relatedPosts = sameCategoryPosts.length > 0
    ? sameCategoryPosts
    : blogPosts.filter(p => p.id !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Image */}
      {post.image && (
        <div className="w-full h-[55vh] md:h-[65vh] relative overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        </div>
      )}

      <main className={`pb-24 ${post.image ? '-mt-40 relative z-10' : 'pt-24'}`}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {!post.image && (
            <div className="pt-4" />
          )}

            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-3 h-3" /> Back
            </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary border border-primary/20 mb-6">
                {post.category}
              </span>
                <h1 className="text-3xl md:text-5xl font-extrabold font-montserrat tracking-tight mb-8 leading-snug">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</div>
                <div className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</div>
                <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</div>
              </div>
            </div>

            <div className="w-full h-px bg-border/10 my-10" />

            {/* Excerpt highlighted */}
            <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-10 italic border-l-2 border-primary pl-6">
              {post.excerpt}
            </p>

            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-lg leading-relaxed text-muted-foreground font-light"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {post.serviceSlug && (
              <div className="mt-16 p-8 md:p-12 bg-foreground/[0.02] border border-border/5 rounded-[2rem]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Related Service</p>
                <Link
                  to={`/${post.serviceSlug}`}
                  className="inline-flex items-center gap-4 text-xl font-bold font-montserrat text-primary hover:text-foreground transition-colors"
                >
                  Learn about our {post.category} services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </motion.div>

          {relatedPosts.length > 0 && (
            <div className="mt-24">
              <h2 className="text-3xl font-bold font-montserrat tracking-tighter mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group bg-foreground/[0.02] border border-border/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300"
                  >
                    {related.image && (
                      <div className="aspect-[16/9] overflow-hidden relative">
                        <img
                          src={related.image}
                          alt={related.imageAlt || related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-[8px] font-bold uppercase tracking-widest text-primary mb-4">
                        {related.category}
                      </span>
                      <h3 className="text-base font-bold font-montserrat mb-3 group-hover:text-primary transition-colors leading-tight">
                        {related.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{related.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
