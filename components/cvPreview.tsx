import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  MapPin,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  User,
  Wrench,
  Calendar,
  Building2,
  Star,
  Github,
} from "lucide-react"

export function CVPreview() {
  const skills = [
    { name: "HTML5/CSS3", level: 90, icon: Code2 },
    { name: "JavaScript", level: 85, icon: Code2 },
    { name: "React.js", level: 88, icon: Code2 },
    { name: "Next.js", level: 85, icon: Code2 },
    { name: "Tailwind CSS", level: 90, icon: Code2 },
    { name: "MongoDB", level: 80, icon: Code2 },
  ]

  const experience = [
    {
      title: "DevClan Lahore",
      role: "Frontend Developer",
      period: "Present",
      description:
        "Currently working as a Frontend Developer, focusing on creating responsive and interactive user interfaces using modern web technologies. Contributing to various client projects with emphasis on performance optimization and user experience.",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "UI/UX"],
      type: "Current Position",
      icon: Building2,
    },
    {
      title: "Fazier.com",
      role: "MERN Stack Developer",
      period: "Mar 2024 - Present",
      description:
        "Worked as a MERN Stack web developer for a startup, contributing to the design and development of modern web pages using Next.js, Tailwind CSS, and other MERN technologies.",
      skills: ["Next.js", "Tailwind CSS", "MERN Stack", "SEO"],
      type: "Remote Work",
      icon: Code2,
    },
  ]

  const projects = [
    {
      title: "Eupak Educational Consultant",
      role: "Full-Stack Developer",
      period: "Completed",
      description:
        "The website features a user-friendly interface, modern design, and seamless functionality. I implemented the SendGrid API to ensure smooth and reliable communication.",
      skills: ["React", "SendGrid API", "Responsive Design", "MongoDB"],
      link: "eupakeducation.com",
      type: "Client Project",
      icon: Globe,
    },
    {
      title: "SEO Analytics (FYP)",
      role: "Lead Developer",
      period: "2024",
      description:
        "A full-stack web application designed to help users analyze website SEO performance and manage keyword strategies. Features keyword tracking, SEO score visualization, and audit reports.",
      skills: ["Next.js", "Node.js", "MongoDB", "REST APIs", "LemonSqueezy", "GSC API"],
      link: "github.com/hasnainaqa/seo",
      type: "Final Year Project",
      icon: Star,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 p-8 border border-border/50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 text-center space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary/80 mb-4">
              <Code2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Hasnain Afzal
            </h1>
            <p className="text-2xl text-muted-foreground font-medium flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-accent"></div>
              Full-Stack Web Developer
              <div className="w-8 h-px bg-accent"></div>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">muhammedhasnain3356@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">03256244441</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Gujranwala, Punjab</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <Globe className="h-4 w-4" />
              hasnainafzal-dev.vercel.app
              <ExternalLink className="h-3 w-3 opacity-60" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
              <ExternalLink className="h-3 w-3 opacity-60" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-background/80 backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <Github className="h-4 w-4" />
              GitHub Profile
              <ExternalLink className="h-3 w-3 opacity-60" />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
            <User className="h-6 w-6 text-accent" />
            Profile
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a passionate Full-Stack Web Developer with experience in front-end and back-end development. I have
            successfully implemented payment gateways, authentication systems, and database optimizations to enhance
            functionality. Beyond development, I am always eager to learn new technologies, collaborate with teams, and
            build innovative solutions. My goal is to create seamless digital experiences that drive efficiency and user
            engagement.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Skills Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Code2 className="h-6 w-6 text-accent" />
              Technical Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-accent" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-accent" />
                Tools & Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "GitHub", icon: Github },
                  { name: "Vercel", icon: Globe },
                  { name: "VS Code", icon: Code2 },
                  { name: "Urdu", icon: Globe },
                  { name: "English", icon: Globe },
                ].map((tool) => (
                  <Badge key={tool.name} variant="secondary" className="flex items-center gap-1">
                    <tool.icon className="h-3 w-3" />
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  BS Computer Science
                </h3>
                <p className="text-accent font-medium">University of Gujrat</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  2021 - 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-accent" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <div key={index} className="border-l-4 border-accent pl-6 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-accent" />
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={exp.type === "Current Position" ? "default" : "outline"}>{exp.type}</Badge>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-accent" />
            Featured Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div key={index} className="border-l-4 border-accent pl-6 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-accent" />
                        {project.title}
                      </h3>
                      <p className="text-accent font-medium">{project.role}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{project.type}</Badge>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {project.link && (
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <ExternalLink className="h-3 w-3" />
                      {project.link}
                    </Button>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center py-6 border-t">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Code2 className="h-4 w-4" />© 2024 Hasnain Afzal • Building innovative digital solutions
        </p>
      </div>
    </div>
  )
}
