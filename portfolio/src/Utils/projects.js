import img1 from "../Utils/equation.png";
import img2 from "../Utils/analytics.png"
const projects=[
    {
        "title": "AI Math Support Tool for Students with Disabilities",
        "description": "Developed a web-based application to demonstrate how students with 7 types of learning disabilities process math word problems. Simulated student thinking patterns and common mistakes based on selected disability to reflect realistic learning challenges. Implemented a tutor interface that provides clear explanations and support strategies tailored to each student’s simulated behavior.",
        "technologies": ["React", "Python","Langchain", "OpenAI API"],
        "img":img1,
        "alt":"AI Math Support Tool"
      },
      {
        "title": "Composite Metric Model for NFL First-Down Rates",
        "description": "Engineered advanced metrics like Completion Percentage Over Expected (CPOE) and Explosiveness Score, achieving an 82% model accuracy and ROC AUC score of 0.92 by balancing precision and generalizability. Compared more than 10 parameters and composite indicators to evaluate and predict first-down success.",
        "technologies": ["Python", "Scikit-learn", "Pandas", "NumPy"],
        "img":img2,
        "alt":"Composite Metric Model for NFL First-Down Rates"
      }
];
export default projects;