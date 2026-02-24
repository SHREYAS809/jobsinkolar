# Jobs in Kolar - Project Summary

## Overview
A complete job board platform frontend with three distinct role-based dashboards built with Next.js 16, React 19, Tailwind CSS, and modern UI patterns.

## Key Features Implemented

### 1. Authentication System
- Role-based login (Admin, Employer, Job Seeker)
- Email/password form with show/hide password toggle
- Glassmorphic card design
- User type selection before login
- Responsive design

### 2. Admin Dashboard (`/admin`)
- 4 key statistics cards: Total jobs, Total employers, Total job seekers, Applications today
- Line chart showing platform activity trends
- Pending employer approvals table
- Featured jobs management table
- Interactive management actions (approve/reject)

### 3. Employee/Job Seeker Dashboard (`/employee`)
- Smart job search with real-time filtering
- Quick filter buttons (Fresher, Part-time, Work from Home, Women Friendly)
- Job cards displaying:
  - Title, company, salary, location
  - Job tags with special badges
  - Save/share buttons
  - Apply button with feedback
- Organized sections:
  - Urgent Hiring (highlighted)
  - Recommended For You
  - Jobs Near You
  - All Jobs
- Search functionality across titles and companies

### 4. Employer Dashboard (`/employer`)
- Dashboard stats showing active jobs, applicants, and total views
- Post new job button
- Job listing management table with:
  - Job title, salary, posted date
  - Applicant count and views
  - Status indicators
  - Edit, view applicants, and close actions
- Recent applicants panel with status tracking
- Quick access to all applicants

### 5. Shared Components
- **Sidebar Navigation**: Smart navigation with active state indicators
- **Header Bar**: Title display, language toggle (EN/ಕನ್ನಡ), notifications, settings
- **Dashboard Layout**: Consistent layout structure across all dashboards
- **Stats Card**: Reusable statistics card with trend indicators
- **Job Card**: Interactive job listing with apply functionality
- **Charts**: Responsive charts using Recharts for data visualization
- **Tables**: Management tables for viewing and actioning data

### 6. Design System
- Clean, professional SaaS aesthetic
- Color scheme: White/soft gray backgrounds with blue accent
- Smooth transitions and hover effects
- Responsive grid layouts (mobile-first approach)
- Tailwind CSS for styling
- Lucide React icons throughout

### 7. Mock Data
- Comprehensive mock data for all dashboards
- Realistic job listings with various tags
- Admin management data
- Employer job postings and applicants
- Chart data for analytics visualization

## Technical Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Charts**: Recharts
- **Components**: Radix UI
- **Form Handling**: React Hook Form
- **Notifications**: Sonner

## File Structure
```
app/
├── page.tsx (redirects to /login)
├── layout.tsx (root layout)
├── globals.css (theme configuration)
├── (auth)/
│   └── login/
│       └── page.tsx (login page)
├── (dashboards)/
│   ├── layout.tsx (dashboard layout)
│   ├── admin/
│   │   ├── page.tsx (main dashboard)
│   │   └── employers/
│   │       └── page.tsx
│   ├── employee/
│   │   ├── page.tsx (main dashboard)
│   │   └── applications/
│   │       └── page.tsx
│   └── employer/
│       ├── page.tsx (main dashboard)
│       └── jobs/
│           └── page.tsx
├── not-found.tsx (404 page)
components/
├── shared/
│   ├── sidebar-nav.tsx
│   └── header-bar.tsx
├── dashboards/
│   ├── stats-card.tsx
│   ├── job-card.tsx
│   ├── chart.tsx
│   ├── management-table.tsx
│   └── applicants-panel.tsx
lib/
├── mock-data.ts
├── constants.ts
└── utils.ts
```

## Getting Started

### Installation
```bash
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login Credentials
- Users must register an account to access the dashboards.
- Admin accounts must be created directly in the database for security.
- Role-based access is strictly enforced.

## Features Highlights

### Interactive Elements
- ✅ Smooth hover animations on cards
- ✅ Active state indicators for navigation
- ✅ Apply button with success feedback
- ✅ Save jobs functionality (visual feedback)
- ✅ Search and filter jobs in real-time
- ✅ Language toggle (EN/ಕನ್ನಡ) for Kannada support

### Responsiveness
- ✅ Desktop-first design
- ✅ Mobile-friendly layouts
- ✅ Responsive grid systems
- ✅ Flexible navigation

### Accessibility
- ✅ Semantic HTML structure
- ✅ Proper ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ High contrast colors
- ✅ Screen reader friendly

## Future Enhancements
- Backend integration for persistent data
- Real authentication system
- User profiles and resume uploads
- Email notifications
- Advanced analytics
- Job recommendations engine
- Messaging between employers and job seekers
- Admin moderation tools

## Notes
- All data is currently mocked and reset on page refresh
- Full authentication is performed against the TiDB Cloud backend
- Design system uses Tailwind CSS v4 with custom theme
- Charts use Recharts for data visualization
- Icons provided by Lucide React

---

Built with v0 by Vercel
