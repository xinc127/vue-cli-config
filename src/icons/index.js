// icons/index.js

import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

Vue.component('SvgIcon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)

requireAll(req)
