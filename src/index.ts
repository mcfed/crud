import RListPage from './ListPage/List.react'
import RFormPage from './FormPage/Form.react'
import RViewPage from './Page/Page.react'



// import { default as VListPage } from './ListPage/List.vue'
// import { default as VFormPage } from './FormPage/Form.vue'
// import { default as VViewPage } from './Page/Page.vue'

export * from './Page/IPage'
export * from './FormPage/IForm'
export * from './ListPage/IList'

export { /*VListPage, VFormPage, VViewPage,*/RListPage, RFormPage, RViewPage}
export { RListPage as ListPage, RFormPage as FormPage, RViewPage as ViewPage }
