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
    { name: "bukac velky", latinName: "botaurus-stellaris", numberOfImages: 2 },
    { name: "cap bily", latinName: "ciconia-ciconia", numberOfImages: 1 },
    { name: "cap cerny", latinName: "ciconia-nigra", numberOfImages: 2 },
    { name: "marabu", latinName: "leptoptilos", numberOfImages: 1 },
    { name: "ibis posvatny", latinName: "threskiornis-aethiopicus", numberOfImages: 2 },
    { name: "kondor velky", latinName: "vultur-gryphus", numberOfImages: 2 },
    { name: "orel morsky", latinName: "haliaeetus-albicilla", numberOfImages: 3 },
    { name: "orel skalni", latinName: "aquila-chrysaetos", numberOfImages: 1 },
    { name: "orel kralovsky", latinName: "aquila-heliaca", numberOfImages: 2 },
    { name: "orel kriklavy", latinName: "aquila-pomarina", numberOfImages: 2 },
    { name: "sup", latinName: "aegypius", numberOfImages: 3 },
    { name: "kane lesni", latinName: "buteo-buteo", numberOfImages: 2 },
    { name: "jestrab lesni", latinName: "accipiter-gentilis", numberOfImages: 2 },
    { name: "krahujec obecny", latinName: "accipiter-nisus", numberOfImages: 1 },
    { name: "motak pochop", latinName: "circus-aeruginosus", numberOfImages: 4 },
    { name: "postolka obecna", latinName: "falco-tinnunculus", numberOfImages: 3 },
    { name: "sokol stehovavy", latinName: "falco-peregrinus", numberOfImages: 3 },
    { name: "raroh velky", latinName: "falco-cherrug", numberOfImages: 2 },
    { name: "jerab popelavy", latinName: "grus-grus", numberOfImages: 1 },
    { name: "chrastal vodni", latinName: "rallus-aquaticus", numberOfImages: 2 },
    { name: "chrastal polni", latinName: "crex-crex", numberOfImages: 1 },
    { name: "lyska cerna", latinName: "fulica-atra", numberOfImages: 3 },
    { name: "drop velky", latinName: "otis-tarda", numberOfImages: 2 },
    { name: "cejka chocholata", latinName: "vanellus-vanellus", numberOfImages: 1 },
    { name: "sluka lesni", latinName: "scolopax-rusticola", numberOfImages: 1 },
    { name: "racek chechtavy", latinName: "larus-ridibundus", numberOfImages: 1 },
    { name: "alka mala", latinName: "alca-torda", numberOfImages: 1 },
    { name: "papuchalk", latinName: "uria", numberOfImages: 3 },
    { name: "kakadu", latinName: "cacatua", numberOfImages: 1 },
    { name: "korela chocholata", latinName: "nymphicus-hollandicus", numberOfImages: 2 },
    { name: "andulka vlnkovana", latinName: "melopsittacus-undulatus", numberOfImages: 2 },
    { name: "ara", latinName: "ara", numberOfImages: 4 },
    { name: "amazonan", latinName: "amazona", numberOfImages: 2 },
    { name: "aratinga", latinName: "aratinga", numberOfImages: 1 },
    { name: "papousek sedy", latinName: "psittacus-erithacus", numberOfImages: 2 },
    { name: "agapornis", latinName: "agapornis", numberOfImages: 1 },
    { name: "alexandr", latinName: "psittacula", numberOfImages: 2 },
    { name: "rosela", latinName: "platycercus", numberOfImages: 1 },
    { name: "neofema bourkova", latinName: "neopsephotus", numberOfImages: 2 },
    { name: "neofema tyrkysova", latinName: "neophema", numberOfImages: 2 }, 
    { name: "kukacka obecna", latinName: "cuculus-canorus", numberOfImages: 1 }, 
    { name: "sova palena", latinName: "tyto-alba", numberOfImages: 2 }, 
    { name: "pustik obecny", latinName: "strix-aluco", numberOfImages: 2 }, 
    { name: "kalous usaty", latinName: "asio-otus", numberOfImages: 2 }, 
    { name: "vyr velky", latinName: "bubo-bubo", numberOfImages: 2 }, 
    { name: "lelek lesni", latinName: "caprimulgus-europaeus", numberOfImages: 2 }, 
    { name: "rorys obecny", latinName: "apus-apus", numberOfImages: 1 }, 
    { name: "lednacek ricni", latinName: "alcedo-atthis", numberOfImages: 1 }, 
    { name: "dudek chocholaty", latinName: "upupa-epops", numberOfImages: 1 }, 
    { name: "zoborozec", latinName: "bucerotidae", numberOfImages: 3 }, 
    { name: "zluna zelena", latinName: "picus-viridis", numberOfImages: 1 }, 
    { name: "datel cerny", latinName: "dryocopus-martius", numberOfImages: 2 }, 
    { name: "strakapoud velky", latinName: "dendrocopos-major", numberOfImages: 2 }, 
    { name: "tukan", latinName: "ramphastos", numberOfImages: 3 }, 
    { name: "vlastovka obecna", latinName: "hirundo-rustica", numberOfImages: 3 }, 
    { name: "jiricka obecna", latinName: "delichon-urbica", numberOfImages: 1 }, 
    { name: "konipas", latinName: "motacilla", numberOfImages: 1 }, 
    { name: "strizlik obecny", latinName: "troglodytes-troglodytes", numberOfImages: 1 }, 
    { name: "cervenka obecna", latinName: "erithacus-rubecula", numberOfImages: 3 }, 
    { name: "slavik obecny", latinName: "luscinia-megarhynchos", numberOfImages: 2 }, 
    { name: "rehek domaci", latinName: "phoenicurus-ochruros", numberOfImages: 1 }, 
    { name: "kos cerny", latinName: "turdus-merula", numberOfImages: 2 }, 
    { name: "drozd zpevny", latinName: "turdus-philomelos", numberOfImages: 1 }, 
    { name: "penice cernohlava", latinName: "sylvia-atricapilla", numberOfImages: 1 }, 
    { name: "sykora konadra", latinName: "parus-major", numberOfImages: 1 }, 
    { name: "sykora modrinka", latinName: "parus-caeruleus", numberOfImages: 1 }, 
    { name: "brhlik lesni", latinName: "sitta-europaea", numberOfImages: 2 }, 
    { name: "krkavec velky", latinName: "corvus-corax", numberOfImages: 2 }, 
    { name: "vrana obecna", latinName: "corvus-corone", numberOfImages: 2 }, 
    { name: "havran polni", latinName: "corvus-frugilegus", numberOfImages: 1 }, 
    { name: "straka obecna", latinName: "pica-pica", numberOfImages: 1 }, 
    { name: "sojka obecna", latinName: "garrulus-glandarius", numberOfImages: 1 }, 
    { name: "zluva hajni", latinName: "oriolus-oriolus", numberOfImages: 2 }, 
    { name: "spacek obecny", latinName: "sturnus-vulgaris", numberOfImages: 2 }, 
    { name: "penkava obecna", latinName: "fringilla-coelebs", numberOfImages: 2 }, 
    { name: "kanar", latinName: "serinus-canaria", numberOfImages: 2 }, 
    { name: "zvonek zeleny", latinName: "carduelis-chloris", numberOfImages: 2 }, 
    { name: "stehlik obecny", latinName: "carduelis-carduelis", numberOfImages: 1 }, 
    { name: "hyl obecny", latinName: "pyrrhula-pyrrhula", numberOfImages: 1 }, 
    { name: "dlask tlustozoby", latinName: "coccothraustes-coccothraustes", numberOfImages: 2 }, 
    { name: "strnad obecny", latinName: "emberiza-citrinella", numberOfImages: 1 }, 
    { name: "vrabec domaci", latinName: "passer-domesticus", numberOfImages: 1 }, 
    { name: "snovac", latinName: "ploceus", numberOfImages: 2 }, 
    { name: "loskutak posvatny", latinName: "gracula-religiosa", numberOfImages: 1 }, 
    { name: "rajka", latinName: "paradisea", numberOfImages: 1 }, 
    { name: "astrild vlnkovany", latinName: "estrilda-astrild", numberOfImages: 1 }, 
    { name: "amada", latinName: "amadina-gouldove-(chloebia-gouldiae)", numberOfImages: 2 }, 
    { name: "zebricka pestra", latinName: "taeniopygia-guttata", numberOfImages: 2 }, 
    { name: "panenka bronzova", latinName: "lonchura-striata", numberOfImages: 1 }, 
    { name: "chuvicka japonska", latinName: "lonchura-striata-domestica", numberOfImages: 1 }
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
