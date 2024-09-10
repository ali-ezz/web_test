let activeFilters = [];
const box1Filters = {
    'Filter 1': 'مواد عامه',
    'Filter 2': 'علوم البيانات',
    'Filter 3': 'الوسائط',
    'Filter 4': 'الانسان الالي'
};
const box2Filters = {
    'Filter 1': ['الترم الاول', 'الترم الثاني', 'الترم الثالث', 'الترم الرابع'],
    'Filter 2': ['الترم الخامس', 'الترم السادس', 'الترم السابع', 'الترم الثامن'],
    'Filter 3': ['الترم التاسع', 'الترم العاشر','k','l'],
    'Filter 4': ['الترم الحادي عشر', 'الترم الثاني عشر','h','f']
};

const labels = {
    'الترم الاول': ['English I', 'Social Issues and Anti-Corruption', 'Mathematics', 'Discrete Mathematics', 'Statistics and Probabilities', 'Introduction to Computers', 'Fundamentals of Information Systems'],
    'الترم الثاني': ['English II', 'Logic Design', 'Programming', 'Physics', 'Sustainable Development', 'Fundamentals of Economics', 'Professional Ethics', 'Creative Thinking', 'Mass Communication', 'Advanced Mathematics', 'Fundamentals of Management'],
    'الترم الثالث': ['Electronics', 'Algorithms', 'Database System', 'Computer Networks', 'Operating Systems', 'Advanced Statistics and Probabilities', 'Linear Algebra', 'Signal and Systems'],
    'الترم الرابع': ['System Analysis and Design', 'Data Structures', 'Advanced Statistics and Probabilities', 'Linear Algebra', 'Signal and Systems', 'Modeling and Simulation', 'Internet Technology', 'Advanced Programming', 'Software Projects Management', 'Artificial Intelligence', 'Data Warehouse'],
    'الترم الخامس': ['Advanced Database', 'Data Management', 'Database Security', 'Machine Learning', 'Data Analysis Algorithms', 'Microeconomics and Informatics', 'Basic of AI Programming Skills'],
    'الترم السادس': ['Practical Data Mining', 'Introduction to Big Data', 'Data Visualization', 'R and Python Programming Language', 'Neural Networks and Deep Learning', 'Technology of Cryptocurrencies', 'Elements of Econometrics'],
    'الترم السابع': ['Hadoop and Apache Spark Essentials', 'Information Modelling', 'Knowledgebase Management Systems', 'Graduation Project 1', 'Logistics', 'Legal Basis and IT Law', 'Reinforcement Learning', 'Data Wrangling'],
    'الترم الثامن': ['Big Data Analysis', 'Practical Data Science', 'Graduation Project 2', 'Practical Training - 2', 'Communication and Negotiation Skills', 'Innovation & Entrepreneurship', 'Problem Solving & Decision-Making Skills'],
    'الترم التاسع': ['Introduction to Art and Design', 'Web Design', 'Foundations of Digital Graphic Design', 'Multimedia Programming', 'Selected Topics in Media Arts and Technology', 'Introduction to Digital Music', 'Drawing Studio'],
    'الترم العاشر': ['Multimedia Design', 'Computer Aided Design', 'HCI And Applications', 'Game Programming', 'Visual Communications and Design', 'The Mass Media', 'Communication and Negotiation Skills', 'Innovation & Entrepreneurship', 'Problem Solving & Decision-Making Skills'],
    'k': ['Advanced Multimedia Programming', 'Digital Photography and Media Production', 'Introduction to 2D Animation', 'Graduation Project 1','Visual Effects, Compositing and Mixed Media', 'Introduction to Video Graphics'],
    'l': ['Introduction to 3D Modeling and Animation', 'Typography and Layout', 'Image And Video Processing', 'Virtual Reality and Tele-Presence', 'Graduation Project 2', 'Practical Training - 2'],
    'الترم الحادي عشر': ['Pattern Recognition', 'Real-Time Systems', 'Micro Processors', 'Computer Architecture', 'Machine Learning', 'Robotics Selected Topics', 'Virtual Reality'],
    'الترم الثاني عشر': ['Neural Networks', 'Parallel Processing', 'Automatic Control', 'Embedded Systems', 'Computer Networks and Information Security', 'Digital Signal Processing', 'Computer Vision', 'Speech Processing'],
    'h': ['Robot Design', 'Robot Arms', 'Natural Language Processing', 'Graduation Project 1', 'Computer Networks and Information Security', 'Digital Signal Processing', 'Computer Vision', 'Speech Processing'],
    'f': ['Sensors and Actuators', 'Mobile Robots', 'Graduation Project 2', 'Practical Training - 2', 'Communication and Negotiation Skills', 'Innovation & Entrepreneurship', 'Problem Solving & Decision-Making Skills']
};
const contentItems = {
    'الترم الاول': [
        { src: 'images/English I.jpeg', label: 'English I', customContent: '<h3>the course data</h3><br><h4>the code:GEN 101&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4>The material reflects the stylistic variety that advanced learners have to be able to deal with; The course gives practice in specific points of grammar to consolidate and extend learners existing knowledge; Analysis of syntax; comprehension; Skimming and scanning exercises develop the learners skills; comprehension questions interpretation and implication; the activities and games used develop listening; speaking and writing skills through a communicative; functional approach; with suggested topics for dicussion and exercises in summary writing and composition.</h4><br><h3>Pre-request Courses</h3><br><h3>no pre-request courses is required </h3>' },
        { src: 'images/Social issues and anti-corruption.jpeg', label: 'Social Issues and Anti-Corruption', customContent: '<h3>the course data</h3><br><h4>the code:GEN 103&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit hours:2</h4><br><h4>Hours of lecture:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours of exercise/lab:0/0</h4><br><h3>Course description</h3><br><h4></h4><br><h3>Pre-request Courses</h3><br><h3></h3>'},
        { src: 'images/Mathematics.jpeg', label: 'Mathematics', customContent: 'This is the Mathematics course.' },
        { src: 'images/Discrete Mathematics.jpeg', label: 'Discrete Mathematics', customContent: 'This is the Discrete Mathematics course.' },
        { src: 'images/Statistics and Probabilities.jpeg', label: 'Statistics and Probabilities', customContent: 'This course covers statistics and probabilities.' },
        { src: 'images/Introduction to Computers.jpeg', label: 'Introduction to Computers', customContent: 'This is the Introduction to Computers course.' },
        { src: 'images/Fundamentals of Information Systems.jpeg', label: 'Fundamentals of Information Systems', customContent: 'This course covers the fundamentals of information systems.' }
    ],
    'الترم الثاني': [
        { src: 'images/English II.jpeg', label: 'English II', customContent: 'This is the English II course.' },
        { src: 'images/Logic Design.jpeg', label: 'Logic Design', customContent: 'This course covers logic design.' },
        { src: 'images/Programming.jpeg', label: 'Programming', customContent: 'This is the Programming course.' },
        { src: 'images/Physics.jpeg', label: 'Physics', customContent: 'This is the Physics course.' },
        { src: 'images/Sustainable Development.jpeg', label: 'Sustainable Development', customContent: 'This course covers sustainable development.' },
        { src: 'images/Fundamentals of Economics.jpeg', label: 'Fundamentals of Economics', customContent: 'This course covers the fundamentals of economics.' },
        { src: 'images/Professional Ethics.jpeg', label: 'Professional Ethics', customContent: 'This course covers professional ethics.' },
        { src: 'images/Creative Thinking.jpeg', label: 'Creative Thinking', customContent: 'This course covers creative thinking.' },
        { src: 'images/Mass Communication.jpeg', label: 'Mass Communication', customContent: 'This course covers mass communication.' },
        { src: 'images/Advanced Mathematics.jpeg', label: 'Advanced Mathematics', customContent: 'This is the Advanced Mathematics course.' },
        { src: 'images/Fundamentals of Management.jpeg', label: 'Fundamentals of Management', customContent: 'This course covers the fundamentals of management.' }
    ],
    'الترم الثالث': [
        { src: 'images/Electronics.jpeg', label: 'Electronics', customContent: 'This is the Electronics course.' },
        { src: 'images/Algorithms.jpeg', label: 'Algorithms', customContent: 'This course covers algorithms.' },
        { src: 'images/Database System.jpeg', label: 'Database System', customContent: 'This course covers database systems.' },
        { src: 'images/Computer Networks.jpeg', label: 'Computer Networks', customContent: 'This course covers computer networks.' },
        { src: 'images/Operating Systems.jpeg', label: 'Operating Systems', customContent: 'This course covers operating systems.' },
        { src: 'images/Advanced Statistics and Probabilities.jpeg', label: 'Advanced Statistics and Probabilities', customContent: 'This course covers advanced statistics and probabilities.' },
        { src: 'images/Linear Algebra.jpeg', label: 'Linear Algebra', customContent: 'This course covers linear algebra.' },
        { src: 'images/Signal and Systems.jpeg', label: 'Signal and Systems', customContent: 'This course covers signal and systems.' }
    ],
    'الترم الرابع': [
        { src: 'images/System Analysis and Design.jpeg', label: 'System Analysis and Design', customContent: 'This course covers system analysis and design.' },
        { src: 'images/Data Structures.jpeg', label: 'Data Structures', customContent: 'This course covers data structures.' },
        { src: 'images/Advanced Statistics and Probabilities.jpeg', label: 'Advanced Statistics and Probabilities', customContent: 'This course covers advanced statistics and probabilities.' },
        { src: 'images/Linear Algebra.jpeg', label: 'Linear Algebra', customContent: 'This course covers linear algebra.' },
        { src: 'images/Signal and Systems.jpeg', label: 'Signal and Systems', customContent: 'This course covers signal and systems.' },
        { src: 'images/Modeling and Simulation.jpeg', label: 'Modeling and Simulation', customContent: 'This course covers modeling and simulation.' },
        { src: 'images/Internet Technology.jpeg', label: 'Internet Technology', customContent: 'This course covers internet technology.' },
        { src: 'images/Advanced Programming.jpeg', label: 'Advanced Programming', customContent: 'This course covers advanced programming.' },
        { src: 'images/Software Projects Management.jpeg', label: 'Software Projects Management', customContent: 'This course covers software projects management.' },
        { src: 'images/Artificial Intelligence.jpeg', label: 'Artificial Intelligence', customContent: 'This course covers artificial intelligence.' },
        { src: 'images/Data Warehouse.jpeg', label: 'Data Warehouse', customContent: 'This course covers data warehouse.' }
    ],
    'الترم الخامس': [
        { src: 'images/Advanced Database.jpeg', label: 'Advanced Database', customContent: 'This course covers advanced database.' },
        { src: 'images/Data Management.jpeg', label: 'Data Management', customContent: 'This course covers data management.' },
        { src: 'images/Database Security.jpeg', label: 'Database Security', customContent: 'This course covers database security.' },
        { src: 'images/Machine Learning.jpeg', label: 'Machine Learning', customContent: 'This course covers machine learning.' },
        { src: 'images/Data Analysis Algorithms.jpeg', label: 'Data Analysis Algorithms', customContent: 'This course covers data analysis algorithms.' },
        { src: 'images/Microeconomics and Informatics.jpeg', label: 'Microeconomics and Informatics', customContent: 'This course covers microeconomics and informatics.' },
        { src: 'images/Basic of AI Programming Skills.jpeg', label: 'Basic of AI Programming Skills', customContent: 'This course covers basic AI programming skills.' }
    ],
    'الترم السادس': [
        { src: 'images/Practical Data Mining.jpeg', label: 'Practical Data Mining', customContent: 'This course covers practical data mining.' },
        { src: 'images/Introduction to Big Data.jpeg', label: 'Introduction to Big Data', customContent: 'This course covers introduction to big data.' },
        { src: 'images/Data Visualization.jpeg', label: 'Data Visualization', customContent: 'This course covers data visualization.' },
        { src: 'images/R and Python Programming Language.jpeg', label: 'R and Python Programming Language', customContent: 'This course covers R and Python programming language.' },
        { src: 'images/Neural Networks and Deep Learning.jpeg', label: 'Neural Networks and Deep Learning', customContent: 'This course covers neural networks and deep learning.' },
        { src: 'images/Technology of Cryptocurrencies.jpeg', label: 'Technology of Cryptocurrencies', customContent: 'This course covers technology of cryptocurrencies.' },
        { src: 'images/Elements of Econometrics.jpeg', label: 'Elements of Econometrics', customContent: 'This course covers elements of econometrics.' }
    ],
    'الترم السابع': [
        { src: 'images/Hadoop and Apache Spark Essentials.jpeg', label: 'Hadoop and Apache Spark Essentials', customContent: 'This course covers Hadoop and Apache Spark essentials.' },
        { src: 'images/Information Modelling.jpeg', label: 'Information Modelling', customContent: 'This course covers information modelling.' },
        { src: 'images/Knowledgebase Management Systems.jpeg', label: 'Knowledgebase Management Systems', customContent: 'This course covers knowledgebase management systems.' },
        { src: 'images/Graduation Project 1.jpeg', label: 'Graduation Project 1', customContent: 'This is the Graduation Project 1.' },
        { src: 'images/Logistics.jpeg', label: 'Logistics', customContent: 'This course covers logistics.' },
        { src: 'images/Legal Basis and IT Law.jpeg', label: 'Legal Basis and IT Law', customContent: 'This course covers legal basis and IT law.' },
        { src: 'images/Reinforcement Learning.jpeg', label: 'Reinforcement Learning', customContent: 'This course covers reinforcement learning.' },
        { src: 'images/Data Wrangling.jpeg', label: 'Data Wrangling', customContent: 'This course covers data wrangling.' }
    ],
    'الترم الثامن': [
        { src: 'images/Big Data Analysis.jpeg', label: 'Big Data Analysis', customContent: 'This course covers big data analysis.' },
        { src: 'images/Practical Data Science.jpeg', label: 'Practical Data Science', customContent: 'This course covers practical data science.' },
        { src: 'images/Graduation Project 2.jpeg', label: 'Graduation Project 2', customContent: 'This is the Graduation Project 2.' },
        { src: 'images/Practical Training - 2.jpeg', label: 'Practical Training - 2', customContent: 'This is the Practical Training - 2.' },
        { src: 'images/Communication and Negotiation Skills.jpeg', label: 'Communication and Negotiation Skills', customContent: 'This course covers communication and negotiation skills.' },
        { src: 'images/Innovation & Entrepreneurship.jpeg', label: 'Innovation & Entrepreneurship', customContent: 'This course covers innovation and entrepreneurship.' },
        { src: 'images/Problem Solving & Decision-Making Skills.jpeg', label: 'Problem Solving & Decision-Making Skills', customContent: 'This course covers problem solving and decision-making skills.' }
    ],
    'الترم التاسع': [
        { src: 'images/Introduction to Art and Design.jpeg', label: 'Introduction to Art and Design', customContent: 'This course covers introduction to art and design.' },
        { src: 'images/Web Design.jpeg', label: 'Web Design', customContent: 'This course covers web design.' },
        { src: 'images/Foundations of Digital Graphic Design.jpeg', label: 'Foundations of Digital Graphic Design', customContent: 'This course covers foundations of digital graphic design.' },
        { src: 'images/Multimedia Programming.jpeg', label: 'Multimedia Programming', customContent: 'This course covers multimedia programming.' },
        { src: 'images/Selected Topics in Media Arts and Technology.jpeg', label: 'Selected Topics in Media Arts and Technology', customContent: 'This course covers selected topics in media arts and technology.' },
        { src: 'images/Introduction to Digital Music.jpeg', label: 'Introduction to Digital Music', customContent: 'This course covers introduction to digital music.' },
        { src: 'images/Drawing Studio.jpeg', label: 'Drawing Studio', customContent: 'This course covers drawing studio.' }
    ],
    'الترم العاشر': [
        { src: 'images/Multimedia Design.jpeg', label: 'Multimedia Design', customContent: 'This course covers multimedia design.' },
        { src: 'images/Computer Aided Design.jpeg', label: 'Computer Aided Design', customContent: 'This course covers computer aided design.' },
        { src: 'images/HCI And Applications.jpeg', label: 'HCI And Applications', customContent: 'This course covers HCI and applications.' },
        { src: 'images/Game Programming.jpeg', label: 'Game Programming', customContent: 'This course covers game programming.' },
        { src: 'images/Visual Communications and Design.jpeg', label: 'Visual Communications and Design', customContent: 'This course covers visual communications and design.' },
        { src: 'images/The Mass Media.jpeg', label: 'The Mass Media', customContent: 'This course covers the mass media.' },
        { src: 'images/Communication and Negotiation Skills.jpeg', label: 'Communication and Negotiation Skills', customContent: 'This course covers communication and negotiation skills.' },
        { src: 'images/Innovation & Entrepreneurship.jpeg', label: 'Innovation & Entrepreneurship', customContent: 'This course covers innovation and entrepreneurship.' },
        { src: 'images/Problem Solving & Decision-Making Skills.jpeg', label: 'Problem Solving & Decision-Making Skills', customContent: 'This course covers problem solving and decision-making skills.' }
    ],
    'k': [
        { src: 'images/Advanced Multimedia Programming.jpeg', label: 'Advanced Multimedia Programming', customContent: 'This course covers advanced multimedia programming.' },
        { src: 'images/Digital Photography and Media Production.jpeg', label: 'Digital Photography and Media Production', customContent: 'This course covers digital photography and media production.' },
        { src: 'images/Introduction to 2D Animation.jpeg', label: 'Introduction to 2D Animation', customContent: 'This course covers introduction to 2D animation.' },
        { src: 'images/Graduation Project 1.jpeg', label: 'Graduation Project 1', customContent: 'This is the Graduation Project 1.' },
        { src: 'images/Visual Effects, Compositing and Mixed Media.jpeg', label: 'Visual Effects, Compositing and Mixed Media', customContent: 'This course covers visual effects, compositing and mixed media.' },
        { src: 'images/Introduction to Video Graphics.jpeg', label: 'Introduction to Video Graphics', customContent: 'This course covers introduction to video graphics.' }
    ],
    'l': [
        { src: 'images/Introduction to 3D Modeling and Animation.jpeg', label: 'Introduction to 3D Modeling and Animation', customContent: 'This course covers introduction to 3D modeling and animation.' },
        { src: 'images/Typography and Layout.jpeg', label: 'Typography and Layout', customContent: 'This course covers typography and layout.' },
        { src: 'images/Image And Video Processing.jpeg', label: 'Image And Video Processing', customContent: 'This course covers image and video processing.' },
        { src: 'images/Virtual Reality and Tele-Presence.jpeg', label: 'Virtual Reality and Tele-Presence', customContent: 'This course covers virtual reality and tele-presence.' },
        { src: 'images/Graduation Project 2.jpeg', label: 'Graduation Project 2', customContent: 'This is the Graduation Project 2.' },
        { src: 'images/Practical Training - 2.jpeg', label: 'Practical Training - 2', customContent: 'This is the Practical Training - 2.' }
    ],
    'الترم الحادي عشر': [
        { src: 'images/Pattern Recognition.jpeg', label: 'Pattern Recognition', customContent: 'This course covers pattern recognition.' },
        { src: 'images/Real-Time Systems.jpeg', label: 'Real-Time Systems', customContent: 'This course covers real-time systems.' },
        { src: 'images/Micro Processors.jpeg', label: 'Micro Processors', customContent: 'This course covers micro processors.' },
        { src: 'images/Computer Architecture.jpeg', label: 'Computer Architecture', customContent: 'This course covers computer architecture.' },
        { src: 'images/Machine Learning.jpeg', label: 'Machine Learning', customContent: 'This course covers machine learning.' },
        { src: 'images/Robotics Selected Topics.jpeg', label: 'Robotics Selected Topics', customContent: 'This course covers selected topics in robotics.' },
        { src: 'images/Virtual Reality.jpeg', label: 'Virtual Reality', customContent: 'This course covers virtual reality.' }
    ],
    'الترم الثاني عشر': [
        { src: 'images/Neural Networks.jpeg', label: 'Neural Networks', customContent: 'This course covers neural networks.' },
        { src: 'images/Parallel Processing.jpeg', label: 'Parallel Processing', customContent: 'This course covers parallel processing.' },
        { src: 'images/Automatic Control.jpeg', label: 'Automatic Control', customContent: 'This course covers automatic control.' },
        { src: 'images/Embedded Systems.jpeg', label: 'Embedded Systems', customContent: 'This course covers embedded systems.' },
        { src: 'images/Computer Networks and Information Security.jpeg', label: 'Computer Networks and Information Security', customContent: 'This course covers computer networks and information security.' },
        { src: 'images/Digital Signal Processing.jpeg', label: 'Digital Signal Processing', customContent: 'This course covers digital signal processing.' },
        { src: 'images/Computer Vision.jpeg', label: 'Computer Vision', customContent: 'This course covers computer vision.' },
        { src: 'images/Speech Processing.jpeg', label: 'Speech Processing', customContent: 'This course covers speech processing.' }
    ],
    'h': [
        { src: 'images/Robot Design.jpeg', label: 'Robot Design', customContent: 'This course covers robot design.' },
        { src: 'images/Robot Arms.jpeg', label: 'Robot Arms', customContent: 'This course covers robot arms.' },
        { src: 'images/Natural Language Processing.jpeg', label: 'Natural Language Processing', customContent: 'This course covers natural language processing.' },
        { src: 'images/Graduation Project 1.jpeg', label: 'Graduation Project 1', customContent: 'This is the Graduation Project 1.' },
        { src: 'images/Computer Networks and Information Security.jpeg', label: 'Computer Networks and Information Security', customContent: 'This course covers computer networks and information security.' },
        { src: 'images/Digital Signal Processing.jpeg', label: 'Digital Signal Processing', customContent: 'This course covers digital signal processing.' },
        { src: 'images/Computer Vision.jpeg', label: 'Computer Vision', customContent: 'This course covers computer vision.' },
        { src: 'images/Speech Processing.jpeg', label: 'Speech Processing', customContent: 'This course covers speech processing.' }
    ],
  'f': [
    { src: 'images/Sensors and Actuators.jpeg', label: 'Sensors and Actuators', customContent: 'This course covers sensors and actuators.' },
    { src: 'images/Mobile Robots.jpeg', label: 'Mobile Robots', customContent: 'This course covers mobile robots.' },
    { src: 'images/Graduation Project 2.jpeg', label: 'Graduation Project 2', customContent: 'This is the Graduation Project 2.' },
    { src: 'images/Practical Training - 2.jpeg', label: 'Practical Training - 2', customContent: 'This is the Practical Training - 2.' },
    { src: 'images/Robot Programming.jpeg', label: 'Robot Programming', customContent: 'This course covers robot programming.' },
    { src: 'images/Communication and Negotiation Skills.jpeg', label: 'Communication and Negotiation Skills', customContent: 'This course covers communication and negotiation skills.' },
    { src: 'images/Innovation & Entrepreneurship.jpeg', label: 'Innovation & Entrepreneurship', customContent: 'This course covers innovation and entrepreneurship.' },
    { src: 'images/Problem Solving & Decision-Making Skills.jpeg', label: 'Problem Solving & Decision-Making Skills', customContent: 'This course covers problem solving and decision-making skills.' }
]}
document.addEventListener('DOMContentLoaded', () => {
    // Check initial state and update both Box 2 and Selected Filters area
    const initialBox1Filter = activeFilters.find(filter => Object.keys(box1Filters).includes(filter));
    if (initialBox1Filter) {
        updateBox2(initialBox1Filter);
    } else {
        updateBox2(); // No Box 1 filter is selected
    }
    updateSelectedFilterBox(); // Update the selected filters area
    updateContentArea(); // Update content area based on filters
});

