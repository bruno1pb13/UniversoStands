function social() {
    const instagram = 'http://instagram.com';
    const x = 'http://x.com';
    const linkedin = 'http://linkedin.com';
    const facebook = 'http://facebook.com';

    return { instagram, x, linkedin, facebook };
}

function contact(){
    const phone01 = "(11) 9 9999-9999"
    const phone02 = "(11) 9999-9999"
    const mail01 = "universo@universostands.com"
    const mail02 = "universostands@gmail.com"
    const address01 = "Schilling, 576, Conj 607s"
    const address02 = "Vila Leopoldina São Paulo/SP"
    return { phone01, phone02, mail01, mail02, address01, address02, googleMapsEmbedUrl}
}

const constants = {
    social: social(),
    contact: contact()
};

export default constants;
