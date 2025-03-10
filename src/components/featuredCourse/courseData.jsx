import { faker } from '@faker-js/faker';
const courseData = [
  {
    Branch:"Data Science",
    courseBranch:[
      {
        category: "ChatGpt",
        courses: [
          {
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
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
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            title: "AWS Certified Cloud Practitioner",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "AZ-900: Microsoft Azure Fundamentals",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "AWS Certified Solutions Architect - Associate",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,

          {
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
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
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
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
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
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
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
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Mastering ChatGPT: From Beginner to Pro",
            creator: "John Doe",
            rating: 4.8,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
            title: "ChatGPT for Developers",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More",
            creator: "Julian Melanson,Benza Maman",
            rating: 4.5,
            price: "$9.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "The Complete AI-Powered Copywriting Course & ChatGPT Course",
            creator: "Ing. Tomas Moravek,Learn Digital Advertising",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
            title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
            creator: "Jane Smith",
            rating: 4.5,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          }
          ,
          {
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
            title: "Data Science Bootcamp",
            creator: "Alice Johnson",
            rating: 4.9,
            price: "$49.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Python for Beginners",
            creator: "Emily Davis",
            rating: 4.6,
            price: "Free",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Machine Learning A-Z",
            creator: "Sarah Connor",
            rating: 4.9,
            price: "$79.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Deep Learning Specialization",
            creator: "Andrew Ng",
            rating: 5.0,
            price: "$99.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "AI for Everyone",
            creator: "Andrew Ng",
            rating: 4.8,
            price: "$89.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "Statistics for Data Science",
            creator: "Alan Turing",
            rating: 4.9,
            price: "$29.99",
            thumbnail: faker.image.avatar()
          },
          {
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
            title: "NLP with Python",
            creator: "Lex Fridman",
            rating: 4.9,
            price: "$59.99",
            thumbnail: faker.image.avatar()
          },
          {
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
