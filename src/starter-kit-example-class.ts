export default class On2StarterKit {
  constructor() {
    console.log(`Constructor`);
  }
  hello()  {
    return true;
  }

  bla(p?: boolean) {
    if (p) {
      return true;
    } else {
      return false;
    }
  }
}