import { Injectable } from '@angular/core';

export interface Bird {
  name: string;
  latinName: string;
  numberOfImages: number;
}

@Injectable({
  providedIn: 'root'
})
export class GetRandomBirdService {

  private birds: Bird[] = [
    {
      name: 'pstros dvouprsty',
      latinName: 'struhio-camelus',
      numberOfImages: 4
    },
    {
      name: 'emu hnedy',
      latinName: 'dromaius-novaehollandiae',
      numberOfImages: 2
    },
    {
      name: 'kasuar prilbovy',
      latinName: 'casuarius-casuarius',
      numberOfImages: 2
    },
    {
      name: 'husa velka',
      latinName: 'anser-anser',
      numberOfImages: 1,
    },
    {
      name: 'husa polni',
      latinName: 'anser-fabalis',
      numberOfImages: 1,
    },
    {
      name: 'pizmovka domaci',
      latinName: 'cairina-moschata',
      numberOfImages: 2
    },
    {
      name: 'pizmovka velka',
      latinName: 'cairina-moschata',
      numberOfImages: 2
    },
    {
      name: 'kachna divoka',
      latinName: 'anas-platyrhynchos',
      numberOfImages: 2
    },
    {
      name: 'koprivka obecna',
      latinName: 'anas-sterpera',
      numberOfImages: 2
    },
    {
      name: 'polak velky',
      latinName: 'ayathya-ferina',
      numberOfImages: 2
    },
    {
      name: 'polak chocholacka',
      latinName: 'aythya-fuligula',
      numberOfImages: 2
    },
    {
      name: 'kachnicka mandarinska',
      latinName: 'aix-galericulata',
      numberOfImages: 1
    },
    {
      name: 'kachnicka karolinska',
      latinName: 'aix-sponsa',
      numberOfImages: 2
    },
    {
      name: 'krocan divoky',
      latinName: 'meleagris-gallopavo',
      numberOfImages: 2
    },
    {
      name: 'krocan domaci',
      latinName: 'meleagris-gallopavo',
      numberOfImages: 2
    },
    {
      name: "tetrev hlusec",
      latinName: "tetrao-urogallus",
      numberOfImages: 1
    },
    {
      name: "jerabek lesni",
      latinName: "bonasa-bonasia",
      numberOfImages: 1
    },
    {
      name: "kur bankivsky",
      latinName: "gallus-gallus",
      numberOfImages: 2
    },
    {
      name: "koroptev polni",
      latinName: "perdix-perdix",
      numberOfImages: 2
    },
    {
      name: "krepelka polni",
      latinName: "coturnix-coturnix",
      numberOfImages: 1
    },
    {
      name: "bazant obecny",
      latinName: "phasianus-colchicus",
      numberOfImages: 1
    },
    { name: "bazant kralovsky", latinName: "syrmaticus-reevesii", numberOfImages: 1 },
    { name: "bazant zlaty", latinName: "chrysolophus-pictus", numberOfImages: 1 },
    { name: "bazant stribrny", latinName: "lophura-nycthemera", numberOfImages: 1 },
    { name: "perlicka kropenata", latinName: "numida-meleagris", numberOfImages: 1 },
    { name: "holub hrivnac", latinName: "columba-palumbus", numberOfImages: 1 },
    { name: "hrdlicka zahradni", latinName: "streptopelia-decaocto", numberOfImages: 1 },
    { name: "holoubek diamantovy", latinName: "geopelia-cuneata", numberOfImages: 1 },
    { name: "dronte mauricijsky", latinName: "raphus-cucullatus", numberOfImages: 1 },
    { name: "dodo", latinName: "raphus-cucullatus", numberOfImages: 1 },
    { name: "potapka rohac", latinName: "podiceps-cristatus", numberOfImages: 2 },
    { name: "albatros", latinName: "diomedea", numberOfImages: 3 },
    { name: "kormoran velky", latinName: "phalacrocorax-carbo", numberOfImages: 3 },
    { name: "volavka popelava", latinName: "ardea-cinerea", numberOfImages: 3 },
    // { name: "bukac velky", latinName: "botaurus-stellaris", numberOfImages: null },
    // { name: "cap bily", latinName: "ciconia-ciconia", numberOfImages: null },
    // { name: "cap cerny", latinName: "ciconia-nigra", numberOfImages: null },
    // { name: "marabu", latinName: "leptoptilos", numberOfImages: null },
    // { name: "ibis posvatny", latinName: "threskiornis-aethiopicus", numberOfImages: null },
    // { name: "kondor velky", latinName: "vultur-gryphus", numberOfImages: null },
    // { name: "orel morsky", latinName: "haliaeetus-albicilla", numberOfImages: null },
    // { name: "orel skalni", latinName: "aquila-chrysaetos", numberOfImages: null },
    // { name: "orel kralovsky", latinName: "aquila-heliaca", numberOfImages: null },
    // { name: "", latinName: "orel-kriklavy-aquila-pomarina", numberOfImages: null },
    // { name: "sup", latinName: "aegypius", numberOfImages: null },
    // { name: "kane lesni", latinName: "buteo-buteo", numberOfImages: null },
    // { name: "jestrab lesni", latinName: "accipiter-gentilis", numberOfImages: null },
    // { name: "krahujec obecny", latinName: "accipiter-nisus", numberOfImages: null },
    // { name: "motak pochop", latinName: "circus-aeruginosus", numberOfImages: null },
    // { name: "postolka obecna", latinName: "falco-tinnunculus", numberOfImages: null },
    // { name: "sokol stehovavy", latinName: "falco-peregrinus", numberOfImages: null },
    // { name: "raroh velky", latinName: "falco-cherrug", numberOfImages: null },
    // { name: "jerab popelavy", latinName: "grus-grus", numberOfImages: null },
    // { name: "chrastal vodni", latinName: "rallus-aquaticus", numberOfImages: null },
    // { name: "chrastal polni", latinName: "crex-crex", numberOfImages: null },
    // { name: "lyska cerna", latinName: "fulica-atra", numberOfImages: null },
    // { name: "drop velky", latinName: "otis-tarda", numberOfImages: null },
    // { name: "cejka chocholata", latinName: "vanellus-vanellus", numberOfImages: null },
    // { name: "sluka lesni", latinName: "scolopax-rusticola", numberOfImages: null },
    // { name: "racek chechtavy", latinName: "larus-ridibundus", numberOfImages: null },
    // { name: "alka mala", latinName: "alca-torda", numberOfImages: null },
    // { name: "alkoun", latinName: "uria", numberOfImages: null },
    // { name: "papuchalk", latinName: "fratercula", numberOfImages: null },
    // { name: "kakadu", latinName: "cacatua", numberOfImages: null },
    // { name: "korela chocholata", latinName: "nymphicus-hollandicus", numberOfImages: null },
    // { name: "andulka vlnkovana", latinName: "melopsittacus-undulatus", numberOfImages: null },
    // { name: "ara", latinName: "ara", numberOfImages: null },
    // { name: "amazonan", latinName: "amazona", numberOfImages: null },
    // { name: "aratinga", latinName: "aratinga", numberOfImages: null },
    // { name: "papousek sedy", latinName: "psittacus-erithacus", numberOfImages: null },
    // { name: "zako", latinName: "psittacus-erithacus", numberOfImages: null },
    // { name: "agapornis", latinName: "agapornis", numberOfImages: null },
    // { name: "alexandr", latinName: "psittacula", numberOfImages: null },
    // { name: "rosela", latinName: "platycercus", numberOfImages: null },
    // { name: "neofema bourkova", latinName: "neopsephotus", numberOfImages: null },
    // { name: "neofema tyrkysova", latinName: "neophema", numberOfImages: null }, 
    // { name: "kukacka obecna", latinName: "cuculus-canorus", numberOfImages: null }, 
    // { name: "sova palena", latinName: "tyto-alba", numberOfImages: null }, 
    // { name: "pustik obecny", latinName: "strix-aluco", numberOfImages: null }, 
    // { name: "kalous usaty", latinName: "asio-otus", numberOfImages: null }, 
    // { name: "vyr velky", latinName: "bubo-bubo", numberOfImages: null }, 
    // { name: "lelek lesni", latinName: "caprimulgus-europaeus", numberOfImages: null }, 
    // { name: "rorys obecny", latinName: "apus-apus", numberOfImages: null }, 
    // { name: "lednacek ricni", latinName: "alcedo-atthis", numberOfImages: null }, 
    // { name: "dudek chocholaty", latinName: "upupa-epops", numberOfImages: null }, 
    // { name: "zoborozec", latinName: "bucerotidae", numberOfImages: null }, 
    // { name: "dvojzoborozec", latinName: "bucerotidae", numberOfImages: null }, 
    // { name: "zluna zelena", latinName: "picus-viridis", numberOfImages: null }, 
    // { name: "datel cerny", latinName: "dryocopus-martius", numberOfImages: null }, 
    // { name: "strakapoud velky", latinName: "dendrocopos-major", numberOfImages: null }, 
    // { name: "tukan", latinName: "ramphastos", numberOfImages: null }, 
    // { name: "vlastovka obecna", latinName: "hirundo-rustica", numberOfImages: null }, 
    // { name: "jiricka obecna", latinName: "delichon-urbica", numberOfImages: null }, 
    // { name: "konipas", latinName: "motacilla", numberOfImages: null }, 
    // { name: "strizlik obecny", latinName: "troglodytes-troglodytes", numberOfImages: null }, 
    // { name: "cervenka obecna", latinName: "erithacus-rubecula", numberOfImages: null }, 
    // { name: "slavik obecny", latinName: "luscinia-megarhynchos", numberOfImages: null }, 
    // { name: "rehek domaci", latinName: "phoenicurus-ochruros", numberOfImages: null }, 
    // { name: "kos cerny", latinName: "turdus-merula", numberOfImages: null }, 
    // { name: "drozd zpevny", latinName: "turdus-philomelos", numberOfImages: null }, 
    // { name: "penice cernohlava", latinName: "sylvia-atricapilla", numberOfImages: null }, 
    // { name: "sykora konadra", latinName: "parus-major", numberOfImages: null }, 
    // { name: "sykora modrinka", latinName: "parus-caeruleus", numberOfImages: null }, 
    // { name: "brhlik lesni", latinName: "sitta-europaea", numberOfImages: null }, 
    // { name: "krkavec velky", latinName: "corvus-corax", numberOfImages: null }, 
    // { name: "vrana obecna", latinName: "corvus-corone", numberOfImages: null }, 
    // { name: "havran polni", latinName: "corvus-frugilegus", numberOfImages: null }, 
    // { name: "straka obecna", latinName: "pica-pica", numberOfImages: null }, 
    // { name: "sojka obecna", latinName: "garrulus-glandarius", numberOfImages: null }, 
    // { name: "zluva hajni", latinName: "oriolus-oriolus", numberOfImages: null }, 
    // { name: "spacek obecny", latinName: "sturnus-vulgaris", numberOfImages: null }, 
    // { name: "penkava obecna", latinName: "fringilla-coelebs", numberOfImages: null }, 
    // { name: "kanar", latinName: "serinus-canaria", numberOfImages: null }, 
    // { name: "zvonek zeleny", latinName: "carduelis-chloris", numberOfImages: null }, 
    // { name: "stehlik obecny", latinName: "carduelis-carduelis", numberOfImages: null }, 
    // { name: "hyl obecny", latinName: "pyrrhula-pyrrhula", numberOfImages: null }, 
    // { name: "dlask tlustozoby", latinName: "coccothraustes-coccothraustes", numberOfImages: null }, 
    // { name: "strnad obecny", latinName: "emberiza-citrinella", numberOfImages: null }, 
    // { name: "vrabec domaci", latinName: "passer-domesticus", numberOfImages: null }, 
    // { name: "kanar", latinName: "serinus-canaria", numberOfImages: null }, 
    // { name: "snovac", latinName: "ploceus", numberOfImages: null }, 
    // { name: "loskutak posvatny", latinName: "gracula-religiosa", numberOfImages: null }, 
    // { name: "rajka", latinName: "paradisea", numberOfImages: null }, 
    // { name: "astrild vlnkovany", latinName: "estrilda-astrild", numberOfImages: null }, 
    // { name: "amada", latinName: "amadina-gouldove-(chloebia-gouldiae)", numberOfImages: null }, 
    // { name: "zebricka pestra", latinName: "taeniopygia-guttata", numberOfImages: null }, 
    // { name: "panenka bronzova", latinName: "lonchura-striata", numberOfImages: null }, 
    // { name: "chuvicka japonska", latinName: "lonchura-striata-domestica", numberOfImages: null }
  ]

  constructor() { }

  public giveMeBird() {
    const birdIndex: number = this.getRndInteger(0, this.birds.length - 1);
    return this.birds[birdIndex]
  }

  public getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
