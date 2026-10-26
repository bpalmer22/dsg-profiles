var defaultPhoto = "https://dukestudentgovernment.org/wp-content/uploads/2026/05/session-logo-1.png";

var defaultBio = "Stay tuned for this member's biography!";

//EXECUTIVE BRANCH

var execBoard = {
  "exec-pres": {
    name: "Angela Chen",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Angela-Chen_DSG-Headshot-Angela-Chen-scaled.jpg",
    meta: "Senior",
    bio: 'Angela is a senior from Hong Kong studying Public Policy and Psychology. Now in her fourth year in DSG, she has served as Vice President for Campus Life, Senator for Campus Life, and President of Blue Devil Buddies, DSG’s flagship mentorship program. In these roles, she expanded free airport transit to serve over 1,500 students and helped implement free laundry. Angela is proud to have been elected on her platform of CARE: connection among campus communities, administrators, and DSG; affordability, by addressing Duke’s “hidden costs”; reliability in campus services and DSG’s operations; and engagement with the wider Durham community. She’s excited to ground DSG’s work in collaborative leadership that listens, to ultimately strengthen Duke’s defining culture of care. <br><br><center><a href="mailto:angela.z.chen@duke.edu" target="_blank">Contact Angela</a></center>'
  },
  "exec-vp": {
    name: "Ikpomwonsa Osaghae",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/thumbnail_IMG_5505-I.K.-Osaghae-scaled.jpg",
    meta: "Junior",
    bio: 'Ikpomwonsa Osaghae is a junior at Duke University from Miami, Florida, pursuing a double major in Neuroscience and Music on the pre-med track. In Duke Student Government, he previously served as Director of Special Programs and Chief of Staff, and now serves as Executive Vice President. Through DSG, he aims to strengthen student access to academic and wellness resources and improve communication between students and administration. His goals include advancing student advocacy through effective leadership and increasing transparency and efficiency within DSG. He hopes to foster a more connected, inclusive, and responsive Duke community. <br><br><center><a href="mailto:ikpomwonsa.osaghae@duke.edu" target="_blank">Contact Ikpomwonsa</a></center>'
  },
  "exec-cos": {
    name: "Raahim Hashmi",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/07/thumbnail_Raahim-H-Headshot-scaled.jpg",
    meta: "Junior",
    bio: 'Raahim is a junior from Piscataway, NJ studying Public Policy and Asian & Middle Eastern Studies. This is his third year in DSG, having previously served as a Senator and Assistant Vice President for SAS. He is involved with Duke Democrats, Duke Middle East Studies Center, Muslim Student Association, and the Kenan Ethics LLC. Raahim cares deeply about community service, sustainability, and creating a Duke experience where every student feels supported and included. This year, he hopes to expand sustainable resources on campus and make student life more accessible and equitable. <br><br><center><a href="mailto:raahim.hashmi@duke.edu" target="_blank">Contact Raahim</a></center>'
  },
  "exec-sots": {
    name: "Olivia McConnell",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/McConnellO2-scaled.jpg",
    meta: "Senior",
    bio: 'Olivia McConnell is a senior at Duke University studying Political Science with a concentration in Law and Political Theory. Originally from rural South Carolina, Olivia has been particularly committed to expanding opportunities for rural students at Duke. She previously served as President of the Student Translational Research Support Committee and continues her work in rural student advocacy as a Special Advisor. Beyond DSG, she is involved in public service, research, and academic work focused on political theory, law, and democratic governance. Olivia is a Nakayama Public Service Scholar and a member of Phi Beta Kappa. <br><br><center><a href="mailto:olivia.mcconnell@duke.edu" target="_blank">Contact Olivia</a></center>'
  },
  "exec-cfo": {
    name: "Peter Chacon",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Screenshot-2024-12-01-at-10.17.31-PM-Peter-Chacon.png",
    meta: "Senior",
    bio: 'Peter is a senior from Pittsburgh, Pennsylvania, majoring in Economics. This is his first year at DSG, where he serves as Chief Financial Officer (CFO). As DSG CFO, he connects SOFC and DSG, tracks the DSG Budget, and ensures clear, fair spending guidelines. This year, Peter’s main goals are to improve the budgetary statute request and tracking processes and communication between DSG and SOFC. He hopes to empower student groups and the undergraduate body by helping DSG use its resources effectively. <br><br><center><a href="mailto:peter.chacon@duke.edu" target="_blank">Contact Peter</a></center>'
  },
  "exec-cj": {
    name: "Maya Mishan Ezroni",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Maya-Mishan-Ezroni.jpg",
    meta: "Senior",
    bio: 'Maya is a senior from Great Neck, New York majoring in English. She is currently serving as Chief Justice of Duke Student Government Judiciary, where she manages Judiciary operations, oversees hearings, and works to make the Duke Constitution more accessible. This is her fourth year in DSGJ, where she has previously served as Associate Justice, Officer of Clerks, and Associate Chief Justice before becoming Chief Justice. This year, Maya’s two main goals are to increase awareness of DSGJ as a resource for students to advocate for themselves and to strengthen its connection with the broader Duke community. <br><br><center><a href="mailto:maya.mishanezroni@duke.edu" target="_blank">Contact Maya</a></center>'
  },
  "exec-vpaa": {
    name: "Brooke Revels",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/IMG_3902-Brooke-Revels-scaled.jpeg",
    meta: "Sophomore",
    bio: 'Brooke is a sophomore from Matthews, NC, studying Public Policy and English. This is her second year in DSG, and she previously served as a Senator for AA. On campus, she is involved in Duke Association for Business Oriented Women, AKPsi, Small Town Rural Student Coalition, and Kappa Kappa Gamma. This session, Brooke is dedicated to reducing cost barriers in academics, providing students with opportunities to explore professional interests, and listening to students` concerns about Duke`s academics. Outside of DSG, Brooke spends her time taking [Solidcore] and CorePower classes, reading a book, or finding trying different chai spots. <br><br><center><a href="mailto:brooke.revels@duke.edu" target="_blank">Contact Brooke</a></center>'
  },
  "exec-vpcl": {
    name: "Annie Nam",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/07/annie.jpg",
    meta: "Senior",
    bio: 'Annie Nam is a senior from Flowood, MS majoring in Biology and minoring in Chemistry and Asian & Middle Eastern Studies. She has been a Campus Life senator since freshman year after getting elected and is now the Vice President of CL. She was involved in projects such as Transparency of $5 Meals, Expansion of Equivalency Points, Residence Halls Lockout, Junior Jumpstart, Dukeline & Quadcare, Nan Xiang Express Perks, etc. AS VP of CL, Annie hopes to create a fun community not only within committee but also senate and foster connection across groups on campus. Annie strives to leave a positive long-lasting impact on the Duke community whether it is through a small or big difference. <br><br><center><a href="mailto:annie.nam@duke.edu" target="_blank">Contact Annie</a></center>'
  },
  "exec-vpdca": {
    name: "Noah Bean",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/DSC_8815-Noah-Bean-scaled.jpeg",
    meta: "Sophomore",
    bio: 'Noah is a sophomore from Henderson, NC studying Public Policy, Political Science, and Ethics. This is his second year in DSG, having previously served as a Senator and Associate Vice President for DCA. On campus, he is involved with Moot Court, Duke Policy Society, and the Kenan Institute for Ethics. Student voices are more important than ever before, and Noah is committed to using DSG as a catalyst for amplifying them. This session, Noah aims to bolster DSG’s civic engagement portfolio and build bridges between students and greater Durham. Off campus, you can find Noah at the farmers’ market, running downtown, or catching a Bulls game. <br><br><center><a href="mailto:noah.bean@duke.edu" target="_blank">Contact Noah</a></center>'
  },
  "exec-vpea": {
    name: "Victoria Knowles",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/04/IMG_9786-2-Victoria-K-scaled.jpg",
    meta: "Junior",
    bio: 'Victoria is a junior from Port of Spain, Trinidad and Tobago, studying Political Science with minors in Economics and Technology Policy. This is her second year in DSG, and she previously served as an Academic Affairs senator working on Duke Discover and Spring Groups Fair. On campus, she is involved in TEDxDuke, UNICEF, KAPI, and Bass Connections. As VP of Engagement and Advocacy, her goals are to amplify diverse student voices and events, highlight disability accessibility, showcase mental health resources, and reduce hidden costs in clubs, classes, and summer storage. Outside DSG, she enjoys pilates, trying new restaurants, and museums. <br><br><center><a href="mailto:victoria.knowles@duke.edu" target="_blank">Contact Victoria</a></center>'
  },
  "exec-vpsas": {
    name: "Jack Stapleton",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/2025-0915-Duke-OUSF_headshots-294_Jack_Stapleton-1-Jack-Stapleton-scaled.jpg",
    meta: "Sophomore",
    bio: 'Jack Stapleton is a sophomore from Greenville, South Carolina, studying Public Policy with a minor in Neuroscience and a certificate in Human Rights. Having previously served as a Senator and Associate Vice President for Services and Sustainability, Jack brings firsthand experience to his role as Vice President of SAS. He aims to build accessible, practical resources that equip senators with the support they need to execute projects and move pilots from idea to impact. Jack hopes to strengthen DSG`s internal infrastructure so every senator feels empowered to meaningfully serve the Duke community. <br><br><center><a href="mailto:jack.stapleton@duke.edu" target="_blank">Contact Jack</a></center>'
  }
};

