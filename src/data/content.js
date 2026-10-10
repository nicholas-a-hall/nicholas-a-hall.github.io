// ============================================================================
//  YOUR PORTFOLIO CONTENT
//  This is the only file you need to edit to make the site yours.
//  Every component reads from here. Change text, add projects, or swap links
//  and the layout updates automatically.
// ============================================================================

export const profile = {
  name: 'Nick',
  fullName: 'Nicholas Hall',
  // Name + level eyebrow above the hero headline. Recruiters need both fast.
  title: 'Nicholas Hall · Staff/Principal Platform & Site Reliability Engineer',
  // The spine: one line that says what you do and works for streaming-scale
  // reliability AND startup range.
  tagline: 'I simplify complexity and solve hard problems, fast.',
  // The range story, in your own voice.
  blurb:
    'I build tools and infrastructure that make development faster, reduce operational headaches, and save companies money. 21 years solving production engineering problems across AWS, GCP, Azure, Kubernetes, on-prem, and hybrid environments. From internal developer platforms to reliability and automation; I design, build, and operate systems that make distributed systems work reliably, efficiently and on a budget.',
  // Closing line for the contact section (straight from your LinkedIn).
  pitch:
    "I like strange problems, useful systems, and the places where tech makes life easier. If you have a headache technology could help with, I'm your guy.",
  location: 'Litchfield, Illinois',
  availability: 'Open to Staff/Principal IC & startup lead roles',
  email: 'nick@section33.io',
  phone: '(217) 608-0555',
  phoneUrl: 'tel:+12176080555',
  resumeUrl: './resume.pdf', // full résumé PDF lives in /public
}

// Headline proof, shown as a band right under the hero so recruiters hit your
// best numbers in the first screen instead of digging for them.
export const metrics = [
  { value: '$4M', label: 'annual cloud spend cut, zero observability lost' },
  { value: '$20M', label: 'ARR SaaS platform; Led the cloud engineering team that built and launched Graylog Cloud.' },
  { value: '20B', label: 'log entries / week at streaming scale' },
  { value: '10x', label: 'Increased developer velocity, reduced build + deploy cycle time from 60m to 6.' },
]

