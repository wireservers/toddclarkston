// Mirrors "Todd Clarkston CV - ATS.docx". Copied from v1/v2/src/data/resume.ts.

export type Role = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
  /** Optional sub-roles (Federal Reserve progression). */
  tracks?: { title: string; bullets: string[] }[];
};

export const experience: Role[] = [
  {
    id: "centerlight",
    company: "CenterLight Healthcare",
    role: "Application Developer III — Lead Architect / Tech Lead",
    dates: "Oct 2025 – Oct 2026",
    location: "New York, NY (Remote) · via C2Q",
    summary:
      "Architecting and leading a greenfield Electronic Health Record platform for the nation's largest not-for-profit PACE program.",
    highlights: [
      "Architected and continues to lead a greenfield EHR serving approximately 4,000 users and 2,700 patients across nine facilities; initial clinical and administrative capabilities are deployed while additional modules remain in active development.",
      "Leads a five-person engineering team — solution architecture, coding standards, code review, technical direction, and delivery priorities — while remaining hands-on across the full stack.",
      "Designed and integrated Azure Foundry Vision, Azure AI Document Intelligence, and Azure Speech into clinical and operational EHR workflows, including speech-to-text, document intelligence, and a chatbot.",
      "Designed and built a CMS-style configurable form field builder that replaced a confusing legacy designer, cutting form creation from about an hour to 10 minutes, with configurable and custom security at the individual field level and no code changes.",
      "Managed full GitHub CI/CD pipelines, releasing to Development multiple times a day, UAT weekly, and Production each quarter, with rollback through deployment-slot swaps or redeploying the previous build.",
      "Instrumented the code to detect Azure Key Vault, connection-string, and expired-key failures, so configuration problems identify themselves in UAT logs before reaching Production.",
      "Delivered Patient/Nursing Appointment Management, an Admin Portal, and an operational status dashboard.",
      "Designed and implemented a custom CIAM/SSO server on Microsoft Entra ID single sign-on with MSAL, with user provisioning and entitlements, service-to-service authentication, SOC 2-aligned audit logging, and Azure Key Vault secrets and key rotation.",
      "Integrated HL7 messaging and Azure FHIR services for interoperability and HIPAA-aligned handling of PHI.",
      "Built the front end with React Native Web and the back end with .NET 10 Web API, C#, Entity Framework, and SQL Server; Azure Functions and App Services workflows, with infrastructure defined in Bicep and ARM templates.",
      "Applied Claude Code, reusable skills, advanced prompting, and agentic workflows to code generation, reviews, and automated testing; created the team's AI coding guidelines, checklists for reviewing AI-generated code, and automated code reviews.",
    ],
    tags: [".NET 10", "React Native Web", "Azure AI", "HL7 / FHIR", "CIAM / SSO", "GitHub CI/CD"],
  },
  {
    id: "wireservers",
    company: "WireServers LLC",
    role: "Owner & Principal Consultant / Lead Architect",
    dates: "2009 – 2025",
    location: "Highlands Ranch, CO",
    summary:
      "Boutique software consultancy serving approximately 40 clients, including about 10 repeat clients. Led a four-developer team and owned client relationships, architecture, full-stack delivery, cloud deployment, and support.",
    highlights: [
      "Delivered enterprise web, mobile, desktop, API, and cloud applications across healthcare, financial services, e-commerce, and SaaS.",
      "Hands-on full-stack development with C#/.NET, ASP.NET Core, Angular, React, React Native, Next.js, Node.js, Python (Flask, Django), SQL platforms, and Azure/AWS.",
      "Built Python services with Flask and Django, ETL imports and data mapping, Azure Functions in Python, and an AWS Lambda geolocation service in Python.",
      "Ran Azure DevOps CI/CD and the full SDLC, deploying products to production multiple times a week; Docker and AKS for containerized microservices; AWS Lambda, API Gateway, CloudFormation, S3, EC2, Cognito, Route 53.",
      "Defined Azure infrastructure in Bicep and ARM templates, managed secrets and key rotation in Azure Key Vault, and rolled back with deployment-slot swaps or by redeploying the previous build.",
      "Integrated OpenAI for document OCR, classification, summarization, and structured extraction; designed multi-model architectures with provider fallback and token tracking.",
      "Built AI-assisted engineering workflows with Claude Code, custom skills, MCP server integrations, automated code review, and test generation.",
      "Designed RESTful APIs, SOA, microservices, and asynchronous workflows using RabbitMQ and Azure Service Bus.",
      "Implemented OWASP Top 10, HIPAA, SOC 2, and PCI DSS-aligned security controls, SOC 2-guided audit logging, and service-to-service authentication; mentored developers from junior to architect level.",
    ],
    tracks: [
      {
        title: "Selected client engagements",
        bullets: [
          "eLivelihood — care-management dashboard for families; DevOps, full-stack, and tech lead (Angular, Firebase, Ionic).",
          "Series Code — three years of Python services with Flask and Django.",
          "Geolocation check-in app — geocaching-style AWS Lambda service in Python; hardware at each location site authenticates check-ins.",
          "Swoovy — full-stack engineer and project manager (Python, Django, React Native, PostgreSQL).",
          "Sent & Secure — end-to-end encrypted desktop app (Xamarin, WPF, MAUI, XAML, Entity Framework, SQL).",
          "FitnessOne — Angular front end with responsive UX, Material Design, and NgRx state.",
          "Bionatal — Ecwid ↔ Klaviyo integrations orchestrated over Azure Service Bus.",
          "BurstIQ — database-driven analytics in React with Nivo visualizations and reusable components.",
        ],
      },
    ],
    tags: ["Consulting", "C# / .NET", "React / Angular", "Azure & AWS", "OpenAI", "Team lead"],
  },
  {
    id: "welldyne",
    company: "WellDyneRX",
    role: "Senior Software Developer",
    dates: "2018 – 2019",
    location: "Centennial, CO · via TEKsystems",
    summary:
      "Pharmacy Benefit Manager supporting mail-order and retail pharmacy operations, processing approximately 15 million prescriptions annually.",
    highlights: [
      "Developed full-stack pharmacy applications with MVC/C#, ASP.NET Web API, Knockout.js, jQuery, Bootstrap, SQL Server, LINQ, and Entity Framework.",
      "Automated multi-day prescription verification, fulfillment, and shipping workflows with RabbitMQ, replacing manual processing with queue-driven pub/sub orchestration.",
      "Built HIPAA-aligned prescription-processing systems handling PHI with HL7 messaging.",
      "Cut deployment time 40% by automating Azure DevOps CI/CD pipelines and PowerShell deployments; migrated legacy systems to Docker containers.",
      "Helped redesign a key enterprise application, increasing performance and scalability 30%.",
      "Remediated OWASP Top 10 and SonarQube-flagged vulnerabilities in HIPAA-regulated systems, with audit logging following SOC 2 guidelines.",
      "Provided architecture guidance, proofs of concept, database support, and mentoring.",
    ],
    tags: ["Healthcare", "RabbitMQ", "HL7", "Azure DevOps", "Docker"],
  },
  {
    id: "frb",
    company: "Federal Reserve Bank of Kansas City",
    role: "Senior Software Engineer / Lead / Architect",
    dates: "2014 – 2018",
    location: "Denver, CO",
    summary:
      "Enterprise applications supporting Federal Reserve operations, including the national Examiner Application used by approximately 1,000 bank examiners across all 50 states.",
    highlights: [],
    tracks: [
      {
        title: "Software Architect",
        bullets: [
          "Evaluated architectures and set technical direction for security, quality, usability, and maintainability.",
          "Coordinated across Federal Reserve districts and oversight departments to obtain security, quality, and usability approvals.",
          "Institutionalized coding standards, peer review, technical documentation, and vendor-software evaluation.",
          "Applied secure-software practices and PCI DSS-aligned controls to financial applications.",
          "Brought onto the National team at the New York Fed, which builds software shared by all 12 Reserve Banks; delivered a common audit logger, then a common RBAC/ReBAC security model.",
          "With an architect counterpart, led the move from .NET Framework to .NET Core and built a national .NET Core component library.",
        ],
      },
      {
        title: "Lead Developer",
        bullets: [
          "Led a cross-functional team of four developers, one software quality analyst, and one DBA, delivering a mission-critical application on time and under budget.",
          "Increased team velocity 25% and raised code-quality metrics 35% with SonarQube and peer reviews.",
          "Mentored 5+ junior developers and supported mid-level and senior engineers.",
        ],
      },
      {
        title: "Senior Software Engineer",
        bullets: [
          "Built the national Examiner Application — an MVC single-page app with RESTful services giving ~1,000 examiners access to each bank's information and history.",
          "Delivered full-stack apps with MVC / C# 5.0, Angular 2, ASP.NET Web API 2, Entity Framework, TypeScript, and Knockout.js.",
          "Designed SQL Server 2012 tables and stored procedures for integrity and performance.",
        ],
      },
    ],
    tags: ["Financial services", "Architecture", "Team lead", "Angular", "SQL Server"],
  },
];
