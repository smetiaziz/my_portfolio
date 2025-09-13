import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [ CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
  { 
    title: 'PixVow', 
    description: `A comprehensive event management platform that allows users to create and manage events, send invitations, track RSVPs, handle guest data, and manage media files. 
    Includes features like AI-assisted wishlist generation, customizable email invitations, responsive email templates, and analytics for guest engagement. 
    Technologies used: Angular, .NET, Tailwind CSS, Amazon S3 for media storage, PostHog for analytics, SendGrid and Unlayer for email campaigns, and OpenAI API for AI-assisted features.`, 
    link: '#' 
  },
  { 
    title: 'Bank AI', 
    description: `An AI-powered analytics and chatbot system designed for banking data analysis. 
    It ingests and preprocesses CSV banking datasets, indexes them into Elasticsearch for fast queries, provides interactive dashboards in Power BI, and enables a rule-based chatbot for querying insights. 
    Technologies used: Python, Pandas, Matplotlib, Seaborn, Plotly, Gradio, Elasticsearch, Docker, and Power BI for dashboards.`, 
    link: '#' 
  },
  { 
    title: 'Hospital Management System', 
    description: `A web application to automate hospital operations and optimize doctor shift assignments. 
    It supports task scheduling, shift rotation, and resource management to ensure smooth hospital workflow. 
    Technologies used: Node.js, MongoDB, JavaScript, and various scheduling algorithms for automated shift allocation.`, 
    link: '#' 
  }
];

}
