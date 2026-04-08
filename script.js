const MockData = {
    items: [
        { id: 1, name: "Modern Desk Setup", thumbnail: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&w=400", submissions: 12, category: "Workspace" },
        { id: 2, name: "Minimalist Living Room", thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400", submissions: 8, category: "Interior" },
        { id: 3, name: "Mechanical Keyboard", thumbnail: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=400", submissions: 24, category: "Tech" },
        { id: 4, name: "Abstract Art Piece", thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400", submissions: 5, category: "Art" }
    ],
    userSubmissions: [
        { id: "#9921", item: "Modern Desk Setup", date: "2023-10-24", status: "Approved", points: 50, type: "Hardware" },
        { id: "#9920", item: "Mechanical Keyboard", date: "2023-10-22", status: "Pending", points: 0, type: "Component" },
        { id: "#9918", item: "Minimalist Living Room", date: "2023-10-15", status: "Rejected", points: 0, type: "Furniture" }
    ]
};

function navigateTo(url) {
    window.location.href = url;
}

function handleSearch(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        navigateTo('search-results.html');
    }
}

// Multi-step Submission Flow
let currentStep = 1;
function nextStep() {
    const currentStepEl = document.getElementById(`step-${currentStep}`);
    if (currentStepEl) {
        currentStepEl.classList.remove('active');
        currentStep++;
        const nextStepEl = document.getElementById(`step-${currentStep}`);
        if (nextStepEl) {
            nextStepEl.classList.add('active');
        }
    }
}

function submitForm() {
    nextStep(); // Move to success state
}

// Dashboard Interaction
function filterSubmissions(status) {
    console.log("Filtering for: ", status);
    // Mock UI update logic
    const rows = document.querySelectorAll('.sub-row');
    rows.forEach(row => {
        if (status === 'all' || row.dataset.status === status) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}

// Admin Actions
function adminAction(action, id) {
    alert(`${action} performed on submission ${id}`);
    const row = document.getElementById(`row-${id}`);
    if (row) row.style.opacity = '0.5';
}