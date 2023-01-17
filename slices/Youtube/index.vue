<template>
  <Bounded as="section">
    <figure class="grid grid-cols-1 gap-4">
      <div v-if="slice.primary.lien_youtube.url" class="aspect-w-16 aspect-h-9">
        <iframe :src="link" frameborder="0" allowfullscreen=""></iframe>
      </div>
      <PrismicRichText
        :field="slice.primary.description"
        wrapper="figcaption"
        class="text-center font-serif italic tracking-tight text-slate-500"
      />
    </figure>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Youtube",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    link() {
      if (this.slice.primary.lien_youtube.url) {
        const vParam = this.slice.primary.lien_youtube.url.split("v=")[1];
        if (vParam) {
          return `https://www.youtube.com/embed/${vParam}`;
        } else {
          let url = this.slice.primary.lien_youtube.url.split("/");
          let last_part = url[url.length - 1];
          return `https://www.youtube.com/embed/${last_part}`;
        }
      }
    },
  },
};
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
