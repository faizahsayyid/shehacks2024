# agora - scroll to, not through, your future

## Inspiration ✨
Scroll to, not through, your future. In an era where doom scrolling has become a pervasive societal issue, negatively impacting mental well-being, and privacy tracking eroding personal freedoms, there was an urgent need for a transformative solution. Agora, homage to being an Ancient Greek term for open space used for intellectual and social gatherings, a platform that not only counters the mindless scrolling trend but also champions user privacy. The relentless pursuit of a more mindful, purposeful digital existence inspired agora's creation, aiming to foster positive, intentional living in an increasingly interconnected world.

## What it does 💻
***agora*** is a comprehensive platform that uses your web activity (_with your explicit permission of course!_) and provides tailored lesson plans as well as entertainment budgeting to help you manage a purposeful, balanced digital lifestyle. Both tools are supported by daily external notifications and a browser add-on.

It gives daily lesson plan recommendations for each user based on their search history, cached cookies and manually entered interests. Users can go into each lesson plan and toggle between their preferred style of learning (visual, auditory, read/write, and kinaesthetic). During the lesson there is also an integrated chat that can assist in answering any questions.

Our entertainment budget adopts a gradual approach, helping users responsibly manage their screen time without abrupt restrictions. It offers a step-by-step plan, promoting sustainable changes in digital habits, ensuring a balanced and mindful transition to a more intentional online experience.

Our framework encourages users to 🍎 LEARN 📝:
- **Leverage customization** based on web activity to enable tailored experiences
- **Evaluate your time** spent doom scrolling on entertainment apps
- **Address habits** that are more likely to lead you into doom scrolling and time-wasting
- **Reap the benefits** of varied learning content and respond to diverse content recommendations
- **Navigate your learning journey** with agora

agora makes it easy to learn the art of intentional living by seamlessly curating personalized lesson plans and guiding your digital experience. Fine-tuning your journey for a positive impact has never been easier.

## How we built it 🔨

agora is based off of Cloudflare's Workers AI and team-compiled databases sourced from (XXX) to recommend curated lesson plans. The front-end is created using Chakra UI and open-source cache to ensure privacy and security is supported through Redis. Design and prototype were first created on pen and paper and then replicated in Chakra UI.

## Challenges we ran into ⚠️
As a team we attempted to use many techstacks we had not previously known about and/or have never used before: Cloudflare's Worker AI, Redis and GoDaddy.  As with any new techstack, there was a learning curve on a time constraint but we were able to overcome integration challenges and troubleshoot unfamiliar issues. 

## Accomplishments that we're proud of 🏆
As eager learners, we take pride in having created a useful website that promotes commitments to education and utilizing the available web activity data to foster international living rather than leveraging the information for personalized ads.

On a more technical note we are also proud of being able to design an architecture that still values privacy with a short-term cache and allowing users to select which data they are comfortable with agora using.

## What we learned 🏫
- Balancing the utilization of web activity for personalization with robust privacy measures requires a combination of thorough research, continuous learning, and iterative prototyping to ensure user trust and data security.
- Learning with unfamiliar tech stacks with a team in a collaborative coding environments required us to dive deep into documentation and brainstorm how to ensure the integrity of our architecture remained intact without losing our adaptability
- Hacking requires a balance of sleep 😴 and hard work 😤

## What's next for agora 💭
- Fine-tune our pop-up notifications that show up on external sites as reminders and recommendation
- Incorporate webapp to a browser extension (add-on) for Chrome, Safari, Firefox, and Edge
