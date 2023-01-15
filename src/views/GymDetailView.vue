<template>
  <div class="gym-detail-main">
    <div class="content">
      <p class="name">{{ gym.name }}</p>
      <p class="address">{{ gym.address }}</p>
      <p class="description">{{ gym.description }}</p>
      <div id="map" style="width:100%;height:400px;"></div>
    </div>
  </div>
</template>

<script>

import { mockData } from '@/mock/mock-data'

export default {
  name: 'GymDetailView',
  data() {
    return {
      gym: mockData.gymDetail,
      map: null
    }
  },
  methods: {
    loadMap() {
      let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      let options = { //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(this.gym.latitude, this.gym.longitude), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };
      this.map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      this.loadMarker();
    },
    loadMarker() {
      const position = new window.kakao.maps.LatLng(this.gym.latitude, this.gym.longitude);
      const marker = new window.kakao.maps.Marker({
        position: position
      });
      marker.setMap(this.map);
    }
  },
  mounted() {
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

    .name {
      font-size: 28px;
      font-weight: bold;
    }
  }
}

</style>