export type Article = {
  slug: string;
  number: string;
  title: string;
  description: string;
  section: string;
  sectionId: string;
  readTime: number;
};

export type ArticleSection = {
  id: string;
  title: string;
  articleSlugs: string[];
};

type ArticleSeed = {
  filename: string;
  number: string;
  title: string;
  description: string;
};

type SectionSeed = {
  id: string;
  title: string;
  articles: ArticleSeed[];
};

const readTimesByFilename: Record<string, number> = {
  '01-what-adhd-actually-is.md': 4,
  '02-three-presentations-of-adhd.md': 4,
  '03-adhd-across-the-lifespan.md': 5,
  '04-late-diagnosis.md': 5,
  '05-adhd-and-the-brain.md': 5,
  '06-time-blindness.md': 5,
  '07-the-paradox-of-hyperfocus.md': 5,
  '08-emotional-dysregulation.md': 6,
  '09-decision-fatigue-and-adhd.md': 5,
  '10-adhd-and-sleep.md': 6,
  '11-why-traditional-productivity-fails.md': 6,
  '12-body-doubling.md': 5,
  '13-task-initiation.md': 6,
  '14-adhd-friendly-meeting-design.md': 6,
  '15-disclosure-at-work.md': 6,
  '16-rejection-sensitive-dysphoria.md': 7,
  '17-adhd-in-relationships.md': 6,
  '18-masking-and-burnout.md': 6,
  '19-adhd-and-self-worth.md': 7,
  '20-adhd-plus-autism.md': 6,
  '21-adhd-and-anxiety.md': 6,
  '22-women-and-adhd.md': 6,
  '23-adhd-and-addiction.md': 6,
  '24-external-scaffolding.md': 7,
  '25-medication-demystified.md': 8,
};

