<template>
  <div class="gym-detail-main">
    <div class="content">
      <div class="button-wrapper">
        <button class="save" @click="onClickSaveButton">저장</button>
      </div>
      <div class="gym-infos">
        <label for="name">이름</label>
        <input id="name" class="name" v-model="gym.name"/>
        <label for="address">주소</label>
        <input id="address" class="address" v-model="gym.address"/>
        <label for="description">설명</label>
        <textarea id="description" class="description" v-model="gym.description"/>
        <label for="map">지도</label>
        <div id="map" style="width:100%;height:400px;"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { mockData } from '@/mock/mock-data'
import { MapController } from '@/services/map'

export default {
  name: 'GymDetailView',
  data() {
    return {
      gym: mockData.gymDetail,
      mapService: null
    }
  },
  methods: {
    loadMap() {
      let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      this.mapService = new MapController(container, this.gym.latitude, this.gym.longitude);
      this.mapService.setMarker(this.gym.latitude, this.gym.longitude);
    },
    onClickSaveButton() {
      console.log("save")
    }
  },
  mounted() {
    const id = this.$route.params['id']
    if (id) {
      console.log("its edit view", id)
    } else {
      console.log("its create view")
    }
    this.loadMap()
  }
}
</script>

<style lang="scss" scoped>

.gym-detail-main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;

    .button-wrapper {
      width: 100%;
      display: flex;
      justify-content: right;

      .save {
        font-size: large;
      }
    }

    .gym-infos {
      display: flex;
      flex-direction: column;

      * {
        margin-bottom: 10px;
      }
    }

  }
}

</style>