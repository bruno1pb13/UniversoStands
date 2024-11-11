function social() {
    const instagram = 'http://instagram.com';
    const x = 'http://x.com';
    const linkedin = 'http://linkedin.com';
    const facebook = 'http://facebook.com';

    return { instagram, x, linkedin, facebook };
}

function contact(){
    const phone01 = "(51) 9 9945-0382"
    const phone01raw = "51999450382"
    const phone02 = "(11) 9 1703-9455"
    const phone02raw = "11917039455"
    const mail01 = "us@us-brasil.com"
    const mail02 = "universostands@gmail.com"
    const address01 = "Schilling, 576, Conj 607s"
    const address02 = "Vila Leopoldina São Paulo/SP"
    return { phone01, phone01raw, phone02, phone02raw, mail01, mail02, address01, address02}
}

const constants = {
    social: social(),
    contact: contact()
};

export default constants;
