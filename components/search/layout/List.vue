<template>
  <div>
    <v-row v-for="item in items" :key="item.objectID">
      <v-col cols="12" sm="3" v-if="isImage">
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
            max-height="150"
            style="height: 150px"
            width="100%"
            class="grey lighten-2"
            :src="item.thumbnail"
          /> </nuxt-link
      ></v-col>
      <v-col cols="12" :sm="isImage ? 9 : 12">
        <h3>
          <nuxt-link
            :to="
              localePath({
                name: 'item-id',
                params: { id: item.objectID },
              })
            "
            v-html="$searchUtils.highlightRelation(item.label, q)"
          ></nuxt-link>
        </h3>

        <div class="my-2">
          <template v-for="(metadataValue, key) in metadataList">
            <span :key="key"><b>{{metadataValue}}: </b>{{$utils.formatArrayValue(item[metadataValue])}}
  
              <span class="mr-2" v-if="key != metadataList.length - 1">,</span> 
  
            </span>
          </template>
          <!--
          <p v-if="item.description">
            <template v-for="(value, key) in item.description">
              <small v-if="value.length < 50" :key="key">
                <span v-html="$searchUtils.highlightRelation(value, q)" />

                <span v-if="key !== item.description.length">
                  /
                </span>
              </small>
            </template>
          </p>
          <p v-if="false">
            <v-icon>mdi-database</v-icon> {{ item.attribution }}
          </p>
          -->
        </div>
        <div class="text-right">
          <ResultOption
          :item="{
            label: item.label,
            url: localePath({
                        name: 'item-id',
                        params: { id: item.objectID },
                      }),
          }"
        />
        </div>
      </v-col>
    </v-row>
  </div>
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
  @Prop({})
  items!: any[]

  @Prop({})
  q!: any

  metadataList: any = process.env.list

  isImage: any = process.env.image
}
</script>
