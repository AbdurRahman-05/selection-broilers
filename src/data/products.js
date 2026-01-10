import liveChickenImg from '../images/live-broiler-chicken.jpg';
import chickenPiecesImg from '../images/chicken pieces.jpg';
import drumStickImg from '../images/drum stick.jpg';
import wingsImg from '../images/wings.jpg';
import breastImg from '../images/chicken brest.jpg';
import nattukoliImg from '../images/nattukoli.jpg';
import kaadaiImg from '../images/kaadai.jpg';

export const products = [
    {
        id: 1,
        name_en: 'Whole Chicken (Live)',
        name_ta: 'முழு கோழி (உயிர்)',
        price: 180,
        unit: 'kg',
        category: 'live',
        image: liveChickenImg,
        description_en: 'Healthy farm-raised chicken, full vitality.',
        description_ta: 'ஆரோக்கியமான பண்ணை கோழி.'
    },
    {
        id: 6,
        name_en: 'Country Chicken (Nattukoli)',
        name_ta: 'நாட்டுக்கோழி',
        price: 500,
        unit: 'kg',
        category: 'live',
        image: nattukoliImg,
        description_en: 'Free-range country chicken, rich in flavor and nutrients.',
        description_ta: 'சுவையான நாட்டுக்கோழி, ஊட்டச்சத்து நிறைந்தது.'
    },
    {
        id: 7,
        name_en: 'Quail (Kaadai)',
        name_ta: 'காடை',
        price: 40,
        unit: 'piece',
        category: 'live',
        image: kaadaiImg,
        description_en: 'Fresh live quail, a delicacy with health benefits.',
        description_ta: 'புதிய உயிருள்ள காடை, ஆரோக்கிய நன்மைகள் நிறைந்தது.'
    },
    {
        id: 2,
        name_en: 'Chicken Curry Cut',
        name_ta: 'கோழி கறி வெட்டு',
        price: 240,
        unit: 'kg',
        category: 'fresh',
        image: chickenPiecesImg,
        description_en: 'Skinless, clean cuts perfect for spicy curry.',
        description_ta: 'தோல் இல்லாத, கறிக்கு ஏற்ற சுத்தமான துண்டுகள்.'
    },
    {
        id: 3,
        name_en: 'Chicken Breast (Boneless)',
        name_ta: 'கோழி மார்பகம் (எலும்பில்லாதது)',
        price: 320,
        unit: 'kg',
        category: 'fresh',
        image: breastImg,
        description_en: 'Tender boneless breast fillet for grilling.',
        description_ta: 'மென்மையான எலும்பில்லாத மார்பக துண்டு.'
    },
    {
        id: 4,
        name_en: 'Chicken Drumstick',
        name_ta: 'சிக்கன் லெக் பீஸ்',
        price: 280,
        unit: 'kg',
        category: 'fresh',
        image: drumStickImg,
        description_en: 'Juicy drumsticks, great for frying.',
        description_ta: 'சாறுள்ள லெக் பீஸ்.'
    },
    {
        id: 5,
        name_en: 'Chicken Wings',
        name_ta: 'கோழி இறக்கைகள்',
        price: 260,
        unit: 'kg',
        category: 'fresh',
        image: wingsImg,
        description_en: 'Perfect for BBQ wings.',
        description_ta: 'BBQ செய்ய ஏற்ற கோழி இறக்கைகள்.'
    }
];
