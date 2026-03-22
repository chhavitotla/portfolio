import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Web Developer",
    company: "Cheesecake Mills",
    location: "Remote",
    period: "Feb 2026 – Mar 2026",
    website: "https://www.cheesecakemills.in",
    theme: "primary",
    bullets: [
      {
        color: "primary",
        label: "Production Website",
        badge: "Frontend",
        text: "Designed and deployed a production website using React, TypeScript, and Tailwind CSS, achieving Lighthouse scores of 84 Performance, 100 SEO, and 100 Best Practices with 1.7s FCP and 0ms Total Blocking Time."
      },
      {
        color: "accent",
        label: "Responsive & Accessible UI",
        badge: "Accessibility",
        text: "Engineered a responsive, mobile-first UI with accessible component design, achieving a 94 Lighthouse Accessibility score and 100% Best Practices compliance across cross-device testing."
      }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    role: "Teaching Assistant — DSA/C++",
    company: "Apna College",
    location: "Remote",
    period: "Aug 2025 – Sep 2025",
    website: null,
    theme: "neon-cyan",
    bullets: [
      {
        color: "neon-cyan",
        label: "Query Resolution",
        badge: "DSA",
        text: "Resolved 100+ coding queries in data structures and algorithms, strengthening mastery of recursion, dynamic programming, and graph theory."
      },
      {
        color: "neon-green",
        label: "Student Mentorship",
        badge: "Mentoring",
        text: "Mentored 30+ students in competitive programming and debugging, accelerating problem-solving proficiency."
      }
    ],
    technologies: ["C++", "Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory"]
  }
];

export function ExperienceSection() {
  return (
    <section className="min-h-screen py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.role} className="portfolio-card group">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className={`text-2xl text-${exp.theme} group-hover:text-neon-cyan transition-colors`}>
                      {exp.company}
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center ml-2 opacity-60 hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </CardTitle>
                    <div className={`flex items-center gap-2 text-${exp.theme === 'primary' ? 'accent' : 'neon-green'}`}>
                      <Building className="w-4 h-4" />
                      <span className="font-semibold">{exp.role}</span>
                    </div>
                  </div>
                  <div className="space-y-2 lg:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  {exp.bullets.map((bullet) => (
                    <div key={bullet.label} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-${bullet.color} rounded-full mt-2 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex flex-wrap items-center gap-2">
                            {bullet.label}
                            <Badge variant="secondary" className="text-xs">{bullet.badge}</Badge>
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {bullet.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border">
                  <h5 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className={`text-xs border-${exp.theme}/30 text-${exp.theme}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}