import { Testimonial } from "./types";

export interface DistrictInfo {
  id: string;
  nameKey: string;
  status: "active" | "planned";
  centers: number;
  coldStorageCapacity: string; // e.g. "1,500 MT" or "Planned 500 MT"
  farmers: number;
  x: number; // Percentage coordinate on SVG width
  y: number; // Percentage coordinate on SVG height
  descriptionEn: string;
  descriptionHi: string;
}

export const districtsData: DistrictInfo[] = [
  {
    id: "patna",
    nameKey: "mapDistrictPatna",
    status: "active",
    centers: 12,
    coldStorageCapacity: "2,500 MT",
    farmers: 1450,
    x: 42,
    y: 52,
    descriptionEn: "Central Command Center & Headquarters. Hosts our primary bulk logistics hub connecting Southern Bihar farmers to national buyers.",
    descriptionHi: "केंद्रीय कमान केंद्र और मुख्यालय। दक्षिणी बिहार के किसानों को राष्ट्रीय खरीदारों से जोड़ने वाले हमारे प्राथमिक रसद केंद्र की मेजबानी करता है।"
  },
  {
    id: "muzaffarpur",
    nameKey: "mapDistrictMuzaffarpur",
    status: "active",
    centers: 18,
    coldStorageCapacity: "3,000 MT",
    farmers: 2100,
    x: 46,
    y: 36,
    descriptionEn: "Perishable foods powerhouse. Specializes in Shahi Litchi, mangoes, and seasonal vegetables with integrated smart cold chains.",
    descriptionHi: "जल्दी खराब होने वाले खाद्य पदार्थों का केंद्र। एकीकृत स्मार्ट कोल्ड चेन के साथ शाही लीची, आम और मौसमी सब्जियों में विशेषज्ञता।"
  },
  {
    id: "vaishali",
    nameKey: "mapDistrictVaishali",
    status: "active",
    centers: 8,
    coldStorageCapacity: "1,200 MT",
    farmers: 980,
    x: 45,
    y: 44,
    descriptionEn: "Banana and grain collection zone. Serves as our model block-level cold storage testbed powered by hybrid solar-grid units.",
    descriptionHi: "केला और अनाज संग्रह क्षेत्र। हाइब्रिड सोलर-ग्रिड इकाइयों द्वारा संचालित हमारे मॉडल ब्लॉक-स्तरीय कोल्ड स्टोरेज के रूप में कार्य करता है।"
  },
  {
    id: "purnia",
    nameKey: "mapDistrictPurnia",
    status: "planned",
    centers: 0,
    coldStorageCapacity: "Planned 1,500 MT",
    farmers: 0,
    x: 82,
    y: 35,
    descriptionEn: "Upcoming expansion corridor focusing on high-volume maize, cash crops, and Jute processing logistics.",
    descriptionHi: "मक्का, नकदी फसलों और जूट प्रसंस्करण लॉजिस्टिक्स पर ध्यान केंद्रित करने वाला आगामी विस्तार गलियारा।"
  },
  {
    id: "gaya",
    nameKey: "mapDistrictGaya",
    status: "planned",
    centers: 0,
    coldStorageCapacity: "Planned 1,000 MT",
    farmers: 0,
    x: 38,
    y: 78,
    descriptionEn: "Planned organic farming zone and dry-land cold preservation networks for root crops and pulses.",
    descriptionHi: "जड़ वाली फसलों और दालों के लिए नियोजित जैविक खेती क्षेत्र और शुष्क भूमि कोल्ड प्रिजर्वेशन नेटवर्क।"
  },
  {
    id: "bhagalpur",
    nameKey: "mapDistrictBhagalpur",
    status: "planned",
    centers: 0,
    coldStorageCapacity: "Planned 1,200 MT",
    farmers: 0,
    x: 72,
    y: 58,
    descriptionEn: "Planned mango and horticulture storage terminal to support direct exports to major Indian metro cities.",
    descriptionHi: "प्रमुख भारतीय महानगरों में सीधे निर्यात का समर्थन करने के लिए नियोजित आम और बागवानी भंडारण टर्मिनल।"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: { en: "Ramdhari Singh", hi: "रामधारी सिंह" },
    role: { en: "Potato & Cauliflower Farmer", hi: "आलू और गोभी उत्पादक किसान" },
    location: { en: "Hajipur, Vaishali", hi: "हाजीपुर, वैशाली" },
    increase: "+35%",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=200",
    text: {
      en: "Earlier, my cauliflowers would spoil if I didn't sell them on day one. With Smart Kisan's village collection center, I store them for 4 days and sell when prices are high. My profits increased by 35%!",
      hi: "पहले मेरी गोभी पहले ही दिन न बिकने पर सड़ जाती थी। स्मार्ट किसान के संग्रह केंद्र के साथ, मैं उन्हें 4 दिनों तक सुरक्षित रखता हूं और दाम अच्छे होने पर बेचता हूं। मेरा मुनाफा 35% बढ़ गया!"
    }
  },
  {
    id: 2,
    name: { en: "Meena Devi", hi: "मीना देवी" },
    role: { en: "Litchi Orchard Owner", hi: "लीची बागान मालकिन" },
    location: { en: "Kanti, Muzaffarpur", hi: "कांटी, मुजफ्फरपुर" },
    increase: "+42%",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    text: {
      en: "We had no power over Muzaffarpur brokers. Smart Kisan Network weighed my litchis digitally, paid directly to my bank, and got me premium retail buyers in Delhi. No more middlemen!",
      hi: "मुजफ्फरपुर के दलालों के आगे हमारी कुछ नहीं चलती थी। स्मार्ट किसान नेटवर्क ने मेरी लीची का डिजिटल वजन किया, सीधे बैंक खाते में भुगतान किया और दिल्ली में प्रीमियम खरीदार दिलाए। अब कोई बिचौलिया नहीं!"
    }
  },
  {
    id: 3,
    name: { en: "Rajesh Ranjan", hi: "राजेश रंजन" },
    role: { en: "Tomato & Chilli Farmer", hi: "टमाटर और मिर्च उत्पादक किसान" },
    location: { en: "Fatuha, Patna", hi: "फतुहा, पटना" },
    increase: "+28%",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: {
      en: "The transparency of digital payments is life-changing. I receive payment alerts on my mobile immediately, and I can use my digital transaction history to apply for bank loans.",
      hi: "डिजिटल भुगतान की पारदर्शिता जीवन बदलने वाली है। मुझे तुरंत मोबाइल पर भुगतान का अलर्ट मिलता है, और मैं बैंक ऋण के लिए आवेदन करने के लिए अपने लेन-देन के इतिहास का उपयोग कर सकता हूं।"
    }
  }
];
