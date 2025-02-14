<template>

  <div>
    <v-tabs
      class="my-5"
          v-model="tabs"
        >
          <v-tab
            v-for="(item, key) in items" :key="key"
            :href="`#${key}`"
            class="primary--text"
          >
            {{item.label}} ({{item.value.toLocaleString()}} {{$t("results")}})
          </v-tab>

          
        </v-tabs>

        <v-alert type="warning" prominent class="my-5" v-if="alert">
          <v-row align="center">
            <v-col class="grow">
              上位 {{thres.toLocaleString()}} 件の結果のみを表示しています。全件を表示するには、検索結果を絞り込んでください。もしくは、表示に時間がかかる可能性がありますが、右のボタンから全件を表示してください。
            </v-col>
            <v-col class="shrink">
              <v-btn color="primary" @click="showAll()">全件表示</v-btn>
            </v-col>
          </v-row>
        </v-alert>

        <v-row>
          <v-col cols="12" md="4">

            <v-data-table
              :headers="headers"
              :items="rows"
              :search="search"
            >
              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  background-color="grey lighten-3"
                  filled
                  rounded
                  dense
                  hide-details
                  :placeholder="$t('add_a_search_term')"
                  append-icon="mdi-magnify"
                  clearable
                  clear-icon="mdi-close-circle"
                  :label="$t('search')"
                  class="mx-4 my-5"
                ></v-text-field>
              </template>

              <template v-slot:item.label="{ item }">
                <a @click="zoom(item.id)">{{ item.label }}</a>
              </template>
              <template v-slot:item.detail="{ item }">
                <v-btn target="_blank" icon color="primary" @click="detail = itemsAll[item.index]; dialog = true;">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-col>
          <v-col cols="12" md="8">
            <div id="openseadragon" style="height: 600px; width: 100%;"></div>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              <span class="text-h5">{{ detail.label }}</span>
            </v-card-title>
            <v-card-text style="height: 400px; overflow-y: auto" class="py-5">
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <template v-for="(agg, key) in details">
                      <tr v-if="!hide[agg.value] && detail[agg.value] && detail[agg.value].length > 0" :key="key">
                        <td>{{ agg.value }}</td>
                        <td>{{ $utils.formatArrayValue( detail[agg.value] ) }}</td>
                      </tr>
                    </template>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="primary" text @click="dialog = false">
                {{ "閉じる" }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                :to="localePath({name: 'item-id' , params : {id : detail.objectID}})"
              >
                {{ "詳細を開く" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios'

import OpenSeadragon from 'openseadragon';
import * as Annotorious from '@recogito/annotorious-openseadragon';

import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';

var HelloWorldPlugin = function(args) {

  var createButton = function(value) {
    var button = document.createElement('button');

    if (value == currentColorValue)
      button.className = 'selected';

    button.dataset.tag = value;
    button.style.backgroundColor = value;
    button.addEventListener('click', addTag); 
    return button;
  }

  var createTag = function(value) {
    var button = document.createElement('span');
    button.className = "badge badge-secondary mx-1 pa-2";
    button.innerHTML = value
    return button;
  }

  var container = document.createElement('div');
  container.className = 'pa-2';

  var textContainer = document.createElement('div');
  textContainer.className = 'mt-2';
  container.appendChild(textContainer)

  var tagContainer = document.createElement('div');
  tagContainer.className = 'mt-2';
  container.appendChild(tagContainer)

  args.annotation.body.map((body) => {
    if(body.purpose == "tagging"){
      tagContainer.appendChild(createTag(body.value));
    } else {
      textContainer.appendChild(createElementFromHTML(body.value));
    }
  })

  return container;
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild; 
}



// ##########

export default {
  components: {},
  data() {
    return {
      dialog: false,
      detail : {},
      baseUrl: process.env.BASE_URL,
      search: "",
      headers : [
        {text : this.$t("name"), value : "label"},
        {text : "分類", value : "category"},
        //{text : "記号説明", value : "kigo"},
        {text : "詳細", value : "detail", sortable: false},
      ],
      rows : [],
      viewer : null,
      anno : null,
      tabs: "0",
      items: [],
      thres: 2000,
      alert : false,
      details : process.env.detail,
      hide:  process.env.hide
    }
  },

  props: {
    itemsAll: {
      required: true,
    },
    aggs: {
      required: true,
    }
  },
  mounted(){
    this.init()
    this.update()
  },

  methods: {
    zoom(id) {
      this.anno.fitBounds(id)
    },
    init(){
      this.alert = false

      const aggs = this.aggs

      const arr = aggs["図"].value

      const settings = process.env.settings
      

      const map = {}

      for(const key in settings){
        map[settings[key].label] = key
      }

      const arr2 = []
      const keys = {}

      for(const obj of arr){
        const label = obj[0]
        const value = obj[1]
        const id = map[label]

        arr2.push({
          "id": id,
          "label": label,
          "value": value,
          "annos" : [],
          "rows" : []
        })

        keys[label] = arr2.length - 1
      }

      const itemsAll = this.itemsAll

      let count = 0

      for(const item of itemsAll){

        const map = item["図"][0]

        const obj = arr2[keys[map]]

        const xywh = item.member.split("=")[1]

        obj.image = item.thumbnail.split("/" + xywh)[0] + "/info.json"

        const annos = obj.annos
        const rows = obj.rows

        const body = [{
          "type": "TextualBody",
          "value": `<div><a href="${this.baseUrl + "/item/" + item.objectID }">${item.label}</a></div>`
        }]

        for(let key in item){
          const value = this.$utils.formatArrayValue(item[key])
          if(!value){
            continue
          }

          if(`${value}`.startsWith("http")){
            continue
          }
          
          if(["objectID", "fulltext", "label", "sort"].includes(key)){
            continue
          }
          
          body.push({
            "type": "TextualBody",
            "purpose": "tagging",
            "value": key + ": " + value
          })
          
        }

        const anno = { 
          "@context": "http://www.w3.org/ns/anno.jsonld",
          "id": item.objectID,
          "type": "Annotation",
          "body": body,
          "target": {
            "selector": {
              "type": "FragmentSelector",
              "conformsTo": "http://www.w3.org/TR/media-frags/",
              "value": item.member.split("#")[1]
            }
          }
        }

        annos.push(anno)

        rows.push({
          id : item.objectID,
          label : item.label,
          category : this.$utils.formatArrayValue(item.category),
          //kigo : this.$utils.formatArrayValue(item["記号説明"]),
          index: count
        })

        count += 1

        if(count >= this.thres && this.thres > 0){
          this.alert = true
          break
        }
      }

      //アノテーションが含まれるもののみ
      const aItems = []
      for(const obj of arr2){
        if(obj.annos.length > 0){
          obj.value = obj.annos.length
          aItems.push(obj)
        }
      }

      this.items = aItems
    },
    async update(){
      //初期化
      document.getElementById("openseadragon").innerHTML = "";
      const item = this.items[Number(this.tabs)]

      const res = await axios.get(item.image);
      const tileSources = res.data;

      const config = {readOnly: true, locale: 'auto',
                widgets: [HelloWorldPlugin]};
      
      const viewer = OpenSeadragon({
        id: "openseadragon",
        prefixUrl: "https://recogito.github.io/js/openseadragon/images/",
        tileSources
      });

      const anno = Annotorious(viewer, config);
      anno.setAnnotations(item.annos);

      this.rows = item.rows
      this.anno = anno
    },
    showAll(){
      this.thres = -1
      this.init()
      this.update()
    }
  },

  watch: {
    tabs: function(new2, old){
      this.update()
    },
    aggs: function(new2, old){
      if(JSON.stringify(new2) != JSON.stringify(old)){
        this.init()
        this.update()
      } 
    }
  }
}

</script>
<style>
.badge-secondary {
    color: #fff;
    background-color: #6c757d;
}
.badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.openseadragon-canvas {
  outline: none;
  background-color: #f4f4f4 !important;
}

/** New style for the annotation outlines **/
svg.a9s-annotationlayer .a9s-selection .a9s-inner,
svg.a9s-annotationlayer .a9s-annotation .a9s-inner {
  stroke: #1976d2;
}
</style>

