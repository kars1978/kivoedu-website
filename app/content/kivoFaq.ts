export type FaqSurface = 'app' | 'public'

export type KivoFaq = {
  cat: string
  q: string
  a: string
  surfaces: FaqSurface[]
  publicQ?: string
  publicA?: string
}

export const FAQS: KivoFaq[] = [
  {
    cat: 'Getting started',
    q: 'How do I sign in?',
    a: 'Use the Google sign-in button on the login screen. Parent accounts can choose the parent option, while students go straight into their learning workspace.',
    surfaces: ['app'],
  },
  {
    cat: 'Getting started',
    q: 'How do I complete onboarding?',
    a: 'Select your board, grade, and subjects during onboarding. Kivo uses these choices to show the right textbooks and practice tools.',
    surfaces: ['app'],
  },
  {
    cat: 'About Kivo',
    q: 'What is KivoEdu?',
    a: 'KivoEdu is a curriculum-grounded AI tutor that helps students ask questions, practice difficult topics, and revise with explanations tied to supported school content.',
    surfaces: ['public'],
  },
  {
    cat: 'Availability',
    q: 'Which boards, grades, and subjects are supported?',
    a: 'KivoEdu currently supports CBSE Grades 9 and 10 for Math and Science, plus Maharashtra State Board Grade 9 for Math and Science. Coverage expands over time.',
    surfaces: ['public'],
  },
  {
    cat: 'Library',
    q: 'How do I access my textbooks?',
    a: 'Open Library from the sidebar, then select a subject card. Each subject opens its textbook workspace with reading, AI help, homework help, and practice options.',
    surfaces: ['app'],
  },
  {
    cat: 'Library',
    q: 'Why do I not see a subject?',
    a: 'Check that your subscription includes the board, grade, and subject you expect. If it still looks wrong after refreshing, contact support with your account email.',
    surfaces: ['app'],
  },
  {
    cat: 'Subject workspace',
    q: 'What can I do inside a subject?',
    a: 'The subject screen is the launch point for that textbook. Use it to read chapters, ask Kivo questions, solve homework, and start practice activities.',
    surfaces: ['app'],
  },
  {
    cat: 'Reader',
    q: 'How does the Reader work?',
    a: 'Open a chapter from a subject. The Reader breaks the chapter into study-friendly sections, shows the current topic in the center reading area, and lets you switch between Core, Deep Dive, and Lite explanations when available.',
    surfaces: ['app'],
  },
  {
    cat: 'Reader',
    q: 'How do I get more space while reading?',
    a: 'Open Options in the chapter navigation panel and turn on Reading Focus. This collapses the chapter navigation, the Kivo AI panel, and the top breadcrumb header so the reading area has more room. Use any collapsed strip or the small header button to bring the full layout back.',
    surfaces: ['app'],
  },
  {
    cat: 'Reader',
    q: 'Can I hide just the top Reader header?',
    a: 'Yes. Use the small button in the sticky header to collapse or expand the breadcrumb, chapter title, and completion pills while keeping the reading progress strip visible.',
    surfaces: ['app'],
  },
  {
    cat: 'Reader',
    q: 'How do I use chapter practice?',
    a: 'Use Chapter Quiz from the Reader when you want a fast check on the chapter you are reading. It opens inside the Reader, uses multiple-choice questions from the current chapter, can show hints before you answer, and gives a score with strengths, mistakes, and retry options.',
    surfaces: ['app'],
  },
  {
    cat: 'Ask Kivo AI',
    q: 'What should I ask Kivo AI?',
    a: 'Ask questions about the selected textbook, chapter, section, or topic. In the Reader, the Kivo AI panel is aware of the current section, so you can ask for a simpler explanation, examples, comparisons, key ideas, or a quick quiz.',
    surfaces: ['app', 'public'],
    publicQ: 'What can students ask Kivo AI?',
    publicA: 'Students can ask for explanations, examples, comparisons, key ideas, homework guidance, and practice around supported textbook and chapter content.',
  },
  {
    cat: 'Ask Kivo AI',
    q: 'Why is the answer focused on my textbook?',
    a: 'Kivo is designed to stay close to your learning material so answers match your syllabus instead of drifting into unrelated web content.',
    surfaces: ['app', 'public'],
    publicQ: 'How is Kivo different from general AI tools?',
    publicA: 'Kivo is designed to stay close to supported curriculum material, so help is aligned to the student\'s board, grade, subject, and chapter instead of drifting into unrelated web content.',
  },
  {
    cat: 'Ask Kivo AI',
    q: 'Can Kivo AI make mistakes?',
    a: 'Yes. Kivo AI is a study helper, but it can sometimes misunderstand a question or generate an incorrect answer. For important or exam-related information, check your textbook or ask your teacher/tutor.',
    surfaces: ['app', 'public'],
    publicQ: 'Can Kivo AI make mistakes?',
    publicA: 'Yes. Kivo is a study helper, but AI can sometimes misunderstand a question or produce an incorrect answer. Students should treat teachers, tutors, and textbooks as the final source of truth.',
  },
  {
    cat: 'Homework help',
    q: 'How do I get homework help?',
    a: 'Open Homework Help from a subject, enter the question, and choose the mode that fits your work. Kivo gives step-by-step guidance instead of only a final answer.',
    surfaces: ['app', 'public'],
    publicQ: 'Does Kivo only give final answers?',
    publicA: 'No. Kivo is designed to give step-by-step guidance so students can understand the method, check their reasoning, and build confidence.',
  },
  {
    cat: 'Homework help',
    q: 'Can I use it to check my answer?',
    a: 'Yes. Paste your attempt with the question and ask Kivo to review the reasoning, point out missing steps, and suggest improvements.',
    surfaces: ['app'],
  },
  {
    cat: 'Practice',
    q: 'What practice tools are available?',
    a: 'Practice tools vary by subject, but they are intended for revision, concept checks, and exam preparation using your selected textbook context.',
    surfaces: ['app', 'public'],
    publicQ: 'What practice tools are available?',
    publicA: 'Practice tools vary by subject, but they are built for revision, concept checks, and exam preparation using the student\'s supported curriculum context.',
  },
  {
    cat: 'Quiz',
    q: 'How does Quiz work?',
    a: 'Kivo has two quiz flows. Quick Quiz is a configurable practice tool where you choose a chapter, number of questions, difficulty, and question types. Chapter Quiz is a shorter Reader check for the chapter currently open, focused on MCQs with hints, instant feedback, scoring, and retrying missed questions.',
    surfaces: ['app'],
  },
  {
    cat: 'Quiz',
    q: 'What is Quick Quiz?',
    a: 'Quick Quiz is the flexible practice quiz. Open it from Practice or a subject, choose a chapter, pick 5, 10, or 15 questions, select easy, medium, or hard difficulty, and choose question types such as multiple choice, very short answer, short answer, long answer, or case-based questions. MCQs are scored automatically, and written answers can be reviewed by Kivo before the final score.',
    surfaces: ['app', 'public'],
    publicQ: 'What is Quick Quiz?',
    publicA: 'Quick Quiz lets students create a chapter-focused quiz in seconds by choosing the chapter, question count, difficulty, and question types. It is designed for flexible revision and concept checks.',
  },
  {
    cat: 'Quiz',
    q: 'What is Chapter Quiz?',
    a: 'Chapter Quiz is the quick practice check inside Reader. It uses the chapter you are currently reading, asks multiple-choice questions, lets you reveal hints before answering, shows whether each answer is correct, and summarizes your score, strengths, missed concepts, and retry options.',
    surfaces: ['app', 'public'],
    publicQ: 'What is Chapter Quiz?',
    publicA: 'Chapter Quiz is a short Reader-based check for the chapter a student is studying. It focuses on multiple-choice questions, hints, quick feedback, and retrying missed questions.',
  },
  {
    cat: 'Quiz',
    q: 'How are Quick Quiz and Chapter Quiz different?',
    a: 'Use Quick Quiz when you want control over the setup: chapter, length, difficulty, and question types. Use Chapter Quiz when you are already reading and want a fast MCQ checkpoint on that exact chapter without configuring a full practice session.',
    surfaces: ['app', 'public'],
    publicQ: 'How are Quick Quiz and Chapter Quiz different?',
    publicA: 'Quick Quiz is configurable and better for planned revision. Chapter Quiz is a fast checkpoint inside Reader for the chapter currently being studied.',
  },
  {
    cat: 'Practice paper',
    q: 'What is Practice Paper?',
    a: 'Practice Paper creates a longer exam-style paper from your available question bank. Submit your answers to get feedback and a score.',
    surfaces: ['app'],
  },
  {
    cat: 'Progress',
    q: 'What does My Progress show?',
    a: 'My Progress summarizes recent learning activity, quiz performance, exam readiness, and subject-level chapter mastery when analytics are available.',
    surfaces: ['app'],
  },
  {
    cat: 'Parent dashboard',
    q: 'What can parents see?',
    a: 'Parent Dashboard shows a child-focused progress report, including activity and learning signals that help parents understand where support may be needed.',
    surfaces: ['app', 'public'],
    publicQ: 'What can parents see?',
    publicA: 'Parents can review child-focused progress signals such as activity and learning patterns when those analytics are available in the product.',
  },
  {
    cat: 'Account',
    q: 'How do I renew or change my grade?',
    a: 'Open My Account from the sidebar, then use Renew / Add subscription. You can choose the board, grade, and subjects for the new subscription.',
    surfaces: ['app'],
  },
  {
    cat: 'Account',
    q: 'My subscription is not showing after payment.',
    a: 'Refresh the page and sign in again. Subscriptions usually activate within a few seconds. If it still does not appear after five minutes, email support.',
    surfaces: ['app'],
  },
  {
    cat: 'Feedback',
    q: 'How do I send product feedback?',
    a: 'Open Feedback from the sidebar, write what worked well or what should improve, choose a star rating, and submit it to the Kivo team.',
    surfaces: ['app'],
  },
  {
    cat: 'Privacy',
    q: 'Is my data private?',
    a: 'Your questions, answers, and progress data are used to provide learning features and personalization. Individual learning data is not shared with third parties.',
    surfaces: ['app', 'public'],
    publicQ: 'Is student data private?',
    publicA: 'Student questions, answers, and progress data are used to provide learning features and personalization. Individual learning data is not shared with third parties.',
  },
  {
    cat: 'Devices',
    q: 'Can I use Kivo on mobile?',
    a: 'Currently, Kivo is only supported on desktops and laptops. For the best experience with features like Reader, Homework Help, and Quizzes, we recommend using a computer.',
    surfaces: ['app', 'public'],
    publicQ: 'Can students use Kivo on mobile?',
    publicA: 'Currently, Kivo is only supported on desktops and laptops. For the best experience with Reader, Homework Help, and Quizzes, we recommend using a computer.',
  },
  {
    cat: 'Schools',
    q: 'Does Kivo replace teachers?',
    a: 'No. Kivo is designed to extend teacher-approved curriculum support outside class time, not replace classroom instruction, tutors, or human judgment.',
    surfaces: ['public'],
  },
  {
    cat: 'Schools',
    q: 'How can a school or parent contact KivoEdu?',
    a: 'Email admin@kivoedu.ai with your school, grade, curriculum, and the kind of support you are looking for.',
    surfaces: ['public'],
  },
]

export const QUICK_HELP = [
  { title: 'Find a textbook', text: 'Go to Library and select a subject card for your board and grade.' },
  { title: 'Ask a doubt', text: 'Open a subject, then use Ask Kivo AI for textbook-grounded help.' },
  { title: 'Focus reading', text: 'Turn on Reading Focus in Reader Options to collapse side panels and the header.' },
  { title: 'Solve homework', text: 'Use Homework Help for guided steps, checking, and better reasoning.' },
  { title: 'Track progress', text: 'Open My Progress or Parent Dashboard to review learning activity.' },
]

export function getFaqsForSurface(surface: FaqSurface) {
  return FAQS
    .filter(faq => faq.surfaces.includes(surface))
    .map(faq => ({
      cat: faq.cat,
      q: surface === 'public' ? faq.publicQ || faq.q : faq.q,
      a: surface === 'public' ? faq.publicA || faq.a : faq.a,
    }))
}

export function getFaqCategories(faqs: Array<{ cat: string }>) {
  return [...new Set(faqs.map(faq => faq.cat))]
}
