import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'sr',
    interpolation: {
      escapeValue: false,
    },
    // language resources
    resources: {
      en: {
        translation: {
          welcome: "Euro Cut",
          products: "Products",
          materials: "Materials",
          contact: "Contact",
          plywood: "Plywood",
          mdf: "MDF",
          hdf: "HDF",
          plywood2: "Plywood-high gloss",
          cp: "Compact panel",
          shackles: "Shackles",
          custom_made_furniture: 'Custom made furniture',
          home_messages: {
            A: 'Cutting all kinds of materials',
            B: 'Making a furniture and delivery',
            C: 'Help in choosing the right material',
            D: 'Consultations with an architect',
            E: 'Measurement services'
          },
          contact_description: {
            FIRST: 'The primary activity is reflected in the provision of services of canting, cutting and sale of fittings, lesomal plates, and worktops, all in cooperation with craftsmen.',
            SECOND: 'Secondary activities include: projecting, designing and making custom-made furniture - kitchens, hotel rooms, furnishing business premises and family homes.',
            THIRD: 'The furniture is made of top quality materials, and we guarantee durability.'
          },
          moto: 'Be careful what you wish for, maybe it will come true.',
          open_maps: 'Open google maps',
          block_descriptions: {
            FIRST: 'In cooperation with our repairmans, we provide services: cutting, bending, making materials, all with the aim of creating your living space',
            IDEA: 'Consultations with our team to find the best solution for the intended space',
            DESIGN: 'Creation of the design according to the previously adopted solution, by the architect with a complete blueprint',
            PRODUCTION: 'Using top quality materials and cutting-edge technology, your wishes become reality',
            DELIVERY: 'After production, our team will deliver as soon as possible'
          }
        }
      },
      sr: {
        translation: {
          welcome: "Euro Cut",
          products: "Proizvodi",
          materials: "Materijali",
          contact: "Kontakt",
          plywood: "Iverica",
          mdf: "MDF",
          hdf: "HDF",
          plywood2: "Iverica visoki sjaj",
          cp: "Kompakt ploca",
          shackles: "Okovi",
          custom_made_furniture: 'Rezanje i ugradnja namjestaja po mjeri',
          home_messages: {
            A: 'Rezanje svih vrsta materijala',
            B: 'Izrada i dostava namjestaja',
            C: 'Pomoc pri izboru pravog materijala',
            D: 'Konsultacije sa arhitektom',
            E: 'Izlazak na teren u svrhu mjerenja'
          },
          contact_description: {
            FIRST: 'Primarna djelatnost se ogleda u pružanju usluga kantanja, rezanja i prodaje okova, lesomal ploča, te radnih ploča, a sve to u saradnji sa majstorima.',
            SECOND: 'Sekundarne djelatnosti obuhvataju: projektovanje, dizajn i izrada namještaja po mjeri - kuhinja, hotelskih soba, opremanje poslovnih prostora i porodičnih kuća.',
            THIRD: 'Namještaj se izrađuje od vrhunskih materijala, a mi garantujemo trajnost.'
          },
          moto: 'Pazite šta želite, možda Vam se i ostvari.',
          open_maps: 'Otvori google maps',
          block_descriptions: {
            FIRST: 'U saradnji sa našim majstorima vršimo usluge: rezanja, kantanja, izrade materijala, a sve u cilju kreiranja Vašeg životnog prostora',
            IDEA: 'Konsultacije sa našim timom kako bi pronašli najbolje rješenje za predviđeni prostor',
            DESIGN: 'Izrada dizajna prema prethodno usvojenom rješenju, od strane arhitekte sa kompletnim nacrtom',
            PRODUCTION: 'Koristeći vrhunske materijale i najsavremeniju tehnologiju, vaše želje postaju realnost',
            DELIVERY: 'Nakon izrade naš tim će u što kraćem roku izvršiti isporuku'
          }
        }
      },
      de: {
        translation: {
          welcome: "Euro Cut",
          products: "Proizvodi",
          materials: "Materijali",
          contact: "Kontakt",
          custom_made_furniture: 'Rezanje i ugradnja namjestaja po mjeri',
        }
      },
    }
  });

export default i18n;