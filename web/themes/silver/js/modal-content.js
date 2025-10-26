// Part 2 of 5
function getContentArticle(key) {
    const articles = {
        'Cadet Routine': {
            title: "A Day in the Life of a Cadet",
            content: `
            <p>Life as a cadet is a structured blend of academic rigor, physical training, and character development. The day begins before dawn with physical training (PT) or drill, followed by a packed schedule of lectures, laboratory sessions, and military instruction.</p>
            <img src="https://via.placeholder.com/800x400?text=Morning+PT+at+Academy" alt="Cadets doing morning PT">
            <p>Afternoons are typically dedicated to professional training, which might include seamanship, weapon handling, or naval tactics. Evenings conclude with study periods, mess dinner, and often, organized sports or club activities, ensuring a holistic development approach.</p>
            <p>The discipline instilled through this routine is fundamental to developing the leadership qualities required of a Naval Officer.</p>
            `
        },
        'Accommodation': {
            title: "Cadet Accommodation and Squadron Life",
            content: `
            <p>Cadets live in squadrons, which serve as their living and functional units. These accommodations are designed to foster camaraderie, teamwork, and a sense of shared responsibility. Each squadron has dedicated officers and staff to oversee the development of the cadets.</p>
            <img src="https://via.placeholder.com/800x400?text=Cadet+Barracks+Interior" alt="Cadet Barracks">
            <p>Rooms are typically shared during the initial stages of training, transitioning to single occupancy in later years. Emphasis is placed on maintaining immaculate standards of cleanliness and organization, reflecting naval discipline.</p>
            `
        },
        'Cafeteria': {
            title: "Cadet Cafeteria and Nutrition",
            content: `
            <p>Nutrition is key to maintaining the high physical standards required. The cadet cafeteria provides balanced, high-protein meals designed by professional dietitians. Meals are served in a formal setting to reinforce social etiquette and discipline.</p>
            <p>We offer a variety of cuisines to cater to diverse backgrounds, ensuring cadets receive proper sustenance for their rigorous daily schedule.</p>
            `
        },
        'Healthcare': {
            title: "On-Campus Healthcare and Wellness",
            content: `
            <p>A fully equipped medical center with qualified military doctors and support staff is available 24/7. Cadets receive regular medical check-ups and immediate attention for injuries sustained during training.</p>
            <p>Wellness programs focusing on mental health and stress management are also a core part of the healthcare system, ensuring comprehensive well-being.</p>
            `
        },
        'Mess': {
            title: "The Cadet Mess Protocol",
            content: `
            <p>The Mess is more than just a dining hall; it is a center of social and military training. Formal mess dinners are regularly conducted to teach cadets the customs, traditions, and etiquette essential for officership.</p>
            <p>It is a vital part of the training curriculum, fostering espirit de corps and respect for the service hierarchy.</p>
            `
        },
        'Academic Curriculum': {
            title: "Academic Excellence and Technical Focus",
            content: `
            <p>The academic curriculum is structured to provide a strong theoretical foundation in engineering, science, and humanities. Our affiliated university grants the degrees, ensuring that the training meets the highest national educational standards.</p>
            <p>Specialized naval subjects, including navigation, shipbuilding, and maritime law, are seamlessly integrated with core university courses. This dual focus ensures that cadets graduate as highly competent technical officers ready for the challenges of the modern naval environment.</p>
            <img src="https://via.placeholder.com/800x400?text=Cadet+in+Classroom" alt="Cadet in Classroom">
            `
        },
        'Infrastructure': {
            title: "State-of-the-Art Academic Infrastructure",
            content: `
            <p>The Academy boasts modern lecture halls, advanced computer labs, and specialized engineering workshops. We provide simulation facilities for navigation and combat systems training, mirroring real-world naval technology.</p>
            <p>Our central library is a hub for learning, featuring extensive digital and physical collections to support research and academic studies across all disciplines.</p>
            `
        },
        'Physical Training': {
            title: "The Pillar of Fitness: Physical Training",
            content: `
            <p>Physical fitness is non-negotiable for a naval officer. The Physical Training (PT) regimen is designed to build endurance, strength, and mental fortitude. It includes long-distance running, circuit training, obstacle course negotiation, and water survival techniques.</p>
            <img src="https://via.placeholder.com/800x400?text=Obstacle+Course+Training" alt="Cadets on an obstacle course">
            <p>Successful completion of PT is essential for progress, reinforcing the value of health and physical readiness in a demanding military career.</p>
            `
        },
        'Equitation': {
            title: "Equitation and Horsemanship",
            content: `
            <p>Equitation training instills courage, patience, and control—qualities directly transferable to command at sea. Cadets are trained in basic to advanced horsemanship on campus, with access to professional trainers and stables.</p>
            <p>This unique training element is essential for all-round personality development and confidence building.</p>
            `
        },
        'Seamanship': {
            title: "The Art and Science of Seamanship",
            content: `
            <p>Seamanship training covers everything from rope work and knot tying to ship stability and damage control. It is the foundation of naval professional competence, taught in both classroom settings and hands-on exercises on training vessels.</p>
            <p>Cadets learn the practical skills necessary to operate and manage a vessel safely under all conditions.</p>
            `
        },
        'Watermanship': {
            title: "Watermanship and Survival Skills",
            content: `
            <p>Focusing on water-based activities like swimming, diving, sailing, and boat handling, watermanship ensures every officer is comfortable and capable in the maritime environment. Survival swimming and diving drills are rigorous and mandatory.</p>
            <img src="https://via.placeholder.com/800x400?text=Sailing+Drill" alt="Cadets doing a sailing drill">
            `
        },
        'Weapon Training': {
            title: "Small Arms and Weapon Proficiency",
            content: `
            <p>Cadets receive thorough instruction in the safe and effective use of small arms and personal weapons. Training includes theory, simulation, and live firing exercises to achieve a high level of combat readiness and discipline.</p>
            `
        },
        'Drill': {
            title: "Parade Ground and Foot Drill",
            content: `
            <p>Drill teaches fundamental military discipline, synchronization, and immediate obedience to command. The parade ground is where cadets learn precision, bearing, and the importance of teamwork.</p>
            `
        },
        'Camps': {
            title: "Adventure and Leadership Camps",
            content: `
            <p>Outdoor camps, including survival camps and adventure trips, challenge cadets physically and mentally. These exercises develop leadership, resilience, and the ability to operate effectively in austere conditions.</p>
            `
        },
        'Hobby Club': {
            title: "Hobby Clubs and Extracurriculars",
            content: `
            <p>A range of hobby clubs—from photography and music to debate and innovation—provide cadets with outlets for personal growth and creativity. These activities ensure a balanced life and foster skills beyond the military domain.</p>
            `
        },
        'Sports': {
            title: "Competitive Sports and Teamwork",
            content: `
            <p>Cadets participate in various sports at inter-squadron and inter-service levels. Sports are vital for team building, competitive spirit, and maintaining peak physical condition. Facilities include fields for football, hockey, cricket, and courts for tennis and basketball.</p>
            `
        },
        'INA Campus': {
            title: "INA Campus: The Cradle of Naval Leadership",
            content: `
                <p>The Indian Naval Academy, Ezhimala is Asia's largest Naval Academy. The Indian Naval Academy is situated in Kerala. It is situated at a distance of 35 kms from the historic city of Kannur and 135 kms from city of Mangalore. The Academy is surrounded by Mount Dilli, the serene Kavvayi backwaters and the majestic Arabian Sea. The campus occupies an area of 2452 acres, with a total perimeter of 22 kms. The Academy also includes a beach stretch of 7 kms. It also has a large area with a variety of flora and fauna. The important landmark of INA campus are the Headquarters, Parade Ground, Chola stadium, cadet squadrons, Katari Cadets’ Mess, aquatic complex, sports fields, officer residential area, naval sailors accommodation and civilian employees residential area. The campus provides facilities for training cadets in all aspects such as swimming and diving at Mulla Aquatic complex, Pereira Drill and Discipline complex to imbibe discipline among cadets, Angre Physical Training and Sports complex for developing team spirits and physical fitness and Marakkar Watermanship Training centre for yachting and rowing skills. The academy has world class library named as 'Panini' which is a five storied building with all facilities and training aids like internet and digital library. The campus is also nested with OOW/ROR simulator and Catspaw which help the cadets to learn seamanship activities and basic Rules of the Road and Ship Handling. The campus also provides auditorium facilities like Ramanujan and Orion where movies are screened every week. The campus has basic facilities for cadets like ATMs, stationery shops, tailor, cafeteria, canteen etc.</p>
                <img src="image/ambc.jpg" alt="INA Campus, Ezhimala">
                <p>It can accommodate 1500 cadets at a time. The library is equipped with all sorts of books of different branches and subjects. The library is also equipped with fiction and general awareness books. It also provides books relating to navy, ships and seas so that cadets can groom their knowledge well in their leisure time. The academy has two seminar halls where lectures are conducted as well as movies are screened every weekend for the entertainment of cadets. Both are centrally air-conditioned and have a capacity of 300- 800 cadets. Whereas academy is soon going to come up with an auditorium having capacity of 1800 cadets known as 'Kautilya'. The project is on verge of completion and soon cadets will be able to use the facility of this mega auditorium.</p>
            `
        },
        'Vision of INA': {
            title: "The Vision of the Indian Naval Academy",
            content: `
                <p>The principal role of the Indian Naval Academy is to impart basic and orientation training to all officer entrants of the Navy and Coast Guard, other than Special Duties List officers. The aim is to develop the trainees morally, mentally, physically and to imbibe in them the high ideals of loyalty, valour and patriotism in order to provide the service with officers who are dedicated to a career of Naval Service and have potential for future development to assume the highest responsibility of leadership. The Indian Naval Academy has been developed as a national prestigious project and is the ‘Cradle for Leadership’ in the Indian Navy. It is unique in concept and design which stands out as an outstanding monument. The ab-initio training imparted at the Academy will ensure that every officer who passes out through its portals will be leaders worthy of trust and confidence that the nation has reposed in them. It will also establish bridges of friendship across the ocean by training personnel from friendly foreign countries.</p>
                <img src="image/vision.jpg" alt="Vision of INA, Ezhimala">
                <p>The aim of the Indian Naval Academy is to prepare young men and women to be a professional officer in the navy by providing them sound education supplemented with the required professional naval training. It is intended that all officers joining the Navy will pass through this academy so that the entire officer cadre is suitably initiated into the naval way of life starting with a common controlled foundation. The academic curriculum is tailored to keep pace with the demands of modern technology. In addition, the Academy will condition the young men and women who have chosen the navy as a career with the mental and physical attributes to be able to exercise self-discipline, to perform efficiently under stress, to think and react quickly.</p>
            `
        },
        'History of INA': {
            title: "History of Indian Naval Academy",
            content: `
                <img src="image/history.jpg" alt="History INA, Ezhimala">
                <p>Before the National Defence Academy (NDA) was established in 1954, Indian Naval officer- cadets underwent four years of training at Dartmouth, United Kingdom with the Royal Navy and were commissioned as Sub Lieutenants upon their return. 'Direct' Entry Sub Lieutenants underwent basic training in the officer wing of the B & D School in Cochin.</p>
                <p>By 1968, the shortage of officers became a cause of concern. As in the case of sailors, intake had to be stepped up to meet the requirements of the Russian acquisition programme. The required strength of 3,500 officers by 1975 necessitated an annual intake of at least 150 cadets. Since the NDA could not take more than 65 naval cadets per year, it became necessary to start a RSES (REVISED SPECIAL ENTRY SCHEME), and set up a Naval Academy, separate from the NDA. A temporary location for the Naval Academy to function, therefore, was required till such times a permanent Naval Academy could be set up.</p>
                <p>In 1969, approval was accorded for the commencement of the RSES. Under this scheme, naval cadets in the age group 17-20 years who had passed the Intermediate examination could be recruited in the Executive Branch. This scheme was identical to the NDA's SES (SPECIAL ENTRY SCHEME) except that the initial training of one year was to be conducted at Cochin.</p>
                <p>A temporary Naval Academy was, therefore, set up at Cochin in May 1969. RSES training commenced in Jan 1970 and the first batch of executive cadets passed out of the Naval Academy in December 1970. The Naval Academy continued training RSES cadets until January 1974.</p>
                <p>In 1973, the NDA got affiliated to the JNU (JAWAHARLAL NEHRU UNIVERSITY), New Delhi.  NDA cadets, on successfully passing their final examinations, received a Bachelor of Science degree from the JNU. The RSES cadets of the Naval Academy were thus, out-of-sync with their NDA counterparts. It was, therefore, decided that instead of taking in pre-graduate candidates, it would be cost-effective to recruit Science graduates, thereby reducing the duration of their training at the Naval Academy.</p>
                <p>In July 1974, the first batch of GSES (GRADUATE SPECIAL ENTRY SCHEME) cadets joined the Naval Academy for an initial training period of six months. Whereas the original sanction was for a total of 80 cadets to be trained every year, the Naval Academy now trained 80 cadets every 6 months.</p>
                <p>As part of the 1974 reforms of naval training, it was decided that all officer courses should be conducted at the Naval Academy, and, it was to take over all the courses being conducted by the B & D School. The B & D School in Cochin was to be closed down after the shift of Direct Entry Seamen Training to Goa as soon as the STE (SAILORS’ TRAINING ESTABLISHMENT) was commissioned in 1976. From 1974 onwards, the Naval Academy, in addition to running basic courses for cadets, commenced conducting the following officer courses:</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Initial Training for Direct Entry officers of the Engineering and Electrical branches.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Naval Science Orientation Course for officers of the Supply Branch and officers from friendly foreign navies.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SDPPC (Specilal Duties Post Pomotion Course for sailors promoted to officers in the rank of Acting Sub Lieutenants in the SD cadre.)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DM (Divisional & Management Course.)</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lieutenants War Course.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upper Yardmen Course.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commanding Officers and Junior Commanders Course.</p>
                <h2>The Interim Naval Academy at Mandovi</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By 1976, the Naval Academy found that it was not cost effective to separately train cadets and  Acting Sub Lieutenants of various branches. It was decided, therefore, that initial training for cadets of the Executive Branch as also Acting Sub Lieutenants of all technical branches should be of the same duration, should have a common syllabus, and, should run concurrently. This was implemented from 1976 onwards.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After 1976 and the acceptance of the Third Pay Commission's recommendations regarding changes in sailors' conditions of service, the Boy Entry Scheme was dispensed with and only Direct entry matriculate sailors were recruited. Training effort and costs could be minimised by having only one STE at INS Chilka, which was expected to be commissioned in 1980.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the steady increase in the number of trainees in the 1970s, the Naval Academy found that it neither had the accommodation, nor the infrastructure to cope with extant training loads. It was, therefore, decided to obtain sanction for a new permanent Naval Academy. A decision was taken to re-locate the temporary Naval Academy from Cochin to INS Mandovi in Goa as soon as possible after the STE moved to INS Chilka. For this, it was necessary to remodel the existing STE at Mandovi to function as a Naval Academy for officer-level training. The Naval Academy eventually shifted to INS Mandovi in 1986.</p>
                <h2>Conceptual Requirements for the New Naval Academy</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The 'essential' requirement was for a site of 100 acres, in the vicinity of the sea or a lake for seamanship and waterman-ship training, near a railhead yet removed from the township. The 'desirable' requirements were that the location should be within a short distance of a naval port with a bracing and moderate climate, thrown in for good measure.</p>
                <h2>The Choice of Ezhimala</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ezhimala was chosen by Indian Navy to locate the Naval Academy due to its picturesque surroundings, seafaring traditions of the region and rich historical past. In 1982, the Government of India approved the Navy's proposal after the Government of Kerala agreed to provide the proposed 2500 acres of land and basic infrastructure for area development, free of cost. The predominant hill feature of Ezhimala, the Mount Dilli which is 260 m high. Mt Dilli Light house is situated in the southern part of the base and to the north lies with the Kavvayi backwaters.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name ‘Ezhimala’ is believed to be the malayalam equivalent of ‘Seven Hills’ and is derived from the seven hills dominating the skyline of this area. The place was also known as ‘Elimala’ meaning ‘Rat Hill’ possibly due to the large number of rodents infesting the forests here. The name 'Ezhimala' was derived from ‘Ezhil Malai’ meaning land of beauty. Folklore has it that the seven hills are part of the ‘Rishabadri’ mountain that fell to the earth when Lord Hanuman was carrying the mountain with Mrita Sanjivani and other herbs to Lanka.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The history of the area is well documented over the last 1500 years. The area has been successively ruled by the Ashoka and Vijayanagaram empires as well as by Tipu Sultan. Ruins of fortifications erected by Tipu Sultan can be seen near Mt Dilli light house. The area fell into British hands, after they defeated Tipu Sultan in the third Mysore war. The Portuguese are also known to have held this land during the nineteenth century. The name Mt Dilli is understood to be a refinement of Mt D'elli which was the original name given by the Portuguese.</p>
                <h2>Selection of Design Architects</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Naval Headquarters quite rightfully took the view that a Naval Academy was not built frequently, but once. After all, this Academy when commissioned was to provide us with the future leadership of the Indian Navy. The nation's best private architects, therefore, were invited to compete for the design of the prestigious Naval Academy.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The foundation stone was laid by the then Prime Minister (late) Shri Rajiv Gandhi on 17 January 1987 and in the same year,  Government approval for the design of the  Naval Academy by private architects and construction through consultants, was received. Consequently, in 1988, a PMB (Project Management Board) was constituted under the Defence Secretary, and a two-stage, all-India, architectural design competition was conducted.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soon after, in 1991, during the economic crisis in the country, the Central Government was forced to cut back spending for the construction of the Academy. Further, this development was not helped by litigation resulting from the land-acquisition process. Consequently, construction could be commenced only after a decade later.</p>
                <h2>Commencement of Training at Ezhimala</h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On 06 Apr 05, the base depot ship INS Zamorin was commissioned at Ezhimala as part of Phase I of the three phases under which the entire Naval Academy Project was planned. In addition to being the base depot ship for the Academy, Zamorin was tasked with the responsibility of conduct of training for Naval Orientation Courses for Direct Entry Officers and cadets inducted under the 10+2 Technical Entry Scheme. Training for the first such course commenced on 08 Aug 05.  Zamorin’s responsibility of providing training came to an end in Jan 09 with the inauguration of the Indian Naval Academy proper at Ezhimala.  A total of seven Naval Orientation Courses has passed out from the portals of Zamorin prior to this transformational change in roles. Zamorin continues to provide complete administrative and logistics support to the Indian Naval Academy.</p>
            `
        },
        'Support Organisations': {
            title: "Support Organisations at INA",
            content: `
                <h2>INHS NAVJIVANI</h2>
                <p>'Even tough guys need first aid'. With an aim of providing premier medical services, INHS Navjivani was established at the Indian Naval Academy. The medical services at the Indian Naval Academy are of world class standards and their round the clock service goes a long way in ensuring quality medical treatment. The hospital staff consists of Medical officers and nursing staff from Military Nursing Services. Promising to provide best medical assistance at all times, INHS Navjivani aims at quality in service and excellence in care. 
                    The hospital has different departments like Surgical, Dental, Gynaecology, Radiology, Diathermy centre etc. At INHS Navjivani the staff provides premier technology, facilities and patient care in a friendly manner. They endeavor to create a culture of continuous improvement to deliver a level of service excellence which is founded on the pride, dedication, and identity of every staff member serving in the Hospital. At different events conducted in INA the medical service team is always ready to tackle any situation and provide assistance to the concerned cadets. As safety precautions regular seminars on health and health care are conducted which in turn help cadets to face problems themselves and act accordingly in times of crisis.</p>
                <h2>INS ZAMORIN</h2>
                <p>INS Zamorin is the Station Headquarters which provides Administrative and Logistics support to INA, INHS Navjivani (Hospital), PMA (NAVAC) and MES (Ezhimala). It looks after the Seaward defense and security of the Station. Maintenance and management of Estate spread over 2540 acres with 22 km perimeter. It provides Communication Support to the complete station. The clothing support to all cadets and sailors are done by the station. INS Zamorin supervises all the three schools namely Navy Children School, Naval KG and Kendriya Vidyalaya. It provisions basic amenities to the station like accommodation of all Officers, Sailors and defense civilians and upkeep of Residential area. The Station also manages a Unit Run Canteen – CSD. Few  other facilities looked after by INS Zamorin are the Station Gas Agency, Petrol Pump, Ayurvedic Clinic and Station Restaurant.</p>
                <h2>PMA NAVAC</h2>
                <p>Established by the Indian Navy on 28 August 1982, as a novel, unique and efficient concept to steer the Naval Academy Project, Project Management Authority (PMA NAVAC) is the oldest naval organisation at Ezhimala.  It has the mandate and the responsibility for the initial set-up and subsequent augmentation of the INA at Ezhimala.  Since then, the organisation with various PD/DG NAVACs at the helm, has been steering the project in close coordination with multifarious stakeholders, such as the GoI/MoD, E-in-C’s Branch, local Military Engineering Services authorities, consultants and the firms executing the works.   Currently, the PMA NAVAC is steering the crucial augmentation of infrastructure under Phase II of the Naval Academy Project to enhance facilities for augmented strength of 1200 trainees.</p>
            `
        },
        'Annual Regatta': {
            title: "Annual Regatta 2025: Watermanship Showcase",
            content: `
                <p>The Annual Regatta is the premier event showcasing the watermanship skills of our cadets. It includes competitions in sailing, boat pulling, and kayaking, demanding exceptional physical fitness, teamwork, and an intimate understanding of the maritime environment.</p>
                <img src="image/admiralscup.jpg" alt="Cadets sailing during Regatta"> 
                <p>The event culminates in a grand prize ceremony, recognizing the squadron that demonstrates the highest level of proficiency across all water-based activities.</p>
            `
        },
        'Passing Out Parade': {
            title: "85th POP: Commissioning Ceremony",
            content: `
                <p>The Passing Out Parade (POP) marks the culmination of the cadets' rigorous training. It is a spectacular military ceremony where they are commissioned as officers in the Navy. The parade is reviewed by a high-ranking dignitary, symbolizing their formal entry into the officer corps.</p>
                <img src="image/pop.jpg" alt="Passing Out Parade">
                <p>This emotionally charged event is attended by family and friends, celebrating the dedication and hard work required to achieve the coveted 'Sword of Honour' and the final salute.</p>
            `
        },
        'Cross Country': {
            title: "Challenging Cross Country Event",
            content: `
                <p>The annual cross-country race tests the physical and mental endurance of every cadet. Spanning several kilometers across challenging terrain, the event is designed to push their limits and build the resilience essential for a career at sea.</p>
                <img src="image/camp.jpeg" alt="Cadets running cross country">
                <p>It is a highly competitive event between squadrons, fostering a spirit of healthy rivalry and a commitment to peak fitness.</p>
            `
        },
        'default': {
            title: "Content Unavailable",
            content: "<p>Details for this section are being updated. Please check back soon!</p>"
        }
    };
    return articles[key] || articles['default'];
}
 function openContentModal(key) {
 const modal = document.getElementById('contentModal');
 const titleElement = document.getElementById('content-title');
 const articleElement = document.getElementById('content-article');
 const contentData = getContentArticle(key);
 
 titleElement.textContent = contentData.title;
 articleElement.innerHTML = contentData.content;
 modal.style.display = "block";
 
 modal.scrollTop = 0;
 
 event.stopPropagation(); 
 }
 
 function closeContentModal() {
 const modal = document.getElementById('contentModal');
 modal.style.display = "none";
 }