var presCabinet = {
  "director-fgli": {
    name: "Ari Cook",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Ari-Cook.jpg",
    meta: "Senior",
    bio: "Ari Cook is a senior from rural Kansas studying Public Policy with a certificate in Child Policy Research. As a first-generation, low-income (FGLI), and independent student, Ari is passionate about building resources and culturally sensitive policies that support fellow FGLI students on campus. She channels this passion as President of Duke QuestBridge and Secretary of Duke Low-Income First Generation Engagement (LIFE). In the Presidential Cabinet, Ari is excited to improve existing institutional resources and develop new strategies to meet the FGLI community’s unique needs."
  },
  "director-iop": {
    name: "Ebony Kalin",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Ebony-Kalin.jpg",
    meta: "Junior",
    bio: "Ebony is a junior from Hāwera, New Zealand, majoring in Public Policy with a minor in History. This is her second year serving as DSG’s Director of International Policy and Outreach, where she works to ensure that international students stay informed and supported throughout their time at Duke. This year, Ebony’s two main goals are to make sure international students are informed about policy changes at the federal level and to communicate student sentiment and needs to Duke staff and administration."
  },
  "director-vsaa": {
    name: "Ellie Maddox",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Ellie-Maddox.jpg",
    meta: "Freshman",
    bio: "Ellie is a freshman from Sioux Falls, South Dakota, intending to major in Public Policy. In her first year on DSG, she serves as Director of Varsity Student-Athlete Affairs, working to strengthen the connection between DSG and Duke’s student-athlete community. This year, Ellie’s two main goals are to identify common concerns among student-athletes and to build stronger connections and a greater sense of community across Duke’s varsity sports. Through her work, she hopes to ensure student-athletes feel represented, supported, and connected to the broader Duke community."
  },
  "director-lgbtqia": {
    name: "Cooper Boyles",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Chapel-Headshot-Cooper-Boyles.jpeg",
    meta: "Freshman",
    bio: "Cooper is a freshman from Lincolnton, NC, planning to double major in Public Policy and Economics. This is his first year serving as the Director of LGBTQIA+ Affairs, where his two main goals are building a strong LGBTQIA+ student community at Duke and connecting the community with specific Duke resources they have access to. Cooper's previous role as a DCA Senator will aid him in also connecting Duke students to larger Durham community events."
  },
  "director-multicultural": {
    name: "Sid Milkuri",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Sid-Milkuri.jpg",
    meta: "Sophomore",
    bio: "Sid is a sophomore from Bentonville, Arkansas, majoring in Biology on the pre-med track. As Director of Multicultural Affairs, Sid wants to build unity across Duke by bringing students into each other's cultures. This year, he is focused on two goals: expanding the reach of every cultural group on campus, no matter its size, and creating more opportunities for those groups to collaborate."
  },
  "director-dra": {
    name: "Aditya Narayan",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Aditya-Narayan.jpg",
    meta: "Sophomore",
    bio: "Aditya is a sophomore from San Ramon, California, planning to major in Biology. This is his second year in DSG (he was a proud E&A senator last year!) and his first year in the Cabinet. He hopes to expand accessibility across campus spaces and services and to ensure that disabled students are included in conversations that affect them. Ultimately, he wants every student to feel that they belong and can fully participate in campus life."
  },
  "director-religious": {
    name: "Parishi Patel",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Parishi-Patel.jpg",
    meta: "Senior",
    bio: "Parishi is a senior from Mooresville, North Carolina, double majoring in Political Science and International Comparative Studies with a minor in Asian & Middle Eastern Studies. This is her second year as DSG's Director of Religious Life, where she serves as both a bridge and an advocate for religious life at Duke. Her main goals this year are to host meaningful interfaith events centered on service and activism and to create avenues for discussion and collaboration among religious communities, so that students feel represented, valued, and supported."
  },
  "director-gevp": {
    name: "Aashni Shah",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Aashni-Shah.jpg",
    meta: "Sophomore",
    bio: "Aashni is a sophomore from Shreveport, Louisiana studying neuroscience. She previously served as a DSG Engagement & Advocacy Senator, where she worked on initiatives including expanding access to period products on East & West Campus and organizing a campus Health Fair connecting students with wellness resources. She is passionate about creating a Duke community where students feel empowered to advocate for themselves and others. This year, Aashni hopes to build accessible resources, strengthen education around gender equity on campus, and create opportunities for more students to get involved in this work themselves."
  },
  "director-intercollegiate": {
    name: "Sabrina Shah",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Sabrina-Shah.jpg",
    meta: "Sophomore",
    bio: "Sabrina is a sophomore from Atlanta, Georgia, majoring in Psychology and pursuing a certificate in Child & Family Policy. She transferred to Duke after completing her first year at UNC Chapel Hill. This year, Sabrina’s main goals are to plan events and conferences that foster collaboration among the Triangle universities and to strengthen Duke’s relationships with student governments at other North Carolina colleges. She hopes to use her perspective as a transfer student to make an impact on Duke, other NC schools, and the greater Durham community."
  }
};

