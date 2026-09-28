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
    title: 'Senior Software Engineer - Applied AI & Backend',
    tagline: 'Go, gRPC and .NET backends for banking, with AI agents in the daily workflow',
    greeting: 'Tan Phat Vo',
    heroSummary:
      "I build backend services for ANZ Plus, ANZ's digital bank, and use the Claude Code ecosystem to plan, write and test them faster.",
    experienceCta: 'View experience',
    emailCta: 'Email me',
    downloadCv: 'Download CV',
    years: '6+ years',
    employer: 'ANZ via HCLTech',
    summaryTitle: 'Background',
    bio: 'Senior software engineer with 6+ years on production systems for <strong>ANZ Bank</strong>, <strong>Halliburton</strong> and <strong>Sacombank</strong>, plus freelance work for Bolloré Logistics, IOGA.fr and others. Today I work on the ANZ Plus backend team through HCLTech Vietnam: Go and gRPC services on GCP for PayID, PayTo, disputes, self-service and customer profile, and Project Bifrost, which moves customer and account data from ANZ classic banking and Suncorp Bank into ANZ Plus. Agentic coding with the Claude Code ecosystem is part of how I work every day, for implementation, refactoring and test generation. Recorded results: about 30% shorter time-to-market and 90%+ test coverage on gRPC contracts at ANZ, 20x faster document search at Halliburton, and more than 60% lower observability cost at Bolloré.',
    metrics: [
      { value: '~30%', label: 'Shorter time-to-market at ANZ (AI-assisted workflow)' },
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
        description: 'Relational databases and the message brokers used in production.',
        details: [
          'PostgreSQL, SQL Server, Oracle, BigQuery, DynamoDB, LiteDB',
          'Query work: indexing and stored procedures',
          'Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead letter queues',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        description:
          'GCP, Azure, and AWS, with containers and CI on the platforms used in production.',
        details: [
          'GCP: GKE, Cloud Run, Pub/Sub, BigQuery',
          'Azure: Service Bus, Azure SQL, Azure AD, DevOps, OpenAI, AI Speech',
          'AWS: Lambda, DynamoDB, S3, ECS, EKS',
          'Docker, Kubernetes, Helm',
          'CI/CD: GitHub Actions, Azure DevOps, Jenkins',
        ],
      },
      ai: {
        title: 'Applied AI',
        description: 'Agentic coding, AI-assisted tests, and LLM steps inside backend pipelines.',
        details: [
          'Agentic coding with the Claude Code ecosystem: planning, boilerplate, and refactoring',
          'AI-assisted unit and contract test generation, reviewed before they land',
          'LLM integration in backend pipelines: Azure OpenAI and Azure AI Speech in production at IOGA.fr, and Anthropic Claude',
          'Prompt and context design for code and test generation',
        ],
      },
      testing: {
        title: 'Testing & Quality',
        description: 'Go tests, MSTest, Selenium, and the scan gates used on deploys.',
        details: [
          'Go testing (90%+ coverage on ANZ IMT gRPC contracts)',
          'MSTest unit and integration tests',
          'Selenium WebDriver end-to-end suites',
          'SonarQube and Fortify gates',
          'OWASP checks and OpenTelemetry',
          'TDD practices on banking services',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Angular and TypeScript on the web apps in this work.',
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
      'Banking, logistics, manufacturing and oil and gas systems, plus applied AI work such as an LLM subtitle pipeline.',
    solo: 'Solo',
    team: 'Team',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Email, LinkedIn, GitHub, WhatsApp, or Zalo.',
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
