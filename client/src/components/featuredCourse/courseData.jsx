import { faker } from '@faker-js/faker';
const courseData = [
  {
    Branch:"Data Science",
    courseBranch:[
      {
        category: "ChatGpt",
        courses: [
          {
            id: 1,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 3,
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 4,
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 5,
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 6,
            title: "Upgrade Your Social Media Presence with ChatGPT",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        
        category: "Data Science",
        courses: [
          {
            id: 7,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 8,
            title: "Data Science with Python",
            creator: "Bob Lee",
            rating: 4.7,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Python",
        courses: [
          {
            id: 9,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 10,
            title: "Advanced Python Programming",
            creator: "Michael Scott",
            rating: 4.8,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Machine Learning",
        courses: [
          {
            id: 11,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 12,
            title: "Practical Machine Learning",
            creator: "Tom Hardy",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Deep Learning",
        courses: [
          {
            id: 13,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 14,
            title: "Introduction to Deep Learning",
            creator: "Jane Doe",
            rating: 4.6,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Artificial Intelligence (AI)",
        courses: [
          {
            id: 15,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id:16,
            title: "Building AI Models",
            creator: "John Wick",
            rating: 4.7,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Statistics",
        courses: [
          {
            id: 17,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 18,
            title: "Probability and Statistics",
            creator: "Marie Curie",
            rating: 4.8,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Natural Language Processing (NLP)",
        courses: [
          { 
            id: 19,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 20,
            title: "Advanced NLP Techniques",
            creator: "Elon Musk",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      }
    ]
  },
  {
    Branch:"IT Certifications",
    courseBranch:[
      {

        category: "Amazon AWS",
        courses: [
          {
            id: 21,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 22,
            title: "AWS Certified Cloud Practitioner",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 23,
            title: "AZ-900: Microsoft Azure Fundamentals",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 24,
            title: "AWS Certified Solutions Architect - Associate",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,

          {
            id: 25,
            title: "AWS Certified Developer - Associate",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "AWS Certified Cloud Practitioner",
        courses: [
          {
            id: 26,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 27,
            title: "Data Science with Python",
            creator: "Bob Lee",
            rating: 4.7,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "AZ-900: Microsoft Azure Fundamentals",
        courses: [
          {
            id: 29,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 30,
            title: "Advanced Python Programming",
            creator: "Michael Scott",
            rating: 4.8,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "WS Certified Solutions Architect - Associate",
        courses: [
          {
            id: 31,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 32,
            title: "Practical Machine Learning",
            creator: "Tom Hardy",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Kubernetes",
        courses: [
          {
            id: 33,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 34,
            title: "Introduction to Deep Learning",
            creator: "Jane Doe",
            rating: 4.6,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "AWS Certified Developer - Associate",
        courses: [
          {
            id: 37,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 38,
            title: "Building AI Models",
            creator: "John Wick",
            rating: 4.7,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Cisco Certified Network Associate (CCNA)",
        courses: [
          {
            id: 39,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 40,
            title: "Probability and Statistics",
            creator: "Marie Curie",
            rating: 4.8,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "CompTIA Security+",
        courses: [
          {
            id: 41,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 42,
            title: "Advanced NLP Techniques",
            creator: "Elon Musk",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      }
    ]
  },
  {
    Branch:"Leadership",
    courseBranch:[
      {

        category: "Leadership",
        courses: [
          {
            id: 43,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 44,
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {            
            id: 45,
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 46,
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 47,
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 48,
            title: "Upgrade Your Social Media Presence with ChatGPT",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Management Skills",
        courses: [
          {
            id: 49,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 50,
            title: "Data Science with Python",
            creator: "Bob Lee",
            rating: 4.7,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Project Management",
        courses: [
          {
            id: 51,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 52,
            title: "Advanced Python Programming",
            creator: "Michael Scott",
            rating: 4.8,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Personal Productivity",
        courses: [
          {
            id: 53,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 54,
            title: "Practical Machine Learning",
            creator: "Tom Hardy",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Emotional Intelligence",
        courses: [
          {
            id: 55,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 56,
            title: "Introduction to Deep Learning",
            creator: "Jane Doe",
            rating: 4.6,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Digital Transformation",
        courses: [
          {
            id: 57,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 58,
            title: "Building AI Models",
            creator: "John Wick",
            rating: 4.7,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Business Strategy",
        courses: [
          {
            id: 59,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 60,
            title: "Probability and Statistics",
            creator: "Marie Curie",
            rating: 4.8,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Conflict Management",
        courses: [
          {
            id: 61,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 62,
            title: "Advanced NLP Techniques",
            creator: "Elon Musk",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      }
    ]
  },
  {
    Branch:"Web Development",
    courseBranch:[
      {

        category: "Web Development",
        courses: [
          {
            id: 63,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 64,
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 65,
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 66,
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 67,
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 68,
            title: "Upgrade Your Social Media Presence with ChatGPT",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "JavaScript",
        courses: [
          {
            id: 69,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 70,
            title: "Data Science with Python",
            creator: "Bob Lee",
            rating: 4.7,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "React JS",
        courses: [
          {
            id: 71,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 72,
            title: "Advanced Python Programming",
            creator: "Michael Scott",
            rating: 4.8,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Angular",
        courses: [
          {
            id: 73,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 74,
            title: "Practical Machine Learning",
            creator: "Tom Hardy",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Java",
        courses: [
          {
            id: 75,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 76,
            title: "Introduction to Deep Learning",
            creator: "Jane Doe",
            rating: 4.6,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Android Development",
        courses: [
          {
            id: 77,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 78,
            title: "Building AI Models",
            creator: "John Wick",
            rating: 4.7,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "iOS Development",
        courses: [
          {
            id: 79,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 80,
            title: "Probability and Statistics",
            creator: "Marie Curie",
            rating: 4.8,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "CSS",
        courses: [
          {
            id: 81,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 82,
            title: "Advanced NLP Techniques",
            creator: "Elon Musk",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      }
    ]
  },
  {
    Branch:"Communication",
    courseBranch:[
      {

        category: "Communication Skills",
        courses: [
          {
            id: 83,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 84,
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 85,
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 86,
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 87,
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 88,
            title: "Upgrade Your Social Media Presence with ChatGPT",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Presentation Skills",
        courses: [
          {
            id: 89,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 90,
            title: "Data Science with Python",
            creator: "Bob Lee",
            rating: 4.7,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Public Speaking",
        courses: [
          {
            id: 91,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 92,
            title: "Advanced Python Programming",
            creator: "Michael Scott",
            rating: 4.8,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Writing",
        courses: [
          {
            id: 93,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 94,
            title: "Practical Machine Learning",
            creator: "Tom Hardy",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "PowerPoint",
        courses: [
          {
            id: 95,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 96,
            title: "Introduction to Deep Learning",
            creator: "Jane Doe",
            rating: 4.6,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Business Communication",
        courses: [
          {
            id: 97,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 98,
            title: "Building AI Models",
            creator: "John Wick",
            rating: 4.7,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Business Writing",
        courses: [
          {
            id: 99,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 100,
            title: "Probability and Statistics",
            creator: "Marie Curie",
            rating: 4.8,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Email Writing and Etiquette",
        courses: [
          {
            id: 101,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 102,
            title: "Advanced NLP Techniques",
            creator: "Elon Musk",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      }
    ]
  },
  {
    Branch:"Business Analytics & Intelligence",
    courseBranch:[
      {

        category: "Microsoft Excel",
        courses: [
          {
            id: 103,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 104,
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 105,
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 106,
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 107,
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 108,
            title: "Upgrade Your Social Media Presence with ChatGPT",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "SQL",
        courses: [
          {
            id: 109,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 110,
            title: "Data Science with Python",
            creator: "Bob Lee",
            rating: 4.7,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Microsoft Power BI",
        courses: [
          {
            id:111,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 112,
            title: "Advanced Python Programming",
            creator: "Michael Scott",
            rating: 4.8,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Data Analysis",
        courses: [
          {
            id: 113,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 114,
            title: "Practical Machine Learning",
            creator: "Tom Hardy",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Business Analysis",
        courses: [
          {
            id: 115,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 116,
            title: "Introduction to Deep Learning",
            creator: "Jane Doe",
            rating: 4.6,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Tableau",
        courses: [
          {
            id: 117,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 118,
            title: "Building AI Models",
            creator: "John Wick",
            rating: 4.7,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Data Visualization",
        courses: [
          {
            id: 119,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 120,
            title: "Probability and Statistics",
            creator: "Marie Curie",
            rating: 4.8,
            price: "$39.99",
            thumbnail: faker.image.avatar()
          }
        ]
      },
      {
        category: "Data Modeling",
        courses: [
          {
            id: 121,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 122,
            title: "Advanced NLP Techniques",
            creator: "Elon Musk",
            rating: 4.7,
            price: "$69.99",
            thumbnail: faker.image.avatar()
          }
        ]
      }
    ]
  }
  
];

export default courseData;
