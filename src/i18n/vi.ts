export const vi = {
  nav: {
    home: 'Trang chủ',
    experience: 'Kinh nghiệm',
    projects: 'Dự án',
    contact: 'Liên hệ',
    menu: 'Trình đơn',
    close: 'Đóng',
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
    bio: 'Kỹ sư backend senior với hơn 5 năm trên hệ thống production cho <strong>ANZ Bank (Úc)</strong>, <strong>Halliburton</strong> và <strong>Sacombank</strong>, gồm ngân hàng số, dầu khí, logistics và fintech. Tôi đang hiện đại hóa nền tảng Chuyển tiền quốc tế và Apple Pay của ANZ trên GCP, chủ yếu bằng microservices .NET và Golang. Kết quả đã ghi nhận: tìm tài liệu Halliburton nhanh hơn 20 lần, giảm hơn 60% chi phí observability trên bước chuyển OpenTelemetry của Bolloré, và chu kỳ phát triển tại ANZ nhanh hơn khoảng 30% khi dùng công cụ GenAI.',
    metrics: [
      { value: '5+', label: 'Năm trên hệ thống production' },
      { value: '20x', label: 'Tìm tài liệu tại Halliburton' },
      { value: '>60%', label: 'Chi phí observability tại Bolloré' },
    ],
  },
  experience: {
    title: 'Kinh nghiệm làm việc',
  },
  skills: {
    title: 'Kỹ năng chuyên môn',
    subtitle: 'Sáu nhóm. Mở một nhóm để xem công cụ phía sau công việc đó.',
    hoverHint: 'Nhấn để xem chi tiết',
    categories: {
      backend: {
        title: 'Backend & Kiến trúc',
        description:
          'Microservices và hệ thống event-driven, dùng DDD, SOLID và onion architecture.',
        details: [
          'Nhóm chính: .NET Core (C#), Golang, Java (Spring Boot), Python',
          'Thiết kế hệ thống: Microservices & Event-Driven với DDD và Onion Architecture',
          'API hiệu suất cao: gRPC (Protobuf) & RESTful APIs độ trễ thấp',
          'Bảo mật: Tiêu chuẩn OWASP, mẫu Resiliency (Circuit Breaker, Retry)',
          'Chiến lược Cache với Redis cho hệ thống thông lượng cao',
          'Đồng thời, quản lý bộ nhớ, và lập trình bất đồng bộ',
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
          'Hàng đợi thư chết, Event Sourcing, và mẫu CQRS',
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
          'Hạ tầng dạng mã: module Terraform cho cấp phát đa đám mây và môi trường giống nhau',
          'CI/CD: GitHub Actions, Azure DevOps Pipelines, Jenkins - cổng kiểm thử tự động và chiến lược hoàn tác',
          'Điều phối container: Docker, Kubernetes, Helm Charts, bản build nhiều tầng, kho container',
        ],
      },
      ai: {
        title: 'AI & Năng suất',
        description:
          'Công cụ GenAI và API LLM dùng để rút ngắn triển khai, kiểm thử và ghi chú thiết kế.',
        details: [
          'Tích hợp AI: Gemini API, AWS Bedrock & Claude API cho xử lý dữ liệu thông minh',
          'Claude: dùng Claude Code để lập trình cặp, rà kiến trúc, và tái cấu trúc tự động',
          'Xây luồng backend và pipeline tự động bằng LLM',
          'Hiệu suất: GitHub Copilot, Claude Code và Cursor để viết mã nhanh hơn',
          'Kiểm thử đơn vị tự động bằng AI (TDD), rà mã, và phân tích log',
          'Kỹ thuật prompt cho phác thảo kiến trúc, tài liệu, và quyết định',
        ],
      },
      testing: {
        title: 'Kiểm thử & Chất lượng',
        description:
          'Kiểm thử tự động, E2E bằng Selenium, integration test trên Docker, và quét bảo mật.',
        details: [
          'Kiểm thử đơn vị và tích hợp: xUnit, NUnit, JUnit, Go testing, mục tiêu phủ trên 90%',
          'Tự động hóa E2E và giao diện: Selenium WebDriver cho hồi quy đa trình duyệt',
          'Kiểm thử tích hợp: môi trường Docker Compose cho kiểm thử từng dịch vụ trong CI/CD',
          'Phân tích tĩnh: SonarQube cho chất lượng mã và nợ kỹ thuật',
          'Quét bảo mật: Fortify cho phát hiện lỗ hổng và tuân thủ OWASP',
          'Kiểm thử hiệu suất: JMeter cho thử tải và tìm nút thắt',
          'TDD & BDD cho hệ thống tài chính quan trọng',
        ],
      },
      frontend: {
        title: 'Frontend & Công cụ',
        description:
          'Angular, React và React Native cho web và ứng dụng hybrid, cùng công cụ build thường dùng.',
        details: [
          'Nhóm frontend: Angular, React, React Native cho ứng dụng web và hybrid',
          'Thành thạo HTML5, CSS3, JavaScript (ES6+), TypeScript',
          'Công cụ build: Webpack, Vite, npm/yarn',
          'Quản lý phiên bản: Git với chiến lược nhánh (Gitflow, trunk-based)',
          'IDE và gỡ lỗi: Visual Studio, VS Code với profiling',
        ],
      },
    },
  },
  proficiency: {
    title: 'Mức độ thành thạo',
    subtitle: 'Tự đánh giá dựa trên việc dùng hàng ngày trong hơn 5 năm.',
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
