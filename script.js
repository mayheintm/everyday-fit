import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getDatabase, ref, set, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
 
// --- Firebase Configuration ---

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "everyday-fit-7ff63.firebaseapp.com",

  databaseURL: "https://everyday-fit-7ff63-default-rtdb.firebaseio.com",

  projectId: "everyday-fit-7ff63",

  storageBucket: "everyday-fit-7ff63.appspot.com",

  messagingSenderId: "...",

  appId: "..."

};
 
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
 
// --- Translations Dictionary ---

const translations = {

  en: {

    themeText: "Dark Mode",

    bodyMetrics: "⚙️ Body Metrics & Goal Settings",

    lblGender: "Gender",

    lblWeight: "Weight (kg)",

    lblHeight: "Height (cm)",

    lblAge: "Age (years)",

    lblActivity: "Activity Level",

    lblGoal: "Weight Goal",

    btnCalculate: "Calculate & Generate Plan",

    lblBmi: "Your BMI",

    lblTargetCal: "Daily Target Calories",

    lblIdealWeight: "Ideal Weight Range",

    lblIdealSub: "Based on height",

    tabToday: "Today's Recommended Meals",

    tabWeek: "📅 7-Day Plan",

    tabMonth: "📅 30-Day Full Monthly Plan",

    lblBreakfastTitle: "Breakfast",

    lblLunchTitle: "Lunch",

    lblDinnerTitle: "Dinner",

    lblRecipeHeader: "🍳 Full Recipe & Instructions:",

    btnSwapBf: "🔄 Swap Breakfast",

    btnSwapLu: "🔄 Swap Lunch",

    btnSwapDn: "🔄 Swap Dinner",

    btnViewRecipe: "View Recipe",

    txtWeekDesc: "Detailed 7-Day Structured Meal Schedule with Full Ingredients & Calories:",

    txtMonthDesc: "Full 30-Day Detailed Monthly Nutritional Plan (Click any day to view full recipes):",

    txtWaterTracker: "💧 Daily Water Intake Tracker",

    btnResetWater: "Reset Water",

    txtWaterDesc: "Target: 2.5 Liters (11 glasses). Click glasses as you drink!",

    txtGlassesTotal: "10 glasses consumed",

    txtSleepTracker: "😴 Sleep Tracker",

    txtSleepTargetBadge: "Target: 7-8 Hours",

    lblSleepInput: "Last Night Sleep (Hours):",

    btnSaveSleep: "Save Sleep",

    txtWorkout: "🏋️ Today's Workout Routine",

    btnResetWorkout: "Reset Workout",

    btnSwapWorkout: "🔄 Change Exercises",

    lblWorkoutProgress: "Workout Progress",

    txtHistory: "📊 Calculation & Health History",

    btnClearHistory: "Clear History",

    thDateTime: "Date & Time",

    thType: "Type / Metric",

    thDetails: "Details / Value",

    thBmi: "BMI / Target",

    thCalories: "Calories / Status",

    thGoal: "Goal / Summary",

    modalTitle: "Day Meal Details",

    btnClose: "Close"

  },

  my: {

    themeText: "အမှောင်စနစ်",

    bodyMetrics: "⚙️ ကိုယ်အလေးချိန်နှင့် ပန်းတိုင်သတ်မှတ်ချက်များ",

    lblGender: "ကျား/မ",

    lblWeight: "ကိုယ်အလေးချိန် (ကေဂျီ)",

    lblHeight: "အရပ်အမြင့် (စင်တီမီတာ)",

    lblAge: "အသက် (နှစ်)",

    lblActivity: "လှုပ်ရှားမှုနှုန်း",

    lblGoal: "ကိုယ်အလေးချိန်ပန်းတိုင်",

    btnCalculate: "တွက်ချက်ပြီး အစီအစဉ်ထုတ်မည်",

    lblBmi: "သင့်ရဲ့ BMI",

    lblTargetCal: "နေ့စဥ်စားသုံးရန် ကယ်လိုရီပမာဏ",

    lblIdealWeight: "သင့်လျော်သော ကိုယ်အလေးချိန်အတိုင်းအတာ",

    lblIdealSub: "အရပ်အမြင့်ပေါ်မူတည်သည်",

    tabToday: "ယနေ့အတွက် အကြံပြုအစားအစာများ",

    tabWeek: "📅 ၇ ရက်စာ အစီအစဉ်",

    tabMonth: "📅 ရက်ပေါင်း ၃၀ စာ အစီအစဉ်အပြည့်အစုံ",

    lblBreakfastTitle: "နံနက်စာ",

    lblLunchTitle: "နေ့လယ်စာ",

    lblDinnerTitle: "ညစာ",

    lblRecipeHeader: "🍳 ပြုလုပ်နည်း အပြည့်အစုံ:",

    btnSwapBf: "🔄 နံနက်စာ လဲလှယ်မည်",

    btnSwapLu: "🔄 နေ့လယ်စာ လဲလှယ်မည်",

    btnSwapDn: "🔄 ညစာ လဲလှယ်မည်",

    btnViewRecipe: "ချက်ပြုတ်နည်း ကြည့်ရန်",

    txtWeekDesc: "၇ ရက်စာ စားသောက်မည့် အစီအစဉ် အသေးစိတ်နှင့် ကယ်လိုရီပမာဏများ:",

    txtMonthDesc: "ရက်ပေါင်း ၃၀ စာ အာဟာရအစီအစဉ် (ချက်ပြုတ်နည်းကြည့်ရန် ရက်ကိုနှိပ်ပါ):",

    txtWaterTracker: "💧 နေ့စဥ် ရေသောက်သုံးမှု မှတ်တမ်း",

    btnResetWater: "ရေမှတ်တမ်း ဖျက်မည်",

    txtWaterDesc: "ပန်းတိုင်: ၂.၅ လီတာ (ဖန်ခွက် ၁ ခွက်)။ သောက်ပြီးတိုင်း ခွက်များကို နှိပ်ပါ!",

    txtGlassesTotal: "ဖန်ခွက် သောက်ပြီးစီးသည်",

    txtSleepTracker: "😴 အိပ်စက်ချိန် မှတ်တမ်း",

    txtSleepTargetBadge: "ပန်းတိုင်: ၇-၈ နာရီ",

    lblSleepInput: "မနေ့ညက အိပ်ခဲ့သည့်အချိန် (နာရီ):",

    btnSaveSleep: "အိပ်စက်ချိန် သိမ်းမည်",

    txtWorkout: "🏋️ ယနေ့ လေ့ကျင့်ခန်း အစီအစဉ်",

    btnResetWorkout: "လေ့ကျင့်ခန်း ဖျက်မည်",

    btnSwapWorkout: "🔄 လေ့ကျင့်ခန်းများ ပြောင်းမည်",

    lblWorkoutProgress: "လေ့ကျင့်ခန်း ပြီးစီးမှု",

    txtHistory: "📊 တွက်ချက်မှုနှင့် ကျန်းမာရေး မှတ်တမ်းဟောင်း",

    btnClearHistory: "မှတ်တမ်းဖျက်မည်",

    thDateTime: "ရက်စွဲနှင့် အချိန်",

    thType: "အမျိုးအစား",

    thDetails: "အသေးစိတ်/တန်ဖိုး",

    thBmi: "BMI / ပန်းတိုင်",

    thCalories: "ကယ်လိုရီ / အခြေအနေ",

    thGoal: "ပန်းတိုင် / အနှစ်ချုပ်",

    modalTitle: "နေ့အလိုက် အစားအစာ အသေးစိတ်",

    btnClose: "ပိတ်မည်"

  },

  ja: {

    themeText: "ダークモード",

    bodyMetrics: "⚙️ 身体測定と目標設定",

    lblGender: "性別",

    lblWeight: "体重 (kg)",

    lblHeight: "身長 (cm)",

    lblAge: "年齢 (歳)",

    lblActivity: "活動レベル",

    lblGoal: "体重目標",

    btnCalculate: "計算してプランを作成",

    lblBmi: "あなたのBMI",

    lblTargetCal: "1日の目標カロリー",

    lblIdealWeight: "理想体重範囲",

    lblIdealSub: "身長に基づく",

    tabToday: "本日の推奨メニュー",

    tabWeek: "📅 7日間プラン",

    tabMonth: "📅 30日間月間プラン",

    lblBreakfastTitle: "朝食",

    lblLunchTitle: "昼食",

    lblDinnerTitle: "夕食",

    lblRecipeHeader: "🍳 レシピと作り方:",

    btnSwapBf: "🔄 朝食を変更",

    btnSwapLu: "🔄 昼食を変更",

    btnSwapDn: "🔄 夕食を変更",

    btnViewRecipe: "レシピを見る",

    txtWeekDesc: "詳細な7日間の献立スケジュール（材料とカロリー付き）:",

    txtMonthDesc: "30日間の詳細な栄養プラン（日付をクリックしてレシピを表示）:",

    txtWaterTracker: "💧 水分補給トラッカー",

    btnResetWater: "水分をリセット",

    txtWaterDesc: "目標: 2.5リットル（コップ10杯）。飲んだらグラスをクリック！",

    txtGlassesTotal: "杯 摂取完了",

    txtSleepTracker: "😴 睡眠トラッカー",

    txtSleepTargetBadge: "目標: 7〜8時間",

    lblSleepInput: "昨夜の睡眠時間 (時間):",

    btnSaveSleep: "睡眠を保存",

    txtWorkout: "🏋️ 本日のワークアウト",

    btnResetWorkout: "ワークアウトをリセット",

    btnSwapWorkout: "🔄 エクササイズを変更",

    lblWorkoutProgress: "ワークアウトの進捗",

    txtHistory: "📊 計算・健康履歴",

    btnClearHistory: "履歴をクリア",

    thDateTime: "日時",

    thType: "種類 / 測定値",

    thDetails: "詳細",

    thBmi: "BMI / 目標",

    thCalories: "カロリー / ステータス",

    thGoal: "目標 / 概要",

    modalTitle: "一日の食事詳細",

    btnClose: "閉じる"

  }

};
 
