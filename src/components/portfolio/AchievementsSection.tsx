import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Users, Code2, Globe, TrendingUp, ExternalLink, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2025 — National Finalist",
    description: "Selected among the top teams nationally to compete in the final round of India's largest government-led hackathon.",
    color: "primary",
    type: "achievement"
  },
  {
    icon: TrendingUp,
    title: "LeetCode Contest Rating — 1648",
    description: "Achieved a peak contest rating of 1648 through consistent participation in competitive programming contests.",
    color: "accent",
    type: "achievement"
  }
];

const extracurriculars = [
  {
    icon: Code2,
    title: "Executive Member",
    organization: "Association for Computing Machinery (ACM)",
    description: "Spearheaded Hour of Code sessions across schools and classrooms, introducing 150+ students to programming fundamentals.",
    color: "neon-cyan",
    hoverColor: "primary"
  },
  {
    icon: Globe,
    title: "Executive Member",
    organization: "Google Developer Student Club (GDGC)",
    description: "Initiated and led 5+ workshops on web development (HTML/CSS, React), machine learning basics, and cloud computing.",
    color: "neon-green",
    hoverColor: "neon-cyan"
  }
];

export function AchievementsSection() {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Achievements</span>
            <span className="text-muted-foreground"> & </span>
            <span className="text-neon-cyan">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Milestones achieved through dedication, creativity, and collaborative leadership
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Achievements</h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  className={`group hover:shadow-xl transition-all duration-500 border-${achievement.color}/30 hover:border-${achievement.color}/60 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm hover:scale-[1.02]`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br from-${achievement.color}/20 to-${achievement.color}/10 border border-${achievement.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 text-${achievement.color}`} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className={`text-xl lg:text-2xl text-${achievement.color} group-hover:text-${achievement.color === 'primary' ? 'neon-cyan' : 'primary'} transition-colors`}>
                          {achievement.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Student Chapters & Clubs Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-neon-green" />
              <h3 className="text-3xl font-bold text-neon-green">Leadership & Involvement</h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-green/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {extracurriculars.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={activity.organization}
                  className={`group hover:shadow-xl transition-all duration-500 border-${activity.color}/30 hover:border-${activity.hoverColor}/60 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm hover:scale-105 cursor-pointer`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="space-y-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-${activity.color}/20 to-${activity.color}/10 border border-${activity.color}/30 group-hover:scale-110 transition-all duration-300 w-fit group-hover:border-${activity.hoverColor}/40`}>
                        <Icon className={`w-7 h-7 text-${activity.color} group-hover:text-${activity.hoverColor} transition-colors duration-300`} />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className={`text-lg text-${activity.color} group-hover:text-${activity.hoverColor} transition-colors duration-300`}>
                          {activity.title}
                        </CardTitle>
                        <p className={`text-sm font-medium text-${activity.color}/80 group-hover:text-${activity.hoverColor}/90 transition-colors leading-relaxed`}>
                          {activity.organization}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}