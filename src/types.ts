export interface TranslationContent {
  navHome: string;
  navAbout: string;
  navProblems: string;
  navSolutions: string;
  navHowItWorks: string;
  navBusinessModel: string;
  navFuture: string;
  navContact: string;
  langSwitch: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroCTAJoinFarmer: string;
  heroCTAPartner: string;
  activeFarmers: string;
  coldStorageCapacity: string;
  villagesConnected: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutFounderTitle: string;
  aboutStoryPara1: string;
  aboutStoryPara2: string;
  aboutStoryPara3: string;
  aboutMissionTitle: string;
  aboutMissionText: string;
  aboutVisionTitle: string;
  aboutVisionText: string;

  // Problem Section
  problemTitle: string;
  problemSubtitle: string;
  problem1Title: string;
  problem1Desc: string;
  problem2Title: string;
  problem2Desc: string;
  problem3Title: string;
  problem3Desc: string;
  problem4Title: string;
  problem4Desc: string;

  // Solution Section
  solutionTitle: string;
  solutionSubtitle: string;
  solution1Title: string;
  solution1Desc: string;
  solution2Title: string;
  solution2Desc: string;
  solution3Title: string;
  solution3Desc: string;
  solution4Title: string;
  solution4Desc: string;
  solution5Title: string;
  solution5Desc: string;
  solution6Title: string;
  solution6Desc: string;

  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  step5Title: string;
  step5Desc: string;

  // Interactive Map Section
  mapTitle: string;
  mapSubtitle: string;
  mapSelectDistrict: string;
  mapHubsCount: string;
  mapStorageCount: string;
  mapStatusActive: string;
  mapStatusPlanned: string;
  mapDistrictPatna: string;
  mapDistrictMuzaffarpur: string;
  mapDistrictVaishali: string;
  mapDistrictPurnia: string;
  mapDistrictGaya: string;
  mapDistrictBhagalpur: string;

  // Business Model
  businessModelTitle: string;
  businessModelSubtitle: string;
  revenueStream1Title: string;
  revenueStream1Desc: string;
  revenueStream2Title: string;
  revenueStream2Desc: string;
  revenueStream3Title: string;
  revenueStream3Desc: string;
  revenueStream4Title: string;
  revenueStream4Desc: string;
  revenueStream5Title: string;
  revenueStream5Desc: string;

  // Future Vision
  futureTitle: string;
  futureSubtitle: string;
  futureTarget1Title: string;
  futureTarget1Desc: string;
  futureTarget2Title: string;
  futureTarget2Desc: string;
  futureTarget3Title: string;
  futureTarget3Desc: string;
  futureTarget4Title: string;
  futureTarget4Desc: string;

  // Registration Forms
  formFarmerHeader: string;
  formInvestorHeader: string;
  formFarmerName: string;
  formFarmerPhone: string;
  formFarmerDistrict: string;
  formFarmerCrop: string;
  formFarmerLandSize: string;
  formFarmerSubmit: string;
  formInvestorName: string;
  formInvestorEmail: string;
  formInvestorOrg: string;
  formInvestorPhone: string;
  formInvestorAmount: string;
  formInvestorMessage: string;
  formInvestorSubmit: string;
  formSuccessMessage: string;
  formValidationMessage: string;

  // Testimonials
  testimonialTitle: string;
  testimonialSubtitle: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactFounderLabel: string;
  contactLocationLabel: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  contactFormHeader: string;
}

export interface FarmerRegistration {
  id: string;
  name: string;
  phone: string;
  district: string;
  cropType: string;
  landSize: string; // in acres
  date: string;
}

export interface InvestorEnquiry {
  id: string;
  name: string;
  email: string;
  organization: string;
  phone: string;
  enquiryAmount: string;
  message: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: { en: string; hi: string };
  role: { en: string; hi: string };
  location: { en: string; hi: string };
  text: { en: string; hi: string };
  image: string;
  increase: string;
}