// --- Meal Datasets ---

const breakfastOptions = [

  { name: "Avocado Toast with Eggs & Honey Yogurt", cal: 450, ing: "Whole grain bread, Avocado, 2 Boiled eggs, Greek yogurt, Honey", step1: "Toast 2 slices of whole grain bread and mash 1/2 ripe avocado on top.", step2: "Top with 2 soft-boiled eggs, salt, and pepper.", step3: "Serve alongside 150g Greek yogurt drizzled with honey." },

  { name: "Oatmeal Banana Bowl with Almond Butter", cal: 420, ing: "Rolled oats, Almond milk, 1 Banana, 1 tbsp Almond butter, Chia seeds", step1: "Cook rolled oats in almond milk over medium heat.", step2: "Top with sliced banana and a tablespoon of almond butter.", step3: "Sprinkle chia seeds and enjoy warm." },

  { name: "Japanese Tamagoyaki & Salmon Breakfast Set", cal: 460, ing: "Grilled Salmon, Rolled Omelet (Tamagoyaki), Steamed Rice, Miso Soup", step1: "Grill a small fillet of salted salmon until crisp.", step2: "Prepare 2-egg Japanese rolled omelet (tamagoyaki).", step3: "Serve with a bowl of rice and warm miso soup." }

];
 
