<script>
import UserNameStep from "@/components/UserNameStep.vue";
import EmailStep from "@/components/EmailStep.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import ReviewStep from "@/components/ReviewStep.vue";
import IconPrevious from "@/components/icons/IconPrevious.vue";
import IconNext from "@/components/icons/IconNext.vue";
import * as constants from "node:constants";

export default {
  components: {IconNext, IconPrevious, ReviewStep, ButtonComponent, EmailStep, UserNameStep},
  data() {
    return {
      message: '',
      timer: null,
      textType: null,
      constants: {BALANCED: "BALANCED", NOT_BALANCED: "NOT BALANCED"},
      specialCharacters: ['[', ']', '{', '}', '(', ')'],
      specialCharacterMatches: {'[': ']', '{': '}', '(': ')'}
    };
  },
  methods: {
    isBalanced() {
      let specialCharactersInMessage = []
      const messageArray = this.message.split("").filter(char => char !== " ");

      // make a list of special characters of the text
      messageArray.forEach(letter => {
        if (this.specialCharacters.includes(letter)) {
          specialCharactersInMessage.push(letter)
        }
      })

      // make an object of spacial characters in text and their count
      let obj = {}
      specialCharactersInMessage.forEach(SC => {
        obj = {...obj, [SC]: specialCharactersInMessage.filter(x => x === SC).length}
      })

      let textTests = []
      if (specialCharactersInMessage.length === 0) {
        this.textType = this.constants.BALANCED
      } else if (specialCharactersInMessage.length > 6) {
        this.textType = this.constants.NOT_BALANCED
      } else if ((specialCharactersInMessage.length % 2) !== 0) {
        this.textType = this.constants.NOT_BALANCED
      } else {
        Object.keys(obj).forEach(char => {
          if (this.specialCharacterMatches[char]) {
            if (obj[char] === obj[this.specialCharacterMatches[char]]) {
              textTests.push(true)
            } else {
              textTests.push(false)
            }
          }
        })
        this.textType = textTests.includes(false) ? this.constants.NOT_BALANCED : this.constants.BALANCED
      }
    },
    descriptionChangeHandler() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isBalanced()
      }, 1500)
    }
  },
};
</script>
<template>
  <div class="bg-backgroud fixed overflow-y-auto inset-0 flex flex-col gap-3 items-center justify-center p-4">
    <div class="w-full sm:w-[400px] border border-border rounded-2xl p-8">
      <div class="relative pb-6">
        <input @input="descriptionChangeHandler" v-model="message" id="description"
               class="w-full bg-input text-text rounded-[8px] h-[40px] outline-none border border-border px-3 placeholder:font-light placeholder:text-description hover:border-darkerBorder focus:border-darkerBorder transition-all"/>
        <span v-if="textType === constants.BALANCED" class="absolute bottom-0 left-0 text-[14px] text-text font-light">The text is balanced.</span>
        <span v-if="textType === constants.NOT_BALANCED"
              class="absolute bottom-0 left-0 text-[14px] text-error font-light">The text is not balanced.</span>
      </div>
    </div>
    <div class="text-[14px] text-description">{{ `Developed with 💖 by Yazdan Qolami` }}</div>
  </div>
</template>