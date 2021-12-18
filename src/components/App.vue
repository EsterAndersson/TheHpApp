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
 }
 .bookTitle{
   font-size: 20;
 }
 .textviewBook{
   font-size:18;
   text-align: center;
 }
 .textviewInfo{
   font-size:18;
   text-align: center;
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
                  <ListView for="item in allCharacters" @itemTap="onItemTap"  separatorColor="transparent">
                    <v-template>
                      <StackLayout backgroundColor="#e5e5e5">
                        <Label :text="item.character" padding="10, 10, 10, 10" width="100%" />
                        <Label :text="item.hogwartsHouse"  width="100%" />
                    </StackLayout>
                    </v-template>
                  </ListView>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Spells">
                <GridLayout columns="*" rows="*">
                    <ListView for="spell in spells" rowHeight="100" >
                      <v-template>
                        <StackLayout>
                          <Label :text="spell.spell" />
                          <Label :text="spell.use" width="100%"/>
                        </StackLayout>
                      </v-template>
                    </ListView>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Books">
                <GridLayout columns="*" rows="*">
                    <ListView for="book in books">
                      <v-template>
                        <StackLayout backgroundColor="#e5e5e5" borderRadius="20" padding-top="40">
                          <Label :text="book.title" class="bookTitle"/>
                          <TextView editable="False" class="textviewBook"> 
                           <span :text="book.description"/>
                          </TextView>/>
                        </StackLayout>
                        </v-template>
                    </ListView>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Info">
                <GridLayout columns="*" rows="*">
                    <ListView for="info in allInfo">
                      <v-template>
                        <StackLayout backgroundColor="#e5e5e5" borderRadius="20" padding-top="40">
                            <Label :text="info.type" class="infoType"/>
                            <TextView editable="False" class="textviewInfo"> 
                             <span :text="info.content"/>
                            </TextView>/>
                        </StackLayout>
                        </v-template>
                    </ListView>
                </GridLayout>
            </TabViewItem>
        </TabView>
  </Page>
</template>