const lunchOptions = [

  { name: "Chicken Teriyaki Rice Bowl with Broccoli", cal: 680, ing: "Grilled Chicken thigh, Japanese White Rice, Broccoli, Teriyaki sauce", step1: "Pan-sear 180g chicken thigh until golden and glaze with teriyaki sauce.", step2: "Serve over a bowl of steamed white rice (200g).", step3: "Add steamed broccoli and sprinkle sesame seeds on top." },

  { name: "Quinoa Salmon Salad with Avocado & Lemon Dressing", cal: 620, ing: "Cooked Quinoa, Grilled Salmon fillet, Mixed greens, Avocado, Olive oil", step1: "Toss cooked quinoa with fresh mixed greens and cubed avocado.", step2: "Top with flaked grilled salmon.", step3: "Drizzle with extra virgin olive oil and fresh lemon juice." },

  { name: "Beef Bulgogi with Rice and Kimchi", cal: 710, ing: "Marinated Beef slices, Steamed rice, Kimchi, Sesame oil, Spinach", step1: "Stir-fry marinated beef slices with onions and sesame oil.", step2: "Serve hot over steamed rice alongside traditional kimchi.", step3: "Add seasoned spinach namul on the side." }

];
 
const dinnerOptions = [

  { name: "Beef Steak with Baked Potato & Asparagus", cal: 650, ing: "Sirloin steak (180g), Baked Potato, Butter, Roasted Asparagus", step1: "Pan-fry sirloin steak with garlic and butter for 3-4 mins each side.", step2: "Bake 1 medium potato with a dollop of fresh butter.", step3: "Roast asparagus with olive oil and serve warm." },

  { name: "Baked Lemon Herb Fish with Sweet Potato", cal: 580, ing: "White fish fillet, Lemon, Herbs, Baked Sweet Potato, Green beans", step1: "Season fish fillet with lemon, garlic, herbs, and olive oil.", step2: "Bake at 200°C for 15 minutes until tender.", step3: "Serve with a roasted sweet potato and steamed green beans." },

  { name: "Tofu Vegetable Stir-fry with Brown Rice", cal: 530, ing: "Firm Tofu, Bell peppers, Zucchini, Mushrooms, Brown rice, Soy sauce", step1: "Pan-fry cubed firm tofu until golden brown.", step2: "Stir-fry mixed vegetables with garlic and low-sodium soy sauce.", step3: "Serve over a warm bowl of nutrient-rich brown rice." }

];
 
let currentBfIndex = 0;

let currentLuIndex = 0;

let currentDnIndex = 0;
 
// --- State Variables ---

let waterCount = 0;

let workoutCompletedCount = 0;
 
// --- Helper Functions ---

function getElement(id) {

  return document.getElementById(id);

}

// --- Load History from Firebase Realtime Database in Realtime ---

