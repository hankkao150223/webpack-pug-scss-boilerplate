import './styles/index.scss'

import test from './scripts/index'

if (process.env.NODE_ENV !== 'production') {
  require('./index.pug')
}

console.log('test in index page')

test()
