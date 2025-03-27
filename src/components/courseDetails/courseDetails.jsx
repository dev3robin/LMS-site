import { useLocation } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state || {};

  if (!course) {
    return <p>No course data available</p>;
  }

  return (
    <div className='CDetailsDiv'>
      <div className='cdDiv'>
        <div className="CDetailsProfile">
          <img src={course.thumbnail}  className="cdImg" />
          <div className="CDetails">
            <h1>{course.title}</h1>
            <p className="CDetailsCreDe">By {course.creator}</p>
            <p className="CDetailsratings">Rating: ⭐ {course.rating}</p>
            <p className="CDetailspricing">{course.price}</p>
          </div>
        <div  className='CDetailscourseDetailsHover'>
          <div className="CDetailstitle">{course.title}</div>
          <div className="CDetailsupdateinfo"><span>Bestseller</span>Updated March 2025</div>
          <div className="CDetailsdetails">32.5 total hoursAll LevelsSubtitles, CC</div>
          <div className="CDetailsfeature"><p>
          25+ Generative AI Tools to 10x Business, Productivity,
          Creativity | Prompt Engineering, ChatGPT, Custom GPTs,
            Midjourney
          </p></div> 
        </div>
        </div>
      </div>
      <div className="whatUWL">
        <h1>What you'll learn</h1>
        <div className="contentP">
          <p><span><CheckIcon /></span>Generative AI: Create content, synthesize information, and learn faster than ever with effective prompt engineering!</p>
          <p><span><CheckIcon />ChatGPT: Turn your creativity into paid work, generate fresh ideas, reach new audiences, and scale your projects!</span></p>
          <p><span><CheckIcon />Productivity: Achieve goals faster with artificial intelligence, manage time, prioritize tasks, and create an optimized daily schedule!</span></p>
          <p><span><CheckIcon />Marketing: Generate targeted content with generative AI, capitalize on trends, create ads, newsletters, specialized content, and media campaigns!</span></p>
          <p><span><CheckIcon />Soft Skills: Improve your communication, leadership, problem-solving, and social skills with personalized ChatGPT feedback!</span></p>
          <p><span><CheckIcon />AI Voice Tools: Easily create AI-generated speech for any use case and even clone your own voice entirely!</span></p>
          <p><span><CheckIcon />AI Video Tools: Create an AI avatar that transforms scripts into presentations and quickly generate social media content!</span></p>
          <p><span><CheckIcon />AI Photo Tools: Add motion to images, dynamically enhance image aesthetics, and create custom images in bulk!</span></p>
          <p><span><CheckIcon />AI Writing Tools: Automate writing tasks, generate effective copy, and integrate with Google Sheets/Excel!</span></p>
          <p><span><CheckIcon />AI Music Tools: Create unique compositions for any types of video and save time with a streamlined creative process.</span></p>
          <p><span><CheckIcon />Branding: Develop a visual identity, design logos, and generate content to establish a strong online presence!</span></p>
          <p><span><CheckIcon />AI Art Generation: Create photos from prompts, fill in or remove elements of images using inpainting and outpainting techniques!</span></p>
          <p><span><CheckIcon />Business: Streamline your AI workflow, automate repetitive tasks, and gain insights that help you make data-driven decisions for your business!</span></p>
          <p><span><CheckIcon />Multimodal: Combine multiple AI tools to create immersive and engaging content that would have previously taken an entire team to create!</span></p>
          <p><span><CheckIcon />Midjourney: Use prompts, parameters, and modifiers to create amazing images that showcase your personal style and creativity!</span></p>
          <p><span><CheckIcon />Coding: Combine the power of ChatGPT with programming fundamentals, algorithms, debugging, and documentation!</span></p>
          <p><span><CheckIcon />Custom GPTs & AI Assistants: Build and optimize your workflows for business and personal use, tailoring AI to specific needs!</span></p>
          <p><span><CheckIcon />AI Automation: Task automating with Zapier, Make, and OpenAI APIs, integrating AI in efficient and scalable ways!.</span></p>

        </div>
        <button>Sow more</button>
      </div>
    </div>
  );
};

export default CourseDetails;