const sectionSeeds: SectionSeed[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    articles: [
      {
        filename: '01-what-adhd-actually-is.md',
        number: '01',
        title: "What ADHD Actually Is (And Isn't)",
        description:
          'Beyond the stereotypes — what the condition really involves, and the myths worth unlearning.',
      },
      {
        filename: '02-three-presentations-of-adhd.md',
        number: '02',
        title: 'The Three Presentations of ADHD',
        description:
          'Inattentive, hyperactive-impulsive, combined — and why the labels matter less than the lived experience.',
      },
      {
        filename: '03-adhd-across-the-lifespan.md',
        number: '03',
        title: 'ADHD Across the Lifespan',
        description:
          'How ADHD shows up differently in childhood, adolescence, adulthood and later life.',
      },
      {
        filename: '04-late-diagnosis.md',
        number: '04',
        title: 'Late Diagnosis: Why So Many Adults Are Only Finding Out Now',
        description: 'Why a generation slipped through the net — and what a late diagnosis can change.',
      },
      {
        filename: '05-adhd-and-the-brain.md',
        number: '05',
        title: 'ADHD and the Brain',
        description:
          'Dopamine, executive function and the neuroscience — explained without the textbook.',
      },
    ],
  },
  {
    id: 'daily-life',
    title: 'Daily Life',
    articles: [
      {
        filename: '06-time-blindness.md',
        number: '06',
        title: 'Time Blindness: Living Without an Internal Clock',
        description:
          'Why five minutes and two hours can feel identical — and how to work around it.',
      },
      {
        filename: '07-the-paradox-of-hyperfocus.md',
        number: '07',
        title: 'The Paradox of Hyperfocus',
        description:
          "The same brain that can't start a task can lose eight hours to one. Here's why.",
      },
      {
        filename: '08-emotional-dysregulation.md',
        number: '08',
        title: 'Emotional Dysregulation: The Overlooked Symptom',
        description:
          'Big feelings that arrive fast and hit hard — the symptom the diagnostic criteria forgot.',
      },
      {
        filename: '09-decision-fatigue-and-adhd.md',
        number: '09',
        title: 'Decision Fatigue and ADHD',
        description:
          'Why everyday choices drain ADHD brains faster, and how to spend decisions wisely.',
      },
      {
        filename: '10-adhd-and-sleep.md',
        number: '10',
        title: 'ADHD and Sleep',
        description:
          'Revenge bedtime procrastination, racing thoughts, and the sleep patterns behind them.',
      },
    ],
  },
  {
    id: 'workplace',
    title: 'Workplace & Productivity',
    articles: [
      {
        filename: '11-why-traditional-productivity-fails.md',
        number: '11',
        title: 'Why Traditional Productivity Systems Fail ADHD Brains',
        description:
          "It's not you, it's the system — why neurotypical tools weren't built for your brain.",
      },
      {
        filename: '12-body-doubling.md',
        number: '12',
        title: 'Body Doubling: Why Working Alongside Others Helps',
        description:
          'The strange, well-documented power of simply having someone else in the room.',
      },
      {
        filename: '13-task-initiation.md',
        number: '13',
        title: 'Task Initiation: The Invisible Barrier',
        description:
          'Knowing exactly what to do and still not starting — the wall nobody else can see.',
      },
      {
        filename: '14-adhd-friendly-meeting-design.md',
        number: '14',
        title: 'ADHD-Friendly Meeting Design',
        description: 'Practical changes that make meetings work for every brain in the room.',
      },
      {
        filename: '15-disclosure-at-work.md',
        number: '15',
        title: 'Disclosure at Work: When, How, and Whether To',
        description:
          'A clear-eyed look at telling your employer — the rights, the risks, and the middle ground.',
      },
    ],
  },
  {
    id: 'relationships',
    title: 'Relationships & Identity',
    articles: [
      {
        filename: '16-rejection-sensitive-dysphoria.md',
        number: '16',
        title: 'Rejection Sensitive Dysphoria',
        description: 'When perceived criticism lands like a physical blow — understanding RSD.',
      },
      {
        filename: '17-adhd-in-relationships.md',
        number: '17',
        title: 'ADHD in Relationships',
        description:
          'Forgotten plans, interrupted sentences, deep loyalty — how ADHD shapes partnership.',
      },
      {
        filename: '18-masking-and-burnout.md',
        number: '18',
        title: 'Masking and Burnout',
        description: 'The exhausting work of appearing fine, and what it costs over years.',
      },
      {
        filename: '19-adhd-and-self-worth.md',
        number: '19',
        title: 'ADHD and Self-Worth',
        description:
          'Rebuilding confidence after a lifetime of "not living up to potential".',
      },
    ],
  },
  {
    id: 'intersections',
    title: 'Intersections',
    articles: [
      {
        filename: '20-adhd-plus-autism.md',
        number: '20',
        title: 'ADHD + Autism: The Overlap Nobody Talks About Enough',
        description:
          "AuDHD is common, real, and complicated — here's what the overlap looks like.",
      },
      {
        filename: '21-adhd-and-anxiety.md',
        number: '21',
        title: 'ADHD and Anxiety: Chicken, Egg, or Both?',
        description:
          'Untangling two conditions that feed each other — and why the order matters for treatment.',
      },
      {
        filename: '22-women-and-adhd.md',
        number: '22',
        title: 'Women and ADHD',
        description:
          'Underdiagnosed, mislabelled, and often missed entirely — ADHD through a different lens.',
      },
      {
        filename: '23-adhd-and-addiction.md',
        number: '23',
        title: 'ADHD and Addiction',
        description:
          'The dopamine connection, the elevated risk, and the compassionate way through.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Practical Tools',
    articles: [
      {
        filename: '24-external-scaffolding.md',
        number: '24',
        title: 'External Scaffolding: Building Systems That Work For You',
        description:
          'Stop relying on memory and willpower — put the structure outside your head instead.',
      },
      {
        filename: '25-medication-demystified.md',
        number: '25',
        title: 'Medication Demystified',
        description:
          'Stimulants, non-stimulants, and honest answers to the questions people are afraid to ask.',
      },
    ],
  },
];

const getSlugFromFilename = (filename: string) => filename.replace(/^\d+-/, '').replace(/\.md$/, '');

export const articles: Article[] = sectionSeeds.flatMap((section) =>
  section.articles.map((article) => ({
    slug: getSlugFromFilename(article.filename),
    number: article.number,
    title: article.title,
    description: article.description,
    section: section.title,
    sectionId: section.id,
    readTime: readTimesByFilename[article.filename],
  })),
);

export const sections: ArticleSection[] = sectionSeeds.map((section) => ({
  id: section.id,
  title: section.title,
  articleSlugs: section.articles.map((article) => getSlugFromFilename(article.filename)),
}));

const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));

export const getArticleBySlug = (slug: string) => articlesBySlug.get(slug);

export const getAdjacentArticles = (slug: string) => {
  const currentIndex = articles.findIndex((article) => article.slug === slug);

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: articles[currentIndex - 1] ?? null,
    next: articles[currentIndex + 1] ?? null,
  };
};

export const getArticlesInSameSection = (slug: string) => {
  const article = getArticleBySlug(slug);

  if (!article) {
    return [];
  }

  return articles.filter((candidate) => candidate.sectionId === article.sectionId);
};
