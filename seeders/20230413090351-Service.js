'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services',
    [
        {id: 1, name: "Kerastase Fusio Dose Treatment", description: "Kerastase's Fusio Dose is a unique hair treatment that transforms the texture, volume and overall condition of your hair. This professional in-salon service combines powerful formulations with advanced technology to provide tailored treatments for all types of hair. It works by infusing the hair cuticle with active ingredients, which penetrate deeply into the cortex of the hair.", price: 20, updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, name: "Metal Detox", description: "Say goodbye to compromised hair colour results with “Metal Detox”. This innovative treatment is designed to reset and protect coloured hair, ensuring 100% reliable hair colour results, every time. The “Metal Detox” treatment effectively neutralizes any metals present in your hair before colouring, resulting in more even, consistent colour application. This service is particularly effective for clearing yellow undertones from blonding. Moreover, with 87% less breakage risk, your hair is left stronger and healthier, with a gorgeous, long-lasting colour. The “Metal Detox” service is suitable for all coloured hair types, and is the perfect way to ensure optimal hair colour results every time.", price: 53.34 , updatedAt: new Date(), createdAt: new Date()},
        {id: 3, name: "K 18 (The Rejuventor)", description: "Introducing the K18 Rejuvenator a game-changing hair treatment that requires no extra time during your salon service. This treatment delivers a powerful boost of strength and health to your hair, effectively repairing any damage. The K18 Rejuvenator is the perfect complement to your colour appointment, as it targets the keratin chains and bonds in your hair, utilizing its patented peptide treatment to work its magic even as your hair is being coloured. With K18 Rejuvenator, you can achieve healthier, more vibrant hair in no time.", price: 35, updatedAt: new Date(), createdAt: new Date()},
        {id: 4, name: "Olaplex Treatment", description: "Discover the revolutionary Olaplex hair treatment, which has transformed the way we repair and strengthen damaged, brittle hair. This unique treatment harnesses special molecules to expertly bond broken hair strands, resulting in restored hair health, strength and vibrancy. Unlike traditional hair treatments that merely coat the surface of hair shafts, Olaplex works on a deeper level, rebuilding the internal structure of hair to deliver long-lasting results. Experience the difference that Olaplex can make for your hair.", price: 41.50, updatedAt: new Date(), createdAt: new Date()},
        
        {id: 5, name: "Consultation", description: "Finding your perfect hairdresser is important. We recommend you have a complimentary consultation before your appointment to talk through your needs with one of our expert hairdressers", price: 0 , updatedAt: new Date(), createdAt: new Date()},
        {id: 6, name: "Women Cut", description: "Using our signature cutting techniques, our highly skilled team will create a bespoke look to suit your individuality, lifestyle, and hair texture", price: 65, updatedAt: new Date(), createdAt: new Date()},
        {id: 7, name: "Gent Cut", description: "A shorter, personal signature barbered cut with a quick and simple finish that is tailored for you and styled using our professional haircare products.", price: 45, updatedAt: new Date(), createdAt: new Date()},
        {id: 8, name: "Kids Cut", description: "Add a tonal drift of colour using your favorite colour shades.", price: 20, updatedAt: "2023-04-04", createdAt: "2023-03-12"},

        {id: 9, name: "Colour", description: "Your colour expert will listen to your colour goals and needs whilst assessing your skin tone, eye colour and hair texture, before creating the perfect personal signature colour for you.", price: 100 , updatedAt: new Date(), createdAt: new Date()},
        {id: 10, name: "Signature colour", description: "A full head colour from roots to ends. Whether you want to add shine, lighten, darken, change tone, or cover white hair, our colour experts will have a solution to suit you.", price: 115.95, updatedAt: new Date(), createdAt: new Date()},
        {id: 11, name: "Balayage", description: "A freehand, tailored full head application that can achieve natural sun kissed hair or brighter, bolder, face framing accents.", price: 135, updatedAt: "2023-04-04", createdAt: "2023-03-12"},
        {id: 12, name: "Highlights", description: "Classic highlights applied throughout the hair to brighten and create a multi tonal effect. They can be natural, textured, or bold, and are suitable for blending white hair.", price: 95.59 , updatedAt: new Date(), createdAt: new Date()},
        {id: 13, name: "Ultimate Blonde", description: "Ultra-lifting colour to achieve platinum blonde - the perfect canvas for pastel shades.", price: 220.90, updatedAt: new Date(), createdAt: new Date()},
        {id: 14, name: "Global Colour", description: "Opt for a darker or lighter shades to give your hair a brand-new look.", price: 110, updatedAt: new Date(), createdAt: new Date()},
        {id: 15, name: "Root Colour", description: "Add a tonal drift of colour using your favorite colour shades.", price: 55, updatedAt: new Date(), createdAt: new Date()},

        {id: 16, name: "Perm", description: "A perm alters the natural texture of your hair. It can be used to create a defined curl, a beach wave with subtle movement or just to add volume to fine hair.", price: 85 , updatedAt: new Date(), createdAt: new Date()},
        {id: 17, name: "Keratin Smooth", description: "A keratin-based liquid hair treatment designed to tame unruly hair whilst dramatically improving its health, condition, and shine.", price: 150, updatedAt: new Date(), createdAt: new Date()},
        {id: 18, name: "Relax", description: "A relaxer alters the natural texture of your hair from wavy or curly into soft or straight locks. It also reduces volume and frizz, leaving hair silky, shiny, and straight.", price: 95, updatedAt: new Date(), createdAt: new Date()},

        {id: 19, name: "Hair Up", description: "For a sophisticated occasion from a celebration to the red carpet that will make sure that you're the one stealing the show.", price: 35, updatedAt: new Date(), createdAt: new Date()},
        {id: 20, name: "Blow Dry", description: "A beautiful blow dry to suit whether you want volume, movement, or texture with a finish from our professional haircare products to make you look and feel amazing.", price: 30, updatedAt: new Date(), createdAt: new Date()},
        {id: 21, name: "Wedding Hair", description: "For that extra special wedding day come and meet one of our specialists for a consultation and trial to make sure that everything on the day is perfect.", price: 90, updatedAt: new Date(), createdAt: new Date()},

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
