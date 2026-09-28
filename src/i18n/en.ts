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
    tagline:
      'Go services for ANZ Plus today. Before that, .NET at Halliburton and .NET and Java at Sacombank, plus freelance .NET for Bolloré.',
    greeting: 'Tan Phat Vo',
    heroSummary:
      'I build Go and gRPC services for ANZ Plus payments, disputes, customer profiles and international transfers. I plan, write and test that work with Cursor and Claude Code.',
    emailCta: 'Email me',
    downloadCv: 'Download CV',
    years: '6+ years',
    employer: 'ANZ via HCLTech',
    summaryTitle: 'Background',
    bio: 'Senior software engineer with 6+ years on production systems for <strong>ANZ Bank</strong>, <strong>Halliburton</strong> and <strong>Sacombank</strong>, plus freelance work alongside full-time roles for Bolloré Logistics and IOGA.fr. I started on bank systems at Sacombank, then oil and gas software at Halliburton, and now digital banking at ANZ.',
    aiTitle: 'How I use AI',
    aiBody:
      "I use Cursor and Claude Code every day to write code and tests, so a change reaches review sooner. I also use AI for field auto-mapping and to learn a client's business domain before consulting. At IOGA.fr I built a pipeline that transcribes video and translates the subtitles.",
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
          'Docker, Kubernetes, Helm, Terraform',
          'CI/CD: GitHub Actions, Azure DevOps, Jenkins',
          'OpenTelemetry',
        ],
      },
      ai: {
        title: 'Applied AI',
        description:
          'Daily coding and testing, field mapping, domain support, and video subtitles.',
        details: [
          'Cursor and Claude Code, used daily for coding and testing',
          'AI-assisted field auto-mapping',
          'AI that learns a business domain to support customer consulting',
          'Video transcription and subtitle translation at IOGA.fr with Azure OpenAI and Azure AI Speech',
          'Hands-on with Gemini and Amazon Bedrock',
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
          'JMeter',
          'OWASP checks',
          'TDD practices on banking services',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Angular screens for Sacombank e-invoicing and the Apollo English ERP.',
        details: [
          'Sacombank e-invoice system on ABP Framework',
          'Apollo English ERP for CRM, classes and payments',
        ],
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
    allTitle: 'Projects',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Open to Senior Applied AI and Backend roles. I work from Ho Chi Minh City (GMT+7).',
    scanToChat: 'Scan to chat',
    showQr: 'Show QR code',
    hideQr: 'Hide QR code',
    copyEmail: 'Copy email',
    copied: 'Copied',
    copyFallback: 'Selected. Press Ctrl+C or Cmd+C.',
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
