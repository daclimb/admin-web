<template>
  <div class="gym-detail-main">
    <div class="content">
      <div class="save-button">
        <button class="save" @click="onClickSaveButton">저장</button>
      </div>
      <div class="gym-infos">
        <StringEditor ref="name-editor" :title="'이름'" :value="gym.name"/>
        <AddressEditor ref="address-editor" :title="'주소'" :address="gym.address"/>
        <TextAreaEditor ref="description-editor" :title="'설명'" :value="gym.description"/>
        <div class="section">
          <div class="image-title">
            <label for="images-container">이미지</label>
            <input ref="imageInput" type="file" accept="image/*" @change="onSelectImages" :hidden="true" multiple/>
            <button class="add-button" @click="onClickAddImageButton">추가</button>
          </div>
          <div class="images-container" id="images-container">
            <img class="image" v-for="(url, idx) in gym.imageUrls" :src="url" v-bind:key="idx"/>
            <img class="image" v-for="(url, idx) in addedImages" :src="url" v-bind:key="idx"/>
          </div>
        </div>
        <TagEditor ref="tag-editor" :title="'태그'" :value="gym.tags"/>
        <KeyValueEditor ref="payment-editor" :title="'이용금액'" :value="gym.payments.map(v => {
          return { key: v.title, value: v.price}
        })"/>
        <KeyValueEditor ref="opening-hours-editor" :title="'영업시간'" :value="gym.openingHours.map(v => {
          return { key: v.title, value: v.value }
        })"/>
        <StringArrayEditor ref="convenience-editor" :title="'시설 정보'" :value="gym.convenience"/>
        <DifficultyEditor ref="difficulty-editor" :title="'난이도'" :value="gym.difficulties"/>
        <KeyValueEditor ref="contact-editor" :title="'연락처'" :can-edit-key="false" :addable="false" :value="[
            { key: 'email', value: gym.contact.email },
            { key: 'phone', value: gym.contact.phone },
        ]"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import logger from '@/services/logger'
import {defineComponent} from "vue";
import {gymDetails} from "@/mock/mock-data";
import StringEditor from "@/views/editors/StringEditor.vue";
import AddressEditor from "@/views/editors/AddressEditor.vue";
import {Address} from "@/model/gym";
import TextAreaEditor from "@/views/editors/TextAreaEditor.vue";
import StringArrayEditor from "@/views/editors/StringArrayEditor.vue";
import KeyValueEditor from "@/views/editors/KeyValueEditor.vue";
import TagEditor from "@/views/editors/TagEditor.vue";
import DifficultyEditor from "@/views/editors/DifficultyEditor.vue";

export default defineComponent({
  name: 'GymDetailView',
  components: {
    DifficultyEditor,
    TagEditor, StringArrayEditor, KeyValueEditor, TextAreaEditor, AddressEditor, StringEditor},
  data() {
    return {
      gym: gymDetails,
      addedImages: [] as string[]
    }
  },
  methods: {
    _getDataFromRef<T>(name: string): T {
      return (this.$refs[name] as any).getData()
    },
    onClickSaveButton() {
      logger.verbose("GymEditView.onClickSaveButton", "trying to save gym");
      const name = this._getDataFromRef<string>('name-editor')
      const address = this._getDataFromRef<Address>('address-editor')
      const description = this._getDataFromRef<string>('description-editor')
      console.log(`name - ${name}, address - ${JSON.stringify(address)}, description - ${description}`)
    },
    onClickSearchAddressButton() {
      let gym = this.gym;
      new window.daum.Postcode({
        oncomplete: function (data: any) {
          logger.verbose("GymEditView.onClickSearchAddressButton", `${JSON.stringify(data)}`);
          gym.address = data.roadAddress; // 도로명 주소 변수
        }
      }).open();
    },
    onClickAddImageButton() {
      (this.$refs.imageInput as HTMLElement).click()
    },
    onSelectImages(event: InputEvent) {
      const inputElement = event.target as HTMLInputElement
      const files = inputElement.files
      if (!files) {
        throw Error()
      }

      for (let i = 0; i < files.length; i++) {
        const url = URL.createObjectURL(files[i])
        this.addedImages.push(url)
      }
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
})
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

    .save-button {
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
      gap: 10px;

      label {
        font-weight: bold;
      }

      .description {
        resize: none;
        height: 160px;
      }

      .image-title {
        display: flex;
        gap: 5px;
      }
      .images-container {
        display: flex;
        align-items: center;
        gap: 40px;

        .image {
          height: 200px;
        }
      }
    }
  }
}

</style>
