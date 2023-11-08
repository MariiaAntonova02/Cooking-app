import React, { useState } from 'react';
import { Text, View, Button, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BreakfastScreen from './BreakfastScreen';

const Stack = createNativeStackNavigator();

const popularIngredientsBr = ['egg', 'milk', 'bacon', 'cheese', 'spinach', 'cereal', 'salmon', 'bread', 'yogurt', 'oatmeal', 'cottage cheese', 'avocado']; // Популярные ингредиенты для завтраков
const popularIngredientsLunch = ['bun', 'cutlet', 'tomato', 'vegetables', 'cucumber', 'salad', 'mushrooms', 'pasta', 'buckwheat', 'potato', 'fish', 'chicken', 'rice', 'soup']; // Популярные ингредиенты для обедов
const popularIngredientsDinner = ['bun', 'cutlet', 'tomato', 'vegetables', 'cucumber', 'salad', 'mushrooms', 'pasta', 'buckwheat', 'potato', 'fish', 'chicken', 'rice', 'soup'];
const popularIngredientsSnack = ['salty', 'sweet', 'flour', 'drink', 'neutral']; // Популярные ингредиенты для перекусов

const breakfastData = [
  {
    id: 1,
    name: 'Cereal with milk',
    image: 'https://opttorg-horeca.ru/assets/images/catalog/konditerskie-izdeliya/hlopya-kukuruznye-600gr.jpg',
    ingredients: 'cereals, milk',
    recipe: `◉ 1 cup of cereal
      ◉ 1 cup of milk
      ◉ 1-2 tablespoons of sugar (optional)

      Additionally:
      Fresh fruits (e.g., bananas, strawberries)

      Instructions:

      Pour the cereal into a bowl.

      In a separate container, heat the milk until it's warm but not boiling. You can do this in the microwave or on the stovetop.

      If you prefer sweeter cereal, you can add sugar to the warm milk and stir until it's dissolved.

      Pour the warm milk over the cereal in the bowl.

      Top the cereal with your favorite fresh fruits, such as banana slices or strawberries.

      Give it a gentle stir, and your cereal with milk is ready to enjoy!`,
  },
  {
    id: 2,
    name: 'Fried egg',
    image: 'https://wolkonsky.com/upload/iblock/a23/ulkvbsxu9arh5bqivw0xome4so4585pg/116.png',
    ingredients: 'egg, oil, sausage, cheese, spinach, tomatoes, bacon',
    recipe: `◉ 2 eggs
      ◉ 1-2 tablespoons vegetable oil or butter
      ◉ Salt and pepper to taste

      Additionally:
      ◉ sausage, cheese, spinach, tomatoes

      Instructions:

      1. Heat a non-stick frying pan over medium heat. Add the butter and let it melt evenly.

      2. As the butter begins to melt and heat up, carefully crack the eggs into a bowl to avoid getting shells in the pan.

      3. Place the eggs in the center of the pan, gradually lowering them to the surface to avoid breaking the yolks.

      4. Sprinkle eggs with salt and pepper to taste. You can add other seasonings if desired, such as paprika, oregano or cheese.

      5. Cover the pan with a lid to cook the eggs on the top side. If you prefer eggs with a runny yolk, leave them covered and cook them longer.

      6. Cook the eggs for 2 to 3 minutes (for medium rare) or until the yolks are done to your liking. If you want fried eggs with a runny yolk, the cooking time will be shorter.

      7. Using a spatula, carefully lift the eggs from the pan and transfer them to a plate.

      8. Serve the fried eggs immediately while they are warm. You can add toast, bacon, vegetables or other extras to suit your taste.
    `,
  },
  {
    id: 3,
    name: 'Oatmeal with boiled egg',
    image: 'https://vpuzo.com/uploads/picture/800/0//2020-11/1605776216_img_20201119_104744.jpg',
    ingredients: 'oatmeal, egg',
    recipe: 'Recipe',
  },
  {
    id: 4,
    name: 'Avocado toast with salmon',
    image: 'https://beregresort.ru/wp-content/uploads/2023/04/257_230414_bereg_6.3-scaled.jpg',
    ingredients: 'salmon, bread, egg, tomato, avocado, cheese',
    recipe: 'Recipe',
  },
  {
    id: 5,
    name: 'Yogurt with fruit',
    image: 'https://the-challenger.ru/wp-content/uploads/2018/09/shutterstock_207535645-800x533.jpg',
    ingredients: 'yogurt, fruit',
    recipe: 'Recipe',
  },
  {
    id: 6,
    name: 'Pancakes with something',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/pancakes.jpg?quality=82&strip=1',
    ingredients: 'egg, flour, milk, water, fruit, cottage cheese, sugar',
    recipe: 'Recipe',
  },
  // Добавьте информацию о других завтраках здесь
];

const lunchData = [
  {
    id: 1,
    name: 'Burger',
    image: 'https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg',
    ingredients: 'bun, cutlet, tomato, cucumber, cheese, sauce, salad',
    recipe: 'Recipe for lunch 1',
  },
  {
    id: 2,
    name: 'Borsch',
    image: 'https://menunedeli.ru/wp-content/uploads/2022/07/Borshh-iz-govjadiny-500%D1%85350.jpg-1200x800.jpg',
    ingredients: 'soup, vegetables, beets, cabbage, potatoes, chicken, onions, carrots, water, salt, spices, tomato paste',
    recipe: 'Recipe for lunch 2',
  },
{
    id: 3,
    name: 'Bouillon',
    image: 'https://ru.ipepper.org/wp-content/uploads/2021/10/final-min-6.jpg',
    ingredients: 'soup, pasta, chicken, onion, carrots, water, salt, spices, egg',
    recipe: 'Recipe for dinner 1',
  },
  {
    id: 4,
    name: 'Potatoes with fish',
    image: 'https://i.lefood.menu/wp-content/uploads/w_images/2022/01/recept-25974-scaled-1240x827_w.jpg',
    ingredients: 'potatoes, fish, butter, lemon, spices, salt',
    recipe: 'Recipe for dinner 2',
  },
    {
    id: 5,
    name: 'Pasta with cheese and chicken',
    image: 'https://southernbite.com/wp-content/uploads/2022/06/Bacon-Cream-Cheese-Pasta-3.jpg',
    ingredients: 'pasta, chicken, cheese, tomatoes, bacon, sauce',
    recipe: 'Recipe for lunch 1',
  },
  {
    id: 6,
    name: 'Buckwheat with cutlet/chicken and vegetables',
    image: 'https://img.freepik.com/premium-photo/healthy-dinner-lunch-bowl-with-buckwheat-porridge-fried-chicken-cutlet-fresh-vegetable-salad_2829-21442.jpg?w=2000',
    ingredients: 'buckwheat, cutlet, chicken, vegetables, tomato, pepper, cucumber, carrots, lettuce, vegetable oil',
    recipe: 'Recipe for lunch 2',
  },
{
    id: 7,
    name: 'Rice with fish',
    image: 'https://www.maggi.ru/data/images/recept/img640x500/recept_1635_5nji.jpg',
    ingredients: 'rice, fish, salmon, vegetables',
    recipe: 'Recipe for dinner 1',
  },
  {
    id: 8,
    name: 'Puree with cutlet/chicken',
    image: 'https://img.freepik.com/premium-photo/tasty-puree-with-butter-chicken-cutlets-decorated-with-parsley-leaf_112304-712.jpg',
    ingredients: 'potatoes, chicken, cutlet, vegetables, milk, butter',
    recipe: 'Recipe for dinner 2',
  },
  // Добавьте информацию о других обедах здесь
];

const dinnerData = [
  {
    id: 1,
    name: 'Burger',
    image: 'https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg',
    ingredients: 'bun, cutlet, tomato, cucumber, cheese, sauce, salad',
    recipe: 'Recipe for lunch 1',
  },
  {
    id: 2,
    name: 'Borsch',
    image: 'https://menunedeli.ru/wp-content/uploads/2022/07/Borshh-iz-govjadiny-500%D1%85350.jpg-1200x800.jpg',
    ingredients: 'soup, vegetables, beets, cabbage, potatoes, chicken, onions, carrots, water, salt, spices, tomato paste',
    recipe: 'Recipe for lunch 2',
  },
{
    id: 3,
    name: 'Bouillon',
    image: 'https://ru.ipepper.org/wp-content/uploads/2021/10/final-min-6.jpg',
    ingredients: 'soup, pasta, chicken, onion, carrots, water, salt, spices, egg',
    recipe: 'Recipe for dinner 1',
  },
  {
    id: 4,
    name: 'Potatoes with fish',
    image: 'https://i.lefood.menu/wp-content/uploads/w_images/2022/01/recept-25974-scaled-1240x827_w.jpg',
    ingredients: 'potatoes, fish, butter, lemon, spices, salt',
    recipe: 'Recipe for dinner 2',
  },
    {
    id: 5,
    name: 'Pasta with cheese and chicken',
    image: 'https://southernbite.com/wp-content/uploads/2022/06/Bacon-Cream-Cheese-Pasta-3.jpg',
    ingredients: 'pasta, chicken, cheese, tomatoes, bacon, sauce',
    recipe: 'Recipe for lunch 1',
  },
  {
    id: 6,
    name: 'Buckwheat with cutlet/chicken and vegetables',
    image: 'https://img.freepik.com/premium-photo/healthy-dinner-lunch-bowl-with-buckwheat-porridge-fried-chicken-cutlet-fresh-vegetable-salad_2829-21442.jpg?w=2000',
    ingredients: 'buckwheat, cutlet, chicken, vegetables, tomato, pepper, cucumber, carrots, lettuce, vegetable oil',
    recipe: 'Recipe for lunch 2',
  },
{
    id: 7,
    name: 'Rice with fish',
    image: 'https://www.maggi.ru/data/images/recept/img640x500/recept_1635_5nji.jpg',
    ingredients: 'rice, fish, salmon, vegetables',
    recipe: 'Recipe for dinner 1',
  },
  {
    id: 8,
    name: 'Puree with cutlet/chicken',
    image: 'https://img.freepik.com/premium-photo/tasty-puree-with-butter-chicken-cutlets-decorated-with-parsley-leaf_112304-712.jpg',
    ingredients: 'potatoes, chicken, cutlet, vegetables, milk, butter',
    recipe: 'Recipe for dinner 2',
  },
  // Добавьте информацию о других ужинах здесь
];

const snackData = [
  {
    id: 1,
    name: 'Nuts',
    image: 'https://cdnn21.img.ria.ru/images/97887/09/978870982_0:128:2251:1394_600x0_80_0_0_e4c87478adb83d7038498771531b97c5.jpg',
    ingredients: 'neutral, nuts',
    recipe: 'Buy store',
  },
  {
    id: 2,
    name: 'Chips',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kartoffelchips-1.jpg/800px-Kartoffelchips-1.jpg',
    ingredients: 'salty, chips',
    recipe: 'Buy store',
  },
  {
    id: 3,
    name: 'Bun with cottage cheese or fruit',
    image: 'https://www.inspirationsforall.com/wp-content/uploads/2021/10/watruschki-rezept-775x775-1.jpg',
    ingredients: 'sweet, flour, bun',
    recipe: 'Buy store',
  },
  {
    id: 4,
    name: 'Sausage in dough',
    image: 'https://img.taste.com.au/VYcz0pA0/taste/2016/11/easy-sausage-rolls-28532-1.jpeg',
    ingredients: 'salty, flour, bun',
    recipe: 'Buy store',
  },
  {
    id: 5,
    name: 'Candies',
    image: 'https://posylka-cdn.s3.eu-central-1.amazonaws.com/products/08103169/1000/08103169_1.jpg',
    ingredients: 'sweet, chocolate, waffle',
    recipe: 'Buy store',
  },
  {
    id: 6,
    name: 'Chocolate covered cheese',
    image: 'https://smachnonews.24tv.ua/resources/photos/news/202201/1854948.jpg?v=1661256962000',
    ingredients: 'sweet, chocolate',
    recipe: 'Buy store',
  },
   {
    id: 7,
    name: 'Yogurt/kefir',
    image: 'https://s0.rbk.ru/v6_top_pics/media/img/9/36/346848353223369.jpg',
    ingredients: 'sweet, drink, neutral',
    recipe: 'Buy store',
  },
  // Добавьте информацию о других перекусах здесь
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isSelectIngredientsExpanded, setIsSelectIngredientsExpanded] = useState(true);

  const [breakfastNotes, setBreakfastNotes] = useState(breakfastData);
  const [lunchNotes, setLunchNotes] = useState(lunchData);
  const [dinnerNotes, setDinnerNotes] = useState(dinnerData);
  const [snackNotes, setSnackNotes] = useState(snackData);

  const handleSelectIngredientsToggle = () => {
    setIsSelectIngredientsExpanded(!isSelectIngredientsExpanded);
  };

  const addNote = (type, text, image) => {
    const newNote = { text, image };
    switch (type) {
      case 'Breakfast':
        setBreakfastNotes([...breakfastNotes, newNote]);
        break;
      case 'Lunch':
        setLunchNotes([...lunchNotes, newNote]);
        break;
      case 'Dinner':
        setDinnerNotes([...dinnerNotes, newNote]);
        break;
      case 'Snack':
        setSnackNotes([...snackNotes, newNote]);
        break;
      default:
        break;
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleIngredientToggle = (ingredient) => {
    // Переключение выбора ингредиента
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  // Фильтрация блюд по выбранным ингредиентам
  const filteredNotes = {
    Breakfast: breakfastNotes.filter((note) =>
      selectedIngredients.length === 0 ||
      note.ingredients.split(', ').some((ingredient) => selectedIngredients.includes(ingredient))
    ),
    Lunch: lunchNotes.filter((note) =>
      selectedIngredients.length === 0 ||
      note.ingredients.split(', ').some((ingredient) => selectedIngredients.includes(ingredient))
    ),
    Dinner: dinnerNotes.filter((note) =>
      selectedIngredients.length === 0 ||
      note.ingredients.split(', ').some((ingredient) => selectedIngredients.includes(ingredient))
    ),
    Snack: snackNotes.filter((note) =>
      selectedIngredients.length === 0 ||
      note.ingredients.split(', ').some((ingredient) => selectedIngredients.includes(ingredient))
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={() => (
            <HomeScreen
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
              notes={filteredNotes[selectedCategory]}
              addNote={addNote}
              selectedIngredients={selectedIngredients}
              handleIngredientToggle={handleIngredientToggle}
              isSelectIngredientsExpanded={isSelectIngredientsExpanded}
              handleSelectIngredientsToggle={handleSelectIngredientsToggle}
              popularIngredientsBr={popularIngredientsBr}
              popularIngredientsLunch={popularIngredientsLunch}
              popularIngredientsDinner={popularIngredientsDinner}
              popularIngredientsSnack={popularIngredientsSnack}
            />
          )}
          options={{ title: 'Simple Notes App' }}
        />
        <Stack.Screen name="Breakfast" component={BreakfastScreen} options={{ title: 'Breakfast Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({
  selectedCategory,
  handleCategoryChange,
  notes,
  addNote,
  selectedIngredients,
  handleIngredientToggle,
  isSelectIngredientsExpanded,
  handleSelectIngredientsToggle,
  popularIngredientsBr,
  popularIngredientsLunch,
  popularIngredientsDinner,
  popularIngredientsSnack,
}) {
  const navigation = useNavigation();

  const getRandomDish = () => {
    const allNotes = notes;
    if (allNotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allNotes.length);
      const randomNote = allNotes[randomIndex];
      // Перейти на экран с подробностями выбранного блюда
      viewBreakfastDetails(randomNote);
    } else {
      console.log('No available dishes.');
    }
  }

  const viewBreakfastDetails = (breakfastData) => {
    navigation.navigate('Breakfast', { breakfastData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Simple Notes App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Breakfast" onPress={() => handleCategoryChange('Breakfast')} />
        <Button title="Lunch" onPress={() => handleCategoryChange('Lunch')} />
        <Button title="Dinner" onPress={() => handleCategoryChange('Dinner')} />
        <Button title="Snack" onPress={() => handleCategoryChange('Snack')} />
      </View>

     <ScrollView style={styles.ingredientsContainer}>
  <Text style={styles.sectionTitle}>Select Ingredients:</Text>
  <Button
    title={isSelectIngredientsExpanded ? 'Hide Ingredients' : 'Select Ingredients'}
    onPress={handleSelectIngredientsToggle}
  />
  {isSelectIngredientsExpanded && selectedCategory === 'Breakfast' && (
    popularIngredientsBr.map((ingredient) => (
      <Button
        key={ingredient}
        title={ingredient}
        onPress={() => handleIngredientToggle(ingredient)}
        color={selectedIngredients.includes(ingredient) ? 'orange' : 'gray'}
        style={styles.ingredientButton}
      />
    ))
  )}
  {isSelectIngredientsExpanded && selectedCategory === 'Lunch' && (
    popularIngredientsLunch.map((ingredient) => (
      <Button
        key={ingredient}
        title={ingredient}
        onPress={() => handleIngredientToggle(ingredient)}
        color={selectedIngredients.includes(ingredient) ? 'orange' : 'gray'}
        style={styles.ingredientButton}
      />
    ))
  )}
  {isSelectIngredientsExpanded && selectedCategory === 'Dinner' && (
    popularIngredientsDinner.map((ingredient) => (
      <Button
        key={ingredient}
        title={ingredient}
        onPress={() => handleIngredientToggle(ingredient)}
        color={selectedIngredients.includes(ingredient) ? 'orange' : 'gray'}
        style={styles.ingredientButton}
      />
    ))
  )}
  {isSelectIngredientsExpanded && selectedCategory === 'Snack' && (
    popularIngredientsSnack.map((ingredient) => (
      <Button
        key={ingredient}
        title={ingredient}
        onPress={() => handleIngredientToggle(ingredient)}
        color={selectedIngredients.includes(ingredient) ? 'orange' : 'gray'}
        style={styles.ingredientButton}
      />
    ))
  )}
</ScrollView>


      <Button title="Random Dish" onPress={getRandomDish} />

      <ScrollView style={styles.notesContainer}>
        <NotesSection title={selectedCategory} notes={notes} viewBreakfastDetails={viewBreakfastDetails} />
      </ScrollView>
    </SafeAreaView>
  );
}

function NotesSection({ title, notes, viewBreakfastDetails }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title} Notes:</Text>
      {notes.map((note) => (
        <View key={note.id} style={styles.noteContainer}>
          <Image source={{ uri: note.image }} style={styles.noteImage} />
          <Text style={styles.noteText}>{note.name}</Text>
          <Button title="View Details" onPress={() => viewBreakfastDetails(note)} />
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Белый фон
    padding: 16,
  },
  heading: {
    fontSize: 28, // Увеличьте размер заголовка
    fontWeight: 'bold',
    marginBottom: 24, // Больше отступ после заголовка
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Больше пространства между кнопками
    marginBottom: 24, // Больше отступ после кнопок
  },
  notesContainer: {
    flex: 2,
  },
  sectionContainer: {
    backgroundColor: '#f8f8f8', // Светло-серый фон
    padding: 16,
    marginBottom: 16,
    borderRadius: 12, // Закругленные углы
    elevation: 3, // Тень (для Android)
    shadowColor: '#000', // Цвет тени
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20, // Увеличьте размер заголовка секции
    fontWeight: 'bold',
    marginBottom: 12, // Больше отступ после заголовка
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, // Больше отступ после каждой записи
  },
  noteImage: {
    width: 72, // Увеличьте размер изображения
    height: 72,
    borderRadius: 36, // Закругленные углы
    marginRight: 16,
  },
  noteText: {
    flex: 1,
  },
  ingredientsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  ingredientButton: {
    backgroundColor: '#ff6f61', // Красный цвет кнопки
    paddingVertical: 12, // Увеличьте вертикальное заполнение
    paddingHorizontal: 20, // Увеличьте горизонтальное заполнение
    marginVertical: 8,
    borderRadius: 12, // Закругленные углы
    flexDirection: 'row', // Использование вложенных элементов
    alignItems: 'center', // Выравнивание элементов по центру
    justifyContent: 'space-between',
  },
  
});
