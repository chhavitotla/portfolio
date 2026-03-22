import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Sparkles, Code2, Database, Play, Brain, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: "ChefMate",
    subtitle: "Full-Stack AI Meal Planning System",
    description: "An intelligent meal planning platform leveraging hybrid retrieval and a multi-agent LangGraph architecture to deliver personalized, constraint-aware recipe recommendations — reducing decision fatigue with 92% of users reporting faster meal selection.",
    highlights: [
      "Hybrid Retrieval System: Built with FastAPI, Next.js, MongoDB, and FAISS using deterministic filtering + semantic search for personalized, constraint-aware recipe recommendations",
      "Multi-Agent Planning: Designed a LangGraph-based multi-agent system for meal optimization incorporating nutrition scoring, pantry balancing, and iterative refinement — achieving avg 800ms end-to-end latency (990ms under 5 concurrent users)",
      "Production-Grade AI Pipeline: Engineered with Pydantic + Zod schema validation, Redis-based rate limiting, and fallback-safe LLM orchestration — 100% request success rate across 50 load-tested requests and 100% schema rejection rate on malformed inputs",
      "User Impact: 87% of users reported improved organization and budgeting; 92% reported faster meal selection"
    ],
    technologies: ["FastAPI", "Next.js", "MongoDB", "FAISS", "LangGraph", "Redis", "Pydantic", "Zod"],
    github: "https://github.com/chhavitotla/pantry-to-plate",
    demo: "https://pantry-to-plate-nine.vercel.app",
    featured: true,
    theme: "primary",
    icon: Brain
  },
  {
    title: "PocketCafe",
    subtitle: "Full-Stack AI Coffee Ordering Platform",
    description: "A full-stack AI web platform with secure JWT authentication, customizable coffee configurations, and a 4-stage RAG pipeline — with 80% of surveyed users reporting increased ordering likelihood.",
    highlights: [
      "Full-Stack Platform: Built with React 19, Node.js, Express, MongoDB, and Python — secure JWT authentication, protected routes, and persistent user-linked order storage with customizable coffee configurations",
      "4-Stage RAG Pipeline: Engineered hybrid retrieval → allergy safety filter → relevance reranking → LLM synthesis using LangChain, FAISS, and Google Gemini — avg 4.3s end-to-end latency across 20 queries with 100% allergy-safe filtering accuracy on nut-restricted queries",
      "Secure REST API: JWT authentication, bcrypt password hashing, and MongoDB-persisted order management — avg 303ms full-flow latency (signup → login → create → fetch) across 20 runs and 100% protected route rejection rate on unauthenticated requests"
    ],
    technologies: ["React 19", "Node.js", "Express", "MongoDB", "Python", "LangChain", "FAISS", "Google Gemini", "JWT"],
    github: "https://github.com/chhavitotla/pocketCafe",
    demo: "https://youtu.be/4DaxFy9s7k8",
    featured: true,
    theme: "neon-cyan",
    icon: Code2
  },
  {
    title: "CramIt",
    subtitle: "RAG-Powered Academic Assistant for PDFs",
    description: "Automates academic PDF processing into structured notes, flashcards, and real-time Q&A using Retrieval-Augmented Generation.",
    highlights: [
      "Built with Python, LangChain, and Ollama to generate notes, flashcards, and Q&A from academic PDFs",
      "Implemented a Node.js + Express.js backend with MongoDB, improving API response times by up to 60%",
      "Validated on 15+ PDFs, achieving 20–30% faster prep time with modular prompt pipelines"
    ],
    technologies: ["Python", "LangChain", "Ollama", "Node.js", "Express.js", "MongoDB", "RAG"],
    github: "https://github.com/chhavitotla/cramIt",
    demo: null,
    featured: false,
    theme: "primary",
    icon: Brain
  },
  {
    title: "ResuMate",
    subtitle: "GenAI Resume Reviewer & Optimizer",
    description: "Modular GenAI chatbot that analyzes resumes and delivers tailored feedback for structure, language, and keyword optimization.",
    highlights: [
      "Implemented with Python, LangChain, Streamlit, and Ollama using prompt-based logic",
      "Analyzed 20+ resumes across roles, delivering contextual, actionable feedback",
      "Improved shortlisting chances by up to 40% through LLM-based critique generation"
    ],
    technologies: ["Python", "LangChain", "Streamlit", "Ollama", "GenAI"],
    github: "https://github.com/chhavitotla/resuMate",
    demo: null,
    featured: false,
    theme: "neon-cyan",
    icon: Shield
  }
];

