import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className="App">
      <h1>🥗 Healthy Recipes That Don't Suck</h1>
      <h2>Discover and share nutritious meals for every lifestyle</h2>
      <div className="cards-container">
        <Card 
          name="Avocado Toast 🥑"
          category="Breakfast"
          description="Simple, delicious and packed with healthy fats. Ready in under 5 minutes."
          link="https://www.allrecipes.com/recipe/246803/avocado-toast-vegan/"
        />
        <Card 
          name="Greek Yogurt Parfait 🫐"
          category="Breakfast"
          description="Layered with fresh berries, granola and honey. High in protein and probiotics."
          link="https://www.allrecipes.com/recipe/265838/make-ahead-greek-yogurt-parfait/"
        />
        <Card 
          name="Green Smoothie 🥬"
          category="Breakfast"
          description="Spinach, banana, almond milk and chia seeds blended into a nutrient packed drink."
          link="https://www.allrecipes.com/recipe/90329/groovy-green-smoothie/"
        />
        <Card 
          name="Quinoa Buddha Bowl 🥙"
          category="Lunch"
          description="Quinoa, roasted veggies, chickpeas and tahini dressing. Filling and nutritious."
          link="https://www.allrecipes.com/recipe/256834/buddha-bowl/"
        />
        <Card 
          name="Greek Salad 🥗"
          category="Lunch"
          description="Cucumber, tomatoes, olives, feta cheese and olive oil. Fresh and light."
          link="https://www.allrecipes.com/recipe/14341/good-for-you-greek-salad/"
        />
        <Card 
          name="Turkey Lettuce Wraps 🥬"
          category="Lunch"
          description="Ground turkey with garlic and ginger wrapped in crispy lettuce leaves."
          link="https://www.allrecipes.com/recipe/202709/turkey-lettuce-wraps-with-shiitake-mushrooms/"
        />
        <Card 
          name="Baked Salmon 🐟"
          category="Dinner"
          description="Oven baked salmon with lemon and herbs. Rich in omega-3 fatty acids."
          link="https://www.allrecipes.com/recipe/22538/baked-salmon-fillets-dijon/"
        />
        <Card 
          name="Stir Fry Vegetable Rice 🥦"
          category="Dinner"
          description="Colorful veggies stir fried in sesame oil with brown rice. Quick and healthy."
          link="https://www.allrecipes.com/recipe/150439/stir-fried-rice/"
        />
        <Card 
          name="Black Bean Tacos 🌮"
          category="Dinner"
          description="Seasoned black beans with avocado, salsa and lime in whole wheat tortillas."
          link="https://www.allrecipes.com/recipe/228915/black-bean-tacos/"
        />
        <Card 
          name="Apple Peanut Butter 🍎"
          category="Snack"
          description="Sliced apples with natural peanut butter. Simple, satisfying and nutritious."
          link="https://www.allrecipes.com/recipe/219207/monster-bites/"
        />
      </div>
    </div>
  )
}

export default App