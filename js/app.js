// Persistent Data Store Architecture using LocalStorage
const DEFAULT_COURSES = [
    { id: 'av', name: 'Artificial Vision', code: 'AV401' },
    { id: 'cp', name: 'Cognitive Psychology', code: 'CP402' },
    { id: 'dss', name: 'Decision Support System', code: 'DSS403' },
    { id: 'iot', name: 'Internet of Things', code: 'IOT404' },
    { id: 'sp', name: 'Smartphone', code: 'SP405' },
    { id: 'sd', name: 'System Design', code: 'SD406' }
];

const SPECIAL_COURSE = { id: 'isp', name: 'Intelligent System Project', code: 'GRAD407' };

// State Management
let currentUser = null;
let currentTheme = localStorage.getItem('academic_theme') || 'light';
let activeSection = 'dashboard';
let activeCourseId = null;

// Database Initializer
function db() {
    return {
        getUsers: () => JSON.parse(localStorage.getItem('academic_users') || '[]'),
        setUsers: (users) => localStorage.setItem('academic_users', JSON.stringify(users)),
        
        // User Content Queries
        getData: (key) => {
            if (!currentUser) return [];
            const allData = JSON.parse(localStorage.getItem(`academic_data_${key}`) || '{}');
            return allData[currentUser.email] || [];
        },
        setData: (key, items) => {
            if (!currentUser) return;
            const allData = JSON.parse(localStorage.getItem(`academic_data_${key}`) || '{}');
            allData[currentUser.email] = items;
            localStorage.setItem(`academic_data_${key}`, JSON.stringify(allData));
        }
    };
}

// IndexedDB Storage Initialization for Large Files (PDFs, PPTs, Videos)
let idbDatabase = null;

function initIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('AcademicFileStore', 1);
        request.onupgradeneeded = function(e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('files_blob')) {
                db.createObjectStore('files_blob', { keyPath: 'id' });
            }
        };
        request.onsuccess = function(e) {
            idbDatabase = e.target.result;
            resolve(idbDatabase);
        };
        request.onerror = function(e) {
            console.error('IndexedDB error', e);
            resolve(null);
        };
    });
}

function saveFileBlob(id, blob) {
    return new Promise((resolve) => {
        if (!idbDatabase) return resolve(false);
        const tx = idbDatabase.transaction('files_blob', 'readwrite');
        const store = tx.objectStore('files_blob');
        store.put({ id, blob });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
    });
}

function getFileBlob(id) {
    return new Promise((resolve) => {
        if (!idbDatabase) return resolve(null);
        const tx = idbDatabase.transaction('files_blob', 'readonly');
        const store = tx.objectStore('files_blob');
        const request = store.get(id);
        request.onsuccess = () => {
            const result = request.result;
            resolve(result ? (result.blob || result) : null);
        };
        request.onerror = () => resolve(null);
    });
}

// Initializing Application
document.addEventListener('DOMContentLoaded', async () => {
    await initIndexedDB();
    applyTheme(currentTheme);
    checkAuthStatus();
});

// Theme Control
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('academic_theme', currentTheme);
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
        lucide.createIcons();
    }
}

// Authentication Handlers
function checkAuthStatus() {
    const storedUser = localStorage.getItem('academic_active_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        document.getElementById('auth-screen').classList.add('hidden');
        document.getElementById('main-layout').classList.remove('hidden');
        updateUserUI();
        showSection('dashboard');
    } else {
        document.getElementById('auth-screen').classList.remove('hidden');
        document.getElementById('main-layout').classList.add('hidden');
    }
}

let isSignUpMode = false;
function toggleAuthMode() {
    isSignUpMode = !isSignUpMode;
    const subtitle = document.getElementById('auth-subtitle');
    const nameGroup = document.getElementById('name-group');
    const submitBtn = document.getElementById('auth-submit-btn');
    const toggleText = document.getElementById('auth-toggle-text');
    const toggleLink = document.getElementById('auth-toggle-link');

    if (isSignUpMode) {
        subtitle.textContent = 'Create your account to start managing your workspace';
        nameGroup.style.display = 'block';
        submitBtn.textContent = 'Sign Up';
        toggleText.textContent = 'Already have an account?';
        toggleLink.textContent = 'Sign In';
    } else {
        subtitle.textContent = 'Sign in to manage your lectures & coursework';
        nameGroup.style.display = 'none';
        submitBtn.textContent = 'Sign In';
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = 'Sign Up';
    }
}

function handleAuthSubmit() {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value.trim();
    const name = document.getElementById('auth-name').value.trim();

    if (!email || !password) {
        showToast('Please fill in all required fields', 'danger');
        return;
    }

    const users = db().getUsers();
    if (isSignUpMode) {
        const existing = users.find(u => u.email === email);
        if (existing) {
            showToast('Account with this email already exists', 'danger');
            return;
        }
        const newUser = { email, password, name: name || 'Student' };
        users.push(newUser);
        db().setUsers(users);
        currentUser = newUser;
        localStorage.setItem('academic_active_user', JSON.stringify(currentUser));
        showToast('Account created successfully!', 'success');
    } else {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            showToast('Invalid email or password', 'danger');
            return;
        }
        currentUser = user;
        localStorage.setItem('academic_active_user', JSON.stringify(currentUser));
        showToast('Welcome back!', 'success');
    }

    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('main-layout').classList.remove('hidden');
    updateUserUI();
    showSection('dashboard');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('academic_active_user');
    checkAuthStatus();
    showToast('Logged out successfully', 'info');
}

function updateUserUI() {
    if (!currentUser) return;
    document.getElementById('sidebar-user-name').textContent = currentUser.name || currentUser.email.split('@')[0];
    const initials = (currentUser.name || currentUser.email).substring(0, 2).toUpperCase();
    document.getElementById('user-avatar-initials').textContent = initials;
}

// Navigation & Sidebar
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function showSection(sectionId, courseId = null) {
    activeSection = sectionId;
    activeCourseId = courseId;

    // Sidebar active state
    document.querySelectorAll('.nav-item').forEach(el => {
        if (el.dataset.section === sectionId) el.classList.add('active');
        else el.classList.remove('active');
    });

    // Mobile sidebar auto-close
    document.getElementById('sidebar').classList.remove('open');

    // Title update
    const titleMap = {
        dashboard: 'Dashboard',
        courses: 'Courses',
        files: 'File Manager',
        notes: 'Notes',
        quizzes: 'Quiz System',
        assignments: 'Assignments',
        calendar: 'Calendar',
        project: 'Intelligent System Project',
        settings: 'Settings'
    };
    document.getElementById('page-title').textContent = courseId ? getCourseName(courseId) : titleMap[sectionId] || 'Workspace';

    renderContentBody();
}

