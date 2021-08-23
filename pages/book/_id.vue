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

      <v-sheet class="my-10 pa-5" v-if="item.extent" color="grey lighten-2">
        <v-icon class="mr-2">mdi-download</v-icon
        >くずし字データセットダウンロード：
        <a
          :href="`https://drive.google.com/file/d/${item.gid}/view?usp=sharing`"
          >個別（ZIP {{ (item.extent / 1000000).toFixed(2) }} MB）</a
        >／
        <a :href="`https://drive.google.com/file/d/${all.gid}/view?usp=sharing`"
          >全体（ZIP {{ (all.extent / 1000000).toFixed(2) }} MB）</a
        >
      </v-sheet>

      <Static v-if="item.size" :size="item.size" :total="item.total" />

      <!-- <h4 class="mt-10">文字種リスト</h4> -->

      <SearchResult :items="items" :query="{ id }"></SearchResult>

      <License></License>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import SearchResult from '~/components/kuzushiji/SearchResult.vue'
import Static from '~/components/kuzushiji/Static.vue'
import License from '~/components/kuzushiji/License.vue'

@Component({
  components: {
    SearchResult,
    Static,
    License,
  },
})
export default class about extends Vue {
  id: any = this.$route.params.id
  //title: string = '「' + this.id + '」くずし字データセット'

  all: any = {
    gid: '1CB0tmu3BYwxtEdz-wCDnWsZ6zhsOynhF',
    extent: 1196759720,
  }
  head() {
    const title = this.title
    return {
      title,
    }
  }

  item: any = {}

  items: any = []

  bh: any[] = []

  title: string = ''

  baseUrl: any = process.env.BASE_URL

  map: any = {}

  async mounted() {
    const res = await axios.get(
      this.baseUrl + '/data/book/' + this.id + '.json'
    )
    const data = res.data

    this.title = data.label + '（' + this.id + '）'

    this.bh = [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        disabled: false,
        to: this.localePath({ name: 'book' }),
        text: this.$t('データセット'),
        exact: true,
      },
      {
        text: this.title,
      },
    ]

    this.item = data

    const items = data.list

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

    this.items = items

    //this.search = decodeURIComponent(this.$route.hash.replace('#', ''))
  }
}
</script>
