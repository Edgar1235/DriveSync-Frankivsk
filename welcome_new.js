document.addEventListener("DOMContentLoaded", function() {
    updateAuthStateUI();
});

function updateAuthStateUI() {
    const savedUser = localStorage.getItem('driveSync_user');
    const tempUser = sessionStorage.getItem('driveSync_temp_user');
    const enterBtn = document.getElementById('enter-btn');
    const googleBtnText = document.getElementById('google-btn-text');

    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || localStorage.getItem('selected_lang') || 'uk';
    
    const translations = {
        uk: { registered: "✅ Акаунт: ", default: "Зареєструватися / Увійти" },
        en: { registered: "✅ Account: ", default: "Sign up / Log in" },
        pl: { registered: "✅ Konto: ", default: "Zarejestruj się / Zaloguj" },
        de: { registered: "✅ Konto: ", default: "Registrieren / Anmelden" }
    };
    const t = translations[lang] || translations.uk;

    const currentUser = savedUser ? JSON.parse(savedUser) : (tempUser ? JSON.parse(tempUser) : null);

    if (currentUser) {
        if (googleBtnText) googleBtnText.innerText = `${t.registered} ${currentUser.email} (Змінити)`;
        if (enterBtn) {
            enterBtn.disabled = false;
            enterBtn.style.opacity = '1';
            enterBtn.style.cursor = 'pointer';
        }
    } else {
        if (googleBtnText) googleBtnText.innerText = t.default;
        if (enterBtn) {
            enterBtn.disabled = true;
            enterBtn.style.opacity = '0.5';
            enterBtn.style.cursor = 'not-allowed';
        }
    }
}

function handleGoogleAuth() {
    const authModal = document.getElementById('authChoiceModal');
    if (authModal) {
        const errorMsg = document.getElementById('loginErrorMsg');
        if (errorMsg) errorMsg.style.display = 'none';

        authModal.style.display = 'flex';
    }
}

function handleManualLogin(e) {
    if (e) e.preventDefault();
    const emailInput = document.getElementById('manualEmail');
    const passInput = document.getElementById('manualPass');
    const errorMsg = document.getElementById('loginErrorMsg');

    const enteredEmail = emailInput ? emailInput.value.trim() : "";
    const enteredPass = passInput ? passInput.value.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(enteredEmail)) {
        if (errorMsg) {
            errorMsg.innerText = "❌ Введіть коректний Email!";
            errorMsg.style.display = 'block';
        }
        return;
    }

    if (enteredPass.length < 3) {
        if (errorMsg) {
            errorMsg.innerText = "❌ Пароль має містити щонайменше 3 символи!";
            errorMsg.style.display = 'block';
        }
        return;
    }

    if (errorMsg) errorMsg.style.display = 'none';
    
    const userName = enteredEmail.split('@')[0];
    window.pendingUser = { name: userName, email: enteredEmail };
    
    closeAuthChoiceModal();
    showRememberModal();
}

function showRememberModal() {
    const rememberModal = document.getElementById('rememberModal');
    if (rememberModal) {
        rememberModal.style.display = 'flex';
    }
}

function closeAuthChoiceModal() {
    const authModal = document.getElementById('authChoiceModal');
    if (authModal) authModal.style.display = 'none';
    
    const emailInput = document.getElementById('manualEmail');
    const passInput = document.getElementById('manualPass');
    if (emailInput) emailInput.value = '';
    if (passInput) passInput.value = '';
}

function confirmRemember(shouldSave) {
    const rememberModal = document.getElementById('rememberModal');

    if (shouldSave && window.pendingUser) {
        localStorage.setItem('driveSync_user', JSON.stringify(window.pendingUser));
        sessionStorage.removeItem('driveSync_temp_user');
    } else if (window.pendingUser) {
        sessionStorage.setItem('driveSync_temp_user', JSON.stringify(window.pendingUser));
        localStorage.removeItem('driveSync_user');
    }

    updateAuthStateUI();

    if (rememberModal) {
        rememberModal.style.display = 'none';
    }
}

function logoutUser() {
    localStorage.removeItem('driveSync_user');
    sessionStorage.removeItem('driveSync_temp_user');
    updateAuthStateUI();
}

function enterApp() {
    const savedUser = localStorage.getItem('driveSync_user') || sessionStorage.getItem('driveSync_temp_user');
    
    if (!savedUser) {
        handleGoogleAuth();
        return;
    }

    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 500);
    }
}