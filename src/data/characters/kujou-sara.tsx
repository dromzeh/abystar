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

const KujouSara: Character = {
    name: 'Kujou Sara',
    icon: '/images/characters/kujou-sara.png',
    weapon: 'Bow',
    vision: 'Electro',
    rarity: 4,
    description:
        'A general of the Tenryou Commission. Bold, decisive, and skilled in battle.',
    occupation: 'Tenryou Commission',
    baseStats: {
        '1/20': {
            'Base HP': 802.0,
            'Base ATK': 16.38,
            'Base DEF': 52.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/20': {
            'Base HP': 2061.0,
            'Base ATK': 42.09,
            'Base DEF': 135.25,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '20/40': {
            'Base HP': 2661.0,
            'Base ATK': 54.33,
            'Base DEF': 174.58,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/40': {
            'Base HP': 3985.0,
            'Base ATK': 81.38,
            'Base DEF': 261.5,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.0,
        },
        '40/50': {
            'Base HP': 4411.0,
            'Base ATK': 90.07,
            'Base DEF': 289.45,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/50': {
            'Base HP': 5074.0,
            'Base ATK': 103.61,
            'Base DEF': 332.93,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.06,
        },
        '50/60': {
            'Base HP': 5642.0,
            'Base ATK': 115.2,
            'Base DEF': 370.19,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/60': {
            'Base HP': 6305.0,
            'Base ATK': 128.73,
            'Base DEF': 413.68,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '60/70': {
            'Base HP': 6731.0,
            'Base ATK': 137.43,
            'Base DEF': 441.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/70': {
            'Base HP': 7393.0,
            'Base ATK': 150.95,
            'Base DEF': 485.06,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.12,
        },
        '70/80': {
            'Base HP': 7819.0,
            'Base ATK': 159.64,
            'Base DEF': 513.0,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/80': {
            'Base HP': 8481.0,
            'Base ATK': 173.18,
            'Base DEF': 556.49,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.18,
        },
        '80/90': {
            'Base HP': 8907.0,
            'Base ATK': 181.87,
            'Base DEF': 584.43,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
        '90/90': {
            'Base HP': 9570.0,
            'Base ATK': 195.41,
            'Base DEF': 627.92,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus ATK': 0.24,
        },
    },
    talents: [
        {
            name: 'Normal Attack: Tengu Bowmanship',
            image: 'https://genshin.honeyhunterworld.com/img/s_563101.webp',
            description:
                "Normal Attack\nPerforms up to 5 consecutive shots with a bow.\nCharged Attack\nPerforms a more precise\nAimed Shot\nwith increased DMG.\nWhile aiming, crackling lightning will accumulate on the arrowhead. An arrow fully charged with the storm's might will deal\nElectro DMG\n.\nWhen in the Crowfeather Cover state, a fully-charged arrow will leave a Crowfeather behind after it hits.\nPlunging Attack\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.",
            data: {
                '1-Hit DMG': {
                    Lv1: '36.89%',
                    Lv2: '39.9%',
                    Lv3: '42.9%',
                    Lv4: '47.19%',
                    Lv5: '50.19%',
                    Lv6: '53.62%',
                    Lv7: '58.34%',
                    Lv8: '63.06%',
                    Lv9: '67.78%',
                    Lv10: '72.93%',
                    Lv11: '78.08%',
                    Lv12: '83.23%',
                    Lv13: '88.37%',
                    Lv14: '93.52%',
                    Lv15: '98.67%',
                },
                '2-Hit DMG': {
                    Lv1: '38.7%',
                    Lv2: '41.85%',
                    Lv3: '45%',
                    Lv4: '49.5%',
                    Lv5: '52.65%',
                    Lv6: '56.25%',
                    Lv7: '61.2%',
                    Lv8: '66.15%',
                    Lv9: '71.1%',
                    Lv10: '76.5%',
                    Lv11: '81.9%',
                    Lv12: '87.3%',
                    Lv13: '92.7%',
                    Lv14: '98.1%',
                    Lv15: '103.5%',
                },
                '3-Hit DMG': {
                    Lv1: '48.5%',
                    Lv2: '52.45%',
                    Lv3: '56.4%',
                    Lv4: '62.04%',
                    Lv5: '65.99%',
                    Lv6: '70.5%',
                    Lv7: '76.7%',
                    Lv8: '82.91%',
                    Lv9: '89.11%',
                    Lv10: '95.88%',
                    Lv11: '102.65%',
                    Lv12: '109.42%',
                    Lv13: '116.18%',
                    Lv14: '122.95%',
                    Lv15: '129.72%',
                },
                '4-Hit DMG': {
                    Lv1: '50.4%',
                    Lv2: '54.5%',
                    Lv3: '58.6%',
                    Lv4: '64.46%',
                    Lv5: '68.56%',
                    Lv6: '73.25%',
                    Lv7: '79.7%',
                    Lv8: '86.14%',
                    Lv9: '92.59%',
                    Lv10: '99.62%',
                    Lv11: '106.65%',
                    Lv12: '113.68%',
                    Lv13: '120.72%',
                    Lv14: '127.75%',
                    Lv15: '134.78%',
                },
                '5-Hit DMG': {
                    Lv1: '58.05%',
                    Lv2: '62.77%',
                    Lv3: '67.5%',
                    Lv4: '74.25%',
                    Lv5: '78.97%',
                    Lv6: '84.38%',
                    Lv7: '91.8%',
                    Lv8: '99.23%',
                    Lv9: '106.65%',
                    Lv10: '114.75%',
                    Lv11: '122.85%',
                    Lv12: '130.95%',
                    Lv13: '139.05%',
                    Lv14: '147.15%',
                    Lv15: '155.25%',
                },
                'Aimed Shot': {
                    Lv1: '43.86%',
                    Lv2: '47.43%',
                    Lv3: '51%',
                    Lv4: '56.1%',
                    Lv5: '59.67%',
                    Lv6: '63.75%',
                    Lv7: '69.36%',
                    Lv8: '74.97%',
                    Lv9: '80.58%',
                    Lv10: '86.7%',
                    Lv11: '92.82%',
                    Lv12: '98.94%',
                    Lv13: '105.06%',
                    Lv14: '111.18%',
                    Lv15: '117.3%',
                },
                'Fully-Charged Aimed Shot': {
                    Lv1: '124%',
                    Lv2: '133.3%',
                    Lv3: '142.6%',
                    Lv4: '155%',
                    Lv5: '164.3%',
                    Lv6: '173.6%',
                    Lv7: '186%',
                    Lv8: '198.4%',
                    Lv9: '210.8%',
                    Lv10: '223.2%',
                    Lv11: '235.6%',
                    Lv12: '248%',
                    Lv13: '263.5%',
                    Lv14: '279%',
                    Lv15: '294.5%',
                },
                'Plunge DMG': {
                    Lv1: '56.83%',
                    Lv2: '61.45%',
                    Lv3: '66.08%',
                    Lv4: '72.69%',
                    Lv5: '77.31%',
                    Lv6: '82.6%',
                    Lv7: '89.87%',
                    Lv8: '97.14%',
                    Lv9: '104.41%',
                    Lv10: '112.34%',
                    Lv11: '120.27%',
                    Lv12: '128.2%',
                    Lv13: '136.12%',
                    Lv14: '144.05%',
                    Lv15: '151.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '113.63%',
                    Lv2: '122.88%',
                    Lv3: '132.13%',
                    Lv4: '145.35%',
                    Lv5: '154.59%',
                    Lv6: '165.16%',
                    Lv7: '179.7%',
                    Lv8: '194.23%',
                    Lv9: '208.77%',
                    Lv10: '224.62%',
                    Lv11: '240.48%',
                    Lv12: '256.34%',
                    Lv13: '272.19%',
                    Lv14: '288.05%',
                    Lv15: '303.9%',
                },
                'High Plunge DMG': {
                    Lv1: '141.93%',
                    Lv2: '153.49%',
                    Lv3: '165.04%',
                    Lv4: '181.54%',
                    Lv5: '193.1%',
                    Lv6: '206.3%',
                    Lv7: '224.45%',
                    Lv8: '242.61%',
                    Lv9: '260.76%',
                    Lv10: '280.57%',
                    Lv11: '300.37%',
                    Lv12: '320.18%',
                    Lv13: '339.98%',
                    Lv14: '359.79%',
                    Lv15: '379.59%',
                },
            },
        },
        {
            name: 'Tengu Stormcall',
            image: 'https://genshin.honeyhunterworld.com/img/s_563201.webp',
            description:
                'Retreats rapidly with the speed of a tengu, summoning the protection of the Crowfeather.\nGains Crowfeather Cover for 18s, and when Kujou Sara fires a fully-charged Aimed Shot, Crowfeather Cover will be consumed, and will leave a Crowfeather at the target location.\nCrowfeathers will trigger Tengu Juurai: Ambush after a short time, dealing\nElectro DMG\nand granting the active character within its AoE an ATK Bonus based on Kujou Sara\'s Base ATK.\nThe ATK Bonuses from different Tengu Juurai will not stack, and their effects and duration will be determined by the last Tengu Juurai to take effect.\nThe tengu race have never lacked for exceptional talents who have received an Electro Vision. It\'s just that they often habitually chant praises to the Electro Archon while manipulating Electro. The chants go something like this\n"Show forth your might, O praiseworthy Narukami, and grant this supplicant your thunderous might! Sowaka!"',
            data: {
                'Tengu Juurai: Ambush DMG': {
                    Lv1: '125.76%',
                    Lv2: '135.19%',
                    Lv3: '144.62%',
                    Lv4: '157.2%',
                    Lv5: '166.63%',
                    Lv6: '176.06%',
                    Lv7: '188.64%',
                    Lv8: '201.22%',
                    Lv9: '213.79%',
                    Lv10: '226.37%',
                    Lv11: '238.94%',
                    Lv12: '251.52%',
                    Lv13: '267.24%',
                    Lv14: '282.96%',
                    Lv15: '298.68%',
                },
                'ATK Bonus Ratio': {
                    Lv1: '42.96%',
                    Lv2: '46.18%',
                    Lv3: '49.4%',
                    Lv4: '53.7%',
                    Lv5: '56.92%',
                    Lv6: '60.14%',
                    Lv7: '64.44%',
                    Lv8: '68.74%',
                    Lv9: '73.03%',
                    Lv10: '77.33%',
                    Lv11: '81.62%',
                    Lv12: '85.92%',
                    Lv13: '91.29%',
                    Lv14: '96.66%',
                    Lv15: '102.03%',
                },
                'ATK Bonus Duration': {
                    Lv1: '6s',
                    Lv2: '6s',
                    Lv3: '6s',
                    Lv4: '6s',
                    Lv5: '6s',
                    Lv6: '6s',
                    Lv7: '6s',
                    Lv8: '6s',
                    Lv9: '6s',
                    Lv10: '6s',
                    Lv11: '6s',
                    Lv12: '6s',
                    Lv13: '6s',
                    Lv14: '6s',
                    Lv15: '6s',
                },
                CD: {
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
            },
        },
        {
            name: 'Subjugation: Koukou Sendou',
            image: 'https://genshin.honeyhunterworld.com/img/s_563901.webp',
            description:
                'Casts down Tengu Juurai: Titanbreaker, dealing\nAoE Electro DMG\n. Afterwards, Tengu Juurai: Titanbreaker spreads out into 4 consecutive bouts of Tengu Juurai: Stormcluster, dealing\nAoE Electro DMG\n.\nTengu Juurai: Titanbreaker and Tengu Juurai: Stormcluster can provide the active character within their AoE with the same ATK Bonus as given by the Elemental Skill, Tengu Stormcall.\nThe ATK Bonus provided by various kinds of Tengu Juurai will not stack, and their effects and duration will be determined by the last Tengu Juurai to take effect.\nSara departed from her people, the tengu, and also temporarily lost her faith in the Tenryou Commission. But once the clouds over her heart cleared, she found her own lightning anew.',
            data: {
                'Tengu Juurai: Titanbreaker DMG': {
                    Lv1: '409.6%',
                    Lv2: '440.32%',
                    Lv3: '471.04%',
                    Lv4: '512%',
                    Lv5: '542.72%',
                    Lv6: '573.44%',
                    Lv7: '614.4%',
                    Lv8: '655.36%',
                    Lv9: '696.32%',
                    Lv10: '737.28%',
                    Lv11: '778.24%',
                    Lv12: '819.2%',
                    Lv13: '870.4%',
                    Lv14: '921.6%',
                    Lv15: '972.8%',
                },
                'Tengu Juurai: Stormcluster DMG': {
                    Lv1: '34.12%',
                    Lv2: '36.68%',
                    Lv3: '39.24%',
                    Lv4: '42.65%',
                    Lv5: '45.21%',
                    Lv6: '47.77%',
                    Lv7: '51.18%',
                    Lv8: '54.59%',
                    Lv9: '58%',
                    Lv10: '61.42%',
                    Lv11: '64.83%',
                    Lv12: '68.24%',
                    Lv13: '72.5%',
                    Lv14: '76.77%',
                    Lv15: '81.04%',
                },
                CD: {
                    Lv1: '20s',
                    Lv2: '20s',
                    Lv3: '20s',
                    Lv4: '20s',
                    Lv5: '20s',
                    Lv6: '20s',
                    Lv7: '20s',
                    Lv8: '20s',
                    Lv9: '20s',
                    Lv10: '20s',
                    Lv11: '20s',
                    Lv12: '20s',
                    Lv13: '20s',
                    Lv14: '20s',
                    Lv15: '20s',
                },
                'Energy Cost': {
                    Lv1: '80',
                    Lv2: '80',
                    Lv3: '80',
                    Lv4: '80',
                    Lv5: '80',
                    Lv6: '80',
                    Lv7: '80',
                    Lv8: '80',
                    Lv9: '80',
                    Lv10: '80',
                    Lv11: '80',
                    Lv12: '80',
                    Lv13: '80',
                    Lv14: '80',
                    Lv15: '80',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'Land Survey',
            image: 'https://genshin.honeyhunterworld.com/img/p_562301.webp',
            description:
                'When dispatched on an expedition in Inazuma, time consumed is reduced by 25%.',
        },
        {
            name: 'Immovable Will',
            image: 'https://genshin.honeyhunterworld.com/img/p_562101.webp',
            description:
                'While in the Crowfeather Cover state provided by\nTengu Stormcall\n, Aimed Shot charge times are decreased by 60%.',
        },
        {
            name: 'Decorum',
            image: 'https://genshin.honeyhunterworld.com/img/p_562201.webp',
            description:
                'When Tengu Juurai: Ambush hits opponents, Kujou Sara will restore 1.2 Energy to all party members for every 100% Energy Recharge she has. This effect can be triggered once every 3s.',
        },
    ],
    constellations: [
        {
            name: "Crow's Eye",
            image: 'https://genshin.honeyhunterworld.com/img/c_561.webp',
            description:
                'When Tengu Juurai grant characters ATK Bonuses or hits opponents, the CD of\nTengu Stormcall\nis decreased by 1s.\nThis effect can be triggered once every 3s.',
            level: 1,
        },
        {
            name: 'Dark Wings',
            image: 'https://genshin.honeyhunterworld.com/img/c_562.webp',
            description:
                "Unleashing\nTengu Stormcall\nwill leave a weaker Crowfeather at Kujou Sara's original position that will deal 30% of its original DMG.",
            level: 2,
        },
        {
            name: 'The War Within',
            image: 'https://genshin.honeyhunterworld.com/img/c_563.webp',
            description:
                'Increases the Level of\nSubjugation: Koukou Sendou\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: 'Conclusive Proof',
            image: 'https://genshin.honeyhunterworld.com/img/c_564.webp',
            description:
                'The number of Tengu Juurai: Stormcluster released by\nSubjugation: Koukou Sendou\nis increased to 6.',
            level: 4,
        },
        {
            name: 'Spellsinger',
            image: 'https://genshin.honeyhunterworld.com/img/c_565.webp',
            description:
                'Increases the Level of\nTengu Stormcall\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: 'Sin of Pride',
            image: 'https://genshin.honeyhunterworld.com/img/c_566.webp',
            description:
                'The\nElectro DMG\nof characters who have had their ATK increased by Tengu Juurai has its Crit DMG increased by 60%.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default KujouSara
