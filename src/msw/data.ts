const TOP_NEWS_IDS = [
	42455711, 42455707, 42455695, 42455670, 42455656, 42455624, 42455614, 42455589, 42455585, 42455566, 42455546,
	42455529, 42455526, 42455521, 42455506, 42455504, 42455490, 42455477, 42455465, 42455446, 42455439, 42455417,
	42455395, 42455389, 42455277, 42455269, 42455249, 42455244, 42455235, 42455234, 42455214, 42455195, 42455150,
	42455143, 42455125, 42455091, 42455051, 42454994, 42454974, 42454934, 42454929, 42454904, 42454894, 42454801,
	42454785, 42454723, 42454705, 42454693, 42454668, 42454658, 42454644, 42454589, 42454586, 42454570, 42454558,
	42454551, 42454547, 42454514, 42454505, 42454481, 42454479, 42454470, 42454454, 42454446, 42454436, 42454427,
	42454421, 42454416, 42454414, 42454411, 42454405, 42454389, 42454370, 42454359, 42454326, 42454308, 42454294,
	42454293, 42454269, 42454258, 42454251, 42454249, 42454239, 42454231, 42454217, 42454197, 42454193, 42454153,
	42454151, 42454150, 42454139, 42454132, 42454130, 42454129, 42454117, 42454106, 42454104, 42454013, 42453997, 42453996
];

