export const en = {
  nav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
  },
  home: {
    title: 'Senior Software Engineer — Applied AI & Backend',
    tagline: 'Go, gRPC and .NET backends for banking. AI is how I plan, write and test them.',
    greeting: 'Tan Phat Vo',
    heroSummary:
      'I build Go and gRPC services for ANZ Plus payments, disputes, customer profiles and international transfers. Claude Code is how I plan, write and test that work.',
    emailCta: 'Email me',
    downloadCv: 'Download CV',
    years: '6+ years',
    employer: 'ANZ via HCLTech',
    summaryTitle: 'Background',
    bio: 'Senior software engineer with 6+ years on production systems for <strong>ANZ Bank</strong>, <strong>Halliburton</strong> and <strong>Sacombank</strong>, plus freelance work for Bolloré Logistics and IOGA.fr. On the ANZ Plus backend team through HCLTech Vietnam, I build Go and gRPC services on GCP, including the Bifrost data move. Claude Code is how I implement, refactor and draft tests.',
    metrics: [
      { value: '~30%', label: 'Contributed to shorter time-to-market at ANZ' },
      { value: '90%+', label: 'IMT gRPC contract coverage at ANZ' },
      { value: '20x', label: 'Faster document search, Halliburton' },
      { value: '>60%', label: 'Lower observability cost, Bolloré' },
    ],
  },
  experience: {
    title: 'Experience',
    publicContext: 'Public context',
    source: 'Source',
  },
  skills: {
    title: 'Technical Skills',
    categories: {
      backend: {
        title: 'Backend & Architecture',
        description: 'Go, .NET, and Java services, with gRPC, REST, and event-driven design.',
        details: [
          'Languages: Go, C# / .NET (ASP.NET Core, EF Core, ABP Framework), Java (Spring Boot), Python',
          'APIs: gRPC (Protobuf) and REST',
          'Architecture: microservices, event-driven design, DDD, onion architecture',
          'Resiliency: retry and circuit-breaker patterns',
          'Redis caching',
          'Concurrency and asynchronous programming',
        ],
      },
      database: {
        title: 'Database & Messaging',
        description: 'Relational databases and message brokers.',
        details: [
          'PostgreSQL, SQL Server, Oracle, BigQuery, DynamoDB, LiteDB',
          'Query work: indexing and stored procedures',
          'Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead letter queues',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        description: 'GCP, Azure, AWS, containers, and CI.',
        details: [
          'GCP: GKE, Cloud Run, Pub/Sub, BigQuery',
          'Azure: Service Bus, Azure SQL, Azure AD, DevOps, OpenAI, AI Speech',
          'AWS: Lambda, DynamoDB, S3, ECS, EKS',
          'Docker, Kubernetes, Helm',
          'CI/CD: GitHub Actions, Azure DevOps, Jenkins',
          'OpenTelemetry',
        ],
      },
      ai: {
        title: 'Applied AI',
        description:
          'AI-assisted coding, AI-assisted tests, and LLM steps inside backend pipelines.',
        details: [
          'AI-assisted coding with the Claude Code ecosystem: planning, boilerplate, and refactoring',
          'AI-assisted unit and contract test generation, reviewed before they land',
          'LLM steps in backend pipelines: Azure OpenAI and Azure AI Speech in production at IOGA.fr',
          'Prompt and context design for code and test generation',
        ],
      },
      testing: {
        title: 'Testing & Quality',
        description: 'Go tests, MSTest, Selenium, and the scan gates used on deploys.',
        details: [
          'Go testing for gRPC contracts, including ANZ IMT',
          'MSTest unit and integration tests',
          'Selenium WebDriver end-to-end suites',
          'SonarQube and Fortify gates',
          'OWASP checks',
          'TDD practices on banking services',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Angular and TypeScript.',
        details: ['Angular', 'TypeScript'],
      },
    },
  },
  education: {
    title: 'Education',
    school: 'Ton Duc Thang University',
    degree: 'Bachelor of Information Technology',
    location: 'Ho Chi Minh City, Vietnam',
    certTitle: 'Certifications & Languages',
    englishProficiency: 'English',
  },
  projects: {
    title: 'Selected projects',
    subtitle:
      'Banking, logistics, manufacturing and oil and gas systems, plus applied AI work such as an LLM subtitle pipeline.',
    viewAll: 'View all projects',
    viewAllSubtitle:
      'Banking, logistics, manufacturing and oil and gas systems, plus an LLM subtitle pipeline.',
    solo: 'Solo',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Open to Senior Applied AI and Backend roles. I work from Ho Chi Minh City (GMT+7).',
    scanToChat: 'Scan to chat',
    showQr: 'Show QR code',
    copyEmail: 'Copy email',
    copied: 'Copied',
  },
  footer: {
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  notFound: {
    title: 'Page not found',
    body: 'That address is not on this site.',
    home: 'English home',
    homeVi: 'Vietnamese home',
    projects: 'English projects',
    projectsVi: 'Vietnamese projects',
  },
};
