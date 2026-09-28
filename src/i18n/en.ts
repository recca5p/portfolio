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
    title: 'Senior Backend Engineer',
    greeting: 'Tan Phat Vo',
    tagline: 'Senior Backend Engineer, .NET, Golang, Cloud, AI',
    heroSummary:
      'I design .NET and Golang platforms for banking, cloud, and industrial automation.',
    experienceCta: 'View experience',
    emailCta: 'Email me',
    imageCaption: 'A closer look at the physical layer behind cloud systems.',
    summaryTitle: 'Background',
    bio: "Senior backend engineer with 5+ years on production systems for <strong>ANZ Bank (Australia)</strong>, <strong>Halliburton</strong>, and <strong>Sacombank</strong>, across digital banking, oil and gas, logistics, and fintech. I am modernizing ANZ's International Money Transfer and Apple Pay platform on GCP, mostly with .NET and Golang microservices. Recorded results include a 20x Halliburton document-search improvement, more than 60% lower observability cost on the Bolloré OpenTelemetry move, and about 30% faster development cycles with GenAI tooling at ANZ.",
    metrics: [
      { value: '5+', label: 'Years on production systems' },
      { value: '20x', label: 'Halliburton document search' },
      { value: '>60%', label: 'Bolloré observability cost' },
    ],
  },
  experience: {
    title: 'Experience',
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Six groups. Open one to see the tools behind that work.',
    hoverHint: 'Tap for details',
    categories: {
      backend: {
        title: 'Backend & Architecture',
        description:
          'Microservices and event-driven systems, using DDD, SOLID, and onion architecture.',
        details: [
          'Core Stack: .NET Core (C#), Golang, Java (Spring Boot), Python',
          'System Design: Microservices & Event-Driven Architectures using DDD and Onion Architecture',
          'High-Performance APIs: Low-latency gRPC (Protobuf) & RESTful APIs',
          'Security: OWASP standards, Resiliency patterns (Circuit Breaker, Retry)',
          'Caching strategies with Redis for high-throughput systems',
          'Concurrency, Memory Management, and Asynchronous programming patterns',
        ],
      },
      database: {
        title: 'Database & Messaging',
        description: 'Relational databases, NoSQL, and the message brokers used in production.',
        details: [
          'RDBMS: SQL Server, PostgreSQL, Oracle - query optimization, indexing, stored procedures',
          'Complex Schema Design for high-volume transactional systems',
          'NoSQL & Big Data: DynamoDB (Serverless), Google BigQuery for analytics',
          'Message Brokers: Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead Letter Queues, Event Sourcing, and CQRS patterns',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        description:
          'AWS, Azure, and GCP: serverless and container platforms, with CI/CD across the three clouds.',
        details: [
          'AWS: Lambda, EC2, ECS, EKS, Fargate, S3, RDS, DynamoDB, SQS, SNS, API Gateway, CloudWatch, CloudFront, VPC, IAM, Secrets Manager, CodePipeline',
          'Azure: Azure Service Bus, Azure DevOps, Azure SQL, Azure Functions, App Service, Azure AD, Azure OpenAI, Azure AI Speech, Azure Blob Storage, Azure Monitor, Key Vault, AKS',
          'GCP: GKE, Cloud Run, Cloud Functions, Pub/Sub, BigQuery, Cloud SQL, Firestore, Cloud Storage, Secret Manager',
          'Infrastructure as Code: Terraform modules for multi-cloud provisioning and environment parity',
          'CI/CD: GitHub Actions, Azure DevOps Pipelines, Jenkins - automated testing gates and rollback strategies',
          'Container Orchestration: Docker, Kubernetes, Helm Charts, multi-stage builds, container registries',
        ],
      },
      ai: {
        title: 'AI & Dev Productivity',
        description:
          'GenAI tools and LLM APIs used to speed up implementation, tests, and design notes.',
        details: [
          'AI Integration: Gemini API, AWS Bedrock & Claude API for intelligent data processing',
          'Claude: Using Claude Code for pair programming, architectural review, and automated refactoring',
          'Building LLM-powered backend workflows and automation pipelines',
          'Dev Efficiency: GitHub Copilot, Claude Code & Cursor for accelerated code generation',
          'AI-driven automated unit testing (TDD), code review, and log analysis',
          'Prompt engineering for architectural drafting, documentation, and decision-making',
        ],
      },
      testing: {
        title: 'Testing & Quality',
        description:
          'Automated tests, Selenium end-to-end runs, Docker-based integration tests, and security scans.',
        details: [
          'Unit & Integration Testing: xUnit, NUnit, JUnit, Go testing with >90% coverage targets',
          'E2E & UI Automation: Selenium WebDriver for cross-browser regression testing',
          'Integration Testing: Docker Compose environments for isolated service-level testing in CI/CD workflows',
          'Static Analysis: SonarQube for code quality and technical debt management',
          'Security Scanning: Fortify for vulnerability detection and OWASP compliance',
          'Performance Testing: JMeter for load/stress testing and bottleneck identification',
          'TDD & BDD practices for mission-critical financial systems',
        ],
      },
      frontend: {
        title: 'Frontend & Tooling',
        description:
          'Angular, React, and React Native for web and hybrid apps, plus the usual build tooling.',
        details: [
          'Frontend Stack: Angular, React, React Native for hybrid & web applications',
          'Proficient in HTML5, CSS3, JavaScript (ES6+), TypeScript',
          'Build Tools: Webpack, Vite, npm/yarn for modern workflows',
          'Version Control: Git with branching strategies (Gitflow, trunk-based)',
          'IDEs & Debugging: Visual Studio, VS Code with advanced profiling',
        ],
      },
    },
  },
  proficiency: {
    title: 'Proficiency at a Glance',
    subtitle: 'Self-assessed expertise levels based on daily production use across 5+ years.',
    expert: 'Expert',
    proficient: 'Proficient',
    familiar: 'Familiar',
  },
  education: {
    title: 'Education',
    degree: 'Bachelor of Information Technology',
    location: 'Ho Chi Minh City, Vietnam',
    certTitle: 'Certifications & Languages',
    englishProficiency: 'English Proficiency',
  },
  projects: {
    title: 'Projects & Other Jobs',
    subtitle:
      'Systems from banking, logistics, manufacturing, and oil and gas, including later AI work.',
    team: 'Team',
    viewAll: 'View All Projects',
    viewAllSubtitle: 'The full list: client systems, contract work, and later AI projects.',
    backHome: 'Back to Home',
  },
  contact: {
    title: 'Contact Me',
    subtitle: 'Email, LinkedIn, WhatsApp, or Zalo.',
    clickToEmail: 'Tap to send email',
    viewProfile: 'View profile',
    scanToChat: 'Scan to chat',
    hoverQrClick: 'Tap to chat, or scan the QR code',
    showQr: 'Show QR code',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};
