const products = [
    // Acuvue
    {
        "name": "Acuvue Oasys",
        "brief": "Acuvue Oasys is the #1 prescribed brand for people new to reusable contact lenses.",
        "fullPrice": 32.50,
        "dealPrice": 24.20,
        "bc": ["8.4/14.0", "8.8/14.0"],
        "type": ["Weekly"],
        "packaging": "6 lenses per box",
        "content": "62% Polymer (senofilcon A) & 38% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Oasys weekly contacts have an exclusive HYDRACLEAR PLUS technology that embeds moisture directly into the lens. This in turn minimizes eye dryness and tired eyes.",
            "This contact lens has a unique porous material that allows oxygen to pass through the lens easily. This keeps your eyes healthy, so you can wear the lens for longer periods, even in dry, dusty  environments. Acuvue Oasys may be worn for up to 6 nights/seven days.",
            "Acuvue Oasys: UV Protection Contact Lenses",
            "Acuvue Oasys can block up to 99% of UVB rays and 95% of UVA rays.*",
            "* NOTE: Acuvue Oasys cannot cover the entire eye or its surrounding area. As such, it is not a replacement for your regular eye protection. Prolonged UV exposure can increase your risk for cataracts and other serious eye conditions.",
        ],
        "img": ["JOS.png"]
    },
    {
        "name": "1 Day Acuvue Moist",
        "brief": "1 Day Acuvue Moist provides an amazing level of comfort and convenience via Acuvue’s exclusive Lacreon Technology.",
        "fullPrice": 33.00,
        "dealPrice": 23.25,
        "bc": ["8.4/14.2", "9.0/14.2"],
        "type": ["Daily"],
        "packaging": "30 lenses per box",
        "content": "42% polymer (etafilcon A) & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue 1 Day Moist combines the convenience of daily disposables with the comfort of Acuvue’s exclusive Lacreon Technology. Those with allergies will appreciate starting each day with fresh contact lenses, and eliminating lens cleaning and storing."],
        "img": ["J1M.png"]
    },
    {
        "name": "1 Day Acuvue Define Natural Shine With LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MS.png"]
    },
    {
        "name": "Acuvue Vita",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 51.95,
        "dealPrice": 50.25,
        "bc": ["8.4/14.2", "9.0/14.2"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "Senofilcon C & 41% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["ACUVUE VITA Brand Contact Lenses with HydraMax Technology is the newest monthly modality lens to enter the ever-expanding and improving contact lens market.",
            "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long."
        ],
        "img": ["JVA.png"]
    },
    {
        "name": "1 Day Acuvue Define Vivid Style with LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MV.png"]
    },
    {
        "name": "1 Day Acuvue Define Radiant Bright with LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MB.png"]
    },
    {
        "name": "1 Day Acuvue Define Radiant Charm With LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MC.png"]
    },
    {
        "name": "1 Day Acuvue Define Accent Style With LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MD.png"]
    },
    {
        "name": "1 Day Acuvue Define Natural Shimmer With LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MSH.png"]
    },
    {
        "name": "1 Day Acuvue Define Radiant Sweet With LACREON",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1MR.png"]
    },
    {
        "name": "ACUVUE OASYS 1-DAY WITH HYDRALUXE 90 Pack",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 87.15,
        
        "bc": ["8.4/14.2"],
        "type": ["Daily"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["JOS190.png"]
    },
    {
        "name": "1-Day Acuvue TruEye",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 39.99,
        "dealPrice": 29.75,
        "bc": ["8.4/14.2"],
        "type": ["Daily", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J1T.png"]
    },
    {
        "name": "2-Week Acuvue Define",
        "brief": "Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color.",
        "fullPrice": 35.25,
        
        "bc": ["8.4/14.2"],
        "type": ["Weekly", "Color"],
        "packaging": "30 lenses per box",
        "content": "42% Etafilcon A & 58% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["Acuvue Define Natural Shine with Lacreon contact lenses enhance eyes with alluring, yet natural color. In addition, Lacreon embeds a wetting agent in the lens for all-day comfort."],
        "img": ["J2V.png"]
    },
    {
        "name": "Acuvue 2",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 35.25,
        
        "bc": ["8.3/14.0"],
        "type": ["Weekly", "Color"],
        "packaging": "6 lenses per box",
        "content": "Senofilcon C & 41% water",
        "brand": "Acuvue",
        "manufacturer": "Johnson & Johnson",
        "description": ["ACUVUE VITA Brand Contact Lenses with HydraMax Technology is the newest monthly modality lens to enter the ever-expanding and improving contact lens market.",
            "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long."
        ],
        "img": ["J2.png"]
    },
    // AIR OPTIX
    {
        "name": "AIR OPTIX HYDRAGLYDE",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 36.95,
        "dealPrice": 36.25,
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "AIR OPTIX",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CH2.png"]
    },
    {
        "name": "Air Optix Aqua",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 44.99,
        
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "AIR OPTIX",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CA2.png"]
    },
    {
        "name": "Air Optix Night & Day Aqua",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 51.25,
        
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "AIR OPTIX",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CAND.png"]
    },
    {
        "name": "O2 Optix",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 22.25,
        
        "bc": ["8.3/14.0"],
        "type": ["Weekly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "AIR OPTIX",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CO2.png"]
    },
    // DAILIES
    {
        "name": "Dailies Total 1",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 36.25,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "DAILIES",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["C1T.png"]
    },
    {
        "name": "Dailies Total 1 day 90 pack",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 99.00,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "DAILIES",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["C1T90.png"]
    },
    {
        "name": "DAILIES AquaComfort Plus",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 30.99,
        "dealPrice": 21.25,
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "DAILIES",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["C1A.png"]
    },
    {
        "name": "DAILIES AquaComfort Plus 90 Pack",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 60.00,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "DAILIES",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["C1A90.png"]
    },
    {
        "name": "Focus Dailies",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "DAILIES",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["C1N.png"]
    },
    // Bausch & Lomb
    {
        "name": "ULTRA",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 56.00,
        
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B2U.png"]
    },
    {
        "name": "NATURELLE ELEGANTBROWN",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily", "color"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B1V.png"]
    },
    {
        "name": "Biotrue One Day",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B1T.png"]
    },
    {
        "name": "Biotrue One Day 90 Pack",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B1T90.png"]
    },
    {
        "name": "SofLens One Day",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B1N.png"]
    },
    {
        "name": "NATURELLE PUREBLACK",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily", "color"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B1D.png"]
    },
    {
        "name": "SofLens 38",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B2.png"]
    },
    {
        "name": "SofLens 59",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Weekly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "Bausch & Lomb",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["B4.png"]
    },
    // CooperVision
    {
        "name": "Biofinity",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "CooperVision",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CPB.png"]
    },
    {
        "name": "Proclear 1 Day",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "CooperVision",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CP1.png"]
    },
    {
        "name": "Clariti 1 Day",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Monthly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "CooperVision",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["CC1.png"]
    },
    {
        "name": "Biomedics 55 Evolution",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 20.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Weekly"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "CooperVision",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["O55.png"]
    },
    // FreshLook
    {
        "name": "FreshLook ColorBlends",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 16.25,
        
        "bc": ["8.3/14.0"],
        "type": ["Weekly", "color"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "FreshLook",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["FLB.png"]
    },
    {
        "name": "FreshLook One-Day",
        "brief": "ACUVUE VITA Brand is a contact lens with unique properties that make it a fantastic lens for current monthly lens wearers experiencing comfort related issues, or new patients seeking a monthly wear cycle. ACUVUE VITA is designed to provide patients reliable, superior comfort - all month long.",
        "fullPrice": 15.75,
        
        "bc": ["8.3/14.0"],
        "type": ["Daily", "color"],
        "packaging": "6 lenses per box",
        "content": "67% lotrafilcon B & 33% water",
        "brand": "FreshLook",
        "manufacturer": "Ciba Vision & Alcon",
        "description": ["Air Optix plus HydraGlyde contact lenses are made with Alcon’s exclusive SmartShield technology. This prevents the build up of lipid deposits and keeps your eyes consistently hydrated and comfortable longer."
        ],
        "img": ["FL1.png"]
    }
];

module.exports = products;