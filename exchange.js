const VOLUNTEERS = [
  {
    id: "volunteer-1",
    title: "TEACHING ENGLISH",
    subtitle: "VOLUNTEER IN GUATEMALA",
    description: "As part of your volunteer program, you receive a crash course on how to effectively teach English as a second language.",
    details: "Developing English language skills is one of the best ways for Guatemalans to participate in the country economic success and improve their access to academic opportunities. These projects help to create a much brighter future in the lives of local people and their communities. Your teaching project also helps first responders more effectively protect and serve the entire city of Antigua.",
    link: "https://maximonivel.com/volunteers/guatemala/",
    image: "images/volunteer_teaching_eng.jpg",
    image_title: "Teaching English"
  },
  {
    id: "volunteer-2",
    title: "WORKING WITH KIDS",
    subtitle: "VOLUNTEER IN PERU",
    description: "Your volunteer work creates a safe, positive space, and provides the structure kids need to live full, healthy lives.",
    details: "In Peru, severe economic disadvantages lead to neglect, abuse, and abandonment. As an international volunteer, you work in after school programs and community centers around the city of Cusco. You work closely with local project staff to engage children in playtime activities, homework, and sports. It is also important volunteers help with hygiene education and cleaning.",
    link: "https://maximonivel.com/volunteers/working-with-kids/#",
    image: "images/volunteer_work_with_kids.jpg",
    image_title: "Working With Kids"
  },
  {
    id: "volunteer-3",
    title: "ANIMALS CARE",
    subtitle: "VOLUNTEER IN PERU",
    description: "The national university based in Cusco, Peru leads a very unique rescue and rehabilitation program for animals that have been confiscated from people who illegally own exotic pets.",
    details: "The zoo project cares for a wide range of animals including endangered species, domestic animals, and native Andean wildlife. The mission is to rehabilitate and then release these animals back into their natural habitat if possible. As an international volunteer, your work is focused on the day-to-day maintenance of the zoo, including animal feeding, cage cleaning, light construction work, and some conservation work. You may also help host daily visitors who tour the facility.",
    link: "https://maximonivel.com/volunteers/animal-care/",
    image: "images/volunteer_animal_care.jpg",
    image_title: "Animals Care"
  }
];

const SHORTTERMS = [
  {
    id: "shortterm-1",
    title: "SUMMER SPANISH CAMP",
    subtitle: "CAMP IN COSTA RICA",
    description: "Spanish Camp is a full-immersion experience that integrates the Spanish language into all aspects of the program, including community service, sports, cultural activities, and tourism.",
    details: "You receive 3 hours of Spanish classes per day before heading out to different cultural activities and tours in the afternoon. Activities include museum visits, national park tours, creative workshops, recreational games, and more. This unique experience helps you develop a better sense of the world and grow into a true global citizen. Spanish Camp is an experience you remember forever!",
    link: "https://maximonivel.com/spanish/spanishcamp/",
    image: "images/shortterm_spanish.jpg",
    image_title: "Summer Spanish Camp"
  },
  {
    id: "shortterm-2",
    title: "CANADA EXPEDITION",
    subtitle: "CAMP IN Canada",
    description: "Our goal will be to experience each destination beyond the traditional sightseeing and hiking, so we will be including plenty of fun adventure activities to help you get the most out of each destination!",
    details: "Our tour will take us all the way from the western USA, through some of the most stunning parts of Canada into the U.S. Pacific Northwest, down through California and the American Southwest, finally ending with a special 'grand' finale at the one and only Grand Canyon! Along the way we will visit ten unique National Parks where you will be treated to a variety of stunning landscapes.",
    link: "https://www.travelforteens.com/program/usa-and-canada-north-american-expedition/",
    image: "images/shortterm_canada.jpg",
    image_title: "Canada Expedition"
  },
  {
    id: "shortterm-3",
    title: "ALASKA SERVICE AND ADVENTURE",
    subtitle: "VOLUNTEER IN PERU",
    description: "This program combines the breathtaking beauty of Alaska, meaningful service work, and adventures that will have the whole family wishing they could come!",
    details: "Alaska, known as the last frontier, land of the midnight sun, and place where your life will change! You'll have the chance to hike to the top of a glacier, whitewater raft down a river surrounded by snowcapped mountains, kayak in a glacial bay while looking for seals, and spend your evenings around a campfire! To top off our adventures we will volunteer at a wildlife conservation center for bears, moose, and more!",
    link: "https://www.travelforteens.com/program/alaska-service-and-adventure/",
    image: "images/shortterm_alaska.jpg",
    image_title: "Alaska Service and Adventure"
  }
];

