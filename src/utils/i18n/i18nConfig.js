
import { createI18n } from 'vue-i18n'
import pt_br from './pt_br.json'
import en_us from './en_us.json'

export default createI18n({
    locale: 'pt_br',
    fallbackLocale: 'en_us',
    messages: {
      pt_br,
      en_us,
    }
  })