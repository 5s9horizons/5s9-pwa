document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const highContrastCheckbox = document.getElementById('high-contrast');
    const largeTextCheckbox = document.getElementById('large-text');

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        setLanguage(savedLanguage);
    }

    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedLargeText = localStorage.getItem('largeText') === 'true';

    highContrastCheckbox.checked = savedHighContrast;
    largeTextCheckbox.checked = savedLargeText;

    applyAccessibilitySettings(savedHighContrast, savedLargeText);

    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });

    highContrastCheckbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        localStorage.setItem('highContrast', isChecked);
        applyAccessibilitySettings(isChecked, largeTextCheckbox.checked);
    });

    largeTextCheckbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        localStorage.setItem('largeText', isChecked);
        applyAccessibilitySettings(highContrastCheckbox.checked, isChecked);
    });
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    fetch(`/5s9-pwa/locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations);
        });
}

function applyTranslations(translations) {
    for (const key in translations) {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(element => {
            element.textContent = translations[key];
        });
    }
}

function applyAccessibilitySettings(highContrast, largeText) {
    if (highContrast) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }

    if (largeText) {
        document.body.classList.add('large-text');
    } else {
        document.body.classList.remove('large-text');
    }
}