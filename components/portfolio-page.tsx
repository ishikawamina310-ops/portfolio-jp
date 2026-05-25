"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  aboutParagraphs,
  experiences,
  languages,
  preferredWork,
  profile,
  skillCategories,
  teamflowFeatures,
  teamflowStack,
} from "@/data/portfolio";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, margin: "-80px" };

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10 space-y-3">
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">{subtitle}</p>
      <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">{title}</h2>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div className="relative overflow-hidden bg-background text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute right-[-60px] top-[32rem] h-80 w-80 rounded-full bg-violet-500/20 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-24 overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-[#141f3d] to-[#1b2d5a] p-7 shadow-[0_30px_120px_rgba(6,182,212,0.18)] md:p-12"
        >
          <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                フルスタックエンジニア ポートフォリオ
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {profile.nameJa}
                <span className="mt-2 block text-xl font-normal text-slate-200 md:text-2xl">
                  {profile.nameEn}
                </span>
              </h1>
              <p className="mt-4 text-xl text-cyan-100 md:text-2xl">{profile.role}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                {profile.headline}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.stack.map((item) => (
                  <Badge key={item} className="border-cyan-200/30 bg-cyan-200/10 text-cyan-50 hover:bg-cyan-200/20">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                  <a href="#project">プロジェクトを見る</a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <Link href={profile.github} target="_blank" rel="noreferrer">
                    <Code2 className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-cyan-100 hover:bg-white/10 hover:text-white">
                  <a href="#contact">お問い合わせ</a>
                </Button>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/15 bg-black/20 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">Core Focus</p>
              <div className="space-y-2 text-sm text-slate-200">
                <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">SaaS Product Development</p>
                <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Scalable API Design</p>
                <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">UX-focused Frontend Engineering</p>
              </div>
              <div className="pt-2 text-sm text-slate-300">
                <p className="mb-1">Based in {profile.location}</p>
                <a href={`mailto:${profile.email}`} className="text-cyan-200 hover:text-cyan-100">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <SectionHeading title="自己紹介" subtitle="About" />
          <Card className="p-1">
            <CardContent className="space-y-6 p-6 md:p-8">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
              <div className="grid gap-6 border-t border-white/10 pt-5 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-medium text-slate-200">希望する働き方</p>
                  <div className="flex flex-wrap gap-2">
                    {preferredWork.map((item) => (
                      <Badge key={item} variant="accent">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-slate-200">語学</p>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-sm font-medium text-slate-100">日本語</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                      {languages.japanese.map((item) => (
                        <li key={item}>・{item}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm text-slate-300">
                      <span className="font-medium text-slate-100">英語:</span>{" "}
                      {languages.english}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-24"
        >
          <SectionHeading title="技術スタック" subtitle="Skills" />
          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((category) => (
              <motion.div key={category.name} variants={fadeInUp} transition={{ duration: 0.5 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>実務開発で活用している技術</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="project"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <SectionHeading title="注力プロジェクト" subtitle="Project" />
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                <div className="relative overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/teamflow-preview.svg"
                    alt="TeamFlow project preview"
                    width={1200}
                    height={760}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </motion.div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">TeamFlow — Fullstack SaaS Platform</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  ワークスペース分離を前提とした、エンタープライズ向けのコラボレーションSaaSです。
                  生産性と拡張性を両立するAPIアーキテクチャを重視して設計しました。
                </p>
                <div className="flex flex-wrap gap-2">
                  {teamflowStack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {profile.demo ? (
                    <Button asChild>
                      <Link href={profile.demo} target="_blank" rel="noreferrer">
                        デモを見る <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="secondary" aria-disabled>
                      デモ準備中
                    </Button>
                  )}
                  <Button asChild variant="secondary">
                    <Link href={profile.github} target="_blank" rel="noreferrer">
                      GitHub <Code2 className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {teamflowFeatures.map((feature) => (
                  <div key={feature} className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-sm text-slate-300">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <SectionHeading title="職務経歴" subtitle="Experience" />
          <div className="relative mt-2">
            <span className="pointer-events-none absolute bottom-2 left-[7px] top-2 w-px bg-white/12" />
            <div className="space-y-10 md:space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative pl-8 md:pl-10"
              >
                <span className="absolute left-[7px] top-2 inline-flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/50 bg-background text-cyan-300 shadow-[0_0_0_4px_var(--background)]">
                  <BriefcaseBusiness className="h-2.5 w-2.5" />
                </span>
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-cyan-300/80">
                  {experience.period}
                </p>
                <h3 className="text-lg font-medium text-slate-100 md:text-xl">{experience.company}</h3>
                {"companyEn" in experience && experience.companyEn ? (
                  <p className="mt-1 text-sm text-slate-400">{experience.companyEn}</p>
                ) : null}
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-[15px]">
                  {experience.description}
                </p>
              </motion.article>
            ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeading title="お問い合わせ" subtitle="Contact" />
          <Card>
            <CardContent className="grid gap-4 p-5 text-sm text-slate-300 sm:p-6 md:grid-cols-3 md:p-8">
              <Link
                className="group flex min-h-16 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-cyan-300/40"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 className="h-4 w-4 text-cyan-300" />
                <span className="group-hover:text-cyan-200">GitHubプロフィール</span>
              </Link>
              <Link
                className="group flex min-h-16 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-cyan-300/40"
                href={`mailto:${profile.email}`}
              >
                <Mail className="h-4 w-4 text-cyan-300" />
                <span className="break-all group-hover:text-cyan-200">{profile.email}</span>
              </Link>
              <div className="flex min-h-16 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <MapPin className="h-4 w-4 text-cyan-300" />
                <span>{profile.location}</span>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <footer className="border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.16em] text-slate-500">
          © {profile.nameEn}. Next.js / TypeScript で構築。
        </footer>
      </main>
    </div>
  );
}