var opsTeam = {

  // OPERATIONS TEAM
  "ops-ag": {
    name: "Angeline Smith",
    photo: defaultPhoto,
    meta: "Senior",
    bio: "Stay tuned for Angeline's biography!"
  },
  "ops-hfo": {
    name: "Major Richmond",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Screenshot-2026-09-07-at-7.12.20-PM-Major-Richmond.webp",
    meta: "Junior",
    bio: "Major is obsessed with DSG and Duke. He is a junior Public Policy and Environmental Sciences student from the small town of New Hope, Pennsylvania. This is his first year serving in the new and exciting Head Fun Officer Operations role, also maintaining his role on the Services and Sustainability committee for a third year. On campus, Major is passionate about Few Quad, Men's and Women's Basketball, and the Laidlaw Scholars Program. He hopes to implement a DSG family system, encourage members to bond during late-night programming, and normalize tech-free, extravagant, and themed senates. He believes a fun DSG is a better DSG!"
  },
  "ops-cbo": {
    name: "",
    photo: defaultPhoto,
    meta: "",
    bio: ""
  },

  // COMMUNICATIONS TEAM

  "comms-director": {
    name: "Ally Douglas",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/DSC_1189-Duke-Student-Government-scaled.jpg",
    meta: "Junior",
    bio: "Alexandra is a junior from Pawleys Island, South Carolina, majoring in English with a minor in GSF Studies and a certificate in Child Policy Research. This is her second year serving as DSG's Communications Director, where she is in charge of managing DSG's social accounts, public appearances and relations, and digital and physical record-keeping. Before serving as Communications Director, Alexandra served as Co-Website Chair. This year, Alexandra hopes to revamp underutilized platforms such as LinkedIn and YouTube to reach a broader audience, as well as strengthen DSG's relationships with Duke and Durham media. Overall, Alexandra wants to inspire others to become engaged in the university and Durham community, with the ultimate goal of leaving DSG Comms (and Duke) better than she found it."
  },
  "comms-ad": {
    name: "Grace Thorp",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/IMG_3113_-_Grace_Thorp.jpg",
    meta: "Sophomore",
    bio: "Grace is a sophomore from Charleston, South Carolina planning to major in Political Science and Psychology. This is her first year on DSG, and she will be assisting the Communications Director with tracking engagement on the DSG Instagram and providing media coverage for elections. As Deputy Communications Director, her main goals for the year are to increase student accessibility/awareness of ongoing DSG initiatives, as well as contribute to correspondence across all of DSG's branches."
  },
  "comms-web": {
    name: "Benjamin Palmer",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Palmer-Benjamin-2-cropped.jpg",
    meta: "Sophomore",
    bio: "Ben is a sophomore from a small town in Connecticut, planning to declare a major in Political Science with a concentration in Law & Political Theory. He currently serves as a Senator for Campus Life and as DSG's Website Administrator, rebuilding and maintaining the organization's online presence. This year, he hopes to expand faculty-student engagement outside the classroom and to review outdoor seating across campus, creating more places where students can gather between classes. Through this work, he hopes Duke students come to see student government as accessible and responsive to everyday campus life."
  },
  "comms-news": {
    name: "Athena Aloupis",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/07/processed-D5F469BF-ED10-4010-A0F0-F3120D0A079D.jpeg",
    meta: "Senior",
    bio: "Athena is a senior from Cambridge, Massachusetts, studying Asian & Middle Eastern Studies and Economics. This is her second year serving as DSG’s Newsletter Chair, where she shares weekly updates and collaborates with campus organizations to keep students informed about DSG initiatives, events, and resources. This year, her goals are to make important information more accessible and to increase awareness of the many ways DSG can support and connect Duke students."
  },
  "comms-vid-linzi": {
    name: "Linzi Huang",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/09/DSCN1008-Linzi-Huang-scaled.jpeg",
    meta: "Sophomore",
    bio: "Linzi is a sophomore from Atlanta, Georgia, planning to major in Computer Science. This is her second year serving as the Editing Videographer Chair where she works to create engaging videos regarding DSG events and meetings. This year, Linzi’s two main goals are to expand the outreach of DSG events and encourage more of the student body to understand the behind the scenes workings of DSG."
  },
  "comms-vid-aayush": {
    name: "Aayush Gupta",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/IMG_2457-Aayush-Gupta.jpeg",
    meta: "Freshman",
    bio: "Aayush is a freshman from near Tampa, Florida   planning to major in Biomedical or Environmental Engineering. This is his first year in DSG where he serves as the Video and Filming Chair, working to create the most engaging videos to showcase what DSG is up to at all times. This year, Aayush’s 2 main goals are to create more engaging reels that showcase DSG to a wider audience and he hopes that those reels can bring forth more students to engage within campus life and come forth to speak out on issues that they care about."
  },
  "comms-design-lauren": {
    name: "Lauren Levinson",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Lauren-Levinson.jpg",
    meta: "Freshman",
    bio: "Lauren is a freshman from New York City considering a major in Sociology with a minor in Economics and a certificate in Markets & Management Studies. New to DSG, she brings experience in retail, art, consumer marketing, and digital content creation. As a Graphic Design Chair, she hopes to grow her passion for digital media into organizational promotion and learn from a talented, hardworking team. She aims to bring new ideas, energy, and a positive mindset to DSG, adding her creative touch to the Communications Team and beyond."
  },
  "comms-design-neena": {
    name: "Neena Atkins",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Neena-Atkins.jpg",
    meta: "Freshman",
    bio: "Neena is a freshman from Larchmont, New York, intending to major in Political Science and Spanish with a certificate in Markets & Management Studies. This is her first year with DSG, where she brings her passion for visual storytelling to the role of Graphic Design Chair. Her two main goals this year are to build a consistent visual brand for DSG that students instantly recognize across flyers, social media, and events, and to make Duke's student government feel approachable and visible through design."
  },
  "comms-design-angela": {
    name: "Angela Lee",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Angela-Lee.jpg",
    meta: "Freshman",
    bio: "Angela is a freshman from Queens, New York City, currently undeclared on the pre-dental track. This is her first year serving as one of DSG's Graphic Design Chairs. Her main goals are to keep the student body engaged and informed through fun, eye-catching graphics and to help maintain DSG's social media presence throughout the year."
  },
  "comms-design-jimin": {
    name: "Jimin Lee",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Jimin-Lee.jpg",
    meta: "Sophomore",
    bio: "Jimin is a sophomore from Portland, Oregon, planning to pursue a Program II degree focused on science communication and arts-in-health. This is her first year on the DSG Communications Team as a Graphic Design Chair specializing in logo design. She hopes to contribute creative, eye-catching logos and graphics while using design to strengthen DSG’s visual identity and foster a greater sense of cohesion across the organization."
  },
  "comms-photo-enzo": {
    name: "Enzo Bunag",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/1761189014946-Enzo-Bunag.jpeg",
    meta: "Sophomore",
    bio: "Enzo is a sophomore from Clarksburg, Maryland, studying Biomedical Engineering. This is his first year serving as one of DSG's Photography Chairs, documenting everything from Senate meetings to campus events, and he brings previous photography experience with The Chronicle. This year, Enzo's two goals are to capture the day-to-day life of DSG and to use photography to bring more coverage of DSG to the wider student body."
  },
  "comms-photo-sophia": {
    name: "Sophia Hernandez-Flores",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Sophia-Hernandez-Flores.jpg",
    meta: "Freshman",
    bio: "Sophia is a freshman from Clearwater, Florida, planning to major in Public Policy with a minor in Religious Studies. This is her first year serving as one of DSG’s Photography Chairs, where she captures and curates photos from DSG events, meetings, and the moments that make Duke’s student community unique. This year, Sophia’s two main goals are to highlight as many DSG events and initiatives as possible and to connect the student and administrative bodies through visual updates."
  },
  "comms-photo-rose": {
    name: "Rose Zhu",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Rose-Zhu.jpg",
    meta: "Freshman",
    bio: "Rose is a freshman from Lexington, South Carolina, planning to major in Neuroscience with a minor in Global Health. This is her first year serving as one of DSG's Photography Chairs, where she hopes to capture the energy of DSG events and highlight the people and ideas that make the organization meaningful. Her goals are to showcase DSG's impact across the Duke community and create a visual record that makes students feel included and excited to get involved."
  },
  "comms-photo-shravya": {
    name: "Shravya Kumar",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Shravya-Kumar.jpg",
    meta: "Freshman",
    bio: "Shravya is a freshman from Portland, Oregon, planning to major in Public Policy or Political Science with a minor in Economics. This is her first year serving as one of DSG's Photography Chairs, where she works closely with the Cabinet and committees to capture photos of DSG events for social media. This year, her two goals are to create a consistent look for the DSG Instagram and to make it easier for all students to stay updated on DSG events."
  },
  "comms-historian-johanna": {
    name: "Johanna Murphy",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/04/Screenshot-2025-11-18-at-5.36.32-PM-Johanna-Murphy.png",
    meta: "Senior",
    bio: "Johanna is a senior from Ridgewood, New Jersey majoring in Biology and History. This is her second year serving in the Historian Division, where she is working alongside the Junior Historians to make DSG's history, both path and present, more accessible to the student body as a whole and preserve institutional memory."
  },
    "comms-historian-jessie": {
    name: "Jessica LeBlang",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/2E0332C1-004E-43E5-BD88-D99FDAA82A8E_-_Jessica_LeBlang-scaled.jpg",
    meta: "Freshman",
    bio: "Jessica is a freshman from Boulder, Colorado planning to major in Biology and Global Health. This is her first year serving as DSG’s Junior Historian of Special Projects, where she preserves and shares the organization's institutional memory. This year, Jessica aims to create engaging social media content highlighting DSG's history and make archive resources more accessible to all students. She hopes to help the Duke community better understand DSG’s legacy while making its history fun and informative."
  },
    "comms-historian-story": {
    name: "Story Lim",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/Screenshot-2026-08-30-at-3.24.45-PM-Story-Lim.webp",
    meta: "Freshman",
    bio: "Story is a freshman from Pasadena, California intending to major in Public Policy and minor in Journalism and Media. This is her first year on DSG, but has worked with student government all throughout high school. Story hopes to increase DSG alumni and student communication and continue to strengthen the relationship between current and graduated Blue Devils. She hopes to collect stories from Duke alumni that will inspire current students to continue to pursue their passions."
  },
    "comms-historian-mallika": {
    name: "Mallika Vairavan",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/MallikaVairavanHeadshot-Mallika-Vairavan-scaled.jpeg",
    meta: "Sophomore",
    bio: "Mallika is a sophomore from Los Angeles, California, intending to major in Art History with a concentration in Museum Theory and Practice. This is her first year serving as a Junior Historian for Archive Curation. Mallika is excited to contribute to DSG in a way that preserves its history and makes it widely accessible for past and future students. Through this role, she hopes to gain more experience in collating an archive while making it exciting and engaging for people to dive into."
  },
    "comms-historian-sierck": {
    name: "Sydney Sierck",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/DSC_5625-Sydney-Sierck-scaled.jpeg",
    meta: "Sophomore",
    bio: "Sydney is a sophomore from Aurora, Colorado, planning to major in Political Science. This is her first year in DSG, where she serves as the Junior Historian for Visual Media.  As Junior Historian, her primary goal is to collaborate with the Communications Team to increase DSG's visibility and engagement across all campus media platforms. She also hopes to make DSG's initiatives more transparent and accessible to the student body and emphasize the visual history of DSG's projects."
  },

  // FINANCE

  "ops-cfo": {
    name: "Peter Chacon",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Screenshot-2024-12-01-at-10.17.31-PM-Peter-Chacon.png",
    meta: "Senior",
    bio: 'The Chief Financial Officer is responsible for overseeing DSG’s finances and supervising the Treasurer and SOFC Chair, leading financial planning for major DSG-funded events, and setting long-term funding policy through surplus planning and budgetary statutes. They also serve as the primary financial resource for DSG members and student organizations, educating the body on financial systems and advising groups navigating funding challenges. <br><br><center><a href="https://dukestudentgovernment.org/organizational-leadership-team/#exec-cfo" target="_blank">Learn more about Peter!</a></center>'
  },
  "ops-treasurer": {
    name: "Ella Carson",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/headshot-Ella-C-scaled.jpg",
    meta: "Sophomore",
    bio: "Ella is a sophomore from Chapin, South Carolina intending to major in Public Policy with a minor in Economics and a certificate in Child Policy Research. Now in her second year in DSG, she previously served as a Campus Life Senator, with her projects being focused on healthcare accessibility for students on East Campus. This year, Ella aims to both promote University-wide financial transparency within DSG and make funding more accessible by holding office hours and simplifying the application process. She hopes her efforts toward financial transparency will have a lasting impact, making funding both accessible and fun!"
  },

  // RESEARCH

  "research-director": {
    name: "Ana Despa",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/Profile-Pic-Ana-Despa.jpg",
    meta: "Senior",
    bio: "Ana is a senior from Lexington, Kentucky majoring in Biomedical Engineering. She is the director of DSG's research unit, which collects and analyzes relevant data for use by DSG for the foundation of projects and initiatives. The research unit is new for session 33. By the end of the session, the unit hopes to standardize effective research methods across DSG that can be used to better understand the Duke student experience and create valuable DSG projects."
  },
  "research-ad-1": {
    name: "Anson Stine",
    photo: defaultPhoto,
    meta: "",
    bio: ""
  },
  "research-ad-2": {
    name: "Esha Kalikiri",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Esha-Kalikiri.jpg",
    meta: "Sophomore",
    bio: "Esha is a sophomore majoring in Psychology on a pre-medical track. She is from Cherry Hill, New Jersey. This is her second year serving as a Senator on the Academic Affairs Committee, and her first year serving as Deputy Research Director for Student Government. She wants to ensure that all students have equal access to academic resources and opportunities at Duke. She also hopes to help fellow Senators implement projects and initiatives by backing them with research and student body opinions. Overall, she envisions Duke to be an inclusive and fair space for everyone."
  },


  // SPECIAL PROGRAMS

  "ops-dsp": {
    name: "Labiba Siddiquei",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Labiba-Siddiquei.jpg",
    meta: "Junior",
    bio: "Labiba Siddique is a junior from Astoria, New York, majoring in biology and minoring in chemistry, with a sustained focus on cancer research. Committed to student advocacy and systemic support, Labiba previously served as the Presidential Cabinet's Director of First-Generation and Low-Income Students and currently serves as the Director of Special Programs on the Operations Team. Building on her past work, she continues to establish the institutional infrastructure for the Devil's Dresser Initiative and the Karsh Students Advisory Board. In her current role, she looks forward to working with DSG's internal processes and events, including hosting the multicultural organizations dinner, recruitment info sessions, student inauguration, and many fun events and BC pop-ups featuring student organizations and initiatives. Throughout her tenure, Labiba remains dedicated to strengthening operations, building connections between DSG and student organizations, and providing systematic support."
  },
  "ops-ddsp": {
    name: "Michelle Belakh",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Screenshot-2026-08-30-at-8.28.52-PM-Michelle-Belakh.png",
    meta: "Sophomore",
    bio: "Michelle Belakh is a sophomore from New York City, planning to major in Sociology/Public Policy, with a minor in Spanish. She serves as DSG’s Deputy Director of Special Programs. Michelle’s two goals in this role are to turn student interests into reality and to bring together students and communities that might not otherwise cross paths. As a transfer student, Michelle hopes to bring a unique perspective to DSG’s programming, create events that students are genuinely excited to put on their calendars, and make it easier for them to discover the communities and experiences that help them find their place at Duke."
  }
};

//LEGISLATIVE BRANCH

var senateStaff = {
  "staff-sots": {
    name: "Olivia McConnell",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/McConnellO2-scaled.jpg",
    meta: "Senior",
    bio: 'The Speaker of the Senate is responsible for administering proceedings and maintaining order in the Senate. This includes controlling the legislative agenda, managing floor debate, and administering the oath of office. <br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#senatespeaker" target="_blank">Learn more about Olivia!</a></center>'
  },
  "staff-secretary": {
    name: "Vacant",
    photo: defaultPhoto,
    meta: "",
    bio: defaultBio
  },
  "staff-parliamentarian": {
    name: "Vacant",
    photo: defaultPhoto,
    meta: "",
    bio: defaultBio
  }
};

