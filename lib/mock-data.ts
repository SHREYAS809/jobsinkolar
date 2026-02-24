export const adminStats = {
  totalJobs: 1243,
  totalEmployers: 87,
  totalJobSeekers: 5612,
  applicationsToday: 342,
};

export const adminManagementData = {
  pendingEmployers: [
    {
      id: 1,
      name: "TechCorp Solutions",
      email: "hr@techcorp.com",
      joinedDate: "2024-02-18",
      status: "pending",
    },
    {
      id: 2,
      name: "Digital Minds Ltd",
      email: "admin@digitalminds.com",
      joinedDate: "2024-02-17",
      status: "pending",
    },
    {
      id: 3,
      name: "Innovation Hub",
      email: "contact@innovationhub.com",
      joinedDate: "2024-02-16",
      status: "pending",
    },
  ],
  featuredJobs: [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      isFeatured: true,
      expiresIn: "5 days",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      isFeatured: true,
      expiresIn: "3 days",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudWorks",
      isFeatured: false,
      expiresIn: "7 days",
    },
  ],
};

export const employeeJobs = [
  {
    id: 1,
    title: "Junior Frontend Developer",
    company: "TechVision",
    salary: "₹5-7 LPA",
    location: "Bangalore",
    tags: ["Fresher", "Remote", "Women Friendly"],
    description: "Build amazing web applications with React and Next.js",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupX",
    salary: "₹8-12 LPA",
    location: "Kolar",
    tags: ["Part-time", "On-site"],
    description: "Help us build scalable backend and frontend solutions",
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignStudio",
    salary: "₹6-9 LPA",
    location: "Remote",
    tags: ["Women Friendly", "Fresher"],
    description: "Create beautiful user experiences for mobile apps",
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "AnalyticsPlus",
    salary: "₹7-10 LPA",
    location: "Bangalore",
    tags: ["Part-time", "Women Friendly"],
    description: "Analyze business data and create insightful reports",
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "CloudSoft",
    salary: "₹10-15 LPA",
    location: "Remote",
    tags: ["Work from Home", "Urgent Hiring"],
    description: "Build robust APIs and microservices using Node.js",
    posted: "1 day ago",
  },
  {
    id: 6,
    title: "QA Engineer",
    company: "QualityFirst",
    salary: "₹5-8 LPA",
    location: "Kolar",
    tags: ["Fresher", "Women Friendly"],
    description: "Ensure quality of our applications through testing",
    posted: "4 days ago",
  },
];

export const recommendedJobs = employeeJobs.slice(0, 3);
export const nearbyJobs = employeeJobs.slice(1, 4);
export const urgentHiringJobs = employeeJobs.filter((job) =>
  job.tags.includes("Urgent Hiring")
);

export const employerJobs = [
  {
    id: 1,
    title: "Senior DevOps Engineer",
    posted: "2024-02-15",
    applicants: 24,
    views: 342,
    status: "Active",
    salary: "₹15-20 LPA",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    posted: "2024-02-10",
    applicants: 18,
    views: 289,
    status: "Active",
    salary: "₹10-14 LPA",
  },
  {
    id: 3,
    title: "Product Manager",
    posted: "2024-01-28",
    applicants: 12,
    views: 156,
    status: "Paused",
    salary: "₹12-18 LPA",
  },
];

export const employerApplicants = [
  { id: 1, name: "Rajesh Kumar", appliedFor: "Senior DevOps Engineer", status: "New" },
  { id: 2, name: "Priya Sharma", appliedFor: "Full Stack Developer", status: "Reviewed" },
  { id: 3, name: "Amit Patel", appliedFor: "Senior DevOps Engineer", status: "New" },
  { id: 4, name: "Neha Verma", appliedFor: "Full Stack Developer", status: "Interviewed" },
  { id: 5, name: "Vikram Singh", appliedFor: "Product Manager", status: "Reviewed" },
];

export const chartData = [
  { month: "Jan", jobs: 240, applications: 450 },
  { month: "Feb", jobs: 340, applications: 620 },
  { month: "Mar", jobs: 280, applications: 480 },
  { month: "Apr", jobs: 390, applications: 780 },
  { month: "May", jobs: 450, applications: 920 },
  { month: "Jun", jobs: 520, applications: 1020 },
];
