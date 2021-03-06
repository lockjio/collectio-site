// JS Object equivalent of shop-data.json previously used
const SHOP_DATA = {
	premium: {
		id: 1,
		categoryID: 101, // Add unique identifier to serve as pointer reference
		category: "premium",
		title: "Premium Items",
		routeName: "premium",
		items: [
			{
				id: 1,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "New Mutants #98",
				imageUrl: "https://i.ibb.co/hBRGwxH/nm-98-f.jpg",
				price: 960,
				condition: "CGC 9.6 W",
				description:
					"1st appearance of Deadpool, Gideon & Vanessa as Domino.",
				detailsUrl: "http://marvel.wikia.com/wiki/New_Mutants_Vol_1_98",
				backImageUrl: "https://i.ibb.co/MMxtpN9/nm-98-b.jpg",
			},
			{
				id: 2,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Fantastic Four #25",
				imageUrl: "https://i.ibb.co/P5dBL9L/ff-25-f.jpg",
				price: 640,
				condition: "CBCS 7.5 OW",
				description:
					"1st Hulk vs. Thing. Classic Thing vs. Hulk cover. 2nd Silver Age Appearance of Captain America. Avengers appearance.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Fantastic_Four_Vol_1_25",
				backImageUrl: "https://i.ibb.co/BLL4SS9/ff-25-b.jpg",
			},
			{
				id: 3,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Uncanny X-Men #266",
				imageUrl: "https://i.ibb.co/VNfCW1f/uxm-266-f.jpg",
				price: 360,
				condition: "CGC 9.6 W",
				description:
					"First full appearance of Gambit. Mystique appearance.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Uncanny_X-Men_Vol_1_266",
				backImageUrl: "https://i.ibb.co/9Hj6qLg/uxm-266-b.jpg",
			},
			{
				id: 4,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Uncanny X-Men #141",
				imageUrl: "https://i.ibb.co/QDR1RKm/xm-141-f.jpg",
				price: 300,
				condition: "CGC 9.6 W",
				description:
					"1st app. Rachel (Phoenix II), Avalanche, Destiny, Pyro & alternate future X-Men. Senator Robert Kelly appearance.",
				detailsUrl: "http://marvel.wikia.com/wiki/X-Men_Vol_1_141",
				backImageUrl: "https://i.ibb.co/qmvBLnP/xm-141-b.jpg",
			},
			{
				id: 5,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "X-Factor #24",
				imageUrl: "https://i.ibb.co/r7LQzDc/xf-24-f.jpg",
				price: 440,
				condition: "CGC SS 9.6 W",
				description:
					"Origin & 1st appearance of Archangel. Origin of Apocalypse. Horseman app. Caliban leaves X-Factor. Signed by Walt & Louise Simonson on 10/15/11.",
				detailsUrl: "http://marvel.wikia.com/wiki/X-Factor_Vol_1_24",
				backImageUrl: "https://i.ibb.co/10rmDwv/xf-24-b.jpg",
			},
			{
				id: 6,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "X-Factor #6",
				imageUrl: "https://i.ibb.co/sFDSDPq/xf-6-f.jpg",
				price: 200,
				condition: "CGC 9.6 W",
				description:
					"1st full appearance of Apocalypse (En Sabah Nur). Alliance of Evil (Tower, Frenzy, Stinger, Timeshadow) appearance.",
				detailsUrl: "http://marvel.wikia.com/wiki/X-Factor_Vol_1_6",
				backImageUrl: "https://i.ibb.co/XL2rtSV/xf-6-b.jpg",
			},
			{
				id: 7,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Eternals #1",
				imageUrl: "https://i.ibb.co/Tg2zMyp/e-1-f.jpg",
				price: 220,
				condition: "CGC 9.6 C/OW",
				description:
					"Origin & 1st appearance of the Eternals. 1st appearance Ikaris & Kro.",
				detailsUrl: "http://marvel.wikia.com/wiki/Eternals_Vol_1_1",
				backImageUrl: "https://i.ibb.co/zfq4bFv/e-1-b.jpg",
			},
			{
				id: 8,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Amazing Spider-Man #253",
				imageUrl: "https://i.ibb.co/n83H9kz/asm-253-f.jpg",
				price: 180,
				condition: "CGC SS 9.6 W",
				description:
					"1st appearance of the Rose. Signed by Stan Lee on 9/3/10.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Amazing_Spider-Man_Vol_1_253",
				backImageUrl: "https://i.ibb.co/X8jmCmN/asm-253-b.jpg",
			},
			{
				id: 9,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Amazing Spider-Man #212",
				imageUrl: "https://i.ibb.co/ygMBh1V/asm-212-f.jpg",
				price: 180,
				condition: "CGC 9.6 W",
				description: "1st appearance of Hydro-Man.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Amazing_Spider-Man_Vol_1_212",
				backImageUrl: "https://i.ibb.co/9VVNjC6/asm-212-b.jpg",
			},
			{
				id: 10,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Amazing Spider-Man #272",
				imageUrl: "https://i.ibb.co/6PyTn33/asm-272-f.jpg",
				price: 120,
				condition: "CGC 9.6 W",
				description:
					"Origin & 1st appearance of Slyde (Jalome Beacher). Puma appearance.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Amazing_Spider-Man_Vol_1_272",
				backImageUrl: "https://i.ibb.co/rFZJvNb/asm-272-b.jpg",
			},
			{
				id: 11,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Avengers Annual #10",
				imageUrl: "https://i.ibb.co/3dPQR1F/aa-10.jpg",
				price: 70,
				condition: "VF/NM",
				description:
					"1st appearance of Rogue. Signed by Chris Claremont.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Avengers_Annual_Vol_1_10",
				backImageUrl: "",
			},
			{
				id: 12,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Uncanny X-Men #282",
				imageUrl: "https://i.ibb.co/vHWb4pQ/uxm-282.jpg",
				price: 30,
				condition: "VF/NM",
				description:
					"1st appearance of Bishop. Signed by Whilce Portacio.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Uncanny_X-Men_Vol_1_282",
				backImageUrl: "",
			},
			{
				id: 13,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "X-Men #4",
				imageUrl: "https://i.ibb.co/k9WBrKQ/xm-4.jpg",
				price: 10,
				condition: "VF+/NM",
				description: "1st appearance of Omega Red.",
				detailsUrl: "http://marvel.wikia.com/wiki/X-Men_Vol_2_4",
				backImageUrl: "",
			},
			{
				id: 14,
				categoryID: 101, // Point to unique identifier for reference
				category: "premium",
				name: "Avengers vs. X-Men #0",
				imageUrl: "https://i.ibb.co/VMW3StK/avx-0.jpg",
				price: 40,
				condition: "NM/M",
				description: "Stephanie Hans Phoenix Force Cover Variant.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Avengers_vs._X-Men_Vol_1_0",
				backImageUrl: "",
			},
		],
	},
	regular: {
		id: 2,
		categoryID: 102, // Add unique identifier to serve as pointer reference
		category: "regular",
		title: "Regular Items",
		routeName: "regular",
		items: [
			{
				id: 15,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "X-Men Evolutionary War Annual #12",
				imageUrl: "https://i.ibb.co/nbXgQ0h/xmewa-12.jpg",
				price: 3,
				condition: "VF+/NM-",
				description: "",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Uncanny_X-Men_Annual_Vol_1_1988",
				backImageUrl: "",
			},
			{
				id: 16,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Iron Man #9",
				imageUrl: "https://i.ibb.co/Qdx2fCh/im-9.jpg",
				price: 4,
				condition: "NM/M",
				description: "Deadpool Cover Variant.",
				detailsUrl: "http://marvel.wikia.com/wiki/Iron_Man_Vol_5_9",
				backImageUrl: "",
			},
			{
				id: 17,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Annihilators #1",
				imageUrl: "https://i.ibb.co/qMxCKCH/a-1.jpg",
				price: 5,
				condition: "VF+/NM",
				description: "",
				detailsUrl: "http://marvel.wikia.com/wiki/Annihilators_Vol_1_1",
				backImageUrl: "",
			},
			{
				id: 18,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Nova #1",
				imageUrl: "https://i.ibb.co/NFmfSyr/n-1.jpg",
				price: 5,
				condition: "NM/M",
				description: "Skottie Young Baby Cover Variant.",
				detailsUrl: "http://marvel.wikia.com/wiki/Nova_Vol_5_1",
				backImageUrl: "",
			},
			{
				id: 19,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Uncanny X-Force #1",
				imageUrl: "https://i.ibb.co/JrPS0VC/uxf-1.jpg",
				price: 5,
				condition: "NM/M",
				description: "Skottie Young Baby Cover Variant.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Uncanny_X-Force_Vol_2_1",
				backImageUrl: "",
			},
			{
				id: 20,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Secret Avengers #1",
				imageUrl: "https://i.ibb.co/1mt12Lm/sa-1.jpg",
				price: 5,
				condition: "NM/M",
				description: "Skottie Young Baby Cover Variant.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Secret_Avengers_Vol_2_1",
				backImageUrl: "",
			},
			{
				id: 21,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Secret Wars #0",
				imageUrl: "https://i.ibb.co/x6L8Fk7/sw-0.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2015.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Free_Comic_Book_Day_Vol_2015_Secret_Wars",
				backImageUrl: "",
			},
			{
				id: 22,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "The All-New, All-Different Avengers",
				imageUrl: "https://i.ibb.co/bv3JkHF/tanada.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2015.",
				detailsUrl:
					"http://marvel.wikia.com/wiki/Free_Comic_Book_Day_Vol_2015_Avengers",
				backImageUrl: "",
			},
			{
				id: 23,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Divergence #1",
				imageUrl: "https://i.ibb.co/8x274rF/d-1.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2015.",
				detailsUrl: "http://dc.wikia.com/wiki/Divergence_Vol_1_1",
				backImageUrl: "",
			},
			{
				id: 24,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "The New 52 Futures End #0",
				imageUrl: "https://i.ibb.co/6gRQWC7/tn52fe-0.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2014.",
				detailsUrl:
					"http://dc.wikia.com/wiki/The_New_52:_Futures_End_FCBD_Special_Edition",
				backImageUrl: "",
			},
			{
				id: 25,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Mister Terrific #3",
				imageUrl: "https://i.ibb.co/6YBB67s/mt-3.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl: "http://dc.wikia.com/wiki/Mister_Terrific_Vol_1_3",
				backImageUrl: "",
			},
			{
				id: 26,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Spider-Man #33",
				imageUrl: "https://i.ibb.co/8c5wdLr/sm-33.jpg",
				price: 2,
				condition: "VF/NM",
				description: "",
				detailsUrl: "http://marvel.wikia.com/wiki/Spider-Man_Vol_1_33",
				backImageUrl: "",
			},
			{
				id: 27,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "X-Men Deluxe #39",
				imageUrl: "https://i.ibb.co/S5Xf6GT/xmd-39.jpg",
				price: 2,
				condition: "VF/NM",
				description: "",
				detailsUrl: "http://marvel.wikia.com/wiki/X-Men_Vol_2_39",
				backImageUrl: "",
			},
			{
				id: 28,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Sneak Peeks January One-Shot",
				imageUrl: "https://i.ibb.co/VmyMV9X/spjos.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/january-2011-sneak-peeks-1-one-shot/4000-254779/",
				backImageUrl: "",
			},
			{
				id: 29,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Savage Dragon Legacy #1",
				imageUrl: "https://i.ibb.co/1nk5yMq/sdl-1.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2015.",
				detailsUrl:
					"https://comicvine.gamespot.com/savage-dragon-legacy-1/4000-487500/",
				backImageUrl: "",
			},
			{
				id: 30,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Rise of the Magi #0",
				imageUrl: "https://i.ibb.co/mCQWGn6/rotm-0.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2014.",
				detailsUrl:
					"https://comicvine.gamespot.com/rise-of-the-magi-0/4000-452072/",
				backImageUrl: "",
			},
			{
				id: 31,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Freak Force #2",
				imageUrl: "https://i.ibb.co/DLx9RM6/ff-2.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/freak-force-2/4000-111768/",
				backImageUrl: "",
			},
			{
				id: 32,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Free Comic Book Day 2014 Previews",
				imageUrl: "https://i.ibb.co/c6yPMNZ/fcbd2014p.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "Free Comic Book Day (FCBD) 2014.",
				detailsUrl:
					"http://www.grahamcrackers.com/products/fcbd_2014_previewsworld_spectacular_1.htm",
				backImageUrl: "",
			},
			{
				id: 33,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Rich Johnston's The Avengefuls #1",
				imageUrl: "https://i.ibb.co/FxXJWSx/rjta-1.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/rich-johnstons-the-avengefuls-1/4000-357694/",
				backImageUrl: "",
			},
			{
				id: 34,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Planet of the Apes #8",
				imageUrl: "https://i.ibb.co/RPWMwmr/pota-8.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/planet-of-the-apes-8-the-devils-pawn-part-4/4000-302771/",
				backImageUrl: "",
			},
			{
				id: 35,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Irredeemable #37",
				imageUrl: "https://i.ibb.co/4dZJcqw/i-37.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/irredeemable-37/4000-336590/",
				backImageUrl: "",
			},
			{
				id: 36,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Fanboys VS. Zombies #4",
				imageUrl: "https://i.ibb.co/BLDsw8X/fvz-4.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/fanboys-vs-zombies-4/4000-350007/",
				backImageUrl: "",
			},
			{
				id: 37,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Starborn #2",
				imageUrl: "https://i.ibb.co/XynWL1h/s-2.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/starborn-2-starborn-part-2/4000-255982/",
				backImageUrl: "",
			},
			{
				id: 38,
				categoryID: 102, // Point to unique identifier for reference
				category: "regular",
				name: "Elric: The Balance Lost #1",
				imageUrl: "https://i.ibb.co/gRnX0NY/etbl-1.jpg",
				price: 2,
				condition: "VF+/NM",
				description: "",
				detailsUrl:
					"https://comicvine.gamespot.com/elric-the-balance-lost-1/4000-278120/",
				backImageUrl: "",
			},
		],
	},
};

export default SHOP_DATA;
