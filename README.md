# Portfolio Website

This repository contains the **frontend code** for my personal portfolio website.  
The site presents my resume, certifications, and selected projects.

The website is deployed as a **static site on AWS S3** and delivered globally through **CloudFront**.  
Infrastructure for deployment is managed separately using **Terraform**.

Link: https://dalo6kqnbnwm5.cloudfront.net/

## Features

- Responsive personal resume website
- Project showcase with descriptions and technologies used
- Certification badges
- Visitor counter powered by a serverless backend
- Fully static frontend (HTML, CSS, JavaScript)

## Technologies

- **HTML5**
- **CSS3**
- **JavaScript**
- **AWS S3** – static website hosting
- **AWS CloudFront** – CDN delivery
- **API Gateway + Lambda + DynamoDB** – visitor counter backend

## Visitor Counter

The website includes a serverless visitor counter:

Browser → API Gateway → Lambda → DynamoDB

When the page loads:
1. The frontend sends a request to an API endpoint.
2. Lambda increments the visit counter stored in DynamoDB.
3. The updated value is returned and displayed on the page.

### GitHub Actions
Automatically deploys the website to the AWS S3 bucket after pushes to the main branch.

## Deployment

Deployment is automated using **GitHub Actions**:

1. Code is pushed to the `main` branch.
2. GitHub Actions uploads website files to **S3**.
3. Updated website becomes available globally.

## Live Website

The site is served through **CloudFront** for fast global access.
