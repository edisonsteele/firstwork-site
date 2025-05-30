'use client'

import { useState } from 'react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/lib/AuthContext'

const LESSON_TYPES = ['Counting', 'Expressive', 'FFC', 'Matching', 'Reading', 'Receptive ID']
const SPEAKER_SPEEDS = [0.75, 1.0, 1.25]
const BORDER_PROMPT_MODES = ['Full', 'Minimal', 'Off']

// Goal categories and their items
const GOAL_CATEGORIES = {
  'Accessories': ['Backpack', 'Belt', 'Bowtie', 'Button', 'Duffle Bag', 'Ear Protection', 'Earrings', 'Glasses', 'Lipstick', 'Necktie', 'Purse', 'Ring', 'Safety Goggles', 'Scarf', 'Sunglasses', 'Watch', 'Zipper'],
  'Activities': ['Boxing', 'Building a Sandcastle', 'Camping', 'Cooking', 'Dancing', 'Gardening', 'Hugging', 'Ice Skating', 'Jewelry Making', 'Jumping', 'Kayaking', 'Making Pottery', 'Mountain Biking', 'Paddleboarding', 'Paragliding', 'Playing An Instrument', 'Playing Baseball', 'Playing Basketball', 'Playing Soccer', 'Playing With Jigsaw Puzzles', 'Reading', 'Resting', 'Rock Climbing', 'Running', 'Sailing', 'Skateboarding', 'Skiing', 'Snowboarding', 'Surfing', 'Swinging'],
  'Animals and Insects': ['Alligator', 'Ant', 'Armadillo', 'Badger', 'Bear', 'Beaver', 'Beetle', 'Bird', 'Bobcat', 'Buffalo', 'Bumblebee', 'Butterfly', 'Camel', 'Cat', 'Caterpillar', 'Chameleon', 'Cheetah', 'Chimpanzee', 'Chipmunk', 'Cow', 'Crab', 'Deer', 'Dinosaur', 'Dog', 'Dolphin', 'Donkey', 'Dragonfly', 'Elephant', 'Ferret', 'Fish', 'Fox', 'Frog', 'Gecko', 'Giraffe', 'Goat', 'Goldfish', 'Gorilla', 'Grasshopper', 'Guinea Pig', 'Hamster', 'Hedgehog', 'Hippopotamus', 'Hornet', 'Horse', 'Hyena', 'Iguana', 'Jellyfish', 'Kangaroo', 'Koi Fish', 'Ladybug', 'Lemur', 'Leopard', 'Lion', 'Lizard', 'Lobster', 'Manta Ray', 'Mantis', 'Monkey', 'Moose', 'Mosquito', 'Mouse', 'Octopus', 'Opossum', 'Orangutan', 'Otter', 'Panda', 'Pig', 'Polar Bear', 'Porcupine', 'Rabbit', 'Raccoon', 'Rhinoceros', 'Seahorse', 'Seal', 'Shark', 'Sheep', 'Skunk', 'Sloth', 'Snail', 'Snake', 'Snow Leopard', 'Spider', 'Squirrel', 'Starfish', 'Tarantula', 'Tick', 'Tiger', 'Turtle', 'Whale', 'Wolf', 'Worm', 'Yak'],
  'Appliances': ['Air Conditioner', 'Blender', 'Coffee Maker', 'Deep Fryer', 'Electric Grill', 'Electric Mixer', 'Electric Pressure Cooker', 'Grill', 'Microwave', 'Popcorn Maker', 'Refrigerator', 'Stove', 'Toaster', 'Toaster Oven', 'Waffle Maker', 'Washing Machine'],
  'Body Parts': ['Arm', 'Back', 'Belly', 'Cheek', 'Ear', 'Elbow', 'Eye', 'Finger', 'Foot', 'Hair', 'Hand', 'Head', 'Heel', 'Knee', 'Leg', 'Lips', 'Mouth', 'Neck', 'Nose', 'Shoulder', 'Teeth', 'Toe'],
  'Clothing': ['Board Shorts', 'Cargo Shorts', 'Dress', 'Hat', 'Hooded Sweatshirt', 'Jean Jacket', 'Overalls', 'Pajamas', 'Pants', 'Rain Jacket', 'Romper', 'Shirt', 'Shoe', 'Snowsuit', 'Sock', 'Sweater', 'Tie', 'Tuxedo', 'Vest', 'Winter Jacket'],
  'Colors': ['Blue', 'Brown', 'Green', 'Orange Color', 'Pink', 'Purple', 'Red', 'White', 'Yellow'],
  'Computer Icons': ['Back Icon', 'Camera Icon', 'Home Icon', 'Lock Icon', 'Message Icon', 'Music Icon', 'Mute Icon', 'Next Icon', 'Ok Icon', 'Phone Icon', 'Power Icon', 'Printer Icon', 'Search Icon', 'Skip Icon', 'Trash Icon', 'Unlock Icon', 'Volume Down Icon', 'Volume Up Icon'],
  'Electronics': ['Bluetooth Headphones', 'Camera', 'Drone', 'Laptop', 'Printer'],
  'Emotions': ['Angry', 'Calm', 'Disgust', 'Happy', 'Sad', 'Scared', 'Silly', 'Surprised', 'Tired'],
  'Food': ['Acai Bowl', 'Apple', 'Apple Sauce', 'Artichoke', 'Asparagus', 'Avocado', 'Bacon', 'Bagel', 'Baked Beans', 'Banana', 'Barbecue Ribs', 'Basil', 'Bell Pepper', 'Black Truffle', 'Blueberry', 'Blueberry Muffin', 'Bok Choy', 'Bread Roll', 'Bread Slice', 'Brie Cheese', 'Broccoli', 'Broccoli Soup', 'Brownie', 'Cake', 'Cappuccino', 'Carrot', 'Cashews', 'Cauliflower', 'Celery Stick', 'Cheese', 'Cherry', 'Chicken Nugget', 'Chocolate Cake', 'Chocolate Chip Pancake', 'Chocolate Milk', 'Cilantro', 'Cinnamon Roll', 'Cinnamon Stick', 'Coconut', 'Cookie', 'Corn', 'Cornbread', 'Cotton Candy', 'Cracker', 'Cucumber', 'Donut', 'Eggplant', 'Eggs', 'Energy Bar', 'Fish Stick', 'Fried Egg', 'Fried Rice', 'Fruit Salad', 'Garlic Bread', 'Ginger Root', 'Gingerbread Cookie', 'Grapefruit', 'Grapes', 'Green Beans', 'Grilled Cheese Sandwich', 'Guacamole', 'Ham', 'Hamburger', 'Hot Cocoa', 'Hotdog', 'Ice Cream', 'Ice Cream Sandwich', 'Jello', 'Kiwi', 'Lemon', 'Lettuce', 'Lime', 'Macaroni And Cheese', 'Mango', 'Meatballs', 'Mixed Nuts', 'Muffin', 'Onion', 'Orange', 'Orange Juice', 'Pancakes', 'Papaya', 'Peach', 'Peanut', 'Pear', 'Persimmon', 'Pineapple', 'Pizza', 'Plum', 'Popcorn', 'Pork Chop', 'Potato', 'Pumpkin', 'Raspberry', 'Rhubarb', 'Rice', 'Salad', 'Salami', 'Sandwich', 'Sausage', 'Serrano Pepper', 'Spinach', 'Sprout', 'Steak', 'Strawberry', 'Sweet Potato', 'Taco', 'Toast', 'Tomato', 'Waffle', 'Watermelon', 'Zucchini'],
  'Furniture': ['Barrel', 'Bean Bag Chair', 'Bed', 'Bookcase', 'Cabinet', 'Chair', 'Changing Table', 'Couch', 'Crib', 'Desk', 'Dresser', 'Filing Cabinet', 'Fireplace', 'Hallway Bench', 'High Chair', 'Sectional Sofa', 'Stool', 'Table', 'Tv Stand', 'Wardrobe'],
  'Household Items': ['Air Filter', 'Alarm Clock', 'Aluminum Foil', 'Baby Bottle', 'Bandaid', 'Bath Tub', 'Beach Umbrella', 'Bin', 'Binoculars', 'Bird Cage', 'Blush', 'Broom', 'Camp Chair', 'Can', 'Candle', 'Car Seat', 'Carabiner', 'Card', 'Chess Board', 'Cleaning Supplies', 'Clock', 'Crate', 'Dice', 'Dog Collar', 'Drill', 'Electric Shaver', 'Electric Toothbrush', 'Electrical Panel', 'Elliptical', 'Envelope', 'Faucet', 'Fish Tank', 'Flashlight', 'Flowerpot', 'Fork', 'Gift Box', 'Glass', 'Grater', 'Hairbrush', 'Hammock', 'Hamster Cage', 'Hose', 'Iron', 'Kettle', 'Kitchen Counter', 'Knife', 'Ladder', 'Lamp', 'Laundry Basket', 'Light Bulb', 'Magazine Rack', 'Measuring Cup', 'Mop', 'Patchwork Quilt', 'Pet Food', 'Phone', 'Picket Fence', 'Piggy Bank', 'Pillow', 'Plate', 'Radiator', 'Salad Spinner', 'Scissors', 'Screw', 'Sewing Machine', 'Shower', 'Sink', 'Skillet', 'Smart Tv Remote', 'Snow Globe', 'Soap', 'Sponge', 'Spoon', 'Stairmaster', 'Stroller', 'Table Tennis Table', 'Tape Measure', 'Teacup', 'Teapot', 'Tent', 'Thermometer', 'Thermos', 'Toilet', 'Toilet Paper', 'Toolbox', 'Towel', 'Treadmill', 'Umbrella', 'Water Filter Pitcher', 'Whisk', 'Whiteboard'],
  'Instruments': ['Accordion', 'Acoustic Guitar', 'Banjo', 'Bass Guitar', 'Bassoon', 'Bongo Drums', 'Cello', 'Clarinet', 'Cymbal', 'Drum Kit', 'Electric Guitar', 'Electric Keyboard', 'Maracas', 'Organ', 'Piano', 'Trumpet', 'Tuba', 'Ukulele', 'Violin'],
  'Letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  'Nature and Environment': ['Avalanche', 'Bamboo Forest', 'Bark', 'Bird Seed', 'Bonfire', 'Bubble', 'Bush', 'Cactus', 'Canyon', 'Cattail', 'Cave', 'Cliff', 'Cloud', 'Conch', 'Dandelion', 'Desert', 'Driftwood', 'Earth', 'Fern', 'Flower', 'Forest', 'Glacier', 'Grass', 'Jungle', 'Lava', 'Lightning', 'Limestone', 'Mossy Log', 'Mountain', 'Mushroom', 'Ocean', 'Palm Frond', 'Pine Needle', 'Pinecone', 'Potting Soil', 'Prairie', 'Rainbow', 'River', 'Rock', 'Sun', 'Thunder', 'Topsoil', 'Tornado', 'Tree', 'Valley', 'Volcano', 'Waterfall'],
  'Numbers': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'],
  'Places': ['Aquarium', 'Art Studio', 'Barn', 'Beach', 'Concert Hall', 'Fire Station', 'Gazebo', 'Greenhouse', 'Hospital', 'Laundry Room', 'Library', 'Playground', 'Pool Area', 'Recreational Room', 'Swing Set'],
  'Professions': ['Architect', 'Ballet Instructor', 'Barber', 'Beekeeper', 'Bookbinder', 'Carpenter', 'Cashier', 'Ceramic Artist', 'Construction Worker', 'Counselor', 'Doctor', 'Electrician', 'Florist', 'Garbage Collector', 'Judge', 'Mail Carrier', 'Optometrist', 'Painter', 'Paramedic', 'Park Ranger', 'Photographer', 'Pilot', 'Police Officer', 'Quilter', 'Roofer', 'School Bus Driver', 'Scientist', 'Teacher', 'Veterinarian', 'Waiter', 'Window Washer'],
  'Rooms And Spaces': ['Attic', 'Backyard', 'Bathroom', 'Bedroom', 'Closet', 'Deck', 'Dining Room', 'Entryway', 'Front Door', 'Front Porch', 'Front Yard', 'Garage', 'Hallway', 'Kitchen', 'Living Room', 'Pantry', 'Roof', 'Shed'],
  'Safety Equipments': ['Fire Extinguisher', 'First Aid Kit', 'Inflatable Raft', 'Life Jacket', 'Lifebuoy'],
  'Safety Signs': ['Bus Sign', 'Caution Electricity Sign', 'Crosswalk Sign', 'Danger Sign', 'Exit Sign', 'Fire Extinguisher Sign', 'First Aid Sign', 'Flammable Material Sign', 'Handicap Sign', 'No Bicycling Sign', 'No Food And Drink Sign', 'No Running Sign', 'No Skateboarding Sign', 'Recycling Sign', 'Restroom Sign', 'Slippery Floor Sign', 'Stop Sign', 'Yield Sign'],
  'School Supplies': ['Book', 'Calculator', 'Chalk', 'Colored Pencils', 'Construction Paper', 'Craft Sticks', 'Crayons', 'Eraser', 'Globe', 'Hand Sanitizer', 'Locker', 'Lunchbox', 'Magnifying Glass', 'Markers', 'Mask', 'Paper', 'Pencil', 'Post Its', 'Ruler', 'Tissues', 'Water Colors'],
  'Science and Education': ['Astronaut Suits', 'Atom', 'Beaker', 'Brain', 'Castle', 'Dinosaur Skeleton', 'Knight', 'Microscope', 'Skeleton', 'Space Rockets', 'Stethoscope', 'Telescope', 'Treasure', 'World Map'],
  'Shapes': ['Arrow', 'Cone', 'Crescent', 'Cube', 'Heart', 'Oval', 'Rectangle', 'Square', 'Star', 'Triangle'],
  'Sporting': ['Ball', 'Barbell', 'Baseball Glove', 'Boxing Glove', 'Canoe', 'Climbing Harness', 'Climbing Rope', 'Climbing Shoe', 'Dumbbell', 'Football Helmet', 'Frisbee', 'Helmet', 'Ice Skate', 'Kayak', 'Paddleboard', 'Roller Blades', 'Skateboard', 'Ski Goggles', 'Skis', 'Surfboard', 'Swimming Goggles'],
  'Symbols And Punctuation': ['And Symbol', 'Apostrophe', 'At Sign', 'Back Slash', 'Bullet Point', 'Colon', 'Comma', 'Curly Brackets', 'Dollar Sign', 'Equals Sign', 'Exclamation Point', 'Forward Slash', 'Greater Than', 'Hyphen', 'Less Than', 'Number Sign', 'Parenthesis', 'Percent Sign', 'Period', 'Plus Sign', 'Question Mark', 'Quotation Marks', 'Semicolon', 'Square Brackets'],
  'Toys': ['Action Figure', 'Balloon', 'Block', 'Doll', 'Dollhouse', 'Puzzle', 'Robot', 'Rocket', 'Teddy Bear', 'Toy Cash Register', 'Toy Tractor', 'Train', 'Xylophone'],
  'Vehicles': ['Airplane', 'Ambulance', 'Bicycle', 'Boat', 'Bulldozer', 'Bus', 'Car', 'Commuter Train', 'Dirt Bike', 'Dump Truck', 'Electric Scooter', 'Fire Truck', 'Fork Lift', 'Garbage Truck', 'Golf Cart', 'Gondola', 'Helicopter', 'Hot Air Balloon', 'Ice Cream Truck', 'Lawn Mower', 'Motorcycle', 'Pickup Truck', 'Police Car', 'Scooter', 'Submarine', 'Taxi', 'Tricycle', 'Unicycle', 'Van', 'Wheelchair']
}

