function checkUsername() {
    const USERNAME = window.location.href.split('#')[1];

    // Validação de nome
    if (USERNAME === undefined) {
        window.location.href = "https://github.com/NKKFu/port-git";
    }
}
checkUsername();