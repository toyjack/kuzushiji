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

    <template v-if="iframeUrl">
      <div style="background-color: #f5f5f5">
        <v-container class="py-0" style="height: 450px">
          <iframe
            :src="iframeUrl"
            width="100%"
            height="450"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </v-container>
      </div>
    </template>

    <v-container class="my-5">
      <h1 class="mb-5">
        {{ title }}
      </h1>

      <p class="text-center">
        <v-btn icon class="ma-1" target="_blank" :href="item.manifest_url"
          ><img :src="baseUrl + '/img/icons/iiif-logo.svg'" width="24px"
        /></v-btn>

        <v-btn icon class="ma-1" target="_blank" :href="viewerUrl"
          ><img :src="baseUrl + '/img/icons/icp-logo.svg'" width="24px"
        /></v-btn>

        <span class="mx-2"></span>

        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on }">
            <v-btn class="ma-1" color="primary" depressed icon v-on="on">
              <v-icon>mdi-comment-quote-outline</v-icon>
            </v-btn>
          </template>
          <v-card flat width="400px">
            <div class="pt-4 px-4">
              <h4 class="mb-2">{{ $t('citation') }}</h4>
              <p>{{ myText }}</p>
            </div>
            <v-card-actions>
              <v-spacer />
              <v-btn rounded color="primary" @click="writeToClipboard()">
                {{ $t('citation_copy') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <ResultOption
          class="ma-1"
          :item="{
            label: title,
            url: url,
          }"
        />
      </p>

      <v-simple-table class="mt-10">
        <template #default>
          <tbody>
            <tr v-if="false">
              <td class="py-4">
                <v-row>
                  <v-col cols="12" sm="3">{{ $t('description') }}</v-col>
                  <v-col
                    cols="12"
                    sm="9"
                    v-html="$utils.formatArrayValue(item.description, '<br />')"
                  ></v-col>
                </v-row>
              </td>
            </tr>
            <template v-for="(value, key) in item">
              <tr :key="key" v-if="key !== 'source' && value !== ''">
                <td class="py-4">
                  {{ key }}
                </td>
                <td class="py-4">
                  {{ value.split('@')[0] }}
                </td>
              </tr>
            </template>
          </tbody>
        </template>
      </v-simple-table>

      <License />

      <v-sheet class="text-center pa-10 mt-10">
        <small>
          <h3 class="mb-5">{{ $t('last_updated') }}</h3>

          {{ item._updated }}
        </small>
      </v-sheet>

      <v-snackbar v-model="snackbar" color="primary" :timeout="2000">
        <div class="pa-2 text-center">
          {{ $t('copied') }}
        </div>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'
import axios from 'axios'
import License from '~/components/kuzushiji/License.vue'

@Component({
  components: {
    ResultOption,
    License,
  },
})
export default class about extends Vue {
  id: any = this.$route.params.id
  label: any = this.$route.params.slug
  title: string =
    '「' +
    this.label +
    '（' +
    this.id +
    '）」 ' +
    this.$t('くずし字データセット')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  items: any = []

  bh: any[] = []

  baseUrl: any = process.env.BASE_URL

  total: number = 0

  map: any = {}

  filter: string = ''

  queryId: any = ''

  res: any[] = []

  item: any = {}

  async created() {
    /*
    const res = await axios.get(
      this.baseUrl + '/data/list/' + this.id + '.json'
    )
    const data = res.data
    this.res = data

   

    const queryId = this.$route.query.id
    this.queryId = queryId

    this.main()
    */

    const params = this.$route.params
    const slug = params.slug
    const id = params.id

    //console.log({slug, id})

    const res = await axios.get(this.baseUrl + '/data/list/' + slug + '.json')

    const data = res.data

    for (const obj of data) {
      if (obj.id === id) {
        this.item = obj
      }
    }

    //console.log(this.item)

    this.bh = [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        disabled: false,
        to: this.localePath({ name: 'unicode' }),
        text: this.$t('文字種一覧'),
        exact: true,
      },
      {
        disabled: false,
        to: this.localePath({ name: 'unicode-id', params: { id: slug } }),
        text: slug,
        exact: true,
      },
      {
        text: id,
      },
    ]
  }

  init() {
    this.queryId = ''
    this.main()
  }

  main() {
    const map: any = {}

    const data = this.res

    const queryId = this.queryId

    for (const item of data) {
      const source = item.source
      const doc = source.value.split('@')[0]
      const cn = source.call_number.split('@')[0]

      if (queryId && cn != queryId) {
        continue
      }

      if (queryId) {
        this.filter = doc
      }

      if (!map[cn]) {
        map[cn] = {
          label: doc,
          list: [],
        }
      }

      map[cn].list.push({
        id: item.identifier,
        image: item.thumbnail_url,
        manifest: item.manifest_url,
        slug: item.id,
      })
    }

    this.map = map
  }

  get iframeUrl() {
    const manifest = (this as any).item.manifest_url

    return this.baseUrl + '/curation/?manifest=' + manifest
  }

  get viewerUrl() {
    const manifest = (this as any).item.manifest_url

    return (
      'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=' +
      manifest
    )
  }

  // 算出 getter 関数
  get url() {
    // `this` は vm インスタンスを指します
    return this.baseUrl + this.$route.fullPath
  }

  snackbar: boolean = false

  get myText() {
    const siteName: any = process.env.siteName
    const footer: any = process.env.footer
    if (this.$i18n.locale === 'en') {
      const attribution = this.$t(siteName) + ' - ' + this.$t(footer)
      //const attribution = provided by${(this as any).item.attribution}
      return `"${this.title}" ${attribution} (${this.url})`
    } else {
      const attribution = siteName + ' - ' + footer
      //const attribution = 「${(this as any).item.attribution}」収録
      return `『${this.title}』${attribution} (${this.url})`
    }
  }
}
</script>