export default function CreatePage() {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    lessonType: 'Matching',
    duration: 1800,
    questions: 10,
    lessons: 3,
    reward: 5,
    difficulty: 2,
    fieldSize: 6,
    identicalMatching: 1,
    borderPromptMode: 2,
    advanceAfterFirstAttempt: 0,
    chime: 1,
    wrongDelaySec: 3,
    correctDelaySec: 2,
    reduceFieldAfterIncorrect: 1,
    speakerSpeed: 1.0,
    hintEnabled: 1,
    hintDelaySec: 5,
    hideOptionsUntilAudioEnds: 0,
    goals: ''
  })
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [generatedString, setGeneratedString] = useState('')
  const [error, setError] = useState<string | null>(null)

  const validateForm = () => {
    if (!formData.title || formData.title.length > 50) {
      setError('Title must be between 1 and 50 characters')
      return false
    }
    if (formData.duration < 1200 || formData.duration > 21600) {
      setError('Duration must be between 1200 and 21600 seconds')
      return false
    }
    if (formData.questions < 1 || formData.questions > 20) {
      setError('Questions must be between 1 and 20')
      return false
    }
    if (formData.lessons < 1 || formData.lessons > 10) {
      setError('Lessons must be between 1 and 10')
      return false
    }
    if (formData.reward < 1 || formData.reward > 50) {
      setError('Reward must be between 1 and 50 minutes')
      return false
    }
    if (formData.fieldSize < 1 || formData.fieldSize > 9) {
      setError('Field size must be between 1 and 9')
      return false
    }
    if (selectedGoals.length === 0) {
      setError('Please select at least one goal')
      return false
    }
    return true
  }

  const generateString = () => {
    if (!validateForm()) return

    const values = [
      formData.title,
      formData.lessonType,
      formData.duration,
      formData.questions,
      formData.lessons,
      formData.reward,
      formData.difficulty,
      formData.fieldSize,
      formData.identicalMatching,
      formData.borderPromptMode,
      formData.advanceAfterFirstAttempt,
      formData.chime,
      formData.wrongDelaySec,
      formData.correctDelaySec,
      formData.reduceFieldAfterIncorrect,
      formData.speakerSpeed.toFixed(2),
      formData.hintEnabled,
      formData.hintDelaySec,
      formData.hideOptionsUntilAudioEnds,
      selectedGoals.join('/')
    ]

    setGeneratedString(values.join(','))
    setError(null)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedString)
  }

  const handleGoalSelect = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal))
    } else {
      setSelectedGoals([...selectedGoals, goal])
    }
  }

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-[#035183] mb-6">Create Lesson Program</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                  placeholder="Enter lesson title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Lesson Type
                </label>
                <select
                  value={formData.lessonType}
                  onChange={(e) => setFormData({ ...formData, lessonType: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  {LESSON_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Duration (seconds)
                </label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  min={1200}
                  max={21600}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Questions per Lesson
                </label>
                <input
                  type="number"
                  value={formData.questions}
                  onChange={(e) => setFormData({ ...formData, questions: parseInt(e.target.value) })}
                  min={1}
                  max={20}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Number of Lessons
                </label>
                <input
                  type="number"
                  value={formData.lessons}
                  onChange={(e) => setFormData({ ...formData, lessons: parseInt(e.target.value) })}
                  min={1}
                  max={10}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Reward (minutes)
                </label>
                <input
                  type="number"
                  value={formData.reward}
                  onChange={(e) => setFormData({ ...formData, reward: parseInt(e.target.value) })}
                  min={1}
                  max={50}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Difficulty
                </label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>Easy</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Field Size
                </label>
                <input
                  type="number"
                  value={formData.fieldSize}
                  onChange={(e) => setFormData({ ...formData, fieldSize: parseInt(e.target.value) })}
                  min={1}
                  max={9}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Identical Matching
                </label>
                <select
                  value={formData.identicalMatching}
                  onChange={(e) => setFormData({ ...formData, identicalMatching: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>On</option>
                  <option value={0}>Off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Border Prompt Mode
                </label>
                <select
                  value={formData.borderPromptMode}
                  onChange={(e) => setFormData({ ...formData, borderPromptMode: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  {BORDER_PROMPT_MODES.map((mode, index) => (
                    <option key={mode} value={index + 1}>{mode}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Advance After First Incorrect
                </label>
                <select
                  value={formData.advanceAfterFirstAttempt}
                  onChange={(e) => setFormData({ ...formData, advanceAfterFirstAttempt: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>On</option>
                  <option value={0}>Off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Success Chime
                </label>
                <select
                  value={formData.chime}
                  onChange={(e) => setFormData({ ...formData, chime: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>On</option>
                  <option value={0}>Off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Wrong Answer Delay (seconds)
                </label>
                <input
                  type="number"
                  value={formData.wrongDelaySec}
                  onChange={(e) => setFormData({ ...formData, wrongDelaySec: parseInt(e.target.value) })}
                  min={1}
                  max={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Correct Answer Delay (seconds)
                </label>
                <input
                  type="number"
                  value={formData.correctDelaySec}
                  onChange={(e) => setFormData({ ...formData, correctDelaySec: parseInt(e.target.value) })}
                  min={1}
                  max={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Reduce Field After Incorrect
                </label>
                <select
                  value={formData.reduceFieldAfterIncorrect}
                  onChange={(e) => setFormData({ ...formData, reduceFieldAfterIncorrect: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>On</option>
                  <option value={0}>Off</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Speaker Speed
                </label>
                <select
                  value={formData.speakerSpeed}
                  onChange={(e) => setFormData({ ...formData, speakerSpeed: parseFloat(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  {SPEAKER_SPEEDS.map(speed => (
                    <option key={speed} value={speed}>{speed}x</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Hint Enabled
                </label>
                <select
                  value={formData.hintEnabled}
                  onChange={(e) => setFormData({ ...formData, hintEnabled: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Hint Delay (seconds)
                </label>
                <input
                  type="number"
                  value={formData.hintDelaySec}
                  onChange={(e) => setFormData({ ...formData, hintDelaySec: parseInt(e.target.value) })}
                  min={1}
                  max={10}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#035183]">
                  Hide Options Until Audio Ends
                </label>
                <select
                  value={formData.hideOptionsUntilAudioEnds}
                  onChange={(e) => setFormData({ ...formData, hideOptionsUntilAudioEnds: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                >
                  <option value={1}>On</option>
                  <option value={0}>Off</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-[#035183] mb-4">Goal Selection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#035183] mb-2">
                    Select Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6FCEF4] focus:ring-[#6FCEF4] sm:text-sm"
                  >
                    <option value="">Select a category</option>
                    {Object.keys(GOAL_CATEGORIES).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {selectedCategory && (
                  <div>
                    <label className="block text-sm font-medium text-[#035183] mb-2">
                      Select Goals
                    </label>
                    <div className="max-h-60 overflow-y-auto border border-gray-300 rounded-md p-2">
                      {GOAL_CATEGORIES[selectedCategory as keyof typeof GOAL_CATEGORIES].map(goal => (
                        <div key={goal} className="flex items-center space-x-2 py-1">
                          <input
                            type="checkbox"
                            id={goal}
                            checked={selectedGoals.includes(goal)}
                            onChange={() => handleGoalSelect(goal)}
                            className="h-4 w-4 text-[#035183] focus:ring-[#6FCEF4] border-gray-300 rounded"
                          />
                          <label htmlFor={goal} className="text-sm text-gray-700">
                            {goal}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={generateString}
                className="rounded-md bg-[#035183] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183] transition-all duration-300 hover:scale-105"
              >
                Generate String
              </button>
            </div>
          </form>

          {generatedString && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-[#035183]">Generated String</h3>
                <button
                  onClick={copyToClipboard}
                  className="text-sm text-[#035183] hover:text-[#6FCEF4] transition-colors"
                >
                  Copy to Clipboard
                </button>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm break-all">
                {generatedString}
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
} 