var senators = {

  //ACADEMIC AFFAIRS

  "generic-vpaa": {
    name: "Brooke Revels",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/IMG_3902-Brooke-Revels-scaled.jpeg",
    meta: "Sophomore",
    bio: 'The Vice President of the Academic Affairs committee is responsible for leading their committee and assisting with projects, managing the DSG policy agenda, and serving as the chief advocate and administrative contact for their committee. <br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#vpaa" target="_blank">Learn more about Brooke!</a></center>'
  },
  "senator-massimo-reali": {
    name: "Massimo Reali",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/Screenshot-2026-08-03-at-7.28.21-PM-Massimo-R.png",
    meta: "Sophomore",
    bio: "Massimo is a sophomore from Harrison, New York, majoring in Biomedical Engineering with a minor in Chemistry and a certificate in Health Policy. This is his second year serving on DSG's Academic Affairs Committee as a Senator, where he works to ensure that all students are aware of hidden costs behind academic resources, research accessibility, and education policy that supports uplifting students who matriculate to Duke from underserved communities. This year, Massimo strives to continue his work on designing a universal Research website for undergraduates to have easier access to all research opportunities here at Duke and improve mentorship and communication between the DSG Academic Affairs committee."
  },
  "senator-abigail-lau": {
    name: "Abigail Lau",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/Abigail-Lau-photo-YH-Lau.png",
    meta: "Sophomore",
    bio: "Abigail is a sophomore and international student from Hong Kong, majoring in Public Policy. This is her second year serving in DSG, and she aims to represent international student voices within DSG. She is also a student-athlete, a fencer, here at Duke. She hopes that through DSG, Duke will become an inclusive, vibrant community that lets all cultures shine."
  },
  "senator-james-nguyen": {
    name: "James Nguyen",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-James-Nguyen.jpg",
    meta: "Freshman",
    bio: "James is a freshman from Las Vegas, Nevada, planning to study Public Policy with a minor in Education. This is his first year in DSG, serving as a Senator for Academic Affairs. On campus, he is involved with Duke Democrats, the Student Voting Rights Lab, and the DeWitt Wallace Center for Media & Democracy. This year, James is devoted to expanding access to academic support for students, creating clearer pathways for student-professor mentorship, and channeling student suggestions into new academic reform. At Duke, he hopes to build a school culture where students have the support, voice, and power to shape campus-wide policies and initiatives."
  },
  "senator-jackson-ogden": {
    name: "Jackson Ogden",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/headshot_jackson_ogden-scaled.jpg",
    meta: "Freshman",
    bio: "Jackson is a freshman from West Chester, Pennsylvania, planning to complete a Program II major in Molecular Biochemistry and Biophysics. As a Senator for Academic Affairs and a prospective professor, Jackson is particularly excited about understanding and shaping the undergraduate education experience for every student at Duke. To accomplish this, his two main goals are to improve the accessibility and transparency of the course catalog website and to reshape the FOCUS application timeline to be fair and equitable for all students."
  },
  "senator-bridget-anthony": {
    name: "Bridget Anthony",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Bridget-Anthony.jpg",
    meta: "Freshman",
    bio: "Bridget is a freshman from Cornelius, North Carolina, intending to study Public Policy, with interests in neuroscience, technology, and disability policy. This is her first year serving in DSG, where her goals are to improve the accessibility of information about academic resources and make Duke’s systems easier for students to navigate. Through DSG, she hopes to contribute to a more accessible, transparent, and student-centered Duke."
  },
  "senator-shreya-aravind": {
    name: "Shreya Aravind",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/headshot_shreya_aravind.png",
    meta: "Sophomore",
    bio: "Shreya is a sophomore from Sacramento, California, majoring in Public Policy and Political Science with a certificate in Human Rights. This is her first year serving as a Senator for the Academic Affairs Committee, where she works to represent student perspectives on academic life and advocate for a stronger student experience. This year, Shreya hopes to improve communication between students and university leadership and expand opportunities for students to share their academic concerns. She hopes to make Duke a more responsive and inclusive community where every student feels heard."
  },
  "senator-amelie-calamia": {
    name: "Amelie Calamia",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/1000000608-Amelie-Calamia-scaled.jpg",
    meta: "Sophomore",
    bio: "Amelie is a sophomore majoring in Mechanical Engineering with a minor in Philosophy and a certificate in Ethics. She grew up in Massachusetts but has spent the last six years in Washington State. She is involved in AFROTC and the Aviation Club alongside serving as a Senator in Academic Affairs. This session, Amelie is hoping to advocate for students' academic needs and help create meaningful opportunities for students to engage with and improve their academic experience at Duke."
  },
  "senator-charlee-chandler": {
    name: "Charlee Chandler",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Charlee is a freshman from Rehobeth, Alabama, planning to study Biomedical Engineering and Neuroscience. This is her first year in DSG, serving on the Academic Affairs Committee. This year, she's focused on making academic resources and research opportunities easier to find and access, bringing more clarity to course registration and advising, and helping students from every background navigate what Duke has to offer. Through DSG, she hopes to help create an academic environment where every student has the support and opportunities they need to thrive."
  },
  "senator-jonathan-fromm": {
    name: "Jonathan Fromm",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Jonathan-Fromm.jpg",
    meta: "Sophomore",
    bio: "Jonathan is a sophomore from New Jersey, planning to major in Economics and Political Science. This is his second year serving as a Senator for Academic Affairs, where he is committed to improving students’ academic experiences and expanding access to academic resources at Duke."
  },
  "senator-esha-kalikiri": {
    name: "Esha Kalikiri",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/C2B82882-F1D2-4115-A1F8-D879F0D2D0F9-Esha-Kalikiri.jpeg",
    meta: "Sophomore",
    bio: "Esha is a sophomore majoring in Psychology on a pre-medical track. She is from Cherry Hill, New Jersey. This is her second year serving as a Senator on the Academic Affairs Committee, and her first year serving as Deputy Research Director for Student Government. She wants to ensure that all students have equal access to academic resources and opportunities at Duke. She also hopes to help fellow Senators implement projects and initiatives by backing them with research and student body opinions. Overall, she envisions Duke to be an inclusive and fair space for everyone."
  },
  "senator-rhea-nirmal": {
    name: "Rhea Nirmal",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Rhea-Nirmal.jpg",
    meta: "Freshman",
    bio: "Rhea is a freshman from Chantilly, Virginia, planning to major in Economics and Computer Science. This is her first year serving in DSG as a Senator for Academic Affairs, where she plans to make interdisciplinary academic exploration more accessible and improve the technology students use to navigate their academic experience. She hopes to make it easier for students to discover courses and opportunities across different departments while making Duke’s academic websites and digital resources more intuitive and streamlined. Through her work in DSG, Rhea hopes to help create an academic community where students feel empowered to explore their interests, find the resources they need, and make the most of their time at Duke."
  },
  "senator-luke-alberts": {
    name: "Luke Alberts",
    photo: defaultPhoto,
    meta: "Sophomore",
    bio: "Luke is a sophomore from Carmel, Indiana, planning to major in History. This is his first year serving as a Senator on the Academic Affairs Committee. This year, his primary goals are to make archival materials housed in the Duke library system more accessible to students and to bring transparency to course registration. He hopes to make academic policy at Duke more student-centered and make additional resources available to the Duke community."
  },
  "senator-alex-den": {
    name: "Alex Den",
    photo: defaultPhoto,
    meta: "Sophomore",
    bio: "Alex is a sophomore from Denver, Colorado planning to major in Neuroscience with a minor in Chemistry and a certificate in Health Policy. Having previously served in DSG, he is excited to continue supporting the Duke community. This year, he hopes to increase awareness of DSG resources and opportunities among students and contribute to projects that improve the overall student experience at Duke. Through his role, he hopes to foster a more connected, engaged, and supportive campus community."
  },
  "senator-ahilan-eraniyan": {
    name: "Ahilan Eraniyan",
    photo: defaultPhoto,
    meta: "Senior",
    bio: "Stay tuned for Ahilan's biography!"
  },
  "senator-muskan-jhaveri": {
    name: "Muskan Jhaveri",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/headshot_muskan_khaveri.png",
    meta: "Freshman",
    bio: "Muskan is a freshman from Mumbai, India, planning to double major in History and Political Science with a certificate in Innovation and Entrepreneurship. This is her first year serving as a Senator for Academic Affairs. This year, she plans to make course registration more accessible and improve academic resources for students navigating majors and career pathways, especially in the humanities. Through DSG, she hopes to make Duke's academic environment more connected, supported, and transparent."
  },

  //CAMPUS LIFE

  "generic-vpcl": {
    name: "Annie Nam",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/07/annie.jpg",
    meta: "Senior",
    bio: 'The Vice President of the Campus Life committee is responsible for leading their committee and assisting with projects, managing the DSG policy agenda, and serving as the chief advocate and administrative contact for their committee.<br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#vpcl" target="_blank">Learn more about Annie!</a></center>'
  },
  "senator-aastha-patel": {
    name: "Aastha Patel",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/IMG_7757-Aastha-Patel.jpeg",
    meta: "Sophomore",
    bio: "Aastha is a sophomore from Hickory, NC, planning to major in Economics and Public Policy. Last year, she served as a Senator for Campus Life and is now serving as Associate Vice President. This year, Aastha's main objectives for Campus Life are to promote initiatives focused on fostering equity and addressing student concerns. Ultimately, she hopes to better student life on campus and boost student engagement with DSG."
  },
  "senator-eve-neimeth": {
    name: "Eve Neimeth",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Eve-Neimeth.jpg",
    meta: "Freshman",
    bio: "Eve is a freshman from New York City, planning to major in Environmental or Marine Science. This is her first year serving as a Senator for Campus Life, where she works to ensure all students' needs are heard and requests are considered through community outreach, clear communication, and accessible leadership. This year, Eve's two main goals are to add laundry products, including detergent and dryer sheets, to vending machines on East Campus and to advocate for wellness and mental health days for the Duke community."
  },
  "senator-ben-palmer": {
    name: "Benjamin Palmer",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Palmer-Benjamin-2-cropped.jpg",
    meta: "Sophomore",
    bio: "Ben Palmer is a sophomore from a small town in Connecticut, planning to declare a major in Political Science with a concentration in Law & Political Theory. He currently serves as a Senator for Campus Life and as DSG's Website Administrator, rebuilding and maintaining the organization's online presence. This year, he hopes to expand faculty-student engagement outside the classroom and to review outdoor seating across campus, creating more places where students can gather between classes. Through this work, he hopes Duke students come to see student government as accessible and responsive to everyday campus life."
  },
  "senator-brecher-sorin": {
    name: "Brecher Sorin",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/IMG_4474-Brecher-Sorin.jpeg",
    meta: "Junior",
    bio: "Brecher Sorin is a junior from Frisco, Texas. He is an Economics and Public Policy double-major, with a minor in Psychology. In the past, he was the Legislative Outreach Coordinator and one of the Co-Presidents for Blue Devil Buddies. He is excited to work on projects for the Campus Life Committee!"
  },
  "senator-marius-terenti": {
    name: "Marius Terenti",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Marius-Terenti.jpg",
    meta: "Freshman",
    bio: "Marius is a freshman who was born and raised in Moldova before moving to Chicago. He is planning to major in Math and Sociology. This is his first year serving as a Senator for Campus Life, where he works to foster a fun community for everyone. This year, Marius' two main goals are to advocate for students' needs and to work on new projects that give students more opportunities to get involved."
  },
  "senator-sophia-campbell": {
    name: "Sophia Campbell",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Sophia-Campbell.jpg",
    meta: "Freshman",
    bio: "Sophia is a freshman from Potomac, Maryland, planning to major in Public Policy on the pre-law track. This is her first year serving in DSG, and she hopes to contribute meaningfully to the Duke community through projects, initiatives, and outreach. This year, Sophia’s two main goals are to foster a welcoming and inclusive campus community and to increase participation in campus activities by centralizing and streamlining event communication."
  },
  "senator-diyar-demirkol": {
    name: "Diyar Demirkol",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/IMG_3092-2-diyar-sara.jpg",
    meta: "Sophomore",
    bio: "Stay tuned for Diyar's biography!"
  },
  "senator-grace-hamm": {
    name: "Grace Hamm",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Grace-Hamm.jpg",
    meta: "Freshman",
    bio: "Grace is a freshman from Cincinnati, Ohio, planning to major in Public Policy and Economics. She is excited to be serving as a Senator on the Campus Life Committee, where she can't wait to work on campus events and legislation. This year, Grace's main goals are to learn the ropes of DSG and work on projects that strengthen the Duke community and increase student participation in DSG events!"
  },
  "senator-justin-ibrahim": {
    name: "Justin Ibrahim",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Justin-Ibrahim.jpg",
    meta: "Freshman",
    bio: "Justin is a freshman from Alexandria, Egypt, currently living in Winston-Salem, North Carolina, planning to major in Global Health and Economics. This is his first year serving as a Senator for Campus Life, where he works to ensure that all students feel at home at Duke. This year, Justin’s two main goals are to establish a better QuadEx connection between West and East Campus and to help create new events that bring students together into a tight-knit community."
  },
  "senator-alex-terpstra": {
    name: "Alex Terpstra",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/IMG_8536.jpeg",
    meta: "Freshman",
    bio: "Alex is a freshman from Berkeley Heights, New Jersey, planning to double major in History and Economics. Alex serves as a Senator for Campus Life and hopes to improve the everyday student experience by making campus resources more accessible and responsive to student needs. He hopes to leave Duke a more connected and welcoming community where students feel heard and supported."
  },
  "senator-faith-you": {
    name: "Faith You",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/DSC01566-Faith-You-scaled.jpeg",
    meta: "Sophomore",
    bio: "Faith You is a sophomore pursuing a Program II degree focused on health equity in rural America. She's originally from Missoula, MT, and this is her second year serving as a Senator for the Campus Life committee. Last year, she worked on making the testing center more accessible and easy to find. This year, she hopes to be more involved in forming bonds with her committee and address ongoing issues on campus."
  },
  "senator-timi-akinyele": {
    name: "Timi Akinyele",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/02/Timi-Akinyele-Headshot-Timi-Akinyele.jpg",
    meta: "Sophomore",
    bio: "Stay tuned for Timi's biography!"
  },
  "senator-gabrielle-mclain": {
    name: "Gabrielle McLain",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/10/6198FFBD-C716-4D5E-BD3B-E2908F9D4437_1_201_a-Gabrielle-McLain.jpeg",
    meta: "Sophomore",
    bio: "Gabrielle is a sophomore from Upper Saddle River, New Jersey, and this is her second year serving as a Senator on the Campus Life Committee. While her major is currently undeclared, she plans to pursue her passion for social impact and advocacy through the humanities. These interests also shape her Campus Life projects, where she has led initiatives to increase physical accessibility on campus and to ensure that DSG prioritizes equity in meeting the needs of all students. This year, she hopes to continue this work by expanding opportunities for student input on DSG projects and enhancing campus resources that help students feel both safe and seen."
  },
  "senator-kaylyn-oh": {
    name: "Kaylyn Oh",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/07/Oh-Kaylyn.jpeg",
    meta: "Senior",
    bio: "Kaylyn is a senior from Orange County, California, studying Public Policy with a minor in Journalism and Media. This is her fourth year as a CL Senator where she has worked on various DSG initiatives. She co-founded the Free Airport Transportation Initiative as well as the Water Access in Residence Halls project. This year, Kaylyn is excited to continue working on meaningful projects and contribute to the Duke community."
  },
  "senator-rhianna-scott": {
    name: "Rhianna Scott",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/09/DSC_5950-Rhianna-Scott-scaled.jpg",
    meta: "Sophomore",
    bio: "Rhianna Scott is a sophomore from Newark, NJ planning to major in Neuroscience. She has previously worked on projects including: Feed Every Devil Awareness and Exchange, Few Water Access, Healthcare Vending Machine in Trinity Cafe, and East Campus Prescription Delivery. This year she hopes to improve the lives of Duke Students and collaborate with other senators to complete projects. Additionally, she hopes to have a positive and #inspiring impact on the Duke Community. "
  },
  "senator-bolton-bazile": {
    name: "Bolton Bazile",
    photo: defaultPhoto,
    meta: "Junior",
    bio: "Stay tuned for Bolton's biography!"
  },

  // DURHAM & COMMUNITY AFFAIRS

  "generic-vpdca": {
    name: "Noah Bean",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/DSC_8815-Noah-Bean-scaled.jpeg",
    meta: "Sophomore",
    bio: 'The Vice President of the Durham and Community Affairs committee is responsible for leading their committee and assisting with projects, managing the DSG policy agenda, and serving as the chief advocate and administrative contact for their committee.<br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#vpdca" target="_blank">Learn more about Noah!</a></center>'
  },
  "senator-chloe-whitbread": {
    name: "Chloe Whitbread",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/chloe-whitbread.png",
    meta: "Sophomore",
    bio: "Chloe is a sophomore from York, Maine, studying Public Policy. This is her second year in DSG, having previously served as a Senator for Engagement and Advocacy. On campus, Chloe is involved with the Duke Policy Society, Bass Connections, and is an Alice M. Baldwin Scholar. Chloe is passionate about making Duke an integral part of the Durham Community and ensuring that Duke students have the tools and resources to engage citizens. Chloe is ecstatic about the improvements that can be made to the Duke community and beyond!"
  },
  "senator-jo-lee": {
    name: "Jo Lee",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Jo-Lee.jpg",
    meta: "Freshman",
    bio: "Jo is a freshman from Glen Rock, New Jersey, planning to major in Public Policy. This is her first year serving as a Senator for Durham and Community Affairs, where she hopes to increase civic engagement throughout Durham and encourage Duke students to interact with more local businesses and organizations. She aims to get Blue Devils out into the city they live in more often, strengthening the bonds between the university and its local community."
  },
  "senator-julia-mueller": {
    name: "Julia Mueller",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Julia-Mueller.jpg",
    meta: "Freshman",
    bio: "Julia is a freshman from Knoxville, Tennessee, planning to double major in Public Policy and Music, potentially with a certificate in Child and Family Policy. This is her first year as a Senator for Durham and Community Affairs, where she hopes to foster more conversation between Duke students and Durham residents and encourage students to get off campus and pop the Duke bubble. Through her efforts, she hopes to get students more engaged in the community and improve Duke’s reputation with Durham residents."
  },
  "senator-alex-atkins": {
    name: "Alex Atkins",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Alex-Atkins.jpg",
    meta: "Sophomore",
    bio: "Alex is a sophomore from Chapel Hill, North Carolina, planning to double major in Public Policy and History. This is her first year serving on the Durham and Community Affairs Committee, where she works to bridge the connection between the Duke and Durham communities. This year, Alex hopes to increase voter engagement among Duke students for the midterm elections and help expand existing projects like Democracy Day, keeping the Duke community informed on and involved with North Carolina elections and politics."
  },
  "senator-cooper-boyles": {
    name: "Cooper Boyles",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Cooper-Boyles.jpg",
    meta: "Freshman",
    bio: "Cooper is a freshman from Lincolnton, North Carolina, planning to major in Public Policy with a minor in Education. This is his first year serving as a Senator on the Durham and Community Affairs Committee, where he works to minimize the “Duke bubble” effect that shapes Duke-Durham interaction. Through DSG, Cooper’s main goal is to encourage students to explore, support, and engage with the Durham community."
  },
  "senator-harrison-burkhardt": {
    name: "Harrison Burkhardt",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Harrison-Burkhardt.jpg",
    meta: "Freshman",
    bio: "Harrison is a freshman from Johnston, Iowa, currently planning to study Neuroscience on the pre-health track. This is his first year serving on the Durham and Community Affairs Committee, and he is excited to work closely with Duke and Durham community leaders to help bridge the gap between the university and the city of Durham. In addition to DSG, Harrison is a Robertson Scholar and sings in the Duke Chorale. Outside of school, Harrison enjoys hiking, running, reading, and playing spikeball with friends."
  },
  "senator-josh-duby": {
    name: "Josh Duby",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/Josh-Duby-Photo-Josh-Duby-rdddwv8ni6yhroh64v63he75dp4ya2n3d68ayg1k0w.png",
    meta: "Sophomore",
    bio: "Josh is a sophomore from Deerfield, Illinois, majoring in Economics and Public Policy. As a second year Senator of Durham and Community Affairs, he is interested in continuing to foster opportunities for collaboration between the Duke and Durham communities. Beyond DSG, Josh is a Robertson Scholar and spends his time consulting for Israeli companies through TAMID, serving on the Jewish Student Union board, and volunteering in Durham. In his free time, he enjoys cheering on Duke and Boston sports, playing golf and pickleball with friends, baking, and watching movies."
  },
  "senator-katarina-ousback": {
    name: "Katarina Ousback",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Katarina-Ousback.jpg",
    meta: "Freshman",
    bio: "Katarina is a freshman from Scarborough, Maine, planning to major in Public Policy and Economics. This is her first year serving as a Senator on the Durham and Community Affairs Committee, where she helps foster community service, connect students with Durham, and strengthen relationships with local universities and governments. Her goals are to expand opportunities for students to engage with Durham, break the “Duke bubble,” and encourage greater civic involvement by increasing student participation in local and state politics. She hopes to help build a stronger connection between Duke and the Durham community."
  },
  "senator-vishaan-patel": {
    name: "Vishaan Patel",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Vishaan-Patel.jpg",
    meta: "Freshman",
    bio: "Vishaan is a freshman from Shaker Heights, Ohio, planning to major in Public Policy. This is his first year serving as a Senator for Durham and Community Affairs, where he works to bridge the divide between the Duke student body and the wider Durham community. This year, he's excited to develop more programming to help students be more politically engaged and aware, and to address the transportation barrier that prevents many students from exploring Durham."
  },
  "senator-julia-sanders": {
    name: "Julia Sanders",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/DSC_0591.jpeg",
    meta: "Freshman",
    bio: "Julia is a freshman from Sacramento, California, studying Political Science and Environmental Science. This is her first year in DSG, where she serves as a Senator for Durham and Community Affairs. On campus, she is involved with The Chronicle and club soccer, and works as both a student tour guide and a ceramics studio assistant at the Arts Annex. The relationship between Duke and Durham is incredibly important to her, and she wants to use DSG to foster and improve it. This session, Julia aims to increase student presence off campus and student participation in Durham community issues. Off campus, you can find Julia painting, throwing on the wheel, or reading."
  },
  "senator-mary-davisson": {
    name: "Mary Davisson",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Mary-Davisson.jpg",
    meta: "Freshman",
    bio: "Mary is a freshman from Aiken, South Carolina, intending to major in Biology with minors in Economics and Spanish. This is her first year serving as an Ad Hoc Senator for the Durham and Community Affairs Committee, where she hopes to bring volunteer opportunities closer to Duke students and assist with poverty initiatives in the Durham community. On campus, Mary is also involved with The Chronicle, Women's Club Soccer, and The Backpack Project. Mary cannot wait to serve the Duke and Durham community this year!"
  },
  "senator-cina-huston": {
    name: "Cina Huston",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Cina-Huston.jpg",
    meta: "Freshman",
    bio: "Cina is a freshman from Surf City, North Carolina, planning to major in Mechanical Engineering. This is her first year serving as a DSG Senator, where she works on the Durham and Community Affairs Committee to ensure students experience the beauty and community that come with living in Durham. This year, Cina’s main goal is to find ways to bridge Duke with Durham, eliminating the stigma and fears that can come with leaving the Duke bubble."
  },
  "senator-charlie-november": {
    name: "Charlie November",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/thumbnail_image-rby0f7e3m7ojgs21a2qdijmbxzodex21kjh7uzc5uo.jpg",
    meta: "Senior",
    bio: "Charlie is a senior from Belmont, Massachusetts, majoring in Economics with a minor in Philosophy. This is his second year serving as a Senator for Durham and Community Affairs, where he co-leads the Duke Community Cycle Share Program, which provides free bikes to students, and heads the DPAC Program, which gives students the chance to see DPAC shows for free. This year, Charlie's two main goals are to expand the Cycle Share Program and to continue strengthening the relationship between DSG and Greek Life at Duke."
  },

  // ENGAGEMENT AND ADVOCACY

  "generic-vpeaa": {
    name: "Victoria Knowles",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/04/IMG_9786-2-Victoria-K-scaled.jpg",
    meta: "Junior",
    bio: 'The Vice President of the Engagement and Advocacy committee is responsible for leading their committee and assisting with projects, managing the DSG policy agenda, and serving as the chief advocate and administrative contact for their committee.<br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#vpea" target="_blank">Learn more about Victoria!</a></center>'
  },
  "senator-laith-alhamid": {
    name: "Laith Alhamid",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/Screenshot-2025-10-18-004632-rddfwhjy8r00e2g0xbnqytkitm4rrtytjnp6cfunxc.png",
    meta: "Sophomore",
    bio: "Laith is a sophomore from St. Louis, Missouri, planning to study Biology, Economics, and Health Policy. He previously served as a senator on E&A. He hopes to increase accessibility to resources for FGLI students and foster a more inclusive community as a whole for all Duke students."
  },
  "senator-brooke-bresnan": {
    name: "Brooke Bresnan",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Brooke is a freshman from Woodstock, Georgia, planning to major in Public Policy. This is her first year serving as a Senator for the Engagement & Advocacy Committee! This year, Brooke's two main goals are to bring free period products to East Campus to combat period poverty and to advocate for low-income students on campus, ensuring all of their needs are met. Brooke hopes that through her position in DSG she can help build a more connected and positive Duke community."
  },
  "senator-jeshwant-vana": {
    name: "Jeshwant Vana",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Jesh is a freshman from Memphis, Tennessee, planning to double major in Economics and Public Policy with a minor in Global Health. This is his first year serving as an elected Senator for Engagement and Advocacy, where he works to ensure that students’ voices are heard and that they are connected to the opportunities available on Duke’s campus. This year, Jesh’s two main goals are to make Duke more accessible to all students, especially freshmen navigating their first year, and to engage with Duke’s DEI initiatives and the cultural diversity found throughout the university. Jesh hopes his work will help every student, regardless of gender, race, or identity, feel as welcome and included as he has during his time at Duke."
  },
  "senator-elena-costa": {
    name: "Elena Costa",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Elena is a freshman from Miami, Florida, planning to major in Public Policy and Theater Studies. This is her first year in DSG, where she serves as a Senator for Engagement and Advocacy. In this role, she is focused on strengthening student engagement and helping students find communities, organizations, and resources that align with their interests and identities."
  },
  "senator-aayuska-luitel": {
    name: "Aayuska Luitel",
    photo: defaultPhoto,
    meta: "Sophomore",
    bio: "Aayuska is a sophomore from Raleigh, North Carolina, planning to major in Economics and Public Policy. This is her second year serving as a Senator for Engagement and Advocacy, where she works to highlight and give space to marginalized groups on Duke's campus. This year, she plans to work further with Duke student groups to help amplify their voices and impact."
  },
  "senator-vennela-malireddy": {
    name: "Vennela Malireddy",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Vennela is a freshman from Shreveport, Louisiana, planning to major in Public Policy with a certificate in Health Policy. This is her first year serving as a Senator for Engagement and Advocacy. Her two main goals are to improve access to mental health resources across campus and to create more events focused on students’ mental health. She also hopes to focus on DSG initiatives shaped by what students actually want and need."
  },
  "senator-jaya-melville": {
    name: "Jaya Melville",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Jaya-Melville.jpg",
    meta: "Sophomore",
    bio: "Jaya is a sophomore from Vancouver, Canada, planning to major in Biology with a minor in Economics. This is her first year serving as a Senator for Engagement and Advocacy, where she is committed to creating a more inclusive community at Duke."
  },
  "senator-daniel-nunez": {
    name: "Daniel Nuñez",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Daniel-Nunez.jpg",
    meta: "Sophomore",
    bio: "Daniel is a sophomore from Hialeah, Florida, majoring in Political Science with minors in Economics and English. He serves as a Senator on the Engagement & Advocacy Committee, where he works to connect students with DSG and make sure their concerns reach the people who can act on them. This year, Daniel's two main goals are to make Duke more affordable by lowering hidden costs like course materials and to expand access to resources and support for first-generation and low-income students."
  },
  "senator-kavya-sud": {
    name: "Kavya Sud",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Kavya is a freshman from Scottsdale, Arizona, hoping to major in Public Policy and Economics. As a Senator for Engagement and Advocacy, she hopes to expand access to professional opportunities for first-generation and low-income students and to increase the visibility of cultural organizations. At Duke, she hopes to make campus a more inclusive space where every student feels supported by the community!"
  },
  "senator-parvathy-unnikrishnan": {
    name: "Parvathy Unnikrishnan",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Parvathy is a freshman from Weddington, North Carolina, planning to major in Public Policy with a co-major in Global Health. This is her first year serving as a Senator for the Engagement and Advocacy Committee, where she works to amplify student voices and advocate for a more inclusive and accessible Duke. Passionate about disability rights, Parvathy's two main goals this year are to ensure all students feel represented in DSG's work and to connect students with the resources and support they need across the Duke community. Through her work, she hopes every student at Duke feels heard, supported, and able to fully participate in campus life."
  },
  "senator-sophie-chang": {
    name: "Sophie Chang",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/DSC_5924-Sophie-Chang-scaled-rddejppfm88dyhahq8onl4nh5uj4d8c86925vk62sg.jpeg",
    meta: "Sophomore",
    bio: "Sophie is a sophomore from Johns Creek, Georgia, studying Economics, Public Policy, and Markets & Management. After joining DSG her freshman year, she led a project with the Duke Alumni Center to create an alumni resource hub for cultural and service-oriented student groups. Through her position, she hopes to build stronger connections between Duke and cultural organizations within the Durham community. She also hopes to improve transparency between students and student government by creating more opportunities for students to share feedback on the changes they would like to see on campus."
  },
  "senator-isabella-alfonso": {
    name: "Isabella Alfonso",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/1781108645283-Benjamin-Palmer-1.png",
    meta: "Sophomore",
    bio: "Isabella is a freshman from Miami, Florida, intending to major in Political Science with a minor in psychology. This is her first semester in DSG. On campus, she is involved in Deja Blue and the Mi Gente Programming Committee. As an E&A Senator, her goals are to account for all student needs, especially reducing financial barriers that lead to student stress, as well as universal accessibility of resources and privileges.  She plans to work on projects that reflect these goals, such as summer storage and furniture drives. Additionally, she is interested in accessibility of information, seeking to ensure that any non-English-speaking family has access to student news, resources, and important details. Outside of DSG, she enjoys going to the gym, music, and watching her favorite TV shows (especially Ted Lasso)."
  },
  "senator-simpson-lee": {
    name: "Simpson Lin",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/Headshot-Simpson-Lin-rddejtgsdkdj8x514ab5v3pbje0l80r5iro3so0i3k.png",
    meta: "Sophomore",
    bio: "Stay tuned for Simpson's biography!"
  },
  "senator-taylor-moss": {
    name: "Taylor Moss",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/thumbnail_IMG_8752-r9xcbko4sav75x846eu7mg35nb3acmg6en9wtoeysg.jpg",
    meta: "Senior",
    bio: "Stay tuned for Taylor's biography!"
  },
  "senator-alfredo-santos": {
    name: "Alfredo Santos",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/Alfredo-Santos-Headshot-Alfredo-Santos-rdpc3kd53r2vsd6mp2qqndonft6aj3rb97lbzhrfds.jpg",
    meta: "Sophomore",
    bio: "Stay tuned for Alfredo's biography!"
  },
  "senator-asher-schenk": {
    name: "Asher Schenk",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/SchenkHeadshot-Asher-Schenk-rddejtgsdkdj8x514ab5v3pbje0l80r5iro3so0i3k.jpeg",
    meta: "Sophomore",
    bio: "Stay tuned for Asher's biography!"
  },
  "senator-leah-song": {
    name: "Leah Song",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/IMG_5793_-_Leah_Song.jpg",
    meta: "Sophomore",
    bio: "Leah is a sophomore majoring in Computer Science and Statistics. She is originally from Seoul, South Korea, but has also lived in Toronto and Florida. This is her second year serving as a Senator for Engagement and Advocacy, where she hopes to expand community events and professional resources for international students. Outside of DSG, she is involved with Duke Technology Scholars and Housing & Residence Life."
  },
  "senator-matthew-sun": {
    name: "Matthew Sun",
    photo: defaultPhoto,
    meta: "Junior",
    bio: "Matthew is a junior from Charlotte, North Carolina, majoring in Chemistry and Philosophy. This is his second year as a Senator for Engagement and Advocacy, working to make underrepresented voices heard. This year, Matthew's main goals are to support financial aid accessibility and improve social accountability."
  },
  "senator-eithar-wahab": {
    name: "Eithar Wahab",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/uuidD2C7F389-824B-4C1C-83BE-DE9B30A62AB1code001library3type1mode1loctruecaptrue-Eithar-Wahab.jpeg",
    meta: "Sophomore",
    bio: "Stay tuned for Eithar's biography!"
  },
  "senator-leyang-han": {
    name: "Leyang Han",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/微信图片_20260930193918_142_162-韩樂飏.jpg",
    meta: "Junior",
    bio: "Leyang is a junior from Zhengzhou, Henan, China, pursuing a B.S. in Interdisciplinary Studies with subplans in Applied Math & Computational Science and Computer Science. Spending a semester at Duke, this is his first year in DSG as a DKU Advisory Senator. His goals are to promote more jointly planned and led Duke–DKU events and to help Duke students studying at DKU better adapt to and engage with life in Kunshan. He hopes to strengthen meaningful, reciprocal connections between the Duke and DKU communities."
  },
  "senator-yanchang-he": {
    name: "Yanchang He",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Yanchang-He.jpg",
    meta: "Junior",
    bio: "Yanchang is a junior from Duke Kunshan University, majoring in Computation and Design with a track in Digital Media. Her hometown is Shenzhen, China. This is her first semester serving as a DKU Senator, representing DKU exchange students. As an advisory senator, Yanchang's two main goals are to build a DKU senator handbook that clarifies the role's responsibilities and smooths transitions, and to make the football jerseys given to Duke freshmen available to DKU exchange students as well. She hopes to bring the DKU exchange community and the Duke community closer together."
  },

  // SERVICES AND SUSTAINABILITY

  "generic-vpsas": {
    name: "Jack Stapleton",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/08/2025-0915-Duke-OUSF_headshots-294_Jack_Stapleton-1-Jack-Stapleton-scaled.jpg",
    meta: "Sophomore",
    bio: 'The Vice President of the Services and Sustainability committee is responsible for leading their committee and assisting with projects, managing the DSG policy agenda, and serving as the chief advocate and administrative contact for their committee.<br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#exec-vpsas" target="_blank">Learn more about Jack!</a></center>'
  },
  "senator-zoya-hasan": {
    name: "Zoya Hasan",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Zoya-Hasan.jpg",
    meta: "Sophomore",
    bio: "Zoya is a sophomore from Minneapolis, Minnesota. She is planning on majoring in International Comparative Studies and Global Health on the Pre-Medical track. This is her second year serving as a Senator for the Services and Sustainability committee, and she is so excited for another year with SAS in the AVP position. This year, Zoya hopes to improve access to mental and physical health resources, address food waste management, and promote overall sustainable efforts on campus. She hopes to connect to the Duke community by advocating for environmental practices."
  },
  "senator-mishaal-ahmed": {
    name: "Mishaal Ahmed",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/20260203_221541_EFDF04-Mishaal-Ahmed.jpeg",
    meta: "Freshman",
    bio: "Mishaal is a freshman from Fayetteville, Arkansas, planning to major in Neuroscience with a minor in Spanish. This is her first year in DSG, and through her position on the Services and Sustainability Committee, she hopes to expand health and wellness services for the freshman class and explore more equitable dining options. Mishaal’s biggest goal is to make the Duke community an environment that is comfortable and welcoming for every student."
  },
  "senator-katie-eilers": {
    name: "Katie Eilers",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/elementor/thumbs/DSC_5200-Katie-Eilers-scaled-rd9hia0ganltbujtdzp5awhn1ikeck9r39z2g6j7og.jpeg",
    meta: "Sophomore",
    bio: "Katie is a sophomore from Charlotte, North Carolina planning to major in Chemistry on the pre-dental track. This is her second year as a Services and Sustainability Senator, where she works on dining sustainability, access to recreational equipment, and airport transportation. This year, Katie hopes to improve healthcare access on East Campus while continuing to build upon her former projects."
  },
  "senator-kyle-nguyen": {
    name: "Kyle Nguyen",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Kyle-Nguyen.jpg",
    meta: "Freshman",
    bio: "Kyle is a freshman from Houston, Texas, planning to major in Economics and Neuroscience with a minor in Public Policy. He serves as a Senator on the Services and Sustainability Committee. This year, he hopes to minimize waste at Marketplace and West Union and to improve the transportation system, promoting a more sustainable Duke. More broadly, he wants to build a more inclusive Duke where student voices lead to real, tangible change."
  },
  "senator-lujain-ahmed": {
    name: "Lujain Ahmed",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Lujain-Ahmed.jpg",
    meta: "Junior",
    bio: "Lujain is a junior from Houston, Texas, majoring in Mechanical Engineering. This is her second year serving as an At-Large Senator for the Services and Sustainability Committee. This year, Lujain’s two main goals are to revamp recycling signage across campus to promote sustainable practices and to launch a new campus project focused on making a tangible, positive impact on students' daily lives. Through these efforts, she hopes to cultivate a more environmentally conscious Duke while directly improving the everyday student experience."
  },
  "senator-cayden-hart": {
    name: "Cayden Hart",
    photo: defaultPhoto,
    meta: "Junior",
    bio: "Cayden is a junior from Aiken, South Carolina, majoring in Environmental Sciences & Policy with a certificate in Energy & Environment. He serves as a Senator on DSG’s Services & Sustainability Committee, where he has helped lead projects including Duke’s student e-waste initiative. This year, Cayden hopes to expand practical sustainability programs on campus and scale up the electronic waste program."
  },
  "senator-izzy-khachatryan": {
    name: "Izzy Khachatryan",
    photo: defaultPhoto,
    meta: "Sophomore",
    bio: "Izzy is a sophomore from Salt Lake City, Utah, planning to major in Public Policy with a certificate in Health Policy. This is her first year serving on the Services and Sustainability Committee, where she hopes to improve access to health services on East Campus, support sustainability efforts in K-Ville, and strengthen campus circularity initiatives that encourage reuse, sharing, and waste reduction. Izzy is passionate about Duke basketball and finding engaging ways to make sustainability part of everyday campus life."
  },
  "senator-major-richmond": {
    name: "Major Richmond",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/MajorPFP-ZOOMEDIN-Major-Richmond.png",
    meta: "Junior",
    bio: "Major is obsessed with DSG and Duke. He is a junior Public Policy and Environmental Sciences student from the small town of New Hope, Pennsylvania. This is his third year serving as a Services and Sustainability senator, and he also holds the new and exciting Head Fun Officer Operations role. On campus, Major is passionate about Few Quad, Men's and Women's Basketball, and the Laidlaw Scholars Program. He hopes to continue his Sustainable K-Ville project, implement a dorm sustainability competition, and lead the average Duke student to a greener lifestyle. He believes a sustainable Duke is a better Duke!"
  },
  "senator-nikhil-sethi": {
    name: "Nikhil Sethi",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2025/11/IMG_0022-Nik-S.jpeg",
    meta: "Junior",
    bio: "Nikhil is a junior from Phoenix, Arizona, studying Civil Engineering on the Environmental and Water Resources track and pursuing a certificate in Energy and the Environment. He previously served as DSG Executive Vice President, Vice President for Services and Sustainability (SAS), and a First-Year Senator for SAS. He is excited to continue initiatives with the committee, especially in focus areas such as food waste reduction and on-campus mental health accessibility."
  },
  "senator-dana-tan": {
    name: "Dana Tan",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Dana-Tan.jpg",
    meta: "Sophomore",
    bio: "Dana is a sophomore from Singapore studying Biomedical Engineering and pursuing a certificate in Innovation & Entrepreneurship. Returning as a second-year Senator for Services and Sustainability, she has worked on dorm energy and water conservation and a recreational equipment pilot in collaboration with Duke Housing & Residence Life. This year, Dana hopes to turn successful sustainability efforts into lasting campus practices while expanding accessible recreational opportunities to improve everyday student life."
  },
  "senator-ashwika-vanam": {
    name: "Ashwika Vanam",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Ashwika-Vanam.jpg",
    meta: "Freshman",
    bio: "Ashwika is a freshman from Charlotte, North Carolina, planning to major in Chemistry and Global Health. This is her first year serving as a Senator for Services and Sustainability. This year, Ashwika’s two main goals are to increase composting education and signage around campus and to partner with Devil’s Thrifthouse to expand the scope of its student-run pop-up thrift events. Through her position, she hopes to make sustainability more accessible and feasible for the average Duke student!"
  },
  "senator-amina-rashid": {
    name: "Amina Rashid",
    photo: defaultPhoto,
    meta: "Freshman",
    bio: "Amina is a freshman from Raleigh, North Carolina, planning to double major in Global Health and Public Policy on the pre-med track. This is her first year in DSG, and she’s excited to help create a sustainable, inclusive, and welcoming community at Duke where every voice is heard. This year, Amina hopes to make K-Ville more sustainable while keeping the basketball spirit alive in fun and engaging ways. She also hopes to improve communication between professors, students, and the administration around the C1 bus, especially during rush hours. Through these projects and more, she hopes to make Duke feel more like home for everyone!"
  }
};

