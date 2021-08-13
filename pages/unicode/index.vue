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

      <h4 class="mt-10">文字種リスト</h4>

      <div class="text-right">
        <v-btn
          v-for="(option, key) in layouts"
          :key="key"
          icon
          @click="layout_ = option.value"
          ><v-icon :color="layout_ === option.value ? 'primary' : ''">{{
            option.icon
          }}</v-icon></v-btn
        >
      </div>

      <template v-if="layout_ === 'grid'">
        <List :items="items" />
      </template>
      <template v-else>
        <Table :items="items" />
      </template>

      <!-- <h3>くずし字データセットの書名一覧</h3> -->
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import List from '~/components/kuzushiji/List.vue'
import Table from '~/components/kuzushiji/Table.vue'
import Static from '~/components/kuzushiji/Static.vue'

@Component({
  components: {
    List,
    Table,
    Static,
  },
})
export default class about extends Vue {
  title: string = 'くずし字データセット 文字種（くずし字）一覧'

  head() {
    const title = this.title
    return {
      title,
    }
  }

  layouts: any[] = [
    {
      icon: 'mdi-view-grid',
      value: 'grid',
    },
    {
      icon: 'mdi-table',
      value: 'table',
    },
  ]

  layout_: string = 'grid'

  items: any = []

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: '文字種一覧',
    },
  ]

  baseUrl: any = process.env.BASE_URL

  total: number = 0

  async mounted() {
    const res = await axios.get(this.baseUrl + '/data/001_list.json')
    const data = res.data

    data.sort(function (a: any, b: any) {
      if (a.size < b.size) return 1
      if (a.size > b.size) return -1
      return 0
    })

    let total = 0
    for (const item of data) {
      total += item.size
    }

    this.total = total

    this.items = data
  }
}
</script>