// Social / contact links. Remove any you don't want; the icons map by `type`.
export const socials = [
  { type: 'email', label: 'Email', url: 'mailto:nick@section33.io' },
  { type: 'github', label: 'GitHub', url: 'https://github.com/nicholas-a-hall' },
  { type: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/nicholashall87' },
  { type: 'website', label: 'section33.io', url: 'https://section33.io' },
]

// The "who I am" story, lightly edited from your own LinkedIn summary,
// because you already say it better than a resume ever could.
export const about = {
  heading: "Who I am & what I'm about",
  paragraphs: [
    "My background is weird, and I think that's the fun part. I've kept intelligence systems running in a combat zone, kept a TV station on air (once with a wifi hotspot), run streaming observability at 20 billion log entries a week, and rebuilt a bowling alley from dirt.",
    "I've worked across many different domains using the same pattern: learn fast, find the hard problems, build practical solutions. I've spent much of my career helping teams establish the infrastructure and engineering practices they need to do their best work. I build the platform, document the decisions, and make sure the team can own it long after my part is done.",
    "I started closer to the metal (electronics, RF, satellite comms, on-prem) and moved into the cloud later. I like weird physical problems software folks often forget. I pick up new tech fast, form a working opinion faster, and I write it all down: design docs, runbooks, paved roads. The point is leaving behind a system and a team that can solve the next ten problems without me. Teams I left years ago still ship on my deployment patterns."
  ],
  // Quick "facts about me" chips. Keep them human.
  facts: [
    'Army veteran',
    'Father of 4',
    '21 years in tech',
    'Owns a bowling alley (my real-world homelab)',
    'Python daily driver',
    'Hardware-to-cloud',
  ],
}

// Skills grouped into categories. Add/remove freely; groups render in order.
export const skillGroups = [
  {
    category: 'Reliability & Observability',
    skills: ['Elasticsearch / ECK', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Incident response', 'Disaster recovery', 'RTO / RPO', 'MTTR / MTTD', 'On-call'],
  },
  {
    category: 'AI & MLOps',
    skills: ['MLOps', 'Vertex AI', 'LLM agents', 'Agentic AI', 'Prompt engineering', 'Generative AI', 'AI service reliability'],
  },
  {
    category: 'Platform & Infrastructure',
    skills: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD', 'GitOps', 'CI/CD', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Azure Devops', 'Docker', 'Ansible', 'Linux'],
  },
  {
    category: 'Cloud (multi-cloud)',
    skills: ['AWS', 'GCP', 'Azure', 'GKE', 'AKS', 'EKS', 'Cloud Run', 'BigQuery', 'On-prem → cloud migration'],
  },
  {
    category: 'Languages & Automation',
    skills: ['Python', 'Go', 'Bash', 'PowerShell', 'TypeScript', 'React'],
  },
  {
    category: 'Security & Compliance',
    skills: ['SOC 2', 'Vault', 'IAM', 'Secrets management', 'ExternalSecrets Operator'],
  },
  {
    category: 'Data & Messaging',
    skills: ['Kafka', 'Redis', 'Postgres', 'MongoDB', 'RDS', 'Snowflake', 'Databricks', 'ESPNow', 'MQTT'],
  },
]

// Featured projects. The first ones are highlighted larger. `tags` show as
// chips. `links` render as buttons; use type 'demo' | 'code' | 'link'.
export const projects = [

  {

    title: 'Self-Service Kubernetes Platform',

    org: 'FORT Robotics · Formant · Growth Protocol',

    summary: "A developer platform pattern I've built and refined at three companies. Different products and teams, same goal: make software delivery self-service without compromising reliability.",
    metrics: [
      { value: '3', label: 'Organizations' },
      { value: 'Self-service', label: 'Application delivery' },
      { value: 'Multi-cloud', label: 'Portable platform pattern' },
    ],
    challenge: "Developers shouldn't need a platform engineer and three Jira tickets to ship an application. Teams need dependable environments without rebuilding the same infrastructure for every workload.",
    approach: [
      'Built and refined the Kubernetes platform pattern at FORT Robotics, Formant, and Growth Protocol.',
      'Used Terraform for the platform layer and shared operators: Istio, OpenTelemetry, ECK, Prometheus, Grafana, External Secrets, cert-manager, and Nginx ingress.',
      'Kept application delivery in Helm through CI/CD. Infrastructure and application releases have separate lifecycles, and developers can change application values without modifying the platform.',
      'Made mTLS, secrets, tracing, metrics, and alerting available as consistent platform capabilities. Application monitors and alerts live with the app as CRDs.',
    ],
    impact: [
      'Gave development teams a repeatable path to deploy and manage applications without putting every release through the platform team.',
      'Reused the architecture across three different organizations and their infrastructure constraints.',
      'Kept common operational defaults close to applications instead of rebuilding them service by service.',
    ],
    blurb:

      "Developers shouldn't need a platform engineer and three Jira tickets just to ship an application. I've built this same general Kubernetes pattern across multiple organizations: a portable, self-service platform where developers can deploy their own workloads and get the infrastructure they need without reinventing it every time.\n\n" +
      "Terraform manages the platform layer: Istio, OpenTelemetry, Elasticsearch via ECK, Prometheus, Grafana, External Secrets, cert-manager, and Nginx ingress, with ArgoCD and Vault available where needed. Application delivery is deliberately separate. CI/CD invokes Helm directly rather than pushing application releases through Terraform. Different lifecycles, clean rollbacks, and developers can change their own values without touching the underlying platform.\n\n" +
      "The result is a paved road. Developers ship an application and inherit mTLS, secrets, configuration, feature flags, tracing, metrics, and alerting by default. Monitors and alerts live as CRDs alongside the application in its Helm chart. The same patterns work across AWS, GCP, Azure, and customer-owned infrastructure. Platform engineering should remove obstacles, not become one.",
    tags: ['Kubernetes', 'Terraform', 'Operators', 'Helm', 'Istio', 'OpenTelemetry', 'ArgoCD', 'Multi-cloud'],

    links: [],

    featured: true,

  },

  {

    title: 'Integrated Observability Platform',

    org: 'Paramount, FORT Robotics, Formant, Growth Protocol',

    blurb:

      "Built and operated observability platforms across cloud-native services, Kubernetes, and AI/ML workloads. OpenTelemetry served as the translation and transport layer between workloads, collectors, backends, and alerting. I pushed teams toward native first-party instrumentation, and used the OTel Operator's auto-injection where it wasn't yet in place for faster visibility. Prometheus, Grafana, Alertmanager, Elasticsearch, and Jaeger, wired into Slack-based alerting and incident response.",

    tags: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Jaeger', 'Elasticsearch', 'Kubernetes'],

    links: [],

  },

  {

    title: 'Incident Command Systems',

    org: 'KSDK-TV, Graylog, FORT Robotics, Formant, Growth Protocol',

    blurb:

      'Stood up incident command systems that moved response out of ad-hoc heroics and into a repeatable operating model teams trust under pressure. Defined roles, severity models, escalation paths, and Slack-based response channels; integrated alerting, observability, and timeline capture; and established postmortem practice and clean handoffs between engineering, platform, customer-facing, and leadership.',

    tags: ['Incident Response', 'On-call', 'Postmortems', 'Alerting', 'SRE'],

    links: [],

  },

  {

    title: 'SOC 2 Engineering & Audit Readiness',

    org: 'Growth Protocol · Graylog',

    summary: 'Turning security requirements into working operational controls instead of an audit-time scramble.',
    metrics: [
      { value: 'Type I', label: 'Growth Protocol' },
      { value: 'Type II', label: 'Graylog' },
      { value: '< 3 months', label: 'Growth Protocol audit readiness' },
    ],
    challenge: 'Enterprise customers need evidence that the infrastructure is secure and properly operated. At smaller teams, preparing for SOC 2 can pull engineers away from product delivery for months.',
    approach: [
      'At Growth Protocol, owned the technical implementation for SOC 2 Type I: access control, change management, security monitoring, cloud remediation, and evidence tracking through Vanta.',
      'Integrated cloud intrusion-detection alerting into real operations instead of treating it as a paperwork requirement.',
      'At Graylog, helped take the cloud platform through SOC 2 Type II as part of building and launching Graylog Cloud.',
    ],
    impact: [
      'Growth Protocol was ready for its Type I audit in under three months; an audit scheduled for three days finished in an afternoon.',
      'Supported Graylog Cloud through SOC 2 Type II with controls built into platform operations and delivery.',
    ],
    blurb:

      "I've taken two engineering organizations through SOC 2 work: Type I at Growth Protocol and Type II at Graylog. Different companies, different environments, same basic problem: turning security and compliance requirements into controls that actually work in production.\n\n" +
      "At Growth Protocol, I owned the technical implementation for SOC 2 Type I, getting the company audit-ready in under three months. The auditors had reserved three days for the first audit and finished in an afternoon. I implemented controls across access management, change management, security monitoring, and cloud infrastructure, using Vanta to organize evidence and track remediation. That included building cloud intrusion-detection alerting into the operational workflow instead of treating monitoring as an audit checkbox.\n\n" +
      "At Graylog, I helped take the cloud platform through SOC 2 Type II as part of building and launching Graylog Cloud. Compliance matters because enterprise customers need to trust the platform before they'll put their data on it. My approach is to build those requirements into the infrastructure and delivery process from the start, rather than scramble to bolt them on when an auditor shows up.",
    tags: ['SOC 2', 'Vanta', 'Security', 'Compliance', 'Cloud IDS'],

    links: [],

    featured: true,

  },
  {

    title: 'CanaryBot: LLM Incident-Response Agent',

    org: 'Growth Protocol & Formant',

    blurb:

      'An LLM-assisted incident-response bot connecting alerting workflows to a conversational interface in Slack. It relays operational alerts and answers the questions that eat time during active response (what happened, when it started, what changed, what signals fired), keeping incident context in one place so the team can focus on diagnosis, mitigation, and recovery instead of digging through scattered logs and chat.',

    tags: ['LLM', 'Python', 'Prompt Engineering', 'Slack', 'Incident Response', 'SRE'],

    links: [],

  },
  {

    title: 'MLOps Platform Engineering',

    org: 'Growth Protocol',

    blurb:

      'Production infrastructure for AI/ML-enabled services, the operational side of AI: making AI-backed systems deployable, observable, debuggable, and maintainable in real production. Cloud runtime support, deployment automation, and telemetry/logging/alerting wired into incident response, applying SRE and platform practices to practical MLOps on Vertex AI.',

    tags: ['MLOps', 'Vertex AI', 'GCP', 'Observability', 'SRE'],

    links: [],

  },

  {

    title: 'OpenLaneLink',

    org: 'Lunar Lanes · open hardware + software stack',

    summary: 'An open hardware and software stack connecting legacy bowling machines to modern telemetry, dashboards, and lane management.',
    metrics: [
      { value: '8', label: 'Bowling lanes served' },
      { value: '4', label: 'Kiosk displays' },
      { value: 'Real-time', label: 'Lane telemetry' },
    ],
    challenge: 'Commercial bowling systems are expensive and proprietary. I wanted to integrate my own hardware and software with decades-old electromechanical equipment, and make the machines observable.',
    approach: [
      'Connected ESP32/ESP8266 devices through Mosquitto MQTT to a bridge that translated events into Socket.IO.',
      'Built an Express backend using Redis as canonical lane state, broadcasting updates to a management dashboard and four kiosk displays for eight lanes.',
      'Added two-way Google Calendar reservation sync and packaged the stack to run via Docker Compose or Helm.',
    ],
    impact: [
      'Operated a working real-time lane-management and equipment-telemetry system at an eight-lane bowling center.',
      'Brought reservations, physical equipment events, and operator views together in a single system.',
    ],
    nextSteps: 'The next design moves state and failure recovery toward individual lanes: local state machines, replaceable controllers, ESP-NOW with RS-485 fallback. This is planned architecture, not a claim that it was deployed.', 
    blurb:

      "Commercial bowling systems are expensive, proprietary, and not especially friendly to someone who wants to integrate their own hardware or software. I wanted an open alternative that could talk to decades-old electromechanical equipment and make the whole place observable.\n\n" +
      "The working system connected ESP32/ESP8266 devices over MQTT (Mosquitto) to a bridge that translated events into Socket.IO. An Express backend managed canonical lane state in Redis and broadcast live updates to a management dashboard and four kiosk displays serving eight lanes. Reservations synced with Google Calendar in both directions. The stack ran through Docker Compose or Helm, whether on my laptop or the alley's hardware.\n\n" +
      "The next architectural step is pushing more responsibility out to the lanes themselves: per-lane compute and state machines, replaceable ESP32 controllers, ESP-NOW with RS-485 fallback, and failure domains small enough that one bad lane doesn't take down the rest. The goal is simple: operators should be able to recover from weird equipment states quickly, without needing the person who wrote the software. It's the same reliability thinking I use in cloud platforms, just attached to bowling machines.",
    tags: ['ESP32', 'MQTT', 'Socket.IO', 'Redis', 'React', 'Helm', 'Real-time', 'IoT'],

    links: [{ type: 'link', label: 'Technical Docs', url: 'https\://nicholas-a-hall.github.io/openlanelink' }],

    featured: true,

  },  

  {

    title: 'Lunar Lanes',

    org: 'Owner & Lead Engineer',

    blurb:

      'My small town had few attractions for families in the winter, so my family and I bought a beat-up bowling alley, and it became my real-world homelab for end-to-end technical impact. From unimproved land to operational in 90 days: an event-driven IoT + observability stack for legacy electromechanical equipment (ESP32 edge nodes, ESPNow, RS485 fallback, per-lane compute, MQTT), a React/TypeScript ops dashboard with live machine telemetry, and full ownership of architecture, reliability, cost, and P&L. I run the technical side; friends and family run the day-to-day.',

    tags: ['IoT', 'ESP32', 'MQTT', 'React', 'TypeScript', 'Observability'],

    links: []

  },
  {

    title: 'Theia: Production AI Voice Receptionist',

    org: 'Lunar Lanes',

    blurb:

      'A production AI voice agent answering live customer calls for Lunar Lanes on Zoom Phone AI. It identifies itself as an AI on pickup, handles common questions in a consistent persona, and hands transactional requests (booking, lane availability) off to dedicated skills. I engineered the knowledge base from scratch (hours, two pricing modes with per-game vs hourly break-even math, the ownership/restoration story, payments, accessibility, conduct), and designed a stable persona so it carries calls that were never explicitly scripted, while keeping back-of-house policy out of public answers.',

    tags: ['Conversational AI', 'Prompt Engineering', 'Zoom Phone AI', 'VoIP', 'LLM'],

    links: [],

  },

  {

    title: 'Quarry',

    org: 'Personal project · offline-first web app',

    blurb:

      'A job-search tracker that treats the hunt like a sales pipeline: applications are leads, sources and categories are segments, statuses are stages, and a live dashboard shows where effort actually converts. Every KPI and chart (conversion by source, pipeline funnel, response rate, salary ranges, in-demand skills) is derived live from the records, with applications going cold flagged automatically. No backend and no accounts: data lives entirely in the browser via localStorage, with JSON import/export and a one-tap PNG summary card. It ships as a single self-contained HTML file that runs fully offline.',

    tags: ['React', 'Recharts', 'Data viz', 'localStorage', 'Offline-first'],

    links: [{ type: 'demo', label: 'Live demo', url: 'https\://nicholas-a-hall.github.io/quarry/' }],

  },

  {

    title: 'Assay',

    org: 'Personal project · job-market landscape tool',

    blurb:

      "The companion to Quarry. Where Quarry tracks your own pipeline, Assay analyzes the wider job market. A FastAPI and MongoDB backend serves a React/Recharts dashboard that breaks the market down by vertical (software engineering, data/ML, product), with endpoints for market pulse, job-board activity, in-demand skills, and salary bands. The mining theme is deliberate: a quarry extracts the ore, an assay tells you what it's worth.",

    tags: ['FastAPI', 'Python', 'MongoDB', 'React', 'Recharts', 'Docker'],

    links: [],

  },

]

// Talks and other video appearances.
export const talks = [
  {
    title: 'Adventures in (the Agentic AI) Space!',
    videoId: 'gMP5HoiDg3s',
    url: 'https://youtu.be/gMP5HoiDg3s',
  },
  {
    title: 'OpenLaneLink Bowling Frontend',
    videoId: 'c1zf4WLKRKo',
    url: 'https://youtu.be/c1zf4WLKRKo',
  },
  {
    title: 'Sometimes I make games as a hobby',
    videoId: 'mHOfYplBzd8',
    url: 'https://youtu.be/mHOfYplBzd8',
  },
]

// Work history / experience. `highlights` are bullet points of impact.
export const experience = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Growth Protocol',
    period: 'May 2025 – Apr 2026',
    highlights: [
      'Owned SOC 2 Type 1 with Vanta, passing the final audit in 4 hours, rather than the initial 3-day allotment.',
      'Ran multi-cloud Kubernetes (GKE / AKS / EKS), consolidating 30+ Cloud Run microservices onto one deployable platform.',
      'Partnered with the Data and ML teams to rework their data storage strategy, speeding up model training and improving training data accuracy.',
    ],
  },
  {
    role: 'Owner & Lead Engineer',
    company: 'Lunar Lanes',
    period: 'Dec 2025 – Sep 2026',
    highlights: [
      'Took a bowling alley from unimproved land to operational in 90 days, owning architecture, reliability, cost, and P&L.',
      'Built an event-driven IoT + observability stack for legacy electromechanical equipment (ESP32, ESPNow, RS485, MQTT).',
      'Shipped a React/TypeScript ops dashboard with live telemetry, plus Theia, an AI phone agent for reservations.',
    ],
  },
  {
    role: 'DevOps Technical Lead (Impacted by ~30% Company-wide RIF)',
    company: 'Formant',
    period: 'Mar 2024 – Apr 2025',
    highlights: [
      'Cut CI/CD build times from 60 minutes to 6 by refactoring monolithic CI/CD pipleines, moving application deployments to helm, and creating immutable release artifacts',
      'Assembled and led the DevOps team that cleared years of standing technical debt and improved reliability of fragile build pipelines to 95%',
      'Optimized, helped structure, and preserved roughly 750TB of unstructured robotics telemetry in S3 for model training.',
      'Enabled repeatable releases and rollbacks by migrating platform services off EC2 / Docker Compose onto Kubernetes-based unified developer platform.',
    ],
  },
  {
    role: 'Site Reliability Engineer',
    company: 'FORT Robotics',
    period: 'Aug 2022 – Mar 2024',
    highlights: [
      'Created incident response protocol for a greenfield robotics-safety SaaS, authoring DR plans, on-call procedures, and runbooks.',
      'Cut deploy/recovery time 83% and improving RTO 87% following a large-scale migration to Kubernetes.',
      'Reduced new-tenant setup from a week to 30 minutes with 25 helm charts and targeted terraform modules.',
      'Mentored junior and senior engineers on continuous-deployment best practices with Kubernetes.',
    ],
  },
  {
    role: 'Site Reliability Engineer (Contract)',
    company: 'Paramount+ / Paramount Global',
    period: 'Jan 2022 – Aug 2022',
    highlights: [
      'Processed 20 billion log entries per week for global streaming platform using Elasticsearch on Kubernetes (ECK).',
      'Cut $4M/year in GCP spend without degrading observability with fluentbit sidecars and pre-ingestion logging libraries.',
    ],
  },
  {
    role: 'Cloud Team Lead',
    company: 'Graylog',
    period: 'Jan 2020 – Dec 2021',
    highlights: [
      'Led the cloud infrastructure buildout of Graylog Cloud (AWS SaaS) as project organizer and team lead, through SOC 2, beta, GA, and on to $20M ARR.',
      'Built a Go load-testing platform generating 200,000 logging requests/second at production scale.',
    ],
  },
  {
    role: 'IT Manager',
    company: 'KSDK-TV / TEGNA',
    period: 'May 2016 – Apr 2019',
    highlights: [
      'Led an IT team building Python/PowerShell automation that reduced rework 97% and saved 160 hours a year.',
      'Cut unplanned downtime in key systems 95% (30 hours in 2017 to 90 minutes in 2018) and MTTR 96% (4 hours to 10 minutes) with proactive monitoring and a rebuilt incident-response process.',
      'Delivered 23 capital-investment projects worth $5M, with ROI inside 2–3 years.',
    ],
  },
  {
    role: 'Systems & infrastructure roles',
    company: 'Maryville University · Enterprise Holdings · Computer Techniques · Montgomery County',
    period: '2011 – 2019',
    highlights: [
      'On-prem and hybrid-cloud infrastructure, virtualization, and network engineering across higher-ed, enterprise, and public sector.',
      'Built a 500-user GPU-accelerated VDI at $5.26 per user per month, plus a self-healing web platform handling 10,000 requests/second at under $200 per site per month.',
      'Ran a $1.6M NetApp Metrocluster storage migration (45TB), stood up a cybersecurity fusion center that unlocked $1.1M in grants, and cut DHS-flagged vulnerabilities 70% for the county.',
    ],
  },
  {
    role: 'Military Intelligence Systems Maintainer / Integrator',
    company: 'US Army · 101st Airborne',
    period: '2005 – 2011',
    highlights: [
      'Led maintenance contact teams of 2 to 4 in hostile environments, accountable for $10M+ of sensitive DoD hardware, software, and secure data.',
      'Held 99.2% uptime across 10 mission-critical intelligence sensor sites in 6 locations in support of Operation Enduring Freedom. Reliability engineering before it had the name.',
      'As shop foreman, trained and mentored 12 personnel in Solaris administration and satellite networking, and wrote the SOPs, SLAs, on-call, and emergency-response procedures the shop ran on.',
    ],
  },
]

