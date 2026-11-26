const currentUser = new URLSearchParams(window.location.search).get('usuario');

if (currentUser !== 'admin') {
    window.location.replace('index.html');
} else {
    document.getElementById('currentUser').textContent = currentUser;
}

document.getElementById('logoutButton').addEventListener('click', () => {
    window.location.replace('index.html');
});