function getCourseName(courseId) {
    if (courseId === SPECIAL_COURSE.id) return SPECIAL_COURSE.name;
    const c = DEFAULT_COURSES.find(x => x.id === courseId);
    return c ? c.name : courseId;
}

// Main Dynamic Renderer
function renderContentBody() {
    const container = document.getElementById('content-body');
    container.innerHTML = '';

    if (activeCourseId) {
        renderCourseDetailPage(container, activeCourseId);
    } else {
        switch (activeSection) {
            case 'dashboard': renderDashboard(container); break;
            case 'courses': renderCoursesList(container); break;
            case 'files': renderFilesSection(container); break;
            case 'notes': renderNotesSection(container); break;
            case 'quizzes': renderQuizzesSection(container); break;
            case 'assignments': renderAssignmentsSection(container); break;
            case 'calendar': renderCalendarSection(container); break;
            case 'project': renderProjectSection(container); break;
            case 'settings': renderSettingsSection(container); break;
            default: renderDashboard(container); break;
        }
    }
    lucide.createIcons();
}

// DASHBOARD RENDERER (Strict User Data Only)
function renderDashboard(container) {
    const lectures = db().getData('lectures');
    const files = db().getData('files');
    const assignments = db().getData('assignments');
    const events = db().getData('events');

    const pendingAssignments = assignments.filter(a => a.status !== 'Completed');

    container.innerHTML = `
        <!-- Quick Action Bar -->
        <div class="section-header">
            <div>
                <h2>Academic Overview</h2>
                <p style="color: var(--text-secondary); font-size: 0.875rem;">Welcome back, ${currentUser.name || 'Student'}</p>
            </div>
            <div class="section-actions">
                <button class="btn btn-primary" onclick="openAddLectureModal()"><i data-lucide="plus"></i> Add Lecture</button>
            </div>
        </div>

        <!-- Dynamic Statistics Cards -->
        <div class="grid-cards" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
            <div class="card">
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight:600;">COURSES</span>
                <h3 style="font-size: 1.8rem; margin: 6px 0;">7</h3>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">6 Core + 1 Project</span>
            </div>
            <div class="card">
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight:600;">UPLOADED LECTURES</span>
                <h3 style="font-size: 1.8rem; margin: 6px 0;">${lectures.length}</h3>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${lectures.length === 0 ? 'No lectures added yet' : 'User uploaded lectures'}</span>
            </div>
            <div class="card">
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight:600;">UPLOADED FILES</span>
                <h3 style="font-size: 1.8rem; margin: 6px 0;">${files.length}</h3>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${files.length === 0 ? 'No files uploaded yet' : 'Total stored files'}</span>
            </div>
            <div class="card">
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight:600;">PENDING ASSIGNMENTS</span>
                <h3 style="font-size: 1.8rem; margin: 6px 0;">${pendingAssignments.length}</h3>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${pendingAssignments.length === 0 ? 'No pending assignments' : 'User created tasks'}</span>
            </div>
        </div>

        <!-- Course Cards -->
        <h3 style="margin: 28px 0 16px 0; font-size: 1.1rem; font-weight: 700;">Course Workspace Cards</h3>
        <div class="grid-cards">
            ${DEFAULT_COURSES.map(c => renderCourseCard(c)).join('')}
            ${renderCourseCard(SPECIAL_COURSE, true)}
        </div>

        <!-- Activity Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-top: 28px;">
            <!-- Recent Uploads -->
            <div class="card">
                <h3 class="card-title" style="display:flex; align-items:center; gap:8px;"><i data-lucide="file-text"></i> Recently Uploaded Files</h3>
                ${files.length === 0 ? `
                    <div class="empty-state" style="padding: 24px;">
                        <p>No files uploaded yet.</p>
                    </div>
                ` : `
                    <ul style="list-style: none; margin-top: 12px;">
                        ${files.slice(-4).reverse().map(f => `
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                                <div>
                                    <strong style="font-size: 0.85rem; display:block;">${escapeHtml(f.name)}</strong>
                                    <span style="font-size: 0.75rem; color: var(--text-secondary);">${f.courseId ? getCourseName(f.courseId) : 'General'} • ${formatBytes(f.size)}</span>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                `}
            </div>

            <!-- Upcoming Events -->
            <div class="card">
                <h3 class="card-title" style="display:flex; align-items:center; gap:8px;"><i data-lucide="calendar"></i> Upcoming Events</h3>
                ${events.length === 0 ? `
                    <div class="empty-state" style="padding: 24px;">
                        <p>No events scheduled yet.</p>
                        <button class="btn btn-outline" style="margin-top: 8px;" onclick="openAddEventModal()">+ Add Event</button>
                    </div>
                ` : `
                    <ul style="list-style: none; margin-top: 12px;">
                        ${events.slice(0, 4).map(e => `
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color);">
                                <strong style="font-size: 0.85rem;">${escapeHtml(e.title)}</strong>
                                <span style="font-size: 0.75rem; color: var(--text-secondary); display:block;">${e.date}</span>
                            </li>
                        `).join('')}
                    </ul>
                `}
            </div>
        </div>
    `;
}

function renderCourseCard(course, isSpecial = false) {
    const lectures = db().getData('lectures').filter(l => l.courseId === course.id);
    const files = db().getData('files').filter(f => f.courseId === course.id);
    
    // Progress calculation based strictly on completed lectures
    const completedLectures = lectures.filter(l => l.status === 'Completed').length;
    const progressPercent = lectures.length > 0 ? Math.round((completedLectures / lectures.length) * 100) : 0;

    return `
        <div class="card course-card ${isSpecial ? 'special-card' : ''}" onclick="showSection('courses', '${course.id}')">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <span class="badge ${isSpecial ? 'badge-primary' : 'badge-outline'}">${course.code}</span>
                </div>
                <h3 class="card-title" style="margin-top: 10px;">${course.name}</h3>
            </div>
            <div>
                <div class="card-stats">
                    <span><i data-lucide="book" style="width:14px;"></i> ${lectures.length} lectures</span>
                    <span><i data-lucide="paperclip" style="width:14px;"></i> ${files.length} files</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top: 4px; font-size: 0.75rem; color: var(--text-muted);">
                    <span>Progress</span>
                    <span>${progressPercent}%</span>
                </div>
            </div>
        </div>
    `;
}

// COURSES SECTION
function renderCoursesList(container) {
    container.innerHTML = `
        <div class="section-header">
            <h2>Course Workspace Categories</h2>
        </div>
        <div class="grid-cards">
            ${DEFAULT_COURSES.map(c => renderCourseCard(c)).join('')}
        </div>
        <h3 style="margin-top: 32px; margin-bottom: 16px;">Graduation Project Category</h3>
        <div style="max-width: 400px;">
            ${renderCourseCard(SPECIAL_COURSE, true)}
        </div>
    `;
}

// INDIVIDUAL COURSE / LECTURE VIEW
function renderCourseDetailPage(container, courseId) {
    const lectures = db().getData('lectures').filter(l => l.courseId === courseId);
    const files = db().getData('files').filter(f => f.courseId === courseId);
    const courseName = getCourseName(courseId);

    container.innerHTML = `
        <div class="section-header">
            <div>
                <button class="btn btn-outline" onclick="showSection('courses')" style="margin-bottom:8px;">
                    <i data-lucide="arrow-left"></i> Back to Courses
                </button>
                <h2>${courseName}</h2>
            </div>
            <div class="section-actions">
                <button class="btn btn-primary" onclick="openAddLectureModal('${courseId}')"><i data-lucide="plus"></i> Add Lecture</button>
            </div>
        </div>

        ${lectures.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="book-open"></i></div>
                <h3>No lectures added yet</h3>
                <p>Start creating lecture entries for ${courseName} to organize your files, notes, and study material.</p>
                <button class="btn btn-primary" onclick="openAddLectureModal('${courseId}')">+ Add Lecture</button>
            </div>
        ` : `
            <div style="display:flex; flex-direction:column; gap: 16px;">
                ${lectures.map(l => renderLectureItemCard(l)).join('')}
            </div>
        `}
    `;
}

function renderLectureItemCard(lecture) {
    const files = db().getData('files').filter(f => f.lectureId === lecture.id);
    const notes = db().getData('notes').filter(n => n.lectureId === lecture.id);

    return `
        <div class="card" style="border-left: 4px solid var(--primary);">
            <div style="display:flex; justify-between; align-items: flex-start;">
                <div>
                    <div style="display:flex; align-items:center; gap: 10px;">
                        <span class="badge badge-primary">${lecture.number ? 'Lecture ' + lecture.number : 'Lecture'}</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${lecture.date || 'No date set'}</span>
                    </div>
                    <h3 style="font-size: 1.2rem; margin: 8px 0; color: var(--text-primary);">${escapeHtml(lecture.title)}</h3>
                    ${lecture.description ? `<p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">${escapeHtml(lecture.description)}</p>` : ''}
                </div>
                <div style="display:flex; gap: 8px;">
                    <select onchange="updateLectureStatus('${lecture.id}', this.value)" style="padding: 4px 8px; font-size: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                        <option value="Not Started" ${lecture.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                        <option value="In Progress" ${lecture.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                        <option value="Completed" ${lecture.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    </select>
                    <button class="icon-btn" onclick="deleteLecture('${lecture.id}')" title="Delete Lecture"><i data-lucide="trash-2"></i></button>
                </div>
            </div>

            <!-- Uploaded Lecture Files -->
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color);">
                <strong style="font-size: 0.85rem; color: var(--text-secondary); display:block; margin-bottom: 8px;">Files (${files.length})</strong>
                ${files.length === 0 ? '<p style="font-size: 0.8rem; color: var(--text-muted);">No files attached to this lecture yet.</p>' : `
                    <div style="display:flex; flex-wrap:wrap; gap: 8px;">
                        ${files.map(f => `
                            <div style="background: var(--bg-primary); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; display:flex; align-items:center; gap: 8px; border: 1px solid var(--border-color);">
                                <i data-lucide="file"></i>
                                <span>${escapeHtml(f.name)}</span>
                                <button class="icon-btn" style="width:24px; height:24px;" onclick="openFilePreview('${f.id}')" title="Open/Preview"><i data-lucide="eye" style="width:14px;"></i></button>
                                <button class="icon-btn" style="width:24px; height:24px;" onclick="downloadFile('${f.id}')" title="Download"><i data-lucide="download" style="width:14px;"></i></button>
                                <button class="icon-btn" style="width:24px; height:24px;" onclick="deleteFile('${f.id}')" title="Delete"><i data-lucide="trash-2" style="width:14px;"></i></button>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>

            <!-- Attached User Notes -->
            ${notes.length > 0 ? `
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color);">
                    <strong style="font-size: 0.85rem; color: var(--text-secondary); display:block; margin-bottom: 8px;">Notes (${notes.length})</strong>
                    ${notes.map(n => `<p style="font-size: 0.85rem; background: var(--primary-light); padding: 8px; border-radius: var(--radius-sm); margin-bottom: 4px;">${escapeHtml(n.content)}</p>`).join('')}
                </div>
            ` : ''}

            <!-- Links -->
            ${lecture.links && lecture.links.length > 0 ? `
                <div style="margin-top: 12px;">
                    <strong style="font-size: 0.85rem; color: var(--text-secondary); display:block; margin-bottom: 4px;">Links</strong>
                    ${lecture.links.map(link => `<a href="${escapeHtml(link)}" target="_blank" style="font-size:0.85rem; color:var(--primary); display:block;">${escapeHtml(link)}</a>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// FILES SECTION
function renderFilesSection(container) {
    const files = db().getData('files');

    container.innerHTML = `
        <div class="section-header">
            <h2>File Manager</h2>
            <button class="btn btn-primary" onclick="openUploadFileModal()"><i data-lucide="upload"></i> Upload File</button>
        </div>

        ${files.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="folder"></i></div>
                <h3>No files uploaded yet</h3>
                <p>Upload PDFs, PPTs, DOCs, images, or zip files from your device to organize them by course and lecture.</p>
                <button class="btn btn-primary" onclick="openUploadFileModal()">+ Upload File</button>
            </div>
        ` : `
            <div class="grid-cards">
                ${files.map(f => renderFileCard(f)).join('')}
            </div>
        `}
    `;
}

function renderFileCard(file) {
    return `
        <div class="card">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="badge badge-primary">${(file.type || 'file').toUpperCase()}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${formatBytes(file.size)}</span>
                </div>
                <h4 style="margin: 10px 0 4px 0; font-size: 0.95rem; font-weight: 600; word-break: break-all;">${escapeHtml(file.name)}</h4>
                <p style="font-size: 0.75rem; color: var(--text-secondary);">${file.courseId ? getCourseName(file.courseId) : 'Unassigned Course'}</p>
                <p style="font-size: 0.75rem; color: var(--text-muted);">Uploaded: ${file.uploadDate}</p>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--border-color); gap: 6px; flex-wrap: wrap;">
                <button class="btn btn-primary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="openFilePreview('${file.id}')"><i data-lucide="eye" style="width:12px;"></i> Open / Preview</button>
                <button class="btn btn-outline" style="padding: 4px 8px; font-size: 0.75rem;" onclick="downloadFile('${file.id}')"><i data-lucide="download" style="width:12px;"></i> Download</button>
                <button class="icon-btn" onclick="deleteFile('${file.id}')" title="Delete File"><i data-lucide="trash-2"></i></button>
            </div>
        </div>
    `;
}

// NOTES SECTION
function renderNotesSection(container) {
    const notes = db().getData('notes');

    container.innerHTML = `
        <div class="section-header">
            <h2>Personal Academic Notes</h2>
            <button class="btn btn-primary" onclick="openAddNoteModal()"><i data-lucide="plus"></i> Add Note</button>
        </div>

        ${notes.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="file-text"></i></div>
                <h3>No notes yet</h3>
                <p>Create and attach personal academic notes to courses or lectures.</p>
                <button class="btn btn-primary" onclick="openAddNoteModal()">+ Add Note</button>
            </div>
        ` : `
            <div class="grid-cards">
                ${notes.map(n => `
                    <div class="card">
                        <div>
                            <div style="display:flex; justify-content:space-between;">
                                <span class="badge badge-warning">${n.courseId ? getCourseName(n.courseId) : 'General'}</span>
                                ${n.pinned ? '<i data-lucide="pin" style="width:14px; color:var(--warning);"></i>' : ''}
                            </div>
                            <h4 style="margin: 8px 0 4px 0; font-size: 1rem;">${escapeHtml(n.title || 'Untitled Note')}</h4>
                            <p style="font-size: 0.85rem; color: var(--text-secondary); white-space: pre-wrap;">${escapeHtml(n.content)}</p>
                        </div>
                        <div style="display:flex; justify-content:flex-end; margin-top: 12px;">
                            <button class="icon-btn" onclick="deleteNote('${n.id}')" title="Delete Note"><i data-lucide="trash-2"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `}
    `;
}

// QUIZZES SECTION (Strict User Creation)
function renderQuizzesSection(container) {
    const quizzes = db().getData('quizzes');

    container.innerHTML = `
        <div class="section-header">
            <h2>User-Created Quizzes</h2>
            <button class="btn btn-primary" onclick="openCreateQuizModal()"><i data-lucide="plus"></i> Create Quiz</button>
        </div>

        ${quizzes.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="help-circle"></i></div>
                <h3>No quizzes created yet</h3>
                <p>You have not created any quizzes yet. Build self-assessment quizzes manually with custom questions and answers.</p>
                <button class="btn btn-primary" onclick="openCreateQuizModal()">+ Create Quiz</button>
            </div>
        ` : `
            <div class="grid-cards">
                ${quizzes.map(q => `
                    <div class="card">
                        <div>
                            <span class="badge badge-primary">${q.courseId ? getCourseName(q.courseId) : 'General Quiz'}</span>
                            <h4 style="margin: 10px 0 6px 0; font-size: 1.1rem;">${escapeHtml(q.title)}</h4>
                            <p style="font-size: 0.85rem; color: var(--text-secondary);">${q.questions ? q.questions.length : 0} Questions</p>
                        </div>
                        <div style="display:flex; justify-between; margin-top: 16px;">
                            <button class="btn btn-outline" style="font-size:0.8rem;" onclick="viewQuiz('${q.id}')">View Questions</button>
                            <button class="icon-btn" onclick="deleteQuiz('${q.id}')"><i data-lucide="trash-2"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `}
    `;
}

// ASSIGNMENTS SECTION
function renderAssignmentsSection(container) {
    const assignments = db().getData('assignments');

    container.innerHTML = `
        <div class="section-header">
            <h2>Assignments & Course Tasks</h2>
            <button class="btn btn-primary" onclick="openAddAssignmentModal()"><i data-lucide="plus"></i> Add Assignment</button>
        </div>

        ${assignments.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="check-square"></i></div>
                <h3>No assignments yet</h3>
                <p>Track assignment deadlines, requirements, and statuses manually.</p>
                <button class="btn btn-primary" onclick="openAddAssignmentModal()">+ Add Assignment</button>
            </div>
        ` : `
            <div class="grid-cards">
                ${assignments.map(a => `
                    <div class="card">
                        <div>
                            <div style="display:flex; justify-between;">
                                <span class="badge badge-danger">Deadline: ${a.deadline || 'No date'}</span>
                                <span class="badge ${a.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${a.status}</span>
                            </div>
                            <h4 style="margin: 10px 0 4px 0; font-size: 1rem;">${escapeHtml(a.title)}</h4>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">${a.courseId ? getCourseName(a.courseId) : 'General'}</p>
                            ${a.description ? `<p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 6px;">${escapeHtml(a.description)}</p>` : ''}
                        </div>
                        <div style="display:flex; justify-between; margin-top: 16px; border-top: 1px solid var(--border-color); padding-top: 10px;">
                            <button class="btn btn-outline" style="font-size:0.75rem;" onclick="toggleAssignmentStatus('${a.id}')">
                                ${a.status === 'Completed' ? 'Mark Pending' : 'Mark Completed'}
                            </button>
                            <button class="icon-btn" onclick="deleteAssignment('${a.id}')"><i data-lucide="trash-2"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `}
    `;
}

// CALENDAR SECTION
function renderCalendarSection(container) {
    const events = db().getData('events');

    container.innerHTML = `
        <div class="section-header">
            <h2>Academic Calendar & Deadlines</h2>
            <button class="btn btn-primary" onclick="openAddEventModal()"><i data-lucide="plus"></i> Add Calendar Event</button>
        </div>

        ${events.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="calendar"></i></div>
                <h3>No events scheduled yet</h3>
                <p>Keep track of exams, assignment deadlines, and lecture presentations.</p>
                <button class="btn btn-primary" onclick="openAddEventModal()">+ Add Event</button>
            </div>
        ` : `
            <div style="display:flex; flex-direction:column; gap: 12px;">
                ${events.map(e => `
                    <div class="card" style="flex-direction:row; justify-between; align-items:center;">
                        <div>
                            <span class="badge badge-primary">${e.date}</span>
                            <h4 style="margin-top: 4px;">${escapeHtml(e.title)}</h4>
                            ${e.description ? `<p style="font-size:0.85rem; color:var(--text-secondary);">${escapeHtml(e.description)}</p>` : ''}
                        </div>
                        <button class="icon-btn" onclick="deleteEvent('${e.id}')"><i data-lucide="trash-2"></i></button>
                    </div>
                `).join('')}
            </div>
        `}
    `;
}

// GRADUATION PROJECT SECTION (Intelligent System Project)
function renderProjectSection(container) {
    const projectTasks = db().getData('projectTasks');
    const projectFiles = db().getData('files').filter(f => f.courseId === SPECIAL_COURSE.id);
    const projectDetails = JSON.parse(localStorage.getItem(`academic_project_info_${currentUser.email}`) || '{}');

    container.innerHTML = `
        <div class="section-header">
            <div>
                <span class="badge badge-primary" style="margin-bottom:4px;">GRADUATION WORKSPACE</span>
                <h2>${SPECIAL_COURSE.name}</h2>
            </div>
            <div class="section-actions">
                <button class="btn btn-primary" onclick="openAddProjectTaskModal()"><i data-lucide="plus"></i> Add Project Task</button>
                <button class="btn btn-outline" onclick="openUploadFileModal('${SPECIAL_COURSE.id}')"><i data-lucide="upload"></i> Upload File</button>
            </div>
        </div>

        <!-- Project Overview / Requirements -->
        <div class="card" style="margin-bottom: 24px;">
            <div style="display:flex; justify-between; align-items:center;">
                <h3 class="card-title"><i data-lucide="sparkles"></i> Project Specifications & Overview</h3>
                <button class="btn btn-outline" style="font-size:0.8rem;" onclick="openEditProjectInfoModal()">Edit Details</button>
            </div>
            ${!projectDetails.title ? `
                <div class="empty-state" style="padding: 20px; border:none;">
                    <p>No project information added yet.</p>
                    <button class="btn btn-outline" style="margin-top: 8px;" onclick="openEditProjectInfoModal()">+ Add Project Information</button>
                </div>
            ` : `
                <div style="margin-top: 12px;">
                    <h4 style="font-size: 1.1rem; color: var(--primary);">${escapeHtml(projectDetails.title)}</h4>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 6px; white-space: pre-wrap;">${escapeHtml(projectDetails.description || 'No description added')}</p>
                    <div style="margin-top: 12px; display:flex; gap: 16px; font-size: 0.85rem; color: var(--text-muted);">
                        <span><strong>Objectives:</strong> ${escapeHtml(projectDetails.objectives || 'None specified')}</span>
                        <span><strong>Team:</strong> ${escapeHtml(projectDetails.team || 'Solo Project')}</span>
                    </div>
                </div>
            `}
        </div>

        <!-- Project Tasks Grid -->
        <h3 style="margin-bottom: 12px;">Project Milestones & Tasks</h3>
        ${projectTasks.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="check-square"></i></div>
                <h3>No project tasks added yet</h3>
                <button class="btn btn-primary" onclick="openAddProjectTaskModal()">+ Add Task</button>
            </div>
        ` : `
            <div class="grid-cards">
                ${projectTasks.map(t => `
                    <div class="card">
                        <div>
                            <span class="badge ${t.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${t.status}</span>
                            <h4 style="margin: 8px 0 4px 0;">${escapeHtml(t.title)}</h4>
                            ${t.description ? `<p style="font-size:0.85rem; color:var(--text-secondary);">${escapeHtml(t.description)}</p>` : ''}
                        </div>
                        <div style="display:flex; justify-between; margin-top: 16px; border-top:1px solid var(--border-color); padding-top:8px;">
                            <button class="btn btn-outline" style="font-size:0.75rem;" onclick="toggleProjectTaskStatus('${t.id}')">Toggle Status</button>
                            <button class="icon-btn" onclick="deleteProjectTask('${t.id}')"><i data-lucide="trash-2"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `}

        <!-- Project Files -->
        <h3 style="margin-top: 32px; margin-bottom: 12px;">Documentation & Source Code Files</h3>
        ${projectFiles.length === 0 ? `
            <div class="empty-state">
                <div class="empty-icon"><i data-lucide="folder"></i></div>
                <h3>No project files uploaded yet</h3>
                <button class="btn btn-outline" onclick="openUploadFileModal('${SPECIAL_COURSE.id}')">+ Upload Project File</button>
            </div>
        ` : `
            <div class="grid-cards">
                ${projectFiles.map(f => renderFileCard(f)).join('')}
            </div>
        `}
    `;
}

// SETTINGS SECTION
function renderSettingsSection(container) {
    container.innerHTML = `
        <div class="section-header">
            <h2>Account & Platform Settings</h2>
        </div>

        <div class="card" style="max-width: 500px;">
            <h3 class="card-title" style="margin-bottom:16px;">User Profile</h3>
            <div class="form-group">
                <label>Email Address</label>
                <input type="text" value="${currentUser.email}" disabled readonly style="background: var(--bg-primary);">
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="settings-name-input" value="${currentUser.name || ''}">
            </div>
            <button class="btn btn-primary" style="margin-top:8px;" onclick="saveUserSettings()">Save Profile</button>
        </div>
    `;
}

function saveUserSettings() {
    const newName = document.getElementById('settings-name-input').value.trim();
    if (!newName) return;
    
    currentUser.name = newName;
    localStorage.setItem('academic_active_user', JSON.stringify(currentUser));
    
    // Update users array
    const users = db().getUsers();
    const idx = users.findIndex(u => u.email === currentUser.email);
    if (idx !== -1) {
        users[idx].name = newName;
        db().setUsers(users);
    }
    
    updateUserUI();
    showToast('Profile updated successfully!', 'success');
}

// DATA OPERATIONS & HANDLERS

// Lecture Operations
function openAddLectureModal(preselectedCourseId = null) {
    showModal('Add New Lecture', `
        <form onsubmit="event.preventDefault(); submitAddLecture();">
            <div class="form-group">
                <label>Target Course *</label>
                <select id="modal-lecture-course" required>
                    ${DEFAULT_COURSES.map(c => `<option value="${c.id}" ${c.id === preselectedCourseId ? 'selected' : ''}>${c.name}</option>`).join('')}
                    <option value="${SPECIAL_COURSE.id}" ${SPECIAL_COURSE.id === preselectedCourseId ? 'selected' : ''}>${SPECIAL_COURSE.name}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Lecture Title *</label>
                <input type="text" id="modal-lecture-title" required placeholder="e.g. Convolutional Neural Networks">
            </div>
            <div class="form-group">
                <label>Lecture Number (Optional)</label>
                <input type="text" id="modal-lecture-number" placeholder="e.g. 01">
            </div>
            <div class="form-group">
                <label>Date (Optional)</label>
                <input type="date" id="modal-lecture-date">
            </div>
            <div class="form-group">
                <label>Description (Optional)</label>
                <textarea id="modal-lecture-desc" rows="3" placeholder="Enter key topics or brief overview..."></textarea>
            </div>
            <div class="form-group">
                <label>Upload Lecture Files (PDF, PPT, DOC, Images, etc.)</label>
                <input type="file" id="modal-lecture-files" multiple>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Save Lecture</button>
        </form>
    `);
}

function submitAddLecture() {
    const courseId = document.getElementById('modal-lecture-course').value;
    const title = document.getElementById('modal-lecture-title').value.trim();
    const number = document.getElementById('modal-lecture-number').value.trim();
    const date = document.getElementById('modal-lecture-date').value;
    const desc = document.getElementById('modal-lecture-desc').value.trim();
    const fileInput = document.getElementById('modal-lecture-files');

    const lectures = db().getData('lectures');
    const newLecture = {
        id: 'lec_' + Date.now(),
        courseId,
        title,
        number,
        date,
        description: desc,
        status: 'Not Started',
        createdDate: new Date().toISOString().split('T')[0]
    };
    lectures.push(newLecture);
    db().setData('lectures', lectures);

    // Process File Uploads if selected with FileReader
    if (fileInput.files.length > 0) {
        const fileList = Array.from(fileInput.files);
        let processedCount = 0;
        const filesData = db().getData('files');

        fileList.forEach(f => {
            const fileId = 'file_' + Math.random().toString(36).substr(2, 9);
            
            // For PDFs and large files, use IndexedDB; for small files, use base64
            if (f.size > 500000 || f.type === 'application/pdf' || f.name.endsWith('.pdf')) {
                saveFileBlob(fileId, f).then(() => {
                    filesData.push({
                        id: fileId,
                        name: f.name,
                        type: f.name.split('.').pop() || 'file',
                        size: f.size,
                        mimeType: f.type,
                        uploadDate: new Date().toISOString().split('T')[0],
                        courseId,
                        lectureId: newLecture.id,
                        storedInIndexedDB: true
                    });
                    processedCount++;
                    if (processedCount === fileList.length) {
                        db().setData('files', filesData);
                        renderContentBody();
                    }
                });
            } else {
                const reader = new FileReader();
                reader.onload = function(e) {
                    filesData.push({
                        id: fileId,
                        name: f.name,
                        type: f.name.split('.').pop() || 'file',
                        size: f.size,
                        mimeType: f.type,
                        dataUrl: e.target.result,
                        uploadDate: new Date().toISOString().split('T')[0],
                        courseId,
                        lectureId: newLecture.id
                    });
                    processedCount++;
                    if (processedCount === fileList.length) {
                        db().setData('files', filesData);
                        renderContentBody();
                    }
                };
                reader.readAsDataURL(f);
            }
        });
    }

    closeModal();
    showToast('Lecture created successfully', 'success');
    renderContentBody();
}

function updateLectureStatus(lectureId, status) {
    const lectures = db().getData('lectures');
    const lec = lectures.find(l => l.id === lectureId);
    if (lec) {
        lec.status = status;
        db().setData('lectures', lectures);
        showToast('Lecture progress updated', 'info');
        renderContentBody();
    }
}

function deleteLecture(lectureId) {
    if (!confirm('Are you sure you want to delete this lecture?')) return;
    let lectures = db().getData('lectures').filter(l => l.id !== lectureId);
    db().setData('lectures', lectures);
    showToast('Lecture deleted', 'info');
    renderContentBody();
}

// File Upload Handlers
function openUploadFileModal(preselectedCourseId = null) {
    showModal('Upload Academic File', `
        <form onsubmit="event.preventDefault(); submitUploadFile();">
            <div class="form-group">
                <label>Target Course *</label>
                <select id="modal-file-course" required>
                    ${DEFAULT_COURSES.map(c => `<option value="${c.id}" ${c.id === preselectedCourseId ? 'selected' : ''}>${c.name}</option>`).join('')}
                    <option value="${SPECIAL_COURSE.id}" ${SPECIAL_COURSE.id === preselectedCourseId ? 'selected' : ''}>${SPECIAL_COURSE.name}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Select File *</label>
                <input type="file" id="modal-file-input" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Upload</button>
        </form>
    `);
}

async function submitUploadFile() {
    const courseId = document.getElementById('modal-file-course').value;
    const fileInput = document.getElementById('modal-file-input');

    if (!fileInput.files.length) return;
    const f = fileInput.files[0];
    const fileId = 'file_' + Math.random().toString(36).substr(2, 9);

    await saveFileBlob(fileId, f);

    const files = db().getData('files');
    files.push({
        id: fileId,
        name: f.name,
        type: f.name.split('.').pop() || 'file',
        size: f.size,
        mimeType: f.type,
        uploadDate: new Date().toISOString().split('T')[0],
        courseId,
        lectureId: null
    });
    db().setData('files', files);

    closeModal();
    showToast('File uploaded successfully', 'success');
    renderContentBody();
}

async function openFilePreview(fileId) {
    const files = db().getData('files');
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showToast('File not found', 'danger');
        return;
    }

    const blob = await getFileBlob(fileId);
    let fileUrl = null;

    if (blob) {
        // Ensure the blob has the correct MIME type
        const mimeType = file.mimeType || 'application/octet-stream';
        const typedBlob = new Blob([blob], { type: mimeType });
        fileUrl = URL.createObjectURL(typedBlob);
    } else if (file.dataUrl) {
        fileUrl = file.dataUrl;
    }

    if (!fileUrl) {
        showToast('File content unavailable. Please re-upload.', 'warning');
        return;
    }

    const type = (file.type || '').toLowerCase();
    const fileName = (file.name || '').toLowerCase();
    
    // Open PDFs directly in browser viewer window/tab
    if (type === 'pdf' || fileName.endsWith('.pdf') || (file.mimeType && file.mimeType.includes('pdf'))) {
        // Create a new window and write the PDF content
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(`
                <html>
                <head><title>${escapeHtml(file.name)}</title></head>
                <body style="margin:0; padding:0; height:100vh; display:flex; flex-direction:column;">
                    <iframe src="${fileUrl}" style="flex:1; width:100%; height:100%; border:none;"></iframe>
                </body>
                </html>
            `);
            newWindow.document.close();
            showToast(`Opening ${file.name} in PDF Viewer`, 'info');
        } else {
            showToast('Popup blocked. Please allow popups for this site.', 'warning');
        }
        return;
    }

    let contentHtml = '';
    if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(type) || fileName.match(/\.(png|jpg|jpeg|gif|svg|webp)$/) || (file.mimeType && file.mimeType.includes('image'))) {
        contentHtml = `<div style="text-align:center;"><img src="${fileUrl}" style="max-width:100%; max-height:70vh; border-radius:var(--radius-sm);" alt="${escapeHtml(file.name)}"></div>`;
    } else if (['txt', 'js', 'css', 'html', 'py', 'json', 'md', 'c', 'cpp', 'java'].includes(type) || fileName.match(/\.(txt|js|css|html|py|json|md|c|cpp|java)$/)) {
        if (blob) {
            const text = await blob.text();
            contentHtml = `<pre style="background:var(--bg-primary); padding:16px; border-radius:var(--radius-sm); max-height:60vh; overflow:auto; font-family:monospace; white-space:pre-wrap;">${escapeHtml(text)}</pre>`;
        } else {
            contentHtml = `<iframe src="${fileUrl}" style="width:100%; height:60vh; border:none;"></iframe>`;
        }
    } else if (['mp4', 'webm', 'ogg'].includes(type) || fileName.match(/\.(mp4|webm|ogg)$/)) {
        contentHtml = `<video controls src="${fileUrl}" style="width:100%; max-height:65vh; border-radius:var(--radius-sm);"></video>`;
    } else if (['mp3', 'wav', 'aac'].includes(type) || fileName.match(/\.(mp3|wav|aac)$/)) {
        contentHtml = `<div style="padding:20px; text-align:center;"><audio controls src="${fileUrl}" style="width:100%;"></audio></div>`;
    } else {
        window.open(fileUrl, '_blank');
        showToast(`Opened ${file.name}`, 'info');
        return;
    }

    showModal(`Preview: ${escapeHtml(file.name)}`, contentHtml);
    lucide.createIcons();
}

async function downloadFile(fileId) {
    const files = db().getData('files');
    const file = files.find(f => f.id === fileId);
    if (!file) {
        showToast('File not found', 'danger');
        return;
    }

    const blob = await getFileBlob(fileId);
    const fileUrl = blob ? URL.createObjectURL(blob) : file.dataUrl;

    if (fileUrl) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(`Downloading ${file.name}`, 'success');
    } else {
        showToast('File content not available', 'danger');
    }
}

function deleteFile(fileId) {
    if (!confirm('Delete this file permanently?')) return;
    let files = db().getData('files').filter(f => f.id !== fileId);
    db().setData('files', files);
    showToast('File deleted', 'info');
    renderContentBody();
}

// Notes Handlers
function openAddNoteModal() {
    showModal('Add Personal Academic Note', `
        <form onsubmit="event.preventDefault(); submitAddNote();">
            <div class="form-group">
                <label>Associated Course</label>
                <select id="modal-note-course">
                    <option value="">General (No Course)</option>
                    ${DEFAULT_COURSES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    <option value="${SPECIAL_COURSE.id}">${SPECIAL_COURSE.name}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Note Title</label>
                <input type="text" id="modal-note-title" placeholder="Title...">
            </div>
            <div class="form-group">
                <label>Note Content *</label>
                <textarea id="modal-note-content" rows="4" required placeholder="Type personal notes..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Save Note</button>
        </form>
    `);
}

function submitAddNote() {
    const courseId = document.getElementById('modal-note-course').value;
    const title = document.getElementById('modal-note-title').value.trim();
    const content = document.getElementById('modal-note-content').value.trim();

    const notes = db().getData('notes');
    notes.push({
        id: 'note_' + Date.now(),
        courseId,
        title,
        content,
        createdDate: new Date().toISOString().split('T')[0]
    });
    db().setData('notes', notes);

    closeModal();
    showToast('Note created successfully', 'success');
    renderContentBody();
}

function deleteNote(noteId) {
    let notes = db().getData('notes').filter(n => n.id !== noteId);
    db().setData('notes', notes);
    showToast('Note removed', 'info');
    renderContentBody();
}

// Quiz Handlers
function openCreateQuizModal() {
    showModal('Create Manual Quiz', `
        <form onsubmit="event.preventDefault(); submitCreateQuiz();">
            <div class="form-group">
                <label>Target Course</label>
                <select id="modal-quiz-course">
                    ${DEFAULT_COURSES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    <option value="${SPECIAL_COURSE.id}">${SPECIAL_COURSE.name}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Quiz Title *</label>
                <input type="text" id="modal-quiz-title" required placeholder="e.g. Midterm Preparation Quiz">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Create Quiz Container</button>
        </form>
    `);
}

function submitCreateQuiz() {
    const courseId = document.getElementById('modal-quiz-course').value;
    const title = document.getElementById('modal-quiz-title').value.trim();

    const quizzes = db().getData('quizzes');
    quizzes.push({
        id: 'quiz_' + Date.now(),
        courseId,
        title,
        questions: []
    });
    db().setData('quizzes', quizzes);

    closeModal();
    showToast('Quiz container created', 'success');
    renderContentBody();
}

function deleteQuiz(quizId) {
    let quizzes = db().getData('quizzes').filter(q => q.id !== quizId);
    db().setData('quizzes', quizzes);
    showToast('Quiz deleted', 'info');
    renderContentBody();
}

// Assignment Handlers
function openAddAssignmentModal() {
    showModal('Add Assignment', `
        <form onsubmit="event.preventDefault(); submitAddAssignment();">
            <div class="form-group">
                <label>Course</label>
                <select id="modal-assign-course">
                    ${DEFAULT_COURSES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    <option value="${SPECIAL_COURSE.id}">${SPECIAL_COURSE.name}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Assignment Title *</label>
                <input type="text" id="modal-assign-title" required placeholder="e.g. Lab 2 Vision Processing">
            </div>
            <div class="form-group">
                <label>Deadline</label>
                <input type="date" id="modal-assign-deadline">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="modal-assign-desc" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add Assignment</button>
        </form>
    `);
}

function submitAddAssignment() {
    const courseId = document.getElementById('modal-assign-course').value;
    const title = document.getElementById('modal-assign-title').value.trim();
    const deadline = document.getElementById('modal-assign-deadline').value;
    const description = document.getElementById('modal-assign-desc').value.trim();

    const assignments = db().getData('assignments');
    assignments.push({
        id: 'assign_' + Date.now(),
        courseId,
        title,
        deadline,
        description,
        status: 'Pending'
    });
    db().setData('assignments', assignments);

    closeModal();
    showToast('Assignment created', 'success');
    renderContentBody();
}

function toggleAssignmentStatus(id) {
    const assignments = db().getData('assignments');
    const a = assignments.find(x => x.id === id);
    if (a) {
        a.status = a.status === 'Completed' ? 'Pending' : 'Completed';
        db().setData('assignments', assignments);
        renderContentBody();
    }
}

function deleteAssignment(id) {
    let assignments = db().getData('assignments').filter(a => a.id !== id);
    db().setData('assignments', assignments);
    renderContentBody();
}

// Event Handlers
function openAddEventModal() {
    showModal('Add Calendar Event', `
        <form onsubmit="event.preventDefault(); submitAddEvent();">
            <div class="form-group">
                <label>Event Title *</label>
                <input type="text" id="modal-event-title" required placeholder="e.g. Project Midterm Presentation">
            </div>
            <div class="form-group">
                <label>Date *</label>
                <input type="date" id="modal-event-date" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="modal-event-desc" rows="2"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add Event</button>
        </form>
    `);
}

function submitAddEvent() {
    const title = document.getElementById('modal-event-title').value.trim();
    const date = document.getElementById('modal-event-date').value;
    const description = document.getElementById('modal-event-desc').value.trim();

    const events = db().getData('events');
    events.push({
        id: 'event_' + Date.now(),
        title,
        date,
        description
    });
    db().setData('events', events);

    closeModal();
    showToast('Event added to calendar', 'success');
    renderContentBody();
}

function deleteEvent(id) {
    let events = db().getData('events').filter(e => e.id !== id);
    db().setData('events', events);
    renderContentBody();
}

// Project Workspace Handlers
function openEditProjectInfoModal() {
    const projectDetails = JSON.parse(localStorage.getItem(`academic_project_info_${currentUser.email}`) || '{}');

    showModal('Edit Graduation Project Info', `
        <form onsubmit="event.preventDefault(); submitEditProjectInfo();">
            <div class="form-group">
                <label>Project Title</label>
                <input type="text" id="modal-proj-title" value="${escapeHtml(projectDetails.title || '')}" placeholder="e.g. Autonomous Robot Navigation System">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="modal-proj-desc" rows="3">${escapeHtml(projectDetails.description || '')}</textarea>
            </div>
            <div class="form-group">
                <label>Objectives</label>
                <input type="text" id="modal-proj-objectives" value="${escapeHtml(projectDetails.objectives || '')}">
            </div>
            <div class="form-group">
                <label>Team Members</label>
                <input type="text" id="modal-proj-team" value="${escapeHtml(projectDetails.team || '')}">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Save Project Info</button>
        </form>
    `);
}

function submitEditProjectInfo() {
    const title = document.getElementById('modal-proj-title').value.trim();
    const description = document.getElementById('modal-proj-desc').value.trim();
    const objectives = document.getElementById('modal-proj-objectives').value.trim();
    const team = document.getElementById('modal-proj-team').value.trim();

    const data = { title, description, objectives, team };
    localStorage.setItem(`academic_project_info_${currentUser.email}`, JSON.stringify(data));

    closeModal();
    showToast('Project information saved', 'success');
    renderContentBody();
}

function openAddProjectTaskModal() {
    showModal('Add Project Task', `
        <form onsubmit="event.preventDefault(); submitAddProjectTask();">
            <div class="form-group">
                <label>Task Title *</label>
                <input type="text" id="modal-ptask-title" required placeholder="e.g. Implement YOLO v8 Model">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea id="modal-ptask-desc" rows="2"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add Task</button>
        </form>
    `);
}

function submitAddProjectTask() {
    const title = document.getElementById('modal-ptask-title').value.trim();
    const description = document.getElementById('modal-ptask-desc').value.trim();

    const tasks = db().getData('projectTasks');
    tasks.push({
        id: 'ptask_' + Date.now(),
        title,
        description,
        status: 'Pending'
    });
    db().setData('projectTasks', tasks);

    closeModal();
    showToast('Project task added', 'success');
    renderContentBody();
}

function toggleProjectTaskStatus(id) {
    const tasks = db().getData('projectTasks');
    const t = tasks.find(x => x.id === id);
    if (t) {
        t.status = t.status === 'Completed' ? 'Pending' : 'Completed';
        db().setData('projectTasks', tasks);
        renderContentBody();
    }
}

function deleteProjectTask(id) {
    let tasks = db().getData('projectTasks').filter(t => t.id !== id);
    db().setData('projectTasks', tasks);
    renderContentBody();
}

// Global Search
function handleGlobalSearch(query) {
    const dropdown = document.getElementById('search-results-dropdown');
    query = query.trim().toLowerCase();

    if (!query) {
        dropdown.classList.add('hidden');
        return;
    }

    const lectures = db().getData('lectures');
    const files = db().getData('files');
    const notes = db().getData('notes');

    const results = [];

    lectures.forEach(l => {
        if (l.title.toLowerCase().includes(query)) {
            results.push({ type: 'Lecture', name: l.title, action: () => showSection('courses', l.courseId) });
        }
    });

    files.forEach(f => {
        if (f.name.toLowerCase().includes(query)) {
            results.push({ type: 'File', name: f.name, action: () => showSection('files') });
        }
    });

    notes.forEach(n => {
        if ((n.title && n.title.toLowerCase().includes(query)) || n.content.toLowerCase().includes(query)) {
            results.push({ type: 'Note', name: n.title || 'Untitled Note', action: () => showSection('notes') });
        }
    });

    dropdown.innerHTML = '';
    if (results.length === 0) {
        dropdown.innerHTML = `<div style="padding:10px; font-size:0.85rem; color:var(--text-muted); text-align:center;">No results found.</div>`;
    } else {
        results.forEach(res => {
            const el = document.createElement('div');
            el.className = 'search-item';
            el.innerHTML = `<span class="badge badge-primary">${res.type}</span> <span>${escapeHtml(res.name)}</span>`;
            el.onclick = () => {
                dropdown.classList.add('hidden');
                document.getElementById('global-search-input').value = '';
                res.action();
            };
            dropdown.appendChild(el);
        });
    }

    dropdown.classList.remove('hidden');
}

// Helper Utilities
function showModal(title, bodyHTML) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHTML;
    document.getElementById('modal-backdrop').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-backdrop').classList.add('hidden');
}

function closeModalOnBackdrop(e) {
    if (e.target.id === 'modal-backdrop') closeModal();
}

function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${escapeHtml(msg)}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function formatBytes(bytes) {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}
