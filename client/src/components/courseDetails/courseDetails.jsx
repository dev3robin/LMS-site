import { useLocation } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import PreviewCard from './previewCard';
import { useState } from 'react';
const CourseDetails = () => {
  const location = useLocation();
  const { course,activeBranch,activeCategory } = location.state || {};
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (!course) {
    return <p>No course data available</p>;
  }
  return (
    <div className='CDetailsDiv'>
        <div className="CDetailsPro">
          <div className="relative flex flex-col w-[98%] max-w-[1260px] p-2">
            <div className="cdFilePro">
              <div className="filepath">
                {activeBranch} &gt; {activeCategory} &gt; {course.title}
              </div>
              <div className="CDetailsProfile">
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
                  <div className="CDetailsfeature">
                    <p>
                    25+ Generative AI Tools to 10x Business, Productivity,
                    Creativity | Prompt Engineering, Custom GPTs,
                      Midjourney</p>
                  </div> 
                </div>
              </div>
            </div>
            <div className="relative sm:absolute sm:right-[2%] sm:top-[12%]">
              <PreviewCard course={course}/>
            </div>
          </div>
        </div>
        <div className="w-[100%] max-w-[1260px]">
          <div className={`whatUWL w-[96%] m-2 sm:w-[60%] h-[50vh] overflow-hidden mb-2 text-[.9rem] flex flex-col border-1 border-gray-300 p-8  ${isExpanded ? "expanded" : ""}`} id="contentBox">
              <h1>What you'll learn</h1>
              <div className="contentP">
                <p><span><CheckIcon /></span>Generative AI: Create content, synthesize information, and learn faster than ever with effective prompt engineering!</p>
                <p><span><CheckIcon /></span>ChatGPT: Turn your creativity into paid work, generate fresh ideas, reach new audiences, and scale your projects!</p>
                <p><span><CheckIcon /></span>Productivity: Achieve goals faster with artificial intelligence, manage time, prioritize tasks, and create an optimized daily schedule!</p>
                <p><span><CheckIcon /></span>Marketing: Generate targeted content with generative AI, capitalize on trends, create ads, newsletters, specialized content, and media campaigns!</p>
                <p><span><CheckIcon /></span>Soft Skills: Improve your communication, leadership, problem-solving, and social skills with personalized  feedback!</p>
                <p><span><CheckIcon /></span>AI Voice Tools: Easily create AI-generated speech for any use case and even clone your own voice entirely!</p>
                <p><span><CheckIcon /></span>AI Video Tools: Create an AI avatar that transforms scripts into presentations and quickly generate social media content!</p>
                <p><span><CheckIcon /></span>AI Photo Tools: Add motion to images, dynamically enhance image aesthetics, and create custom images in bulk!</p>
                <p><span><CheckIcon /></span>AI Writing Tools: Automate writing tasks, generate effective copy, and integrate with Google Sheets/Excel!</p>
                <p><span><CheckIcon /></span>AI Music Tools: Create unique compositions for any types of video and save time with a streamlined creative process.</p>
                <p><span><CheckIcon /></span>Branding: Develop a visual identity, design logos, and generate content to establish a strong online presence!</p>
                <p><span><CheckIcon /></span>AI Art Generation: Create photos from prompts, fill in or remove elements of images using inpainting and outpainting techniques!</p>
                <p><span><CheckIcon /></span>Business: Streamline your AI workflow, automate repetitive tasks, and gain insights that help you make data-driven decisions for your business!</p>
                <p><span><CheckIcon /></span>Multimodal: Combine multiple AI tools to create immersive and engaging content that would have previously taken an entire team to create!</p>
                <p><span><CheckIcon /></span>Midjourney: Use prompts, parameters, and modifiers to create amazing images that showcase your personal style and creativity!</p>
                <p><span><CheckIcon /></span>Coding: Combine the power of  with programming fundamentals, algorithms, debugging, and documentation!</p>
                <p><span><CheckIcon /></span>Custom GPTs & AI Assistants: Build and optimize your workflows for business and personal use, tailoring AI to specific needs!</p>
                <p><span><CheckIcon /></span>AI Automation: Task automating with Zapier, Make, and OpenAI APIs, integrating AI in efficient and scalable ways!.</p>
              </div>
          </div>
          <button id="toggleBtn" onClick={handleToggle}>
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
    </div>
  );
};

export default CourseDetails;
