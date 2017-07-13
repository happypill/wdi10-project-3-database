// load in the environment vars


var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/brace', function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/event'
  ])

  // Clear specified collections
  seeder.clearModels(['Event'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  { // CO-WORKING SPACES
    'model': 'Event',
    'documents': [
      {
        'name': 'The Great Room',
        'address': '1 George Street #10-01, Singapore 049145',
        'website': 'http://thegreatroomoffices.com',
        'description': 'The Great Room sets itself apart as a hospitality-inspired workplace, combining the emotional appeal of a luxury hotel with the productivity of a professional workplace. Situated in the heart of the CBD, this 15,000 sq ft workspace aims to change the way you feel about going to work, and is exactly where you want to bring partners, clients and investors. The Great Room welcomes leaders and launchers hailing from the technology, creative and finance industries. It has also pioneered the ‘hot office’ concept, which are private offices available on demand for one to four people.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Hive',
        'address': '59 New Bridge Road, Singapore',
        'website': 'http://thehive.sg/about/',
        'description': 'A beautifully designed workspace in the city centre. The Hive Singapore is designed for your way of working and living – a comfortable and welcoming environment where your business can thrive. You will be joining a coworking community that spans three countries, giving you access to a wonderfully diverse network.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Hub',
        'address': '128 Prinsep Street, Singapore 188655',
        'website': 'http://singapore.impacthub.net/homepage',
        'description': "The Hub Singapore knows that it takes courage to pursue life on your own terms. That's why they've built a home for courageous people and businesses to work together. They close social distances, enabling you to launch your ventures and scale your businesses.\nMore than just a coworking space, they're a trusted community, stimulating events platform, and a base from which to launch your business and scale your impact. At The Hub Singapore, find co-conspirators, mentors, investors, creators, partners and allies. They are the only space to bring together people serious about pursuing purpose-- whether it is personal purpose through self-actualization, or societal purpose in solving the most pressing issues of today.",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Refinery',
        'address': "115 King George's Avenue #01-02, Singapore 208561",
        'website': 'http://www.therefinery.sg/',
        'description': 'This hip three-in-one space is set up by The General Company, the same folks who spearhead Tyrwhitt General Company and design firm Architology. The Refinery houses a yakitori joint, a bespoke cocktail bar and a craft workshop. Table spaces start from $450 a month and you also get free coffee and whisky too. Plus, there are also designers around to offer friendly advice and the stay open all hours of the day.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Working Capitol',
        'address': '1 Keong Saik Rd, Singapore 089109',
        'website': 'https://www.theworkingcapitol.com/en',
        'description': "It takes over the historic AIA building and merges five shophouses into one giant co-working space. This space is open plan with lots of light from the shuttered windows, despite the fact that it's decked out in a mandatory white washed color scheme. The co-working space also has private offices and a dedicated events venue with a pretty flexible schedule: you can book on a daily basis or have a permanent space. It's also home to a cafe, The People Vs., with a selection of coffees, teas, breads and the likes.",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Art Social Haus',
        'address': '11 Yong Siak St, Singapore 168646',
        'website': 'http://www.facebook.com/artsocialhaus',
        'description': 'Arts Social Haus is an independent co-working art space, where members are granted 24 hour access to the studio and events areas. Membership fees start at $280 per month for one person, and includes working facilities and free admission to exhibitions held at the venue during the membership period. They stay open all day as well.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Bash',
        'address': '#03-01, 79 Ayer Rajah Crescent, Singapore 139955',
        'website': 'http://www.infocomminvestments.com/BASH.html',
        'description': 'BASH (Build Amazing start-ups Here), is Singapore’s biggest integrated start-ups space with the capability of congregating members and partners of the tech building community across the entire value chain of ideation, acceleration, incubation to expansion – from accelerators, investors, incubators to entrepreneurship - all under one roof.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Co.Lab by Silicon Straits',
        'address': '71 Ayer Rajah Crescent, Singapore 139951',
        'website': 'http://colab.siliconstraits.com/',
        'description': "CO.LAB - a co-working space, fabrication lab and collaboration zone spanning 2,000 sq ft in the heart of Singapore's startup hub, Blk 71",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Collective Works',
        'address': '100 Cecil St, Singapore 069532',
        'website': 'http://www.collective.works/',
        'description': 'Collective Works was designed from the ground up to look and operate differently. Our space incorporates many of the latest trends in commercial office planning: The design is based on a creative studio layout with facing ‘coworkstations’ a design which encourages members to collaborate while they work. Our flexible informal meeting areas like our lounge and huge kitchen encourage interaction and serendipitous meetings. Meanwhile the use of multi-height work surfaces and flexible furniture arrangements give members the option to work where they want and how they want encouraging creativity.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Cowerkz',
        'address': '259A Geylang Road, Singapore',
        'website': 'http://www.cowerkz.com/',
        'description': 'CoWerkz is a newly renovated serviced office, offering a refreshing and peaceful office space sanctuary for work with private rooms. Our suite of services cater to a wide range of client requirements from Office Space Rental to Virtual Office service. We want to encourage young entrepreneurs to "Start, Run & Grow your Business" - having a ready-to-go, fully-functional office space with brand new furniture, business address, office phone line, wifi/lan, administrative support and many more. We have different room sizes to cater from single to 3 work desks.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'HackerspaceSG',
        'address': '344B King George’s Ave, Singapore 208576',
        'website': 'https://hackerspace.sg/',
        'description': 'There are hundreds of hacker spaces around the world, and Singapore’s version brings together communities of tech, science, fermentation, music, digital arts and electronic arts. Offering the option to cowork during the day, Hackerspace also holds regular events, meetups, presentations, workshops and movie nights for the local community. The space is popular with tech startups and has a range of facilities, including three 3D printers and a bank of development boards to boost collaboration. Regular members pay $128/month, Add-ons such a rented locker spaces and an office address are also available for a small additional monthly fee. There are also open online communities that is accessible to even non members.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'HauteDesk',
        'address': '105 Cecil St, Singapore 069534',
        'website': '',
        'description': 'HauteDesk co-working space is located in Central Business District, near to Telok Ayer MRT and Lau Pa Sat. The vicinity is the most vibrant corporate neighbourhood in the prime of Singapore. It is the stronghold of international corporations and distinguished local businesses. A place where top talents worldwide gather to make and live their dreams. We aim to be a platform to synergize the ideas, talents and opportunities offered by the city for entrepreneurs, innovators, and pioneers alike.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Hired Turf',
        'address': '883 North Bridge Rd, Singapore 198784',
        'website': 'http://hiredturf.com/',
        'description': 'We are a coworking space that provides relaxed atmosphere for creative people. Our workspace is a two-storey open-concept office, consisting of 20 seats and a medium sized meeting room.\nWe strive to build a community of professionals: startup peeps, software engineers, graphic designers, product designers and social media strategists. We provide professional office chairs, 23-inch IPS LED monitors, fast speed Internet connection to make HiredTurf one of the most comfortable and desired work place in town.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Inner City Offices',
        'address': '229 Mountbatten Rd, Singapore 398007',
        'website': 'http://icosg.com/',
        'description': 'Providing a fully-equipped office space to get your work done. Fully furnished with pantry and meeting rooms.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'JC8 at Cowork@SG',
        'address': '8 Joo Chiat Terrace, Singapore 427181',
        'website': 'http://cowork.sg/',
        'description': "We provide the most flexible work spaces in Singapore through membership or pay-per-use. Every member gets to enjoy access to any of Cowork@SG's workspaces, with low commitment term of 6 months. It's as simple as plug and play!",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'JustCo',
        'address': '#15-01, 120 Robinson Rd, 068913',
        'website': 'http://www.justcoglobal.com/',
        'description': 'A creative coworking and hot desking space in Singapore to suit your every need! At JustCo we endeavor to foster a creative environment, with a myriad of brilliant individuals and organizations vibing off each other to produce stunning work. We are excited to have fresh new individuals or organizations join our ever-growing community.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Keong Saik Collab',
        'address': '29 Keong Saik Rd, Singapore 089136',
        'website': 'http://www.keongsaikcollab.com/#frame-start',
        'description': 'Keong Saik Collab | 白社会 is a co-working space that is fueled with do-ers and passion driven folks who form this energetic space at Keong Saik Road. Working with like minded people to make things happen in this tiny red dot, we are a community that bask in collaborations, partnerships and ownership.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'MakeSpace',
        'address': "318C King George's Ave, Singapore 208563",
        'website': 'http://makespace.sg/',
        'description': 'Makespace provides an open, collaborative-driven environment where innovative businesses and individuals can flourish. We provide all your basic needs, so you focus on getting the job done. Makespace is yOUR Space! Do drop by to visit us. There is no better way to experience Makespace & Coworking.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Mettle Work',
        'address': '50 Lorong 17 Geylang, Singapore',
        'website': 'http://mettlework.co/',
        'description': "Mettle Work is a 24 hour place ideal for last minute design proposal making and mad dash for late night Dim Sum across the street. Mettle Work isn't your typical office though, as each user will have warehousing, production work bench and tinkering space. In short, it is a place for hustle and bustle of prototyping, modelling and craft.",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Plug-in@Blk71',
        'address': '71 Ayer Rajah Crescent, #02-18, Singapore 139951',
        'website': 'http://www2.blk71.com/',
        'description': 'At Blk71, we like to get creative with our spaces. Like how start-ups love using the kopitiam-themed pantry in NUS Enterprise@Blk71 for business huddles. Or how a simple lobby wall has been transformed into a colourful canvas of entrepreneurial visions and art.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'plusconcept',
        'address': '16 Purvis St, Singapore 188595',
        'website': 'http://www.plusconcept.space/',
        'description': 'Your professional home to focus, grow your business and to simply getting things done in a great & trusted environment.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Red Dot Ventures',
        'address': '#04-04, 79 Ayer Rajah Crescent, Block 79, Singapore 139955',
        'website': 'http://www.rdvspace.strikingly.com/',
        'description': '',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'SiTF House',
        'address': '79 Ayer Rajah Crescent #02-03, Singapore 139955',
        'website': 'http://www.sitf123js.com/',
        'description': "SITF House located at block 79 right in the heart of Singapore's startup community puts you within reach of venture capital firms, incubators, government agencies and other tech startups. We provide modern collaborative facilities such as: discussion rooms, conference rooms, 24 hours access to co-working offices, pantry and lounge as well as training facilities amongst basic office necessities such as photocopying, printing, air-conditioning and wifi.",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Smartspace',
        'address': '261 Waterloo Street, Singapore 180261',
        'website': 'http://www.smartspace.sg/',
        'description': 'This is another one of the cool shared spaces at arts enclave Bras Basah, a huge 8,000 sq. ft. space with meeting rooms, kitchen areas, work stations, private desks, and even space for a spot of table tennis. It’s also user-friendly and accessible per-hour booking rates with work stations starting from $30 a day and going up to $600 a month. This space also lets you work late and is open round the clock.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'SpringBoard',
        'address': '19 Cecil Street, Singapore',
        'website': 'http://springboard.sg/',
        'description': 'We are passionate about supporting entrepreneurs and small businesses. We provide a one-stop service to setup your business in Singapore. For those clients that choose our space in central Singapore it provides a contemporary space in the heart of Singapore’s CBD district. Our space has all the services you need so that you can do what you are good at and leave the rest to us.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Startup Spaze',
        'address': '36 Purvis Street, Singapore 188613',
        'website': '',
        'description': 'We provide a conducive and collaborative community working space for entrepreneurs, founders and startups to work in. A cost efficient place with incredible environment for you to work on your startup. You focus on your startup and we will handle the rest.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Technopreneur Circle',
        'address': '250 North Bridge Road #05-01, Singapore 179101',
        'website': 'https://www.technopreneurcircle.com/',
        'description': 'A free co-working space launched by Vertex Venture. The space itself is relatively small and humble — it looks like a big conference room that has been spruced up with nice interior design and the basics to get work done — tables, chairs, free Wi-Fi. But it does have a great location, in the heart of the city on the fifth floor of Raffles City Tower.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Co',
        'address': '75 High Street, Singapore 179435',
        'website': 'http://jointhe.co/',
        'description': "For those used to hot-desking and minimalist spaces, this eight-storey building fits the bill. It has a dark, glossy lobby that's no stranger to buzzy corporate parties, and an open concept third level that's hosted the likes of Startup Grind and Elance, making it quite a focus for those on trend with the local scene. Individual desks go for $45 a day, $350 for 10 visits a month and $600 monthly, while a swanky office suite can set you back $700-990 per person.",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Loft Offices',
        'address': '46 South Bridge Road, Singapore',
        'website': 'http://www.theloftoffices.com/',
        'description': 'The Loft Offices is not just about a work or event space, but about a collaborative working environment where businesses can grow together. One of our highlights is a creative, stimulating open-concept working space. Think of it as working in an idea room – this space is well-suited for young growing start-ups, who wish to establish a foothold from the heart of the city.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'The Outpost',
        'address': '14 Lorong 32, Singapore 398277',
        'website': 'http://theoutpost.biz/',
        'description': 'The OutPost offers a unique coworking space in Singapore that caters to entrepreneurial growth companies entering the Southeast Asian markets.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Trehaus',
        'address': '#03-01, 442 Orchard Rd, Singapore 238879',
        'website': 'http://trehauscowork.com/',
        'description': 'Trehaus is Singapore’s first co-working space complete with child-friendly learning facilities. Being a working and present parent can be challenging, and it’s for this very reason that we were built.\nWe offer you the option of bringing your children to work at a conducive workspace – so that while you build your career, your little ones can build their minds too.\nWe’re for every parent and every business that embraces the peace of mind that comes with being able to work in a flexible and enriching environment, while keeping their little ones close.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Woolf Works',
        'address': '19 Carpenter Street, #05-01, Singapore 059908',
        'website': 'http://www.woolfworks.sg/en',
        'description': 'Singapore’s first women-only co-working space—named after literary icon Virginia Woolf—is dedicated to developing female business leaders. It connects women with a like-minded community, helps them collaborate with other business owners and provides a space that allows them to separate work and home lives. Freelancers, coaches and consultants are among the people who use our space.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Work Central',
        'address': '190 Clemenceau Avenue, Singapore',
        'website': 'http://www.workcentral.com.sg/',
        'description': 'At Work Central, we are obsessed about creating fun yet functional works places for entrepreneurs and small business owners. We create thriving communities and ecosystems comprising of -people solving problems and driving profits. Our goal is to help you do your best work possible everyday. We want you to focus on what’s important to your business, and leave the rest to us. We know that reliable and fast internet, meeting rooms and coffee are mainstays of any good workspace, but that is just the beginning. We’ve lined up a selection of helpful service providers and business partners, and will continue to bring in more useful and relevant resources to support your work and business needs.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Workhouse',
        'address': '60 Upper Weld Road\nSingapore 207413',
        'website': 'http://www.ourworkhouse.com/',
        'description': "Workhouse Co-Working Space presents a unique space for entrepreneurs, start-ups and SMEs to come together in a single venue to inject creativity and change into today's world and society. Featuring a flexible and modular design and facilities fully customizable to your needs, leave your burdens behind and focus on what you do best: making an impact with your startup team, associates and friends.",
        'logo': '',
        'type': '',
        'image': ''
      }
    ]
  },
  { // INCUBATORS-ACCELERATORS
    'model': 'Incubator_Accelerator',
    'documents': [
      {
        'name': '10k',
        'address': '',
        'website': 'http://10k.asia/',
        'description': '10k VC and Startup Accelerator is specialised in incubating global startups and entrepreneurs. With some hub locations in Asia they connect young startups to the right pool of entrepreneurs and investors. They just opened a new center at Clarke Quay Singapore.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'AccelerAsia Pte Ltd',
        'address': '30 Bukit Pasoh Road Singapore 089844',
        'website': 'http://www.accelerasia.com/',
        'description': 'It helps rapidly growing companies to grow in Southeast Asia and has a strong track record in industries such as Telecommunications, Digital Media & Publishing and SaaS/Cloud Services.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Angel’s Gate Advisory Pte Ltd (closed)',
        'address': '71 Ayer Rajah Crescent #03-26 Singapore 139951',
        'website': 'http://angelsgateadvisory.sg/',
        'description': 'Angel’s Gate Advisory Pte Ltd is an appointed i.JAM Reload incubator. Funded by the Media Development Authority (MDA) of Singapore, this programme aims to support budding technopreneurs with up to S$250,000 (about US$200,000) seed funding and grow their startups into profitable growing businesses.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'MDA iJams'
      },
      {
        'name': 'Apple Seed Pte Ltd',
        'address': 'Block 71 Ayer Rajah Crescent #06-03 Singapore 139951',
        'website': 'http://appleseedpl.com/wp/',
        'description': 'Supported by Spring Singapore, Apple Seed is a Singapore based venture accelerator incubating startups with Go-to-Market, internationalisation, fund raising and management support.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Azione Capital Pte Ltd',
        'address': '1 Kaki Bukit Road 1, 415934',
        'website': 'http://www.azionecapital.com/',
        'description': 'Azione Capital Pte Ltd is an early-stage venture capital investment company and startup business incubator headquartered in Singapore. The company specialises in mentoring, incubating and investing in digital media, mobile communications (inclusive of the full spectrum of wireless technologies), energy and maritime industry startups that operate primarily within Asia.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Clearbridge Accelerator Pte Ltd',
        'address': '81 Science Park Drive, #02-03 The Chadwick, Singapore, Science Park 1, Singapore 118257',
        'website': 'http://www.clearbridgeaccelerator.com/',
        'description': 'Clearbridge Accelerator invests mainly in healthcare, infosecurity and technology companies. Its team consists of serial entrepreneurs with experience in key markets such as the US, China, Japan and Australia. Via a public-private partnership with the Singapore Government, Clearbridge Accelerator manages both a S$40 million (about US$32 million) fund to invest in life science companies, and an incubator scheme that invests up to S$1 million (about US$0.8 million) for seed-stage companies with a heavy focus on Asia.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Crystal Horse Investments',
        'address': 'Blk 71 Ayer Rajah Cres, #06-16 Singapore 139951',
        'website': 'http://ch-investments.com.sg/wp/',
        'description': 'Crystal Horse helps startups with various business-related activities that typically includes legal, accounting, marketing, strategic and technical areas. Most of its investments are in the web, mobile and general Internet space.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'MDA iJams'
      },
      {
        'name': 'East Ventures',
        'address': '',
        'website': 'http://east.vc/',
        'description': "East Ventures is a seed-early stage venture capital firm based in Singapore, Indonesia & Tokyo.\nIt is founded in 2010 by co-founder of Mixi.jp and other prominent investors/entrepreneurs in Asia. They've invested in over 150 companies ranging internet startups on commerce, social, game, & mobile services.\nThey have 2 incubation offices in the center of Tokyo that will help foreign startups to enter Japanese market. Their investment team is one of the most experienced since the dawn of Japanese internet industry and holds strong network across Asia. Offices are located in Jakarta, Singapore and Tokyo.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Entrepreneur First (EF)',
        'address': '',
        'website': 'http://www.entrepreneurfirst.sg/what-we-do/#new-page',
        'description': "Entrepreneur First is where the most ambitious and talented computer scientists and engineers build their companies from scratch. You don't need a team or fixed idea to apply. We help you find a co-founder, get customers, and raise funding from top investors.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Expara',
        'address': '#02-10/11, Blk 71 Ayer Rajah Crescent, Singapore 139951',
        'website': 'http://expara.com/',
        'description': 'Expara is a venture creation company established in Singapore since 2003. Expara develops and teaches entrepreneurship, innovation and venture finance through experiential training programmes and innovation challenges for entrepreneurs, corporations and public institutions in Southeast Asia. Douglas Abrams, the Founder of Expara, has been investing, teaching, training and mentoring entrepreneurs in Singapore since 2000 and has been focussed on the interactive and digital media space since Expara’s inception.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'MDA iJams'
      },
      {
        'name': 'Fatfish MediaLab',
        'address': '71 Ayer Rajah Crescent #02-15, Singapore 139951',
        'website': 'http://www.fatfishlab.com/',
        'description': 'A Singapore based incubator and investor that is laser-focused on a particular segment of the interactive digital media (IDM) space: mobile and social media apps. The Fatfish team is an ensemble of experienced entrepreneurs and investors who know the digital media market place well with extensive track records. Fatfish aims to adopt a co-entrepreneurship model to help its incubatee to succeed at the fastest and smartest way possible.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'MDA iJams'
      },
      {
        'name': 'FocusTech Ventures',
        'address': '3 Science Park Drive, #02-12/25, The Franklin, Singapore Science Park 1, Singapore 118223',
        'website': 'http://www.focustechventures.com/',
        'description': 'FocusTech Ventures supports founders that seek to solve real world problems and radically improve crucial workflows of and pervasive inefficiencies in major enterprise industries such as energy, finance, education, manufacturing and healthcare.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'MDA iJams, SPRING TECs'
      },
      {
        'name': 'Get2Volume',
        'address': '67 Ayer Rajah Crescent Unit 03-20 Singapore 139950',
        'website': 'http://www.get2volume.com/',
        'description': "Get2Volume, headquartered in Singapore, invests in, mentors and helps grow innovative startup companies. Get2Volume offers global capabilities, capital and connections to enable success. Get2Volume invests in and helps grow innovative technology companies in Singapore. Our company brings global capabilities, capital and connections in Silicon Valley and Singapore to provide mentorship and operational and execution expertise. Get2Volume co-funds its projects with the Singapore National Research Foundation.\nWe bring investment, industry connections and deep knowledge to complement a startup's entrepreneurial team and address focused growth needs. Our experience in successfully growing and exiting enterprise and microelectronics-centric companies allows us to help the companies we work to grow faster.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Golden Gate Ventures',
        'address': '113 Somerset Road, Singapore 238165',
        'website': 'http://goldengate.vc/',
        'description': 'Golden Gate Ventures is a seed-level investment firm that focuses on companies building out consumer Internet products and services for Southeast Asia. The company has a presence in Singapore, Indonesia, Malaysia, the Philippines, Thailand, and Vietnam. It prefers companies with a launched product or those with established valuable distribution partnerships in the region.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'NRF'
      },
      {
        'name': 'Green Meadows Accelerator',
        'address': '',
        'website': 'http://www.gmaccelerator.com/',
        'description': 'Greenmeadows accelerator (gma) focuses our investments in advanced manufacturing & engineering as well as in clean/greentech space. Our co-investment partner is spring seeds capital pte. Ltd.\nWe make meaningful and valuable impact to life, businesses and the economy by incubating innovative technologies startups. Gma creates enriching learning experience and outcome for startups through focused investment approach, thoroughness in upstream due diligence and nurturing talent.\n​our expertise and network will provide an edge to the startup ecosystem.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'SPRING'
      },
      {
        'name': 'IDM Jump-start and Mentor (i.JAM) programme (closed)',
        'address': '3 Fusionopolis Way, #16-22 Symbiosis, Singapore 138633',
        'website': 'http://www.idm.sg/support/ijam/',
        'description': 'The IDM Jump-start and Mentor (i.JAM) programme aims to drive innovation and entrepreneurship by creating in Singapore a capacity for continuous and self-sustaining grassroots innovation. Under this programme, the i.JAM Micro-funding Scheme (i.JAM scheme) will support startups and individuals with breakthrough ideas that can be developed into innovative products and services. This will be done through a network of incubators who will work closely with IDMPO to manage i.JAM according to the spirit and intent of the i.JAM programme.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Incubator Development Programme (IDP)',
        'address': '',
        'website': 'http://www.spring.gov.sg/Nurturing-Startups/Pages/incubator-development-programme.aspx',
        'description': 'The Incubator Development Programme (IDP) provides up to 70% grant support to incubators and venture accelerators to enhance their capabilities and programmes to better assist innovative start-ups.\nThe IDP may cover the following costs:\n- Programmes to Nurture Start-ups: Costs of developing programme(s) that help start-ups develop new products and services, obtain business financing, improve market access, etc.\n- Mentoring Start-Ups: Hiring of mentors to provide management guidance to start-ups\n- Operating Expenses: Salaries for the incubation team, marketing costs, events etc.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'IncuVest',
        'address': '',
        'website': 'http://www.incuvestasia.com/',
        'description': "IncuVest is a tech investment firm focused on investing in innovative early stage tech companies.\nIncuVest was founded by Ronnie Wee and Natasha Foong, experienced serial entrepreneurs with extensive experience in startups and building businesses in Asia.\nIncuVest combines a unique blend of Western and Asian entrepreneurial and corporate styles with an acute understanding and experience building successful companies expanding into the diverse Asian markets.\nIncuVest works closely and co-invests with the Singapore Government, having been selected by the Prime Minister's Offices' National Research Foundation (NRF) as one of the approved Tech Incubators.\nIncuVest focuses on investments in startups in Social eCommerce, Gaming, Analytics, Mobile and Media in a variety of industries.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Inflection Ventures',
        'address': '',
        'website': 'http://www.inflectionventures.com/',
        'description': 'Founded in 2013, we are a seed stage investment fund focusing on technology startups. Our fund operates out of Singapore and is truly globally focused. To date, most of our investments have been in North America but we regularly review deals from Europe and Asia.\nOur goal is to invest in product-driven companies with formidable founders who have the ambition to reshape industries and change the world.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'InspirAsia',
        'address': '',
        'website': 'http://lifesreda.com/accelerator/',
        'description': 'Russian investment firm LifeSREDA.VC moved its headquarters from Moscow to Singapore and launched a fintech accelerator programme called InspirAsia.\nInspirAsia facilitates startups to become a part of global fintech ecosystem. They also help to better understand the prospects of the company and implement it more efficiently.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Innosight Ventures',
        'address': '8 Eu Tong Sen Street, #15-89, The Central, Singapore 059818',
        'website': 'http://www.innosightventures.com/',
        'description': 'Innosight Ventures leverages more than 20 years of applied research by innovation thought leaders like Clayton Christensen and fieldwork by the Innosight Consulting Team. Usual investment quantum is up to half a million Singapore dollars in each company, open to co-investing with other venture capital firms, when more capital is required and have led investment rounds where companies have raised in the range of SGD 1 – 2 million.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Joyful Frog Digital Innovation (JFDI)',
        'address': '79 Ayer Rajah Crescent, #05-03, Singapore 139955',
        'website': 'http://www.jfdi.asia/',
        'description': 'One of the stalwarts of the Singapore scene, JFDI offers programmes for business startups and professionals. Its partners are grassroots organisations, governments and top corporations. Its practical work is underpinned by close relationships with the world’s leading academic institutions and independent thinkers.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Jungle Ventures',
        'address': '306 Tanglin Road, Phoenix Park Office Campus, Singapore 247973',
        'website': 'http://www.jungle-ventures.com/',
        'description': 'Jungle Ventures is a Singapore native global venture capital firm that provides early stage investments and business building infrastructure to startups.\nJungle Ventures focus is on seed to early stage investments into Singapore, India, South East Asia and other regional hotbeds of innovation.\nThe firm is invested in by an active network of Asian entrepreneurs, tech executives and institutional investors that further support the tactical and strategic growth of the investee companies in the region and world markets.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'NRF'
      },
      {
        'name': 'Leo Tech Services Pte Ltd',
        'address': '8 Eu Tong Sen Street #23-89/90 The Central Singapore 059818',
        'website': 'http://www.leotech.com.sg/',
        'description': 'It provides technical expertise and customised solutions for customers and partners across a wide range of industry sectors from healthcare to finance, and works with organisations ranging from start-ups and NGOs, corporate multinationals, to local and foreign government bodies.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'muru-D',
        'address': '#02-00, 115 Amoy St',
        'website': 'https://muru-d.com/',
        'description': "Muru-D is the start-up accelerator backed by Telstra. They are looking to support the very best digital talent the Australasian region has to offer. Their goal is to help Australia become a center of digital business by providing mentoring, tailored acceleration services and investment to early stage startups.\nMuru-D will provide you with a cash contribution of $40,000 in return for a small 6% stake in your company. You get a lot more than just a $40k cash investment. You’ll also get 'money-can’t-buy' access to experts within the Telstra family, and to some of their key partners. Support will also be available from Telstra's professional services teams. They'll be able to help you with legals, finance, human resources, and the other issues you'll need to deal with as your idea comes to life.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Nanyang Technological University-NTUitive Pte Ltd',
        'address': '16 Nanyang Drive, #01-109, Innovation Centre ,Nanyang Technological University, Singapore 637722',
        'website': 'http://www.ntuitive.sg/',
        'description': 'The commercial arm and technology holding company of the Nanyang Technological University to promote innovation, cultivate entrepreneurship and facilitate the commercialisation of research.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'NUS Enterprise',
        'address': '21 Heng Mui Keng Terrace, I3 Building #05-00 (S), 119613',
        'website': 'http://enterprise.nus.edu.sg/',
        'description': 'Established in 2001, the National University of Singapore’s NUS Enterprise provides an enterprise dimension to NUS teaching and research that involves the university’s students, staff and alumni. NUS Enterprise augments and complements the University’s academic programmes and nurtures talents to possess an entrepreneurial and global mind-set. It provides experiential entrepreneurial education, active industry partnerships, comprehensive entrepreneurship support, catalytic entrepreneurship outreach, and is a bridge to the industry for the University.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'PACT Incubator',
        'address': '',
        'website': 'http://www.pactincubator.com/',
        'description': 'Led by The Hub Singapore, PACT Incubator is a multi-sectoral partnership with DBS Foundation and the National Youth Council (NYC), the national coordinating body for youth in Singapore.\nPACT Incubator, which focuses on social enterprises, offers two programs: the Pre-Incubator for aspiring social entrepreneur, and the Incubator for social ventures.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Plug and Play Singapore',
        'address': '71 Ayer Rajah Cres Singapore 139951',
        'website': 'http://plugandplaysingapore.com/',
        'description': 'Established in 2006, Plug and Play Singapore is focussed on sourcing, funding, and accelerating the growth of the most promising young high tech companies. It currently has operations in countries including Singapore, Malaysia, Egypt, Canada and a number of US cities.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Red Dot Ventures',
        'address': 'Blk 79 Ayer Rajah Crescent #04-04 Launchpad@one-north, 139955',
        'website': 'http://www.reddotventures.com/',
        'description': 'Established in 2011, Red Dot Ventures (RedDot) is a seed-stage venture capital firm focussed on Singapore-based high-tech startups in areas including ICT, interactive digital media (IDM), MedTech, nanotech, clean technology, and engineering.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': 'NRF'
      },
      {
        'name': 'Rockstart',
        'address': '',
        'website': 'http://www.rockstart.com/',
        'description': 'Rockstart, “The Global Startup Machine”, helps startups be more successful in their first 1,000 days through funding, mentorship, community, and office space.\nRockstart offers a 150-days accelerator program for startups to fine-tune their businesses and prepare for global scaling.Since the first Web & Mobile accelerator program in 2012, Rockstart has added 2 Industry-focussed programs: Rockstart Digital Health Accelerator and Rockstart Smart Energy Accelerator.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Ruvento Ventures',
        'address': 'Blk 71 Ayer Rajah Cres, #06-11 Singapore 139951',
        'website': 'http://ruvento.com/',
        'description': 'Ruvento Ventures is a Singapore-based venture capital firm with global exposure. It is focussed on the linking of entrepreneurs and investors investing in early-stage startups with significant technological background. Its investment philosophy is to help core-technology startups from underserved markets like Russia and China, bring their products and expertise to global markets using Singapore as launchpad. Direct investments are limited to US$200,000, though it can build syndication for the right deal for up to US$500,000.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Singapore FinTech Consortium',
        'address': '',
        'website': 'http://singaporefintech.com/',
        'description': 'The Singapore FinTech Consortium is a cross-industry initiative, structured as a commercial venture. They act as a platform neutral organization and are designed to facilitate collaboration between all market participants and stakeholders in the FinTech eco-system.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Singapore Infocomm Technology Federation (SiTF)',
        'address': '79 Ayer Rajah Crescent, #02-0/04/05, Singapore 139955',
        'website': 'http://www.sitf.org.sg/',
        'description': 'Singapore infocomm Technology Federation (SiTF) comprises corporate members ranging from local startups to establish MNCs. SiTF advocates for the ICM (Information, Communications and Media) industry and helps to accelerate the adoption ICM technology. SiTF works closely with various stakeholders to promote emerging technologies in areas such as digital media, cloud computing, Singapore enterprise,, security and governance. SiTF also provide platforms to help members with opportunities to increase their market presence and business reach.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Singtel Innov8',
        'address': '71 Ayer Rajah Crescent #02-22 Singapore 139951',
        'website': 'http://innov8.singtel.com/',
        'description': 'It focuses on technologies and solutions that lead to quantum changes in network capabilities, next generation devices, digital content services and enablers to enhance customer experience.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'SPH Plug and Play',
        'address': 'Bash, level 3 JTC LaunchPad Blk 79 Ayer Rajah Crescent @one-north, Singapore',
        'website': 'http://www.sphplugandplay.com/',
        'description': "SPH Plug & Play Accelerator is a Media and Technology-themed accelerator program to be launched in Singapore in 2015 with a goal of investing in promising Start-Ups\nSPH Plug and Play brings together all three partners' unique strengths: SPH's vast media expertise and resources; IIPL's network of industry stakeholders including government-linked agencies and research institutes; and Plug and Play's experience in running multiple themed-accelerators globally.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Startupbootcamp Fintech',
        'address': 'Bash #03-01, 79 Ayer Rajah Crescent, Singapore 139955',
        'website': 'http://www.startupbootcamp.org/accelerator/fintech-singapore.html',
        'description': 'Startupbootcamp FinTech is the leading accelerator focused on financial innovation. We provide funding, mentorship, office space in Singapore and access to a global network of corporate partners, mentors, investors and VCs, for up to 10 selected FinTech startups across the globe.\nFor over three months, the selected startups collaborate with 400+ mentors, partners, and investors to build world class FinTech products, with the ultimate goal of becoming industry leading companies.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Stream Global Pte Ltd',
        'address': 'Blk 71 Ayer Rajah Crescent, #03-11, Singapore 139951',
        'website': 'http://www.stream.com.sg/',
        'description': 'Stream Global’s main focus is in the emerging enterprise in the sectors of infocomm technology (ICT) and interactive media. The company helps Asian-based startups scale their ICT technologies for larger markets while still keeping focussed on Asia and the needs of the Asian market.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'TCF-PnP Program',
        'address': '',
        'website': '',
        'description': 'Led by The Co-Foundry (TCF) a leading accelerator in Singapore and Plug and Play (PnP), a global accelerator based in Silicon Valley, the TCF-PnP Program: Fintech Call seeks to bring together the best of the startup ecosystem and fintech industry.\nThe program is supported by global FX trading platform leader, OANDA Asia Pacific and Singapore VC/PE firm, BlueHill Asset Management.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'TechCube8 Pte Ltd',
        'address': '',
        'website': 'http://techcube8.com/',
        'description': 'A private technology investor and incubator selected by the National Research Foundation (NRF), Singapore to promote entrepreneurship and high-tech R&, identify and co-invest in high impact, early stage technology platforms and companies.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'The Biofactory Pte Ltd',
        'address': '10 Ubi Crescent #02-41, Ubi Techpark Lobby C, Singapore 408564',
        'website': 'http://www.thebiofactory.com/',
        'description': 'The Biofactory is a dedicated incubator for the commercialisation of biomedical and life science startups.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'The Co-Foundry',
        'address': 'Unit 11 Lor 24A Geylang Singapore 398535',
        'website': 'http://theco-foundry.com/',
        'description': 'Its six to nine months ShakeOut Program is to help startups get to the core, advance to the next stage of development, and to obtain funding in order to scale and grow.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'The FinLab',
        'address': '79 Ayer Rajah Crescent, #03-01, Singapore 139955',
        'website': 'http://www.thefinlab.com/',
        'description': 'The FinLab accelerates the development of disruptive FinTech startups changing our world today. Through our deep expertise and broad experience in the financial industry and the venture capital ecosystem, we provide startups with valuable insights, analytics and a strong infrastructure to propel their businesses to the next level. A joint venture between Infocomm Investments Pte Ltd (IIPL) and United Overseas Bank Ltd (UOB), our wide connections in ASEAN, Greater China, Europe and the United States provide our start-ups an unparalleled access to the global market for growth and expansion.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Tri5 Ventures',
        'address': '71 Ayer Rajah Crescent #03-26 Singapore 139951',
        'website': 'https://tri5.asia/',
        'description': 'Same founders behind Angel’s Gate Advisory but further up the funding value chain. TRi5 (pronounced “Thrive”) is different from traditional accelerators which run boot camps. It has a rolling program catered specifically to our startups.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'The Innovators Institute Pte Ltd',
        'address': '190 Clemenceau Avenue, #06-01, Singapore 239924',
        'website': 'http://www.theinnovatorsinstitute.com/',
        'description': 'A group of serial innovators and entrepreneurs, who inspire, nurture and accelerate innovators.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'TNF Ventures',
        'address': '71 Ayer Rajah Crescent, #06-01/02, Singapore 139951',
        'website': 'http://www.tnfventures.com/',
        'description': 'TNF Ventures is one of the 14 incubators selected by National Research Foundation for Technology Incubation Scheme (TIS). It is founded by a group of established Singaporean entrepreneurs and veteran business professionals . The team has extensive network in Singapore, Asia and America. Half of them resides in China, offering network connections for startups who are interested in entering China market. TNF Ventures invests in companies in Technology Media Telecommunication (TMT), medical tech, clean tech and biotech field.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'UNFRAMED',
        'address': '111 Middle Road, National Design Centre #02/03-04, Singapore 188969',
        'website': 'http://unframed.so/',
        'description': 'A social-impact startup incubator, set up by entrepreneurs for entrepreneurs is a partnership between UNFRAMED & DBS Foundation, a unique 5-month incubation program at the intersection of the elderly Community x Technology x Startup.',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'Venturecraft',
        'address': '4 Robinson Road, #07-03 Singapore 048543',
        'website': 'http://www.venturecraft.vc/',
        'description': "Venturecraft is a private investment firm and venture builder that provides working capital, market access assistance, entrepreneurial talent and other essential resources to innovative companies across all stages of development, from startups to mature enterprises. Focusing on medical technology (MedTech) and infocomm technology (ICT), Venturecraft is also an appointed accelerator under SPRING Singapore's Sector Specific Accelerator Programme.",
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      },
      {
        'name': 'WaveMaker Labs',
        'address': 'Block 71, #05-01, Ayer Rajah Crescent Singapore 139951',
        'website': 'www.wavemakerlabs.com/singapore-2/',
        'description': '',
        'logo': '',
        'type': '',
        'image': '',
        'affiliation': ''
      }
    ]
  },
  { // INVESTORS
    'model': 'Investor',
    'documents': [
      {
        'name': '3VS1',
        'website': 'http://www.3vs1.com/',
        'description': '3V SourceOne Capital is an Asian private equity firm with offices in Singapore and Silicon Valley. We invest in high growth companies with the aim of helping management teams reach their full potential. We are a fast growing investment house ourselves and we have learned firsthand about the value of hard work, dedication and pursuing a dream.\nWe are a pioneer in growth capital and private equity in Singapore with an experienced investment team that has contributed to local industry development.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': '8capital',
        'website': 'http://8capita.com/',
        'description': 'Asian based early stage + private equity tech investors.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': 'An Investment Partnership focused on Internet + Mobile Companies.',
        'person-of-interest': ''
      },
      {
        'name': 'ACP',
        'website': 'http://www.acpven.com/',
        'description': 'ACP is a global investment advisory firm founded by experienced entrepreneurs and seasoned investors. As an alternative asset management company, we are trusted partners of some of the most respected family, corporate and institutional investors in the world.\nACPs investment thesis derives from a worldview that massive innovations in technology, demographic shifts and closer integration of global economies are fundamentally transforming the way we live, work and play.\nIn general, we invest in companies that address a need rather than a want. Our businesses have strong technology moats around them and often have significant product, customer or revenue traction when they engage with us. Most of our companies are lead by experienced founders who often have years if not decades of prior experience.\nACP typically invests in the early growth, or pre-A round and supports companies through multiple follow-on rounds. Our typical investment range is between $200K and $4m and we generally prefer to lead the round. We often invest alongside strategically valuable investors and take board seats where helpful to the company',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'BAF Spectrum',
        'website': 'http://www.bafspectrum.com/',
        'description': 'BAF Spectrum is a business angel fund focused on Asia-based, early stage technology startups – in particular within digital media, internet and mobile consumer portals as well as R&D-intensive information technology in general.',
        'logo': '',
        'type': '',
        'image': '',
        'date': 2006,
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'BlueHill Asset Management',
        'website': 'http://www.bluehill.com.sg/',
        'description': 'BlueHill Asset Management specialises in venture capital and private equity investments across strategic global markets. Based in Singapore, the management has been instrumental in raising funds of approximately S$470 million over the last 4 years.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'CAP Vista',
        'website': 'http://www.capvista.com.sg/',
        'description': 'Cap Vista is the strategic investment arm of Defence Science and Technology Agency (DSTA), a statutory board of the Singapore Ministry of Defence.\nCap Vista invests in companies with innovative technologies that can serve the defence and security needs of Singapore.\nCap Vista aims to be the strategic investor of choice for young companies seeking to develop their businesses in the Asian defence and security market.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Challenge Ventures',
        'website': 'https://www.challenger.com.sg/',
        'description': 'Challenge Ventures was set up by Challenger Technologies, a Singapore-based tech retailer. The funds will go towards investing in digital platforms that can support and complement the company’s business operations.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Citi Ventures',
        'website': 'http://www.citi.com/ventures',
        'description': 'Citi Ventures is the innovation engine of Citi, committed to conceiving, launching and scaling new initiatives with the potential to transform the future of financial services. We invest in startups, pilot new technologies, and test new solutions and business models through our Citi Innovation Labs and Citi businesses. Our goal is to accelerate product roadmaps and expedite commercialization opportunities within Citi. We seek to deliver next-generation experiences for Citi’s customers by systematically exploring leading-edge topics from blockchain technology and new lending platforms to marketplaces and UX design.\nBased in Silicon Valley, close to the disruptive forces that are reinventing industries and upending traditional business models, Citi Ventures analyzes market signals and brings the best from the outside into Citi. We foster bold ideas and set the conditions for innovative action. We have built an infrastructure for change with two complementary practice areas: Venture Investing and the Innovation Network.',
        'logo': '',
        'type': '',
        'image': '',
        'date': 'January 2010',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Coent Venture Partners',
        'website': 'http://coent.sg/',
        'description': 'COENT provides seed and venture-stage funding to brilliant entrepreneurs and companies across all sectors in Asia. We back these entrepreneurs and companies with unparalleled support in funding, management, overseas business development and exposure to our network.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Credence Investment',
        'website': 'http://www.credence-investment.com/',
        'description': 'A growth-stage private equity firm. However, they also make early-stage technology investments on an opportunistic basis. Co-founded by Koh Boon Hwee, one of Singapore’s most successful executives.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'CrystalHorse',
        'website': 'http://ch-investments.com.sg/wp/',
        'description': 'Crystal Horse looks for technology companies that can scale in one country and subsequently be able to scale regionally. Our investments are in companies in angel or seed stage. We do also participate in Series A investments.\nBased in Singapore and Malaysia, we are comfortable leading deals there. Crystal Horse also invests in great teams in other SEA countries where often the deals are led by other prominent venture capitals.\nWe like to invest in the internet, mobile and data space. Companies that leverage technology to scale and founders who understand unit economics, economy of scale and networks.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Digital Media Partners',
        'website': 'http://digitalmedia.vc/',
        'description': 'Digital Media Partners is a venture capital firm focused on emerging markets that have recently joined the global digital transformation process. We believe that the arrival of high connectivity, processing power and interactivity results in an explosion of digital services, some of which are very much like those seen elsewhere before, and some unique to their locale.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'East Ventures',
        'website': 'http://east.vc/',
        'description': 'East Ventures aims to bring success to ventures by providing early stage seed capital to promising startups. With a total of 5 offices in Jakarta, Tokyo, and San Francisco, East Ventures has invested in over 150 companies across Asia and the US. East Ventures investment team consists of experienced professionals that allow us to provide a strong network across Asia. East Ventures actively invests in community development and capacity building via its coworking spaces called EV Hive in Jakarta and Hive Shibuya in Tokyo.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': 'commerce, social, game, SAAS, and mobile services.',
        'person-of-interest': ''
      },
      {
        'name': 'EDBI',
        'website': 'https://www.edbi.com/',
        'description': 'We are the dedicated corporate investment arm of the Singapore Economic Development Board, with headquarters in Singapore.\nWe invest to shape the future industries of Singapore in the knowledge and innovation-intensive sectors of BioMedical Sciences, Information & Communication Technology, Smart & Sustainable Technology and select industry clusters under our Strategic Growth Programme.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Expara',
        'website': 'http://www.expara.com/',
        'description': "Expara is Singapore's pioneer and leader in incubation, early-stage venture capital, entrepreneurship, VC and innovation training, mentorship and advisory work. Expara provides both investment and services to the enterprise ecosystem.\nDouglas Abrams, the company's founder and CEO is a venture capitalist, entrepreneur, angel investor and educator who has been investing, venturing, and teaching in Singapore since 2000. Expara works closely with start-up companies, SMEs and key players in both the public and private sector in the local enterprise ecosystem. Expara has offices in Singapore, Bangkok and Kuala Lumpur.",
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'F&H',
        'website': 'http://www.fenghegroup.com/',
        'description': 'A leading Asian alternative asset management firm, built on extensive knowledge, experience and networks to uncover the best opportunities in rising Asia.\nBased out of Shanghai and Singapore, FengHe Group offers a diversified range of investment products and strategies for institutional investors, family offices and private investors.\nThere are three business units:\n- Venture Capital – Targets consumer and technology companies with high growth potential and innovative business models in rising Asia.\n- Real Estate – Adopts a nimble approach in value creation and incorporating best practices in risk management.\n- Hedge Funds – Pursues absolute returns strategies by taking advantage of the investment opportunities offered by the cyclical nature of Asian economies and companies.\nFocus:',
        'logo': '',
        'type': '',
        'image': '',
        'date': 2010,
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Far East Ventures',
        'website': 'http://www.fareast.ventures/',
        'description': 'Far East Ventures is the venture capital arm of Far East Organization. We invest in visionary entrepreneurs building disruptive technologies and companies.\nFar East Ventures invests at every stage from seed to growth, in all sectors including technology and healthcare.\nInvestments need not have a strategic value for Far East Organization.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Formation 8',
        'website': 'http://formation8.com/',
        'description': "Formation 8 is a venture capital firm that provides financial and strategic capital to early growth smart enterprise and energy technology companies. They support entrepreneurs who seek to transform the most important global industries by solving hard problems with technology solutions. Partnership is in their DNA. Formation 8 value trusted relationships with entrepreneurs, investors, and strategic partners through their global network.\nAs a partner to young companies, Formation 8's goal is to create long-term, sustainable value through operational expertise and business development partnerships. Formation 8 leverage their deep and distributed networks to provide the market knowledge, deployment expertise, sales channels, and relationships needed to expand into and thrive in Asia. With local teams in Korea, China and Singapore, Formation 8 connect Silicon Valley start-ups to dynamic multinational corporations in these geographies.",
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Garena',
        'website': 'http://www.garena.sg/',
        'description': 'Garena is a leading Internet company based in Asia, with services spanning entertainment, communication, payments, and m-commerce. The company was ranked Singapore’s Largest Internet Company by The Economist in 2014.\nSince the company’s founding in 2009, Garena has grown from 20 employees to 3,000 today. Garena has a presence in over 10 Southeast Asian countries and beyond, serving millions of users across the globe.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': 'Garena has 4 Key Pillars: Entertainment, Communication, Payment and M-commerce',
        'person-of-interest': ''
      },
      {
        'name': 'Get2Volume',
        'website': 'http://www.g2vaccelerator.com/',
        'description': 'Get2Volume, headquartered in Singapore, invests in, mentors and helps grow innovative startup companies. Get2Volume offers global capabilities, capital and connections to enable success. Get2Volume invests in and helps grow innovative technology companies in Singapore. Our company brings global capabilities, capital and connections in Silicon Valley and Singapore to provide mentorship and operational and execution expertise. Get2Volume co-funds its projects with the Singapore National Research Foundation.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'GlobalBrain Corporation',
        'website': 'http://globalbrains.com/',
        'description': 'Global Brain (GB) is an early stage venture capital firm based in Tokyo, expanding its investment activities in the US and Asia. Since 2001, GB has invested in about 30 companies selectively, provided full services and resources and achieved 7 IPOs and 7 M&As. GB accelerates growth of portfolio companies in a long run by providing not only capital but also supports to build strategies, partnerships and a team to achieve their milestones.\nFocus: GB is strong at e-commerce and forms a platform called EC-PLANET among its group companies: a listed DRTV/Infomercial company, one of the largest sport goods online stores, a logistics company that can provide comprehensive fulfillment services and a social media company that can develop web services.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'GMO Ventures Partners',
        'website': 'http://www.gmo-vp.com/en/',
        'description': 'GMO Venture Partners is an early and growth stage investment subsidiary of GMO Internet Group, one of the most comprehensive providers of industry-leading Internet services in Japan. The firm has a strong presence in supporting startups from EC, payment, ad-tech and enterprise SAAS sectors in regions such as Japan, China, Vietnam, Singapore, Philippines, Thailand, Indonesia and the US. GMO Venture Partners Inc has invested in over 50 startups in over the past years and eight companies went public.',
        'logo': '',
        'type': '',
        'image': '',
        'date': 'September 2005',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Golden Gate Venture',
        'website': 'http://goldengate.vc/',
        'description': 'Golden Gate Ventures is a seed fund investing in early stage internet startups in Southeast Asia. Their investment activities bring Silicon Valley best practices to startups in Southeast Asia. Their portfolio focuses on companies that address foundational needs, including: e-commerce, payments, and mobile services.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'GREE Venture',
        'website': 'http://www.greeventures.com/en/',
        'description': 'At GREE Ventures, they focus is investing in early stage (pre-Series A and Series A) internet and mobile companies. They seek out companies with top notch management teams and strong market potential, which are not tied to strategic investments for GREE. They invest in Japan, Southeast Asia, and other geographies within Asia and seek companies which have the potential to scale across the region.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'iGlobe Partners',
        'website': 'http://www.iglobepartners.com/',
        'description': 'iGlobe Partners is created to fundamentally change the way venture capital works - a fund that operates on a global basis, with a team of partners in North America, Europe and Asia working together to help young companies become global market leaders.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'IMJ Investment',
        'website': 'www.imj-ip.com/en/',
        'description': 'IMJ Investment Partners, a Singapore-based VC, is focused on investing in startups South East Asia and Japan. Their portfolio startups are nurtured based on their principles of operational support, equality and global outlook. In addition, startups have access to the complementary strengths of IMJ Corporation. IMJ Investment Partners provides direct operational support and connections for startups to achieve success.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'IncubAsia Venture',
        'website': 'http://incubasia-ventures.com/',
        'description': 'At IncubAsia Ventures, they work with early stage technology companies and venture capital firms seeking to capitalize on the rapidly expanding Asian markets. They provide venture incubation and venture acceleration and make investments in the following verticals: AdTech, EduTech, FinTech and Enterprise.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'IncuVest',
        'website': 'https://www.incuvestasia.com/',
        'description': "IncuVest is a tech investment firm focused on investing in innovative early stage tech companies.\nIncuVest was founded by Ronnie Wee and Natasha Foong, experienced serial entrepreneurs with extensive experience in startups and building businesses in Asia.\nIncuVest combines a unique blend of Western and Asian entrepreneurial and corporate styles with an acute understanding and experience building successful companies expanding into the diverse Asian markets.\nIncuVest works closely and co-invests with the Singapore Government, having been selected by the Prime Minister's Offices' National Research Foundation (NRF) as one of the approved Tech Incubators.\nIncuVest focuses on investments in startups in Social eCommerce, Gaming, Analytics, Mobile and Media in a variety of industries.",
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Infocomm Investments',
        'website': 'http://www.infocomminvestments.com/',
        'description': 'Infocomm Investments Pte Ltd (IIPL) builds and invests in Singapore and global infocomm technology start-ups. Managing more than US$200 million, we accelerate the development of start-ups in their formative phase, and invest further as they move towards growth and expansion. Through our investments, partnerships with stakeholders across private and public sectors, and global reach, we play a central role in building a vibrant and sustainable ecosystem in Singapore for start-ups to flourish. We are a wholly-owned subsidiary of the Infocomm Development Authority (IDA) of Singapore.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Innosight Ventures',
        'website': 'http://www.innosightventures.com/',
        'description': 'Innosight is a strategy and innovation consulting firm that helps clients achieve repeatable growth through innovation. The leading authority on disruptive innovation, Innosight collaborates with companies to devise growth strategies, develop innovation capabilities and leadership, and create new products and services that improve people’s lives. Innosight is based in Lexington, Massachusetts, with offices in Singapore and India.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'IntelCapital',
        'website': 'http://www.intelcapital.com/',
        'description': 'Intel Capital is an investment firm that is focused on mergers, acquisitions, and equity investments related to tech startups. The company invests in a broad range of companies that offers hardware, software, and services targeting the enterprise, mobility, consumer internet, digital media, and semiconductor manufacturing sectors.\nThe company focuses on helping entrepreneurs scale from startups to global corporations. It leverages its technology expertise, brand capital, and access to a global network via its business development programs helping entrepreneurs achieve success.',
        'logo': '',
        'type': '',
        'image': '',
        'date': 1991,
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'JAFCO ASIA',
        'website': 'http://www.jafcoasia.com/',
        'description': "Since its establishment in 1990, JAFCO Asia has grown to become a leading brand in the venture capital industry in the Asia Pacific region. With more than US$1.2 billion funds under management in aggregate, JAFCO Asia's experienced investment team has invested in over 368 companies in 13 countries and divested more than 260 companies of which at least 86 have been publicly listed.\nFocus: Since the new millennium, JAFCO Asia has shifted its focus entirely to technology related investments and is now one of the pre-eminent venture capital technology investors in the region. They believe that their existing portfolio in the Asia Pacific region and the worldwide business network offer their portfolio companies significant potential for synergistic partnerships.",
        'logo': '',
        'type': '',
        'image': '',
        'date': 1990,
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Jungle Ventures',
        'website': 'http://www.jungle-ventures.com/',
        'description': 'Jungle Ventures is a Singapore native global venture capital firm that provides early stage investments and business building infrastructure to startups. Jungle Ventures focus is on seed to early stage investments into Singapore, India, South East Asia and other regional hotbeds of innovation.\nThe firm is invested in by an active network of Asian entrepreneurs, tech executives and institutional investors that further support the tactical and strategic growth of the investee companies in the region and world markets.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Lightstone Venture',
        'website': 'http://lightstonevc.com/',
        'description': 'Lightstone Ventures was founded in 2012 by the General Partners and other key members of the life science teams of Advanced Technology Ventures (ATV) and Morgenthaler. The firm was formed to capture the upside of investing in breakthrough life science companies during a time of unique opportunity in the space.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Majuven',
        'website': 'http://www.majuven.com/',
        'description': "The Majuven Team has an excellent track record in co-founding, leading, funding and nurturing several successful ventures in the SEA region. The team's ability to provide strategic guidance, access to market channels and to secure key projects and customers have proven to be the critical success factors for our investee companies.\nThe flagship private equity fund “Majuven Fund 1” focuses on sectors driven by evolving trends in technology, demography and affluence. They believe that the evolving business environment will provide opportunities for visionaries to create new categories and business models.\nGreat vision and ability to execute the plan are the keys to success for entrepreneurial ventures. They are always looking for ventures that they can nurture to achieve greater heights.",
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Marvelstone',
        'website': 'http://www.marvelstone.co/',
        'description': 'Marvelstone Group is a private investment group that develops and invests in growing businesses. With finance as our core strength, we also have diversified investments in technology, real estate, hospitality, trading and media.\nThe group believes in the growth of Asia and seeks to focus on emerging markets in the region. It has regional presence in Hong Kong, Singapore and Korea.\nWhen it comes to understanding local markets, Marvelstone Group works with local business partners in developing new businesses on the ground as this is where each party can leverage on their own expertise and skills to build a successful venture together.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Mediapreneur',
        'website': 'http://www16.mediacorp.sg/themediapreneur/',
        'description': 'Mediapreneur is an initiative of Mediacorp, Singapore media company. The Mediapreneur is made up of an investment fund that helps startups in seed or series A capital, and an incubator program for startups to test their business ideas and products.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Mercatus',
        'website': 'http://www.gomercatus.com/',
        'description': '',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'MNC Media Investment',
        'website': 'http://www.mncmi.com/',
        'description': 'MNC Media Investment Ltd is overseas investment unit of MNC Group focusing on early to growth stage companies in internet, mobile, travel, gaming, social sectors in China and Southeast Asia.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': "Monk's Hill Ventures",
        'website': 'http://www.monkshill.com/#about',
        'description': 'Monk’s Hill Ventures is a partnership of seasoned entrepreneurs who have built and backed global companies based both in Silicon Valley and Asia. We are a venture capital firm investing in technology startups that will take advantage of the fast growing Southeast Asian markets.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': 'Software. Vertical-agnostic.',
        'person-of-interest': 'Peng (set up IIPL entrepreneur that exited multiple companies, one of the few investors who made their own wealth and not money managers)'
      },
      {
        'name': 'New Asia Investment',
        'website': 'http://newasiainvestment.com/',
        'description': 'New Asia Investments Pte Ltd is a Singapore-based experienced technology investor in Asia, with a focus on med tech, clean tech (water and energy) and industrial innovations.\nWith economies in many Asian countries developing and maturing over the past decades, research and development and high tech innovation have become increasingly important to sustain and drive future economic growth. New Asia Investments’ investment approach and, hence, its own investment case, are based on these fundamental trends. The company’s focus sectors play a particularly important role within these developments, which is also driven by other factors such as population growth, urbanization or aging societies. New Asia Investments targets to invest in the most promising opportunities that play a crucial role in these sectors and countries.\nWithin this context, the company invests both into venture capital opportunities as well as in technology-related infrastructure projects. While there are many operational synergies between these two areas, they also complement from a financial return point-of-view. This makes New Asia Investments a unique investment case.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'NSI Ventures',
        'website': 'http://nsi.vc/',
        'description': 'NSI Ventures makes investments in early-stage technology companies based in Southeast Asia. Their typical investments are at Round A or B stage, where revenue traction is building and capital is required to drive rapid growth. Their existing portfolio covers B2C and B2B technologies who are accessing local, regional and global markets.\nHeadquartered in Singapore, NSI Ventures is part of the Northstar Group, a Southeast Asia private equity firm managing 5 funds with over $1.8bn in assets under management.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'OMIDYAR Network',
        'website': 'https://www.omidyar.com/',
        'description': 'Pierre Omidyar, the founder of eBay, and his wife, Pam, established Omidyar Network based on the belief that every person has the potential to make a difference. Since 2004, they have worked with their partners to create opportunities for people to tap that potential, enabling them to improve their lives and make powerful contributions to their communities.\nThey support, scale, and champion the work of their partners in order to maximize social impact. As a philanthropic investment firm, they make both investments and grants, identifying like-minded organizations that they support, help scale, and collaborate with to help realize their full potential. Their efforts are organized around two investment initiatives Access to Capital, and Media, Markets and Transparency.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'OWW Capital Partners',
        'website': 'http://www.oww.com.sg/',
        'description': 'OWW invests in service providers in infocomm technology, logistics, education/training, healthcare, financial services and consumer services sectors. Currently, OWW has over US$140 million under management.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Pix Vine Capital',
        'website': 'http://www.pixvc.com/',
        'description': 'Pix Vine Capital is a Singapore-based Investment House providing early-stage venture capital to startups aspiring to commercialize innovative solutions in the areas of Info-Tech, Med-Tech and FinTech.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Qualgro',
        'website': '',
        'description': 'Qualgro is an Asean-focused fund that invests into internet and technology-based businesses, as well as into education and healthcare.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Quest Ventures',
        'website': 'http://www.questventures.com/',
        'description': 'Quest Ventures is a leading venture fund for companies that have scalability and replicability in large internet communities',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': 'Digital commerce',
        'person-of-interest': ''
      },
      {
        'name': 'Rakuten Ventures',
        'website': 'http://global.rakuten.com/corp/',
        'description': "Rakuten Ventures is the venture capital arm of Rakuten Group. Rakuten is one of the world's leading Internet companies, offering a wide variety of services for consumers and businesses with a focus on e-commerce, finance, and digital content. Since 2012, Rakuten has been ranked among the world’s ‘Top 20 Most Innovative Companies’ in Forbes magazine’s annual list. Rakuten is expanding worldwide and currently operates throughout Asia, Europe, the Americas and Oceania. Founded in 1997, Rakuten is headquartered in Tokyo, with nearly 12,000 employees worldwide.",
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Rebright Partners',
        'website': 'http://rebrightpartners.com/en/',
        'description': 'Venture Capital Firm based in Singapore and Tokyo, focus on seed to early stage Internet & Mobile startups in Southeast Asia, especially six countries: Indonesia, Malaysia, Philippines, Vietnam, Thailand, and Singapore.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Ruvento',
        'website': 'http://ruvento.com/',
        'description': 'Ruvento Ventures is Singapore based venture capital firm with global exposure. They are focused the team of successful entrepreneurs and investors investing in early-stage startups with significant technological background. Their investment philosophy is to help core-technology startups from underserved markets like Russia and Commonwealth Independent States to bring their products and expertise to global markets using Singapore as launchpad.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'SBI VEN Capital',
        'website': 'http://www.sbivencapital.com.sg/en/about/index.php',
        'description': 'SBI Ven Capital is a leading private equity firm that invests in financial services and technology sectors across Asia. They have a proven track record of partnering with companies and assembling critical resources needed to grow businesses in Asia. Their investment platform combines financial acumen, industry insight and operational expertise to enhance the value of the companies they invest in.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'SeedPlus',
        'website': 'http://www.seedplus.com',
        'description': 'SeedPlus is a Singapore-­based seed-stage venture firm that invests S$500k to ­$1M in early stage companies on market terms. Once the investment is in place, SeedPlus aims to help start-ups to grow to profit or the next round of funding through our network and our full­-time operating partners',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Sequoia Capital',
        'website': 'https://www.sequoiacap.com/contact/singapore/',
        'description': 'Sequoia Capital is a venture capital firm founded by Don Valentine in 1972. The Wall Street Journal has called Sequoia Capital "one of the highest-caliber venture firms" and noted that it is "one of Silicon Valley\'s most influential venture-capital firms". It invests between $100,000 and $1 million in seed stage, between $1 million and $10 million in early stage, and between $10 million and $100 million in growth stage.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Silicon Straits',
        'website': 'http://www.siliconstraits.com/',
        'description': 'Silicon Straits is an innovation tribe that is building a better platform for designers, engineers and entrepreneurs to get together, be inspired, make things and start and grow companies. The company invests in the convergence of design, hardware and software, and operates at the intersection of ideas, talent and capital. Silicon Straits has offices in Singapore, Ho Chi Minh City and Yangon, and oversees investments across North America and Asia Pacific.\nThey build products and companies that they care about, in addition to providing design and product development services to individuals, startups and companies.\nThey build online and offline communities. Their tribe is what it is today because we live and breath community; regardless of race, religion or nationality. They like to seek out other like-minded people who share their beliefs and principles.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': 'James Chan'
      },
      {
        'name': 'Singtel Innov8',
        'website': 'http://innov8.singtel.com/',
        'description': 'Singtel Innov8, the venture capital arm of the Singtel Group, invests in and partners with innovative tech start-ups worldwide. It has a fund size of US$250 million and its own set of decision making, approval and funding processes. Beyond funding, Singtel Innov8 is a gateway for start-ups to tap on the resources and expertise of the Singtel Group, while enabling the Group to gain access to emerging technologies. Singtel Innov8 focuses its investments on technologies and solutions that can lead to quantum changes in network capabilities, next generation devices, digital services and enablers to enhance customer experience. Headquartered in Singapore, Singtel Innov8 also has offices in San Francisco and Tel Aviv.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Small World Group (closing)',
        'website': 'http://smallworldgroup.com/',
        'description': 'Small World Group provides seed funding, mentorship, networking and long-term collaboration for early stage startups that are primarily in clean tech, optical systems and novel materials. With their combined operational expertise and creative agility, Small World Group helps startups realize their ideas and get them to market.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': 'Frank Levinson (Entrepreneur turned investor, does not spend much time in SG anymore), Chong Chiet Ping (ex-HP)'
      },
      {
        'name': 'SPH Media Fund',
        'website': '',
        'description': 'SPH Media Fund specializes in investments in early stage investments in the media sector. It seeks to invest in areas of Digital Media including advertising technology and content aggregation/ distribution/ consumption and Consumer Internet including e-commerce, marketplaces, social media, education technology, financial technology.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Spring Seeds',
        'website': 'http://www.spring.gov.sg/Nurturing-Startups/SEEDS/Pages/spring-start-up-enterprise-development-scheme.aspx',
        'description': 'SPRING SEEDS Capital Pte Ltd (SSC), is the investment arm of SPRING Singapore, manages the SPRING Start-up Enterprise Development Scheme (SPRING SEEDS), an equity-based co-financing option for Singapore-based start-ups with innovative products and/or processes with intellectual content and strong growth potential across international markets.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Tembusu Partners',
        'website': 'http://www.tembusupartners.com/en/index.php',
        'description': 'Tembusu Partners is a private equity investment firm which invests in growth-stage companies to generate optimal returns for both investee companies. Tembusu Partners’ key operating philosophy is to deliver outperformance by investing in what they know best.\nThey understand Emerging Asia. As a leading private equity player based in Singapore, they are strategically located in the heart of Emerging Asia where they see attractive deal-flows in the fast growing markets of China, India, and Southeast Asia.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': 'They focus on identifying and supporting growth companies in core industry sectors that they have a proven track record – namely education, health care, technology, oil & gas, engineering services, resources and manufacturing.',
        'person-of-interest': ''
      },
      {
        'name': 'The Co-Foundry',
        'website': 'http://theco-foundry.com/',
        'description': 'The Co-Foundry is a next generation venture-accelerator focused on building venture fundable startups. Our team comprises of passionate individuals possessing experience in founding startups and a deep appreciation of the challenges of building viable businesses under extreme uncertainties, and we are all on a mission to help build amazing game-changing startups. We are deeply embedded into the ecosystem of Singapore with a wide range of partners including leading research organizations and corporate demand drivers',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Tiger Global Management',
        'website': '',
        'description': 'Tiger Global manages hedge funds and private equity funds by investing in local and global public and private equity markets. It also invests locally in income markets. As the name suggests, Tiger Global conducts its business globally. The firm primarily focuses its investments in China, Southeast Asia, Latin America and Eastern Europe.',
        'logo': '',
        'type': '',
        'image': '',
        'date': 'April 13, 2001',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Tigris Capital',
        'website': 'http://www.tigriscapital.com.sg/',
        'description': 'Tigris Capital is a family-owned investment company investing in innovative, digital ventures out of Southeast Asia taking advantage of the massive online user growth in the region.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'TNF Ventures',
        'website': 'http://tnfventures.com/site/about/',
        'description': 'TNF Ventures (TNFV) is founded by a few of them who started this as a passion project to help local startups succeed. They feel that there are many talents locally but few had succeeded because they did not have the right connections to help them to go-to-market, they did not have people whom they can discuss their business challenges with and they did not have guidance in business model development.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'TriStar Ventures',
        'website': 'http://tstventures.com/',
        'description': 'TriStar Technology Ventures is an early-stage venture fund that forms and invests in companies across the spectrum of healthcare innovation: life sciences, diagnostics, medical devices and technologies,healthcare IT and healthcare services',
        'logo': '',
        'type': '',
        'image': '',
        'date': 2009,
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Unicorn Venture Capital',
        'website': '',
        'description': 'Unicorn Venture Capital invests in early-stage tech startups in India, Singapore and Southeast Asia.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'UOB Venture',
        'website': 'http://www.uobvm.com.sg/home.html',
        'description': "UOB Venture Management Private Limited (UOBVM) is a wholly owned subsidiary of United Overseas Bank (UOB) Limited, one of Asia's leading international banking and financial groups. Founded in 1935 and listed on the Singapore Stock Exchange since 1970, UOB has more than 500 offices in Southeast Asia and Greater China. The UOB Group has total assets of more than S$200 billion.\nUOBVM has provided financing to more than 100 privately held companies through direct equity investment, mainly in Southeast Asia and Greater China.",
        'logo': '',
        'type': '',
        'image': '',
        'date': 1992,
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Vertex Ventures',
        'website': 'http://www.vertexventures.com/southeast-asia-india/',
        'description': 'Vertex Ventures Southeast Asia & India invests in high-growth start-ups seeking their first round of institutional venture capital funding across Asia (excluding China). They seek founders who want to tackle fundamental challenges. People who identify with a problem or concern that’s kept them up late at night — broken tools, broken lines of communication, broken processes, broken boundaries of trust. Sometimes this will require new skills; sometimes it will require different processes. Sometimes, it will require a completely new organization.Whichever of these is necessary is ultimately beside the point, because there is just one result when the solution is in place and the naysayers have bought into the vision: Things will simply be better.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Vickers Venture Partners',
        'website': 'http://www.vickersventure.com/',
        'description': 'Vickers Venture Partners is a leading venture capital firm focusing on venture capital investments in Asia and beyond. With presence in Shanghai, Singapore and California, the group manages 4 funds and proprietary capital to date. Their portfolio covers life sciences, technology, media, and telecommunications as well as consumer and financial services.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Walden International',
        'website': 'http://www.waldenintl.com/index.aspx',
        'description': 'Walden International is the leading firm focused on cross-border investments – our integrated team is dedicated to helping you build the next industry leading companies.\nWe seek the best entrepreneurs who look to build great companies through leverage of talent and markets independent of geography.',
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      },
      {
        'name': 'Wavemaker Pacific Funding',
        'website': 'http://wavemaker.vc/',
        'description': "Wavemaker Pacific is an early stage venture capital fund focusing on Southeast Asian technology enabled startup opportunities. Based in Singapore, its principals are entrepreneurs who have successfully built and exited startups themselves. They now aim to work with the region's best entrepreneurs to pursue the best opportunities and help build the regional tech ecosystem.",
        'logo': '',
        'type': '',
        'image': '',
        'date': '',
        'focus': '',
        'person-of-interest': ''
      }
    ]
  },
  { // EVENTS
    'model': 'Event',
    'documents': [
      {
        'name': 'Ad:Tech ASEAN 2016',
        'address': '',
        'website': 'http://www.adtechasean.com/',
        'description': 'AD: TECH is a global conference and exhibition where the marketing, technology and media communities come together to share new ways of thinking, build strong partnerships, and define new strategies that will address key industry challenges while driving business forward in an ever-changing marketplace',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Agile 2016 Conference',
        'address': '',
        'website': 'http://2016.agilesingapore.org/',
        'description': 'Built on the success in 2013 and 2014, and organised by passionate volunteers from the Agile community, this two day conference will bring together over 300 attendees and many international and local experts covering topics like Lean, Security, Technical practices, Big data, UX, DevOps, Management, Product discovery and more.\nAgile Singapore aims to be the best software development and organisation agility conference in Singapore and the region.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'All That Matters',
        'address': '',
        'website': 'http://www.allthatmatters.asia/main/',
        'description': 'All That Matters is Asia’s only business-to-business-to-fan experience. The three day conference covers the latest issues relating to the Music, Live Entertainment, Online Video and Sponsorship industries. Global-level speakers provided insight and debate, whilst at night the Music Matters Live festival rocked Singapore before thousands of music lovers with more than 200 shows from 72 hand-picked bands from around the world.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Cards & Payment',
        'address': '',
        'website': 'http://www.terrapinn.com/exhibition/seamless/',
        'description': 'Cards & Payments Asia is a 4 day event being held from 19th April to the 22nd April 2016 at the Suntec Singapore International Convention & Exhibition Centre in Singapore, Singapore. This event showcases products like ground for smart technology solution providers including card and prepaid card manufacturers, chip manufacturers and E-Ticketing platform developers and prospects for the business etc. in the Business Services industry.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Casual Connect',
        'address': '',
        'website': 'http://asia.casualconnect.org/',
        'description': 'Casual Connect is the educational component of the Casual Games Association, the international trade association for casual games professionals. Casual Connect includes a regular magazine and yearly conference series in Eastern Europe, USA, Western Europe and Asia.',
        'logo': '',
        'type': '',
        'date': '16-17 May 2017',
        'image': ''
      },
      {
        'name': 'Chief Data and Analytics Officer Forum Singapore',
        'address': '',
        'website': 'http://www.cdaosingapore.com/',
        'description': 'The Chief Data & Analytics Officer Forum Singapore is where the region’s leading data and analytics executives share their insights on developing the infrastructure, ecosystem, buy-in, culture whilst providing the strategies to turn data into a strategic asset. Combined with international keynotes and our unique, highly regarded interactive discussion groups, this is an opportunity to tackle the most critical challenges faced by organisations, agencies and the wider industry as a whole.',
        'logo': '',
        'type': '',
        'date': '27-28 July 2016',
        'image': ''
      },
      {
        'name': 'CommunicAsia',
        'address': '',
        'website': 'http://www.communicasia.com/',
        'description': 'Watch the future take shape at Asia’s representative event, CommunicAsia2016. As devices become increasingly connected, the Internet-of-Things is expected to expand exponentially with the number of internet-connected devices predicted to exceed 40 million by the year 2020. Revolutionary innovations will also abound as crowdfunding empowers the masses to turn their ideas into reality.\nAt CommunicAsia2016, experience how the latest technologies in 3D Printing, IoT, M2M, Mobile Apps, OTT and more, will raise efficiencies at work and home.',
        'logo': '',
        'type': '',
        'date': '23-25 May 2017',
        'image': ''
      },
      {
        'name': 'CrowdSourcing Week',
        'address': '',
        'website': 'http://crowdsourcingweek.com/',
        'description': 'Crowdsourcing Week (CSW) connects people with the latest ideas and best practices in crowdsourcing and crowd innovation globally. We help organisations to transition and thrive in the new economy through our worldwide conferences & summits, online educational programs, workshops and consultancy.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Digital Disruption',
        'address': '',
        'website': 'http://www.digitaldisruptionasia.com/',
        'description': 'The Digital Disruption Asia Summit is not just another “innovation event” where big words or fancy theories are thrown in the air. It is the only place in Asia where you will hear serious debates and real cases from leading incumbents and disrupters regarding disruptive innovation and value creation.',
        'logo': '',
        'type': '',
        'date': '21-22 June 2016',
        'image': ''
      },
      {
        'name': 'Digital Travel Summit APAC',
        'address': '',
        'website': 'http://digitaltravelapac.wbresearch.com/',
        'description': 'Digital Travel Summit APAC is the ONLY VP and Director level eCommerce and digital event for APAC’s leading hotels, airlines and OTAs, focusing on how to personalise your customer engagement, leverage data analytics, capitalise on mobile and optimise your eCommerce platforms.\nThis program has been designed to help you not only tackle the existential threat of digital disruption, but also get ahead of the curve and exploit the opportunities it brings to create better products and services, grow market share and revenue streams.\nThis summit will prepare you with the insights and strategies to ride the wave of disruption. Leading brands will demonstrate how to embrace digital disruption for better outcomes and propel your business to the forefront of competition.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Digital Marketing Summit',
        'address': '',
        'website': 'http://www.dmsummit.asia/',
        'description': 'Digital Marketing Summit Asia was established in Singapore in 2015, with the mission to help marketers and businesses in Asia be equipped with essential digital marketing knowledge, in a collective effort with leading professionals in the region.\nWith an overwhelming response after the first Summit to expand regionally, we decided to move the event online to allow more people all around Asia to participate in this event.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'ECHELON Asia Summit 2016',
        'address': '',
        'website': 'https://e27.co/echelon/asia/index',
        'description': 'Echelon Asia Summit 2016 is a two-day summit that attracts over 5,000 top-tier digital professionals and entrepreneurs set to create and amplify opportunities in the fields of technology, business and investments across Asia.',
        'logo': '',
        'type': '',
        'date': '15-16 June 2016',
        'image': ''
      },
      {
        'name': 'Ecommerce Show',
        'address': '',
        'website': '',
        'description': 'E-Commerce Show Asia is a 2 day event being held from 19th April to 20th April 2017 at the The Suntec Convention & Exhibition Centre in Singapore. This event showcases products like a seamless continuity from Asia’s largest and longest running conference focused on cards and payments, to a dynamic summit and large scale exhibition bringing together the converging worlds of ecommerce, retail and payments etc. in the Computer Hardware & Software, Internet & Startups industries.',
        'logo': '',
        'type': '',
        'date': '19-20 April 2017',
        'image': ''
      },
      {
        'name': 'EmTech Asia',
        'address': '',
        'website': 'http://emtechasia.com/',
        'description': "EmTech is the annual global emerging technologies conference hosted by MIT Technology Review, the world’s oldest and most respected technology publication since 1899. This unique event has grown into a global community which runs in the United States, Europe, South America, India, Hong Kong and Singapore. It is the world's most important conference on emerging technologies that matter.\nEmTech is a community, a network, and a meeting place for business leaders, innovators, entrepreneurs, and change makers worldwide who are passionate about turning ideas into innovative solutions and addressing major global issues. Join us in 2017 for two days of intelligent conversation as we bring MIT Technology Review’s editorial content to life.",
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'eTail',
        'address': '',
        'website': 'http://etailasia.wbresearch.com/',
        'description': 'eTail Asia is the leading platform in Asia to help online retailers discover, develop and implement strategies that will help build a successful ecommerce business.\neTail Asia is the only event you need to attend to be updated on the trends and growth of innovation and investment in the retailing channel. Our programme is entirely dedicated to help you better understand the online customer’s behaviour and how you can achieve consistent growth and drive conversions.',
        'logo': '',
        'type': '',
        'date': '7-9 March, 2017',
        'image': ''
      },
      {
        'name': 'Festival of Media Asia Pacific',
        'address': '',
        'website': 'http://www.festivalofmedia.com/asia-pacific',
        'description': "Festival of Media Asia Academy provides a platform for the industry's next generation of leaders to learn about the key trends and insights in the sector.\nThe two-day programme offers a unique mixture of high-level presentations and training, and multidisciplinary and multicultural syndicate groups. It also tackles a real-life Asia marketing challenge from a brand and offers as a rigorous mentoring system.",
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Forbes’ 30 Under 30 Asia',
        'address': '',
        'website': 'http://www.forbesunder30summitasia.com/',
        'description': 'Forbes’ 30 Under 30 Asia list highlights 300 young leaders and entrepreneurs from across Asia who are changing the face of their industries in the region.\nThe Under 30 Summit Asia will bring these game changers together, as well as industry-leading judges and selected VIPs. The summit will feature panels, TED-style presentations, key notes as well as mentorship from successful business leaders.\nThe Infocomm Development Authority (IDA) of Singapore is the host partner of the summit, the event is part of Singapore’s Smart Nation Innovations Week, a festival where tech meets innovation.\nIn addition to these entrepreneurial game changers, the program will also feature leading chefs, entertainers and even a fun pitch session where selected start-ups have the opportunity to put across their ideas to venture capitalists.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'FOSSASIA',
        'address': '',
        'website': 'http://fossasia.org/',
        'description': 'FOSSASIA is the premier Free and Open Source technology event in Asia for developers, start-ups, and contributors. Projects at FOSSASIA range from open hardware, to design, graphics and software. FOSSASIA was established in 2009. Previous events took place in Cambodia and Vietnam.',
        'logo': '',
        'type': '',
        'date': 'March 2017',
        'image': ''
      },
      {
        'name': 'GeekBrunchSG',
        'address': '',
        'website': 'http://geekbrunch.sg',
        'description': 'Geek Brunch is a biannual social gathering of geeks — engineers, makers and designers — inviting and welcoming anyone curious to know more about this brilliant community. Most importantly, as confirmed by the community, it is about making new friends and having fun!',
        'logo': '',
        'type': '',
        'date': 'Oct 2016',
        'image': ''
      },
      {
        'name': 'ICRA',
        'address': '',
        'website': 'http://icra2017.org/',
        'description': 'IEEE International Conference on Robotics and Automation 2017',
        'logo': '',
        'type': '',
        'date': '29 May-3 June 2017',
        'image': ''
      },
      {
        'name': 'InnoTribe',
        'address': '',
        'website': 'http://innotribe.com/',
        'description': 'Launched in 2009, Innotribe was created to identify emerging trends in financial services innovation and generate discussions about how these trends could impact the industry going forward. Bringing together innovators, bank representatives, investors and leading financial institutions, Innotribe has adopted a proactive approach to innovation and FinTech. It provides a platform to understand the dynamics behind technology changes and focuses on the opportunities for transformation rather than the threats to current market practices.\nIn 2016, Innotribe will continue its renowned Startup Challenge and launch a new initiative the “Industry Challenge”, challenging the SWIFT community to actively collaborate and develop utility-based solutions for the benefit of the global financial services industry. Looking at stimulating debate and discussion within the financial services community, Innotribe will also continue to investigate a range of FinTech-related topics, connecting innovative, established and proven FinTech enterprises with academics and industry professionals through the publication of research papers and events.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Innovfest Unbound',
        'address': '',
        'website': 'http://innovfestunbound.com/innovfest-unbound',
        'description': 'Hosted by NUS Enterprise and unBound Media together with the Infocomm Development Authority of Singapore\nInnovFest unBound is the anchor event of Smart Nation Innovations, a week-long series of events that showcases Asia’s most innovative developments in the media-tech sphere.\nInnovFest unBound will leverage its partners and deliver a platform for the unBound community of start-ups, investors, brands, corporates and media to meet with the NUS Enterprise community of government agencies and leading researchers in a unique environment to forge new relationships, share knowledge and create business opportunities in Asia.',
        'logo': '',
        'type': '',
        'date': '17-18 May 2016',
        'image': ''
      },
      {
        'name': 'iOS Conf.SG',
        'address': '',
        'website': 'http://www.iosconf.sg/',
        'description': 'iOS Conf SG is the very first iOS conference in Singapore. Top iOS developers and designers of this region are going to share from their experience on how to build great iOS apps. There will be talks on Swift, Objective-C, iOS APIs, Wearables, Payments, Cloud Hosting, App Design and more.',
        'logo': '',
        'type': '',
        'date': '20-21 October 2016',
        'image': ''
      },
      {
        'name': 'IoT Asia',
        'address': '',
        'website': 'http://www.internetofthingsasia.com/',
        'description': 'The two-day conference component of IoT Asia 2016 also features over 100 international speakers and industry experts who share insights across five tracks focused on smart cities, IoT data analytics, design applications, wearables and IoT.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'ITB Asia',
        'address': '',
        'website': 'http://www.itb-asia.com/',
        'description': 'ITB Asia is an annually held three day B2B trade show and convention for the travel industry; it is designed to become the primary event for the Asia Pacific travel industry, much like its parent event – ITB Berlin. Now in its ninth year in Singapore, ITB Asia will taking place at Marina Bay Sands. It is organised by Messe Berlin (Singapore) Pte Ltd and supported by the Singapore Exhibition & Convention Bureau.\nToday, ITB Asia is the premier meeting place for the travel trade industry and a forum for establishing high-quality customer contacts and conducting businesses. This is where international exhibitors of all sectors within the travel-value chain commerce, and Asia Pacific’s leading travel companies and emerging small and medium-sized enterprises meet with top international buyers from the MICE, Leisure and Corporate Travel markets.',
        'logo': '',
        'type': '',
        'date': '19-21 October 2016',
        'image': ''
      },
      {
        'name': 'JSConf.Asia',
        'address': '',
        'website': 'http://2015.jsconf.asia/',
        'description': "JSConf.Asia brings Southeast Asia's open web developer community together to exchange, to learn and entertain. We showcase and teach the abilities of the web platform, inspiring the next generation of tools, methods and solutions. Come for the many amazing talks, exchange and collaborate at our coffee bar and make new friends over afternoon drinks. As with JavaScript, you've to step in, take a break and find out yourself what this is. All we want to share ahead of time is: It's a bit like TED, just for web devs.",
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'kopiJS',
        'address': '',
        'website': 'https://kopijs.org/',
        'description': 'Kopi.JS is a casual social gathering for engineers, designers and makers in Singapore. We hang out together, drink Kopi? and talk about almost anything!\nKopi.JS is for anyone who build, design and make things. Those who are new and curious are welcomed too! There are no speakers and no presentations.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Next Money Asia',
        'address': '',
        'website': 'http://www.meetup.com/NextMoneySG/',
        'description': 'Come together to discuss the intersection of banking, design and technology in creative spaces, with inspiring people, talking about really interesting and global topics, with a few drinks to boot. Casual, entrepreneurial, inquisitive minds are welcome!',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'PHP Conference Asia',
        'address': '',
        'website': 'https://2016.phpconf.asia/',
        'description': 'Come and meet with the fastest growing PHP communities in Asia. More than 300 attendees are expected in this single track conference.',
        'logo': '',
        'type': '',
        'date': '23-24 August 2016',
        'image': ''
      },
      {
        'name': 'PyCon SG',
        'address': '',
        'website': 'https://pycon.sg/',
        'description': 'PyCon SG is a conference about the programming language Python. It is a community effort driven by the members of the Python User Group Singapore.',
        'logo': '',
        'type': '',
        'date': '23-25 June 2016',
        'image': ''
      },
      {
        'name': 'RedotRubyConf 2016',
        'address': '',
        'website': 'http://www.reddotrubyconf.com/',
        'description': 'A two-day, single track Ruby conference in Singapore (& largest in South East Asia) that brings Rubyists from all over the World together for two days of learning, learning and more learning.',
        'logo': '',
        'type': '',
        'date': '23-24 June 2016',
        'image': ''
      },
      {
        'name': 'Rework Deep Learning Summit',
        'address': '',
        'website': 'https://www.re-work.co/',
        'description': 'The Deep Learning Summit is the next revolution in artificial intelligence. Explore the impact of image & speech recognition as a disruptive trend in business and industry. How can multiple levels of representation and abstraction help to make sense of data such as images, sound, and text. Hear the latest insights and technology advancements from industry leaders, startups and researchers.',
        'logo': '',
        'type': '',
        'date': '20-21 October 2016',
        'image': ''
      },
      {
        'name': 'Singapore Fintech Festival',
        'address': '',
        'website': 'http://www.fintechfestival.sg/',
        'description': 'The Festival, organised by the Monetary Authority of Singapore (MAS), in partnership with the Association of Banks in Singapore (ABS), will bring together a series of distinct FinTech events for the global FinTech community.',
        'logo': '',
        'type': '',
        'date': '14-18 November 2016',
        'image': ''
      },
      {
        'name': 'SITEX - Startup Alley',
        'address': '',
        'website': 'http://bit.ly/26gmzCA',
        'description': 'The consumer lifestyle IT event in Singapore, where consumers can purchase, experience and get an exclusive, first hand look at some of the innovative technologies and products available in the market. There will be a specially carved out space dubbed “Startup Alley” where consumer tech startups can come in to showcase their latest solutions. Expected footfall is >300,000 over the span of 4 days.',
        'logo': '',
        'type': '',
        'date': '24-27 November 2016',
        'image': ''
      },
      {
        'name': 'Smart Nation Innovations Week',
        'address': '',
        'website': 'http://www.sni2016.com/',
        'description': 'Comprising four pillar events—InnovFest unBound, Forbes Under 30 Summit Asia, Tech Saturday, Big Bang Data— the Smart Nation Innovations Week reached to more than 15,000 local and international participants across different communities, driven by a common interest to share ideas on harnessing emerging technologies to develop innovative solutions for everyday challenges.\nThe events brought together key players in the global and local tech ecosystems, including tech innovators, data developers, corporates and brands, start-ups, investors, researchers, government representatives as well as Asia’s top young innovators to exchange valuable insights and spark new collaborations, thus reinforcing Singapore’s position as a leading innovation hub for cutting edge technologies in the world.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Strata+Hadoop',
        'address': '',
        'website': 'http://conferences.oreilly.com/strata/hadoop-big-data-sg',
        'description': 'Strata + Hadoop World is where cutting-edge data science and new business fundamentals merge. It’s a deep-immersion experience where data scientists, analysts, and business executives dissect case studies, develop new skills, share emerging best practices, and build the future of big data.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'Tech Saturday',
        'address': '',
        'website': 'http://www.techsaturday2016.sg/',
        'description': 'Tech Saturday is a fun-filled tech experiential event open to everyone to learn, build and play.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'TechInAsia Conference',
        'address': '',
        'website': 'http://events.techinasia.com/singapore/',
        'description': 'Tech in Asia ’s signature 2‐day conferences are held annually in Singapore, Bangalore, Tokyo, and Jakarta. They are among Asia’s largest conferences organized for the region’s tech ecosystem. TIA conferences bring together entrepreneurs, investors, medias, corporations, developers and students to learn about the startup community.',
        'logo': '',
        'type': '',
        'date': '12-13 April 2016',
        'image': ''
      },
      {
        'name': 'TEDxSingapore',
        'address': '',
        'website': 'https://www.TEDxSingapore.sg',
        'description': 'A multi-disciplinary community-created media platform exploring the convergences of different fields, with 100,000 local followers and 40,000 overseas, and platformed near 200 speakers since 2009.',
        'logo': '',
        'type': '',
        'date': '',
        'image': ''
      },
      {
        'name': 'UXSG',
        'address': '',
        'website': 'http://www.uxsg.org/',
        'description': 'UXSG is a community initiative to create a platform to connect UX professionals across disciplines and cultures. It is a platform made for and by UX professionals to foster stronger professional collaborations and personal friendships.\nUXSG Conference 2016 is a two-and-half day event that expects to attract over 500 local and foreign attendees from a wide range of disciplines, professions and industries.',
        'logo': '',
        'type': '',
        'date': '7-9 September 2016',
        'image': ''
      },
      {
        'name': 'WebInTravel 2016 Conference',
        'address': '',
        'website': 'http://www.webintravel.com/events/wit-2016-conference/',
        'description': 'Held for the last 11 years, WIT is the largest online travel gathering in Asia Pacific and brings together global and regional leaders to discuss the future of online travel.',
        'logo': '',
        'type': '',
        'date': '17-19 October 2016',
        'image': ''
      },
      {
        'name': 'Slush Singapore 2016',
        'address': '',
        'website': 'http://singapore.slush.org',
        'description': 'Slush is a student-driven non-profit movement originally founded to change attitudes towards entrepreneurship. Slush is now spreading globally, built by a dedicated community of entrepreneurs, investors, students, and professionals to build a world-wide startup community.\n\nFor the first time, Slush is coming to Singapore - partnering TechVenture and is happening under the first ever Singapore Week of Innovation and Technology (SWITCH) where the best and brightest minds around the world with the ambition of taking their business to the next level will gather to learn from each other.',
        'logo': '',
        'type': '',
        'date': '20 September 2016',
        'image': ''
      },
      {
        'name': '#startathon',
        'address': '',
        'website': 'http://www.hackathon.com/singapore/singapore-river/startathon-learn-play-20961999906',
        'description': 'A 30-hour hackathon for you to rethink, prototype and validate business ideas! Differently from the usual hackathons, #startathon will focus on learning and actualising. Several masterclasses are held during the event, on topics such as Internet of Things, Mobile App Development, Digital Fabrication, and Business Modelling. You will also be creating a prototype of your idea with the latest tools in open source hardware (Arduino, Raspberry Pi, Particle Photon, ESP8266) and IoT development boards. There will also be equipment, tools and materials for traditional and digital fabrication, such as 3D printers, laser cutters, and many more!',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'AIA-Konica Minolta Digital Health Hackathon',
        'address': '',
        'website': 'http://www.upsingapore.com/events/aia-konica-minolta-digital-health-hackathon/',
        'description': "A Hackathon to develop technological solutions for revolutionizing today's healthcare. Preventing, diagnosing and treating diseases through technology and a good business model. This is your chance to be part of this digital health movement!",
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Angelhack Singapore',
        'address': '',
        'website': 'http://angelhack.com/angelhack-singapore-2016/',
        'description': 'AngelHack, a female-owned, female-majority company, is the world’s largest and most diverse global hacker community, helping to drive open innovation of tech products, platforms and brands with extraordinary smarts, scale and speed.\nKnown as pioneers of global hackathons for more than four years, AngelHack’s more than 97,000 developers, designers, and entrepreneurs compete to build, test and launch new solutions over the course of a weekend.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'AppChallenge 2015',
        'address': '',
        'website': 'http://appchallenge.singaporeair.com/',
        'description': 'AppChallenge is SIAs first technology challenge, or hackathon, based on the theme of ‘Your Travel, Your Way’. Coders will be provided with real-world business challenges to stretch their creativity and technical ability to develop apps for the modern traveller.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Changi Airport Hackathon',
        'address': '',
        'website': 'http://www.upsingapore.com/events/changi-airport-hackathon/',
        'description': 'At this Hackathon, Changi Airport Group (CAG) invited start-ups and passionate citizens to take a fresh look at the traveller experience – from even before the traveller sets foot in the airport, to the experience of millions of transit travellers the airport hosts every year, to our visitors who land at the airport to begin their Singapore trip.',
        'logo': '',
        'type': '[Hackathon]',
        'date': 'May 16-17, 2017',
        'image': ''
      },
      {
        'name': 'Clean & Green Hackathon 2015',
        'address': '',
        'website': 'http://www.upsingapore.com/events/clean-green-hackathon-2015/',
        'description': 'The Clean & Green Hackathon 2015 (19 to 21 June), co-organised by UP Singapore and the National Environment Agency, is an exciting opportunity to apply your expertise and tackle environmental challenges, such as encouraging the community to share the effort in maintaining our public spaces and reduce and recycle waste, particularly at festivals and events.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Data Analytics Challenge',
        'address': '',
        'website': 'http://www.dextra.sg/challenges/ministry-of-defence-data-analytics-challenge/',
        'description': 'This technical challenge is a lead-up to the actual Data Analytics Challenge conducted by the MINDEF Information Systems Division (MISD) in partnership with DSTA, to leverage data analytics towards the intended outcomes of evidence-based decision making, service innovation, and proactive risk management.\nIn this challenge, you are provided with a dataset containing Human Resource (HR) data. The goal is to analyse and manage employee retention by identifying the key factors contributing to people staying and leaving the organisation. In order to do this effectively, we want to be able to make use of a model that depicts how employees make turnover decisions so as to better formulate retention strategies.\nParticipating in this technical challenge gives you a chance at being shortlisted to participate in the actual MINDEF Data Analytics Challenge. At least 10 best teams will get to solve challenging problem statements posed by the various lines of businesses within MINDEF/SAF.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Data in The City',
        'address': '',
        'website': 'http://www.upsingapore.com/events/data-city-hackathon/',
        'description': '“Data in the City”, a 2-day Hackathon was organised by the Infocomm Development Authority of Singapore (IDA) and held from Aug 23 – 25, 2013, in partnership with UP Singapore. Attracting over 150 participants, the hackathon brought together urban planners, architects, sustainability experts, technologists, researchers, developers and designers to co-create new prototypes to help Singapore become a more livable, competitive and sustainable city.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'DBS Blockchain Hack',
        'address': '',
        'website': 'https://e27.co/event/dbs-blockchain-hack/',
        'description': '',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'DBS Talent Conference Hackathon 2015',
        'address': '',
        'website': 'https://www.ideatory.co/dbs-hackathon/',
        'description': '',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Designathon 2016',
        'address': '',
        'website': 'http://designathon.sg/about-us/',
        'description': 'Meet and work with talented and passionate people like yourself – designers, developers, business experts, healthcare and eldercare providers – to design solutions for enhancing the process and experience of ageing in Singapore.\nDesignathon 2016 is a 36-hour design challenge organised by the Asian Insights & Design Innovation unit of the Council.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Dreambrewery Hackathon',
        'address': '',
        'website': 'http://singapore.impacthub.net/dream-brewery-hackathon',
        'description': 'Dreambrewery Hackathon was organized by Budweiser, a beer company. Attendees had access to partner APIs which helped guide teams in creating viable prototypes - of web and mobile apps - addressing three key challenges:\n- Beer & Food Pairing\n- Gamifying the F&B industry\n- Socially Responsible Drinking',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'FinTechathon',
        'address': '',
        'website': 'https://e27.co/event/fintechathon/',
        'description': 'Startupbootcamp FinTech challenge you to hack compliance solutions in the very first FinTechathon in Asia. Whether you a hard core developer, designer, compliance master or just hackathon obsessor, join Startupbootcamp in hacking solutions in KYC, AML, Data Security and SME Banking.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Fishackathon',
        'address': '',
        'website': 'http://www.fishackathon.co/singapore/',
        'description': "Fishackathon was established to congregate brilliant minds for the purpose of developing usable technology solutions to address the problem of worldwide overfishing. Fishackathon 2016 is taking place on Earth Day Weekend (April 22-24) in over 40 cities around the world. Fishackathon will bring together computer programmers who will #codeforfish, find innovative ways to collect and analyze data, and find solutions to our world's fisheries and oceans issues.",
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'GaussToys Hackathon @ NTU',
        'address': '',
        'website': 'http://gausstoys.com/TEI16/GaussStudio',
        'description': 'GaussStudio: designing seamless tangible interactions on portable displays" provides hands-on experiences for participants about how to use magnetics to design and realize their ideas through building seamless and expressive tangible interfaces on conventional portable displays. Through a series of form giving, electronic prototyping, and toys hacking exercises, participants learn how to exploit natural hand and micro interactions through designing the expressions and affordances of physical objects, and know how to utilize physical constraints to provide additional kinesthetic awareness and haptic feedback to enrich the tangible and embodied interaction design.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'GEO Hackathon 2015',
        'address': '',
        'website': 'http://geohackathon2015.onemakergroup.sg/',
        'description': 'The GeoHackathon 2015, organised by the Singapore Land Authority (SLA), taps on the collective brilliance of the brightest minds in the community to solve real-world problems using Geospatial Information Systems and Technology (GIST). Coupling Internet of Things (IoT) devices with GIST expands the possibility space to allow for the flow of data between objects and between objects and users, leading to real time adjustments to users’ experiences that might otherwise require a lot of back end adjustments.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Hack & Roll',
        'address': '',
        'website': 'http://hacknroll.nushackers.org/2016/index.html',
        'description': 'Hack&Roll is an annual 24-­hour Hackathon organized by NUS Hackers, a student­-run organization committed to spreading hacker culture. Designed to grow and strengthen the local hacking community, Hack&Roll is an open platform for hackers to gather, collaborate, and build new things. In the spirit of hacking, we celebrate not just the most useful products, but also reward projects that are "awesome but useless" and for factors such as sheer overall coolness.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Hackathon@SG',
        'address': '',
        'website': 'https://www.ida.gov.sg/Sub/ITSC/CODE-XTREMEAPPS-COMPETITION/HACKATHONSG2015',
        'description': 'Organised by the Infocomm Development Authority of Singapore and IT Standards Committee, and supported by the Ministry of Finance and SPRING Singapore, Hackathon@SG offered a plethora of technology for participants to develop their applications with. These included more than 11,000 datasets and APIs via data.gov.sg; Internet of Things technologies, virtual reality technologies and cloud technologies.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Hyper Haze Hack 2015',
        'address': '',
        'website': 'http://www.hackathon.io/hyper-haze',
        'description': 'The event aimed to build novel and practical applications on the seasonal haze situation that blankets Singapore every year. Hyper Haze Hack brought together developers, bloggers, environmental organizations and media associations in an unprecedented civic hack to enhance our media reporting and response to the haze through the use of data.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Manpower Hackathon',
        'address': '',
        'website': 'http://www.upsingapore.com/events/manpower-hackathon/',
        'description': 'The inaugural Manpower Hackathon aimed at finding Singapore-wide solutions that could enable change and empower employees from the various service and construction sectors in Singapore. Participants came up with ideas that could help educate and inform employees across Singapore, or improve their workplace safety and health.\nThe three themes for this hackathon were:\n•\tImproving Engagement with Workers\n•\tDesigning the Next Generation Work Pass\n•\tDriving Excellence in Workplace Safety and Health',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Masters of Code - Global Hackathon Competition',
        'address': '',
        'website': 'http://newsroom.mastercard.com/asia-pacific/digital-press-kits/mastercard-masters-of-code-global-hackathon-competition/',
        'description': 'Sponsored and hosted by MasterCard and organised by AngelHack, Masters of Code has one goal: to bring together the world’s top developers, designers and entrepreneurs to take on the MasterCard APIs to build the future of commerce.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'MIT Hacking Medicine',
        'address': '',
        'website': 'http://hackingmedicine.mit.edu/events-list/mit-hacking-medicinesg-2015/',
        'description': 'Healthcare hackathons bring clinicians and other healthcare professionals together with a diverse group of engineers, students, programmers, designers and entrepreneurs to solve the toughest problems in healthcare. These events create networks, foster vibrant communities and have resulted in innovative solutions to complex problems. In many cases, projects have evolved into new venture opportunities for start-up companies.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'New Age Hackathon',
        'address': '',
        'website': 'http://www.newage.com.sg/',
        'description': 'NewAge Hackathon is a 24-hour competition, which allows you to get your hands into making your very own mobile application.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Shell Stem Youth Innovation Challenge 2016',
        'address': '',
        'website': 'http://www.shell.com.sg/sustainability/communities/shell-in-the-community/shell-stem-youth-innovation-challenge.html',
        'description': 'The Shell STEM Youth Innovation Challenge opens up an exciting avenue for students from diverse backgrounds to come together and showcase their creativity and innovation in science. It is organised by Shell and the Science Centre Singapore and has grown to become a key annual event in the school calendar.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Singapore Fintech Festival',
        'address': '',
        'website': 'http://www.fintechfestival.sg/',
        'description': 'The inaugural Singapore FinTech Festival will bring together a series of distinct FinTech events back-to-back in the week of 14-18 November 2016. Look forward to our Hackcelerator Demo Day, conferences, Innovation Lab Crawl, MAS FinTech Awards, and a closing party.\nWhether you’re a start-up, technology company, investor, financial institution, research institute or innovation professional, you’ll want to be a part of it.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '14-18 November 2016',
        'image': ''
      },
      {
        'name': 'Singapore Grand Challenge',
        'address': '',
        'website': 'http://www.sggrandchallenge.com/',
        'description': 'The Grand Challenge in Digital Health - sponsored by MSD, is a 3-day challenge for students from academic institutions across Singapore to come together and showcase their ideas on how information technology could influence and transform global healthcare to create value for the world. Each Academic institution will choose 4 full-time students to come together and offer their insights to executives from leading IT and healthcare companies. The winners will have a chance to use their Grand Prize money to realize their ideas.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Smart Port Hackathon 2015',
        'address': '',
        'website': 'http://www.upsingapore.com/events/smart-port-hackathon-2015/',
        'description': 'Improve the efficiency and productivity of the maritime and port services supply chains in the Port of Singapore ecosystem.\nAt the Smart Port Hackathon 2015, we were looking for innovative ideas that leveraged technology, created synergies, and provided seamlessness and reliability in information flows and operational processes among the many stakeholders to maintain Singapore’s position as a world-class international maritime centre.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Social Innovators Hack',
        'address': '',
        'website': 'http://www.upsingapore.com/events/social-innovators-hack/',
        'description': 'At this hackathon, participants are exposed to the challenges of the Social sector. They spark new ways to foster stronger collaborations and communications amongst people in the private, public and people sectors, and build a robust social marketplace to accelerate the growth of the Social sector.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Internet of Things Hackathon 2015',
        'address': '',
        'website': 'http://iothackathon.sg/',
        'description': 'A Hackathon that puts together physical sensors and the Internet of Things to help tackle real world challenges – in wellness, geriatrics and construction.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'Emirates Travel Hackathon',
        'address': '',
        'website': 'http://emirateshackathon.com/',
        'description': "Emirates Travel Hackathon is an exciting 24-hour coding marathon bringing together talented developers and designers to build new and innovative travel-centric applications using web and mobile API's.",
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'UNited We Hack',
        'address': '',
        'website': 'http://unitedwehack.com/',
        'description': 'a 24 hour hackathon to innovate in the field of women’s financial and economic empowerment. This hackathon is open to men and women who are interested in using the latest API’s to create cutting edge solutions around gender equity and financial equality.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      },
      {
        'name': 'YouthHack',
        'address': '',
        'website': 'http://singapore.youthhack.net/',
        'description': 'YouthHack Singapore Startup Challenge is for high school and university students to learn more about startups and entrepreneurship.',
        'logo': '',
        'type': '[Hackathon]',
        'date': '',
        'image': ''
      }
    ]
  },
  { // GOVERNMENT PROGRAMS
    'model': 'Government_Program',
    'documents': [
      {
        'name': 'EDB Singapore',
        'address': '',
        'website': 'https://www.edb.gov.sg/content/edb/en.html',
        'description': "We are the lead government agency for planning and executing strategies to enhance Singapore's position as a global business centre. We dream, design and deliver solutions that create value for investors and companies in Singapore. Our mission is to create for Singapore, sustainable economic growth with vibrant business and good job opportunities.",
        'logo': '',
        'type': '[Government]',
        'image': ''
      },
      {
        'name': 'iDA Singapore',
        'address': '',
        'website': 'https://www.ida.gov.sg/',
        'description': 'The mission of the Infocomm Development Authority of Singapore (IDA) is to develop information technology and telecommunications within Singapore with a view to serve citizens of all ages and companies of all sizes. IDA does this by actively supporting the growth of innovative technology companies and start-ups in Singapore, working with leading global IT companies as well as developing excellent information technology and telecommunications infrastructure, policies and capabilities for Singapore.',
        'logo': '',
        'type': '[Government]',
        'image': ''
      },
      {
        'name': 'IE Singapore',
        'address': '',
        'website': 'http://www.iesingapore.gov.sg/',
        'description': 'International Enterprise (IE) Singapore is the government agency driving Singapore’s external economy. We spearhead the overseas growth of Singapore-based companies and promote international trade. Our vision is a thriving business hub in Singapore with Globally Competitive Companies (GCCs) and leading international traders.',
        'logo': '',
        'type': '[Government]',
        'image': ''
      },
      {
        'name': 'JTC',
        'address': '',
        'website': 'http://www.jtc.gov.sg/about-jtc/pages/default.aspx',
        'description': "JTC Corporation (JTC) is the lead agency in Singapore to spearhead the planning, promotion and development of a dynamic industrial landscape. Since its inception in 1968, JTC has played a major role in Singapore's economic development journey by developing land and space to support the transformation of industries and create quality jobs.",
        'logo': '',
        'type': '[Government]',
        'image': ''
      },
      {
        'name': 'MAS',
        'address': '',
        'website': 'http://www.mas.gov.sg/',
        'description': "The Monetary Authority of Singapore is Singapore's central bank and financial regulatory authority. It administers the various statutes pertaining to money, banking, insurance, securities and the financial sector in general, as well as currency issuance.",
        'logo': '',
        'type': '[Government]',
        'image': ''
      },
      {
        'name': 'Media Development Authority Singapore',
        'address': '',
        'website': 'http://www.mda.gov.sg/Pages/default.aspx',
        'description': 'A statutory board under the Ministry of Communications and Information, MDA was formed on 1 January 2003 by the merger of the Singapore Broadcasting Authority, the Films and Publications Department and the Singapore Film Commission.\nThe Media Development Authority of Singapore (MDA) promotes and regulates the media sector, so as to contribute towards economic growth and help foster a cohesive and inclusive society in Singapore​.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'National Research Foundation',
        'address': '',
        'website': 'http://www.nrf.gov.sg/',
        'description': "The National Research Foundation (NRF), set up on 1 January 2006, is a department within the Prime Minister's Office. The NRF sets the national direction for research and development (R&D) by developing policies, plans and strategies for research, innovation and enterprise. It also funds strategic initiatives and builds up R&D capabilities by nurturing research talent. The NRF aims to transform Singapore into a vibrant R&D hub that contributes towards a knowledge-intensive, innovative and entrepreneurial economy; and make Singapore a magnet for excellence in science and innovation.",
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'Spring Singapore',
        'address': '',
        'website': 'http://www.spring.gov.sg/Pages/Home.aspx',
        'description': 'SPRING Singapore is an agency under the Ministry of Trade and Industry responsible for helping Singapore enterprises grow and building trust in Singapore products and services. As the enterprise development agency, SPRING works with partners to help enterprises in financing, capability and management development, technology and innovation, and access to markets. As the national standards and accreditation body, SPRING develops and promotes an internationally-recognised standards and quality assurance infrastructure. SPRING also oversees the safety of general consumer goods in Singapore.',
        'logo': '',
        'type': '',
        'image': ''
      },
      {
        'name': 'WDA',
        'address': '',
        'website': 'http://www.wda.gov.sg/',
        'description': "For Singapore's workforce to remain competitive and employable in today's fast-changing workplace, they must have both knowledge and skills that are relevant, current and sought after by employers.\nIn turn, this will also help companies strengthen their capabilities, remain competitive, and contribute to stronger economic growth for Singapore.\nThe Singapore Workforce Development Agency (WDA) aims to help workers advance in their careers and lives by developing and strengthening skills-based training for adults.\nWe work with various partners--including employers, industry associations, the Union and training organisations--to develop relevant skills-based training that is accessible to all in the Workforce, whether young or old, from rank-and-file to professionals and executives.",
        'logo': '',
        'type': '',
        'image': ''
      }
    ]
  }
]