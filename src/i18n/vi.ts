export const vi = {
  nav: {
    home: 'Trang chủ',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
    menu: 'Menu',
  },
  home: {
    title: 'Kỹ sư Backend Senior',
    greeting: 'Võ Tấn Phát',
    tagline: 'Kỹ sư Backend Senior, .NET, Golang, Cloud, AI',
    heroSummary:
      'Tôi thiết kế nền tảng .NET và Golang cho ngân hàng, cloud và tự động hóa công nghiệp.',
    experienceCta: 'Xem kinh nghiệm',
    emailCta: 'Gửi email',
    imageCaption: 'Góc nhìn gần hơn vào lớp hạ tầng phía sau các hệ thống cloud.',
    summaryTitle: 'Sơ lược',
    bio: 'Kỹ sư backend senior với hơn 5 năm trên hệ thống production cho <strong>ANZ Bank (Úc)</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong>, gồm ngân hàng số, dầu khí, logistics và fintech. Tôi đang hiện đại hóa nền tảng Chuyển tiền quốc tế và Apple Pay của ANZ trên GCP, chủ yếu bằng microservices .NET và Golang. Kết quả đã ghi nhận: tìm tài liệu nhanh hơn 20 lần, giảm 60% chi phí observability nhờ OpenTelemetry, và chu kỳ phát triển nhanh hơn khoảng 30% khi dùng công cụ GenAI.',
    metrics: [
      { value: '5+', label: 'Năm vận hành hệ thống production' },
      { value: '20x', label: 'Tìm tài liệu nhanh hơn' },
      { value: '60%', label: 'Chi phí observability thấp hơn' },
    ],
  },
  experience: {
    title: 'Kinh nghiệm làm việc',
  },
  skills: {
    title: 'Kỹ năng chuyên môn',
    subtitle: 'Mở một nhóm để xem công cụ phía sau công việc.',
    hoverHint: 'Nhấn để xem chi tiết',
    categories: {
      backend: {
        title: 'Backend & Kiến trúc',
        description:
          'Microservices và hệ thống event-driven, dùng DDD, SOLID và onion architecture.',
        details: [
          'Core Stack: .NET Core (C#), Golang, Java (Spring Boot), Python',
          'Thiết kế hệ thống: Microservices & Event-Driven với DDD và Onion Architecture',
          'API hiệu suất cao: gRPC (Protobuf) & RESTful APIs độ trễ thấp',
          'Bảo mật: Tiêu chuẩn OWASP, mẫu Resiliency (Circuit Breaker, Retry)',
          'Chiến lược Cache với Redis cho hệ thống thông lượng cao',
          'Concurrency, Quản lý bộ nhớ, và Asynchronous programming',
        ],
      },
      database: {
        title: 'Cơ sở dữ liệu & Messaging',
        description: 'Cơ sở dữ liệu quan hệ, NoSQL, và message broker dùng trong production.',
        details: [
          'RDBMS: SQL Server, PostgreSQL, Oracle - Tối ưu Query, Indexing, Stored Procedures',
          'Schema Design phức tạp cho hệ thống giao dịch khối lượng lớn',
          'NoSQL & Big Data: DynamoDB (Serverless), Google BigQuery phân tích',
          'Message Brokers: Kafka, RabbitMQ, Azure Service Bus, GCP Pub/Sub',
          'Dead Letter Queues, Event Sourcing, và CQRS patterns',
        ],
      },
      cloud: {
        title: 'Cloud & DevOps',
        description:
          'AWS, Azure và GCP: nền tảng serverless và container, với CI/CD trên cả ba cloud.',
        details: [
          'AWS: Lambda, EC2, ECS, EKS, Fargate, S3, RDS, DynamoDB, SQS, SNS, API Gateway, CloudWatch, CloudFront, VPC, IAM, Secrets Manager, CodePipeline',
          'Azure: Azure Service Bus, Azure DevOps, Azure SQL, Azure Functions, App Service, Azure AD, Azure OpenAI, Azure AI Speech, Azure Blob Storage, Azure Monitor, Key Vault, AKS',
          'GCP: GKE, Cloud Run, Cloud Functions, Pub/Sub, BigQuery, Cloud SQL, Firestore, Cloud Storage, Secret Manager',
          'Infrastructure as Code: Module Terraform cho provisioning đa đám mây và đồng nhất môi trường',
          'CI/CD: GitHub Actions, Azure DevOps Pipelines, Jenkins - automated testing gates và chiến lược rollback',
          'Container Orchestration: Docker, Kubernetes, Helm Charts, multi-stage builds, container registries',
        ],
      },
      ai: {
        title: 'AI & Năng suất',
        description:
          'Công cụ GenAI và API LLM dùng để rút ngắn triển khai, kiểm thử và ghi chú thiết kế.',
        details: [
          'Tích hợp AI: Gemini API, AWS Bedrock & Claude API cho xử lý dữ liệu thông minh',
          'Claude: Sử dụng Claude Code cho pair programming, review kiến trúc, và refactoring tự động',
          'Xây dựng workflow backend tự động hóa bằng LLM',
          'Hiệu suất: GitHub Copilot, Claude Code & Cursor cho tạo mã nhanh',
          'Kiểm thử tự động AI-driven (TDD), code review, và phân tích log',
          'Prompt engineering cho phác thảo kiến trúc, tài liệu và ra quyết định',
        ],
      },
      testing: {
        title: 'Kiểm thử & Chất lượng',
        description:
          'Kiểm thử tự động, E2E bằng Selenium, integration test trên Docker, và quét bảo mật.',
        details: [
          'Unit & Integration Testing: xUnit, NUnit, JUnit, Go testing với mục tiêu >90% coverage',
          'E2E & UI Automation: Selenium WebDriver cho kiểm thử hồi quy đa trình duyệt',
          'Integration Testing: Môi trường Docker Compose cho kiểm thử cấp dịch vụ cô lập trong CI/CD',
          'Static Analysis: SonarQube cho chất lượng mã và quản lý technical debt',
          'Quét bảo mật: Fortify cho phát hiện lỗ hổng và tuân thủ OWASP',
          'Kiểm thử hiệu suất: JMeter cho load/stress testing và xác định bottleneck',
          'TDD & BDD cho hệ thống tài chính quan trọng',
        ],
      },
      frontend: {
        title: 'Frontend & Công cụ',
        description:
          'Angular, React và React Native cho web và ứng dụng hybrid, cùng công cụ build thường dùng.',
        details: [
          'Frontend Stack: Angular, React, React Native cho ứng dụng web & hybrid',
          'Thành thạo HTML5, CSS3, JavaScript (ES6+), TypeScript',
          'Build Tools: Webpack, Vite, npm/yarn cho workflow hiện đại',
          'Version Control: Git với branching strategies (Gitflow, trunk-based)',
          'IDEs & Debugging: Visual Studio, VS Code với profiling nâng cao',
        ],
      },
    },
  },
  proficiency: {
    title: 'Mức độ thành thạo',
    subtitle: 'Tự đánh giá dựa trên sử dụng thực tế hàng ngày trong 5+ năm sản xuất.',
    expert: 'Chuyên gia',
    proficient: 'Thành thạo',
    familiar: 'Quen thuộc',
  },
  education: {
    title: 'Học vấn',
    degree: 'Cử nhân Công nghệ Thông tin',
    location: 'Thành phố Hồ Chí Minh, Việt Nam',
    certTitle: 'Chứng chỉ & Ngôn ngữ',
    englishProficiency: 'Trình độ tiếng Anh',
  },
  projects: {
    title: 'Dự án & Công việc khác',
    subtitle:
      'Các hệ thống ở ngân hàng, logistics, sản xuất và dầu khí, cùng phần việc AI sau này.',
    team: 'Nhóm',
    viewAll: 'Xem tất cả dự án',
    viewAllSubtitle: 'Danh sách đầy đủ: hệ thống khách hàng, hợp đồng, và các dự án AI sau này.',
    backHome: 'Về trang chủ',
  },
  contact: {
    title: 'Liên hệ',
    subtitle: 'Email, LinkedIn, WhatsApp hoặc Zalo.',
    clickToEmail: 'Nhấn để gửi email',
    viewProfile: 'Xem hồ sơ',
    scanToChat: 'Quét để nhắn tin',
    hoverQrClick: 'Nhấn để chat hoặc quét mã QR',
    showQr: 'Hiện mã QR',
  },
  footer: {
    rights: 'Bảo lưu mọi quyền.',
  },
};
