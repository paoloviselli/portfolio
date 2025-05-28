import { HackathonCard } from '@/components/hackathon-card';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import Markdown from 'react-markdown';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                yOffset={8}
                text={DATA.name}
              />
              <div className="max-w-[600px] ">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div dangerouslySetInnerHTML={{ __html: DATA.description }} />
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Projects</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                // href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Technical Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.01}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="w-full h-[1px] mb-10 border-dashed border-t" />
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Contact</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="flex items-center gap-2 hover:underline hover:text-blue-500"
            >
              <ArrowRightIcon className="w-4 h-4" />
              {DATA.contact.email}
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <Link
              href={`tel:${DATA.contact.tel}`}
              className="flex items-center gap-2 hover:underline hover:text-blue-500"
            >
              <ArrowRightIcon className="w-4 h-4" />
              {DATA.contact.tel}
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <Link
              href={DATA.contact.social.GitHub.url}
              className="flex items-center gap-2 hover:underline hover:text-blue-500"
            >
              <ArrowRightIcon className="w-4 h-4" />
              GitHub
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <Link
              href={DATA.contact.social.X.url}
              className="flex items-center gap-2 hover:underline hover:text-blue-500"
            >
              <ArrowRightIcon className="w-4 h-4" />
              Twitter / X
            </Link>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="flex items-center gap-2 hover:underline hover:text-blue-500"
            >
              <ArrowRightIcon className="w-4 h-4" />
              LinkedIn
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
