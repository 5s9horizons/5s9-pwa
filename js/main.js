let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBanner = document.getElementById('install-banner');
    installBanner.style.display = 'block';

    const installButton = document.getElementById('install-button');
    installButton.addEventListener('click', async () => {
        installBanner.style.display = 'none';
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    });

    const dismissButton = document.getElementById('dismiss-button');
    dismissButton.addEventListener('click', () => {
        installBanner.style.display = 'none';
    });
});