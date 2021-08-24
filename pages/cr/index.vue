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

      <p>くずし字データセットのドキュメント一覧です。</p>

      <v-text-field
        class="my-10"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        filled
        rounded
        background-color="grey lighten-2"
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="-1"
        :search="search"
      >
        <template v-slot:item.box="{ item }">
          <a
            target="_blank"
            :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://nakamura196.github.io/E34/curation/${item.id}/box.json`"
          >
            <v-btn small color="primary">閲覧</v-btn>
          </a>
        </template>

        <template v-slot:item.character="{ item }">
          <a
            target="_blank"
            :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=https://nakamura196.github.io/E34/curation/${item.id}/character.json`"
          >
            <v-btn small color="primary">閲覧</v-btn>
          </a>
        </template>
      </v-data-table>

      <!-- <h3>くずし字データセットの書名一覧</h3> -->
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'

@Component({})
export default class about extends Vue {
  title: string = 'くずし字データセット ドキュメント一覧'

  search: string = ''

  head() {
    const title = this.title
    return {
      title,
    }
  }

  items: any = []

  headers: any[] = [
    {
      text: 'Call Number',
      value: 'id',
    },
    {
      text: 'ドキュメント名',
      value: 'label',
    },
    {
      text: '文字種',
      value: 'size',
    },
    {
      text: '文字数',
      value: 'total',
    },

    {
      text: '四角表示',
      value: 'box',
    },
    {
      text: '文字表示',
      value: 'character',
    },
  ]

  bh: any[] = [
    {
      text: this.$t('top'),
      disabled: false,
      to: this.localePath({ name: 'index' }),
      exact: true,
    },
    {
      text: 'ドキュメント一覧',
    },
  ]

  baseUrl: any = process.env.BASE_URL

  total: number = 0

  async mounted() {
    const res = await axios.get(this.baseUrl + '/data/curations.json')
    const data = res.data
    this.items = data
  }
}
</script>
