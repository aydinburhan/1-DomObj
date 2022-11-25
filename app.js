//Window Object
//window.document
//document
let value;
value=document; //tüm html dosyasını okur.
value=document.all;
value=document.all.length // kaç adet nesne oldugunu söyler
value=document.all[0] ; // 1. nesneyi gösterir. js de nesne c# da element.
value=document.all[6];
value=document.all[document.all.length-1] // Html deki son nesne gelir.
value=document.body;
value=document.head;
//value=document.location; //Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
//value=document.location.hostname; //127.0.0.1
//value=document.location.port; // genelde port numaralarının defaultu 8080 de çalışır.



console.log(value)