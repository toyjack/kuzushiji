<template>
  <div>
    <section class="mb-5">
      <v-parallax :src="top" height="300">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>{{ siteName }}</b>
          </h1>
          <v-btn
            large
            class="mt-5"
            :to="localePath({ name: 'unicode' })"
            color="primary"
            >{{ $t('try_out') }}</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <v-container class="mt-10">
      <div class="mb-5 pb-5 text-center">
        <!-- <h1>{{ $t(siteName) }}</h1> -->
        <p class="py-5" v-html="siteDesc"></p>
      </div>

      <div v-if="items.length > 0">
        <h3 class="mt-5 mb-10 text-center">{{ $t('menu') }}</h3>

        <v-row class="mb-10">
          <v-col v-for="(obj, key) in items" :key="key" cols="12" :sm="3">
            <v-card flat no-body class="mb-4">
              <template v-if="obj.href">
                <a :href="obj.href" target="_blank">
                  <template v-if="obj.img">
                    <div
                      class="text-center grey lighten-2"
                      style="height: 150px"
                    >
                      <v-img contain style="height: 150px" :src="obj.img" />
                    </div>
                  </template>
                  <template v-else>
                    <div
                      class="text-center grey lighten-2 pa-10"
                      style="height: 150px"
                    >
                      <v-icon size="75">{{ obj.icon }}</v-icon>
                    </div>
                  </template>
                </a>
                <div class="pa-4">
                  <a :href="obj.href" target="_blank">
                    <h4>{{ obj.label }}</h4>
                  </a>

                  <p v-if="obj.description" class="mt-2 mb-0">
                    {{ obj.description }}
                  </p>
                </div>
              </template>
              <template v-else>
                <nuxt-link :to="localePath(obj.path)">
                  <div
                    class="text-center grey lighten-2 pa-10"
                    style="height: 150px"
                  >
                    <v-icon size="75">{{ obj.icon }}</v-icon>
                  </div>
                </nuxt-link>
                <div class="pa-4">
                  <nuxt-link :to="localePath(obj.path)">
                    <h4>{{ obj.label }}</h4>
                  </nuxt-link>

                  <p v-if="obj.description" class="mt-2 mb-0">
                    {{ obj.description }}
                  </p>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <v-card flat class="my-5" v-if="false">
        <v-card-title>
          <h2>{{ $t('updates') }}</h2>
        </v-card-title>
        <v-card-text>
          <ul class="text--primary">
            <li>2021年XX月XX日: プロトタイプシステムを公開しました。</li>
          </ul>
        </v-card-text>
      </v-card>

      <br />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class about extends Vue {
  baseUrl: any = process.env.BASE_URL
  siteName: any = (this as any).$t(process.env.siteName)
  siteDesc: any = process.env.siteDesc
  top: any = process.env.top
  visualization: any = process.env.visualization

  items: any = [
    /*
    {
      label: this.$t('about_'),
      path: {
        name: 'page-slug',
        params: {
          slug: 'about'
        }
      },
      description: '',
      icon: 'mdi-information',
    },
    {
      label: this.$t('list'),
      path: {
        name: 'collection',
      },
      description: '',
      icon: 'mdi-view-list',
    },
    */
    {
      label: this.$t(
        'くずし字データセットの一覧を見る（機械のための学習データ）'
      ),
      path: {
        name: 'book',
      },
      description: '',
      icon: 'mdi-view-list',
    },
    {
      label: this.$t(
        '文字種ごとのくずし字一覧を見る（人間のための学習データ）'
      ),
      path: {
        name: 'unicode',
      },
      description: '',
      icon: 'mdi-account',
    },
    /*
    {
      label: this.$t('search'),
      path: {
        name: 'search',
      },
      description: '',
      icon: 'mdi-magnify',
    },
    {
      label: this.$t('category'),
      path: {
        name: 'category',
      },
      description: '',
      icon: 'mdi-tag',
    },
    */
    {
      label: this.$t('くずし字ジェネレータ'),
      path: {
        name: 'generator',
      },
      description: '',
      icon: 'mdi-format-text',
    },
    {
      label: 'PixPlot',
      href: 'https://hi-ut.github.io/kuzushiji-app/pp/',
      description: '',
      img: this.baseUrl + '/img/pixplot.png',
    },
    {
      label: this.$t('NYPL可視化'),
      href: 'https://nakamura196.github.io/hi_letter_data/pd/',
      description: '',
      img: this.baseUrl + '/img/pd_banner_magnified.png',
    },
    {
      label: '文字画像データセット(平仮名版)',
      href: 'https://github.com/hi-ut/hiragana',
      description: '',
      img:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },

    /*
    {
      label: this.$t('category'),
      path: {
        name: 'category',
      },
      description: '',
      icon: 'mdi-tag',
    },
    */
    /*
    {
      label: "現代地図",
      path: {
        name: 'map',
      },
      description: '',
      icon: 'mdi-map',
    },
    */
    /*
    {
      label: this.$t('list'),
      path: {
        name: 'collection',
      },
      description: '',
      icon: 'mdi-view-list',
    },
    {
      label: "水名一覧",
      path: {
        name: "river",
      },
      description: '',
      icon: 'mdi-water',
    },
    {
      label: this.$t('category'),
      path: {
        name: 'category',
      },
      description: '',
      icon: 'mdi-tag',
    },
    {
      label: "冊子画像",
      path: {
        name: "book",
      },
      description: '',
      icon: 'mdi-book',
    },
    */
    /*
    {
      label: "提供機能",
      href: "https://docs.google.com/document/d/1MpB4CfebygZE2C4VGUemjI0Pa7242go1Q_5tfMHxyCE/edit?usp=sharing",
      description: '',
      icon: 'mdi-cog',
    },
    */
    /*
    {
      label: this.$t('iiif_collection'),
      href: "https://www.kanzaki.com/works/2016/pub/image-annotator?u=https://static.toyobunko-lab.jp/suikeichuzu_data/iiif/collection/top.json",
      description: '',
      icon: 'mdi-image',
    },
    */
    /*
    {
      label: this.$t('NYPL可視化'),
      href: this.visualization+ '/pd/',
      description: '',
      img: this.baseUrl + "/img/pd_banner_magnified.png"
    },
    {
      label: this.$t('PixPlot'),
      href: this.visualization+ '/pp/',
      description: '',
      img: this.baseUrl + "/img/pixplot.png"
    },
    */
  ]

  head() {
    const title = this.siteName
    return {
      titleTemplate: null,
      title,
    }
  }
}
</script>
