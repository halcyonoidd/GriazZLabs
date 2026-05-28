const daqu = new URL("../../assets/images/daarul_quran.png", import.meta.url).href;
const wd = new URL("../../assets/images/sman6tangerang.png", import.meta.url).href;
const unesa = new URL("../../assets/images/unesa.png", import.meta.url).href;
const aiesec = new URL("../../assets/images/aiesec.png", import.meta.url).href;
const bemft = new URL("../../assets/images/bemft.png", import.meta.url).href;

export const reviews = [
	{
		name: "Daarul Qur'an",
		username: "@daarul_quran",
		body: "Science Junior High School (2018 - 2021)",
		img: daqu,
	},
	{
		name: "SMA Negeri 6 Tangerang",
		username: "@sman6tangerang",
		body: "Science Senior High School (2021 - 2024)",
		img: wd,
	},
    {
        name: "Universitas Negeri Surabaya",
        username: "@official_unesa",
        body: "Bachelor of Computer Science (2024 - Present)",
        img: unesa,
    },
	{
		name: "AIESEC in Surabaya",
		username: "@aiesecsurabaya",
		body: "Talent Member (2025)",
		img: aiesec,
	},
	{
		name: "BEM FT UNESA",
		username: "@bemftunesa",
		body: "Staff External Relations (2026 - Present)",
		img: bemft,
	},
	{
		name: "Faculty of Mathematics and Natural Science - UNESA",
		username: "@official_fmipaunesa",
		body: "Data Structure Practicum Co-Assistant (2026 - Present)",
		img: unesa,
	}
];