function initHistoryListener() {

  const historyRef = ref(db, 'everydayFit/history');

  onValue(historyRef, (snapshot) => {

    const historyTable = getElement('historyTable');

    historyTable.innerHTML = ""; // ဇယားကို အရင်ရှင်းမည်

    const data = snapshot.val();

    if (data) {

      // Firebase မှ ဒေတာများကို ရယူပြီး အသစ်ဆုံးကို ထိပ်ဆုံးတင်ရန် မျိုးစုမည် (entries များကို reverse လုပ်ခြင်း)

      const entries = Object.entries(data).reverse();

      entries.forEach(([key, item]) => {

        const newRow = document.createElement('tr');

        if (item.type === "Sleep Tracker") {

          newRow.innerHTML = `
<td class="p-3.5">${item.dateTime}</td>
<td class="p-3.5 font-semibold text-gray-800 dark:text-white">Sleep Tracker</td>
<td class="p-3.5">Duration: ${item.duration} Hours</td>
<td class="p-3.5">Target: 7-8h</td>
<td class="p-3.5 text-blue-600 dark:text-blue-400 font-bold">${item.duration >= 7 && item.duration <= 9 ? 'Good' : 'Check'}</td>
<td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">${item.status}</td>
          `;

        } else {

          newRow.innerHTML = `
<td class="p-3.5">${item.dateTime}</td>
<td class="p-3.5 font-semibold text-gray-800 dark:text-white">Body Metrics</td>
<td class="p-3.5">Weight: ${item.weight}kg, Height: ${item.height}cm</td>
<td class="p-3.5">BMI: ${item.bmi}</td>
<td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">${item.calories} kcal</td>
<td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">${item.goal}</td>
          `;

        }

        historyTable.appendChild(newRow);

      });

    }

  });

}
 
// --- Calculations & Firebase Sync ---

function calculateMetrics() {

  const weight = parseFloat(getElement('weight').value) || 60;

  const height = parseFloat(getElement('height').value) || 160;

  const age = parseInt(getElement('age').value) || 27;

  const gender = getElement('gender').value;

  const activity = getElement('activity').value;

  const goal = getElement('goal').value;
 
  const heightM = height / 100;

  const bmi = (weight / (heightM * heightM)).toFixed(1);

  getElement('bmiDisplay').textContent = bmi;
 
  let bmiStatus = "Normal Weight";

  if (bmi < 18.5) bmiStatus = "Underweight";

  else if (bmi >= 25) bmiStatus = "Overweight";

  getElement('lblBmiStatus').textContent = bmiStatus;
 
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);

  if (gender === "Female") bmr -= 161;

  else bmr += 5;
 
  let multiplier = 1.2;

  if (activity === "Lightly Active") multiplier = 1.375;

  else if (activity === "Moderately Active") multiplier = 1.55;

  else if (activity === "Very Active") multiplier = 1.725;
 
  let tdee = bmr * multiplier;

  if (goal === "Gain Weight") tdee += 350;

  else if (goal === "Lose Weight") tdee -= 400;
 
  const targetCal = Math.round(tdee);

  getElement('calorieDisplay').textContent = targetCal;

  getElement('calorieGoalSub').textContent = `kcal / day (${goal})`;
 
  const now = new Date();

  const dateStr = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
 
  // Save to Firebase Realtime Database (onValue listener will update UI automatically)

  const historyRef = ref(db, 'everydayFit/history');

  const newHistoryRef = push(historyRef);

  set(newHistoryRef, {

    dateTime: dateStr,

    type: "Body Metrics",

    weight: weight,

    height: height,

    bmi: bmi,

    calories: targetCal,

    goal: goal

  }).catch((error) => {

    console.error("Firebase save error: ", error);

  });

}
 
// --- Meal Swapping ---

function swapMeal(type) {

  if (type === 'breakfast') {

    currentBfIndex = (currentBfIndex + 1) % breakfastOptions.length;

    const meal = breakfastOptions[currentBfIndex];

    getElement('bfName').textContent = meal.name;

    getElement('bfCal').textContent = `${meal.cal} kcal`;

    getElement('bfIng').textContent = `Ingredients: ${meal.ing}`;

    getElement('bfStep1').innerHTML = `• <strong>Step 1:</strong> ${meal.step1}`;

    getElement('bfStep2').innerHTML = `• <strong>Step 2:</strong> ${meal.step2}`;

    getElement('bfStep3').innerHTML = `• <strong>Step 3:</strong> ${meal.step3}`;

  } else if (type === 'lunch') {

    currentLuIndex = (currentLuIndex + 1) % lunchOptions.length;

    const meal = lunchOptions[currentLuIndex];

    getElement('luName').textContent = meal.name;

    getElement('luCal').textContent = `${meal.cal} kcal`;

    getElement('luIng').textContent = `Ingredients: ${meal.ing}`;

    getElement('luStep1').innerHTML = `• <strong>Step 1:</strong> ${meal.step1}`;

    getElement('luStep2').innerHTML = `• <strong>Step 2:</strong> ${meal.step2}`;

    getElement('luStep3').innerHTML = `• <strong>Step 3:</strong> ${meal.step3}`;

  } else if (type === 'dinner') {

    currentDnIndex = (currentDnIndex + 1) % dinnerOptions.length;

    const meal = dinnerOptions[currentDnIndex];

    getElement('dnName').textContent = meal.name;

    getElement('dnCal').textContent = `${meal.cal} kcal`;

    getElement('dnIng').textContent = `Ingredients: ${meal.ing}`;

    getElement('dnStep1').innerHTML = `• <strong>Step 1:</strong> ${meal.step1}`;

    getElement('dnStep2').innerHTML = `• <strong>Step 2:</strong> ${meal.step2}`;

    getElement('dnStep3').innerHTML = `• <strong>Step 3:</strong> ${meal.step3}`;

  }

}
 