export function ProjectsSection() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating Tech Elements */}
      <div className="absolute top-32 right-20 opacity-20">
        <Code2 className="w-16 h-16 text-primary floating-animation" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Database className="w-12 h-12 text-accent floating-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions built with cutting-edge technologies,
            showcasing expertise in <span className="text-primary font-semibold">AI</span>,
            <span className="text-accent font-semibold"> full-stack development</span>, and
            <span className="text-neon-green font-semibold"> system design</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                ref={(el) => projectRefs.current[index] = el}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <Card className={`group hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ${
                  project.theme === 'primary' ? 'border-primary/20 hover:border-primary/40 hover:shadow-primary/10' :
                  project.theme === 'neon-cyan' ? 'border-accent/20 hover:border-accent/40 hover:shadow-accent/10' :
                  'border-neon-green/20 hover:border-neon-green/40 hover:shadow-neon-green/10'
                } bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm overflow-hidden`}>

                  {/* Project Header */}
                  <CardHeader className="pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-4">
                          {/* Enhanced Icon Container */}
                          <div className={`p-4 rounded-2xl ${
                            project.theme === 'primary' ? 'bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30' :
                            project.theme === 'neon-cyan' ? 'bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30' :
                            'bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30'
                          } group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                            <Icon className={`w-8 h-8 relative z-10 ${
                              project.theme === 'primary' ? 'text-primary' :
                              project.theme === 'neon-cyan' ? 'text-accent' :
                              'text-neon-green'
                            }`} />
                            <div className={`absolute inset-0 ${
                              project.theme === 'primary' ? 'bg-primary/10' :
                              project.theme === 'neon-cyan' ? 'bg-accent/10' :
                              'bg-neon-green/10'
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                            <CardTitle className={`text-2xl lg:text-3xl font-bold ${
                              project.theme === 'primary' ? 'text-primary group-hover:text-accent' :
                              project.theme === 'neon-cyan' ? 'text-accent group-hover:text-primary' :
                              'text-neon-green group-hover:text-primary'
                            } transition-colors duration-300`}>
                              {project.title}
                            </CardTitle>
                            {project.featured && (
                              <Badge className={`${
                                project.theme === 'primary' ? 'bg-gradient-to-r from-primary to-primary/80' :
                                project.theme === 'neon-cyan' ? 'bg-gradient-to-r from-accent to-accent/80' :
                                'bg-gradient-to-r from-neon-green to-neon-green/80'
                              } text-white shadow-lg animate-pulse`}>
                                <Sparkles className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className={`text-lg font-semibold ${
                          project.theme === 'primary' ? 'text-accent' :
                          project.theme === 'neon-cyan' ? 'text-accent' :
                          'text-neon-green'
                        } transition-colors`}>
                          {project.subtitle}
                        </p>

                        <p className="text-muted-foreground leading-relaxed text-base">
                          {project.description}
                        </p>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-3 flex-wrap">
                        {project.demo && (
                          <Button
                            size="default"
                            variant="outline"
                            className={`${
                              project.theme === 'primary' ? 'border-primary/50 text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/25' :
                              project.theme === 'neon-cyan' ? 'border-accent/50 text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/25' :
                              'border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:shadow-lg hover:shadow-neon-green/25'
                            } hover:scale-105 transition-all duration-300`}
                            onClick={() => window.open(project.demo!, '_blank')}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {project.title === 'ChefMate' ? 'Live Demo' : 'Demo Video'}
                          </Button>
                        )}
                        <Button
                          size="default"
                          className={`${
                            project.theme === 'primary' ? 'bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25' :
                            project.theme === 'neon-cyan' ? 'bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/25' :
                            'bg-gradient-to-r from-neon-green to-neon-green/80 hover:shadow-lg hover:shadow-neon-green/25'
                          } text-white hover:scale-105 transition-all duration-300`}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Enhanced Key Features */}
                    <div className="space-y-6">
                      <h4 className={`font-bold text-lg ${
                        project.theme === 'primary' ? 'text-primary' :
                        project.theme === 'neon-cyan' ? 'text-accent' :
                        'text-neon-green'
                      } flex items-center gap-3`}>
                        <div className={`w-3 h-6 ${
                          project.theme === 'primary' ? 'bg-gradient-to-b from-primary to-primary/50' :
                          project.theme === 'neon-cyan' ? 'bg-gradient-to-b from-accent to-accent/50' :
                          'bg-gradient-to-b from-neon-green to-neon-green/50'
                        } rounded-full`} />
                        Key Features & Achievements
                      </h4>

                      <div className="grid gap-4">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="group/item flex items-start gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 border border-border/50 hover:border-border transition-all duration-300 hover:translate-x-2"
                          >
                            <div className={`w-3 h-3 ${
                              project.theme === 'primary' ? 'bg-primary' :
                              project.theme === 'neon-cyan' ? 'bg-accent' :
                              'bg-neon-green'
                            } rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`} />
                            <div className="space-y-1">
                              <p className="text-foreground leading-relaxed">
                                <span className={`font-semibold ${
                                  project.theme === 'primary' ? 'text-primary group-hover/item:text-accent' :
                                  project.theme === 'neon-cyan' ? 'text-accent group-hover/item:text-primary' :
                                  'text-neon-green group-hover/item:text-primary'
                                } transition-colors`}>
                                  {highlight.split(':')[0]}:
                                </span>
                                <span className="text-muted-foreground ml-1">
                                  {highlight.split(':').slice(1).join(':')}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div className="pt-6 border-t border-border/50">
                      <div className="flex items-center gap-3 mb-6">
                        <h5 className="text-sm font-semibold text-muted-foreground">Tech Stack</h5>
                        <div className={`h-px flex-1 ${
                          project.theme === 'primary' ? 'bg-gradient-to-r from-primary/50 to-transparent' :
                          project.theme === 'neon-cyan' ? 'bg-gradient-to-r from-accent/50 to-transparent' :
                          'bg-gradient-to-r from-neon-green/50 to-transparent'
                        }`} />
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className={`text-sm px-4 py-2 font-medium ${
                              project.theme === 'primary' ? 'border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-sm hover:shadow-primary/20' :
                              project.theme === 'neon-cyan' ? 'border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 hover:shadow-sm hover:shadow-accent/20' :
                              'border-neon-green/30 text-neon-green hover:bg-neon-green/10 hover:border-neon-green/50 hover:shadow-sm hover:shadow-neon-green/20'
                            } hover:scale-105 transition-all duration-300 cursor-default`}
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full">
            <span className="text-muted-foreground">Want to see more projects?</span>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300" onClick={() => window.open('https://github.com/chhavitotla', '_blank')}>
              <Github className="w-4 h-4 mr-2" />
              Visit GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}