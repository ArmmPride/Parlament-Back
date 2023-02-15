// NPM Modules
import knex from 'knex';
import bCrypt from 'bcryptjs';
import knexConfigs from '../../knex.configs';
import config from '../../src/config/variables.config';

const { ADMIN_PASSWORD } = config;

async function seed(pg) {
  // Deletes ALL existing entries

  // Deletes ALL existing entries with cascade.

  // Inserts seed entries

  await pg('mps').insert([
    {
      firstname: 'Ալեն',
      lastname: 'Սիմոնյան',
      surname: 'Ռոբերտի',
      phonenumber: '14-88',
      key: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Հակոբ',
      lastname: 'Արշակյան',
      surname: '',
      phonenumber: '14-26',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Ռուբեն',
      lastname: 'Ռուբինյան',
      surname: '',
      phonenumber: '13-35',
      key: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Տիգրան',
      lastname: 'Աբրահամյան',
      surname: 'Հրանտի',
      phonenumber: '13-38',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Վահագն',
      lastname: 'Ալեքսանյան',
      surname: 'Հովիկի',
      phonenumber: '16-86',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Էդուարդ',
      lastname: 'Աղաջանյան',
      surname: 'Արթուրի',
      phonenumber: '14-18',
      key: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Դավիդ',
      lastname: 'Առուշանյան',
      surname: 'Վալոդյայի',
      phonenumber: '12-38',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Մառևոս',
      lastname: 'Ասատրյան',
      surname: 'Գոռի',
      phonenumber: '16-86',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Հակոբ',
      lastname: 'Ասլանյան',
      surname: 'Արսենի',
      phonenumber: '16-06',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Թադևոս',
      lastname: 'Ավետիսյան',
      surname: 'Էդիկի',
      phonenumber: '16-51',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Գուրգեն',
      lastname: 'Արսենյան',
      surname: 'Բաբկենի',
      phonenumber: '12-13',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Գևորգ',
      lastname: 'Բալդրյան',
      surname: 'Վահեի',
      phonenumber: '15-75',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Գոռ',
      lastname: 'Սանոսյան',
      surname: 'Վաչեի',
      phonenumber: '18-88',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      firstname: 'Տիգրան',
      lastname: 'Արզաքանչյան',
      surname: 'Սերգեի',
      phonenumber: '13-88',
      key: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('committee').insert([
    {
      name: 'Աշխատանքի և սոցիալական հարցերի',
      member1: 'Տիգրանյան Հերիքնազ',
      member2: 'Ավետիսյան Թադևոս',
      cityphone: ' ',
      internalphone: '13-88',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Առողջապահության հարցերի',
      member1: 'Զեյնալյան Նարեկ',
      member2: 'Բադալյան Լուսինե',
      cityphone: '52-54-30',
      internalphone: '13-80',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Գիտության, կրթության, մշակույթի, սփյուռքի, երիտասարդության և սպորտի հարցերի',
      member1: 'Գաբրիելյան Սիսակ',
      member2: 'Ղազարյան Թագուհի',
      cityphone: ' ',
      internalphone: '13-88',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Եվրոպական ինտեգրման հարցերի',
      member1: 'Եղոյան Արման ',
      member2: 'Գալստյան Մերի ',
      cityphone: ' ',
      internalphone: '13-88',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Մարդու իրավունքների պաշտպանության և հանրային հարցերի',
      member1: 'Թովմասյան Թագուհի',
      member2: 'Բաքոյան Ռուստամ',
      cityphone: '52-67-01',
      internalphone: '19-88 ',
      internalphone2: '16-44 ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Պետական-իրավական հարցերի',
      member1: 'Վարդանյան Վլադիմիր',
      member2: 'Արուսյակ Ջուլհակյան',
      cityphone: '52-78-20',
      internalphone: '15-97 ',
      internalphone2: '13-85 ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Տարածաշրջանային և եվրասիական ինտեգրման հարցերի',
      member1: ' ',
      member2: 'Հակոբյան Վաղարշակ',
      cityphone: '58-80-02',
      internalphone: '13-88',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Տարածքային կառավարման, տեղական ինքնակառավարման, գյուղատնտեսության և շրջակա միջավայրի պահպանության հարցերի մշտական հանձնաժողով',
      member1: 'Ղալումյան Վահե',
      member2: 'Մկրտչյան Արեն',
      cityphone: '58-77-60 ',
      internalphone: '13-98',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Տնտեսական հարցերի',
      member1: ' ',
      member2: 'Թունյան Բաբկեն',
      cityphone: ' ',
      internalphone: '13-88',
      internalphone2: ' ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Ֆինանասավարկային և բյուջետային հարցերի',
      member1: 'Պապոյան Գևորգ',
      member2: 'Խաչատրյան Արթուր',
      cityphone: '54-48-82',
      internalphone: '13-78 ',
      internalphone2: '13-65 ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('faction').insert([
    {
      name: '<<ՔԱՂԱՔԱՑԻԱԿԱՆ ՊԱՅՄԱՆԱԳԻՐ>>',
      member1: 'Կոնջորյան Հայկ',
      member2: 'Արթուր Հովհաննիսյան',
      cityphone: '',
      internalphone: '13-33',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: '<<ՀԱՅԱՍՏԱՆ>>',
      member1: 'Օհանյան Սեյրան',
      member2: 'Մինասյան Արծվիկ',
      cityphone: '',
      internalphone: '13-70',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: '<<ՊԱՏԻՎ ՈՒՆԵՄ>>',
      member1: 'Մամիջանյան Հայկ',
      member2: 'Տիգրան Աբրահամյան',
      cityphone: '',
      internalphone: '14-65',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('units').insert([
    {
      name: 'Քարտուղարություն',
      internalphone: '12-54',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Մարդկային ռեսուրսների կառավարման վարչություն',
      internalphone: '13-73',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Արտաքին կապերի վարչություն',
      internalphone: '13-32',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Արարողակարգի վարչություն',
      internalphone: '12-93',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Ֆինանսական կառավարման եւ հաշվառման վարչություն',
      internalphone: '16-05',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Փորձագիտական եւ վերլուծական վարչություն',
      internalphone: '13-61',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Հասարակայնության հետ կապերի եւ հաղորդակցության վարչություն',
      internalphone: '12-10',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Քաղաքացիների ընդունելության եւ փաստաթղթաշրջանառության վարչություն',
      internalphone: '14-07',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Վարչատնտեսական վարչություն',
      internalphone: '13-71',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Ավտոմատ կառավարման եւ տեղեկատվական համակարգերի վարչություն',
      internalphone: '14-21',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Ներքին աուդիտի բաժին',
      internalphone: '13-78',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Իրավական ապահովման եւ սպասարկման բաժին',
      internalphone: '14-91',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Ազգային ժողովի բյուջետային գրասենյակ',
      internalphone: '13-84',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'Զորահավաքային նախապատրաստության, զորահավաքային ծրագրերի եւ քաղաքացիական պաշտպանության բաժին',
      internalphone: '13-84',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('acceptability').insert([

    {
      name: 'Արտաքին հարաբերությունների',
      day: '02.02.2023',
      time: '10.00-12.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Եվրոպական ինտեգրման հարցերի',
      day: '02.02.2023',
      time: '15.00-17.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Տարածաշրջանային և եվրասիական ինտեգրման հարցերի',
      day: '03.02.2023',
      time: '15.00-17.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Տնտեսական հարցերի',
      day: '13.02.2023',
      time: '11.00-13.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Աշխատանքի և սոցիալական հարցերի',
      day: '14.02.2023',
      time: '10.00-12.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Պետական-իրավական հարցերի',
      day: '15.12.2023',
      time: '10.00-12.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Մարդու իրավունքների պաշտպանության և հանրային հարցերի',
      day: '16.02.2023',
      time: '11.00-13.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Տարածքային կառավարման, տեղական ինքնակառավարման, գյուղատնտեսության և շրջակա միջավայրի պահպանության հարցերի մշտական հանձնաժողով',
      day: '20.02.2023',
      time: '11.00-13.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Ֆինանասավարկային և բյուջետային հարցերի',
      day: '21.02.2023',
      time: '10.00-12.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Պաշտպանության և անվտանգային հարցերի',
      day: '22.02.2023',
      time: '15.00-17.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      name: 'Առողջապահության հարցերի',
      day: '23.02.2023',
      time: '14.00-16.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },

    {
      name: 'Գիտության, կրթության, մշակույթի, սփյուռքի, երիտասարդության և սպորտի հարցերի',
      day: '24.02.2023',
      time: '15.00-17.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      title: 'member',
      name: 'Ռուբեն Ռուբինյան',
      day: '13.02.2023',
      time: '14.00-16.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    },
    {
      title: 'member',
      name: 'Հակոբ Արշակյան',
      day: '17.02.2023',
      time: '14.00-16.00',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()

    }

  ]);

  await pg('text1').insert([
    {
      title: 'I.Ընդհանուր դրույթներ',
      text: 'Սույն կարգով սահմանվում է Հայաստանի Հանրապետության Ազգային ժողովի (այսուհետ՝ ՀՀ Ազգային ժողով կամ Ազգային ժողով) նախագահի, նրա տեղակալների, աշխատակազմի ղեկավար-գլխավոր քարտուղարի և մշտական հանձնաժողովների կողմից քաղաքացիների ընդունելության կազմակերպման ու իրականացման կարգը։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'I.Ընդհանուր դրույթներ',
      text: 'Ազգային ժողովում քաղաքացիների ընդունելությունը կազմակերպում է Ազգային ժողովի աշխատակազմի քաղաքացիների ընդունելության և փաստաթղթաշրջանառության վարչության քաղաքացիների ընդունելության և նամակների բաժինը (այսուհետ՝ Քաղաքացիների ընդունելության և նամակների բաժին):',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'I.Ընդհանուր դրույթներ',
      text: 'Քաղաքացիների մուտքն Ազգային ժողովի շենքի վարչական տարածք իրականացվում է Ազգային ժողովի նստավայրի տարածքում և շենքում գործող անվտանգության կանոներին համապատասխան (ՀՀ ԱԺ նախագահի ՆՈ-01-Լ որոշման համաձայն, մուտքը միայն անձը հաստատող փաստաթղթով)։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'I.Ընդհանուր դրույթներ',
      text: 'Քաղաքացիների ընդունելությունն իրականացվում է ընդունելությունների համար նախատեսված սրահում (հասցե՝ ք. Երևան, Մ․ Բաղրամյան պող., 19 շենք, ՀՀ Ազգային ժողովի ընդունարան)։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Քաղաքացիների ընդունելությունը կազմակերպվում է նախապես հերթագրման միջոցով։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Հերթագրման համար քաղաքացիները կարող են այցելել Ազգային ժողով կամ զանգահարել Ազգային ժողովի պաշտոնական ինտերնետային կայքում տեղադրված տեղեկատու հեռախոսահամարներով՝ 87-88, 010-50-60-50, 011-50-60-50 (կայքը՝ http://www.parliament.am) կամ ներկայացնել գրավոր դիմում (փոստով, առձեռն, Էլեկտրոնային հարցումների միասնական հարթակով՝ https://e-request.am/hy կամ էլ-փոստի միջոցով` letter@parliament.am)՝ ընդունելության անհրաժեշտության վերաբերյալ։ Դիմումում ներառվում է դիմումատուի անունը, ազգանունը, հայրանունը, բնակության հասցեն, ստորագրությունը, բջջային կամ քաղաքային հեռախոսահամարը և ամփոփ ներկայացվում է բարձրաձայնվող հարցը։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Ընդունելության համար հերթագրված քաղաքացիների տվյալները հավաքագրվում են Քաղաքացիների ընդունելության և նամակների բաժնում և ընդունելությունից 1 օր առաջ ուղարկվում են ընդունելությունն իրականացնող պաշտոնատար անձին՝ «Mulberry» էլեկտրոնային փաստաթղթաշրջանառության համակարգի միջոցով (այսուհետ՝ «Mulberry» համակարգ) կամ էլ-փոստի միջոցով։ Ընդունելության համար հերթագրված քաղաքացիների տվյալները գրանցվում են գրանցամատյաններում (գրանցամատյանները լինում են կնքված և համարակալված), որոնք էլ թղթային տվյալների հետ միասին հանձնվում են ՀՀ ԱԺ աշխատակազմի արխիվ՝ տարեկան ամփոփումից հետո (որպես կանոն արխիվ են հանձնվում դիմումները և մատյանները)։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Քաղաքացիների ընդունելության տվյալ ամսվա ցուցակում ընդգրկվում են յուրաքանչյուր ընդունելությունից առնվազն երկու աշխատանքային օր առաջ հերթագրված քաղաքացիները։ Նշված ժամկետից հետո հերթագրված քաղաքացիների հայտերը ներառվում են հաջորդ ամսվա ընդունելության ցուցակում, բացառությամբ հրատապ դեպքերի (դեպքի հրատապությունը որոշվում է ընդունելությունն իրականացնող պաշտոնատար անձի հետ քննարկման արդյունքում)։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Քաղաքացին չի ընդգրկվում ընդունելության ցուցակում, եթե.',
      subtitle1: 'վերջին երեք ամսվա ընթացքում քաղաքացին միևնույն հարցով մասնակցել է միևնույն պաշտոնատար անձի, կամ նրա կողմից լիազորված անձի ընդունելությանը և իր բարձրացրած հարցի վերաբերյալ ստացել է պարզաբանում։Այս դեպքում դիմումատուին Քաղաքացիների ընդունելության և նամակների բաժնի կողմից տրվում է պատճառաբանված գրավոր կամ բանավոր պատասխան ընդունելության ցուցակում չընդգրկվելու վերաբերյալ (կախված քաղաքացու՝ բանավոր կամ գրավոր դիմելու հանգամանքից)։',
      subtitle2: 'բարձրացված հարցը պահանջում է այնպիսի գործողություն, որը կարող է հանգեցնել արդարադատություն իրականացնող և/կամ իրավապահ մարմինների գործունեության միջամտությանը։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },

    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Ընդունելությունն իրականացնող պաշտոնատար անձանց հանձնարարությամբ նրանց կողմից կազմակերպված ընդունելությանը կարող են մասնակցել և/կամ իրականացնել նրանց խորհրդականները, օգնականները, փորձագետները:',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Յուրաքանչյուր ընդունելության համար նախատեսվում է 2 (երկու) ժամ, ընդունելությանը կարող է մասնակցել առավելագույնը 8 (ութ) քաղաքացի: Ընդունելության ժամանակ մեկ քաղաքացու հարցի քննարկման համար նախատեսվում է 15 րոպե։ Քննարկման տևողությունը կարող է փոփոխվել ընդունելությունն իրականացնող պաշտոնատար անձի կամ նրա կողմից լիազորված անձի առաջարկով։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Ընդունելություն իրականացնող պաշտոնատար անձի կամ նրա կողմից լիազորված անձի բացակայության դեպքում ընդունելությունը տեղափոխվում է այլ աշխատանքային օր, ինչի մասին նախապես ծանուցվում է ընդունելությանը հերթագրված քաղաքացիներին:',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },

    {
      title: 'II.Ընդհանուր դրույթներ',
      text: 'Սույն Կարգը, ինչպես նաև Ազգային ժողովի նախագահի, նրա տեղակալների, աշխատակազմի ղեկավարի-գլխավոր քարտուղարի և մշտական հանձնաժողովների կողմից իրականացվող քաղաքացիների ընդունելության օրերի և ժամերի վերաբերյալ տեղեկատվությունը տեղադրվում է Ազգային ժողովի պաշտոնական ինտերնետային կայքում և Ֆեյսբուքյան պաշտոնական էջում, ինչպես նաև փակցվում է Ազգային ժողովի ընդունարանում (այդ թվում՝ թվային տարբերակով էլեկտրոնային մոնիտորի վրա, որը տեղադրված է ընդունարանում)՝ քաղաքացիների համար տեսանելի վայրում:',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'III.Պաշտոնատար անձանց կողմից իրականացված ընդունելության ժամանակ քաղաքացու կողմից ներկայացված գրավոր դիմումների գրանցում  և հաշվետվողականության ապահովում',
      text: 'Սույն Կարգով սահմանված ՀՀ Ազգային ժողովի նախագահի, նրա տեղակալների, աշխատակազմի ղեկավար-գլխավոր քարտուղարի (ինչպես նաև նրանց խորհրդականների, օգնականների, փորձագետների) և մշտական հանձնաժողովների կողմից քաղաքացիների ընդունելության ժամանակ, անհրաժեշտության դեպքում, քաղաքացու կողմից ներկայացված գրավոր դիմումները գրանցվում են «Mulberry» համակարգում և ուղարկվում են ընդունելությունն իրականացրած պաշտոնատար անձին՝ համապատասխան ընթացքն ապահովելու համար։',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'III.Պաշտոնատար անձանց կողմից իրականացված ընդունելության ժամանակ քաղաքացու կողմից ներկայացված գրավոր դիմումների գրանցում  և հաշվետվողականության ապահովում',
      text: 'Սույն Կարգով սահմանված քաղաքացիների ընդունելության վերաբերյալ հավաքագրված տվյալների հիման վրա՝ Քաղաքացիների ընդունելության և նամակների բաժինը քաղաքացիների դիմումների, բողոքների և առաջարկությունների հետ միաժամանակ վերլուծում և ամփոփում է կատարված աշխատանքների արդյունքները, կազմում է ամսական, կիսամյակային և տարեկան վիճակագրական հաշվետվություններ՝ Ազգային ժողովի աշխատակազմի ղեկավար-գլխավոր քարտուղարին ներկայացնելու համար: Ներկայացված տարեկան հաշվետվությունը տեղադրվում է Ազգային ժողովի պաշտոնական ինտերնետային կայքում և Ֆեյսբուքյան պաշտոնական էջում:',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: 'III.Պաշտոնատար անձանց կողմից իրականացված ընդունելության ժամանակ քաղաքացու կողմից ներկայացված գրավոր դիմումների գրանցում  և հաշվետվողականության ապահովում',
      text: 'Պաշտոնատար անձանց կողմից քաղաքացիների ընդունելություն չի իրականացվում հունվար, հուլիս և օգոստոս ամիսներին՝ բացառությամբ սույն կարգով սահմանված հրատապ դեպքերի:',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('text2').insert([
    {
      title: 'Աշխատանքի եւ սոցիալական հարցերի մշտական հանձնաժողով',
      text: 'սոցիալական ապահովություն, հաշմանդամության հիմնահարցեր, աշխատանք, զբաղվածություն, արհեստակցական միություններ, ժողովրդագրություն եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Առողջապահության հարցերի մշտական հանձնաժողով՝',
      text: 'առողջապահություն, մայրություն, մանկություն, դեղերի արտադրություն, ներմուծում եւ անվտանգություն, սանիտարահամաճարակային անվտանգություն եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Արտաքին հարաբերությունների մշտական հանձնաժողով՝',
      text: 'միջազգային հարաբերություններ, Միավորված ազգերի կազմակերպության, Եվրոպայի խորհրդի, Եվրոպայում անվտանգության եւ համագործակցության կազմակերպության, ինչպես նաեւ այլ միջազգային կազմակերպությունների հետ կապեր, միջխորհրդարանական համաձայնագրեր եւ կապեր, խորհրդարանական բարեկամական խմբեր եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Գիտության, կրթության, մշակույթի, սփյուռքի, երիտասարդության եւ սպորտի հարցերի մշտական հանձնաժողով՝',
      text: 'գիտություն, կրթություն, մշակույթ, հայրենադարձություն, սփյուռքի հետ կապեր, երիտասարդություն, սպորտ, տեղեկատվություն, մամուլ, ռադիո, հեռուստատեսություն եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Եվրոպական ինտեգրման հարցերի մշտական հանձնաժողով՝',
      text: 'Եվրոպական միության հետ կապեր, Եվրոպական միության եւ Հայաստանի Հանրապետության միջեւ Համապարփակ եւ ընդլայնված գործընկերության համաձայնագրի իրագործման հետ կապված հարցեր, Եվրոպական միության իրավական ակտերին Հայաստանի Հանրապետության օրենքների մոտարկում եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Մարդու իրավունքների պաշտպանության եւ հանրային հարցերի մշտական հանձնաժողով՝',
      text: 'մարդու իրավունքների պաշտպանություն, երեխայի իրավունքներ, կրոն, կանանց եւ տղամարդկանց իրավահավասարություն, ազգային փոքրամասնություններ, փաստաբանություն, հասարակական կազմակերպություններ եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Պաշտպանության եւ անվտանգության հարցերի մշտական հանձնաժողով՝',
      text: 'պաշտպանություն, ազգային անվտանգություն, ոստիկանություն, արտակարգ իրավիճակներ, ռազմաարդյունաբերական համալիր, զինված ուժերում, ազգային անվտանգության, ոստիկանության եւ այլ ռազմականացված մարմիններում ծառայություն եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Պետական-իրավական հարցերի մշտական հանձնաժողով՝',
      text: 'սահմանադրաիրավական հարցեր, հանրաքվե, կուսակցություններ, ընտրական համակարգ, Ազգային ժողովի կանոնակարգ, Սահմանադրական դատարան, արդարադատություն, դատարանակազմություն, դատախազություն, քննչական մարմիններ, դատական ակտերի հարկադիր կատարում, քրեակատարողական ծառայություն, համաներում, հանրային ծառայություն, նոտարիատ, վարչարարություն եւ այդ ոլորտները կարգավորող օրենքներ, Սահմանադրության փոփոխություններ, դատավարական օրենսգրքեր, ինչպես նաեւ քաղաքացիական, քրեական օրենսգրքեր, վարչական իրավախախտումների վերաբերյալ օրենսգիրք',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Տարածաշրջանային եւ եվրասիական ինտեգրման հարցերի մշտական հանձնաժողով՝',
      text: 'Եվրասիական տնտեսական միության եւ տարածաշրջանի մյուս երկրների հետ կապեր, Հայաստանի Հանրապետության եւ Եվրասիական տնտեսական միության անդամ մյուս պետությունների օրենսդրության ներդաշնակեցում, միասնականացում եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Տարածքային կառավարման, տեղական ինքնակառավարման, գյուղատնտեսության եւ շրջակա միջավայրի պահպանության հարցերի մշտական հանձնաժողով',
      text: 'տարածքային կառավարում, վարչատարածքային բաժանում, տեղական ինքնակառավարում, տարածքային զարգացում, համայնքային ծառայություն, տեղական հարկեր, տուրքեր եւ վճարներ, գյուղատնտեսություն, շրջակա միջավայրի պահպանություն',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Տնտեսական հարցերի մշտական հանձնաժողով',
      text: 'հարկեր, տուրքեր, վճարներ, արդյունաբերություն, քաղաքաշինություն, էներգետիկա, բնական պաշարներ, տրանսպորտ, կապ, հեռահաղորդակցություն, ինտերնետ (համացանց), արտադրական ենթակառուցվածքի այլ ճյուղեր, զբոսաշրջություն, առեւտուր եւ ծառայություններ, ձեռնարկատիրական գործունեություն, պետական գույքի կառավարում, սակագներ, ներդրումներ, տնտեսական մրցակցություն, հակամենաշնորհ եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      title: ' Ֆինանսավարկային եւ բյուջետային հարցերի մշտական հանձնաժողով',
      text: 'հարկեր, տուրքեր, վճարներ, արդյունաբերություն, քաղաքաշինություն, էներգետիկա, բնական պաշարներ, տրանսպորտ, կապ, հեռահաղորդակցություն, ինտերնետ (համացանց), արտադրական ենթակառուցվածքի այլ ճյուղեր, զբոսաշրջություն, առեւտուր եւ ծառայություններ, ձեռնարկատիրական գործունեություն, պետական գույքի կառավարում, սակագներ, ներդրումներ, տնտեսական մրցակցություն, հակամենաշնորհ եւ այդ ոլորտները կարգավորող օրենքներ',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);

  await pg('users').insert([
    {
      user: 'simonyan',
      pwd: bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null),
      role: 'admin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      user: 'poxosyan',
      pwd: bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null),
      role: 'member',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      user: 'admin',
      pwd: bCrypt.hashSync('admin', bCrypt.genSaltSync(10), null),
      role: 'superAdmin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ]);
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await seed(pg);
    console.log('Successfully inserted all data ... ');
  } catch (error) {
    console.error(error.message);
  }
}

init();
