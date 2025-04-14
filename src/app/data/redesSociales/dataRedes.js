const phoneNumber = "542235370292";
const message = encodeURIComponent("Hola, estoy interesado en sus productos.");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const instagramUser = "wf_detail";
const instagramUrl = `https://www.instagram.com/${instagramUser}/`;

const tiktokuser = "wf_detail";
const tiktokmUrl = `https://www.tiktok.com/@${tiktokuser}/`;

export const redesurl = [whatsappUrl, instagramUrl, tiktokmUrl];
