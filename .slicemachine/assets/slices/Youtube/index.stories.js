import MyComponent from '../../../../slices/Youtube';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Youtube'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"lien_youtube":{"link_type":"Web","url":"https://www.youtube.com/watch?v=mupsjddCat4"},"description":[{"type":"paragraph","text":"Labore quis ullamco deserunt deserunt pariatur adipisicing nulla veniam consectetur aute qui amet ullamco nostrud velit.","spans":[]}]},"id":"_Default","slice_type":"youtube"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
