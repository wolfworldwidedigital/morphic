import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    "query": "Wat zijn de nieuwste trends in AI-ontwikkeling en technologie?",
    "follow_up_questions": null,
    "answer": "Based on the latest trends in AI development and technology, some key points include the rise of AI assistants and process agents in the workplace, increased adoption of AI tools by HR teams for tasks such as resume screening and employee performance analysis, the use of AI in mining for accelerating the detection of economically significant mineral deposits, and the integration of GenAI technology for small to medium businesses to improve efficiency without significant data science investments.",
    "images": [
        "https://assets.deondernemer.nl/de-ondernemer/algoritme-ontwikkeling-ai-job-van-den-berg.jpg",
        "https://tweaklibrary.com/wp-content/uploads/2020/03/AI-Taking-Intelligence-To-The-Next-Level.png",
        "https://i1.wp.com/www.theworldbeast.com/wp-content/uploads/2021/07/How-the-Latest-Technology-Trends-are-Changing-the-World-Explore-Now.jpg?w=1200&ssl=1",
        "https://knowhow.distrelec.com/wp-content/uploads/2022/11/tech-trends-2023-1-1920x800.png",
        "https://media.licdn.com/dms/image/D5612AQGbYelSFe-X7A/article-cover_image-shrink_720_1280/0/1699754849739?e=2147483647&v=beta&t=VvLA1VOZJaj2vgBAebqtClsl9nEP22LxuoNxd70EU7Y"
    ],
    "results": [
        {
            "url": "https://www.shrm.org/topics-tools/news/hr-quarterly/ai-shapes-the-future-of-workplace-tech",
            "title": "AI Shapes the Future of Workplace Tech - SHRM",
            "score": 0.8933094,
            "published_date": "Wed, 04 Sep 2024 22:22:11 GMT",
            "content": "1. Rise of AI Assistants and Process Agents: Within the next three years, artificial intelligence assistants are expected to become ubiquitous in the workplace, supporting employees with tasks, providing real-time information, and enhancing productivity. In the next five years, AI-powered process agents will automate and optimize complex business processes, including those within the HR domain, leading to greater efficiency and cost savings. 3. AI Integration: HR teams will increasingly adopt AI tools for tasks such as resume screening, candidate matching, employee performance analysis, and personalized training recommendations. HR must always include human intelligence and oversight of AI in decision-making in hiring and firing, a legal expert said at SHRM24."
        },
        {
            "url": "https://www.mining-technology.com/features/ai-critical-mineral-discovery/",
            "title": "How AI can be used to improve discovery of economic critical mineral deposits - Mining Technology",
            "score": 0.8864204,
            "published_date": "Mon, 09 Sep 2024 09:05:03 GMT",
            "content": "How AI can be used to improve discovery of economic critical mineral deposits Mining Technology sat down with Lorraine Godwin, vice-president of VerAI Discoveries, to discuss how AI can be used to accelerate the detection of economically significant critical mineral deposits. We are using AI for a different approach to discovery and to revolutionise the way we can predict the next big deposits. The way we did blind testing was training the AI on known economic deposits or advanced projects in the known area, and then instructing it to look in the adjoining areas. LG: I think in mining AI will help speed up early-stage discovery, and it will help geoscience experts focus their time and effort."
        },
        {
            "url": "https://www.itnews.asia/news/can-integrating-genai-with-automation-transform-efficiency-611361",
            "title": "Can integrating GenAI with automation transform efficiency? - iTnews Asia",
            "score": 0.82432055,
            "published_date": "Wed, 04 Sep 2024 05:00:54 GMT",
            "content": "Security Digital Transformation Cloud Data & Analytics Telco Data Centres Industry Movements Content Hub Events Advertise iTNews Asia: How can small to medium businesses (SMBs) leverage GenAI effectively without significant investment in data science resources, and what steps should they take to integrate this technology into their operations? iTNews Asia: With all the data and language models involved in GenAI, what are the key ethical issues in developing and using this technology? This underscores the criticality of integrating these models with Specialised AI, which is trained on specific customer data, and can provide more accurate results."
        },
        {
            "url": "https://www.forbes.com/sites/danielnewman/2024/09/05/the-state-of-the-ai-super-cyclenvidia-apple-and-the-overall-demand-for-ai/",
            "title": "The State Of The AI Super Cycle - NVIDIA, Apple, And The Overall Demand For AI - Forbes",
            "score": 0.77594453,
            "published_date": "Thu, 05 Sep 2024 19:55:21 GMT",
            "content": "The State Of The AI Super Cycle - NVIDIA, Apple, And The Overall Demand For AI The State Of The AI Super Cycle - NVIDIA, Apple, And The Overall Demand For AI We are seeing some promising numbers from consultants and systems integrators like IBM and Accenture on sprawling generative AI projects and some indicators from large financial services companies and healthcare/drug companies that AI is going to deliver efficiency and value to their businesses, but it hasn't really shown in the numbers yet. While Apple has been more methodical in its AI strategy, one of the biggest opportunities for the company was to re-introduce Siri and make it something the iPhone install base genuinely wants to use."
        },
        {
            "url": "https://www.globalvillagespace.com/tech/the-future-of-work-ai-skills-are-in-high-demand-but-employers-lag-behind/",
            "title": "The Future of Work: AI Skills Are in High Demand, But Employers Lag Behind - Global Village space",
            "score": 0.6690965,
            "published_date": "Wed, 04 Sep 2024 06:32:27 GMT",
            "content": "The Future of Work: AI Skills Are in High Demand, But Employers Lag Behind The Future of Work: AI Skills Are in High Demand, But Employers Lag Behind To cater to this demand for AI skills, we have curated a list of three job opportunities for tech professionals. Tech CEOs, including Matt Garman of Amazon Web Services (AWS), have advised software engineers to upskill and learn new technologies, hinting at the potential for AI to replace coding work. To future-proof their careers, tech professionals must upskill in AI. The gap between employer expectations and employee training is widening, making it crucial for individuals to take the initiative and learn AI tools."
        }
    ],
    "response_time": 3.18
  }
]

export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.query}
              onClick={async () => {
                submitMessage(message.query)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.query}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