//JUDICIAL BRANCH

var judiciary = {
  "justice-chief": {
    name: "Maya Ezroni",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Maya-Mishan-Ezroni.jpg",
    meta: "Senior",
    bio: 'The Chief Justice is responsible for leading the DSG Judiciary, managing its operations, and presiding over hearings. They also oversee the interpretation of the DSG Constitution and work to make it accessible to all students. <br><br><center><a href="https://dukestudentgovernment.org/executive-branch/executive-board/#exec-cj" target="_blank">Learn more about Maya!</a></center>'
  },
  "justice-assistant": {
    name: "Viveka Mehrotra",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Viveka-Mehrotra.jpg",
    meta: "Junior",
    bio: "Viveka is a junior from Athens, Georgia, double majoring in Public Policy and Computer Science on the pre-law track. Now in her second year on the Judiciary, she previously served as an Associate Justice and Officer of the Clerks. This year, she hopes to make DSGJ a more visible and accessible resource for students while working across all three branches to carefully review the DSG Constitution, resolve inconsistencies, and clarify its language. Ultimately, she hopes to uphold fairness, integrity, and accountability within the Duke community."
  },
  "justice-rubsamen": {
    name: "Charlie Rubsamen",
    photo: defaultPhoto,
    meta: "Junior",
    bio: "Stay tuned for Charlie's biography!"
  },
  "justice-douglas": {
    name: "Gabrielle Douglas",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Gabrielle-Douglas.jpg",
    meta: "Senior",
    bio: "Gabrielle Douglas is a senior studying Political Science with a concentration in International Relations and minors in Journalism and Media and Russian. Originally from Houston, Texas, she has served as a Duke Judiciary Associate Justice and Clerk, where she has worked to strengthen student awareness of governance and rights. Through DSG, she hopes to make student governance more accessible and responsive while creating clearer pathways for students to understand and participate in Duke’s decision-making processes. She hopes to leave Duke with a stronger culture of student agency and inclusion."
  },
  "justice-arango": {
    name: "Isa Arango",
    photo: defaultPhoto,
    meta: "Senior",
    bio: "Stay tuned for Isa's biography!"
  },
  "justice-zuo": {
    name: "Justin Zou",
    photo: defaultPhoto,
    meta: "Senior",
    bio: "Stay tuned for Justin's biography!"
  },
  "justice-hovsepian": {
    name: "Vincent Hovsepian",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/10/Headshot-Vincent-Hovsepian.jpg",
    meta: "Junior",
    bio: "Vincent is a senior from Los Angeles, California, majoring in Public Policy with a minor in Psychology. This is his third year in DSG, having previously served as a First-Year Senator for the Engagement & Advocacy Committee and as Associate Chief Justice. This year, he hopes to make DSG's third branch, the Judiciary, more accessible to students and more active in resolving disputes transparently."
  },
  "justice-clerk-salkin": {
    name: "Margalit Salkin",
    photo: defaultPhoto,
    meta: "Sophomore",
    bio: "Margalit is a sophomore from Los Angeles, California planning to major in Economics and Philosophy. This is her second year serving on the DSG Judiciary, where she works as a clerk. Her role centers on managing organization and communication for Judiciary matters. She hopes to increase awareness about students' rights under the Duke Constitution and expand Judiciary's partnership with other branches of DSG."
  },
  "justice-clerk-shepherd": {
    name: "Emory Shepherd",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Headshot-Emory-Shepherd.jpg",
    meta: "Sophomore",
    bio: "Emory is a sophomore from Watkinsville, Georgia, planning to study Psychology with a minor in Creative Writing and a certificate in Child and Family Policy. In her first year on DSG as a Judicial Clerk, she hopes to help facilitate fair and effective judicial proceedings while deepening her understanding of student governance and accountability at Duke. Through her role, Emory hopes to support a transparent and thoughtful judicial process that strengthens trust between DSG and the broader Duke community."
  },
  "justice-clerk-avolio": {
    name: "Siena Avolio",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/09/Chapel-Headshot-Siena-Avolio.jpg",
    meta: "Sophomore",
    bio: "Siena is a sophomore from Athens, Georgia, planning to major in Neuroscience and Dance. This is her first year on DSG, where she serves as a Clerk for the Judiciary. She hopes to expand the Judiciary's social media presence to increase the branch's visibility across student government and the broader Duke community, helping students understand the rights they hold on campus and the steps to take if those rights are infringed."
  }
};