// --- Recipe Toggle ---

function toggleRecipe(id) {

  const recipeEl = getElement(id);

  if (recipeEl) {

    recipeEl.classList.toggle('hidden');

  }

}
 
// --- Tabs Management ---

function switchMealTab(tabName) {

  const tabToday = getElement('tabToday');

  const tabWeek = getElement('tabWeek');

  const tabMonth = getElement('tabMonth');

  const contentToday = getElement('contentToday');

  const contentWeek = getElement('contentWeek');

  const contentMonth = getElement('contentMonth');
 
  [tabToday, tabWeek, tabMonth].forEach(tab => {

    tab.className = "pb-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap cursor-pointer transition";

  });

  [contentToday, contentWeek, contentMonth].forEach(content => {

    content.classList.add('hidden');

  });
 
  if (tabName === 'today') {

    tabToday.className = "pb-2 border-b-2 border-emerald-600 text-emerald-600 whitespace-nowrap cursor-pointer";

    contentToday.classList.remove('hidden');

  } else if (tabName === 'week') {

    tabWeek.className = "pb-2 border-b-2 border-emerald-600 text-emerald-600 whitespace-nowrap cursor-pointer";

    contentWeek.classList.remove('hidden');

    renderWeekPlan();

  } else if (tabName === 'month') {

    tabMonth.className = "pb-2 border-b-2 border-emerald-600 text-emerald-600 whitespace-nowrap cursor-pointer";

    contentMonth.classList.remove('hidden');

    renderMonthPlan();

  }

}
 
// --- Render 7-Day Plan ---

function renderWeekPlan() {

  const container = getElement('weekGridContainer');

  if (container.children.length > 0) return;
 
  const days = ["Day 1 (Monday)", "Day 2 (Tuesday)", "Day 3 (Wednesday)", "Day 4 (Thursday)", "Day 5 (Friday)", "Day 6 (Saturday)", "Day 7 (Sunday)"];

  days.forEach((day, idx) => {

    const bf = breakfastOptions[idx % breakfastOptions.length];

    const lu = lunchOptions[idx % lunchOptions.length];

    const dn = dinnerOptions[idx % dinnerOptions.length];

    const totalCal = bf.cal + lu.cal + dn.cal;
 
    const card = document.createElement('div');

    card.className = "bg-gray-50 dark:bg-gray-700/40 p-4 rounded-xl border border-gray-100 dark:border-gray-600 space-y-2 shadow-sm";

    card.innerHTML = `
<div class="flex justify-between items-center font-bold text-gray-800 dark:text-white">
<span>${day}</span>
<span class="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded">${totalCal} kcal</span>
</div>
<p class="text-gray-500 dark:text-gray-300"><strong>Breakfast:</strong> ${bf.name}</p>
<p class="text-gray-500 dark:text-gray-300"><strong>Lunch:</strong> ${lu.name}</p>
<p class="text-gray-500 dark:text-gray-300"><strong>Dinner:</strong> ${dn.name}</p>
<button onclick="openModal('${day}', '${bf.name}', '${lu.name}', '${dn.name}', ${totalCal})" class="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 rounded-lg text-xs font-medium transition cursor-pointer">View Details</button>
    `;

    container.appendChild(card);

  });

}
 
// --- Render 30-Day Plan ---

