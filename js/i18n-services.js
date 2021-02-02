var gTrans = {
  title: {
    en: 'Book Shop',
    he: 'חנות ספרים',
  },
  'add-butt': {
    en: 'Create new book',
    he: 'הוספת ספר',
  },
  'title-id': {
    en: 'id',
    he: 'מזהה',
  },
  'title-name': {
    en: 'Name',
    he: 'שם',
  },
  'title-price': {
    en: 'Price',
    he: 'מחיר',
  },
  'title-actions': {
    en: 'Actions',
    he: 'פעולות',
  },
  'butt-read': {
    en: 'Read',
    he: 'קרא עוד',
  },
  'butt-update': {
    en: 'Update',
    he: 'עדכן',
  },
  'butt-delete': {
    en: 'Delete',
    he: 'מחק',
  },
  'input-name-placeholder': {
    en: 'Book name',
    he: 'שם הספר',
  },
  'input-price-placeholder': {
    en: 'Book price-$',
    he: '$-מחיר הספר ',
  },
  'next-page': {
    en: 'Next Page',
    he: 'עמוד הבא ',
  },
  'prev-page': {
    en: 'Prev Page',
    he: 'עמוד הקודם ',
  },
};
var gCurrLang = 'en';

function setLang(lang) {
  gCurrLang = lang;
}

function doTrans() {
  var els = document.querySelectorAll('[data-trans]');
  els.forEach(function (el) {
    console.log('el:', el);
    var transKey = el.dataset.trans;
    var txt = getTrans(transKey);

    if (el.nodeName === 'INPUT') {
      console.log('el.nodeName:', el.nodeName);
      el.setAttribute('placeholder', txt);
    } else {
      el.innerText = txt;
    }
  });
}

function getTrans(transKey) {
  var keyTrans = gTrans[transKey];
  if (!keyTrans) return 'UNKNOWN';
  var txt = keyTrans[gCurrLang];

  // if not found return en
  if (!txt) txt = keyTrans['en'];
  return txt;
}

function getPrice(price){
 if(gCurrLang ==='he'){
    price=price*3.2 
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(price)};
 if(gCurrLang ==='en'){
    price =price 
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}

}
