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
  background-color: #D3A625;
  color: #ffffff;
}
.CharacterContainer {
  align-items: center;
  background-color: #E6E2B5;
  padding: 20, 20, 20, 20;
  margin: 3%;
  border-radius: 0, 20, 0, 20;
}
.button {
  background-color: #000000;
  border: none;
  color: white;
  padding: 15px 32px;
  margin:3%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0, 20, 0, 20;
}

Image {
  width: 270;
  margin-top: 20;
  height: 300;
}
.CharacterName {
  font-size: 30;
  color: #333;
}
Label {
  font-size: 16px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-align: center;
  margin-top:10px;
  text-align: center;
}
</style>

<template>
  <Page>
    <ActionBar :title="this.character"/>
      <FlexboxLayout flexDirection="column" class="CharacterContainer" >
        <Image :src="this.image" />
        <Label :text="this.character" class="CharacterName" textWrap="true"/>
        <Label :text="this.interpretedBy" class="InterpretedBy" />
        <Label :text="this.hogwartsHouse" class="HogwartsHouse" />
        <Label :text="this.child" class="Child" textWrap="true"/>

        <Button text="Back" @tap="goBack" class="button"/>

      </FlexboxLayout>
  </Page>
</template>
