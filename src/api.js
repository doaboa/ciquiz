export function quizData () {
  // If the API existed, I would call it here with fetch and return the object onSuccess like so
  return [
    {
      "text": "At Chloe + Isabel, we take great joy in designing gorgeous, finely-detailed and affordable pieces for the stylish women of today – jewelry you won’t find anywhere else.",
      "question": "Which one of these bracelets do you think aligns with your personal style?",
      "layout": 1,
      "id": 1,
      "options": [
        {
          "image": "images/1.jpeg",
          "text": "Bead + Ribbon Multi-Wrap Bracelet"
        },
        {
          "image": "images/2.jpeg",
          "text": "Gilded Ivory Statement Bracelet"
        },
        {
          "image": "images/3.jpeg",
          "text": "Jet Octagon Stone Bracelet"
        }
      ]
    },
    {
      "text": "At Chloe + Isabel, we are powered by our Merchandisers, the heart and soul of our brand, and the true center of our company.",
      "question": "Which brand message do you relate to the most?",
      "layout": 2,
      "id": 2,
      "options": [
        {
          "image": "images/4.jpeg",
          "text": "message1"
        },
        {
          "image": "images/5.jpeg",
          "text": "message2"
        },
        {
          "image": "images/6.jpeg",
          "text": "message3"
        },
        {
          "image": "images/7.jpeg",
          "text": "message4"
        }
      ]
    },
    {
      "text": "Our company was founded on the idea that best friends, while different, can be united by their passion for style.",
      "question": "The question is, are you a Chloe or an Isabel?",
      "layout": 1,
      "id": 3,
      "options": [
        {
          "image": "images/8.jpeg",
          "text": "I'm a Chloe - always aware of the latest style trends"
        },
        {
          "image": "images/1.jpeg",
          "text": "I'm an Isabel - classic + refined in style"
        },
        {
          "image": "images/2.jpeg",
          "text": "I'm a Chloe-bel - a bit of both!"
        }
      ]
    },
    {
      "text": "Our Mission is to provide you with the tools + trainig to reach your goals.",
      "question": "What are you most eager to gain from your expericen with Chloe + Isabel?",
      "layout": 2,
      "id": 4,
      "options": [
        {
          "image": "images/3.jpeg",
          "text": "Sales + marketing experience to improve my resume"
        },
        {
          "image": "images/4.jpeg",
          "text": "Fashion + merchanidsing experience to improve my resume"
        },
        {
          "image": "images/5.jpeg",
          "text": "Enough income to replace my full-time salary"
        },
        {
          "image": "images/6.jpeg",
          "text": "Additional income to supplement my current paycheck"
        }
      ]
    },
    {
      "text": "You're almost done!",
      "question": "Enter your final application details below.",
      "layout": 3
    }
  ]
}

export function submitQuiz (quizData) {
  fetch('/applicants', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(quizData)
  })
  console.log('Posted:', quizData)
}
