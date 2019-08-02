import funfunzMC from 'funfunzmc'

import config from '../mc/MCconfig'
import settings from '../mc/MCsettings'

const instance = funfunzMC({
  config,
  settings,
  plugin: true,
  defaultInterface: false,
})

export default instance
