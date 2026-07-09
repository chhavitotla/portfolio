import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL"],
    color: "primary"
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: ["React.js", "Next.js", "FastAPI", "Node.js", "Express.js", "LangChain", "LangGraph", "LangSmith"],
    color: "accent"
  },
  {
    title: "AI & Vector Tools",
    icon: Brain,
    skills: ["Google Gemini", "Pinecone", "FAISS", "Pydantic", "Zod", "BM25"],
    color: "neon-cyan"
  },
  {
    title: "Databases & Infra",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Docker", "Git", "Postman"],
    color: "neon-green"
  }
];

export function SkillsSection() {
  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-40 right-20 w-40 h-40 border border-primary/20 rounded-full floating-animation" />
      <div className="absolute bottom-40 left-20 w-32 h-32 border border-accent/20 rotate-45 floating-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="portfolio-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`p-2 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}>
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <span className="group-hover:text-primary transition-colors">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`
                          text-sm px-3 py-1 transition-all duration-300 hover:scale-105
                          border-${category.color}/30 hover:bg-${category.color}/10 hover:border-${category.color}/50
                          hover:text-${category.color} cursor-default
                        `}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="portfolio-card bg-gradient-to-br from-card via-card to-card/50">
            <CardHeader>
              <CardTitle className="text-center text-xl gradient-text">
                Knowledge Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl">🧠</div>
                  <h4 className="font-semibold text-primary">CS Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">DSA, OOP, DBMS, OS, Computer Networks</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🌐</div>
                  <h4 className="font-semibold text-accent">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">End-to-end application development</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🤖</div>
                  <h4 className="font-semibold text-neon-cyan">Gen-AI & RAG</h4>
                  <p className="text-sm text-muted-foreground">Agentic pipelines, hybrid dense/sparse retrieval, guardrails</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}