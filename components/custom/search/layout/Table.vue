<template>

  <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th></th>
              <th class="text-left">{{ $t('地名') }}</th>
              <th class="text-left">{{ $t('legend') }}</th>
              <th class="text-left">{{ $t('description') }}</th>
              <th class="text-left">{{ $t('拡大図') }}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td class="py-2">
                <nuxt-link
                    :to="
                      localePath({
                        name: 'item-id',
                        params: { id: item.objectID },
                      })
                    "
                  >
                    <!-- query, -->
                    <v-img
                      contain
                      max-height="90"
                      max-width="90"
                      style="height: 90px"
                      width="100%"
                      class="grey lighten-2"
                      :src="item.thumbnail"
                    /> </nuxt-link>
                    </td>

                    <td>
                <nuxt-link
                  :to="
                      localePath({
                        name: 'item-id',
                        params: { id: item.objectID },
                      })
                    "
                  >{{ item.label }}</nuxt-link
                >
                <!--
                <nuxt-link
                  :to="localePath({ name: 'list-id', params: { id: item.id } })"
                  >{{ item.label }}</nuxt-link
                >
                -->
              </td>

                    <td>

                      <!--

                      <img
                  class="mx-2 mt-2"
                  :src="getImage(item.記号)"
                  width="30px"
                />
                {{ getLegend(item.記号) }}

                -->

                {{ $utils.formatArrayValue(item.category)}}

                    </td>

                    <td>

                {{ $utils.formatArrayValue(item.description)}}

                    </td>
              
              <td>
                <!--
                <a
                  :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=${item.curation}&xywh=${item.member.split('#xywh=')[1]}&mode=annotation&lang=ja`"
                  >{{item.図[0]}}</a
                >
                -->
                <a
                  :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=${item.curation}&xywh=${item.member.split('#xywh=')[1]}&mode=annotation&lang=ja`"
                  >{{ $utils.formatArrayValue(item.図) }}</a
                >
              </td>

              

              <td v-if="false">
                TODO
                <template v-if="false">
                  <a
                    :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=${item.curation}&mode=annotation&lang=ja`"
                    >グリッド</a
                  >
                </template>
              </td>
              <td>
                <ResultOption
          :item="{
            label: item.label,
            url: localePath({
                        name: 'item-id',
                        params: { id: item.objectID },
                      }),
          }"
        />
                </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'nuxt-property-decorator'
import ResultOption from '~/components/display/ResultOption.vue'

@Component({
  components: {
ResultOption
}
})
export default class FullTextSearch extends Vue {
  baseUrl: any = process.env.BASE_URL
  @Prop({})
  items!: any[]

  getImage(list: any) {
    /*
    const index = '' + list[0]
    const markers = (process as any).env.legend
    if (markers[index] && index !== '0' && index !== '35') {
      return this.baseUrl + '/img/markers/' + index + '.png'
    } else {
      return ''
    }
    */
    return ''
  }

  getLegend(list: any) {
    /*
    const index = '' + list[0]
    const markers = (process as any).env.legend
    if (markers[index]) {
      const marker: any = markers[index]
      return marker.分類 + (marker.記号説明 ? ': ' : '') + marker.記号説明
    } else {
      return index
    }
    */
    return "1"
  }
}
</script>
