const language = {
    set langs(name) {
      this.log.push(name.toUpperCase());
    },
    get langs () {
       return this.log.join(', ');
    },
    log: []
};
  
  language.langs = 'en';
  language.langs = 'fa';
  language.langs = 'sP'
  
  console.log(language.log);
  console.log(language.langs);
