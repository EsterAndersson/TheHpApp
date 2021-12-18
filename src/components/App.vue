<script>
import CharacterInfo from './CharacterInfo'
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
              image: event.item.image
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
   background-color: #56a3f2;
   color: #fff;
 }
 Label {
   text-align: center;
   font-size: 20;
   padding: 10 10 10 10;
 }
 .bookTitle{
   font-size: 20;
 }
ListView { 
    separator-color: transparent;
    padding-top: 10;
  }
 Stacklayout {
  border-color: white;
  border-width: 4;
  border-radius: 20;
}

</style>

<template>
  <Page>
    <ActionBar title="Characters" />
    <TabView android:tabBackgroundColor="#53ba82"
             android:tabTextColor="#c4ffdf"
             android:selectedTabTextColor="#ffffff"
             androidSelectedTabHighlightColor="#ffffff">
      <TabViewItem title="Characters">
        <GridLayout columns="*" rows="*">
          <ListView for="item in allCharacters" @itemTap="onItemTap">
            <v-template>
              <StackLayout backgroundColor="#e5e5e5">
                <Label :text="item.character"/>
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
                <StackLayout backgroundColor="#e5e5e5">
                  <Label :text="spell.spell"/>
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
                <StackLayout backgroundColor="#e5e5e5">
                  <Label :text="book.title" class="bookTitle"/>
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
                <StackLayout backgroundColor="#e5e5e5">
                    <Label :text="info.type" class="infoType"/>
                    <Label :text="info.content" textWrap="true"/>
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
    </TabView>
  </Page>
</template>