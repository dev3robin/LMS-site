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
            id: 1,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
            title: "AWS Certified Cloud Practitioner",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 3,
            title: "AZ-900: Microsoft Azure Fundamentals",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            id: 4,
            title: "AWS Certified Solutions Architect - Associate",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,

          {
            id: 5,
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
            id: 1,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
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
        category: "Management Skills",
        courses: [
          {
            id: 1,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
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
        category: "JavaScript",
        courses: [
          {
            id: 1,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
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
        category: "Presentation Skills",
        courses: [
          {
            id: 1,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
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
        category: "SQL",
        courses: [
          {
            id: 1,
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id:1,
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
            id: 1,
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
            id: 2,
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
