function sysgame(params) {
    let pilihanAnda = params;
    let bot = ['✌️', '✊', '🤚'];
    let pilihanBot = bot[Math.floor(Math.random() * 3)];
    let winner = '';
    let namaBot = 'Hokky';
    let namaAnda = 'You';

    // aturan
    switch (pilihanBot) {
        case '✌️':
            if (pilihanAnda == '✊') {
                winner = namaAnda;
            } else if (pilihanAnda == '🤚') {
                winner = namaBot;
            } else {
                winner = 'Seri';
            }
            break;
        case '✊':
            if (pilihanAnda == '🤚') {
                winner = namaAnda;
            } else if (pilihanAnda == '✌️') {
                winner = namaBot;
            } else {
                winner = 'Seri';
            }
            break;
        case '🤚':
            if (pilihanAnda == '✌️') {
                winner = namaAnda;
            } else if (pilihanAnda == '✊') {
                winner = namaBot;
            } else {
                winner = 'Seri';
            }
            break;
        default:
            winner = 'Error';
    }

    // dom  
    const display = document.getElementById('display');
    const result = document.getElementById('result');

    display.innerHTML = '...';
    result.innerHTML = '...';

    setTimeout(() => {
        display.innerHTML = `
            ${pilihanAnda} <span style="color: coral;">vs</span> ${pilihanBot} 
        `;
        if (winner !== 'Seri') {
            result.textContent = `${winner} Win!`;
        } else {
            result.textContent = `${winner}`;
        }
    }, 1000);
}