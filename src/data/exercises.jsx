export const exercises = [
    {
      id: generateUniqueId(),
      name: "Lat Pulldown",
      machine: "Lat Machine",
      musclesWorked: "Targets the latissimus dorsi (lats) and upper back. Typically done with moderate to heavy weights. Suitable for intermediate and advanced levels.",
    },
    {
      id: generateUniqueId(),
      name: "Seated Rows",
      machine: "Lat Machine",
      musclesWorked: "Works the mid-back and improves posture. Effective with moderate resistance. Suitable for beginners and above.",
    },
    {
      id: generateUniqueId(),
      name: "Bench Press",
      machine: "Flat Bench Press",
      musclesWorked: "Focuses on the chest, shoulders, and triceps. Effective with both heavy and moderate weights. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Bench Press",
      machine: "Incline Bench Press",
      musclesWorked: "Targets the upper chest. Effective with moderate to heavy weights. Suitable for intermediate and advanced levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Bench Press",
      machine: "Bench Press",
      musclesWorked: "An alternative for chest exercises using dumbbells. Can vary between heavy and moderate weights. Suitable for all levels.",
    },
    {
      name: "Dips",
      machine: "Dip Machine",
      musclesWorked: "Strengthens the triceps, shoulders, and chest. Often done with moderate resistance. Suitable for beginners and above.",
    },
    {
      name: "Pull-Ups",
      machine: "Pull-Up Bar",
      musclesWorked: "Builds the back, shoulders, and biceps. Typically bodyweight exercises. Suitable for beginners and above.",
    },
    {
      id: generateUniqueId(),
      name: "Push-Ups",
      machine: "Combined Dip and Pull-Up Machine",
      musclesWorked: "Works the chest, shoulders, and triceps. Can vary in intensity. Suitable for beginners and above.",
    },
    {
      id: generateUniqueId(),
      name: "Leg Raises",
      machine: "Combined Dip and Pull-Up Machine",
      musclesWorked: "Engages the lower abdominal muscles. Typically bodyweight exercises. Suitable for beginners and above.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Bicep Curls",
      machine: "Dumbells",
      musclesWorked: "Targets the biceps. You can use different weights for variation. Moderate weights with higher reps are common. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Tricep Extensions",
      machine: "Dumbells",
      musclesWorked: "Works the triceps. Adjust the weight to your preference. Often done with moderate resistance. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Rows",
      machine: "Dumbells",
      musclesWorked: "Targets the back and upper arms. You can do single-arm or two-arm rows. Effective with moderate weights. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Lunges",
      machine: "Dumbells",
      musclesWorked: "Great for legs and glutes. Hold dumbbells in each hand for added resistance. Moderate weights are common. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Shoulder Press",
      machine: "Dumbells",
      musclesWorked: "Focuses on the shoulders and triceps. Adjust the weight for desired intensity. Can be done with moderate to heavy weights. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Flyes",
      machine: "Dumbells",
      musclesWorked: "Works the chest. You can do flat or incline dumbbell flyes. Moderate weights with controlled form are effective. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Lateral Raises",
      machine: "Dumbells",
      musclesWorked: "Targets the shoulders. Use lighter weights for this exercise. High reps with light weights are common. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Lateral Raises",
      machine: "Dumbells",
      musclesWorked: "Ideal for shoulder isolation exercises. Light weights and high reps are effective for shoulder definition. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dimbell Front Raises",
      machine: "Dumbells",
      musclesWorked: "Targets the front deltoids. Light weights and high reps help sculpt the front shoulder muscles. Suitable for all levels.",
    },
    {
      name: "Dumbbell Shrugs",
      machine: "Dumbells",
      musclesWorked: "Works the trapezius muscles. Moderate weights with controlled form are effective for trap development. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Hammer Curls",
      machine: "Dumbells",
      musclesWorked: "Variations of bicep curls with a neutral grip. Moderate weights with controlled form target the biceps. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Front Squats",
      machine: "Dumbells",
      musclesWorked: "Focuses on legs and glutes with the dumbbells held at shoulder height. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Russian Twists",
      machine: "Dumbells",
      musclesWorked: "Engages the core muscles. Suitable for all levels.",
    },
    {
      id: generateUniqueId(),
      name: "Dumbbell Planks",
      machine: "",
      musclesWorked: "Core-strengthening exercise. Suitable for all levels.",
    },
  ];
  
  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  