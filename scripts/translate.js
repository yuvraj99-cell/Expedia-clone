function loadGoogleTranslate() {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,bn,es,sq,zh-CN,ar",
        //   includedLanguages: "en",
        autoDisplay: false,
        multilanguagePage: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "translate"
    );
  }
  
  let div = document.getElementById("translate");