function renderMonthPlan() {

  const container = getElement('monthlyGridContainer');

  if (container.children.length > 0) return;
 
  for (let i = 1; i <= 30; i++) {

    const bf = breakfastOptions[i % breakfastOptions.length];

    const lu = lunchOptions[i % lunchOptions.length];

    const dn = dinnerOptions[i % dinnerOptions.length];

    const totalCal = bf.cal + lu.cal + dn.cal;
 
    const card = document.createElement('div');

    card.className = "bg-gray-50 dark:bg-gray-700/40 p-3 rounded-xl border border-gray-100 dark:border-gray-600 flex flex-col justify-between space-y-2 shadow-sm cursor-pointer hover:border-emerald-500 transition";

    card.innerHTML = `
<div>
<div class="flex justify-between items-center font-bold text-gray-800 dark:text-white text-xs">
<span>Day ${i}</span>
<span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">${totalCal} kcal</span>
</div>
<p class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">🍳 ${bf.name}</p>
</div>
<span class="text-[10px] text-center text-emerald-600 dark:text-emerald-400 font-medium underline">Click for recipe</span>
    `;

    card.onclick = () => openModal(`Day ${i} Plan`, bf.name, lu.name, dn.name, totalCal, bf, lu, dn);

    container.appendChild(card);

  }

}
 
// --- Modal Management ---

window.openModal = function(title, bfName, luName, dnName, totalCal, bf = null, lu = null, dn = null) {

  getElement('mealModalTitle').textContent = title;

  const body = getElement('mealModalBody');

  body.innerHTML = `
<div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1">
<p class="font-bold text-emerald-800 dark:text-emerald-300">Total Estimated Calories: ${totalCal} kcal</p>
</div>
<div class="space-y-3 pt-2">
<div class="p-3 bg-gray-50 dark:bg-gray-700/40 rounded-xl border dark:border-gray-600 space-y-1">
<p class="font-bold text-gray-800 dark:text-white">🌅 Breakfast: ${bfName}</p>
<p class="text-gray-500 dark:text-gray-400">Ingredients: ${bf ? bf.ing : 'Standard healthy ingredients'}</p>
</div>
<div class="p-3 bg-gray-50 dark:bg-gray-700/40 rounded-xl border dark:border-gray-600 space-y-1">
<p class="font-bold text-gray-800 dark:text-white">☀️ Lunch: ${luName}</p>
<p class="text-gray-500 dark:text-gray-400">Ingredients: ${lu ? lu.ing : 'Balanced proteins and carbs'}</p>
</div>
<div class="p-3 bg-gray-50 dark:bg-gray-700/40 rounded-xl border dark:border-gray-600 space-y-1">
<p class="font-bold text-gray-800 dark:text-white">🌙 Dinner: ${dnName}</p>
<p class="text-gray-500 dark:text-gray-400">Ingredients: ${dn ? dn.ing : 'Lean proteins and vegetables'}</p>
</div>
</div>
  `;

  getElement('mealModal').classList.remove('hidden');

}
 
function closeMealModal() {

  getElement('mealModal').classList.add('hidden');

}
 
// --- Water Tracker ---

function initWaterTracker() {

  const container = getElement('waterContainer');

  container.innerHTML = "";

  for (let i = 1; i <= 10; i++) {

    const glass = document.createElement('div');

    glass.className = `w-12 h-14 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all font-bold text-xs shadow-sm ${i <= waterCount ? 'bg-blue-500 border-blue-600 text-white shadow-md scale-105' : 'bg-gray-50 dark:bg-gray-700/40 border-gray-200 dark:border-gray-600 text-gray-500 hover:border-blue-400'}`;

    glass.innerHTML = `<span>🥛</span><span class="text-[10px] mt-0.5">${i}</span>`;

    glass.onclick = () => {

      waterCount = i;

      updateWaterDisplay();

    };

    container.appendChild(glass);

  }

  getElement('waterConsumedCount').textContent = waterCount;
 
  if (waterCount >= 10) {

    getElement('waterAlert').textContent = "🎉 Daily target achieved!";

    setTimeout(() => {

      if (waterCount >= 10) {

        waterCount = 0;

        updateWaterDisplay();

      }

    }, 3000);

  } else {

    getElement('waterAlert').textContent = "";

  }

}
 
function updateWaterDisplay() {

  initWaterTracker();

}
 
function resetWater() {

  waterCount = 0;

  updateWaterDisplay();

}
 
// --- Sleep Tracker & History Logging ---

function saveSleep() {

  const hours = parseFloat(getElement('sleepInput').value) || 0;

  const status = getElement('sleepStatus');
 
  let qualityText = "Optimal Rest";

  if (hours >= 7 && hours <= 9) {

    status.textContent = "Great job! You got optimal rest.";

    status.className = "text-xs text-emerald-600 dark:text-emerald-400 font-medium";

    qualityText = "Optimal Rest";

  } else if (hours < 7) {

    status.textContent = "You might need a bit more rest tonight.";

    status.className = "text-xs text-amber-500 font-medium";

    qualityText = "Needs More Rest";

  } else {

    status.textContent = "That's a lot of sleep! Make sure you stay active.";

    status.className = "text-xs text-blue-500 font-medium";

    qualityText = "Extended Sleep";

  }
 
  const now = new Date();

  const dateStr = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
 
  // Save Sleep data to Firebase (onValue listener will update history UI automatically)

  const historyRef = ref(db, 'everydayFit/history');

  const newHistoryRef = push(historyRef);

  set(newHistoryRef, {

    dateTime: dateStr,

    type: "Sleep Tracker",

    duration: hours,

    status: qualityText

  }).catch((error) => {

    console.error("Firebase save error: ", error);

  });

}
 
