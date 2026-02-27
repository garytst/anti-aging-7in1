(function() {
    const THEME_KEY = '7d_theme_mode';

    // Get saved theme or default to dark
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || 'dark';
    }

    // Apply theme
    function applyTheme(mode) {
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem(THEME_KEY, mode);
        // Update toggle button text
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.textContent = mode === 'dark' ? '☀️' : '🌙';
            btn.title = mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }
    }

    // Toggle theme
    window.toggleTheme = function() {
        var current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    };

    // Apply saved theme immediately (before DOM renders)
    var savedTheme = getSavedTheme();
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Inject light mode CSS variables
    var lightCSS = document.createElement('style');
    lightCSS.id = 'light-mode-css';
    lightCSS.textContent = `
        [data-theme="light"] {
            --bg-primary: #f0f4f8;
            --bg-secondary: #e2e8f0;
            --bg-card: rgba(255, 255, 255, 0.85);
            --bg-card-hover: rgba(255, 255, 255, 0.95);
            --border-card: rgba(30, 64, 120, 0.12);
            --border-hover: rgba(30, 64, 120, 0.25);
            --text-primary: #1a202c;
            --text-secondary: #4a5568;
            --text-muted: #718096;
            --glow-cyan: rgba(34, 211, 238, 0.08);
            --glow-emerald: rgba(16, 185, 129, 0.08);
            --glow-purple: rgba(167, 139, 250, 0.08);
            --glow-red: rgba(248, 113, 113, 0.08);
        }
        [data-theme="light"] body {
            background: var(--bg-primary) !important;
            color: var(--text-primary) !important;
        }
        [data-theme="light"] .nav {
            background: rgba(240, 244, 248, 0.95) !important;
            border-bottom-color: rgba(30, 64, 120, 0.1) !important;
        }
        [data-theme="light"] .nav-links a {
            color: var(--text-secondary) !important;
        }
        [data-theme="light"] .nav-links a:hover,
        [data-theme="light"] .nav-links a.active {
            color: #0891b2 !important;
        }
        [data-theme="light"] .nav-hamburger span {
            background: #0891b2 !important;
        }
        [data-theme="light"] .bg-grid {
            background-image: radial-gradient(rgba(30,64,120,0.06) 1px, transparent 1px) !important;
        }
        /* Hero sections */
        [data-theme="light"] .hero,
        [data-theme="light"] [class*="hero"] {
            background: linear-gradient(135deg, #e0f2fe 0%, #f0f4f8 50%, #e8edf5 100%) !important;
        }
        [data-theme="light"] .hero-content h1,
        [data-theme="light"] .hero h1 {
            color: #0c4a6e !important;
        }
        /* General text colors */
        [data-theme="light"] h1, [data-theme="light"] h2, [data-theme="light"] h3 {
            color: #1a202c !important;
        }
        [data-theme="light"] h4, [data-theme="light"] h5 {
            color: #2d3748 !important;
        }
        [data-theme="light"] p, [data-theme="light"] li, [data-theme="light"] td, [data-theme="light"] th {
            color: #4a5568 !important;
        }
        /* Section backgrounds */
        [data-theme="light"] section,
        [data-theme="light"] [style*="background:linear-gradient"],
        [data-theme="light"] [style*="background: linear-gradient"] {
            background: #f0f4f8 !important;
        }
        /* Cards and containers */
        [data-theme="light"] [style*="rgba(15, 31, 58"],
        [data-theme="light"] [style*="rgba(10, 22, 40"],
        [data-theme="light"] [style*="rgba(255,255,255,0.03)"],
        [data-theme="light"] [style*="rgba(255,255,255,0.02)"] {
            background: rgba(255,255,255,0.8) !important;
            border-color: rgba(30,64,120,0.1) !important;
        }
        /* Footer */
        [data-theme="light"] footer {
            background: #e2e8f0 !important;
            color: #4a5568 !important;
        }
        [data-theme="light"] footer p, [data-theme="light"] footer a {
            color: #4a5568 !important;
        }
        /* Disclaimer bar */
        [data-theme="light"] [style*="rgba(251,191,36,0.95)"] {
            background: rgba(251,191,36,0.85) !important;
        }
        /* Colored text should keep their colors in light mode for emphasis */
        [data-theme="light"] [style*="color:#e2e8f0"],
        [data-theme="light"] [style*="color: #e2e8f0"] {
            color: #1a202c !important;
        }
        [data-theme="light"] [style*="color:#94a3b8"],
        [data-theme="light"] [style*="color: #94a3b8"] {
            color: #4a5568 !important;
        }
        [data-theme="light"] [style*="color:#64748b"],
        [data-theme="light"] [style*="color: #64748b"] {
            color: #718096 !important;
        }
        [data-theme="light"] [style*="color:#fff"],
        [data-theme="light"] [style*="color: #fff"],
        [data-theme="light"] [style*="color:white"],
        [data-theme="light"] [style*="color: white"] {
            color: #1a202c !important;
        }
        [data-theme="light"] [style*="color:rgba(255,255,255"] {
            color: rgba(26,32,44,0.7) !important;
        }
        /* Toggle buttons container */
        .toggle-controls {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .toggle-btn {
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.15);
            color: #e2e8f0;
            padding: 5px 10px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.75rem;
            font-weight: 600;
            transition: all 0.3s;
            letter-spacing: 0.5px;
            white-space: nowrap;
        }
        .toggle-btn:hover {
            background: rgba(34,211,238,0.15);
            border-color: rgba(34,211,238,0.3);
        }
        [data-theme="light"] .toggle-btn {
            background: rgba(0,0,0,0.05) !important;
            border-color: rgba(0,0,0,0.12) !important;
            color: #4a5568 !important;
        }
        [data-theme="light"] .toggle-btn:hover {
            background: rgba(8,145,178,0.1) !important;
            border-color: rgba(8,145,178,0.3) !important;
        }
        /* Mobile nav in light mode */
        [data-theme="light"] .nav-links {
            background: rgba(240,244,248,0.98) !important;
        }
    `;
    (document.head || document.documentElement).appendChild(lightCSS);

    // Set up toggle button after DOM ready
    function initThemeButton() {
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
            btn.title = savedTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeButton);
    } else {
        initThemeButton();
    }
})();
