import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className="App">
      <h1>🥗 Healthy Recipes That Dont Suck</h1>
      <h2>Discover and share nutritious meals for every lifestyle</h2>
      <div className="cards-container">
        <Card 
          name="Avocado Toast 🥑"
          category="Breakfast"
          description="Simple, delicious and packed with healthy fats. Ready in under 5 minutes."
        />
        <Card 
          name="Greek Yogurt Parfait 🫐"
          category="Breakfast"
          description="Layered with fresh berries, granola and honey. High in protein and probiotics."
        />
        <Card 
          name="Green Smoothie 🥬"
          category="Breakfast"
          description="Spinach, banana, almond milk and chia seeds blended into a nutrient packed drink."
        />
        <Card 
          name="Quinoa Buddha Bowl 🥙"
          category="Lunch"
          description="Quinoa, roasted veggies, chickpeas and tahini dressing. Filling and nutritious."
        />
        <Card 
          name="Greek Salad 🥗"
          category="Lunch"
          description="Cucumber, tomatoes, olives, feta cheese and olive oil. Fresh and light."
        />
        <Card 
          name="Turkey Lettuce Wraps 🥬"
          category="Lunch"
          description="Ground turkey with garlic and ginger wrapped in crispy lettuce leaves."
        />
        <Card 
          name="Baked Salmon 🐟"
          category="Dinner"
          description="Oven baked salmon with lemon and herbs. Rich in omega-3 fatty acids."
        />
        <Card 
          name="Stir Fry Vegetables 🥦"
          category="Dinner"
          description="Colorful veggies stir fried in sesame oil with brown rice. Quick and healthy."
        />
        <Card 
          name="Black Bean Tacos 🌮"
          category="Dinner"
          description="Seasoned black beans with avocado, salsa and lime in whole wheat tortillas."
        />
        <Card 
          name="Apple Peanut Butter 🍎"
          category="Snack"
          description="Sliced apples with natural peanut butter. Simple, satisfying and nutritious."
        />
      </div>
    </div>
  )
}

export default App