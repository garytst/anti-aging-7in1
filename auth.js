(function() {
    // Password hash (SHA-256 for basic obfuscation)
    const PASS_HASH = '2cdc315f5999c18fd6682c0ef5c0d0d74f11f208c77f17dbad225b123a6b8720';
    const SESSION_KEY = '7d_anti_aging_auth';
    const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    // Simple SHA-256 hash function
    async function sha256(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // Check if already authenticated
    function isAuthenticated() {
        try {
            const stored = localStorage.getItem(SESSION_KEY);
            if (!stored) return false;
            const data = JSON.parse(stored);
            if (Date.now() - data.time < SESSION_DURATION && data.hash === PASS_HASH) {
                return true;
            }
            localStorage.removeItem(SESSION_KEY);
            return false;
        } catch(e) {
            return false;
        }
    }

    // Save authentication
    function saveAuth() {
        localStorage.setItem(SESSION_KEY, JSON.stringify({
            hash: PASS_HASH,
            time: Date.now()
        }));
    }

    // If already authenticated, show content immediately
    if (isAuthenticated()) {
        return; // Allow page to render normally
    }

    // Hide the page content
    document.documentElement.style.visibility = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Wait for DOM to be ready, then show password overlay
    function showPasswordScreen() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <div style="
                position:fixed; inset:0; z-index:999999;
                background:linear-gradient(135deg, #0a0e1a 0%, #0d1525 50%, #0a0e1a 100%);
                display:flex; align-items:center; justify-content:center;
                font-family:'Noto Sans TC','Inter',sans-serif;
            ">
                <div style="
                    text-align:center; padding:48px 40px;
                    background:rgba(255,255,255,0.03);
                    border:1px solid rgba(251,191,36,0.2);
                    border-radius:16px; max-width:400px; width:90%;
                    backdrop-filter:blur(20px);
                ">
                    <div style="font-size:2.5rem; margin-bottom:16px;">🔐</div>
                    <h1 style="
                        font-size:1.4rem; font-weight:800; color:#fff;
                        letter-spacing:3px; margin-bottom:8px;
                    ">7D ANTI-AGING 5.0</h1>
                    <p style="
                        font-size:0.85rem; color:rgba(255,255,255,0.5);
                        margin-bottom:32px; letter-spacing:1px;
                    ">Private Research Portal · 私人研究平台</p>
                    <div style="margin-bottom:16px;">
                        <input type="password" id="auth-password" placeholder="請輸入密碼 Enter Password" style="
                            width:100%; padding:14px 20px; font-size:1rem;
                            background:rgba(255,255,255,0.06);
                            border:1px solid rgba(255,255,255,0.15);
                            border-radius:8px; color:#fff; outline:none;
                            text-align:center; letter-spacing:2px;
                            transition:border-color 0.3s;
                        " onfocus="this.style.borderColor='rgba(251,191,36,0.5)'"
                          onblur="this.style.borderColor='rgba(255,255,255,0.15)'"
                        />
                    </div>
                    <button id="auth-submit" style="
                        width:100%; padding:14px; font-size:0.95rem;
                        font-weight:700; letter-spacing:2px;
                        background:linear-gradient(135deg, #fbbf24, #f59e0b);
                        color:#0a0e1a; border:none; border-radius:8px;
                        cursor:pointer; transition:transform 0.2s, box-shadow 0.2s;
                    " onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 4px 20px rgba(251,191,36,0.3)'"
                       onmouseout="this.style.transform='none';this.style.boxShadow='none'"
                    >進入 ENTER</button>
                    <p id="auth-error" style="
                        color:#e74c3c; font-size:0.8rem; margin-top:16px;
                        display:none;
                    ">密碼錯誤 Incorrect Password</p>
                    <p style="
                        font-size:0.7rem; color:rgba(255,255,255,0.25);
                        margin-top:24px;
                    ">逆齡保養從心而發 · Begins from the Heart</p>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const input = document.getElementById('auth-password');
        const btn = document.getElementById('auth-submit');
        const error = document.getElementById('auth-error');

        async function tryLogin() {
            const val = input.value.trim();
            if (!val) return;
            const hash = await sha256(val);
            if (hash === PASS_HASH) {
                saveAuth();
                overlay.remove();
                document.documentElement.style.visibility = 'visible';
                document.documentElement.style.overflow = '';
            } else {
                error.style.display = 'block';
                input.value = '';
                input.style.borderColor = '#e74c3c';
                setTimeout(() => {
                    input.style.borderColor = 'rgba(255,255,255,0.15)';
                    error.style.display = 'none';
                }, 2000);
            }
        }

        btn.addEventListener('click', tryLogin);
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') tryLogin();
        });

        // Auto focus
        setTimeout(() => input.focus(), 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showPasswordScreen);
    } else {
        showPasswordScreen();
    }
})();