// Education & training.
export const education = [
  {
    school: 'Cochise College (US Army correspondence program)',
    detail: 'Military Information Systems Technology',
    period: '2005 – 2006',
  },
  {
    school: 'U.S. Army',
    detail: 'Military intelligence systems training: electronics, RF & satellite comms',
    period: '2005 – 2006',
  },
]

// Recommendations (from LinkedIn). Trimmed to the strongest lines; spans
// managers, peers, and direct reports across the Army, broadcast, higher-ed,
// and startups.
export const testimonials = [
  {
    quote:
      "Nick Hall is a top talent. His skillset is a rare find: depth across SRE, observability data pipelines, excellent technical writing and communication, and software engineering. I'd gladly work with him again and fully endorse him for whatever technological challenge comes next.",
    name: 'Nick DeCapua',
    title: 'Principal SRE, Observability Team',
    context: 'Managed Nick directly',
  },
  {
    quote:
      "Nick was often the Atlas of our company. His quick thinking and resourcefulness kept our build pipelines running. He assembled a small but powerful DevOps team that tackled technical debt that had held us back for years, and he actually cared about documenting his work so everyone had access to it.",
    name: 'Nicholas Boni',
    title: 'Technical Writer & Content Manager',
    context: 'Formant',
  },
  {
    quote:
      'Nick quickly transformed the DevOps team into a well-oiled machine. He tackled technical debt head-on, simplified complex and fragile pipelines, and eliminated pain points so we could ship on time. Any organization would be lucky to have him.',
    name: 'Eric Barch',
    title: 'Software Engineer',
    context: 'Formant',
  },
  {
    quote:
      'A great manager with a brilliant mind who broke us out of old ways of thinking and modernized how we deliver news in the digital age. His knowledge of networks, automation, orchestration, and virtualization took our station to the next level.',
    name: 'Cassidy Thomas',
    title: 'A/V and IT Engineer',
    context: 'Reported to Nick directly · KSDK-TV',
  },
  {
    quote:
      "Nick creates technology solutions that don't just solve problems but vastly improve on past ones, always accounting for every department's needs, with a gift for explaining technology so non-technical people get it. If Nick is handling something, I know it'll surpass expectations.",
    name: 'Kate Boelhauf',
    title: 'Director of User Experience',
    context: 'Maryville University',
  },
  {
    quote:
      "As a senior tech, Nick was always the go-to for any system question or when something needed to get done. He worked tirelessly to ensure maximum uptime of every system in our domain. He'd learn everything about something, then look for ways to improve it.",
    name: 'Matthew Ruddell',
    title: 'Senior Project Manager (formerly Kyndryl)',
    context: 'U.S. Army',
  },
]

// What I specialize in, straight from the way you describe yourself.
export const principles = [
  { title: 'Create systems that heal themselves', body: "Give me a platform with unpredictable load and I'll build it to figure out its own horsepower, no one babysitting it at 2am." },
  { title: 'Eliminate friction between teams', body: "If developers and infra are fighting over a deployment, I'll walk over, ask questions, and fix it. That's just how I'm wired." },
  { title: 'Learn ridiculously fast', body: "Kubernetes to embedded microcontrollers, satcom to MLOps: if it's useful, I'll figure it out in days. The domain changes. The pattern doesn't." },
  { title: 'Make AI survive production', body: "The model is the easy part. The hard part is keeping AI deployable, observable, and reliable after launch. I build the MLOps and the agents themselves: a voice receptionist taking live calls, a bot that holds context through an incident." },
  { title: 'Leave teams stronger than I found them', body: "Trained 12 in the Army. Built the automation program at KSDK. Assembled Formant's DevOps team. Mentored seniors and juniors at FORT. The recommendations below say it in other people's words." },
]
