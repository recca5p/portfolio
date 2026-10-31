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
    title: 'Senior Backend Engineer — .NET & Go · DevOps & Cloud · Applied AI',
    tagline: 'Banking (ANZ, Sacombank) and energy (Halliburton, Tally Group).',
    greeting: 'Tan Phat Vo',
    heroSummary:
      'I build .NET, Go and Java services for banking and energy, on AWS, Azure and GCP. At ANZ I build the Go and gRPC services for ANZ Plus payments, disputes, customer profiles and international transfers, and I plan and test that work with Claude Code.',
    emailCta: 'Email me',
    downloadCv: 'Download CV',
    years: '6+ years',
    employer: 'ANZ via HCLTech',
    summaryTitle: 'Background',
    bio: 'Senior backend engineer with 6+ years building .NET, Go and Java services for banking and energy, on AWS, Azure and GCP. Main roles: <strong>ANZ Bank</strong>, <strong>Halliburton</strong> and <strong>Sacombank</strong>. <strong>Tally Group</strong> (Australian energy retail) is additional experience alongside those roles. I started on bank systems at Sacombank, then oil and gas software at Halliburton, and now digital banking at ANZ. Freelance work alongside those roles includes Bolloré Logistics and IOGA.fr.',
    aiTitle: 'How I use AI',
    aiBody:
      'Claude Code is my primary tool after GitHub Copilot. At ANZ I use it to plan changes, refactor, write unit tests and cover gRPC edge cases, and I share skills, templates and hooks with other teams. I also use AI for field auto-mapping. At IOGA.fr, Azure OpenAI and Azure AI Speech transcribe video and translate the subtitles. That pipeline has processed 500+ hours in about 70% less time.',
    metrics: [
      { value: '~2x', label: 'Feature delivery at ANZ, one sprint to about 3 days' },
      { value: '90%+', label: 'IMT gRPC contract coverage at ANZ' },
      { value: '5x', label: 'Faster document search, Halliburton' },
      { value: '>60%', label: 'Lower observability cost, Bolloré' },
    ],
  },
  experience: {
    title: 'Experience',
    additionalTitle: 'Additional experience',
    additionalNote:
      'Alongside the ANZ, Halliburton and Sacombank roles. Tally Group is energy retail in Australia.',
    publicContext: 'Public context',
    source: 'Source',
  },
  skills: {
    title: 'Technical Skills',
    categories: {
      ai: {
        title: 'Applied AI',
        description:
          'Claude Code for daily coding, shared workflows, and LLM features in products.',
        details: [
          'Agentic coding: Claude Code is the primary tool after GitHub Copilot. At ANZ it covers planning, refactoring, unit tests and gRPC edge cases. About 80% of those pull requests are written with it.',
          'Shared workflows: Claude Code skills, templates and hooks across teams, and AI-drafted unit tests for the IMT gRPC contracts.',
          'LLM products: Azure OpenAI (GPT) and Azure AI Speech for video transcription and subtitle translation. AI field auto-mapping. Gemini and Amazon Bedrock APIs.',
        ],
      },
      backend: {
        title: 'Backend: .NET & Go',
        description: '.NET and Go services, plus Java and Node.js, with gRPC, REST and CQRS.',
        details: [
          '.NET / C#: .NET 10, .NET 8 and .NET Core, ASP.NET Core Web API, EF Core, Dapper, ABP Framework. .NET 8 on AWS Lambda.',
          'Services: MassTransit (Mediator and Azure Service Bus), FluentValidation, Polly, Serilog, Quartz, SignalR.',
          '.NET tests: xUnit, Moq, MSTest and Testcontainers.',
          'Go: gRPC and Protobuf for ANZ Plus payments and data migration. Gin REST and GraphQL, sqlc, golang-migrate, PASETO, testify and testcontainers-go.',
          'Also Java (Play and Spring Boot), Node.js and Python.',
          'Architecture: microservices, event-driven design, CQRS, Clean and Onion architecture, DDD, Repository and Unit of Work, SOLID. Fail-closed multi-tenant query filters and RBAC. Transactional outbox, idempotency keys, optimistic concurrency, retry, circuit breaker and dead-letter queues. Contract-first gRPC.',
        ],
      },
      cloud: {
        title: 'DevOps & Cloud',
        description: 'AWS, Azure and GCP, with containers and CI/CD.',
        details: [
          'AWS: Lambda, SQS, S3, CloudWatch, Load Balancer, ECR, ECS, EKS, Secrets Manager.',
          'Azure: App Service, Functions, APIM, Azure SQL, Blob, Service Bus, Azure AD.',
          'GCP: Cloud Run, GKE, Pub/Sub, BigQuery. Auth0 SSO.',
          'Containers and IaC: Docker, docker-compose, Kubernetes (GKE and EKS), Helm, Terraform.',
          'CI/CD: GitHub Actions, GitLab CI (80% coverage gate, SAST, secret detection), Azure DevOps and Jenkins with SonarQube, Fortify and OWASP gates.',
          'Reliability: OpenTelemetry to Splunk, p95/p99 latency, JMeter load tests. SQL Server to Azure SQL, and RabbitMQ to Azure Service Bus.',
          'Selenium WebDriver end-to-end suites.',
        ],
      },
      database: {
        title: 'Data & messaging',
        description: 'Relational databases, migrations and message brokers.',
        details: [
          'SQL Server, MySQL 8, PostgreSQL, Oracle and Azure SQL, including stored procedures, functions, triggers and query tuning.',
          'Migrations: Flyway and EF Core. Data access with Dapper.',
          'MongoDB, DynamoDB, BigQuery, Snowflake, LiteDB and Redis.',
          'Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub and SQS.',
        ],
      },
      frontend: {
        title: 'Frontend',
        description: 'Supporting UI for billing, CRM and mobile apps.',
        details: [
          'Next.js 16, React 19, TypeScript, RTK Query and Tailwind.',
          'Angular 12 with NgRx, and Angular.',
          'React Native. Led the Xamarin to React Native migration.',
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
      'Banking and energy systems, including Australian energy retail, plus logistics, manufacturing and applied AI.',
    viewAll: 'View all projects',
    viewAllSubtitle:
      'Banking, energy, logistics, e-commerce and manufacturing systems, plus an LLM subtitle pipeline.',
    solo: 'Solo',
    allTitle: 'Projects',
  },
  contact: {
    title: 'Contact',
    subtitle:
      'Open to backend (.NET or Go) and DevOps roles that apply AI. I work from Ho Chi Minh City (GMT+7).',
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
