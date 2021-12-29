<script>
import App from './App'
export default {

  props: ['id', 'character', 'image','interpretedBy', 'hogwartsHouse', 'child'],

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
  background-color: #3e81b8;
  color: #ffffff;
}
.CharacterContainer {
  align-items: center;
  background-color: #cacaca;
  padding: 20, 20, 20, 20;
  margin: 3%;
  border-radius: 0, 20, 0, 20;
  text-shadow: 10, 10, 10, 10 rgb(124, 38, 38);
}
.button {
  background-color: #000000;
  border: none;
  color: white;
  padding: 15px 32px;
  margin:1%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0, 20, 0, 20;
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
Label{
  overflow-wrap: break-word;
  word-wrap: true;
}
</style>

<template>
  <Page>
    <ActionBar :title="this.character"/>
      <FlexboxLayout flexDirection="column" class="CharacterContainer" >
        <Image :src="this.image" />
        <Label :text="this.character" class="CharacterName" />
        <Label :text="this.interpretedBy" class="InterpretedBy" />
        <Label :text="this.hogwartsHouse" class="HogwartsHouse" />
        <Label :text="this.child" class="Child" />

        <Button text="Back" @tap="goBack" class="button"/>

      </FlexboxLayout>
  </Page>
</template>