// --- Workout Routine ---

function updateWorkoutProgress() {

  const chk1 = getElement('chkEx1').checked;

  const chk2 = getElement('chkEx2').checked;

  const chk3 = getElement('chkEx3').checked;
 
  workoutCompletedCount = (chk1 ? 1 : 0) + (chk2 ? 1 : 0) + (chk3 ? 1 : 0);

  getElement('workoutProgressText').textContent = `${workoutCompletedCount} / 3 Completed`;

  getElement('workoutProgressBar').style.width = `${(workoutCompletedCount / 3) * 100}%`;
 
  getElement('exBadge1').classList.toggle('hidden', !chk1);

  getElement('exBadge2').classList.toggle('hidden', !chk2);

  getElement('exBadge3').classList.toggle('hidden', !chk3);
 
  if (workoutCompletedCount === 3) {

    getElement('workoutAlert').textContent = "🎉 Awesome! Today's workout routine is fully completed!";
 
    setTimeout(() => {

      if (workoutCompletedCount === 3) {

        resetWorkout();

      }

    }, 3000);

  } else {

    getElement('workoutAlert').textContent = "";

  }

}
 
function resetWorkout() {

  getElement('chkEx1').checked = false;

  getElement('chkEx2').checked = false;

  getElement('chkEx3').checked = false;

  updateWorkoutProgress();

}
 
function swapWorkout() {

  const workouts = [

    { name: "HIIT Cardio Blast", desc: "15 Mins • ~180 kcal" },

    { name: "Core & Plank Hold", desc: "3 Sets x 1 Min" },

    { name: "Upper Body Dumbbell", desc: "3 Sets x 12 Reps" },

    { name: "Pilates Flow", desc: "20 Mins Relax" },

    { name: "Lower Body Lunges", desc: "3 Sets x 12 Reps" }

  ];

  const r1 = workouts[Math.floor(Math.random() * workouts.length)];

  const r2 = workouts[Math.floor(Math.random() * workouts.length)];

  const r3 = workouts[Math.floor(Math.random() * workouts.length)];
 
  getElement('exName1').textContent = r1.name;

  getElement('exDesc1').textContent = r1.desc;

  getElement('exName2').textContent = r2.name;

  getElement('exDesc2').textContent = r2.desc;

  getElement('exName3').textContent = r3.name;

  getElement('exDesc3').textContent = r3.desc;
 
  resetWorkout();

}
 
// --- Dark Mode ---

function toggleDarkMode() {

  const html = document.documentElement;

  html.classList.toggle('dark');

  const isDark = html.classList.contains('dark');

  getElement('themeIcon').textContent = isDark ? "☀️" : "🌙";

  const lang = getElement('langSelect').value;

  getElement('themeText').textContent = isDark ? (lang === 'my' ? "အလင်းစနစ်" : lang === 'ja' ? "ライトモード" : "Light Mode") : (lang === 'my' ? "အမှောင်စနစ်" : lang === 'ja' ? "ダークモード" : "Dark Mode");

}
 
// --- Language Switcher ---

