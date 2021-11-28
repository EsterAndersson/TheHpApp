<template>
  <Page>
    <ActionBar title="NativeScript-Vue Pokemon"/>
    <StackLayout backgroundColor="#FFF">
      <FlexboxLayout flexDirection="column" class="CharacterContainer">

        <Image :src="this.image" />
        <Label :text="this.character" class="CharacterName" />
        <Label :text="this.interpretedBy" class="InterpretedBy" />
        <Label :text="this.hogwartsHouse" class="HogwartsHouse" />

        <Button text="Back" @tap="goBack" />

      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
import App from './App'
export default {

  props: ['id', 'character', 'image','interpretedBy', 'hogwartsHouse'],

  data() {
    return {
      App : App,
    }
  },

    

methods: {
     goBack: function (args) {
       this.$navigateBack(App);
     }
}
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.CharacterContainer {
  align-items: center;
}
Image {
  width: 270;
  margin-top: 20;
}
.CharacterName {
  font-size: 35;
  color: #333;
}
.HogwartsHouse {
  padding: 10;
  font-size: 16;
}
</style>