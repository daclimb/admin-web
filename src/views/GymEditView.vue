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
        <p id="address" class="address">{{ gym.address }}</p>
        <input class="detailed-address" placeholder="상세 주소" v-model="detailedAddress">
        <button class="search-address" @click="onClickSearchAddressButton">주소 검색</button>
        <label for="description">설명</label>
        <textarea id="description" class="description" v-model="gym.description"/>
        <label for="images-container">이미지</label>
        <div class="images-container" id="images-container">
          <img class="image" v-for="(url, idx) in gym.imageIds" :src="url" v-bind:key="idx"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mockData } from '@/mock/mock-data'
import logger from '@/services/logger'

export default {
  name: 'GymDetailView',
  data() {
    return {
      gym: mockData.gymDetail,
      mapService: undefined,
      detailedAddress: undefined
    }
  },
  methods: {
    onClickSaveButton() {
      logger.verbose("GymEditView.onClickSaveButton", "trying to save gym");
    },
    onClickSearchAddressButton() {
      let gym = this.gym;
      new window.daum.Postcode({
        oncomplete: function(data) {
          logger.verbose("GymEditView.onClickSearchAddressButton", `${JSON.stringify(data)}`);
          gym.address = data.roadAddress; // 도로명 주소 변수
        }
      }).open();
    },
  },
  mounted() {
    const id = this.$route.params['id']
    if (id) {
      logger.verbose("GymEditView.mounted", `its edit gym ${id}`);
    } else {
      logger.verbose("GymEditView.mounted", `its new gym`);
    }
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

      label {
        font-weight: bold;
      }

      .images-container {
        .image {
          height: 200px;
        }
      }
    }

  }
}

</style>