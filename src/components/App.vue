<script>
import CharacterInfo from './CharacterInfo'
import { StackLayout } from '@nativescript/core'
export default {
  data() {
    return {
      CharacterInfo : CharacterInfo,
    }
  },
  computed: {
    allCharacters() {
      return this.$store.state.allCharacters
    },
    books() {
      return this.$store.state.books
    },
    spells() {
      return this.$store.state.spells
    },
    allInfo(){
      return this.$store.state.allInfo
    }
  },
  methods: {
  onItemTap(event) {
    console.log(event.item)
    this.$navigateTo(CharacterInfo, {
      props: {
        id: event.item.id,
        character: event.item.character,
        interpretedBy: event.item.interpretedBy,
        hogwartsHouse: event.item.hogwartsHouse,
        image: event.item.image,
        child: event.item.child
      }
    })
  }
  },
  created() {
    this.$store.dispatch("fetchCharacters");
    this.$store.dispatch("fetchBooks");
    this.$store.dispatch("fetchSpells");
    this.$store.dispatch("fetchInfo");
  },
}
</script>

<style scoped>
 ActionBar {
   background-color: #D3A625;
   color: #fff;
 }
 Label {
   text-align: center;
   font-size: 20;
   padding: 10 10 10 10;
   font-family: "Lucida Console", "Courier New", monospace;
 }
 .Title{
   font-size: 20;
   font-weight: bold;
 }
 ListView { 
    separator-color: transparent;
    padding-top: 10;
  }
 Stacklayout {
  border-color: white;
  border-width: 4;
  border-radius: 10;
}

</style>

<template>
  <Page>
    <ActionBar title="The Harry Potter Info App" />
    <TabView android:tabBackgroundColor="#D3A625"
             android:tabTextColor="#FAF5CF"
             android:selectedTabTextColor="#ffffff"
             androidSelectedTabHighlightColor="#ffffff"
             androidTabsPosition="bottom">
      <TabViewItem title="Characters">
        <GridLayout columns="*" rows="*">
          <ListView for="item in allCharacters" @itemTap="onItemTap">
            <v-template>
              <StackLayout backgroundColor="#E6E2B5">
                <Label :text="item.character" class="Title"/>
                <Label :text="item.hogwartsHouse"/>
              </StackLayout>
            </v-template>
          </ListView>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Spells">
        <GridLayout columns="*" rows="*">
            <ListView for="spell in spells" >
              <v-template>
                <StackLayout backgroundColor="#E6E2B5">
                  <Label :text="spell.spell" class="Title"/>
                  <Label :text="spell.use" textWrap="true"/>
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Books">
        <GridLayout columns="*" rows="*">
            <ListView for="book in books">
              <v-template>
                <StackLayout backgroundColor="#E6E2B5">
                  <Label :text="book.title" class="Title" textWrap="true"/>
                  <Label :text="book.description" textWrap="true"/>
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Info">
        <GridLayout columns="*" rows="*">
            <ListView for="info in allInfo">
              <v-template>
                <StackLayout backgroundColor="#E6E2B5">
                    <Label :text="info.type" class="Title" />
                    <Label :text="info.content" textWrap="true"/>
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
    </TabView>
  </Page>
</template>
