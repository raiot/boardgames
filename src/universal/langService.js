const LANG_VAR = {
  STORE: 'lang'
}

export const LangStorage = {
  store: (value) => {
    localStorage.setItem(LANG_VAR.STORE, value)
  },
  getLang: () => {
    return LangMap[localStorage.getItem(LANG_VAR.STORE)]
  },
  getLangId: () => {
    return localStorage.getItem(LANG_VAR.STORE)
  }
}

export const LangMap = {
  0: 'es_mx',
  1: 'en_us'
}