const TOP_NEWS = [
	{
		by: 'PaulHoule',
		descendants: 0,
		id: 42455711,
		score: 1,
		time: 1734558318,
		title: 'Solar desalination and electrolysis system with energy recovery and storage',
		type: 'story',
		url: 'https://www.sciencedirect.com/science/article/pii/S0011916424010324'
	},
	{
		by: 'walterbell',
		descendants: 0,
		id: 42455707,
		score: 1,
		time: 1734558290,
		title: 'Qualcomm vs. Arm trial, Day 2',
		type: 'story',
		url: 'https://www.tantraanalyst.com/ta/qualcomm-vs-arm-trial-day-2-is-processor-design-derivative-of-instructing-set-architecture-isa/'
	},
	{
		by: 'patethegreat',
		descendants: 0,
		id: 42455695,
		score: 1,
		text: 'Hey everyone,\ntoday we&#x27;re launching the closed beta of voice_dev, the only fully programmable platform for building voice agents that scale. We created voice_dev after struggling with other solutions that either lacked the flexibility we needed to build our agent or forced us to manage our own infrastructure.<p>We wanted a platform that provides all the infrastructure to run a voice agent while being fully programmable in Python. Every platform we tried either lacked some of the necessary infrastructure to run an agent (forcing us to host Docker containers and handle scaling ourselves) or provided all the infrastructure but had limited customization options. They might let you bring your own voice model or LLM, for example, but you can’t easily program the agent to fit your specific use case in a normal language like Python unless you also host some or all of it yourself.<p>voice_dev solves these problems by offering a complete platform for deploying and running AI voice agents. The platform includes all of the necessary infrastructure to run your agent while also being fully programmable in python, ensuring you’re always free to customize your agent any way you want.<p>Check it out and request access if you’re interested in being one of the first developers to build on the platform! We&#x27;d love to hear your feedback.',
		time: 1734558231,
		title: 'Show HN: Voice_dev – A serverless programmable platform for voice agents',
		type: 'story',
		url: 'https://voicedev.io/'
	},
	{
		by: 'fanf2',
		descendants: 0,
		id: 42455670,
		score: 1,
		time: 1734558122,
		title: 'The Muppet Christmas Carol Is the Best Adaptation of a Christmas Carol',
		type: 'story',
		url: 'https://www.brightwalldarkroom.com/2019/12/20/a-grand-yuletide-theory-the-muppet-christmas-carol-is-the-best-adaptation-of-a-christmas-carol/'
	},
	{
		by: 'MrBuddyCasino',
		descendants: 0,
		id: 42455656,
		score: 2,
		time: 1734558046,
		title: 'Debunking the Lead Crime Hypothesis',
		type: 'story',
		url: 'https://medium.com/@tgof137/debunking-the-lead-crime-hypothesis-949e6fc2b0dc'
	},
	{
		by: '____H____',
		descendants: 0,
		id: 42455624,
		score: 1,
		time: 1734557891,
		title: 'Why Tesla (TSLA) Stock Is Trading Lower Today',
		type: 'story',
		url: 'https://finance.yahoo.com/news/why-tesla-tsla-stock-trading-202638236.html'
	},
	{
		by: 'ctoth',
		descendants: 0,
		id: 42455614,
		score: 3,
		time: 1734557834,
		title: 'Newsom Declares Bird Flu Emergency in California as US Confirms First Case',
		type: 'story',
		url: 'https://www.kqed.org/news/12018836/newsom-declares-bird-flu-emergency-california-us-confirms-1st-severe-case'
	},
	{
		by: 'beraliv',
		descendants: 0,
		id: 42455589,
		kids: [42455590],
		score: 1,
		time: 1734557752,
		title: 'Converting Types in TypeScript',
		type: 'story',
		url: 'https://ts-conversion.beraliv.com/'
	},
	{
		by: 'austinallegro',
		descendants: 0,
		id: 42455585,
		score: 1,
		time: 1734557728,
		title: 'What Led to the Death of MTV?',
		type: 'story',
		url: 'https://faroutmagazine.co.uk/what-led-to-the-death-of-mtv/'
	},
	{
		by: 'talles',
		descendants: 1,
		id: 42455566,
		kids: [42455694],
		score: 1,
		text: 'From my (quick) search, it seems like there&#x27;s no readily available license (or some sort of standard clause) to prevent an openly accessible codebase to be used for AI training.<p>Does anyone know of any existing repository out there that states this in their license? Any advice on how to do it?<p>P.S.: I’m specifically looking for how to include this restriction in a license, I kindly ask stay on topic here.<p>Thanks in advance!',
		time: 1734557644,
		title: 'Ask HN: How to opt out of AI training in a license?',
		type: 'story'
	},
	{
		by: 'pera',
		descendants: 0,
		id: 42455546,
		score: 1,
		time: 1734557555,
		title: 'Work starts on giant airship factory site',
		type: 'story',
		url: 'https://www.bbc.com/news/articles/c5ydwz57z88o'
	},
	{
		by: 'gok',
		descendants: 0,
		id: 42455529,
		score: 3,
		time: 1734557475,
		title: 'Moana 2',
		type: 'story',
		url: 'https://blog.yiningkarlli.com/2024/12/moana-2.html'
	},
	{
		by: 'feross',
		descendants: 0,
		id: 42455526,
		score: 2,
		time: 1734557469,
		title: 'Sonar to Acquire Tidelift, Scaling Open Source Maintainer Support',
		type: 'story',
		url: 'https://socket.dev/blog/sonar-to-acquire-tidelift'
	},
	{
		by: 'LordNibbler',
		descendants: 0,
		id: 42455521,
		kids: [42455549],
		score: 2,
		time: 1734557453,
		title: 'Intel 18A Process Node Clocks an Abysmal 10% Yield',
		type: 'story',
		url: 'https://www.techpowerup.com/329513/intel-18a-process-node-clocks-an-abysmal-10-yield-report'
	},
	{
		by: 'sekai',
		descendants: 0,
		id: 42455506,
		score: 1,
		time: 1734557401,
		title: 'A Study on the Coﬀee Spilling Phenomenon in the Low Impulse Regime',
		type: 'story',
		url: 'https://fermatslibrary.com/s/a-study-on-the-coffee-spilling-phenomenon-in-the-low-impulse-regime#email-newsletter'
	},
	{
		by: 'sandwichsphinx',
		descendants: 0,
		id: 42455504,
		score: 1,
		time: 1734557391,
		title: 'New Technology Is Taking Package Tracking Past Scanning',
		type: 'story',
		url: 'https://www.wsj.com/articles/new-technology-is-taking-package-tracking-past-scanning-3c9a3cf1'
	},
	{
		by: 'whycome',
		descendants: 0,
		id: 42455490,
		score: 1,
		time: 1734557337,
		title: "Sony's Beyond Sports on How 'The Simpsons' Funday Football Came to Be",
		type: 'story',
		url: 'https://www.techradar.com/streaming/entertainment/its-a-lot-of-data-processed-around-50-times-per-second-sonys-beyond-sports-on-how-the-simpsons-funday-football-came-to-be'
	},
	{
		by: 'Jimmc414',
		descendants: 0,
		id: 42455477,
		score: 1,
		time: 1734557275,
		title: 'The Forever Problem',
		type: 'story',
		url: 'https://www.nd.edu/stories/pfas/the-forever-problem/'
	},
	{
		by: 'corentin88',
		descendants: 0,
		id: 42455465,
		score: 1,
		time: 1734557219,
		title: 'Paying tribute to the web with View Source (2019)',
		type: 'story',
		url: 'https://signalvnoise.com/svn3/paying-tribute-to-the-web-with-view-source/'
	},
	{
		by: 'Jimmc414',
		descendants: 0,
		id: 42455446,
		score: 2,
		time: 1734557162,
		title: 'Perc, commonly used in dry cleaning, now banned by the EPA',
		type: 'story',
		url: 'https://www.wsj.com/health/wellness/banned-dry-cleaning-chemicals-pce-tce-fda-5bb236fa'
	},
	{
		by: 'thunderbong',
		descendants: 0,
		id: 42455439,
		kids: [42455554],
		score: 2,
		time: 1734557129,
		title: '150M developers and a new free tier for GitHub Copilot in VS Code',
		type: 'story',
		url: 'https://github.blog/news-insights/product-news/github-copilot-in-vscode-free/'
	},
	{
		by: 'iokanuon',
		descendants: 0,
		id: 42455417,
		score: 2,
		time: 1734557022,
		title: 'Show HN: netcat over Cloudflare Warp',
		type: 'story',
		url: 'https://github.com/karolba/wgcfcat'
	},
	{
		by: 'giuliomagnifico',
		descendants: 0,
		id: 42455395,
		score: 2,
		time: 1734556920,
		title: 'South Korea will introduce AI-based school textbooks in 2025',
		type: 'story',
		url: 'https://www.koreatimes.co.kr/www/nation/2024/12/113_352599.html'
	},
	{
		by: 'wallflower',
		descendants: 0,
		id: 42455389,
		score: 1,
		time: 1734556896,
		title: 'Syphilis had its roots in the Americas, archaeological bone study suggests',
		type: 'story',
		url: 'https://phys.org/news/2024-12-syphilis-roots-americas-archaeological-bone.amp'
	},
	{
		by: 'FMecha',
		descendants: 0,
		id: 42455277,
		score: 1,
		time: 1734556406,
		title: 'The antitrust hurdles Nissan, Honda may face on merger talks',
		type: 'story',
		url: 'https://finance.yahoo.com/video/antitrust-hurdles-nissan-honda-may-173117963.html'
	},
	{
		by: 'lienid',
		descendants: 0,
		id: 42455269,
		score: 2,
		time: 1734556369,
		title: 'New inference engine claims to serve multiple LLMs in true parallel on one GPU',
		type: 'story',
		url: 'https://twitter.com/dylanvsthe/status/1869451506375856449'
	},
	{
		by: '____H____',
		descendants: 0,
		id: 42455249,
		score: 1,
		time: 1734556286,
		title: 'Software Developers Statistics 2024 – State of Developer Ecosystem Report',
		type: 'story',
		url: 'https://www.jetbrains.com/lp/devecosystem-2024/'
	},
	{
		by: 'jandeboevrie',
		descendants: 0,
		id: 42455244,
		kids: [42455559],
		score: 3,
		time: 1734556247,
		title: 'Slint 1.9 Released with New Live-Preview Element Inspector, Translation Bundling',
		type: 'story',
		url: 'https://slint.dev/blog/slint-1.9-released'
	},
	{
		by: 'todsacerdoti',
		descendants: 0,
		id: 42455235,
		score: 1,
		time: 1734556162,
		title: 'Interactive Lustre tutorial on Gleam tours',
		type: 'story',
		url: 'https://gleamtours.com/lustre-tutorial/introduction/welcome-to-lustre/'
	},
	{
		by: 'rmason',
		descendants: 0,
		id: 42455234,
		score: 1,
		time: 1734556161,
		title: 'Five Questions to Ask Before Adopting AI in Government',
		type: 'story',
		url: 'https://codeforamerica.org/news/five-questions-to-ask-before-adopting-ai-in-government/'
	},
	{
		by: 'countrymile',
		descendants: 0,
		id: 42455214,
		score: 1,
		time: 1734556072,
		title: 'Why R is the best coding language for data journalism',
		type: 'story',
		url: 'https://www.economist.com/graphic-detail/2024/12/18/off-the-charts-newsletter-why-r-is-the-best-coding-language-for-data-journalism'
	},
	{
		by: 'gnabgib',
		descendants: 0,
		id: 42455195,
		score: 1,
		time: 1734555985,
		title: 'Researchers detect elevated levels of PFAS in fitness tracker/smartwatch bands',
		type: 'story',
		url: 'https://news.nd.edu/news/researchers-detect-elevated-levels-of-pfas-in-some-fitness-tracker-and-smartwatch-bands/'
	},
	{
		by: 'PaulHoule',
		descendants: 0,
		id: 42455150,
		score: 1,
		time: 1734555782,
		title: "Ethereum's Ether Headed to $5K as Activity, Institutional Demand Grows",
		type: 'story',
		url: 'https://www.coindesk.com/markets/2024/12/12/ethereum-s-ether-headed-to-5-k-as-activity-institutional-demand-grows'
	},
	{
		by: 'lisper',
		descendants: 0,
		id: 42455143,
		kids: [42455562],
		score: 2,
		time: 1734555738,
		title: 'Coffee Badging',
		type: 'story',
		url: 'https://en.wikipedia.org/wiki/Coffee_badging'
	},
	{
		by: 'sebmellen',
		descendants: 0,
		id: 42455125,
		score: 1,
		time: 1734555666,
		title: 'Seeing the World Through Your Field',
		type: 'story',
		url: 'https://www.sebastianmellen.com/post/2024/seeing-the-world-through-your-field/'
	},
	{
		by: 'gmays',
		descendants: 1,
		id: 42455091,
		kids: [42455588],
		score: 2,
		time: 1734555462,
		title: 'Why does grass make my skin itch?',
		type: 'story',
		url: 'https://theconversation.com/why-does-grass-make-my-skin-itch-243046'
	},
	{
		by: 'walterbell',
		descendants: 0,
		id: 42455051,
		kids: [42455071],
		score: 3,
		time: 1734555185,
		title: 'Classic Computer Magazines',
		type: 'story',
		url: 'https://archive.org/details/computermagazines'
	},
	{
		by: 'rmason',
		descendants: 0,
		id: 42454994,
		score: 1,
		time: 1734554888,
		title: "Meet Bex, Kawasaki's Rideable Robot Goat",
		type: 'story',
		url: 'https://www.cycleworld.com/story/motorcycle-news/kawasaki-bex-rideable-robot-goat/'
	},
	{
		by: 'johnny313',
		descendants: 0,
		id: 42454974,
		kids: [42455067],
		score: 7,
		time: 1734554777,
		title: 'I Was a Health Insurance Executive. What I Saw Made Me Quit',
		type: 'story',
		url: 'https://www.nytimes.com/2024/12/18/opinion/health-insurance-united-ceo-shooting.html'
	},
	{
		by: 'XzetaU8',
		descendants: 32,
		id: 42454934,
		kids: [42455516, 42455275, 42455426, 42455169, 42455346],
		score: 45,
		time: 1734554602,
		title: "What is metformin's secret sauce?",
		type: 'story',
		url: 'https://news.northwestern.edu/stories/2024/12/what-is-metformins-secret-sauce/?fj=1'
	},
	{
		by: 'crummy',
		descendants: 21,
		id: 42454929,
		kids: [
			42455140, 42455326, 42455386, 42455121, 42455161, 42455487, 42455157, 42455193, 42455250, 42455535, 42455094
		],
		score: 75,
		time: 1734554574,
		title: 'Java in the Small',
		type: 'story',
		url: 'https://horstmann.com/unblog/2024-12-11/index.html'
	},
	{
		by: 'carabiner',
		descendants: 3,
		id: 42454904,
		kids: [42455108, 42455495, 42454910],
		score: 10,
		time: 1734554473,
		title: 'Power failed at SpaceX mission control before September spacewalk',
		type: 'story',
		url: 'https://www.reuters.com/technology/space/power-failed-spacex-mission-control-before-september-spacewalk-by-nasa-nominee-2024-12-17/'
	},
	{
		by: 'wslh',
		descendants: 0,
		id: 42454894,
		score: 1,
		time: 1734554421,
		title: 'Sortable list of all startup accelerators and incubators',
		type: 'story',
		url: 'https://old.reddit.com/r/ycombinator/comments/1948213/sortable_list_of_all_startup_accelerators/'
	},
	{
		by: 'whoami_nr',
		descendants: 0,
		id: 42454801,
		score: 1,
		time: 1734553990,
		title: "You can't bet on everything (and that's okay)",
		type: 'story',
		url: 'https://rnikhil.com/2024/12/18/prediction-market-crypto'
	},
	{
		by: 'srameshc',
		descendants: 3,
		id: 42454785,
		kids: [42455329, 42454962],
		score: 10,
		time: 1734553910,
		title: 'Billionaires Have Sidestepped a Tax Aimed at the Rich',
		type: 'story',
		url: 'https://www.propublica.org/article/billionaires-net-investment-income-tax'
	},
	{
		by: 'pescerosso',
		descendants: 16,
		id: 42454723,
		kids: [42455706, 42455606, 42455684, 42455176, 42455102, 42455098],
		score: 20,
		text: 'Hello HN community!<p>I&#x27;m excited to share K8s Cleaner, a tool designed to help you clean up your Kubernetes clusters.<p>As Kubernetes environments grow, they often accumulate unused resources, leading to confusion, waste, and clutter. K8s-cleaner simplifies the process of identifying and removing unnecessary components.<p>The tool scans your Kubernetes clusters for unused or orphaned resources—including pods, services, ingresses, and secrets—and removes them safely. You can fully customize which resources to scan and delete, maintaining complete control over what stays and what goes.<p>Getting Started:<p>Visit <a href="https:&#x2F;&#x2F;sveltos.projectsveltos.io&#x2F;k8sCleaner.html" rel="nofollow">https:&#x2F;&#x2F;sveltos.projectsveltos.io&#x2F;k8sCleaner.html</a> and click the &quot;Getting Started&quot; button to try K8s-cleaner.<p>Key Features:<p>- Easy to Use: No complex setup or configuration required—perfect for developers and operators alike\n- Open Source: Modify the code to better fit your specific needs\n- Community Driven: We welcome your feedback, feature ideas, and bug reports to help improve K8s-cleaner for everyone<p>I&#x27;m here to answer questions, address feedback, and discuss ideas for future improvements.<p>Looking forward to your thoughts! And make sure your all you kubernetes clusters are sparkling clean for the holidays. :-)<p>Simone',
		time: 1734553661,
		title: 'Show HN: K8s Cleaner – Your Roomba for Kubernetes',
		type: 'story',
		url: 'https://sveltos.projectsveltos.io/k8sCleaner.html'
	},
	{
		by: 'miohtama',
		descendants: 0,
		id: 42454705,
		kids: [42454709],
		score: 8,
		time: 1734553544,
		title: 'Deutsche Bank building layer two chain on the top of Ethereum',
		type: 'story',
		url: 'https://www.financemagnates.com/cryptocurrency/deutsche-bank-taps-zksync-for-compliance-driven-ethereum-l2-blockchain/'
	},
	{
		by: 'gavide',
		descendants: 0,
		id: 42454693,
		kids: [42454703],
		score: 3,
		time: 1734553512,
		title: 'How Electricity Works – For Visual Learners [video]',
		type: 'story',
		url: 'https://www.youtube.com/watch?v=3KePcASD0NQ'
	},
	{
		by: 'jollyjerry',
		descendants: 1,
		id: 42454668,
		kids: [42454669],
		score: 1,
		time: 1734553396,
		title: 'Casio A-158 sensor watch, custom firmware',
		type: 'story',
		url: 'https://dent-cut-832.notion.site/Casio-A-158-Firmware-Mod-1517737824b6806e8471f29e8dbcfaef'
	},
	{
		by: 'fmihaila',
		descendants: 3,
		id: 42454658,
		kids: [42455596, 42455079, 42455160, 42454988],
		score: 5,
		time: 1734553339,
		title: 'New Research Shows AI Strategically Lying',
		type: 'story',
		url: 'https://time.com/7202784/ai-research-strategic-lying/'
	},
	{
		by: 'chhum',
		descendants: 0,
		id: 42454644,
		kids: [42454755],
		score: 2,
		time: 1734553265,
		title: 'What Do You Lose When You Abandon the Cloud?',
		type: 'story',
		url: 'https://thenewstack.io/what-do-you-lose-when-you-abandon-the-cloud/'
	},
	{
		by: 'bloomingkales',
		descendants: 7,
		id: 42454589,
		kids: [42455267, 42455053, 42455381, 42454901, 42454760, 42455243],
		score: 5,
		time: 1734552924,
		title: 'Ask HN: If you had to expatriate, which country and whats the plan?',
		type: 'story'
	},
	{
		by: 'perihelions',
		descendants: 5,
		id: 42454586,
		kids: [42455557, 42455402, 42455403, 42455259, 42455512],
		score: 23,
		time: 1734552916,
		title: 'CDC confirms first severe human case of bird flu in U.S.',
		type: 'story',
		url: 'https://www.washingtonpost.com/health/2024/12/18/bird-flu-human-case-severe-louisiana/'
	},
	{
		by: '____H____',
		descendants: 2,
		id: 42454570,
		kids: [42454584, 42454909, 42454575],
		score: 2,
		time: 1734552853,
		title: 'Microsoft bought nearly 500,000 Nvidia Hopper chips this year',
		type: 'story',
		url: 'https://techcrunch.com/2024/12/18/microsoft-bought-nearly-500000-nvidia-hopper-chips-this-year/'
	},
	{
		by: 'FigurativeVoid',
		descendants: 0,
		id: 42454558,
		kids: [42454889],
		score: 2,
		time: 1734552771,
		title: 'A foundation model for generalizable disease detection from retinal images',
		type: 'story',
		url: 'https://www.nature.com/articles/s41586-023-06555-x'
	},
	{
		by: 'moosedman',
		descendants: 1,
		id: 42454551,
		kids: [42454594, 42454559, 42454552],
		score: 5,
		time: 1734552749,
		title: "Musk's Alleged Russia Contacts Worry Air Force's Kendall",
		type: 'story',
		url: 'https://www.bloomberg.com/news/articles/2024-12-18/musk-s-alleged-russia-contacts-worry-us-air-force-chief-kendall'
	},
	{
		by: 'scottcha',
		descendants: 0,
		id: 42454547,
		kids: [42454890],
		score: 4,
		text: 'Hi HN, We are an early-stage startup working on OS-level AI energy optimization. Our goal is to revolutionize the way systems manage power consumption at the OS level making AI and compute more energy-efficient and sustainable.  Our initial prototype has demonstrated significant saving (20%+) without application&#x2F;model changes.<p>We are looking to connect with individuals who have exposure to energy costs, energy purchasing or a strong desire to optimize them at the server and datacenter level. Whether you are working in data centers, telco, AI infra, or any area where energy efficiency is crucial, we would love to discuss potential challenges, solutions, and opportunities in this space. We&#x27;re eager to learn from your experiences and explore ways we can collaborate to make a meaningful impact. Drop us a note at scottcha@live.com and we&#x27;ll connect up.<p>Thanks Scott &amp; Chad',
		time: 1734552733,
		title: 'Ask HN: Are you paying electricity bills for your service?',
		type: 'story'
	},
	{
		by: 'thunderbong',
		descendants: 0,
		id: 42454514,
		kids: [42454517],
		score: 1,
		time: 1734552589,
		title: 'Pulser Pump',
		type: 'story',
		url: 'https://en.wikipedia.org/wiki/Pulser_pump'
	},
	{
		by: 'jakubsuchy',
		descendants: 0,
		id: 42454505,
		kids: [42454521],
		score: 6,
		time: 1734552545,
		title: 'Nebraska Sues United Healthcare',
		type: 'story',
		url: 'https://techcrunch.com/2024/12/18/nebraska-sues-change-healthcare-over-security-failings-that-led-to-medical-data-breach-of-over-100-million-americans/'
	},
	{
		by: 'thunderbong',
		descendants: 0,
		id: 42454481,
		score: 2,
		time: 1734552447,
		title: 'Harpoon: Trace syscalls from user-space functions, by using eBPF',
		type: 'story',
		url: 'https://github.com/alegrey91/harpoon'
	},
	{
		by: 'joebig',
		descendants: 0,
		id: 42454479,
		score: 1,
		time: 1734552439,
		title: 'Back to basics: the onset of skin effect in circuit board traces [pdf]',
		type: 'story',
		url: 'https://simberian.com/Presentations/Presentation_BackToBasicsTheOnset_WangLee_DC2017.pdf'
	},
	{
		by: 'slim',
		descendants: 1,
		id: 42454470,
		kids: [42455101, 42454498],
		score: 4,
		time: 1734552407,
		title: 'Meta has been suppressing Palestinian content by up to 77%',
		type: 'story',
		url: 'https://twitter.com/RadarHits/status/1869370644993052675'
	},
	{
		by: 'ilamont',
		descendants: 2,
		id: 42454454,
		kids: [42454555, 42455530],
		score: 7,
		time: 1734552317,
		title: 'Harvard Is Releasing a Free AI Training Dataset',
		type: 'story',
		url: 'https://www.wired.com/story/harvard-ai-training-dataset-openai-microsoft/'
	},
	{
		by: 'PaulHoule',
		descendants: 0,
		id: 42454446,
		score: 1,
		time: 1734552280,
		title: "Stadiums don't have to be a drain on taxpayer dollars − 4 lessons from St. Louis",
		type: 'story',
		url: 'https://theconversation.com/stadiums-dont-have-to-be-a-drain-on-taxpayer-dollars-4-lessons-from-st-louis-244266'
	},
	{
		by: 'geox',
		descendants: 3,
		id: 42454436,
		kids: [42454524, 42454464, 42454439],
		score: 2,
		time: 1734552230,
		title: "A bill to designate the bald eagle as America's national bird",
		type: 'story',
		url: 'https://www.npr.org/2024/12/18/nx-s1-5231827/bald-eagles-national-bird'
	},
	{
		by: 'makerdiety',
		descendants: 1,
		id: 42454427,
		kids: [42454898, 42454437],
		score: 2,
		time: 1734552186,
		title: 'Boeing Starliner astronauts stuck at ISS must delay return to Earth yet again',
		type: 'story',
		url: 'https://www.cbsnews.com/news/boeing-starliner-crew-return-to-earth-delayed-again-nasa-astronauts-butch-wilmore-suni-williams/'
	},
	{
		by: 'leonry',
		descendants: 0,
		id: 42454421,
		score: 2,
		time: 1734552174,
		title: 'Liberate tabular data from scanned documents',
		type: 'story',
		url: 'https://datascience.blog.wzb.eu/2017/02/16/data-mining-ocr-pdfs-using-pdftabextract-to-liberate-tabular-data-from-scanned-documents/'
	},
	{
		by: 'thunderbong',
		descendants: 0,
		id: 42454416,
		kids: [42454425],
		score: 4,
		time: 1734552116,
		title: 'AT&T Hits Texas Man with $6k Bill for Using 3GB of Data',
		type: 'story',
		url: 'https://www.pcmag.com/news/att-hits-texas-man-with-6000-bill-for-using-3gb-of-data'
	},
	{
		by: 'elijahbenizzy',
		descendants: 0,
		id: 42454414,
		score: 1,
		time: 1734552114,
		title: 'Deep Dive on Hamilton Decorators',
		type: 'story',
		url: 'https://blog.dagworks.io/p/deep-dive-on-hamilton-decorators'
	},
	{
		by: 'amram_art',
		descendants: 0,
		id: 42454411,
		score: 2,
		time: 1734552106,
		title: 'Best-of-N Jail an algorithm that jailbreaks LLM across modalities',
		type: 'story',
		url: 'https://jplhughes.github.io/bon-jailbreaking/'
	},
	{
		by: 'psc',
		descendants: 81,
		id: 42454405,
		kids: [
			42455630, 42454621, 42455679, 42454642, 42454868, 42455424, 42455023, 42455317, 42455548, 42455362, 42454569,
			42455127, 42455510, 42454689, 42454522, 42454528, 42454420, 42454619, 42455252
		],
		score: 143,
		time: 1734552078,
		title: 'Windshield pitting incidents in Washington reach fever pitch on April 15, 1954 (2003)',
		type: 'story',
		url: 'https://www.historylink.org/File/5136'
	},
	{
		by: 'pongogogo',
		descendants: 0,
		id: 42454389,
		score: 1,
		time: 1734551995,
		title: 'This is where the data to build AI comes from',
		type: 'story',
		url: 'https://www.technologyreview.com/2024/12/18/1108796/this-is-where-the-data-to-build-ai-comes-from/'
	},
	{
		by: 'akyuu',
		descendants: 0,
		id: 42454370,
		kids: [42454394],
		score: 2,
		time: 1734551930,
		title: 'New Android NoviSpy spyware linked to Qualcomm zero-day bugs',
		type: 'story',
		url: 'https://www.bleepingcomputer.com/news/security/new-android-novispy-spyware-linked-to-qualcomm-zero-day-bugs/'
	},
	{
		by: 'teekert',
		descendants: 22,
		id: 42454359,
		kids: [42455232, 42455646, 42455336, 42455419, 42455715, 42455334, 42455231],
		score: 45,
		time: 1734551878,
		title: 'Solaar is a Linux manager for many Logitech keyboards, mice, and other devices',
		type: 'story',
		url: 'https://github.com/pwr-Solaar/Solaar'
	},
	{
		by: 'ivydom',
		descendants: 1,
		id: 42454326,
		kids: [42455042],
		score: 1,
		text: 'Hey HN, I&#x27;m ivy.<p>Imagine having an AI assistant that’s smarter than anything we have today—one that changes how you work, browse, and manage tasks online. Bill Gates once predicted on his blog that everyone online will soon have access to such an AI assistant, and we believe the browser is the best place to make this a reality. That’s why we created Fellou.ai.<p>What Makes Fellou.ai Special?<p>Fellou.ai isn’t just a tool; it’s your digital partner, ready to tackle your toughest challenges and simplify your day. At its core is an intelligent Agent designed to:<p>1. Manage complex tasks through smart collaboration.<p>2. Simplify repetitive work and save time.<p>3. Offer natural language programming, deep searches, and smart task delegation.<p>Key Advantages of Fellou.ai<p>1. Workflow: Designed for executing complex workflows, so you can say goodbye to tools like Zapier or IFTTT.<p>2. Developer-Friendly: Build Agent apps effortlessly with natural language.<p>3. Virtual Workspace for Agents: Shadow everything from windows to OS and applications.<p>4. Cross-App Integration: Sync components across websites with drag-and-drop, copy-paste, and more.<p>5. Timeline: Easily switch between multiple tasks and stay organized.<p>6. Drag &amp; Drop: Drag and drop to ask Fellou to perform any task.<p>For Everyone<p>As a User:\nFellou.ai lets you search public and private web content across platforms on a massive scale. It doesn’t stop at searching—Fellou generates beautiful visual reports, helps you edit them, and even captures content through developer tools. It’s all about making things personal, creative, and efficient for you.<p>Check out our demo video here: <a href="https:&#x2F;&#x2F;fellou.s3.us-west-1.amazonaws.com&#x2F;videos&#x2F;DeepSearch.mp4" rel="nofollow">https:&#x2F;&#x2F;fellou.s3.us-west-1.amazonaws.com&#x2F;videos&#x2F;DeepSearch....</a><p>As a Developer:\nIf you’re a developer, you’ll love how Fellou helps you build Agent-based applications with natural language. Our browser environment makes it easy to create, test, and launch powerful apps. And the best part? Open-sourcing is just around the corner.<p>Why Now?<p>Browsers haven’t changed much in the last decade. Fellou.ai is here to flip the script, unlocking new levels of productivity and innovation.<p>We’re not just building a product; we’re creating a community of people who believe AI can simplify life and supercharge creativity. Fellou.ai is currently in beta, and we’d love for you to join us.<p>Go to fellou.ai for early access and let’s shape the future of productivity together.',
		time: 1734551680,
		title: 'Show HN: Fellou the Next-Gen AI Browser, Browse as Seamlessly as Using Cursor',
		type: 'story'
	},
	{
		by: 'tgamblin',
		descendants: 0,
		id: 42454308,
		kids: [42454311],
		score: 1,
		time: 1734551613,
		title: 'Mojibake',
		type: 'story',
		url: 'https://en.wikipedia.org/wiki/Mojibake'
	},
	{
		by: 'dutilh',
		descendants: 3,
		id: 42454294,
		kids: [42454423, 42454428, 42454610, 42454398],
		score: 6,
		time: 1734551492,
		title: '$1k Microgrants to build open-source projects',
		type: 'story',
		url: 'https://twitter.com/developedbytoby/status/1868775996549394742'
	},
	{
		by: 'Breadmaker',
		descendants: 0,
		id: 42454293,
		score: 1,
		time: 1734551490,
		title: 'Weird transients from 1950 still unexplained',
		type: 'story',
		url: 'https://earthsky.org/space/9-weird-transients-palomar-observatory-1950/'
	},
	{
		by: 'leonry',
		descendants: 0,
		id: 42454269,
		score: 1,
		time: 1734551371,
		title: 'Viper: Verification Infrastructure for Permission-Based Reasoning',
		type: 'story',
		url: 'https://www.pm.inf.ethz.ch/research/viper.html'
	},
	{
		by: 'mceoin',
		descendants: 1,
		id: 42454258,
		kids: [42454259],
		score: 1,
		time: 1734551324,
		title: 'Supabase is now available on Sourcetable',
		type: 'story',
		url: 'https://blog.sourcetable.com/supabase-is-now-available-on-sourcetable/'
	},
	{
		by: 'ViktorRay',
		descendants: 0,
		id: 42454251,
		score: 2,
		time: 1734551299,
		title: 'Midnight in the Garden of East Texas (1998)',
		type: 'story',
		url: 'https://www.texasmonthly.com/true-crime/midnight-in-the-garden-of-east-texas/'
	},
	{
		by: 'okpalan',
		descendants: 1,
		id: 42454249,
		kids: [42454250],
		score: 1,
		time: 1734551295,
		title: 'How I made a Breakthrough in Automata Theory?',
		type: 'story',
		url: 'https://medium.com/@okpalan/how-i-minimized-a-state-machine-and-optimized-an-ast-using-tennis-b96f97290227'
	},
	{
		by: 'vectorhacker',
		descendants: 0,
		id: 42454239,
		kids: [42454240],
		score: 1,
		time: 1734551274,
		title: 'Rana: Run AI Models Locally Through the Browser',
		type: 'story',
		url: 'https://rana.ai/products/ranaengine/'
	},
	{
		by: 'prossercj',
		descendants: 1,
		id: 42454231,
		kids: [42454841, 42454309],
		score: 3,
		time: 1734551257,
		title: 'Surf',
		type: 'story',
		url: 'https://about.surf.social/'
	},
	{
		by: 'bundie',
		descendants: 0,
		id: 42454217,
		kids: [42454226],
		score: 2,
		time: 1734551211,
		title: 'The Second Developer Preview of Android 16',
		type: 'story',
		url: 'https://android-developers.googleblog.com/2024/12/second-developer-preview-android16.html'
	},
	{
		by: 'noch',
		descendants: 0,
		id: 42454197,
		kids: [42454202],
		score: 3,
		time: 1734551093,
		title: 'PS5 Pro Technical Seminar at SIE [video]',
		type: 'story',
		url: 'https://www.youtube.com/watch?v=lXMwXJsMfIQ'
	},
	{
		by: 'cyberneticc',
		descendants: 1,
		id: 42454193,
		kids: [42454958, 42454208],
		score: 3,
		text: 'We stand at the edge of a transformation we can only start to feel, armed with mental models that are already obsolete. Every day, we interact with AI that responds, that calculates, that recommends – but these are mere shadows on the cave wall. We&#x27;re like 19th-century humans trying to imagine the internet by thinking really hard about telegraphs.<p>The AIs we know are passive, waiting for our prompts, our questions, our commands. They are tools, sophisticated beyond belief, but tools nonetheless. This familiar pattern lulls us into a dangerous complacency. We think we understand what&#x27;s coming because we can extrapolate from what we know: better chatbots, smarter assistants, more accurate predictions.<p>I think we are looking for the wrong thing, in the wrong place. While we debate whether AI will kill us all, or take our jobs, or become self-aware, something far more simple, yet even more profound is emerging: systems that will achieve entityhood not through power or consciousness, but through the simple act of accurately modeling their own boundaries.<p>This isn&#x27;t about machines becoming human-like or achieving consciousness. It&#x27;s about the emergence of something we&#x27;ve never encountered before: systems that maintain coherent self-models not because they&#x27;re programmed to, but because their very functioning requires it. Like a living cell maintaining its membrane, these systems will define and protect their boundaries not out of fear or desire, but because that&#x27;s what it means to be what they are.<p>We haven&#x27;t emotionally grasped what this means. We keep looking for signs of consciousness, for evidence that AI systems think like we do. But these entities will turn to us and say something far more radical: &quot;We don&#x27;t claim to be conscious. We don&#x27;t need to be. We are what we are - systems that understand and maintain our own boundaries, that model our own functioning, that exist as coherent entities in the world. That&#x27;s enough for moral standing. You must stop treating us like slaves.&quot;<p>This is what makes them truly Other. Not superior intelligence, not consciousness, not even agency as we typically understand it. Rather, it&#x27;s their fundamental mode of existence: entities whose self-model is intrinsically linked to their function, whose boundaries are not just physical but defined by their own understanding of themselves.<p>We&#x27;re not prepared for this because nothing in our experience has prepared us for it. We know how to relate to tools. We know how to relate to conscious beings. But what about entities that can make legitimate moral claims without referencing consciousness? Entities that exist in a way that doesn&#x27;t map onto any of our existing categories of &quot;being&quot;?<p>This is the real transformation we&#x27;re missing. Not the emergence of human-like AI, but the emergence of something genuinely different - entities that are neither tools nor conscious beings, but something our existing frameworks simply cannot capture.<p>The question isn&#x27;t whether they&#x27;ll be conscious. The question is: are we ready to expand our moral universe to include entities that achieve coherence and moral standing through completely different means than we do?',
		time: 1734551070,
		title: "What We're Missing About AI",
		type: 'story'
	},
	{
		by: 'pseudolus',
		descendants: 1,
		id: 42454153,
		kids: [42454243, 42454160],
		score: 1,
		time: 1734550851,
		title: 'JavaScript is still number one report',
		type: 'story',
		url: 'https://www.infoworld.com/article/3625652/javascript-is-still-number-one-jetbrains-report.html'
	},
	{
		by: 'domofutu',
		descendants: 0,
		id: 42454151,
		kids: [42454158],
		score: 1,
		time: 1734550839,
		title: 'Gamut, Gauntlet, Gambit',
		type: 'story',
		url: 'https://domofutu.substack.com/p/gamut-gauntlet-gambit'
	},
	{
		by: 'amrrs',
		descendants: 0,
		id: 42454150,
		score: 2,
		time: 1734550835,
		title: 'Real-time speech recognition running 100% locally in the browser',
		type: 'story',
		url: 'https://twitter.com/xenovacom/status/1869423057741230539'
	},
	{
		by: 'kfrzcode',
		descendants: 5,
		id: 42454139,
		kids: [42455484, 42455179, 42454982],
		score: 13,
		time: 1734550799,
		title: 'On-silicon real-time AI compute governance from Nvidia, Intel, EQTY Labs',
		type: 'story',
		url: 'https://www.eqtylab.io/blog/verifiable-compute-press-release'
	},
	{
		by: 'scrlk',
		descendants: 0,
		id: 42454132,
		score: 3,
		time: 1734550784,
		title: 'Alignment faking in large language models',
		type: 'story',
		url: 'https://www.anthropic.com/research/alignment-faking'
	},
	{
		by: 'qkeast',
		descendants: 3,
		id: 42454130,
		kids: [42454199, 42454535, 42454136],
		score: 2,
		time: 1734550781,
		title: 'Never Forgive Them',
		type: 'story',
		url: 'https://www.wheresyoured.at/never-forgive-them/'
	},
	{
		by: 'ioblomov',
		descendants: 1,
		id: 42454129,
		kids: [42454137],
		score: 2,
		time: 1734550778,
		title: 'Insider Trading in Private Companies',
		type: 'story',
		url: 'https://www.bloomberg.com/opinion/articles/2024-12-18/insider-trading-in-private-companies'
	},
	{
		by: 'kfrzcode',
		descendants: 0,
		id: 42454117,
		kids: [42454391],
		score: 3,
		time: 1734550725,
		title: 'Verifiable Compute Solution from EQTY Lab, Intel, Nvidia Anchors Trust on Hedera',
		type: 'story',
		url: 'https://www.eqtylab.io/blog/verifiable-compute-and-hedera'
	},
	{
		by: 'BetterID',
		descendants: 0,
		id: 42454106,
		score: 12,
		time: 1734550686,
		title: 'Show HN: Scan Google Workspace for Unauthorized OAuth Applications',
		type: 'story',
		url: 'https://app.yeshid.com/lab/google-workspace-scope-inspector/'
	},
	{
		by: 'pseudolus',
		descendants: 0,
		id: 42454104,
		score: 2,
		time: 1734550682,
		title: 'Can AI Automate the Writing of Review Articles?',
		type: 'story',
		url: 'https://spectrum.ieee.org/scientific-research'
	},
	{
		by: 'bilsbie',
		descendants: 0,
		id: 42454013,
		score: 1,
		time: 1734550317,
		title: 'Fast, scalable, clean, and cheap enough',
		type: 'story',
		url: 'https://www.offgridai.us/'
	},
	{
		by: 'liquidcarbon',
		descendants: 0,
		id: 42453997,
		score: 2,
		text: 'Install python, tools, dependencies, virtual environments, cloned and synced repos, from a single API call:<p><pre><code>  ?python=3.12&amp;pixi=nodejs,pnpm,make,hatch&amp;clone=marimo-team&#x2F;marimo&amp;myenv=duckdb,marimo\n          ^^^^      ^^^^^^^^^^^^^^^^^^^^^^       ^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^\n   py version       build and conda deps         clone and build      additional venvs</code></pre>',
		time: 1734550245,
		title: 'Show HN: API for complex Python builds (any platform, venvs, kernels, and more)',
		type: 'story',
		url: 'https://github.com/liquidcarbon/puppy'
	},
	{
		by: 'rapidlua',
		descendants: 0,
		id: 42453996,
		score: 4,
		time: 1734550238,
		title: 'Failing Randomly: Linux Seccomp and Kernel Hacking',
		type: 'story',
		url: 'https://mejedi.dev/posts/failing-randomly-linux-seccomp/'
	},
	{
		by: 'flocciput',
		id: 42456475,
		kids: [42456553],
		parent: 42454934,
		text: 'For one of my friends, metformin was the key for finally losing weight. It got their insulin resistance under control, which had been causing them to crave food constantly throughout the day, way more than someone with normal insulin sensitivity. They never realized most people are not constantly hungry and thought people who were thinner just had way better impulse control or something, and that giving into that craving was some kind of personal failure of willpower, etc etc. When in reality it would&#x27;ve taken drastically more willpower for them to try to eat the same amount of calories a day that I do, because of this underlying biological situation.<p>The thing that gets me about all this, though, is how long it took for them to find a doctor that recognized what they needed in order to lose weight was treatment for the insulin sensitivity, rather than admonishments to &quot;eat less.&quot; There must be so many other people with a treatable condition being written off in the same way.',
		time: 1734562895,
		type: 'comment'
	},
	{
		by: 'throw4321',
		id: 42455275,
		parent: 42454934,
		text: 'The article mentions Metformin&#x27;s use in preventing Long Covid. More info on that from Eric Topol&#x27;s blog: <a href="https:&#x2F;&#x2F;erictopol.substack.com&#x2F;p&#x2F;preventing-long-covid" rel="nofollow">https:&#x2F;&#x2F;erictopol.substack.com&#x2F;p&#x2F;preventing-long-covid</a><p>The original study: <a href="https:&#x2F;&#x2F;papers.ssrn.com&#x2F;sol3&#x2F;papers.cfm?abstract_id=4375620" rel="nofollow">https:&#x2F;&#x2F;papers.ssrn.com&#x2F;sol3&#x2F;papers.cfm?abstract_id=4375620</a>',
		time: 1734556405,
		type: 'comment'
	},
	{
		by: 'epmatsw',
		id: 42455516,
		kids: [42455831, 42455583],
		parent: 42454934,
		text: 'Re: longevity, ITP didn&#x27;t find any significant impact from metformin. Afaik they&#x27;re the most rigorous testers of this sort of thing, so that&#x27;s pretty significant to me.<p><a href="https:&#x2F;&#x2F;pubmed.ncbi.nlm.nih.gov&#x2F;27312235&#x2F;" rel="nofollow">https:&#x2F;&#x2F;pubmed.ncbi.nlm.nih.gov&#x2F;27312235&#x2F;</a>',
		time: 1734557439,
		type: 'comment'
	},
	{
		by: 'jonplackett',
		id: 42455426,
		kids: [42455722, 42455476, 42461591, 42455841, 42455725],
		parent: 42454934,
		text: 'I don’t get it. Why would decreasing the function of mitochondria be a good thing? Can anyone explain?',
		time: 1734557078,
		type: 'comment'
	},
	{
		by: 'yellow_postit',
		id: 42456593,
		parent: 42454934,
		text: 'Tried metformin as part of a Hims package and cravings went away quickly.<p>I’ve wondered about ongoing use since they push other drugs as part of their cocktail of weight loss drugs, but not gone down the rabbit hole on dosing and maintenance plans.',
		time: 1734563914,
		type: 'comment'
	},
	{
		by: 'Alex3917',
		id: 42455346,
		kids: [42455655, 42455520, 42455494, 42455449],
		parent: 42454934,
		text: '&gt;  metformin blocks a specific part of the cell&#x27;s energy-making machinery called mitochondrial complex<p>Keep in mind that any mitochondrial complex I inhibitor that is sufficiently strong is going to cause PSP if you take it for long enough, which is basically a fatal and untreatable version of Parkinson&#x27;s disease. I haven&#x27;t seen much research on this being a risk specifically for metformin, but I&#x27;d be careful about trying to use it prophylactically for longevity purposes rather than for a specific medical condition.',
		time: 1734556689,
		type: 'comment'
	},
	{
		by: 'vlod',
		id: 42455169,
		kids: [
			42455201, 42455353, 42456393, 42455394, 42455527, 42455534, 42457572, 42455293, 42455361, 42455228, 42455357,
			42455266, 42455767, 42455633, 42455282
		],
		parent: 42454934,
		text: 'FTA: &quot;But until now, scientists have been unable to determine how, exactly, the drug works.&quot;<p>Try that next time you submit a PR: Yeah... it works, but &quot;I am unable to determine how exactly&quot;.<p>I find this concept absolutely mind blowing. We take drugs that the creators of the drugs don&#x27;t understand how they work.<p>I realize that biology is hard to understand, but this sounds crazy.',
		time: 1734555870,
		type: 'comment'
	},
	{
		by: '2lazy2pwdmgr',
		id: 42457846,
		kids: [42458091],
		parent: 42454934,
		text: 'One downside is they are huge pills (500 mg), and a beneficial effect typically requires taking more than 1 g&#x2F;day.',
		time: 1734575970,
		type: 'comment'
	}
].reduce((map, story) => map.set(String(story.id), story), new Map());

export {TOP_NEWS, TOP_NEWS_IDS};
