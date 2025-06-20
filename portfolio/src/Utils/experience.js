import img1 from "../Utils/technology.png";
import img2 from "../Utils/developer.png";
import img3 from "../Utils/leadership.png"
 const experiences=[
    {
        "role": "Senior Systems Engineer",
        "studio": "Danske IT | Infosys",
        "dates": "Jan 2022 – Jul 2024",
        "tech": ["Angular", "React", "TypeScript", "HTML", "CSS", "Agile", "Microfrontend Architecture"],
        "description": [
            "At Danske IT (Infosys), I worked as a Front-End Developer on large-scale financial compliance platforms, where I was deeply involved in modernizing core enterprise applications. My key responsibility was leading the migration of a complex Angular v9 monolith into a modern React-based micro-frontend architecture. This migration dramatically improved the scalability, modularity, and long-term maintainability of the application while enhancing system performance.",
            "One of my most impactful contributions was building a case management dashboard that automated key workflows, improved compliance tracking, and directly increased case closure rates by 400%. This automation also cut work hours by 18%, delivering both business and operational value. I engineered and optimized over 10 reusable UI components tailored for AML (Anti-Money Laundering) and FCLM systems, ensuring compliance and consistency across multiple customer segments.",
            "To further enhance system stability, I implemented robust input validation and API-level integrity checks, which resulted in an 80% reduction in data irregularities and significantly improved reliability. My efforts in optimizing the development process also led to a 30% reduction in debugging time. For these high-impact contributions, I was honored with the GEM (Going Extra Mile) award, recognizing my leadership in delivering high-quality, user-centric solutions while driving 100% sprint success rates. Throughout this period, I actively collaborated with cross-functional teams including product managers, compliance experts, and backend engineers to align technical solutions with evolving business goals."
          ],
        "image": img2,
        "alt":"Danske IT | Infosys"
      },
    {
      "role": "Graduate Assistant",
      "studio": "Stony Brook University",
      "dates": "Jan 2025 – Present",
      "tech": ["React", "FastAPI", "Python", "PostgreSQL", "AWS", "Pinecone", "OpenAI API", "Google OAuth", "GitHub Actions"],
      "description": [
        "During my time as a Graduate Assistant at Stony Brook University, I led the complete development of a GPT-powered grading system designed to significantly improve grading efficiency and feedback quality for both instructors and students. This full-stack platform was built using React on the frontend and FastAPI on the backend, with PostgreSQL managing the data layer. The system successfully reduced grading time by 50% across 13 different evaluation rubrics by automating much of the feedback generation while still allowing instructors to customize and review results.",
        "One of the most impactful features I integrated was a retrieval-augmented generation (RAG)-based document chat, allowing students to receive contextualized feedback tied directly to grading rubrics. I utilized Pinecone for vector storage and metadata management, making the retrieval process both accurate and scalable. Deployment was fully cloud-native — I containerized the application using AWS ECR, deployed via AWS App Runner, and managed persistent data through AWS RDS. To ensure smooth and secure user management, I implemented Google OAuth for authentication and built CI/CD pipelines using GitHub Actions to automate deployment and testing.",
        "This project gave me hands-on experience combining LLMs, cloud infrastructure, and production-level backend design to solve real academic challenges. The result was a system that not only streamlined grading but also enhanced the learning experience through personalized, AI-generated feedback while maintaining scalability and maintainability for future growth."
      ],
      "image": img1,
      "alt":"Stony Brook University"
    },
    {
      "role": "President",
      "studio": "Stony Brook GSO",
      "dates": "May 2025 – Present",
      "description": [
        "As President of the Graduate Student Organization (GSO) at Stony Brook University, I serve as the elected representative for a community of over 7,000 graduate students. In this leadership role, I advocate for student interests in university governance, regularly working with senior administrators and policy makers on issues that directly impact graduate life. Whether addressing academic policies, financial aid concerns, or campus resources, my role requires balancing the needs of diverse student populations while engaging in high-level policy discussions.",
        "I’ve led and participated in numerous administrative meetings, contributing to institutional reforms that strengthen both academic and professional support systems for graduate students. My position has involved collaborating with multiple university departments, ensuring that graduate students are well-represented in decisions related to campus infrastructure, mental health services, and funding opportunities.",
        "Beyond governance, I’ve helped initiate programs aimed at enhancing professional development, creating leadership opportunities, and improving the overall graduate student experience. This role has given me extensive experience in public speaking, negotiation, conflict resolution, and large-scale organizational leadership. Through these responsibilities, I’ve learned how to navigate complex institutional structures while driving real change that positively affects thousands of students across departments and disciplines."
      ],
      "tech": ["Leadership", "Advocacy", "Public Speaking", "Policy Engagement"],
      "image": img3,
      "alt":"Stony Brook Graduate Student Organization"
    }
  ]

export default experiences;
  