function changeLanguage() {

  const lang = getElement('langSelect').value;

  const t = translations[lang];

  if (!t) return;
 
  getElement('themeText').textContent = document.documentElement.classList.contains('dark') ? (lang === 'my' ? "အလင်းစနစ်" : lang === 'ja' ? "ライトモード" : "Light Mode") : t.themeText;

  getElement('txtBodyMetrics').textContent = t.bodyMetrics;

  getElement('lblGender').textContent = t.lblGender;

  getElement('lblWeight').textContent = t.lblWeight;

  getElement('lblHeight').textContent = t.lblHeight;

  getElement('lblAge').textContent = t.lblAge;

  getElement('lblActivity').textContent = t.lblActivity;

  getElement('lblGoal').textContent = t.lblGoal;

  getElement('btnCalculate').textContent = t.btnCalculate;

  getElement('lblBmi').textContent = t.lblBmi;

  getElement('lblTargetCal').textContent = t.lblTargetCal;

  getElement('lblIdealWeight').textContent = t.lblIdealWeight;

  getElement('lblIdealSub').textContent = t.lblIdealSub;

  getElement('tabToday').textContent = t.tabToday;

  getElement('tabWeek').textContent = t.tabWeek;

  getElement('tabMonth').textContent = t.tabMonth;

  getElement('lblBreakfastTitle').textContent = t.lblBreakfastTitle;

  getElement('lblLunchTitle').textContent = t.lblLunchTitle;

  getElement('lblDinnerTitle').textContent = t.lblDinnerTitle;

  getElement('lblRecipeHeader').textContent = t.lblRecipeHeader;

  getElement('lblRecipeHeader2').textContent = t.lblRecipeHeader;

  getElement('lblRecipeHeader3').textContent = t.lblRecipeHeader;

  getElement('btnSwapBf').textContent = t.btnSwapBf;

  getElement('btnSwapLu').textContent = t.btnSwapLu;

  getElement('btnSwapDn').textContent = t.btnSwapDn;

  getElement('btnToggleBfRecipe').textContent = t.btnViewRecipe;

  getElement('btnToggleLuRecipe').textContent = t.btnViewRecipe;

  getElement('btnToggleDnRecipe').textContent = t.btnViewRecipe;

  getElement('txtWeekDesc').textContent = t.txtWeekDesc;

  getElement('txtMonthDesc').textContent = t.txtMonthDesc;

  getElement('txtWaterTracker').textContent = t.txtWaterTracker;

  getElement('btnResetWater').textContent = t.btnResetWater;

  getElement('txtWaterDesc').textContent = t.txtWaterDesc;

  getElement('txtGlassesTotal').textContent = t.txtGlassesTotal;

  getElement('txtSleepTracker').textContent = t.txtSleepTracker;

  getElement('txtSleepTargetBadge').textContent = t.txtSleepTargetBadge;

  getElement('lblSleepInput').textContent = t.lblSleepInput;

  getElement('btnSaveSleep').textContent = t.btnSaveSleep;

  getElement('txtWorkout').textContent = t.txtWorkout;

  getElement('btnResetWorkout').textContent = t.btnResetWorkout;

  getElement('btnSwapWorkout').textContent = t.btnSwapWorkout;

  getElement('lblWorkoutProgress').textContent = t.lblWorkoutProgress;

  getElement('txtHistory').textContent = t.txtHistory;

  getElement('btnClearHistory').textContent = t.btnClearHistory;

  getElement('thDateTime').textContent = t.thDateTime;

  getElement('thType').textContent = t.thType;

  getElement('thDetails').textContent = t.thDetails;

  getElement('thBmi').textContent = t.thBmi;

  getElement('thCalories').textContent = t.thCalories;

  getElement('thGoal').textContent = t.thGoal;

  getElement('mealModalTitle').textContent = t.modalTitle;

  getElement('btnCloseModalBottom').textContent = t.btnClose;

}
 
// --- Event Listeners Binding ---

document.addEventListener('DOMContentLoaded', () => {

  // Load history data from Firebase on startup
  initHistoryListener();

  getElement('btnToggleDarkMode').addEventListener('click', toggleDarkMode);

  getElement('langSelect').addEventListener('change', changeLanguage);

  getElement('btnCalculate').addEventListener('click', calculateMetrics);
 
  getElement('tabToday').addEventListener('click', () => switchMealTab('today'));

  getElement('tabWeek').addEventListener('click', () => switchMealTab('week'));

  getElement('tabMonth').addEventListener('click', () => switchMealTab('month'));
 
  getElement('btnSwapBf').addEventListener('click', () => swapMeal('breakfast'));

  getElement('btnSwapLu').addEventListener('click', () => swapMeal('lunch'));

  getElement('btnSwapDn').addEventListener('click', () => swapMeal('dinner'));
 
  getElement('btnToggleBfRecipe').addEventListener('click', () => toggleRecipe('bfRecipe'));

  getElement('btnToggleLuRecipe').addEventListener('click', () => toggleRecipe('luRecipe'));

  getElement('btnToggleDnRecipe').addEventListener('click', () => toggleRecipe('toggleDnRecipe') || toggleRecipe('dnRecipe'));
 
  getElement('btnResetWater').addEventListener('click', resetWater);

  getElement('btnSaveSleep').addEventListener('click', saveSleep);
 
  getElement('chkEx1').addEventListener('change', updateWorkoutProgress);

  getElement('chkEx2').addEventListener('change', updateWorkoutProgress);

  getElement('chkEx3').addEventListener('change', updateWorkoutProgress);
 
  getElement('btnResetWorkout').addEventListener('click', resetWorkout);

  getElement('btnSwapWorkout').addEventListener('click', swapWorkout);
 
  getElement('btnClearHistory').addEventListener('click', () => {

    const historyRef = ref(db, 'everydayFit/history');

    remove(historyRef).then(() => {

      getElement('historyTable').innerHTML = "";

    }).catch((error) => {

      console.error("Error clearing history: ", error);

    });

  });
 
  getElement('btnCloseModal').addEventListener('click', closeMealModal);

  getElement('btnCloseModalBottom').addEventListener('click', closeMealModal);
 
  // Initialize water tracker UI

  initWaterTracker();

});