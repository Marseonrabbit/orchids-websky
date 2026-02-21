import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import blogPosts from '../data/blogData';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = [...new Set(blogPosts.map(p => p.category))];
    return ["All", ...cats];
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (activeCategory !== "All") {
      posts = posts.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  const t = {
    title: "Insights & Ideas",
    subtitle: "Our Latest Thinking",
    search: "Search articles...",
    readMore: "Read More",
    noResults: "No articles found matching your search.",
    showing: "articles"
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
        <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tight mb-6 leading-tight"
            >
              {t.title}
            </motion.h1>
            <p className="text-primary font-bold uppercase tracking-[0.4em] text-xs">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 no-scrollbar flex-wrap">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'border-border/10 hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.search}
                className="w-full bg-foreground/5 border border-border/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-primary transition-all text-foreground"
              />
            </div>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-10">
            {filteredPosts.length} {t.showing}
          </p>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">{t.noResults}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              {filteredPosts.map((post, i) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-foreground/[0.02] border border-border/5 rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all duration-500"
                >
                  <div className="aspect-[16/7] bg-foreground/5 relative overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-background/70 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-primary border border-primary/30">
                      {post.category}
                    </div>
                    <div className="absolute bottom-6 right-6 px-3 py-1 bg-background/70 backdrop-blur-md rounded-full text-[9px] font-bold text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-2.5 h-2.5" /> {post.readTime}
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
                      <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</div>
                      <div className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</div>
                    </div>
                      <Link to={`/blog/${post.id}`}>
                          <h3 className="text-xl md:text-2xl font-bold font-montserrat mb-4 group-hover:text-primary transition-colors leading-snug hover:text-primary cursor-pointer">
                            {post.title}
                          </h3>
                        </Link>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-all"
                    >
                      {t.readMore} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          </div>
        </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
