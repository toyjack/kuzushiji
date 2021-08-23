<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <h2 class="mb-5">{{ title }}</h2>

      <Static :size="items.length" :total="total" />

      <!-- <h4 class="mt-10">文字種リスト</h4> -->

      <SearchResult :items="items"></SearchResult>

      <!-- <h3>くずし字データセットの書名一覧</h3> -->

      <License></License>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'

import Static from '~/components/kuzushiji/Static.vue'
import SearchResult from '~/components/kuzushiji/SearchResult.vue'
import License from '~/components/kuzushiji/License.vue'

@Component({
  components: {
    Static,
    SearchResult,
    License,
  },
})
export default class about extends Vue {
  title: string = this.$t('くずし字データセット') + ' ' + this.$t('文字種一覧')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  items: any = []

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: this.$t('文字種一覧'),
    },
  ]

  baseUrl: any = process.env.BASE_URL

  total: number = 0

  async mounted() {
    const res = await axios.get(this.baseUrl + '/data/001_list.json')
    const items = res.data

    items.sort(function (a: any, b: any) {
      if (a.size < b.size) return 1
      if (a.size > b.size) return -1
      return 0
    })

    let total = 0
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      //for (const item of data) {
      total += item.size
      item.index = i + 1
    }

    this.total = total

    this.items = items
  }
}
</script>