document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    updateContentArea(searchTerm);
});

function selectFilter(filterName) {
    if (Object.keys(box1Filters).includes(filterName)) {
        // Handle Box 1 Filters
        const previousBox1Filter = activeFilters.find(filter => Object.keys(box1Filters).includes(filter));
        if (previousBox1Filter) {
            removeFilter(previousBox1Filter);
        }
        if (!activeFilters.includes(filterName)) {
            activeFilters.push(filterName);
        }
        updateSelectedFilterBox();
        updateBox2(filterName);
    } else {
        // Handle Box 2 Filters
        if (!activeFilters.includes(filterName)) {
            activeFilters.push(filterName);
        } else {
            activeFilters = activeFilters.filter(filter => filter !== filterName);
        }
        updateSelectedFilterBox();
    }
    updateContentArea();
}

function removeFilter(filterName) {
    // Remove Box 1 filter and related Box 2 filters
    if (Object.keys(box1Filters).includes(filterName)) {
        activeFilters = activeFilters.filter(filter => !box2Filters[filterName]?.includes(filter));
    }
    // Remove the selected filter
    activeFilters = activeFilters.filter(filter => filter !== filterName);
    updateSelectedFilterBox();
    updateContentArea();
}

function updateContentArea(searchTerm = '') {
    const contentArea = document.getElementById('content-area');
    
    // Fade out existing images
    const existingImages = contentArea.querySelectorAll('.image-container');
    existingImages.forEach(imgContainer => {
        imgContainer.classList.add('fade-out');
        imgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
        });
    });

    const box1Filter = activeFilters.find(filter => Object.keys(box1Filters).includes(filter));
    const box2FiltersActive = activeFilters.filter(filter => !Object.keys(box1Filters).includes(filter));

    let imagesToDisplay = [];

    if (box2FiltersActive.length > 0) {
        // Collect images for active Box 2 filters only
        box2FiltersActive.forEach(filter => {
            const images = contentItems[filter] || [];
            images.forEach(item => {
                if (typeof item === 'object') {
                    imagesToDisplay.push(item);
                } else {
                    imagesToDisplay.push({
                        src: item,
                        label: 'Label',
                        customContent: 'Custom content for Label'
                    });
                }
            });
        });
    } else if (box1Filter) {
        // Collect all Box 2 images related to the Box 1 filter
        const box2FilterNames = box2Filters[box1Filter] || [];
        box2FilterNames.forEach(filter => {
            const images = contentItems[filter] || [];
            images.forEach(item => {
                if (typeof item === 'object') {
                    imagesToDisplay.push(item);
                } else {
                    imagesToDisplay.push({
                        src: item,
                        label: 'Label',
                        customContent: 'Custom content for Label'
                    });
                }
            });
        });
    } else {
        // Collect all images when no filters are selected
        Object.keys(contentItems).forEach(category => {
            const images = contentItems[category];
            images.forEach(item => {
                if (typeof item === 'object') {
                    imagesToDisplay.push(item);
                } else {
                    imagesToDisplay.push({
                        src: item,
                        label: 'Label',
                        customContent: 'Custom content for Label'
                    });
                }
            });
        });
    }

    // Filter and sort images based on the search term
    if (searchTerm !== '') {
        imagesToDisplay = imagesToDisplay.filter(item => item.label.toLowerCase().includes(searchTerm))
            .sort((a, b) => a.label.toLowerCase().indexOf(searchTerm) - b.label.toLowerCase().indexOf(searchTerm));
    }

    // Remove duplicates based on labels
    const uniqueLabels = new Set();
    imagesToDisplay = imagesToDisplay.filter(item => {
        if (uniqueLabels.has(item.label)) {
            return false;
        } else {
            uniqueLabels.add(item.label);
            return true;
        }
    });

    // Display the images with fade-in animation
    imagesToDisplay.forEach(item => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container', 'fade-in');
        imgContainer.onclick = () => openModal(item.src, item.label, item.customContent); // Add click event to open modal with custom content

        const imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.classList.add('content-image');
        imgElement.style.width = '150px'; // Smaller image size
        imgElement.onclick = () => openModal(item.src, item.label, item.customContent); // Add click event to open modal with custom content

        // Add label
        const label = document.createElement('div');
        label.classList.add('image-label');
        label.textContent = item.label;
        label.onclick = () => openModal(item.src, item.label, item.customContent); // Add click event to open modal with custom content

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(label);
        contentArea.appendChild(imgContainer);
    });
}
function openModal(imageSrc, label, customContent) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCustomContent = document.getElementById('modalCustomContent');
    modalImage.src = imageSrc;
    modalImage.style.display = 'block'; // Show the image
    modalCustomContent.innerHTML = `<p style="margin: 10px;font-size: 18px;">${label}</p><div>${customContent}</div>`; // Display custom content
    modal.style.display = 'flex'; // Show the modal
}

