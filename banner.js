
// custom your message on banner
let lgpdHtml = `
    <div class="lgpd">
        <div class="lgpd--left">
                Nós utilozamos cookie para melhor sua experiencia do usuário.<br>
                Para conferir detalhamente todos os cookies utilizados, leia nossa <a herf="#">politica de privacidade</a>.
        </div>
        <div class="lgpd--right">
                <button> OK! CONCORDAR. </button>
        </div>
        </div>
        <link rel="stylesheet" href="lgpd.css" />
`;

//
let lsContent = localStorage.getItem('lgpd');

if(!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    // add click action
    lgpdButton.addEventListener('click', () => {
        lgpdArea.remove();  // remove visual banner
        localStorage.setItem('lgpd', '123'); // fill localstore
    });
}