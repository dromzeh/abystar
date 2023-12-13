import { TalentScaling, Bonus, Character } from '@/interfaces/Character'

const talentScalings: TalentScaling = {
    // ...
}

const characterBonuses: Bonus[] = [
    // ...
]

const constellationBonuses: Bonus[] = [
    // ...
]

const Kirara: Character = {
    name: 'Kirara',
    icon: '/images/characters/kirara.png',
    weapon: 'Sword',
    vision: 'Dendro',
    rarity: 4,
    description:
        'A courier for Komaniya Express, a delivery company in Inazuma. A nekomata who loves her job and human society.',
    occupation: 'Komaniya Express',
    baseStats: {
        '1/20': {
            'Base HP': 1021.0,
            'Base ATK': 18.7,
            'Base DEF': 45.78,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/20': {
            'Base HP': 2623.0,
            'Base ATK': 48.04,
            'Base DEF': 117.61,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '20/40': {
            'Base HP': 3386.0,
            'Base ATK': 62.01,
            'Base DEF': 151.81,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/40': {
            'Base HP': 5072.0,
            'Base ATK': 92.88,
            'Base DEF': 227.39,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.0,
        },
        '40/50': {
            'Base HP': 5614.0,
            'Base ATK': 102.8,
            'Base DEF': 251.69,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/50': {
            'Base HP': 6458.0,
            'Base ATK': 118.25,
            'Base DEF': 289.51,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.06,
        },
        '50/60': {
            'Base HP': 7181.0,
            'Base ATK': 131.48,
            'Base DEF': 321.91,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/60': {
            'Base HP': 8024.0,
            'Base ATK': 146.93,
            'Base DEF': 359.72,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '60/70': {
            'Base HP': 8566.0,
            'Base ATK': 156.85,
            'Base DEF': 384.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/70': {
            'Base HP': 9409.0,
            'Base ATK': 172.28,
            'Base DEF': 421.79,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.12,
        },
        '70/80': {
            'Base HP': 9951.0,
            'Base ATK': 182.2,
            'Base DEF': 446.09,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/80': {
            'Base HP': 10794.0,
            'Base ATK': 197.65,
            'Base DEF': 483.9,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.18,
        },
        '80/90': {
            'Base HP': 11336.0,
            'Base ATK': 207.57,
            'Base DEF': 508.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
        '90/90': {
            'Base HP': 12180.0,
            'Base ATK': 223.02,
            'Base DEF': 546.02,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus HP': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Boxcutter',
            image: 'https://genshin.honeyhunterworld.com/img/s_613101.webp',
            description:
                'Normal Attack\nPerforms up to 4 rapid strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash 3 rapid claw strikes.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '47.9%',
                    Lv2: '51.8%',
                    Lv3: '55.7%',
                    Lv4: '61.27%',
                    Lv5: '65.17%',
                    Lv6: '69.63%',
                    Lv7: '75.75%',
                    Lv8: '81.88%',
                    Lv9: '88.01%',
                    Lv10: '94.69%',
                    Lv11: '101.37%',
                    Lv12: '108.06%',
                    Lv13: '114.74%',
                    Lv14: '121.43%',
                    Lv15: '128.11%',
                },
                '2-Hit DMG': {
                    Lv1: '46.35%',
                    Lv2: '50.13%',
                    Lv3: '53.9%',
                    Lv4: '59.29%',
                    Lv5: '63.06%',
                    Lv6: '67.37%',
                    Lv7: '73.3%',
                    Lv8: '79.23%',
                    Lv9: '85.16%',
                    Lv10: '91.63%',
                    Lv11: '98.1%',
                    Lv12: '104.57%',
                    Lv13: '111.03%',
                    Lv14: '117.5%',
                    Lv15: '123.97%',
                },
                '3-Hit DMG': {
                    Lv1: '63.55%',
                    Lv2: '68.73%',
                    Lv3: '73.90%',
                    Lv4: '81.29%',
                    Lv5: '86.47%',
                    Lv6: '92.38%',
                    Lv7: '100.50%',
                    Lv8: '108.63%',
                    Lv9: '116.76%',
                    Lv10: '125.63%',
                    Lv11: '134.50%',
                    Lv12: '143.37%',
                    Lv13: '152.23%',
                    Lv14: '161.10%',
                    Lv15: '169.97%',
                },
                '4-Hit DMG': {
                    Lv1: '73.27%',
                    Lv2: '79.24%',
                    Lv3: '85.2%',
                    Lv4: '93.72%',
                    Lv5: '99.68%',
                    Lv6: '106.5%',
                    Lv7: '115.87%',
                    Lv8: '125.24%',
                    Lv9: '134.62%',
                    Lv10: '144.84%',
                    Lv11: '155.06%',
                    Lv12: '165.29%',
                    Lv13: '175.51%',
                    Lv14: '185.74%',
                    Lv15: '195.96%',
                },
                'Charged Attack DMG': {
                    Lv1: '111.88%',
                    Lv2: '121.00%',
                    Lv3: '130.10%',
                    Lv4: '143.10%',
                    Lv5: '152.22%',
                    Lv6: '162.62%',
                    Lv7: '176.93%',
                    Lv8: '191.25%',
                    Lv9: '205.55%',
                    Lv10: '221.17%',
                    Lv11: '236.78%',
                    Lv12: '252.40%',
                    Lv13: '268.00%',
                    Lv14: '283.62%',
                    Lv15: '299.23%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '20',
                    Lv2: '20',
                    Lv3: '20',
                    Lv4: '20',
                    Lv5: '20',
                    Lv6: '20',
                    Lv7: '20',
                    Lv8: '20',
                    Lv9: '20',
                    Lv10: '20',
                    Lv11: '20',
                    Lv12: '20',
                    Lv13: '20',
                    Lv14: '20',
                    Lv15: '20',
                },
                'Plunge DMG': {
                    Lv1: '63.93%',
                    Lv2: '69.14%',
                    Lv3: '74.34%',
                    Lv4: '81.77%',
                    Lv5: '86.98%',
                    Lv6: '92.93%',
                    Lv7: '101.1%',
                    Lv8: '109.28%',
                    Lv9: '117.46%',
                    Lv10: '126.38%',
                    Lv11: '135.3%',
                    Lv12: '144.22%',
                    Lv13: '153.14%',
                    Lv14: '162.06%',
                    Lv15: '170.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '127.84%',
                    Lv2: '138.24%',
                    Lv3: '148.65%',
                    Lv4: '163.51%',
                    Lv5: '173.92%',
                    Lv6: '185.81%',
                    Lv7: '202.16%',
                    Lv8: '218.51%',
                    Lv9: '234.86%',
                    Lv10: '252.7%',
                    Lv11: '270.54%',
                    Lv12: '288.38%',
                    Lv13: '306.22%',
                    Lv14: '324.05%',
                    Lv15: '341.89%',
                },
                'High Plunge DMG': {
                    Lv1: '159.68%',
                    Lv2: '172.67%',
                    Lv3: '185.67%',
                    Lv4: '204.24%',
                    Lv5: '217.23%',
                    Lv6: '232.09%',
                    Lv7: '252.51%',
                    Lv8: '272.93%',
                    Lv9: '293.36%',
                    Lv10: '315.64%',
                    Lv11: '337.92%',
                    Lv12: '360.2%',
                    Lv13: '382.48%',
                    Lv14: '404.76%',
                    Lv15: '427.04%',
                },
            },
        },
        {
            name: 'Meow-teor Kick',
            image: 'https://genshin.honeyhunterworld.com/img/s_613201.webp',
            description:
                'Press\nLeaps into the air with all the agility of a cat passing through the bushes, and thwacks her foes with a flying kick that deals\nAoE Dendro DMG\nwhile creating a Shield of Safe Transport. This will also briefly\napply Dendro\nto Kirara. The shield will absorb\nDendro DMG\nwith 250% effectiveness. The shield\'s DMG absorption will be based on Kirara\'s Max HP and will not exceed a certain percentage of that Max HP. The remaining DMG absorption on a Shield of Safe Transport will stack on a new one when it is created, and its duration will reset.\nHold\nOut of her desire to "deliver within half a day," Kirara deploys a Shield of Safe Transport identical to the one that can be created by pressing the skill. She will also curl up into a special express delivery box, entering the Urgent Neko Parcel state in order to move and fight more swiftly.\nUrgent Neko Parcel\n\u00b7 Deals\nDendro DMG\nto opponents she crashes into. This effect can be triggered once on each opponent every 0.5s.\n\u00b7 When in this state, Kirara\'s movement speed, climbing speed, and jumping power are all increased, and her Stamina Consumption from climbing is increased.\n\u00b7 When the duration ends or the skill is used again, a Flipclaw Strike more powerful than the attack in the Press Mode will be unleashed, dealing\nAoE Dendro DMG\n.\n\u00b7 The Urgent Neko Parcel state lasts a maximum of 10s. When the state ends, the skill will enter CD. The longer Kirara spends in this state, the longer the CD will be.\n\u00b7 Sprinting or actively canceling climbing will end this state early.\n"So you wanna know the secret to speedy deliveries? Well, it\'s all in the legs!"',
            data: {
                'Tail-Flicking Flying Kick DMG': {
                    Lv1: '104%',
                    Lv2: '111.8%',
                    Lv3: '119.6%',
                    Lv4: '130%',
                    Lv5: '137.8%',
                    Lv6: '145.6%',
                    Lv7: '156%',
                    Lv8: '166.4%',
                    Lv9: '176.8%',
                    Lv10: '187.2%',
                    Lv11: '197.6%',
                    Lv12: '208%',
                    Lv13: '221%',
                    Lv14: '234%',
                    Lv15: '247%',
                },
                'Shield DMG Absorption': {
                    Lv1: '10% Max HP + 962.23',
                    Lv2: '10.75% Max HP + 1058.47',
                    Lv3: '11.5% Max HP + 1162.72',
                    Lv4: '12.5% Max HP + 1275',
                    Lv5: '13.25% Max HP + 1395.3',
                    Lv6: '14% Max HP + 1523.61',
                    Lv7: '15% Max HP + 1659.95',
                    Lv8: '16% Max HP + 1804.3',
                    Lv9: '17% Max HP + 1956.68',
                    Lv10: '18% Max HP + 2117.07',
                    Lv11: '19% Max HP + 2285.48',
                    Lv12: '20% Max HP + 2461.92',
                    Lv13: '21.25% Max HP + 2646.37',
                    Lv14: '22.5% Max HP + 2838.84',
                    Lv15: '23.75% Max HP + 3039.34',
                },
                'Max Shield DMG Absorption': {
                    Lv1: '16% Max HP + 1541.08',
                    Lv2: '17.2% Max HP + 1695.21',
                    Lv3: '18.4% Max HP + 1862.18',
                    Lv4: '20% Max HP + 2042',
                    Lv5: '21.2% Max HP + 2234.66',
                    Lv6: '22.4% Max HP + 2440.17',
                    Lv7: '24% Max HP + 2658.52',
                    Lv8: '25.6% Max HP + 2889.71',
                    Lv9: '27.2% Max HP + 3133.75',
                    Lv10: '28.8% Max HP + 3390.63',
                    Lv11: '30.4% Max HP + 3660.36',
                    Lv12: '32% Max HP + 3942.93',
                    Lv13: '34% Max HP + 4238.34',
                    Lv14: '36% Max HP + 4546.6',
                    Lv15: '38% Max HP + 4867.71',
                },
                'Shield Duration': {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
                },
                'Urgent Neko Parcel Hit DMG': {
                    Lv1: '33.6%',
                    Lv2: '36.12%',
                    Lv3: '38.64%',
                    Lv4: '42%',
                    Lv5: '44.52%',
                    Lv6: '47.04%',
                    Lv7: '50.4%',
                    Lv8: '53.76%',
                    Lv9: '57.12%',
                    Lv10: '60.48%',
                    Lv11: '63.84%',
                    Lv12: '67.2%',
                    Lv13: '71.4%',
                    Lv14: '75.6%',
                    Lv15: '79.8%',
                },
                'Max Urgent Neko Parcel Duration': {
                    Lv1: '10s',
                    Lv2: '10s',
                    Lv3: '10s',
                    Lv4: '10s',
                    Lv5: '10s',
                    Lv6: '10s',
                    Lv7: '10s',
                    Lv8: '10s',
                    Lv9: '10s',
                    Lv10: '10s',
                    Lv11: '10s',
                    Lv12: '10s',
                    Lv13: '10s',
                    Lv14: '10s',
                    Lv15: '10s',
                },
                'Flipclaw Strike DMG': {
                    Lv1: '144%',
                    Lv2: '154.8%',
                    Lv3: '165.6%',
                    Lv4: '180%',
                    Lv5: '190.8%',
                    Lv6: '201.6%',
                    Lv7: '216%',
                    Lv8: '230.4%',
                    Lv9: '244.8%',
                    Lv10: '259.2%',
                    Lv11: '273.6%',
                    Lv12: '288%',
                    Lv13: '306%',
                    Lv14: '324%',
                    Lv15: '342%',
                },
                CD: {
                    Lv1: '8s \u2013 12s',
                    Lv2: '8s \u2013 12s',
                    Lv3: '8s \u2013 12s',
                    Lv4: '8s \u2013 12s',
                    Lv5: '8s \u2013 12s',
                    Lv6: '8s \u2013 12s',
                    Lv7: '8s \u2013 12s',
                    Lv8: '8s \u2013 12s',
                    Lv9: '8s \u2013 12s',
                    Lv10: '8s \u2013 12s',
                    Lv11: '8s \u2013 12s',
                    Lv12: '8s \u2013 12s',
                    Lv13: '8s \u2013 12s',
                    Lv14: '8s \u2013 12s',
                    Lv15: '8s \u2013 12s',
                },
            },
        },
        {
            name: 'Secret Art: Surprise Dispatch',
            image: 'https://genshin.honeyhunterworld.com/img/s_613901.webp',
            description:
                'Smash opponents with a Special Delivery Package used for punishing parcel thieves, dealing\nAoE Dendro DMG\n. After the Special Delivery Package explodes, it will split up into many\nCat Grass Cardamoms\nthat will explode either upon contact with opponents or after a period of time, dealing\nAoE Dendro DMG\n.\n"Hehe, that\'s right, this stuff was made to deal with those parcel thieves! Remember to leave a 5-star rating once you\'ve received yours!"',
            data: {
                'Skill DMG': {
                    Lv1: '570.24%',
                    Lv2: '613.01%',
                    Lv3: '655.78%',
                    Lv4: '712.8%',
                    Lv5: '755.57%',
                    Lv6: '798.34%',
                    Lv7: '855.36%',
                    Lv8: '912.38%',
                    Lv9: '969.41%',
                    Lv10: '1026.43%',
                    Lv11: '1083.46%',
                    Lv12: '1140.48%',
                    Lv13: '1211.76%',
                    Lv14: '1283.04%',
                    Lv15: '1354.32%',
                },
                'Cat Grass Cardamom Explosion DMG': {
                    Lv1: '35.64%',
                    Lv2: '38.31%',
                    Lv3: '40.99%',
                    Lv4: '44.55%',
                    Lv5: '47.22%',
                    Lv6: '49.9%',
                    Lv7: '53.46%',
                    Lv8: '57.02%',
                    Lv9: '60.59%',
                    Lv10: '64.15%',
                    Lv11: '67.72%',
                    Lv12: '71.28%',
                    Lv13: '75.74%',
                    Lv14: '80.19%',
                    Lv15: '84.64%',
                },
                'Cat Grass Cardamom Duration': {
                    Lv1: '12s',
                    Lv2: '12s',
                    Lv3: '12s',
                    Lv4: '12s',
                    Lv5: '12s',
                    Lv6: '12s',
                    Lv7: '12s',
                    Lv8: '12s',
                    Lv9: '12s',
                    Lv10: '12s',
                    Lv11: '12s',
                    Lv12: '12s',
                    Lv13: '12s',
                    Lv14: '12s',
                    Lv15: '12s',
                },
                CD: {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                'Energy Cost': {
                    Lv1: '60',
                    Lv2: '60',
                    Lv3: '60',
                    Lv4: '60',
                    Lv5: '60',
                    Lv6: '60',
                    Lv7: '60',
                    Lv8: '60',
                    Lv9: '60',
                    Lv10: '60',
                    Lv11: '60',
                    Lv12: '60',
                    Lv13: '60',
                    Lv14: '60',
                    Lv15: '60',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: "Cat's Creeping Carriage",
            image: 'https://genshin.honeyhunterworld.com/img/p_612301.webp',
            description:
                'When Kirara is in the party, animals who produce Fowl, Raw Meat, or Chilled Meat will not be startled when party members approach them.',
        },
        {
            name: 'Bewitching, Betwitching Tails',
            image: 'https://genshin.honeyhunterworld.com/img/p_612101.webp',
            description:
                'When Kirara is in the Urgent Neko Parcel state of\nMeow-teor Kick\n, each impact against an opponent will grant her a stack of\nReinforced Packaging\n. This effect can be triggered once for each opponent hit every 0.5s. Max 3 stacks. When the Urgent Neko Parcel state ends, each stack of Reinforced Packaging will create 1 Shield of Safe Transport for Kirara. The shields that are created this way will have 20% of the DMG absorption that the Shield of Safe Transport produced by\nMeow-teor Kick\nwould have. If Kirara is already protected by a Shield of Safe Transport created by Meow-teor Kick, its DMG absorption will stack with these shields and its duration will reset.',
        },
        {
            name: 'Pupillary Variance',
            image: 'https://genshin.honeyhunterworld.com/img/p_612201.webp',
            description:
                'Every 1,000 Max HP Kirara possesses will increase the DMG dealt by\nMeow-teor Kick\nby 0.4%, and the DMG dealt by\nSecret Art: Surprise Dispatch\nby 0.3%.',
        },
    ],
    constellations: [
        {
            name: 'Material Circulation',
            image: 'https://genshin.honeyhunterworld.com/img/c_611.webp',
            description:
                'Every 8,000 Max HP Kirara possesses will cause her to create 1 extra\nCat Grass Cardamom\nwhen she uses\nSecret Art: Surprise Dispatch\n. A maximum of 4 extra can be created this way.',
            level: 1,
        },
        {
            name: 'Perfectly Packaged',
            image: 'https://genshin.honeyhunterworld.com/img/c_612.webp',
            description:
                "When Kirara is in the Urgent Neko Parcel state of\nMeow-teor Kick\n, she will grant other party members she crashes into Critical Transport Shields.\nThe DMG absorption of Critical Transport Shield is 40% of the maximum absorption\nMeow-teor Kick\n's normal Shields of Safe Transport are capable of, and will absorb\nDendro DMG\nwith 250% effectiveness.\nCritical Transport Shields last 12s and can be triggered once on each character every 10s.",
            level: 2,
        },
        {
            name: 'Universal Recognition',
            image: 'https://genshin.honeyhunterworld.com/img/c_613.webp',
            description:
                'Increases the Level of\nMeow-teor Kick\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Steed of Skanda',
            image: 'https://genshin.honeyhunterworld.com/img/c_614.webp',
            description:
                'After active character(s) protected by\nShields of Safe Transport\nor\nCritical Transport Shields\nhit opponents with Normal, Charged, or Plunging Attacks, Kirara will perform a coordinated attack with them using\nSmall Cat Grass Cardamoms\n, dealing 200% of her ATK as\nDendro DMG\n. DMG dealt this way is considered Elemental Burst DMG. This effect can be triggered once every 3.8s. This CD is shared between all party members.',
            level: 4,
        },
        {
            name: 'A Thousand Miles in a Day',
            image: 'https://genshin.honeyhunterworld.com/img/c_615.webp',
            description:
                'Increases the Level of\nSecret Art: Surprise Dispatch\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Countless Sights to See',
            image: 'https://genshin.honeyhunterworld.com/img/c_616.webp',
            description:
                'All nearby party members will gain 12% All Elemental DMG Bonus within 15s after Kirara uses her Elemental Skill or Burst.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Kirara