(function() {
    const LANG_KEY = '7d_lang';

    function getSavedLang() {
        return localStorage.getItem(LANG_KEY) || 'zh';
    }

    // Comprehensive translation dictionary (Chinese -> English)
    const translations = {
        // ===== NAVIGATION =====
        'HOME 首頁': 'HOME',
        '7D DIMENSIONS': '7D DIMENSIONS',
        'BENEFITS 效益': 'BENEFITS',
        'FOUNDER 始創人': 'FOUNDER',
        'VISION 願景': 'VISION',
        'DOCS 文件': 'DOCS',
        '← Main Site': '← Main Site',

        // ===== INDEX.HTML - HERO =====
        '七維逆齡系統': '7D Anti-Aging System',
        '7D Anti-Aging System 5.0': '7D Anti-Aging System 5.0',
        '古今智慧融合 · 科學實證驅動': 'Ancient Wisdom Meets Modern Science',
        '結合黃帝內經千年養生智慧與現代醫學科技': 'Combining millennia of Yellow Emperor\'s Classic wisdom with modern medical technology',
        '打造全方位逆齡養生系統': 'Building a comprehensive anti-aging wellness system',

        // ===== INDEX.HTML - STATS =====
        '臨床研究支持': 'Clinical Research Supported',
        '維度協同': 'Dimensions Synergy',
        '年逆齡目標': 'Year Reversal Target',
        '每日療程': 'Daily Treatment',

        // ===== INDEX.HTML - 7D OVERVIEW =====
        '七大維度 · 協同增效': '7 Dimensions · Synergistic Enhancement',
        '每個維度獨立有效，組合使用效果倍增': 'Each dimension is independently effective; combined use multiplies results',
        'EECP 體外反搏': 'EECP Counterpulsation',
        '核心驅動力 — 軟化血管、增生微絲血管、改善全身血液循環': 'Core driver — Softens vessels, grows micro-capillaries, improves circulation',
        'mHBOT 微高壓氧': 'mHBOT Micro-Hyperbaric O₂',
        '1.3ATA 安全氣壓下提升血氧濃度，加速細胞修復': '1.3 ATA safe pressure boosts blood oxygen, accelerates cell repair',
        '遠紅外線療法': 'Far Infrared Therapy',
        '深層熱能滲透，促進微循環，緩解疼痛與炎症': 'Deep thermal penetration, promotes microcirculation, relieves pain & inflammation',
        '幹細胞再生': 'Stem Cell Regeneration',
        '年度靜脈注射，從細胞層面修復與再生': 'Annual IV injection, repair & regeneration at cellular level',
        'AI 數據追蹤': 'AI Data Tracking',
        '智能監測健康指標，個人化調整療程方案': 'Smart health monitoring, personalized treatment adjustment',
        '營養管理': 'Nutrition Management',
        '科學配方營養補充，從內而外支持逆齡': 'Scientific nutritional supplementation, supporting anti-aging from within',
        '運動處方': 'Exercise Prescription',
        '個人化運動方案，配合療程最大化效果': 'Personalized exercise plans, maximizing treatment results',

        // ===== INDEX.HTML - STRATEGY =====
        '策略對比': 'Strategy Comparison',
        '傳統保養': 'Traditional Care',
        '7D 逆齡系統': '7D Anti-Aging System',

        // ===== INDEX.HTML - STEM CELL =====
        '幹細胞再生技術': 'Stem Cell Regeneration Technology',
        '年度幹細胞注射 — 從細胞層面啟動逆齡': 'Annual Stem Cell Injection — Activating Anti-Aging at Cellular Level',

        // ===== BENEFITS.HTML =====
        '效益總覽': 'Benefits Overview',
        '七維逆齡系統的全面健康效益': 'Comprehensive Health Benefits of the 7D Anti-Aging System',
        '逆齡的定義': 'Definition of Anti-Aging',
        'What is Anti-Aging?': 'What is Anti-Aging?',
        '逆齡是指透過正確的飲食、規律運動、充足睡眠與生活作息調整，使個人的「生理年齡」低於「實際年齡」的狀態。這不僅追求外表（皮膚、體態）的年輕化，更強調體內機能（代謝、心血管）的改善，達到「逆生長」的健康心態與生理水平。': 'Anti-aging refers to achieving a state where one\'s "biological age" is lower than their "chronological age" through proper diet, regular exercise, adequate sleep, and lifestyle adjustments. It pursues not only youthful appearance (skin, physique) but emphasizes internal function improvement (metabolism, cardiovascular), achieving "reverse growth" in both health mindset and physiological level.',
        '— Vogue Taiwan': '— Vogue Taiwan',

        // Heart Rate Section
        '你平時關注什麼健康指標？': 'What Health Indicators Do You Monitor?',
        '一般人 vs 逆齡者的健康觀念差異': 'Mindset Gap: Ordinary People vs Age Reversers',
        '一般人 Ordinary': 'Ordinary People',
        '逆齡者 Age Reverser': 'Age Reversers',
        '只看血壓': 'Only Check Blood Pressure',
        '更看靜息心率': 'Focus on Resting Heart Rate',
        '「正常就好了」': '"Normal is good enough"',
        '「追求逆齡黃金標準」': '"Pursuing the golden standard of anti-aging"',
        '血壓只反映「當下」壓力': 'BP only reflects "current" pressure',
        '心率反映心臟「長期效率」': 'HR reflects heart\'s "long-term efficiency"',
        '受情緒、飲食影響大': 'Heavily affected by emotions & diet',
        '穩定可靠，不易受干擾': 'Stable & reliable, not easily disturbed',
        '正常 ≠ 心臟健康': 'Normal ≠ Heart Health',
        '直接反映心肺功能水平': 'Directly reflects cardiopulmonary function',
        '是「結果」指標': 'It\'s a "result" indicator',
        '是「根因」指標': 'It\'s a "root cause" indicator',

        // Blood Pressure Chart
        '健康血壓對照表': 'Blood Pressure Reference Chart',
        '分類 Category': 'Category',
        '收縮壓 Systolic': 'Systolic',
        '舒張壓 Diastolic': 'Diastolic',
        '理想 Optimal': 'Optimal',
        '正常 Normal': 'Normal',
        '偏高 Elevated': 'Elevated',
        '高血壓一期 Stage 1': 'Hypertension Stage 1',
        '高血壓二期 Stage 2': 'Hypertension Stage 2',
        '危急 Crisis': 'Crisis',
        '和 and': 'and',
        '或 or': 'or',
        '理想目標': 'Ideal Target',
        '測量時機': 'When to Measure',
        '晨起空腹': 'Morning Fasting',
        '重要提醒': 'Important Reminder',
        '血壓正常 ≠ 心臟健康': 'Normal BP ≠ Healthy Heart',

        // EECP BP & HR
        'EECP 體外反搏：同時改善血壓與心率': 'EECP: Improves Both Blood Pressure & Heart Rate',
        '改善血壓健康': 'Improve Blood Pressure',
        '有效降低心跳': 'Reduce Heart Rate',
        '軟化血管，降低血管阻力': 'Softens vessels, reduces vascular resistance',
        '釋放 NO 一氧化氮，擴張血管': 'Releases NO nitric oxide, dilates vessels',
        '增生微絲血管，改善微循環': 'Grows micro-capillaries, improves microcirculation',
        '長期治療有效穩定血壓': 'Long-term treatment effectively stabilizes BP',
        '被動運動效應，增強心肺功能': 'Passive exercise effect, enhances cardiopulmonary function',
        '提升每次心搏輸出量': 'Increases stroke volume per heartbeat',
        '減低心臟負荷，心臟更輕鬆': 'Reduces cardiac workload, heart works easier',
        '長期治療有效降低靜息心率': 'Long-term treatment effectively lowers resting HR',
        '一個療程，同時改善兩大指標': 'One Treatment, Two Key Indicators Improved',

        // Heart Rate Chart
        '心跳 × 年齡 × 衰老 終極對照表': 'Heart Rate × Age × Aging: Ultimate Reference Chart',
        '你的心率暴露了你的真實年齡': 'Your Heart Rate Reveals Your True Age',
        '逆齡 Younger': 'Younger',
        '健康 Healthy': 'Healthy',
        '平均 Average': 'Average',
        '偏老 Older': 'Older',
        '早衰 Premature': 'Premature',
        '關鍵指標': 'Key Indicator',
        '靜息心率': 'Resting Heart Rate',
        '逆齡黃金標準': 'Anti-Aging Gold Standard',

        // WHY section
        '為什麼心率比血壓更重要？': 'Why is Heart Rate More Important Than Blood Pressure?',

        // Shields section
        '三大防護目標': 'Three Protection Targets',
        '防猝死': 'Prevent Sudden Death',
        '防中風': 'Prevent Stroke',
        '防失智': 'Prevent Dementia',

        // Clinical Proof
        'CLINICAL PROOF 臨床實證': 'CLINICAL PROOF',
        'EECP：加速逆齡的核心驅動力': 'EECP: The Core Accelerator for Faster Anti-Aging',

        // ===== FOUNDER.HTML =====
        '始創人研究歷程': 'Founder\'s Research Journey',
        '逆齡保養從心而發': 'Anti-Aging Wellness — Begins from the Heart',
        '經過數年親身見證研究，贊助研發臨床，得到多名醫生及醫學教授支持': 'After years of personal research, sponsoring clinical development, supported by multiple doctors and medical professors',
        '黃帝內經的啟示': 'Wisdom from the Yellow Emperor\'s Classic',
        '古人智慧 · 現代實證': 'Ancient Wisdom · Modern Evidence',
        '心主血脈': 'The Heart Governs Blood Vessels',
        '研究結論': 'Research Conclusion',
        'The Conclusion': 'The Conclusion',
        '每天一至兩小時': '1-2 Hours Daily',
        '輕鬆養生療程': 'Relaxing Wellness Therapy',
        '活得精彩': 'Live Brilliantly',
        '繼續任性': 'Stay Unstoppable',

        // ===== VISION.HTML =====
        '研究願景': 'Research Vision',
        'Research Vision': 'Research Vision',
        '慈善公益': 'Charity & Public Good',
        '讓身邊的人更健康、更長壽、更有活力、更任性': 'Making people around us healthier, longer-lived, more vibrant, and more unstoppable',
        '開放願景': 'Open Vision',
        '打動政府，全面推廣 EECP': 'Inspiring Government to Adopt EECP Nationwide',
        '私人項目': 'Private Projects',
        '隨緣': 'Let Nature Take Its Course',
        '防猝死、防中風、防失智': 'Prevent sudden death, stroke, and dementia',
        '增強活力': 'Enhance vitality',
        '減低心臟負荷': 'Reduce cardiac workload',
        '軟化血管': 'Soften blood vessels',
        '增生微絲血管': 'Grow micro-capillaries',

        // ===== DOCUMENTS.HTML =====
        '研究文件庫': 'Research Document Library',
        '文件下載': 'Document Downloads',
        '全部': 'All',
        '下載': 'Download',
        '預覽': 'Preview',

        // ===== COMMON =====
        '本項目仍處於研究階段 This project is still in the research stage': 'This project is still in the research stage',
        '逆齡保養從心而發 · Begins from the Heart': 'Anti-Aging Wellness · Begins from the Heart',
        '古今智慧融合': 'Ancient & Modern Wisdom',
        '親身實證驗證': 'Personal Evidence',
        '醫學權威背書': 'Medical Authority Endorsed',
        'AI 數據支持': 'AI Data Supported',
    };

    // Store original text content for reverting
    var originalTexts = new Map();
    var isInitialized = false;

    function applyLang(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem(LANG_KEY, lang);

        // Update toggle button
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = lang === 'zh' ? 'EN' : '中';
            btn.title = lang === 'zh' ? 'Switch to English' : '切換至中文';
        }

        if (lang === 'en') {
            translateToEnglish();
        } else {
            revertToChinese();
        }
    }

    function translateToEnglish() {
        // Walk through all text nodes and translate
        var walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    // Skip script and style tags
                    var parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    var tag = parent.tagName.toLowerCase();
                    if (tag === 'script' || tag === 'style') return NodeFilter.FILTER_REJECT;
                    // Skip auth overlay
                    if (parent.closest('#auth-overlay')) return NodeFilter.FILTER_REJECT;
                    // Skip toggle buttons
                    if (parent.id === 'lang-toggle' || parent.id === 'theme-toggle') return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        var node;
        while (node = walker.nextNode()) {
            var text = node.textContent.trim();
            if (!text) continue;

            // Save original if not saved
            if (!originalTexts.has(node)) {
                originalTexts.set(node, node.textContent);
            }

            // Try exact match first
            if (translations[text]) {
                node.textContent = node.textContent.replace(text, translations[text]);
                continue;
            }

            // Try partial matches for longer text
            var changed = node.textContent;
            for (var zh in translations) {
                if (changed.includes(zh)) {
                    changed = changed.replace(zh, translations[zh]);
                }
            }
            if (changed !== node.textContent) {
                node.textContent = changed;
            }
        }

        // Also translate placeholder attributes
        document.querySelectorAll('[placeholder]').forEach(function(el) {
            if (!el.dataset.origPlaceholder) {
                el.dataset.origPlaceholder = el.placeholder;
            }
            if (translations[el.placeholder]) {
                el.placeholder = translations[el.placeholder];
            }
        });

        // Translate title attributes
        document.querySelectorAll('[title]').forEach(function(el) {
            if (!el.dataset.origTitle) {
                el.dataset.origTitle = el.title;
            }
            if (translations[el.title]) {
                el.title = translations[el.title];
            }
        });
    }

    function revertToChinese() {
        originalTexts.forEach(function(original, node) {
            if (node.parentElement) { // Check node still exists
                node.textContent = original;
            }
        });

        // Revert placeholders
        document.querySelectorAll('[data-orig-placeholder]').forEach(function(el) {
            el.placeholder = el.dataset.origPlaceholder;
        });

        // Revert titles
        document.querySelectorAll('[data-orig-title]').forEach(function(el) {
            el.title = el.dataset.origTitle;
        });
    }

    // Toggle language
    window.toggleLang = function() {
        var current = document.documentElement.getAttribute('data-lang') || 'zh';
        applyLang(current === 'zh' ? 'en' : 'zh');
    };

    // Apply saved language immediately for CSS
    var savedLang = getSavedLang();
    document.documentElement.setAttribute('data-lang', savedLang);

    // Set up after DOM ready
    function initLang() {
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.textContent = savedLang === 'zh' ? 'EN' : '中';
            btn.title = savedLang === 'zh' ? 'Switch to English' : '切換至中文';
        }
        if (savedLang === 'en') {
            // Small delay to ensure DOM is fully rendered
            setTimeout(function() { translateToEnglish(); }, 100);
        }
        isInitialized = true;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLang);
    } else {
        initLang();
    }
})();