const EXCHANGES = [
  {
    id: "exchange-1",
    title: "ENGLISH-TAUGHT PROGRAMMES",
    subtitle: "EXCHAGE TO THE RADBOUD UNIVERSITY",
    description: "Take your higher education to a new level with a bachelor's or master's program at Radboud University, one of the Netherlands' leading academic communities.",
    details: ["We offer the following English-taught Bachelor's and Master's programs:","Bachelor's in Business Administration","Bachelor's in Economics and Business Economics", "Master's in Business Administration", "Master's in Economics", "etc."],
    link: "https://www.goabroad.com/providers/radboud-university-nijmegen/programs/english-taught-degree-programs-at-radboud-university-169255",
    image: "images/exchange_ radboud_uni.jpg",
    image_title: "English-Taught Programmes"
  },
  {
    id: "exchange-2",
    title: "MASTER IN INTERNATIONAL MANAGEMENT(CEMS)",
    subtitle: "EXCHAGE TO THE UNIVERSITY OF ECONOMICS, PRAGUE",
    description: "Become part of a global network of professionals, gain international experience and spend a semester abroad at one of the best business schools in the world.",
    details: "The full-time Master's Programme in International Management/CEMS at the University of Economics, Prague is an academic training programme for top students demonstrating academic excellence, professional skills, international openness and social responsibility with interests and career intentions in an international environment.",
    link: "https://www.goabroad.com/providers/vse-university-of-economics/programs/master-international-management-181774",
    image: "images/exchange_uni_econ.jpg",
    image_title: "CEMS"
  },
  {
    id: "exchange-3",
    title: "MONASH EXCHAGE PROGRAMS",
    subtitle: "EXCHAGE TO THE MONASH UNIVERSITY",
    description: "We've got campuses around the world in Australia and Malaysia meaning you can team your study at one of the best unis in the world learning to surf at Bells Beach.",
    details: "Exchange at Monash means you'll have access to exactly the same opportunities and support services as all Monash students. But you'll also benefit from special events, excursions and workshops to help you make friends and get settled, or exploring exotic Southeast Asian destinations, like Angkor Wat, during your semester holidays. It's all possible with Monash.",
    link: "https://www.monash.edu/study-abroad/inbound/international-exchange",
    image: "images/exchange_monash_uni.jpg",
    image_title: "Monash Exchange Program"
  }
];

function createProgramHTML(program) {
  let programHTML = $("<article>");

  let imageContainer = $("<figure>");
  let imageItem = $("<img>",  {src: program.image, alt: program.image_title});

  imageContainer.append(imageItem);;
	programHTML.append(imageContainer);

  let link = $("<a>",  {href: program.link, target:"_New"});
  let linkButton = $("<button>")
    .text("Visit Website")
    .addClass("visit");
  link.append(linkButton);
  programHTML.append(link);

  let title = $("<h2>" + program.title + "</h2>");
	programHTML.append(title);

  let subtitle = $("<h3>" + program.subtitle + "</h3>");
	programHTML.append(subtitle);

  let description = $("<p>" + program.description + "</p>");
	programHTML.append(description);

  if (typeof(program.details) == "string"){
    var details = $("<p>")
      .text(program.details)
      .attr("id", "details" + program.id)
      .addClass("hidden");
  } else {
    var details = $("<ul>")
      .attr("id", "details" + program.id)
      .addClass("hidden");
    for (let item of program.details) {
      let listItem = $("<li>" + item + "</li>");
      details.append(listItem);
    }
  }

  programHTML.append(details);

  let button = $("<button>")
    .text("Show More")
    .attr("id", program.id)
    .addClass("showMore");
  programHTML.append(button);

  button.on("click", displayHidden);

  return programHTML;
}

function displayHidden() {
	let selfHTML = $(this);
  let detailsItemID = "details" + selfHTML.attr('id');

  if (selfHTML.text() == "Show Less") {
    selfHTML.text("Show More");
  } else selfHTML.text("Show Less");

  $('#' + detailsItemID).toggle(200);
}


function displayVolunteer(programs) {
 let volunteerList = $("#volunteerList");

 volunteerList.empty();

 for(let program of programs) {
   let volunteerHTML = createProgramHTML(program);
   volunteerList.append(volunteerHTML);
 }
}

function displayShortterm(programs) {
 let shorttermList = $("#shorttermList");

 shorttermList.empty();
 for(let program of programs) {
   let shorttermHTML = createProgramHTML(program);
   shorttermList.append(shorttermHTML);
 }
}

function displayExchange(programs) {
 let exchangeList = $("#exchangeList");

 exchangeList.empty();
 for(let program of programs) {
   let exchangeHTML = createProgramHTML(program);
   exchangeList.append(exchangeHTML);
 }
}

function searchVolunteer() {
  let query = $("#searchText").val();
  query = query.toLowerCase().trim();

  let matches = [];

  for (let program of VOLUNTEERS){
      let programTitle = program.title.toLowerCase();
      if(programTitle.includes(query)){
        matches.push(program);
    }
  }
  for (let program of VOLUNTEERS){
      let programTitle = program.subtitle.toLowerCase();
      if(programTitle.includes(query)){
        matches.push(program);
    }
  }
  displayVolunteer(matches);
}

function searchShortterm() {
  let query = $("#searchText").val();
  query = query.toLowerCase().trim();

  let matches = [];

  for (let program of SHORTTERMS){
      let programTitle = program.title.toLowerCase();
      if(programTitle.includes(query)){
        matches.push(program);
    }
  }
  for (let program of SHORTTERMS){
      let programTitle = program.subtitle.toLowerCase();
      if(programTitle.includes(query)){
        matches.push(program);
    }
  }
  displayShortterm(matches);
}

function searchExchange() {
  let query = $("#searchText").val();
  query = query.toLowerCase().trim();

  let matches = [];

  for (let program of EXCHANGES){
      let programTitle = program.title.toLowerCase();
      if(programTitle.includes(query)){
        matches.push(program);
    }
  }
  for (let program of EXCHANGES){
      let programTitle = program.subtitle.toLowerCase();
      if(programTitle.includes(query)){
        matches.push(program);
    }
  }
  displayExchange(matches);
}

function search() {
 let query = $("#searchText").val();
 query = query.toLowerCase().trim();

 if (query == "") {
   displayVolunteer([VOLUNTEERS[0]]);
   displayShortterm([SHORTTERMS[0]]);
   displayExchange([EXCHANGES[0]]);
 } else {
   searchVolunteer(VOLUNTEERS);
   searchShortterm(SHORTTERMS);
   searchExchange(EXCHANGES);
  }
}

$(document).ready(function(){

 displayVolunteer([VOLUNTEERS[0]]);
 displayShortterm([SHORTTERMS[0]]);
 displayExchange([EXCHANGES[0]]);

 $("#searchText").on("keyup", search)
});
