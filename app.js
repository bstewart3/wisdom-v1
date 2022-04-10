

 //items
 const menu = [
    {
      id: 1,
      title: "Just some advice...",
      category: "Knowledge",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Dont do this EVER!",
      category: "Learning",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "My 5 best tips for young people.",
      category: "Experience",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "The honest truth from an old guy..",
      category: "Knowledge",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "I wish i knew this when I was 23.",
      category: "Learning",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "The bigest life hacks for saving money.",
      category: "Experience",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "My sugestions on traveling and making money at the same time.",
      category: "Knowledge",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Advice to anyone looking to leverage their income for longterm growth.",
      category: "Learning",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "What I learned at Harvard that mattered the most.",
      category: "Experience",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "How to be yourself.",
      category: "Knowledge",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector('.section-center');
  const filterBtns = document.querySelector('.filter-btn');
  const knowledgeBtn = document.getElementById("Knowledge");
  const learningBtn = document.getElementById("Learning");
  const experienceBtn = document.getElementById("Experience");

  //load items
  //  window.addEventListener("onload", function() {
  //     displayMenuItem(menu)
  //   })

    knowledgeBtn.addEventListener("click", function() {
      const item = getWisdom("Knowledge");
      // console.log(item.category)
      displayMenuItem(item)
      
    })
    learningBtn.addEventListener("click", function() {
      const item = getWisdom("Learning");
      console.log(item.category)
      displayMenuItem(item)
    })
    experienceBtn.addEventListener("click", function() {
      const item = getWisdom("Experience");
      console.log(item.category)
      displayMenuItem(item)
    })

function getWisdom(category){
  const menuItems = menu.filter(item => {
    return item.category == category
  })
  //display random wisdom
  const item = menuItems[
    Math.floor(Math.random() * menuItems.length)
  ]
  return item
}





  function displayMenuItem(item){
    const html =  ` <article class="menu-item">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
      
    </div>
       </article>`

   sectionCenter.innerHTML = html  
  }//End displayMenuItem

  