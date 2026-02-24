export const NAVIGATION_ITEMS = {
  admin: [
    { label: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
    { label: "Employers", href: "/admin/employers", icon: "Users" },
    { label: "Jobs", href: "/admin/jobs", icon: "Briefcase" },
    { label: "Applications", href: "/admin/applications", icon: "FileText" },
    { label: "Reports", href: "/admin/reports", icon: "BarChart3" },
  ],
  employee: [
    { label: "Dashboard", href: "/employee", icon: "Home" },
    { label: "My Applications", href: "/employee/applications", icon: "FileText" },
    { label: "Saved Jobs", href: "/employee/saved", icon: "Bookmark" },
    { label: "Profile", href: "/employee/profile", icon: "User" },
  ],
  employer: [
    { label: "Dashboard", href: "/employer", icon: "LayoutDashboard" },
    { label: "Post Job", href: "/employer/post-job", icon: "Plus" },
    { label: "My Jobs", href: "/employer/jobs", icon: "Briefcase" },
    { label: "Applicants", href: "/employer/applicants", icon: "Users" },
    { label: "Analytics", href: "/employer/analytics", icon: "BarChart3" },
  ],
};

export const JOB_FILTERS = [
  { label: "Fresher", id: "fresher" },
  { label: "Part-time", id: "part-time" },
  { label: "Work from Home", id: "wfh" },
  { label: "Women Friendly", id: "women-friendly" },
];

export const JOB_TAGS = {
  FRESHER: "Fresher",
  PART_TIME: "Part-time",
  REMOTE: "Remote",
  ON_SITE: "On-site",
  WOMEN_FRIENDLY: "Women Friendly",
  WORK_FROM_HOME: "Work from Home",
  URGENT_HIRING: "Urgent Hiring",
};

export const DASHBOARD_TITLES = {
  admin: "Admin Dashboard",
  employee: "Job Seeker Dashboard",
  employer: "Employer Dashboard",
};
