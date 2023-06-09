//connect api if I`ll find then
import {FactService, GiraffeFact} from './types';
export const giraffeFacts: GiraffeFact[] = [
    { fact: "Giraffes are the tallest living terrestrial animal." },
    { fact: "There are nine subspecies of giraffe, each occupying separate regions of Africa. Some researchers consider some subspecies to be separate species entirely." },
    { fact: "Giraffes' horn-like structures are called 'ossicles'. They consist mostly of ossified cartilage." },
    { fact: "Male giraffes compete for dominance in fights in which they strike each other with their necks." },
    { fact: "There are more than 1600 giraffes in captivity worldwide."},
    { fact: "The name 'giraffe' has roots in the Arabic 'zarafah', meaning 'fast-walker'."},
    { fact: "Before the name 'giraffe' came into standard use, giraffes were commonly called 'camelopards'." },
    { fact: "There are 10 known extinct species of giraffe." },
    { fact: "The closest living relative to the giraffe is the okapi, an endangered hoofed mammal from the Congo." },
    { fact: "Full grown giraffes are usually between 14 and 18 feet tall." },
    { fact: "The tallest recorded giraffe was 19.3 feet tall." },
    { fact: "Adult male giraffes weigh an average of 2628 lbs., whereas females weight 1825 lbs." },
    { fact: "Giraffes have the ability to close their nostrils to protect against sandstorms and ants." },
    { fact: "Giraffes have 18-inch-long prehensile tongues, which they use for grasping foliage and for grooming." },
    { fact: "Male giraffes' spots grow darker as they age." },
    { fact: "Under their fur coat, giraffes have grey skin." },
    { fact: "Female giraffes have hair on their ossicles, whereas males' ossicles are bald." },
    { fact: "Giraffes use the weight of their head to maintain their balance when they gallop." },
    { fact: "Giraffes can run at 37 miles per hour for short distances, and 31 miles per hour for several miles." },
    { fact: "Giraffes sleep for about half an hour a day." },
    { fact: "Giraffes have the same number of vertebrae as most mammals. The length of their neck comes from longer vertebrae (over 10 inches each)." },
    { fact: "Giraffes' neck is fairly short at birth, probably to make birthing easier for mothers." },
    { fact: "A giraffe's heart can weigh more than 25 lbs." },
    { fact: "Giraffes have structures like check valves in their necks' veins to prevent blood from rushing to their head when they bend down to drink." },
    { fact: "Giraffes have a four-chambered stomach similar to cattle." },
    { fact: "An adult giraffe can eat 75 lbs. of foliage per day." },
    { fact: "While generally herbivorous, giraffes have been observed eating meat and bone from carcasses." },
    { fact: "The giraffe's gestation period is 14 months." },
    { fact: "Newborn giraffes are about 6 feet tall." },
    { fact: "Giraffes are lions' most common prey." },
    { fact: "Most of giraffes' mounting behavior is between two males, often after a fight for dominance." },
    { fact: "Giraffes allow red-billed ox peckers (a bird species) to perch on them to feed on ticks." },
    { fact: "Egyptian hieroglyphs use the giraffe as a character, pronounced 'sr'." },
    { fact: "Designers of suits for fighter pilots studied giraffe skin, since fighter pilots are also at risk of passing out when blood rushes to the legs." },
    { fact: "The giraffe is the national animal of Tanzania." },
    { fact: "There are around 100,000 giraffes in the wild as of 2016." },
    { fact: "Giraffes only need to drink every few days. Most of their water comes from the vegetation they eat." },
    { fact: "Giraffes give birth standing up, so newborn giraffes fall over 5 feet upon being born." },
    { fact: "Giraffes usually sleep standing upright." },
    { fact: "Male giraffes detect oestrus in females by tasting their urine." },
    { fact: "June 21 is World Giraffe Day." },
    { fact: "Toys R' Us has used Geoffrey the Giraffe as its mascot since 1965, although earlier advertisements in the 1950's used another giraffe: Dr. G. Raffe." },
    { fact: "Giraffe hooves are 1 foot in diameter." },
    { fact: "about 50% of giraffe calves die in their first year, mostly due to predation." },
    { fact: "The giraffe's average walking speed is 10 miles per hour." },
    { fact: "The giraffe's tongue is colored dark blue." },
    { fact: "Some of giraffes' vocalizations are too low to be heard by human ears." },
    { fact: "Giraffes have never been observed swimming." },
    { fact: "Mozambique requires power lines to be 39 feet high so giraffes can safely pass underneath." }
];

export const factService: FactService = {
    getRandomFact: () => {
        const randomIndex = Math.floor(Math.random() * giraffeFacts.length);
        return giraffeFacts[randomIndex];
    },
};