//RESOURCES & AFFILIATES

var bdb = {
  "bdb-cassatt": {
    name: "Cassatt Boatwright (she/her)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/9F5A45C1-A274-4776-8584-C2787DD095D2_1_105_c-Cassatt-Boatwright.jpeg",
    meta: "Junior",
    bio: 'Cassatt is majoring in Public Policy with a minor in Education and a Child Policy Research Certificate.<br><br><b>Fun Fact:</b> She has run six half-marathon races in the past year! <br><br><center><a href="mailto:cyb9@duke.edu" target="_blank">Contact Cassatt</a></center>'
  },
  "bdb-brecher": {
    name: "Brecher Sorin (he/him)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/IMG_4474-Brecher-Sorin.jpeg",
    meta: "Junior",
    bio: 'Brecher is majoring in Economics and Public Policy with a minor in Psychology.<br><br><b>Fun Fact:</b> He loves dogs! <br><br><center><a href="mailto:brecher.sorin@duke.edu" target="_blank">Contact Brecher</a></center>'
  },
  "bdb-faith": {
    name: "Faith You (she/her)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/DSC01566-Faith-You-scaled.jpeg",
    meta: "Sophomore",
    bio: 'Faith is a Program II major.<br><br><b>Fun Fact:</b> She can twist her arm 360 degrees! <br><br><center><a href="mailto:fy74@duke.edu" target="_blank">Contact Faith</a></center>'
  },
  "bdb-scarlett": {
    name: "Scarlett Simmons (she/her)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/883BA8F3-2402-4428-9899-3BD8889E1BBE_1_105_c-Scarlett-Simmons.jpeg",
    meta: "Senior",
    bio: 'Scarlett is majoring in Sociology and Education.<br><br><b>Fun Fact:</b> She studied abroad in Edinburgh, Scotland her Junior Fall! <br><br><center><a href="mailto:scarlett.simmons@duke.edu" target="_blank">Contact Scarlett</a></center>'
  },
  "bdb-jonathan": {
    name: "Jonathan Fromm (he/him)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/Chapel-Headshot-Jonathan-Fromm-scaled.jpg",
    meta: "Sophomore",
    bio: 'Jonathan is pursuing a double Major in Political Science and Economics, along with an Ethics & Society Certificate.<br><br><b>Fun Fact:</b> He has dual citizenship! <br><br><center><a href="mailto:jonathan.fromm@duke.edu" target="_blank">Contact Jonathan</a></center>'
  },
  "bdb-phoenix": {
    name: "Phoenix Perkins (he/him)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/IMG_5367-Phoenix-Perkins.jpeg",
    meta: "Junior",
    bio: 'Phoenix is majoring in Electrical Engineering, Computer Science, and Math.<br><br><b>Fun Fact:</b> He lives in Alaska! <br><br><center><a href="mailto:pp246@duke.edu" target="_blank">Contact Phoenix</a></center>'
  },
  "bdb-esha": {
    name: "Esha Kalikiri (she/her)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/C2B82882-F1D2-4115-A1F8-D879F0D2D0F9-Esha-Kalikiri.jpeg",
    meta: "Sophomore",
    bio: 'Esha is majoring in Psychology.<br><br><b>Fun Fact:</b> She can play the piano! <br><br><center><a href="mailto:ek264@duke.edu" target="_blank">Contact Esha</a></center>'
  },
  "bdb-dylan": {
    name: "Dylan Yang (he/him)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/headshot-Dylan-Yang-2-scaled.webp",
    meta: "Junior",
    bio: 'Dylan is majoring in Economics with a minor in Computer Science.<br><br><b>Fun Fact:</b> He plays for Club Ice Hockey! <br><br><center><a href="mailto:dylan.yang@duke.edu" target="_blank">Contact Dylan</a></center>'
  },
  "bdb-simran": {
    name: "Simran Pandey (she/her)",
    photo: "https://dukestudentgovernment.org/wp-content/uploads/2026/06/IMG_9038-Simran-P.jpeg",
    meta: "Senior",
    bio: 'Simran is majoring in Public Policy and Linguistics with a minor in Environmental Sciences and Policy. <br><br><b>Fun Fact:</b> Shes walked from Switzerland to France! <br><br><center><a href="mailto:simran.pandey@duke.edu" target="_blank">Contact Simran</a></center>'
  },
  "bdb-ameya": {
    name: "Ameya Aneja (she/her)",
    photo: "",
    meta: "Senior",
    bio: 'Ameya is majoring in Economics with a Computer Science minor. <br><br><b>Fun Fact:</b> She chooses cafés based on their dessert menu! <br><br><center><a href="mailto:ameya.aneja@duke.edu" target="_blank">Contact Ameya</a></center>'
  }
};

// merge all into one profiles object for the popup logic to use
var profiles = Object.assign({}, execBoard, presCabinet, opsTeam, judiciary, senateStaff, senators, bdb);