// Close modal when clicking outside of the modal content
document.getElementById('imageModal').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
});

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide the modal
}
// Close modal when clicking outside of the modal content

function updateSelectedFilterBox() {
    const selectedFilterBox = document.getElementById('selected-filter-content');
    selectedFilterBox.innerHTML = '';

    if (activeFilters.length === 0) {
        selectedFilterBox.innerHTML = '<p style="font-size: 20px; left: 50px;">    ليس هناك اي مرشح مضاف</p>'; // No filters added message
    } else {
        activeFilters.forEach(filterName => {
            const filterText = box1Filters[filterName] || filterName;
            const filterItem = document.createElement('div');
            filterItem.classList.add('selected-filter-item');
            filterItem.innerHTML = `
                <span>${filterText}</span>
                <button class="filter-clear-button" onclick="removeFilter('${filterName}')">X</button>
            `;
            selectedFilterBox.appendChild(filterItem);
        });

        // Add Clear All Button
        const clearAllButton = document.createElement('button');
        clearAllButton.textContent = 'Clear All';
        clearAllButton.classList.add('clear-all-button');
        clearAllButton.onclick = clearAllFilters;
        selectedFilterBox.appendChild(clearAllButton);
    }
}

function clearAllFilters() {
    activeFilters = [];
    saveFiltersToLocalStorage();
    updateSelectedFilterBox();
    updateContentArea();
    updateBox2(); // Call updateBox2 without arguments to show message
}

