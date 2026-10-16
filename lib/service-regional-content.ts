export type CountryCode = "uk" | "india" | "usa";

export type RegionalServiceInfo = {
  heading: string;
  overview: string;
  points: string[];
};

export type ServiceRegionalMap = Record<
  string,
  Record<CountryCode, RegionalServiceInfo>
>;

export const SERVICE_REGIONAL_CONTENT: ServiceRegionalMap = {
  "funeral-services": {
    uk: {
      heading: "Complete funeral and cremation care across the United Kingdom.",
      overview:
        "We coordinate complete funeral arrangements across England, Scotland, Wales, and Northern Ireland. Our team liaises directly with UK council registrars, coroner offices, hospitals, and local crematoriums. We ensure traditional rites for Hindu, Sikh, Buddhist, Christian, and multicultural families are conducted with utmost sanctity, dignity, and care.",
      points: [
        "UK crematorium and cemetery bookings",
        "Coroner and registrar document liaison",
        "Traditional samagri and faith rituals in the UK",
        "Coordination with UK funeral directors and hearse transfer"
      ]
    },
    india: {
      heading: "Dignified funeral arrangements across all major cities in India.",
      overview:
        "Comprehensive Antim Sanskar and funeral planning handled across Delhi NCR, Mumbai, Ahmedabad, Bengaluru, Chennai, Kolkata, and 50+ cities across India. We manage 24/7 freezer hearse vans, wood and electric crematorium slots, authentic Vedic samagri, experienced Pandits, and Asthi collection.",
      points: [
        "24/7 hearse van and mortuary transport across India",
        "Cremation ground coordination (electric/traditional)",
        "Complete Vedic Antim Sanskar samagri kit",
        "Municipal death certificate and clearance assistance"
      ]
    },
    usa: {
      heading: "Compassionate funeral and cremation coordination across the United States.",
      overview:
        "Serving Indian and multicultural diaspora families across all 50 US states (New York, California, Texas, New Jersey, Illinois, etc.). We manage local funeral home arrangements, cremation permits, county health clearances, and ensure all religious customs are respectfully fulfilled.",
      points: [
        "US funeral home and witness cremation bookings",
        "County registrar and health department transit permits",
        "Faith-specific priests and ritual coordination in the US",
        "Seamless transfer coordination for domestic or overseas repatriation"
      ]
    }
  },

  "international-repatriation": {
    uk: {
      heading: "Specialized international repatriation connecting the UK, India, and worldwide.",
      overview:
        "Specialized repatriation services between the United Kingdom and India or global destinations. We coordinate directly with the High Commission of India in London (and consulates in Birmingham & Edinburgh), the UK Coroner, FCDO, and international airlines (British Airways, Air India, Emirates) for smooth, respectful journey home.",
      points: [
        "High Commission of India & Embassy NOC in the UK",
        "Out of England (Form 103) and Coroner release orders",
        "Air cargo bookings on direct and connecting flights",
        "Customs clearance and receiving ambulance at destination"
      ]
    },
    india: {
      heading: "End-to-end repatriation services from India and receiving overseas arrivals.",
      overview:
        "Expert coordination for receiving deceased loved ones arriving at Indian international airports or sending remains abroad from India. We handle Airport Health Organization (APHO) clearances, customs clearance, NOCs from the Ministry of External Affairs (MEA), embalming, and ground ambulance to the hometown.",
      points: [
        "Express APHO airport health clearances in India",
        "Customs clearance at DEL, BOM, AMD, BLR, MAA, HYD airports",
        "Long-distance AC freezer hearse transfer across states",
        "Embalming and zinc-casket certification for outbound flights"
      ]
    },
    usa: {
      heading: "Repatriation from the United States to India and global destinations.",
      overview:
        "Handling human remains and ash immersion from the US to India. We coordinate with Indian Consulates (New York, San Francisco, Chicago, Houston, Atlanta, Washington D.C.), CDC import/export requirements, apostille certification, and airline cargo.",
      points: [
        "Consulate General of India NOC and Passport cancellation",
        "CDC and US Department of State documentation",
        "Zinc-lined hermetically sealed casket preparation",
        "Airport receiving and transit coordination across India"
      ]
    }
  },

  "spiritual-services": {
    uk: {
      heading: "Vedic priests and spiritual ceremonies across the United Kingdom.",
      overview:
        "Experienced Pandits and priests available in London, Birmingham, Leicester, Manchester, Leeds, and throughout the UK. We organize traditional Antim Kriya, Chautha, Rasam Pagri, Tehravin, and Shraddh ceremonies in accordance with your family's community traditions and scriptures.",
      points: [
        "Verified Pandits for North/South Indian, Gujarati & Punjabi rites",
        "Complete authentic puja samagri arranged in the UK",
        "Hall or temple venue setup assistance",
        "High-definition live broadcast for family overseas"
      ]
    },
    india: {
      heading: "Authentic Vedic rituals and ceremonies at sacred sites across India.",
      overview:
        "Conducting solemn Antim Sanskar, Tehravin, and sacred ancestral rites across Varanasi, Haridwar, Prayagraj, Gaya, Pushkar, and major Indian cities. Our learned scholars guide every step of the Vedic scriptures to bring eternal peace to the departed soul.",
      points: [
        "Priests trained in specific regional and linguistic traditions",
        "Arrangement of freshly sourced Vedic herbs and samagri",
        "Asthi Visarjan at sacred rivers (Ganga, Yamuna, Godavari)",
        "Brahmin Bhojan and donation (Daan) coordination"
      ]
    },
    usa: {
      heading: "Spiritual rites and traditional priest services across the United States.",
      overview:
        "Connecting diaspora families across the USA with knowledgeable Pandits and religious guides for memorial prayers, Hawan, Shanti Path, and Shraddh ceremonies at home, community temples, or online.",
      points: [
        "Pandits available in all major US metropolitan areas",
        "Arrangement of essential Vedic puja materials",
        "Virtual and in-person priest guidance",
        "Memorial service speech and bhajan assistance"
      ]
    }
  },

  "travel-hospitality": {
    uk: {
      heading: "Emergency travel, flights, and accommodation for UK families.",
      overview:
        "When an unexpected loss occurs, our UK travel desk assists families with emergency airline bookings from London Heathrow, Gatwick, Manchester, and Birmingham to India and worldwide destinations, along with fast-track visa and accommodation coordination.",
      points: [
        "Emergency compassionate flight ticketing with major airlines",
        "Fast-track consular visa and emergency certificate guidance",
        "Airport transfers and ground transport in the UK and destination",
        "Flexible hotel bookings near key venues and embassies"
      ]
    },
    india: {
      heading: "Urgent domestic and international travel assistance across India.",
      overview:
        "Providing round-the-clock flight bookings, train arrangements, and airport pickup services for relatives arriving in India from abroad or travelling between Indian states to attend final rites.",
      points: [
        "24/7 emergency air ticketing across domestic and international routes",
        "Chauffeured airport pickup and intercity cab services",
        "Accommodation near cremation sites, ghats, and airports",
        "Dedicated travel coordinator managing family transit"
      ]
    },
    usa: {
      heading: "Emergency travel support and air booking for US families.",
      overview:
        "Assisting US-based relatives with last-minute bereavement travel to India and global locations, coordinating rapid flights, passport/visa renewal consultations, and local hospitality.",
      points: [
        "Bereavement fares and emergency international airline bookings",
        "Emergency visa (OCI/e-Visa) guidance for travel to India",
        "Airport assistance at major US hubs (JFK, SFO, ORD, DFW, IAD)",
        "Coordinated ground transportation upon arrival in India"
      ]
    }
  },

  "documentation-support": {
    uk: {
      heading: "Comprehensive UK documentation, coroner, and consular clearances.",
      overview:
        "We guide families through the UK bureaucratic process, ensuring all official paperwork is obtained rapidly. We handle Coroner release forms, Registrar Death Certificates, Out of England (Form 103) permits, embalming certificates, and High Commission of India NOCs.",
      points: [
        "Registrar of Deaths appointment and certificate procurement",
        "Coroner Form 103 (Out of England) clearance",
        "High Commission of India Consular attestation & NOC",
        "Embalming & Freedom from Infection medical documentation"
      ]
    },
    india: {
      heading: "Complete legal documentation and government approvals across India.",
      overview:
        "Managing all municipal, hospital, and police documentation across Indian cities. We handle municipal death certificates (MCD, BMC, etc.), police clearances, cremation slips, and apostille/consular attestations for overseas estates.",
      points: [
        "Municipal Corporation death certificate applications and follow-up",
        "Hospital clearance and medical cause of death forms (Form 4/4A)",
        "Police NOC for unnatural or transit cases",
        "MEA Apostille and consular verification for overseas use"
      ]
    },
    usa: {
      heading: "US legal documentation, county permits, and consulate clearance.",
      overview:
        "Navigating the complex paperwork required in the US, including County Department of Health death certificates, transit/burial permits, CDC approvals, and Indian Consulate documentation.",
      points: [
        "Certified copies of US Death Certificates from County Registrars",
        "Burial/Transit Permit & Embalmer's Non-Contagious Affidavit",
        "Indian Consulate NOC and canceled Indian passport processing",
        "Apostille authentication by the Secretary of State"
      ]
    }
  },

  "memorial-services": {
    uk: {
      heading: "Serene memorial and prayer meet arrangements across the United Kingdom.",
      overview:
        "We organize respectful memorial gatherings, Shanti Path, and prayer meetings in UK community halls, temples, gurdwaras, churches, or private venues. Includes floral decor, tribute audio-visual displays, and catering coordination.",
      points: [
        "UK venue reservation (halls, temples, banquet centres)",
        "Custom tribute portrait framing and floral decor",
        "Audio-visual equipment for speeches and remembrance videos",
        "Hybrid live stream for family in India and worldwide"
      ]
    },
    india: {
      heading: "Thoughtful Shok Sabha and memorial gatherings across India.",
      overview:
        "Arranging peaceful Shok Sabha, prayer meetings, and tribute events in community centres, auditoriums, or hotels across Indian cities. We handle solemn stage decor, white floral arrangements, sound systems, and bhajan mandalis.",
      points: [
        "Venue booking for Shok Sabha and prayer meets",
        "Traditional white floral stage decor and memory portraits",
        "Bhajan singers and devotional music artists",
        "High-definition broadcast for overseas relatives"
      ]
    },
    usa: {
      heading: "Celebration of life and memorial services across the United States.",
      overview:
        "Coordinating peaceful memorial services, prayer meets, and life celebration gatherings across US cities, tailored to the unique wishes and cultural traditions of your family.",
      points: [
        "Hall, temple, and community space reservations in the US",
        "Digital tribute screens, slideshows, and memory books",
        "Floral wreaths, stands, and dignified stage setups",
        "Seamless live streaming for relatives across the globe"
      ]
    }
  },

  "ambulance-services": {
    uk: {
      heading: "Private, respectful deceased patient transfer across the UK.",
      overview:
        "Providing private, dignified transportation for the deceased between NHS hospitals, private hospices, UK funeral homes, and airports with utmost respect and adherence to UK healthcare standards.",
      points: [
        "Transfers between NHS trusts, hospices, and funeral homes",
        "Airport transfers to London Heathrow, Gatwick, and Manchester",
        "Dignified, discreet, and specially fitted vehicles",
        "24/7 dedicated transfer dispatch team"
      ]
    },
    india: {
      heading: "24/7 AC freezer hearse and mortuary ambulances across India.",
      overview:
        "Round-the-clock emergency hearse vans, freezer box ambulances, and inter-city dead body transport across all Indian states with GPS tracking and sanitized vehicles.",
      points: [
        "Immediate dispatch across all Indian metro and tier-2/3 cities",
        "Vehicles equipped with mobile mortuary freezer units",
        "Inter-state long-distance transfers with dual drivers",
        "Trained, respectful handlers for dignified transit"
      ]
    },
    usa: {
      heading: "Licensed mortuary transfer and first-call transport in the USA.",
      overview:
        "Coordinating professional, licensed first-call transportation from hospitals, medical examiner offices, or residences to funeral homes and airport cargo terminals.",
      points: [
        "Licensed funeral home vehicle dispatch across all US states",
        "Direct airport cargo transfers (JFK, ORD, SFO, LAX, etc.)",
        "Refrigerated vehicle transfer compliance",
        "24/7 on-call dispatch for immediate response"
      ]
    }
  },

  "body-repatriation": {
    uk: {
      heading: "Repatriation of mortal remains from the UK to India and worldwide.",
      overview:
        "Complete management of international human remains repatriation from the UK. We handle embalming at British Institute of Embalmers (BIE) accredited facilities, zinc-lined hermetic coffins, Coroner Form 103, and air freight to Indian airports.",
      points: [
        "Professional embalming and hermetically sealed zinc coffins",
        "High Commission of India consular approvals and sealing",
        "Air cargo bookings on direct flights to Delhi, Mumbai, Ahmedabad, etc.",
        "Customs clearance and receiving ambulance at Indian airports"
      ]
    },
    india: {
      heading: "Repatriation from India and receiving overseas remains into India.",
      overview:
        "Ensuring smooth customs, APHO, and airport procedures when bringing a loved one back to their ancestral home in India, or repatriating foreign nationals from India back to their home country.",
      points: [
        "Express clearance at Indian international airport cargo terminals",
        "APHO (Airport Health Organization) statutory clearance",
        "Continuous family updates during transit",
        "Hearse van transfer directly from airport to native village/city"
      ]
    },
    usa: {
      heading: "Repatriation of mortal remains from the United States to India.",
      overview:
        "End-to-end management of body repatriation from any US state to India, liaising with US Medical Examiners, Indian Consulates, airlines, and customs authorities.",
      points: [
        "Certified embalming and international wooden-casket casing",
        "Indian Consulate inspection, sealing, and clearance certificate",
        "Direct air cargo coordination with major transatlantic airlines",
        "Door-to-door handoff in India directly to the family"
      ]
    }
  },

  "ashes-repatriation": {
    uk: {
      heading: "Safe and respectful transport of cremated remains for ash immersion from the UK to India.",
      overview:
        "Specialized services for repatriating cremated remains for sacred ash immersion (Asthi Visarjan) from the UK to India. We obtain UK crematorium certificates, Indian High Commission clearance, sealed urn verification, and assist with cabin carriage or cargo transport.",
      points: [
        "UK Cremation Certificate and sealed urn documentation",
        "High Commission of India Consular clearance for ash immersion",
        "Guidance on airline hand-carry regulations for sacred ash immersion urns",
        "Sacred Asthi Visarjan ash immersion arrangements in India at holy rivers"
      ]
    },
    india: {
      heading: "Receiving sacred remains in India and Asthi Visarjan ash immersion ceremonies.",
      overview:
        "Assisting families carrying or receiving sacred remains for ash immersion in India, facilitating customs clearance, and organizing sacred ash immersion rituals at holy waters including Varanasi, Haridwar, Prayagraj, and Rameshwaram.",
      points: [
        "Customs support at Indian international airports",
        "Sacred metallic/earthen urns for ash immersion ceremonies",
        "Boat, priest, and samagri coordination at sacred Ghats",
        "Video recording of the Asthi Visarjan ash immersion for overseas family"
      ]
    },
    usa: {
      heading: "Ash immersion from the USA to India with full compliance.",
      overview:
        "Navigating TSA regulations, US Cremation Certificates, and Indian Consulate documentation for carrying or shipping sacred remains for ash immersion to India.",
      points: [
        "TSA-compliant non-metallic urns and Cremation Certificates",
        "Consulate General of India clearance and ash immersion transit NOC",
        "Airline notification and hand-baggage authorization letters",
        "Ash immersion ceremony coordination at Indian holy sites"
      ]
    }
  },

  "embassy-assistance": {
    uk: {
      heading: "Direct liaison with the High Commission of India and consulates across the UK.",
      overview:
        "Our dedicated team handles direct liaison with the High Commission of India in London, and Consulates in Birmingham and Edinburgh, ensuring priority processing of NOCs, passport cancellations, and repatriation authorizations.",
      points: [
        "High Commission of India (London) in-person representation",
        "Consulate General of India (Birmingham & Edinburgh) processing",
        "Expedited consular death registration and NOC",
        "Liaison with foreign embassies for non-Indian nationals in the UK"
      ]
    },
    india: {
      heading: "Liaison with foreign embassies and the Ministry of External Affairs in India.",
      overview:
        "Working closely with foreign embassies located in Chanakyapuri (New Delhi), consulates in Mumbai, Chennai, and Kolkata, and the Ministry of External Affairs for expedited clearances.",
      points: [
        "Ministry of External Affairs (MEA) attestations and apostille",
        "Direct coordination with 50+ foreign diplomatic missions in India",
        "Translation and legal notarization services",
        "24/7 status tracking and urgent appointment booking"
      ]
    },
    usa: {
      heading: "Consular assistance across all Indian Consulates in the USA.",
      overview:
        "Liaising with the Embassy of India in Washington D.C. and Consulates General in New York, Chicago, San Francisco, Houston, Atlanta, and Seattle for rapid approvals.",
      points: [
        "Expedited emergency consular clearance and NOC",
        "Indian passport cancellation and surrender certificates",
        "Document authentication and apostille verification",
        "Clearance for both Indian citizens and OCI/US passport holders"
      ]
    }
  },

  "pandit-services": {
    uk: {
      heading: "Experienced Hindu, Sikh, and Jain priests across the United Kingdom.",
      overview:
        "Providing verified priests in London, Leicester, Birmingham, Manchester, and across the UK for Antyesti, Pind Daan, Hawan, and memorial rituals according to your specific sampradaya and language (Hindi, Gujarati, Punjabi, Tamil, Telugu, etc.).",
      points: [
        "Pandits well-versed in regional linguistic and Vedic traditions",
        "Guidance on UK crematorium timing and ritual constraints",
        "Complete ritual samagri provided on-site",
        "Available for home visits, halls, and crematoriums"
      ]
    },
    india: {
      heading: "Senior Vedic scholars and Pandits across India's sacred hubs.",
      overview:
        "Experienced scholars and priests across all Indian states and sacred pilgrimage centers (Varanasi, Haridwar, Prayagraj, Gaya, Ujjain) performing authentic Vedic rites with strict adherence to scriptures.",
      points: [
        "Verified Acharyas and Pandits for all 16 Vedic Sanskars",
        "Deep knowledge of community-specific rites and mantras",
        "Ritual materials, Gangajal, and holy woods supplied",
        "Transparent, compassionate guidance with no commercial rush"
      ]
    },
    usa: {
      heading: "Priest services for Indian diaspora families across the USA.",
      overview:
        "Connecting families across the US with knowledgeable priests for last rites, memorial Hawan, and prayers conducted respectfully at local US funeral homes, temples, or residences.",
      points: [
        "Priests available across major US metropolitan regions",
        "Adaptation of Vedic rituals to US crematorium guidelines",
        "Pre-ceremony consultations and custom ritual checklists",
        "Online ritual options for families unable to find local priests"
      ]
    }
  },

  "shraddh-services": {
    uk: {
      heading: "Shraddh and ancestral remembrance ceremonies in the UK.",
      overview:
        "Organizing annual Shraddh, Pitru Paksha, and Pind Daan ceremonies in the UK with qualified priests, complete samagri, or facilitating hybrid ceremonies linked to holy shrines in India.",
      points: [
        "Pandit coordination in the UK for Shraddh and Tarpan",
        "Procurement of authentic sesame, barley, and puja items",
        "Guidance on dietary traditions and community meals",
        "Option to conduct Sankalp in UK and Pind Daan in Gaya/Haridwar"
      ]
    },
    india: {
      heading: "Sacred Shraddh, Pind Daan, and Tarpan at holy tirthas in India.",
      overview:
        "Organizing sacred Shraddh and Pind Daan at holy tirtha kshetras (Gaya, Haridwar, Varanasi, Badrinath, Prayagraj). We arrange expert Tirth Purohits, accommodation, puja samagri, and Brahmin Bhojan.",
      points: [
        "Complete arrangements at holy tirthas (Gaya, Haridwar, Kashi)",
        "Accomplished Tirth Purohits with ancestral record keeping",
        "Arrangement of Brahmin Bhojan, Daan, and cow feeding (Go Seva)",
        "Full digital video recording for family members overseas"
      ]
    },
    usa: {
      heading: "Pitru Paksha and Shraddh ceremonies for families in the USA.",
      overview:
        "Assisting US families in fulfilling their sacred duties to ancestors during Pitru Paksha or annual death anniversaries, whether at home in the US or performed on their behalf in India.",
      points: [
        "Local US Pandit coordination for home or temple ceremonies",
        "Remote Sankalp booking for rituals performed at holy rivers in India",
        "Step-by-step guidance on Vedic dates (Tithi) and timings",
        "Prasadam delivery and holy water dispatch to US addresses"
      ]
    }
  },

  "online-rituals": {
    uk: {
      heading: "Interactive virtual Vedic ceremonies for UK diaspora families.",
      overview:
        "Enabling families living in the UK to participate interactively in sacred rituals performed by learned priests at holy Indian shrines and rivers via high-definition video conferencing.",
      points: [
        "Live two-way HD video conferencing with priests in India",
        "Personalized Sankalp taken with the family's Gotra and names",
        "Puja performed at sacred sites (Varanasi, Haridwar, Gaya)",
        "Sacred Prasadam and blessed items couriered to UK addresses"
      ]
    },
    india: {
      heading: "Live online ritual broadcasts and remote prayer participation across India.",
      overview:
        "Allowing global and out-of-station family members to join and observe solemn last rites, Tehravin, and prayer sessions conducted in India through private, encrypted live streams.",
      points: [
        "Professional audio-visual broadcast from home, ghat, or hall",
        "Multiple camera angles capturing the Vedic rituals clearly",
        "Private, password-protected streaming links for relatives",
        "Full HD recording provided for family archives"
      ]
    },
    usa: {
      heading: "Virtual ritual services for Indian families across the United States.",
      overview:
        "Connecting US families directly with sacred Vedic rituals in India, allowing complete remote participation and spiritual closure without international travel.",
      points: [
        "Time-zone adjusted scheduling for US Eastern, Central, and Pacific times",
        "Two-way interactive priest guidance during the puja",
        "Ceremonies conducted on auspicious Vedic dates",
        "Holy Prasadam delivered safely to US home addresses"
      ]
    }
  },

  "air-ambulance": {
    uk: {
      heading: "Dedicated aeromedical flights and rapid transit between UK and international hubs.",
      overview:
        "Chartered air ambulance services for critical medical transfers or rapid repatriation between UK airports (London Heathrow, Biggin Hill, Birmingham) and international destinations with intensive care medical teams.",
      points: [
        "Bed-to-bed aeromedical transfers with specialized flight doctors",
        "Rapid flight clearances and diplomatic landing permissions",
        "Coordination with UK NHS and private hospital teams",
        "24/7 emergency flight operations desk"
      ]
    },
    india: {
      heading: "Chartered air ambulance services across Indian cities and cross-border routes.",
      overview:
        "Immediate air charter ambulance support across all Indian tier-1, tier-2, and tier-3 cities with onboard ICU equipment, ventilators, and emergency medical specialists.",
      points: [
        "Fast dispatch within 2-4 hours across major Indian airports",
        "Fully equipped Flying ICU aircraft (King Air, Learjet, Falcon)",
        "Ground ambulance transfers at both origin and destination airports",
        "Critical care team including anesthetists and flight nurses"
      ]
    },
    usa: {
      heading: "International aeromedical evacuation and repatriation flights from the US.",
      overview:
        "Long-range air ambulance charters connecting North America to India and worldwide destinations for emergency medical transfers or rapid repatriation.",
      points: [
        "FAA-certified air charter aircraft with full intensive care suites",
        "Flight logistics coordination with US hospitals and receiving centers",
        "Transatlantic and transpacific fuel stops and express landing permits",
        "Comprehensive medical escort and bedside-to-bedside care"
      ]
    }
  },

  "live-streaming": {
    uk: {
      heading: "Private, high-definition live streaming from UK funeral venues.",
      overview:
        "Providing discreet, multi-camera live streaming from UK crematoriums, churches, temples, and community halls so relatives in India and across the world can join in honoring your loved one.",
      points: [
        "HD multi-camera broadcast with crystal-clear audio",
        "Private, secure, password-protected viewing webpage",
        "Mobile-friendly streaming with no software download required",
        "Full downloadable archive recording delivered to the family"
      ]
    },
    india: {
      heading: "Reliable live streaming for Antim Sanskar and prayer meets across India.",
      overview:
        "Equipped with portable high-speed internet and professional camera gear, we stream funerals, cremations, and Shok Sabhas from anywhere in India to global relatives in real time.",
      points: [
        "Independent bonded 4G/5G cellular streaming kits for reliable broadcast",
        "Coverage at crematoriums, home residences, and prayer halls",
        "Interactive condolence book on the viewing page",
        "Permanent digital recording copy for the family"
      ]
    },
    usa: {
      heading: "Discreet live streaming from US funeral homes and memorial halls.",
      overview:
        "Ensuring family members around the globe can be virtually present at ceremonies conducted across the United States with seamless video streaming.",
      points: [
        "Compatible with all US funeral home and outdoor locations",
        "Encrypted, private broadcast link shared with the family",
        "High-definition video and dedicated sound microphones",
        "Immediate playback availability across different global time zones"
      ]
    }
  },

  "flower-decor": {
    uk: {
      heading: "Dignified floral arrangements and custom tributes across the UK.",
      overview:
        "Crafting beautiful, culturally appropriate floral wreaths, garland arrangements, and casket sprays across the United Kingdom for funerals, memorial services, and prayer meetings.",
      points: [
        "Fresh marigold, rose, and white floral garlands in the UK",
        "Custom coffin sprays, wreaths, and letter tribute designs",
        "Timely delivery directly to UK funeral homes and crematoriums",
        "Culturally attuned designs for Hindu, Sikh, Christian, and secular services"
      ]
    },
    india: {
      heading: "Fresh floral tributes, stage decor, and hearse decoration across India.",
      overview:
        "Providing fresh, serene floral decorations for hearse vans, Antim Sanskar stages, Shok Sabha venues, and prayer meets across all major Indian cities.",
      points: [
        "Fresh seasonal white lilies, roses, marigolds, and tuberose (Rajnigandha)",
        "Elegant hearse van floral decoration and garland sets",
        "Stage backdrops and photo frame floral designing",
        "Express on-site setup team ensuring immaculate presentation"
      ]
    },
    usa: {
      heading: "Custom floral designs and memorial arrangements in the United States.",
      overview:
        "Delivering culturally respectful floral wreaths, easel sprays, and traditional garlands to US funeral homes and memorial venues.",
      points: [
        "Traditional fresh flower garlands and ceremonial pieces in the US",
        "Casket sprays, standing floral hearts, and cross/Om designs",
        "Coordinated delivery to funeral homes and residences",
        "Custom color themes and personalized floral arrangements"
      ]
    }
  }
};
