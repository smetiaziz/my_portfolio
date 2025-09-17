import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [ CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences = [
    {
      title: 'Freelance',
      company: 'Upwork',
      duration: 'Dec 2024 - Present',
      bullets: [
        'Managed the full development cycle, from concept and prototyping to deployment and post-release updates',
        'Designed and implemented interactive, mobile-friendly UIs using Angular and Tailwind CSS',
        'Built scalable backend services with .NET and integrated cloud storage via Amazon S3 and integrated third-party tools',
        'Communicated directly with clients to gather requirements, provide regular progress updates, and ensure satisfaction with deliverables.'
      ]
    },
    {
      title: 'Intern Software Engineer',
      company: 'Proxym-group',
      duration: 'Jun 2025 - Aug 2025',
      bullets: [
        'Developed an AI-powered analytics system for banking insights using Python, pandas, and Elasticsearch for data ingestion, processing, and indexing.',
        'Built interactive dashboards in Power BI to visualize customer behavior, churn risk, and process efficiency.',
        'Designed a rule-based chatbot with Gradio to deliver real-time banking insights and data-driven responses.'
      ]
    },
    {
      title: 'Intern Software Engineer',
      company: 'International Tunisian Services',
      duration: 'Jun 2024 - Aug 2024',
      bullets: [
        'Built a doctor shift-planning platform using Angular for the front end and .NET Core with SQL Server for the backend data management',
        'Integrated Google OR-Tools to generate optimized, conflict-free schedules respecting staffing ratios, work-hour limits, and time off requests',
        'Refined database schema and API performance, reducing schedule generation time by 40% for large hospital department'
      ]
    }
  ];

  education = [
    {
      school: 'Higher institute of Sciences Applied and Technology, Sousse',
      period: '2021-2026',
      degree: 'Computer Science Engineering'
    },
    {
      school: 'Grombalia high school',
      period: '2017-2021',
      degree: 'Bachelor in Computer Science'
    }
  ];
}
