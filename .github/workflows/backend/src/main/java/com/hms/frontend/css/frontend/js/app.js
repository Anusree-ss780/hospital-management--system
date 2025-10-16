// Main JavaScript file for HMS
const API_BASE_URL = 'https://your-backend-url.onrender.com/api';

// Common functions
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Utility functions
function getAuthToken() {
    return localStorage.getItem('authToken');
}

function isLoggedIn() {
    return !!getAuthToken();
}
