<template>
  <div>
    <v-text-field
      class="my-10"
      v-model="search"
      append-icon="mdi-magnify"
      :label="$t('search')"
      single-line
      hide-details
      filled
      rounded
      dense
      background-color="grey lighten-2"
      clear-icon="mdi-close-circle"
      :clearable="true"
    ></v-text-field>

    <v-row>
      <v-col cols="12" md="3">
        <v-select
          dense
          single-line
          hide-details
          v-model="sort"
          :items="sortItems"
          outlined
          rounded
        ></v-select>
      </v-col>
      <v-col cols="12" md="9" class="text-right">
        <v-btn
          v-for="(option, key) in layouts"
          :key="key"
          icon
          @click="layout_ = option.value"
          ><v-icon :color="layout_ === option.value ? 'primary' : ''">{{
            option.icon
          }}</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <template v-if="layout_ === 'grid'">
      <List :items="items2" :sort="sort" :query="query" />
    </template>
    <template v-else>
      <Table :items="items2" :query="query" class="mt-5" />
    </template>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'
import List from '~/components/kuzushiji/List.vue'
import Table from '~/components/kuzushiji/Table.vue'

@Component({
  components: {
    List,
    Table,
  },
})
export default class ShareButtons extends Vue {
  baseUrl: any = process.env.BASE_URL

  @Prop({})
  query!: any

  search: string = ''

  @Prop({ required: true })
  items!: any[]

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

  sortItems: any = [
    {
      text: this.$t('出現回数'),
      value: 'size',
    },
    {
      text: this.$t('コード'),
      value: 'code',
    },
  ]

  sort: string = 'size'

  get items2() {
    const search = this.search
    const items = this.items

    const key = this.sort

    if (key === 'size') {
      items.sort(function (a: any, b: any) {
        if (a.size < b.size) return 1
        if (a.size > b.size) return -1
        return 0
      })
    } else {
      items.sort(function (a: any, b: any) {
        if (a.sort < b.sort) return -1
        if (a.sort > b.sort) return 1
        return 0
      })
    }

    if (!search) {
      return items
    }

    const items2 = []
    for (const item of items) {
      if (search === item.label) {
        items2.push(item)
        break
      }
    }

    return items2
  }
}
</script>
