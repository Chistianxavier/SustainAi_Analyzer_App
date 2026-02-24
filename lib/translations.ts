export type Language = "en" | "id";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Common
    "common.sustainai": "SustainAI",
    "common.loading": "Loading",

    // Nav
    "nav.solutions": "Solutions",
    "nav.impact": "Impact",
    "nav.challenges": "Challenges",
    "nav.vision": "Vision",
    "nav.features": "Features",
    "nav.sdgs": "SDGs",
    "nav.team": "Team",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "AI for Sustainable Development",
    "hero.titleStart": "Empowering a ",
    "hero.titleHighlight": "Sustainable Future",
    "hero.titleEnd": " with AI",
    "hero.description":
      "Harnessing the power of artificial intelligence to address global challenges, empower communities, and protect our planet\u2014aligned with the United Nations Sustainable Development Goals.",
    "hero.cta1": "Explore Our Solutions",
    "hero.cta2": "Learn More",

    // Challenges
    "challenges.title": "Global Challenges We Address",
    "challenges.description":
      "These interconnected challenges impact social, economic, and environmental sustainability across the globe.",
    "challenges.employment.title": "Employment Inequality",
    "challenges.employment.description":
      "Millions lack access to decent work opportunities due to systemic barriers in education, skills assessment, and job market accessibility.",
    "challenges.waste.title": "Waste Management Crisis",
    "challenges.waste.description":
      "Inefficient waste management systems fail to capture the economic value of recyclable materials, contributing to environmental degradation.",
    "challenges.agriculture.title": "Agricultural Vulnerabilities",
    "challenges.agriculture.description":
      "Farmers worldwide face devastating crop losses due to limited access to early detection tools for plant pests and diseases.",

    // Vision
    "vision.label": "Our Vision",
    "vision.title": "Technology as an Enabler, Not a Replacement",
    "vision.p1":
      "We envision a world where artificial intelligence amplifies human potential rather than replacing it. Our technology is designed to support decision-making, enhance capabilities, and create opportunities for all.",
    "vision.p2":
      "By focusing on the intersection of human needs and technological innovation, we build tools that respect human agency while providing powerful insights to address the most pressing challenges of our time.",
    "vision.inclusivity.title": "Inclusivity",
    "vision.inclusivity.description":
      "Technology that serves everyone, regardless of background or circumstance",
    "vision.accessibility.title": "Accessibility",
    "vision.accessibility.description":
      "Solutions designed to reach communities worldwide, bridging digital divides",
    "vision.scalability.title": "Scalability",
    "vision.scalability.description":
      "Infrastructure built to grow and adapt to increasing global demands",
    "vision.longterm.title": "Long-term Impact",
    "vision.longterm.description":
      "Sustainable solutions that create lasting positive change for generations",

    // Solutions
    "solutions.label": "Our Solutions",
    "solutions.title": "AI-Powered Applications for Impact",
    "solutions.description":
      "Three innovative solutions addressing real-world challenges and aligned with the United Nations Sustainable Development Goals.",
    "solutions.theChallenge": "The Challenge",
    "solutions.ourSolution": "Our Solution",
    "solutions.learnMore": "Try Now",
    "solutions.cv.title": "AI-Based CV Checker",
    "solutions.cv.problem":
      "Millions face barriers to employment due to poorly optimized resumes and lack of professional guidance.",
    "solutions.cv.solution":
      "Our AI analyzes and enhances CVs to improve job seekers' chances, promoting equal access to decent work opportunities.",
    "solutions.waste.title": "Waste Classification System",
    "solutions.waste.problem":
      "Inefficient waste sorting leads to valuable recyclables ending up in landfills, wasting economic potential.",
    "solutions.waste.solution":
      "AI-powered image recognition classifies waste instantly, integrated with waste bank systems to maximize recycling value.",
    "solutions.plant.title": "Plant Disease Detection",
    "solutions.plant.problem":
      "Farmers lose significant portions of their crops to pests and diseases that could be prevented with early detection.",
    "solutions.plant.solution":
      "Upload a photo of your plant and receive instant AI-powered diagnosis with treatment recommendations.",
    "solutions.sdg.decentWork": "Decent Work",
    "solutions.sdg.qualityEducation": "Quality Education",
    "solutions.sdg.reducedInequalities": "Reduced Inequalities",
    "solutions.sdg.responsibleConsumption": "Responsible Consumption",
    "solutions.sdg.sustainableCities": "Sustainable Cities",
    "solutions.sdg.climateAction": "Climate Action",
    "solutions.sdg.zeroHunger": "Zero Hunger",
    "solutions.sdg.noPoverty": "No Poverty",
    "solutions.sdg.lifeOnLand": "Life on Land",

    // How It Works
    "howItWorks.label": "How It Works",
    "howItWorks.title": "AI as Your Decision Support System",
    "howItWorks.description":
      "Our AI technology is designed to augment human capabilities, not replace them. Here's how we turn data into actionable insights.",
    "howItWorks.step1.title": "Input Data",
    "howItWorks.step1.description":
      "Users upload images, documents, or relevant data through our intuitive interface.",
    "howItWorks.step2.title": "AI Analysis",
    "howItWorks.step2.description":
      "Our advanced AI models process and analyze the data using machine learning algorithms.",
    "howItWorks.step3.title": "Actionable Insights",
    "howItWorks.step3.description":
      "Receive meaningful recommendations and insights to support informed decision-making.",
    "howItWorks.quote":
      '"AI provides recommendations and insights, but the final decision always remains with the human user. We believe in augmented intelligence, not artificial replacement."',

    // Impact
    "impact.label": "Our Impact",
    "impact.title": "Data-Driven Sustainability",
    "impact.description":
      "Real numbers that demonstrate our commitment to creating measurable, lasting change.",
    "impact.cvs.label": "CVs Analyzed & Improved",
    "impact.cvs.description": "Helping job seekers worldwide",
    "impact.waste.label": "Waste Properly Classified",
    "impact.waste.description": "Diverted from landfills",
    "impact.farmers.label": "Farmers Supported",
    "impact.farmers.description": "With early disease detection",
    "impact.partners.label": "Partner Organizations",
    "impact.partners.description": "Collaborating for impact",

    // SDG
    "sdg.label": "Global Alignment",
    "sdg.title": "Aligned with UN Sustainable Development Goals",
    "sdg.description":
      "Our solutions directly contribute to achieving these global targets for a better world by 2030.",
    "sdg.legend":
      "Each highlighted goal represents an area where our AI solutions create direct, measurable impact.",
    "sdg.1": "No Poverty",
    "sdg.2": "Zero Hunger",
    "sdg.4": "Quality Education",
    "sdg.8": "Decent Work",
    "sdg.10": "Reduced Inequalities",
    "sdg.11": "Sustainable Cities",
    "sdg.12": "Responsible Consumption",
    "sdg.13": "Climate Action",
    "sdg.15": "Life on Land",

    // Team
    "team.label": "Our Team",
    "team.title": "Collaborative Innovation for Global Impact",
    "team.p1":
      "We are a multidisciplinary team of technologists, researchers, and sustainability advocates united by a shared mission: leveraging AI for positive global change.",
    "team.p2":
      "Our diverse backgrounds and expertise enable us to approach complex challenges from multiple perspectives, ensuring our solutions are both technically sound and practically impactful.",
    "team.technology.title": "Technology",
    "team.technology.description":
      "AI engineers and developers building scalable, ethical AI solutions",
    "team.research.title": "Research",
    "team.research.description":
      "Data scientists exploring innovative approaches to sustainability challenges",
    "team.impact.title": "Impact",
    "team.impact.description":
      "Specialists measuring and optimizing our real-world outcomes",
    "team.design.title": "Design",
    "team.design.description":
      "UX experts creating accessible interfaces for diverse users",

    // CTA
    "cta.badge": "Join the Movement",
    "cta.titleStart": "Together, Let's Build Technology That ",
    "cta.titleHighlight1": "Empowers People",
    "cta.titleMid": " and ",
    "cta.titleHighlight2": "Protects the Future",
    "cta.description":
      "Whether you are a researcher, an organization, or an individual passionate about a cause, let's create a place to create positive change through AI.",
    "cta.cta1": "View Our Solutions",
    "cta.cta2": "Get in Touch",

    // Footer
    "footer.description":
      "Empowering communities through AI technology aligned with UN Sustainable Development Goals.",
    "footer.solutions": "Solutions",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.cvChecker": "CV Checker",
    "footer.wasteClassification": "Waste Classification",
    "footer.plantDiseaseDetection": "Plant Disease Detection",
    "footer.aboutUs": "About Us",
    "footer.ourTeam": "Our Team",
    "footer.companySolution": "Our Solutions",
    "footer.documentation": "Documentation",
    "footer.sdgAlignment": "SDG Alignment",
    "footer.researchPapers": "Research Papers",
    "footer.copyright":
      "SustainAI. Building technology for a sustainable future.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Dashboard
    "dashboard.welcome": "Welcome back, John",
    "dashboard.subtitle":
      "Here's what's happening with your sustainability projects",
    "dashboard.newProject": "New Project",
    "dashboard.totalProjects": "Total Projects",
    "dashboard.aiAnalyses": "AI Analyses",
    "dashboard.peopleImpacted": "People Impacted",
    "dashboard.sdgAlignment": "SDG Alignment",
    "dashboard.recentProjects": "Recent Projects",
    "dashboard.viewAll": "View all",
    "dashboard.aiInsights": "AI Insights",
    "dashboard.new": "new",
    "dashboard.viewAllInsights": "View all insights",
    "dashboard.helpTitle": "Need help getting started?",
    "dashboard.helpDescription":
      "Our AI assistant can help you identify the best approach for your next sustainability project.",
    "dashboard.startConsultation": "Start AI Consultation",
    "dashboard.settings": "Settings",
    "dashboard.signOut": "Sign out",
    "dashboard.searchPlaceholder": "Search projects, insights...",
    "dashboard.viewDetails": "View details",
    "dashboard.editProject": "Edit project",
    "dashboard.delete": "Delete",
    "dashboard.completed": "Completed",
    "dashboard.analyzing": "Analyzing",
    "dashboard.pending": "Pending",
    "dashboard.project.urbanFarming": "Urban Farming Initiative",
    "dashboard.project.urbanFarming.category": "Agriculture",
    "dashboard.project.urbanFarming.impact": "1,240 beneficiaries",
    "dashboard.project.wasteRecycling": "Waste Recycling Program",
    "dashboard.project.wasteRecycling.category": "Waste Management",
    "dashboard.project.wasteRecycling.impact": "Processing...",
    "dashboard.project.cleanWater": "Clean Water Access",
    "dashboard.project.cleanWater.category": "Water Conservation",
    "dashboard.project.cleanWater.impact": "Awaiting review",
    "dashboard.project.solarEnergy": "Solar Energy for Schools",
    "dashboard.project.solarEnergy.category": "Renewable Energy",
    "dashboard.project.solarEnergy.impact": "3,500 beneficiaries",
    "dashboard.insight.cropRotation.title": "Optimize crop rotation",
    "dashboard.insight.cropRotation.description":
      "AI suggests implementing a 3-season crop rotation to increase yield by 15%",
    "dashboard.insight.recycling.title": "Expand recycling categories",
    "dashboard.insight.recycling.description":
      "Adding e-waste collection could increase impact by 25%",
    "dashboard.insight.filtration.title": "Water filtration upgrade",
    "dashboard.insight.filtration.description":
      "New filtration technology available that could reduce costs by 30%",
    "dashboard.hoursAgo": "hours ago",
    "dashboard.dayAgo": "day ago",
    "dashboard.daysAgo": "days ago",

    // Privacy Policy
    "privacypolicy.pageTitle": "Privacy Policy",
    "privacypolicy.pageSubtitle":
      "We are committed to protecting your personal information and ensuring transparency in how data is collected, used, and safeguarded within Analazer App. This policy explains what information we collect and how it is handled when you use our AI-powered services.",
    "privacypolicy.point1.title": "1. Introduction",
    "privacypolicy.point2.title": "2. Information We Collect",
    "privacypolicy.point3.title": "3. How We Use Your Information",
    "privacypolicy.point4.title": "4. Information Sharing",
    "privacypolicy.point5.title": "5. Cookies and Tracking Technologies",
    "privacypolicy.point6.title": "6. Security of Your Information",
    "privacypolicy.point7.title": "7. Third-Party Links",
    "privacypolicy.point8.title": "8. Data Retention",
    "privacypolicy.point9.title": "9. Your Rights",
    "privacypolicy.point10.title": "10. Changes to This Policy",
    "privacypolicy.point11.title": "11. Contact Us",
    "privacypolicy.point1.description": `- Welcome to Analazer App (“we”, “our”, “Analazer App”).
- We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
- This Privacy Policy explains how we collect, use, disclose, and protect information when you visit or use our website at https://analazer-app.vercel.app (the “Site”).
- By using our Site, you consent to the collection and use of information as described in this policy.`,
    "privacypolicy.point2.description": `- We collect information that you voluntarily provide to us when you:
  - Submit photos or data for analysis.
  - Contact us for support.
  - Subscribe to newsletters or updates.
- Personal information may include:
  - Name.
  - Email address.
  - Files you upload (e.g., images for analysis).
  - Any other information you choose to provide.
- We may also collect non-personal information automatically such as:
  - Device and browser type.
  - Usage data (pages visited, time spent).
  - IP address.
- This information is used to improve your experience and the service.`,
    "privacypolicy.point3.description": `- We use the information we collect to:
  - Provide and maintain the services.
  - Process your uploaded media and deliver analysis results.
  - Respond to inquiries or requests.
  - Improve and develop new features.
  - Conduct analytics and performance monitoring.
- We will not use your personal information for purposes other than those described here without your consent.`,
    "privacypolicy.point4.description": `- We may share your data with:
  - Trusted third-party service providers who help us operate the site and process data.
  - Authorities if required by law.
  - Partners who contribute directly to service fulfillment with your prior consent.
- We do not sell your personal information to third parties.`,
    "privacypolicy.point5.description": `- Our Site may use cookies and similar technologies to:
  - Improve site functionality.
  - Customize content.
  - Track usage.
- You may choose to disable cookies through your browser settings, but this may limit certain functionalities.`,
    "privacypolicy.point6.description": `- We implement reasonable technical safeguards to protect your information against loss, unauthorized access, or disclosure.
- However, no data transmission method over the Internet is completely secure.`,
    "privacypolicy.point7.description": `- Our Site may include links to third-party websites.
- We are not responsible for the privacy practices or content of these external sites.
- Review their privacy policies separately.`,
    "privacypolicy.point8.description": `- We retain personal data only as long as necessary to fulfill the purposes described in this policy or comply with legal requirements.`,
    "privacypolicy.point9.description": `- Depending on your jurisdiction, you may have rights such as:
  - Accessing your data.
  - Correcting inaccuracies.
  - Requesting deletion.
- To exercise these rights, contact us at support@analazer-app.vercel.app`,
    "privacypolicy.point10.description": `- We may update this Privacy Policy periodically.
- We will notify you by updating the “Last Updated” date at the top of this page.`,
    "privacypolicy.point11.description": `- If you have any questions, concerns, or requests regarding this Privacy Policy, please contact:
  - Email: genforces.utdi@gmail.com`,

    // Term of Service
    "termsofservice.pageTitle": "Terms of Service",
    "termsofservice.pageSubtitle":
      "These Terms of Service outline the rules, responsibilities, and limitations governing the use of Analazer App. By accessing our platform, you agree to comply with these terms and use the service responsibly.",
    "termsofservice.point1.title": "1. Acceptance of Terms",
    "termsofservice.point1.description": `- By accessing and using Analazer App (“the Service”), you agree to be bound by these Terms of Service.
- If you do not agree with any part of these terms, you must discontinue use of the Service immediately.`,
    "termsofservice.point2.title": "2. Description of Service",
    "termsofservice.point2.description": `- Analazer App is a web-based platform that utilizes Artificial Intelligence (AI) to analyze user-submitted data and images for informational purposes.
- The Service is provided for educational, research, and general informational use.
- We reserve the right to modify, suspend, or discontinue any part of the Service at any time without prior notice.`,
    "termsofservice.point3.title": "3. AI Disclaimer",
    "termsofservice.point3.description": `- The analysis results generated by the AI system:
  - Are automated.
  - May not be 100% accurate.
  - Should not be considered professional, medical, legal, or expert advice.
- Users are solely responsible for how they interpret and use the results provided by the Service.
- Analazer App shall not be held liable for decisions made based on AI-generated output.`,
    "termsofservice.point4.title": "4. User Responsibilities",
    "termsofservice.point4.description": `- By using the Service, you agree:
  - Not to upload unlawful, harmful, or malicious content.
  - Not to attempt to disrupt, hack, or reverse engineer the system.
  - Not to misuse the Service for fraudulent or illegal activities.
- You remain responsible for the content you upload.`,
    "termsofservice.point5.title": "5. Intellectual Property",
    "termsofservice.point5.description": `- All platform content, including but not limited to:
  - Website design.
  - Branding.
  - Software code.
  - AI system integration.
- These are the intellectual property of Analazer App unless otherwise stated.
- Users retain ownership of the files they upload.
- By uploading content, you grant us the limited right to process it for analysis purposes.`,
    "termsofservice.point6.title": "6. Limitation of Liability",
    "termsofservice.point6.description": `- To the maximum extent permitted by law, Analazer App shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
  - Use of the Service.
  - Inability to access the Service.
  - Inaccurate AI-generated results.
  - Technical failures.
- Use of the Service is at your own risk.`,
    "termsofservice.point7.title": "7. Data and Privacy",
    "termsofservice.point7.description": `- Your use of the Service is also governed by our Privacy Policy.
- We encourage you to review it to understand how your data is handled.`,
    "termsofservice.point8.title": "8. Termination",
    "termsofservice.point8.description": `- We reserve the right to restrict or terminate access to the Service if a user violates these Terms.`,
    "termsofservice.point9.title": "9. Changes to Terms",
    "termsofservice.point9.description": `- We may update these Terms of Service periodically.
- Continued use of the Service after updates constitutes acceptance of the revised terms.`,
    "termsofservice.point10.title": "10. Contact Information",
    "termsofservice.point10.description": `- If you have questions regarding these Terms of Service, please contact:
- Email: genforces.utdi@gmail.com`,

    // Header
    "chat.assistant": "SustainAI Assistant",
    "chat.online": "Online",

    // Form CV Analyzer, Waste Classification, Plant Disease Detection
    "form.CV.label": "CV ANALYZER",
    "form.CV.title": "Submit Your CV for Analysis",
    "form.CV.description":
      "Provide information about your CV or resume. Our AI will analyze your experience, skills, and achievements to deliver in-depth insights and personalized recommendations to enhance the quality and competitiveness of your profile.",
    "form.Waste.label": "WASTE ANALYZER",
    "form.Waste.title": "Upload Your Waste for Smart Classification",
    "form.Waste.description":
      "Submit a photo of your waste and let our AI-powered image recognition system instantly classify it. The system is integrated with recycling and waste bank platforms to maximize recyclable value, improve economic potential, and reduce the amount of valuable materials ending up in landfills.",
    "form.Plant.label": "PLANT DISEASE ANALYZER",
    "form.Plant.title": "Upload Your Plant Photo for Instant Diagnosis",
    "form.Plant.description":
      "Take and upload a photo of your plant to receive an instant AI-powered diagnosis. Our system detects early signs of disease and provides personalized treatment recommendations, helping farmers reduce crop losses and improve sustainable agricultural productivity.",

    "form.CV.backToDashboard": "Back to Dashboard",
    "form.CV.orgInfo": "Organization Information",
    "form.CV.orgInfoDesc": "Tell us about your organization",
    "form.CV.orgName": "Organization Name",
    "form.CV.orgNamePlaceholder": "Enter organization name",
    "form.CV.contactEmail": "Contact Email",
    "form.CV.contactEmailPlaceholder": "contact@organization.com",
    "form.CV.projectDetails": "Project Details",
    "form.CV.projectDetailsDesc": "Describe your sustainability project",
    "form.CV.projectTitle": "Project Title",
    "form.CV.projectTitlePlaceholder": "Enter project title",
    "form.CV.category": "Category",
    "form.CV.selectCategory": "Select category",
    "form.CV.region": "Region",
    "form.CV.selectRegion": "Select region",
    "form.CV.projectDescription": "Project Description",
    "form.CV.projectDescriptionPlaceholder":
      "Describe your project, its goals, and expected impact...",
    "form.CV.locationImpact": "Location & Impact",
    "form.CV.locationImpactDesc": "Where and who does your project affect?",
    "form.CV.specificLocation": "Specific Location",
    "form.CV.locationPlaceholder": "City, Country",
    "form.CV.estimatedBeneficiaries": "Estimated Beneficiaries",
    "form.CV.beneficiariesPlaceholder": "Number of people impacted",
    "form.CV.supportingDocs": "Supporting Documents",
    "form.CV.supportingDocsDesc": "Upload relevant files",
    "form.Waste.supportingDocs": "Supporting Documents",
    "form.Waste.supportingDocsDesc": "Upload relevant files",
    "form.CV.uploadText": "Click to upload",
    "form.CV.uploadFormats": "Only PDF files are allowed (max 10MB)",
    "form.CV.termsAgree":
      "I agree to the processing of my data for AI analysis and understand that insights generated will be used to support sustainable development initiatives aligned with UN SDGs.",
    "form.CV.submitButton": "Submit Data for Analysis",
    "form.CV.processing": "Processing...",
    "form.CV.alertinfo1": "The file must be a PDF.",
    "form.CV.alertinfo2": "The maximum file size is 10 MB.",
    "form.CV.alertinfo3": "Upload your CV in PDF format first.",
    "form.CV.alertinfo4": "The file must be a PDF.",
    "form.CV.alertinfo5": "The maximum file size is 10 MB.",
    "form.CV.resultsTitle": "Your CV Analysis Results",
    "form.CV.resultsDescription":
      "Here's a summary of your CV evaluation based on AI analysis",
    "form.CV.mainSkills": "Key Skills",
    "form.CV.positionRecommendations": "Position Recommendations",
    "form.CV.upgradeTips": "Key Improvements",
    "form.CV.jobKeywords": "Job Keywords",
    "form.CV.seeOtherCV": "Submit Another CV for Analysis",
    "form.CV.successTitle": "Data Submitted Successfully",
    "form.CV.successDescription":
      "Thank you for your contribution. Our AI will analyze your data and provide actionable insights within 24 hours.",
    "form.CV.goToDashboard": "Go to Dashboard",
    "form.CV.submitAnother": "Submit Another",
    "form.CV.cat.agriculture": "Agriculture & Farming",
    "form.CV.cat.waste": "Waste Management",
    "form.CV.cat.energy": "Renewable Energy",
    "form.CV.cat.water": "Water Conservation",
    "form.CV.cat.education": "Education & Training",
    "form.CV.cat.other": "Other",
    "form.CV.reg.northAmerica": "North America",
    "form.CV.reg.southAmerica": "South America",
    "form.CV.reg.europe": "Europe",
    "form.CV.reg.asia": "Asia",
    "form.CV.reg.africa": "Africa",
    "form.CV.reg.oceania": "Oceania",
    "form.Waste.changeFile": "Change File",
    "form.Waste.analysis": "Waste Analysis Result",
    "form.Waste.identification":
      "AI-powered environmental waste identification",
    "form.Waste.impact": "Environmental Impact",
    "form.Waste.disposal": "Proper Disposal Instructions",
    "form.Waste.recycling": "Smart Recycling Tips",
    "form.Waste.managementinfo": "Waste Management Information",
    "form.Waste.price": "💰 Price of this waste / kg:",
    "form.Waste.pricevalue": "Data not available yet",
    "form.Waste.DIYmaps": "Map of Waste Banks in Yogyakarta",
    "form.Waste.nationalMap": "View National Waste Bank Map",
    "form.Waste.submitAnother": "Analyze Another Waste",
    "form.Waste.alertinfo1": "Only PNG, JPG, JPEG allowed",
    "form.Waste.alertinfo2": "Max file size 5MB",
    "form.Waste.alertinfo3": "Please upload an image file first",
    "form.Waste.alertinfo4": "Only PNG, JPG, JPEG allowed",
    "form.Waste.alertinfo5": "Max file size 5MB",
    "form.Plant.result": "🌿 Plant Analysis Results",
    "form.Plant.diagnosis":
      "Diagnosis and treatment recommendations based on images",
    "form.Plant.plantType": "Plant:",
    "form.Plant.confidence": "Confidence:",
    "form.Plant.severity": "Severity:",
    "form.Plant.symptom": "Symptom Detected",
    "form.Plant.cause": "Possible Causes",
    "form.Plant.risk": "Risk of Spread",
    "form.Plant.riskLevel": "Risk Level:",
    "form.Plant.recomendationCare": "Care Recommendations",
    "form.Plant.prevention": "Prevention Tips",
    "form.Plant.impatct": "Impact on Harvest",
    "form.Plant.submitAgain": "Analyze Other Images",

    // not-found
    "notfound.title": "PAGE NOT FOUND",
    "notfound.description":
      "Sorry, the page you are looking for cannot be found. Please check the URL or return to the main page.",
    "notfound.buttontitle": "Go to Home",

    // Language
    "lang.english": "English",
    "lang.indonesian": "Indonesian",
  },
  id: {
    // Common
    "common.sustainai": "SustainAI",
    "common.loading": "Memuat",

    // Nav
    "nav.solutions": "Solusi",
    "nav.impact": "Dampak",
    "nav.challenges": "Tantangan",
    "nav.vision": "Visi",
    "nav.features": "Fitur",
    "nav.sdgs": "SDGs",
    "nav.team": "Tim",
    "nav.getStarted": "Mulai Sekarang",

    // Hero
    "hero.badge": "AI untuk Pembangunan Berkelanjutan",
    "hero.titleStart": "Memberdayakan ",
    "hero.titleHighlight": "Masa Depan Berkelanjutan",
    "hero.titleEnd": " dengan AI",
    "hero.description":
      "Memanfaatkan kekuatan kecerdasan buatan untuk mengatasi tantangan global, memberdayakan komunitas, dan melindungi planet kita\u2014selaras dengan Tujuan Pembangunan Berkelanjutan PBB.",
    "hero.cta1": "Jelajahi Solusi Kami",
    "hero.cta2": "Pelajari Lebih Lanjut",

    // Challenges
    "challenges.title": "Tantangan Global yang Kami Tangani",
    "challenges.description":
      "Tantangan-tantangan yang saling terhubung ini berdampak pada keberlanjutan sosial, ekonomi, dan lingkungan di seluruh dunia.",
    "challenges.employment.title": "Ketimpangan Pekerjaan",
    "challenges.employment.description":
      "Jutaan orang tidak memiliki akses ke kesempatan kerja yang layak karena hambatan sistemik dalam pendidikan, penilaian keterampilan, dan aksesibilitas pasar kerja.",
    "challenges.waste.title": "Krisis Pengelolaan Sampah",
    "challenges.waste.description":
      "Sistem pengelolaan sampah yang tidak efisien gagal menangkap nilai ekonomi dari bahan daur ulang, berkontribusi pada degradasi lingkungan.",
    "challenges.agriculture.title": "Kerentanan Pertanian",
    "challenges.agriculture.description":
      "Petani di seluruh dunia menghadapi kerugian panen yang dahsyat karena akses terbatas pada alat deteksi dini hama dan penyakit tanaman.",

    // Vision
    "vision.label": "Visi Kami",
    "vision.title": "Teknologi sebagai Pemberdaya, Bukan Pengganti",
    "vision.p1":
      "Kami membayangkan dunia di mana kecerdasan buatan memperkuat potensi manusia, bukan menggantikannya. Teknologi kami dirancang untuk mendukung pengambilan keputusan, meningkatkan kemampuan, dan menciptakan peluang bagi semua.",
    "vision.p2":
      "Dengan berfokus pada pertemuan kebutuhan manusia dan inovasi teknologi, kami membangun alat yang menghormati agensi manusia sambil memberikan wawasan kuat untuk mengatasi tantangan paling mendesak di zaman kita.",
    "vision.inclusivity.title": "Inklusivitas",
    "vision.inclusivity.description":
      "Teknologi yang melayani semua orang, tanpa memandang latar belakang atau keadaan",
    "vision.accessibility.title": "Aksesibilitas",
    "vision.accessibility.description":
      "Solusi yang dirancang untuk menjangkau komunitas di seluruh dunia, menjembatani kesenjangan digital",
    "vision.scalability.title": "Skalabilitas",
    "vision.scalability.description":
      "Infrastruktur yang dibangun untuk tumbuh dan beradaptasi dengan permintaan global yang meningkat",
    "vision.longterm.title": "Dampak Jangka Panjang",
    "vision.longterm.description":
      "Solusi berkelanjutan yang menciptakan perubahan positif yang bertahan untuk generasi mendatang",

    // Solutions
    "solutions.label": "Solusi Kami",
    "solutions.title": "Aplikasi Bertenaga AI untuk Dampak Nyata",
    "solutions.description":
      "Tiga solusi inovatif yang mengatasi tantangan dunia nyata dan selaras dengan Tujuan Pembangunan Berkelanjutan PBB.",
    "solutions.theChallenge": "Tantangan",
    "solutions.ourSolution": "Solusi Kami",
    "solutions.learnMore": "Coba Sekarang",
    "solutions.cv.title": "Pemeriksa CV Berbasis AI",
    "solutions.cv.problem":
      "Jutaan orang menghadapi hambatan dalam pekerjaan karena resume yang kurang optimal dan kurangnya bimbingan profesional.",
    "solutions.cv.solution":
      "AI kami menganalisis dan meningkatkan CV untuk meningkatkan peluang pencari kerja, mempromosikan akses yang setara ke kesempatan kerja yang layak.",
    "solutions.waste.title": "Sistem Klasifikasi Sampah",
    "solutions.waste.problem":
      "Pemilahan sampah yang tidak efisien menyebabkan bahan daur ulang berharga berakhir di tempat pembuangan akhir, menyia-nyiakan potensi ekonomi.",
    "solutions.waste.solution":
      "Pengenalan gambar bertenaga AI mengklasifikasikan sampah secara instan, terintegrasi dengan sistem bank sampah untuk memaksimalkan nilai daur ulang.",
    "solutions.plant.title": "Deteksi Penyakit Tanaman",
    "solutions.plant.problem":
      "Petani kehilangan porsi signifikan dari panen mereka akibat hama dan penyakit yang sebenarnya bisa dicegah dengan deteksi dini.",
    "solutions.plant.solution":
      "Unggah foto tanaman Anda dan terima diagnosis bertenaga AI secara instan dengan rekomendasi perawatan.",
    "solutions.sdg.decentWork": "Pekerjaan Layak",
    "solutions.sdg.qualityEducation": "Pendidikan Berkualitas",
    "solutions.sdg.reducedInequalities": "Mengurangi Ketimpangan",
    "solutions.sdg.responsibleConsumption": "Konsumsi Bertanggung Jawab",
    "solutions.sdg.sustainableCities": "Kota Berkelanjutan",
    "solutions.sdg.climateAction": "Aksi Iklim",
    "solutions.sdg.zeroHunger": "Tanpa Kelaparan",
    "solutions.sdg.noPoverty": "Tanpa Kemiskinan",
    "solutions.sdg.lifeOnLand": "Kehidupan di Darat",

    // How It Works
    "howItWorks.label": "Cara Kerja",
    "howItWorks.title": "AI sebagai Sistem Pendukung Keputusan Anda",
    "howItWorks.description":
      "Teknologi AI kami dirancang untuk meningkatkan kemampuan manusia, bukan menggantikannya. Begini cara kami mengubah data menjadi wawasan yang dapat ditindaklanjuti.",
    "howItWorks.step1.title": "Masukkan Data",
    "howItWorks.step1.description":
      "Pengguna mengunggah gambar, dokumen, atau data relevan melalui antarmuka intuitif kami.",
    "howItWorks.step2.title": "Analisis AI",
    "howItWorks.step2.description":
      "Model AI canggih kami memproses dan menganalisis data menggunakan algoritma pembelajaran mesin.",
    "howItWorks.step3.title": "Wawasan Aksi",
    "howItWorks.step3.description":
      "Terima rekomendasi dan wawasan bermakna untuk mendukung pengambilan keputusan yang terinformasi.",
    "howItWorks.quote":
      '"AI memberikan rekomendasi dan wawasan, tetapi keputusan akhir selalu tetap pada pengguna manusia. Kami percaya pada kecerdasan yang ditingkatkan, bukan penggantian buatan."',

    // Impact
    "impact.label": "Dampak Kami",
    "impact.title": "Keberlanjutan Berbasis Data",
    "impact.description":
      "Angka nyata yang menunjukkan komitmen kami dalam menciptakan perubahan yang terukur dan bertahan lama.",
    "impact.cvs.label": "CV Dianalisis & Ditingkatkan",
    "impact.cvs.description": "Membantu pencari kerja di seluruh dunia",
    "impact.waste.label": "Sampah Diklasifikasi dengan Benar",
    "impact.waste.description": "Dialihkan dari tempat pembuangan akhir",
    "impact.farmers.label": "Petani yang Didukung",
    "impact.farmers.description": "Dengan deteksi penyakit dini",
    "impact.partners.label": "Organisasi Mitra",
    "impact.partners.description": "Berkolaborasi untuk dampak nyata",

    // SDG
    "sdg.label": "Keselarasan Global",
    "sdg.title": "Selaras dengan Tujuan Pembangunan Berkelanjutan PBB",
    "sdg.description":
      "Solusi kami berkontribusi langsung untuk mencapai target global demi dunia yang lebih baik pada tahun 2030.",
    "sdg.legend":
      "Setiap tujuan yang disorot mewakili area di mana solusi AI kami menciptakan dampak langsung dan terukur.",
    "sdg.1": "Tanpa Kemiskinan",
    "sdg.2": "Tanpa Kelaparan",
    "sdg.4": "Pendidikan Berkualitas",
    "sdg.8": "Pekerjaan Layak",
    "sdg.10": "Mengurangi Ketimpangan",
    "sdg.11": "Kota Berkelanjutan",
    "sdg.12": "Konsumsi Bertanggung Jawab",
    "sdg.13": "Aksi Iklim",
    "sdg.15": "Kehidupan di Darat",

    // Team
    "team.label": "Tim Kami",
    "team.title": "Inovasi Kolaboratif untuk Dampak Global",
    "team.p1":
      "Kami adalah tim multidisipliner yang terdiri dari teknolog, peneliti, dan advokat keberlanjutan yang dipersatukan oleh misi bersama: memanfaatkan AI untuk perubahan global yang positif.",
    "team.p2":
      "Latar belakang dan keahlian kami yang beragam memungkinkan kami untuk mendekati tantangan kompleks dari berbagai perspektif, memastikan solusi kami baik secara teknis maupun berdampak secara praktis.",
    "team.technology.title": "Teknologi",
    "team.technology.description":
      "Insinyur AI dan pengembang yang membangun solusi AI yang skalabel dan etis",
    "team.research.title": "Penelitian",
    "team.research.description":
      "Ilmuwan data yang mengeksplorasi pendekatan inovatif untuk tantangan keberlanjutan",
    "team.impact.title": "Dampak",
    "team.impact.description":
      "Spesialis yang mengukur dan mengoptimalkan hasil nyata kami",
    "team.design.title": "Desain",
    "team.design.description":
      "Pakar UX yang menciptakan antarmuka yang dapat diakses untuk pengguna beragam",

    // CTA
    "cta.badge": "Bergabunglah dalam Gerakan",
    "cta.titleStart": "Bersama, Mari Bangun Teknologi yang ",
    "cta.titleHighlight1": "Memberdayakan Manusia",
    "cta.titleMid": " dan ",
    "cta.titleHighlight2": "Melindungi Masa Depan",
    "cta.description":
      "Baik Anda seorang peneliti, organisasi, atau individu yang bersemangat tentang keberlanjutan, mari ciptakan tempat untuk menciptakan perubahan positif melalui AI.",
    "cta.cta1": "Lihat Solusi Kami",
    "cta.cta2": "Hubungi Kami",

    // Footer
    "footer.description":
      "Memberdayakan komunitas melalui teknologi AI yang selaras dengan Tujuan Pembangunan Berkelanjutan PBB.",
    "footer.solutions": "Solusi",
    "footer.company": "Perusahaan",
    "footer.resources": "Sumber Daya",
    "footer.cvChecker": "Pemeriksa CV",
    "footer.wasteClassification": "Klasifikasi Sampah",
    "footer.plantDiseaseDetection": "Deteksi Penyakit Tanaman",
    "footer.aboutUs": "Tentang Kami",
    "footer.ourTeam": "Tim Kami",
    "footer.impactReport": "Laporan Dampak",
    "footer.companySolution": "Solusi kami",
    "footer.documentation": "Dokumentasi",
    "footer.sdgAlignment": "Keselarasan SDG",
    "footer.researchPapers": "Makalah Penelitian",
    "footer.copyright":
      "SustainAI. Membangun teknologi untuk masa depan berkelanjutan.",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Ketentuan Layanan",

    // Dashboard
    "dashboard.welcome": "Selamat datang kembali, John",
    "dashboard.subtitle": "Berikut perkembangan proyek keberlanjutan Anda",
    "dashboard.newProject": "Proyek Baru",
    "dashboard.totalProjects": "Total Proyek",
    "dashboard.aiAnalyses": "Analisis AI",
    "dashboard.peopleImpacted": "Orang Terdampak",
    "dashboard.sdgAlignment": "Keselarasan SDG",
    "dashboard.recentProjects": "Proyek Terbaru",
    "dashboard.viewAll": "Lihat semua",
    "dashboard.aiInsights": "Wawasan AI",
    "dashboard.new": "baru",
    "dashboard.viewAllInsights": "Lihat semua wawasan",
    "dashboard.helpTitle": "Butuh bantuan untuk memulai?",
    "dashboard.helpDescription":
      "Asisten AI kami dapat membantu Anda mengidentifikasi pendekatan terbaik untuk proyek keberlanjutan Anda selanjutnya.",
    "dashboard.startConsultation": "Mulai Konsultasi AI",
    "dashboard.settings": "Pengaturan",
    "dashboard.signOut": "Keluar",
    "dashboard.searchPlaceholder": "Cari proyek, wawasan...",
    "dashboard.viewDetails": "Lihat detail",
    "dashboard.editProject": "Edit proyek",
    "dashboard.delete": "Hapus",
    "dashboard.completed": "Selesai",
    "dashboard.analyzing": "Menganalisis",
    "dashboard.pending": "Menunggu",
    "dashboard.project.urbanFarming": "Inisiatif Pertanian Perkotaan",
    "dashboard.project.urbanFarming.category": "Pertanian",
    "dashboard.project.urbanFarming.impact": "1.240 penerima manfaat",
    "dashboard.project.wasteRecycling": "Program Daur Ulang Sampah",
    "dashboard.project.wasteRecycling.category": "Pengelolaan Sampah",
    "dashboard.project.wasteRecycling.impact": "Sedang diproses...",
    "dashboard.project.cleanWater": "Akses Air Bersih",
    "dashboard.project.cleanWater.category": "Konservasi Air",
    "dashboard.project.cleanWater.impact": "Menunggu tinjauan",
    "dashboard.project.solarEnergy": "Energi Surya untuk Sekolah",
    "dashboard.project.solarEnergy.category": "Energi Terbarukan",
    "dashboard.project.solarEnergy.impact": "3.500 penerima manfaat",
    "dashboard.insight.cropRotation.title": "Optimalkan rotasi tanaman",
    "dashboard.insight.cropRotation.description":
      "AI menyarankan penerapan rotasi tanaman 3 musim untuk meningkatkan hasil panen sebesar 15%",
    "dashboard.insight.recycling.title": "Perluas kategori daur ulang",
    "dashboard.insight.recycling.description":
      "Menambahkan pengumpulan sampah elektronik dapat meningkatkan dampak sebesar 25%",
    "dashboard.insight.filtration.title": "Peningkatan filtrasi air",
    "dashboard.insight.filtration.description":
      "Teknologi filtrasi baru tersedia yang dapat mengurangi biaya sebesar 30%",
    "dashboard.hoursAgo": "jam yang lalu",
    "dashboard.dayAgo": "hari yang lalu",
    "dashboard.daysAgo": "hari yang lalu",

    // Privacy Policy
    "privacypolicy.pageTitle": "Kebijakan Privasi",
    "privacypolicy.pageSubtitle":
      "Kami berkomitmen untuk melindungi informasi pribadi Anda serta memastikan transparansi dalam pengumpulan, penggunaan, dan perlindungan data di dalam Analazer App. Kebijakan ini menjelaskan jenis informasi yang kami kumpulkan dan bagaimana data tersebut diproses saat Anda menggunakan layanan berbasis AI kami.",
    "privacypolicy.point1.title": "1. Pendahuluan",
    "privacypolicy.point2.title": "2. Informasi yang Kami Kumpulkan",
    "privacypolicy.point3.title":
      "3. Bagaimana Kami Menggunakan Informasi Anda",
    "privacypolicy.point4.title": "4. Berbagi Informasi",
    "privacypolicy.point5.title": "5. Cookie dan Teknologi Pelacakan",
    "privacypolicy.point6.title": "6. Keamanan Informasi Anda",
    "privacypolicy.point7.title": "7. Tautan Pihak Ketiga",
    "privacypolicy.point8.title": "8. Retensi Data",
    "privacypolicy.point9.title": "9. Hak Anda",
    "privacypolicy.point10.title": "10. Perubahan pada Kebijakan Ini",
    "privacypolicy.point11.title": "11. Hubungi Kami",
    "privacypolicy.point1.description": `- Selamat datang di Aplikasi Analazer (“kami”, “kita”, “ Aplikasi Analazer ”).
- Kami berkomitmen untuk melindungi privasi Anda dan memastikan bahwa informasi pribadi Anda ditangani dengan aman dan bertanggung jawab.
- Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi saat Anda mengunjungi atau menggunakan situs web kami di https://analazer-app.vercel.app (“Situs”).
- Dengan menggunakan Situs kami, Anda menyetujui pengumpulan dan penggunaan informasi sebagaimana dijelaskan dalam kebijakan ini.`,
    "privacypolicy.point2.description": `- Kami mengumpulkan informasi yang Anda berikan secara sukarela kepada kami ketika Anda:
- Kirimkan foto atau data untuk dianalisis.
- Hubungi kami untuk mendapatkan bantuan.
- Berlangganan buletin atau pembaruan.
- Informasi pribadi dapat mencakup:
- Nama.
- Alamat email.
- File yang Anda unggah (misalnya, gambar untuk analisis).
- Informasi lain apa pun yang Anda pilih untuk berikan.
- Kami juga dapat mengumpulkan informasi non-pribadi secara otomatis seperti:
- Jenis perangkat dan peramban.
- Data penggunaan (halaman yang dikunjungi, waktu yang dihabiskan).
- Alamat IP.
- Informasi ini digunakan untuk meningkatkan pengalaman dan layanan Anda.`,
    "privacypolicy.point3.description": `- Kami menggunakan informasi yang kami kumpulkan untuk:
- Menyediakan dan memelihara layanan.
- Memproses media yang Anda unggah dan memberikan hasil analisis.
- Menanggapi pertanyaan atau permintaan.
- Meningkatkan dan mengembangkan fitur-fitur baru.
- Melakukan analisis dan pemantauan kinerja.
- Kami tidak akan menggunakan informasi pribadi Anda untuk tujuan selain yang dijelaskan di sini tanpa persetujuan Anda.`,
    "privacypolicy.point4.description": `- Kami dapat membagikan data Anda dengan:
- Penyedia layanan pihak ketiga tepercaya yang membantu kami mengoperasikan situs dan memproses data.
- Pihak berwenang jika diwajibkan oleh hukum.
- Mitra yang berkontribusi langsung terhadap pemenuhan layanan dengan persetujuan Anda sebelumnya.
- Kami tidak menjual informasi pribadi Anda kepada pihak ketiga.`,
    "privacypolicy.point5.description": `- Situs kami dapat menggunakan cookie dan teknologi serupa untuk:
- Meningkatkan fungsionalitas situs.
- Sesuaikan konten.
- Melacak penggunaan.
- Anda dapat memilih untuk menonaktifkan cookie melalui pengaturan browser Anda, tetapi ini dapat membatasi fungsi tertentu.`,
    "privacypolicy.point6.description": `- Kami menerapkan pengamanan teknis yang wajar untuk melindungi informasi Anda dari kehilangan, akses tanpa izin, atau pengungkapan.
Namun, tidak ada metode transmisi data melalui internet yang sepenuhnya aman.`,
    "privacypolicy.point7.description": `- Situs kami mungkin menyertakan tautan ke situs web pihak ketiga.
- Kami tidak bertanggung jawab atas praktik privasi atau konten situs eksternal tersebut.
- Tinjau kebijakan privasi mereka secara terpisah.`,
    "privacypolicy.point8.description": `- Kami hanya menyimpan data pribadi selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam kebijakan ini atau untuk mematuhi persyaratan hukum.`,
    "privacypolicy.point9.description": `- Tergantung pada yurisdiksi Anda, Anda mungkin memiliki hak-hak seperti:
- Mengakses data Anda.
- Memperbaiki ketidakakuratan.
- Meminta penghapusan.
- Untuk menggunakan hak-hak ini, hubungi kami di support@analazer-app.vercel.app`,
    "privacypolicy.point10.description": `- Kami dapat memperbarui Kebijakan Privasi ini secara berkala.
- Kami akan memberi tahu Anda dengan memperbarui tanggal "Terakhir Diperbarui" di bagian atas halaman ini.`,
    "privacypolicy.point11.description": `- Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini, silakan hubungi:
- Email: genforces.utdi@gmail.com`,

    // Term of Service
    "termsofservice.pageTitle": "Syarat dan Ketentuan Layanan",
    "termsofservice.pageSubtitle":
      "Syarat dan Ketentuan Layanan ini mengatur aturan, tanggung jawab, serta batasan dalam penggunaan Analazer App. Dengan mengakses platform kami, Anda menyetujui untuk mematuhi ketentuan yang berlaku dan menggunakan layanan secara bertanggung jawab.",
    "termsofservice.point1.title": "1. Penerimaan Syarat dan Ketentuan",
    "termsofservice.point1.description": `- Dengan mengakses dan menggunakan Aplikasi Analazer (“Layanan”), Anda setuju untuk terikat oleh Ketentuan Layanan ini.
- Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda harus segera menghentikan penggunaan Layanan.`,
    "termsofservice.point2.title": "2. Deskripsi Layanan",
    "termsofservice.point2.description": `- Analazer App adalah platform berbasis web yang menggunakan Kecerdasan Buatan (AI) untuk menganalisis data dan gambar yang dikirimkan pengguna untuk tujuan informasi.
- Layanan ini disediakan untuk keperluan pendidikan, penelitian, dan informasi umum.
- Kami berhak untuk mengubah, menangguhkan, atau menghentikan bagian mana pun dari Layanan kapan saja tanpa pemberitahuan sebelumnya.`,
    "termsofservice.point3.title": "3. Penafian AI",
    "termsofservice.point3.description": `- Hasil analisis yang dihasilkan oleh sistem AI:
- Bersifat otomatis.
- Mungkin tidak 100% akurat.
- Tidak boleh dianggap sebagai nasihat profesional, medis, hukum, atau ahli.
- Pengguna sepenuhnya bertanggung jawab atas bagaimana mereka menafsirkan dan menggunakan hasil yang diberikan oleh Layanan.
- Aplikasi Analazer tidak bertanggung jawab atas keputusan yang dibuat berdasarkan output yang dihasilkan oleh AI.`,
    "termsofservice.point4.title": "4. Tanggung Jawab Pengguna",
    "termsofservice.point4.description": `- Dengan menggunakan Layanan ini, Anda setuju:
- Dilarang mengunggah konten yang melanggar hukum, berbahaya, atau jahat.
- Dilarang mencoba mengganggu, meretas, atau melakukan rekayasa balik terhadap sistem.
- Dilarang menyalahgunakan Layanan untuk kegiatan penipuan atau ilegal.
- Anda tetap bertanggung jawab atas konten yang Anda unggah.`,
    "termsofservice.point5.title": "5. Hak Kekayaan Intelektual",
    "termsofservice.point5.description": `- Semua konten platform, termasuk namun tidak terbatas pada:
- Desain situs web.
- Pencitraan Merek.
- Kode perangkat lunak.
- Integrasi sistem AI.
- Ini adalah hak kekayaan intelektual dari Analazer App kecuali dinyatakan lain.
- Pengguna tetap memiliki kepemilikan atas file yang mereka unggah.
- Dengan mengunggah konten, Anda memberi kami hak terbatas untuk memprosesnya untuk tujuan analisis.`,
    "termsofservice.point6.title": "6. Batasan Tanggung Jawab",
    "termsofservice.point6.description": `- Sejauh yang diizinkan oleh hukum, Aplikasi Analazer tidak bertanggung jawab atas segala kerusakan langsung, tidak langsung, insidental, konsekuensial, atau khusus yang timbul dari:
- Penggunaan Layanan.
- Ketidakmampuan untuk mengakses Layanan.
- Hasil yang dihasilkan AI tidak akurat.
- Kegagalan teknis.
- Penggunaan Layanan ini sepenuhnya menjadi risiko Anda sendiri.`,
    "termsofservice.point7.title": "7. Data dan Privasi",
    "termsofservice.point7.description": `- Penggunaan Layanan oleh Anda juga diatur oleh Kebijakan Privasi kami.
- Kami mendorong Anda untuk meninjau hal ini agar memahami bagaimana data Anda ditangani.`,
    "termsofservice.point8.title": "8. Pemutusan hubungan kerja",
    "termsofservice.point8.description": `- Kami berhak untuk membatasi atau menghentikan akses ke Layanan jika pengguna melanggar Ketentuan ini.`,
    "termsofservice.point9.title": "9. Perubahan Ketentuan",
    "termsofservice.point9.description": `- Kami dapat memperbarui Ketentuan Layanan ini secara berkala.
- Dengan terus menggunakan Layanan setelah pembaruan, Anda dianggap telah menerima ketentuan yang telah direvisi.`,
    "termsofservice.point10.title": "10. Informasi Kontak",
    "termsofservice.point110description": `- Jika Anda memiliki pertanyaan terkait Ketentuan Layanan ini, silakan hubungi:
- Email: genforces.utdi@gmail.com
`,

    // Chat
    "chat.assistant": "SustainAI Assistant",
    "chat.online": "Online",

    // Form CV Analyzer, Waste Classification, Plant Disease Detection
    "form.CV.label": "CV ANALYZER",
    "form.CV.title": "Kirim CV anda untuk Analisis",
    "form.CV.description":
      "Berikan informasi mengenai CV atau resume Anda. AI kami akan menganalisis pengalaman, keterampilan, dan pencapaian Anda untuk memberikan evaluasi mendalam serta rekomendasi yang dipersonalisasi guna meningkatkan kualitas dan daya saing profil Anda.",

    "form.Waste.label": "WASTE ANALYZER",
    "form.Waste.title": "Kirim Foto Sampah Anda untuk Analisis",
    "form.Waste.description":
      "Unggah gambar sampah Anda dan biarkan sistem AI kami mengidentifikasi serta mengklasifikasikannya secara instan. Teknologi pengenalan gambar ini membantu memisahkan jenis sampah secara akurat dan terintegrasi dengan sistem bank sampah untuk memaksimalkan potensi daur ulang, meningkatkan nilai ekonomi, serta mengurangi limbah yang berakhir di tempat pembuangan akhir.",
    "form.Plant.label": "PLANT DISEASE ANALYZER",
    "form.Plant.title": "Unggah Foto Tanaman Anda untuk Diagnosis",
    "form.Plant.description":
      "Ambil dan unggah foto tanaman Anda untuk mendapatkan analisis penyakit secara instan berbasis AI. Sistem kami mendeteksi gejala sejak dini serta memberikan rekomendasi perawatan yang dipersonalisasi, membantu petani mengurangi risiko gagal panen dan meningkatkan produktivitas secara berkelanjutan.",
    "form.CV.backToDashboard": "Kembali ke Dasbor",
    "form.CV.orgInfo": "Informasi Organisasi",
    "form.CV.orgInfoDesc": "Ceritakan tentang organisasi Anda",
    "form.CV.orgName": "Nama Organisasi",
    "form.CV.orgNamePlaceholder": "Masukkan nama organisasi",
    "form.CV.contactEmail": "Email Kontak",
    "form.CV.contactEmailPlaceholder": "kontak@organisasi.com",
    "form.CV.projectDetails": "Detail Proyek",
    "form.CV.projectDetailsDesc": "Jelaskan proyek keberlanjutan Anda",
    "form.CV.projectTitle": "Judul Proyek",
    "form.CV.projectTitlePlaceholder": "Masukkan judul proyek",
    "form.CV.category": "Kategori",
    "form.CV.selectCategory": "Pilih kategori",
    "form.CV.region": "Wilayah",
    "form.CV.selectRegion": "Pilih wilayah",
    "form.CV.projectDescription": "Deskripsi Proyek",
    "form.CV.projectDescriptionPlaceholder":
      "Jelaskan proyek, tujuan, dan dampak yang diharapkan...",
    "form.CV.locationImpact": "Lokasi & Dampak",
    "form.CV.locationImpactDesc":
      "Di mana dan siapa yang terkena dampak proyek Anda?",
    "form.CV.specificLocation": "Lokasi Spesifik",
    "form.CV.locationPlaceholder": "Kota, Negara",
    "form.CV.estimatedBeneficiaries": "Perkiraan Penerima Manfaat",
    "form.CV.beneficiariesPlaceholder": "Jumlah orang yang terdampak",
    "form.CV.supportingDocs": "Dokumen Pendukung",
    "form.CV.supportingDocsDesc": "Unggah file terkait",
    "form.Waste.supportingDocs": "Dokumen Pendukung",
    "form.Waste.supportingDocsDesc": "Unggah file terkait",
    "form.CV.uploadText": "Klik untuk mengunggah",
    "form.CV.uploadFormats": "Hanya file PDF yang diizinkan (maks 10MB)",
    "form.CV.termsAgree":
      "Saya menyetujui pemrosesan data saya untuk analisis AI dan memahami bahwa wawasan yang dihasilkan akan digunakan untuk mendukung inisiatif pembangunan berkelanjutan yang selaras dengan SDG PBB.",
    "form.CV.submitButton": "Kirim Data untuk Analisis",
    "form.CV.resultsTitle": "Hasil Analisis CV Anda",
    "form.CV.resultsDescription":
      "Berikut rangkuman evaluasi CV berdasarkan analisis AI",
    "form.CV.mainSkills": "Skills Utama",
    "form.CV.positionRecommendations": "Rekomendasi Posisi",
    "form.CV.upgradeTips": "Perbaikan Utama",
    "form.CV.jobKeywords": "Kata Kunci Pekerjaan",
    "form.CV.seeOtherCV": "Kirim CV Lain untuk Analisis",
    "form.CV.processing": "Memproses...",
    "form.CV.successTitle": "Data Berhasil Dikirim",
    "form.CV.alertinfo1": "File harus berupa PDF.",
    "form.CV.alertinfo2": "Ukuran file maksimal 10 MB.",
    "form.CV.alertinfo3": "Upload file CV dalam bentuk PDF terlebih dahulu.",
    "form.CV.alertinfo4": "File harus berupa PDF.",
    "form.CV.alertinfo5": "Ukuran file maksimal 10 MB.",
    "form.CV.successDescription":
      "Terima kasih atas kontribusi Anda. AI kami akan menganalisis data Anda dan memberikan wawasan yang dapat ditindaklanjuti dalam 24 jam.",
    "form.CV.goToDashboard": "Ke Dasbor",
    "form.CV.submitAnother": "Kirim Lainnya",
    "form.CV.cat.agriculture": "Pertanian & Peternakan",
    "form.CV.cat.waste": "Pengelolaan Sampah",
    "form.CV.cat.energy": "Energi Terbarukan",
    "form.CV.cat.water": "Konservasi Air",
    "form.CV.cat.education": "Pendidikan & Pelatihan",
    "form.CV.cat.other": "Lainnya",
    "form.CV.reg.northAmerica": "Amerika Utara",
    "form.CV.reg.southAmerica": "Amerika Selatan",
    "form.CV.reg.europe": "Eropa",
    "form.CV.reg.asia": "Asia",
    "form.CV.reg.africa": "Afrika",
    "form.CV.reg.oceania": "Oseania",
    "form.Waste.changeFile": "Ganti File",
    "form.Waste.analysis": "Hasil Analisis Sampah",
    "form.Waste.identification": "Identifikasi sampah dengan teknologi AI",
    "form.Waste.impact": "Dampak Lingkungan",
    "form.Waste.disposal": "Petunjuk Pembuangan yang Tepat",
    "form.Waste.recycling": "Tips Mendaur Ulang",
    "form.Waste.managementinfo": "Informasi Pengelolaan Sampah",
    "form.Waste.price": "💰 Harga sampah ini /kg",
    "form.Waste.pricevalue": "Data belum tersedia",
    "form.Waste.DIYmaps": "Peta Bank Sampah Area Yogyakarta",
    "form.Waste.nationalMap": "Lihat Peta Bank Sampah Nasional",
    "form.Waste.submitAnother": "Analisis Sampah Lain",
    "form.Waste.alertinfo1": "Hanya file PNG, JPG, JPEG yang diperbolehkan",
    "form.Waste.alertinfo2": "Ukuran file maksimal 5MB",
    "form.Waste.alertinfo3": "Silahkan unggah file gambar terlebih dahulu",
    "form.Waste.alertinfo4": "Hanya file PNG, JPG, JPEG yang diperbolehkan",
    "form.Waste.alertinfo5": "Ukuran file maksimal 5MB",
    "form.Plant.result": "🌿 Hasil Analisis Tanaman",
    "form.Plant.diagnosis":
      "Diagnosis dan rekomendasi perawatan berdasarkan gambar",
    "form.Plant.plantType": "Tanaman:",
    "form.Plant.confidence": "Akurasi Diagnosa:",
    "form.Plant.severity": "Tingkat Keparahan:",
    "form.Plant.symptom": "Gejala Terdeteksi",
    "form.Plant.cause": "Kemungkinan Penyebab",
    "form.Plant.risk": "Risiko Penyebaran",
    "form.Plant.riskLevel": "Tingkat Risiko:",
    "form.Plant.recomendationCare": "Rekomendasi Perawatan",
    "form.Plant.prevention": "Tips Pencegahan",
    "form.Plant.impatct": "Dampak Terhadap Panen",
    "form.Plant.submitAgain": "Analisa Gambar Lain",

    // not-found
    "notfound.title": "HALAMAN TIDAK DITEMUKAN",
    "notfound.description":
      "Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan periksa kembali alamat URL atau kembali ke halaman utama.",
    "notfound.buttontitle": "Ke Halaman Utama",

    // Language
    "lang.english": "English",
    "lang.indonesian": "Indonesian",
  },
};