function loadFiltersFromLocalStorage() {
    const savedFilters = localStorage.getItem('activeFilters');
    if (savedFilters) {
        activeFilters = JSON.parse(savedFilters);
    }
}

function saveFiltersToLocalStorage() {
    localStorage.setItem('activeFilters', JSON.stringify(activeFilters));
}

function filterImages(term) {
    // Hide all images
    const allImages = document.querySelectorAll('.image-container');
    allImages.forEach(img => img.classList.add('hidden'));

    // Show images related to the selected term
    const selectedImages = document.querySelectorAll(`.${term}`);
    selectedImages.forEach(img => img.classList.remove('hidden'));
}

function isBox1FilterActive() {
    return activeFilters.some(filter => Object.keys(box1Filters).includes(filter));
}
function updateBox2() {
    const filterArea2 = document.querySelector('.filter-area-2');
    filterArea2.innerHTML = '';

    if (!isBox1FilterActive()) {
        // Display message when no Box 1 filter is selected
        filterArea2.innerHTML = '<p style="font-size: 20px;">اختر من الاقسام من الاعلى</p>';
    } else {
        // Find the active Box 1 filter
        const activeBox1Filter = activeFilters.find(filter => Object.keys(box1Filters).includes(filter));

        if (activeBox1Filter && box2Filters[activeBox1Filter]) {
            // Show buttons for Box 2 filters related to the selected Box 1 filter
            box2Filters[activeBox1Filter].forEach(buttonName => {
                const button = document.createElement('button');
                button.classList.add('filter-button');
                button.textContent = buttonName;
                button.onclick = () => selectFilter(buttonName);
                filterArea2.appendChild(button);
            });
        }
    }
}
function deleteImage(imageSrc) {
    // Find the image container with the specified image source
    const imgContainers = document.querySelectorAll('.image-container');
    imgContainers.forEach(container => {
        const imgElement = container.querySelector('img');
        if (imgElement && imgElement.src === imageSrc) {
            container.remove(); // Remove the image container
        }
    });

    closeModal(); // Close the modal
}