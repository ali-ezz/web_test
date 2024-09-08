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
const contentItems = {
    'الترم الاول': ['images/English I.jpeg', 'images/Social issues and anti-corruption.jpeg','images/Mathematics.jpeg','images/Discrete Mathematics.jpeg','images/Statistics and Probabilities.jpeg','images/Introduction to Computers.jpeg','images/Fundamentals of Information Systems.jpeg'],
    'الترم الثاني': ['images/English II.jpeg', 'images/Logic Design.jpeg','images/Programming.jpeg','images/Physics.jpeg','images/Sustainable Development.jpeg','images/Fundamentals of Economics.jpeg','images/Professional Ethics.jpeg','images/Creative Thinking.jpeg','images/Mass Communication.jpeg','images/Advanced Mathematics.jpeg','images/Fundamentals of Management.jpeg'],
    'الترم الثالث': ['images/Electronics.jpeg', 'images/Algorithms.jpeg','images/Database System.jpeg','images/Computer Networks.jpeg','images/Operating Systems.jpeg','images/Advanced Statistics and Probabilities.jpeg','images/Linear Algebra.jpeg','images/Signal and systems.jpeg'],
    'الترم الرابع': ['images/System Analysis and Design.jpeg', 'images/Data Structures.jpeg','images/Advanced Statistics and Probabilities.jpeg','images/Linear Algebra.jpeg','images/Signal and systems.jpeg','images/Modeling and Simulation.jpeg','images/Internet Technology.jpeg','images/Advanced Programming.jpeg','images/Software Projects Management.jpeg','images/Artificial Intelligence.jpeg','images/Data Warehouse.jpeg'],
  
    'الترم الخامس': ['images/Advanced Database.jpeg', 'images/Data management.jpeg','images/Database Security.jpeg','images/Machine Learning.jpeg','images/Data analysis algorithms.jpeg','images/Microeconomics and Informatics.jpeg','images/Basic of AI programming skills.jpeg'],//'images/.jpeg'
    'الترم السادس': ['images/Practical Data Mining.jpeg', 'images/Introduction to Big Data.jpeg','images/Data Visualization.jpeg','images/R and Python programming language.jpeg','images/Neural Networks and Deep Learning.jpeg','images/Technology of Crypto currencies.jpeg','images/Elements of Econometrics.jpeg'],
    'الترم السابع': ['images/Hadoop and Apache Spark essentials.jpeg','images/Information Modelling.jpeg', 'images/Knowledgebase Management Systems.jpeg','images/Graduation project 1.jpeg','images/Logistics.jpeg','images/Legal Basis and IT Law.jpeg','images/Reinforcement Learning.jpeg','images/Data wrangling.jpeg'],
    'الترم الثامن': ['images/Big Data Analysis.jpeg', 'images/Practical Data Science.jpeg','images/Graduation project 2.jpeg','images/Practical training - 2.jpeg','images/Communication and Negotiation Skills.jpeg','images/Innovation & Entrepreneurship.jpeg','images/Problem Solving & Decision- making Skills.jpeg'],
   
    'الترم التاسع': ['images/Introduction to Art and Design.jpeg', 'images/Web Design.jpeg','images/Foundations of Digital Graphic Design.jpeg','images/Multimedia Programming.jpeg','images/Selected Topics in Media Arts and Technology.jpeg','images/Introduction to Digital Music.jpeg','images/Drawing Studio.jpeg'],
    'الترم العاشر': ['images/Multimedia Design.jpeg', 'images/Computer Aided Design.jpeg','images/HCI And Applications.jpeg','images/Game Programming.jpeg','images/Visual Communications and Design.jpeg','images/The Mass Media.jpeg','images/Communication and Negotiation Skills.jpeg','images/Innovation & Entrepreneurship.jpeg','images/Problem Solving & Decision- making Skills.jpeg'],
    'k': ['images/Advanced Multimedia Programming.jpeg', 'images/Digital Photography and Media Production.jpeg','images/Introduction to 2D Animation.jpeg','images/Graduation project 1.jpeg','images/Visual Effects, Compositing and Mixed Media.jpeg','images/Introduction to Video Graphics.jpeg'],
    'l': ['images/Introduction to 3D Modeling and Animation.jpeg', 'images/Typography and Layout.jpeg','images/Image And Video Processing.jpeg','images/Virtual Reality and Tele-Presence.jpeg','images/Graduation project 2.jpeg','images/Practical training - 2.jpeg'],
    
    'الترم الحادي عشر': ['images/Pattern recognition.jpeg', 'images/Real-time systems.jpeg','images/Micro Processors.jpeg','images/Computer Architecture.jpeg','images/Machine Learning.jpeg','images/Robotics selected topics.jpeg','images/Virtual reality.jpeg'],
    'الترم الثاني عشر': ['images/Neural Networks.jpeg', 'images/Parallel Processing.jpeg','images/Automatic control.jpeg','images/Embedded Systems.jpeg','images/Computer networks and information security.jpeg','images/Digital signal processing.jpeg','images/Computer vision.jpeg','images/Speech processing.jpeg'],
    'h': ['images/Robot design.jpeg', 'images/Robot Arms.jpeg','images/Natural Language Processing.jpeg','images/Graduation project 1.jpeg','images/Computer networks and information security.jpeg','images/Digital signal processing.jpeg','images/Computer vision.jpeg','images/Speech processing.jpeg'],
    'f': ['images/Sensors and actuators.jpeg', 'images/Mobile robots.jpeg','images/Graduation project 2.jpeg','images/Practical training - 2.jpeg','images/Communication and Negotiation Skills.jpeg','images/Innovation & Entrepreneurship.jpeg','images/Problem Solving & Decision- making Skills.jpeg']


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
            const labelsArray = labels[filter] || []; // Retrieve the labels for the selected filter

            images.forEach((imageSrc, index) => {
                if (imageSrc) {
                    imagesToDisplay.push({
                        src: imageSrc,
                        label: labelsArray[index] || 'Label'
                    });
                }
            });
        });
    } else if (box1Filter) {
        // Collect all Box 2 images related to the Box 1 filter
        const box2FilterNames = box2Filters[box1Filter] || [];
        box2FilterNames.forEach(filter => {
            const images = contentItems[filter] || [];
            const labelsArray = labels[filter] || []; // Retrieve the labels for the selected filter

            images.forEach((imageSrc, index) => {
                if (imageSrc) {
                    imagesToDisplay.push({
                        src: imageSrc,
                        label: labelsArray[index] || 'Label'
                    });
                }
            });
        });
    } else {
        // Collect all images when no filters are selected
        Object.keys(contentItems).forEach(category => {
            const images = contentItems[category];
            const labelsArray = labels[category] || [];

            images.forEach((imageSrc, index) => {
                if (imageSrc) {
                    imagesToDisplay.push({
                        src: imageSrc,
                        label: labelsArray[index] || 'Label'
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

        const imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.classList.add('content-image');
        imgElement.style.width = '150px'; // Smaller image size
        imgElement.onclick = () => openModal(item.src, item.label); // Add click event to open modal

        // Add label
        const label = document.createElement('div');
        label.classList.add('image-label');
        label.textContent = item.label;

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(label);
        contentArea.appendChild(imgContainer);
    });
}

function openModal(imageSrc, label) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCustomContent = document.getElementById('modalCustomContent');

    modalImage.src = imageSrc;
    modalCustomContent.innerHTML = `<p>${label}</p>`; // Customize this content as needed

    modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide the modal
}
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
