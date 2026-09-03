/**
 * Toppers gallery data for /about/selections — mirrors the `selections`
 * table in src/db/schema.ts so it can be swapped for a query later.
 */
export type Topper = {
  frame: string;
  photo: string | null;
  initials: string | null;
  name: string;
  rank: string | null;
};

export type ExamGroup = {
  id: string;
  badge: string | null;
  title: string;
  subtitle: string | null;
  toppers: Topper[];
};

export const examGroups: ExamGroup[] = [
  {
    "id": "exam-1",
    "badge": "72 in Top 100 Ranks",
    "title": "RAS 2024",
    "subtitle": "More than total 650 Selections",
    "toppers": [
      {
        "frame": "frame-gold",
        "photo": "/images/selections/20260513_add61c54c49564fe.jpg",
        "initials": null,
        "name": "Dinesh Bishnoi",
        "rank": "Rank 1"
      },
      {
        "frame": "frame-silver",
        "photo": "/images/selections/20260513_b71b8e5c97d6580a.jpg",
        "initials": null,
        "name": "Virendra Charan",
        "rank": "Rank 2"
      },
      {
        "frame": "frame-bronze",
        "photo": "/images/selections/20260513_9a16ec0be6530a28.jpg",
        "initials": null,
        "name": "Navneet Sharma",
        "rank": "Rank 3"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_02d21270011fd39a.jpg",
        "initials": null,
        "name": "Vikas Sihag",
        "rank": "Rank 5"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_53b10f28fb8c9fca.jpg",
        "initials": null,
        "name": "Aishwarya Kanwar",
        "rank": "Rank 6"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_416bbfc78b87f21b.jpg",
        "initials": null,
        "name": "Dinesh",
        "rank": "Rank 7"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_29cec5b2834c584e.jpg",
        "initials": null,
        "name": "Shallu",
        "rank": "Rank 8"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_ff8b9fdf50f5294a.jpg",
        "initials": null,
        "name": "Bhoopendra Singh",
        "rank": "Rank 9"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_739977b35e55f244.jpg",
        "initials": null,
        "name": "Yashwant Sandhu",
        "rank": "Rank 11"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_8cb08f3dbf0c1e0d.jpg",
        "initials": null,
        "name": "Chanan Singh",
        "rank": "Rank 14"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_281801796eceee77.jpg",
        "initials": null,
        "name": "Abhay Singh",
        "rank": "Rank 15"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_3a92f5c24ae23185.jpg",
        "initials": null,
        "name": "Hariyash Rajpurohit",
        "rank": "Rank 17"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_d0673d78ecb6ebf0.jpg",
        "initials": null,
        "name": "Umang Rawal",
        "rank": "Rank 18"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_88f2ed5c4a3b9040.jpg",
        "initials": null,
        "name": "Tanisha Yadav",
        "rank": "Rank 19"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_43417b35456c17bd.jpg",
        "initials": null,
        "name": "Vrinda Shekhawat",
        "rank": "Rank 20"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_75a7afb4550b7e29.jpg",
        "initials": null,
        "name": "Abhishek Amrawat",
        "rank": "Rank 21"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_c4934084bfa21f5d.jpg",
        "initials": null,
        "name": "Virendra Godhwal",
        "rank": "Rank 22"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_0ddb76bf249f4937.jpg",
        "initials": null,
        "name": "Sahdev Bidada",
        "rank": "Rank 23"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_c6a628561deff82e.jpg",
        "initials": null,
        "name": "Paramveer Singh",
        "rank": "Rank 24"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_c3669ae54039d848.jpg",
        "initials": null,
        "name": "Swaroop Singh",
        "rank": "Rank 25"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_c8bb6066fc2fa8d9.jpg",
        "initials": null,
        "name": "Aanchal Nagpal",
        "rank": "Rank 26"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_986d2b0cbf8641f1.jpg",
        "initials": null,
        "name": "Mamta Limba",
        "rank": "Rank 27"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_872d30d24d40b546.jpg",
        "initials": null,
        "name": "Arihant Jain",
        "rank": "rank 28"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260513_342a6c9c48a9b65c.jpg",
        "initials": null,
        "name": "Simran Shekhawat",
        "rank": "Rank 29"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_a8ffa06b069d0d7f.jpg",
        "initials": null,
        "name": "Vinay Mohan",
        "rank": "Rank 30"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_243ab7091d6f589a.jpg",
        "initials": null,
        "name": "Divyraj Singh Dawel",
        "rank": "Rank 32"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_9f334010eb6428f0.jpg",
        "initials": null,
        "name": "Lokendra Singh",
        "rank": "Rank 33"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_ea9f1e161d5a3c49.jpg",
        "initials": null,
        "name": "Vikas Choudhary",
        "rank": "Rank 34"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_294263680d4e762a.jpg",
        "initials": null,
        "name": "Krishnpal Singh Shekhawat",
        "rank": "Rank 36"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_411fd43d5ce00971.jpg",
        "initials": null,
        "name": "Mohammad Rasid",
        "rank": "Rank 37"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_08a75fab270b1eba.jpg",
        "initials": null,
        "name": "Monika Chouhan",
        "rank": "Rank 39"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_b1ca68f061b2249b.jpg",
        "initials": null,
        "name": "Jitendra",
        "rank": "Rank 43"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_904d1d0b2f80734d.jpg",
        "initials": null,
        "name": "Amit Parihar",
        "rank": "Rank 44"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_08ae97dd24c770ca.jpg",
        "initials": null,
        "name": "Amar Singh Rathore",
        "rank": "Rank 45"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_0006d1901fc1a4c8.jpg",
        "initials": null,
        "name": "Ramavtar Mundal",
        "rank": "Rank 49"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_34d4fdcf67d17a78.jpg",
        "initials": null,
        "name": "Dharmraj Singh Rao",
        "rank": "Rank 50"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_96261de7ee728b7b.jpg",
        "initials": null,
        "name": "Neeraj Jangid",
        "rank": "Rank 53"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_98a7e6ca889d9f82.jpg",
        "initials": null,
        "name": "Vinod Choudhary",
        "rank": "Rank 54"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_fd8cc47d478e8d20.jpg",
        "initials": null,
        "name": "Ronak",
        "rank": "Rank 55"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_dec2d010fbb5ab93.jpg",
        "initials": null,
        "name": "Poonam",
        "rank": "Rank 57"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_d0f7a28d7496bc18.jpg",
        "initials": null,
        "name": "Sachin Agarwal",
        "rank": "Rank 58"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_b540d64b9edc08b9.jpg",
        "initials": null,
        "name": "Raja Ram Tetarwal",
        "rank": "Rank 60"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_2b45433a3a28c957.jpg",
        "initials": null,
        "name": "Kamlesh Kumar Sharma",
        "rank": "Rank 61"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_902f41215636549c.jpg",
        "initials": null,
        "name": "Sumitra Bishnoi",
        "rank": "Rank 64"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_fbf828ecd1e506d3.jpg",
        "initials": null,
        "name": "Arimardan Singh Chauhan",
        "rank": "Rank 65"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_8708f5015f1c71d1.jpg",
        "initials": null,
        "name": "Unnat Kishor Rajora",
        "rank": "Rank 66"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_3f63bbc3e810e0e1.jpg",
        "initials": null,
        "name": "Hemlata Choudhary",
        "rank": "Rank 67"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_1594de402ef50861.jpg",
        "initials": null,
        "name": "Rahul Saini",
        "rank": "Rank 68"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_610193c0a8b587e0.jpg",
        "initials": null,
        "name": "Kuldeep Singh",
        "rank": "Rank 69"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_9563ac1e22218cdb.jpg",
        "initials": null,
        "name": "Kritika Gaur",
        "rank": "Rank 70"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_237a9d5a88b68046.jpg",
        "initials": null,
        "name": "Mahendra",
        "rank": "Rank 72"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_c3fd131d705d7043.jpg",
        "initials": null,
        "name": "Jayesh Prajapat",
        "rank": "Rank 73"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_3f2e6c2b262629b2.jpg",
        "initials": null,
        "name": "Mahendra Dan",
        "rank": "Rank 74"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_49a2ce34b6c673f3.jpg",
        "initials": null,
        "name": "Yashika Kachhwaha",
        "rank": "Rank 75"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_fdef4ad0d139a2b8.jpg",
        "initials": null,
        "name": "Siddharth Dhakad",
        "rank": "Rank 76"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_6f719a16b1cdea1d.jpg",
        "initials": null,
        "name": "Jyotsana Ranawat",
        "rank": "Rank 77"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_7d51da37b1bdf531.jpg",
        "initials": null,
        "name": "Choudhary Madhu Rooparam",
        "rank": "Rank78"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_7effa000322ac834.jpg",
        "initials": null,
        "name": "Vikash Bishnoi",
        "rank": "Rank 80"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_4bc27c7556e0c4f6.jpg",
        "initials": null,
        "name": "Aslam Khan",
        "rank": "Rank 81"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_b5039269a8fda323.jpg",
        "initials": null,
        "name": "Damodar Pareek",
        "rank": "Rank 82"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_5f1dcf5465b99b6c.jpg",
        "initials": null,
        "name": "Kailash Kumar",
        "rank": "Rank 83"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_422e2fd17556f1c9.jpg",
        "initials": null,
        "name": "Shyam Sunder Meena",
        "rank": "Rank 84"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_fc9c6a61704b4f2c.jpg",
        "initials": null,
        "name": "Mohit Godara",
        "rank": "Rank 85"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_5f7334aba39e78ec.jpg",
        "initials": null,
        "name": "Narasi Ram Bishnoi",
        "rank": "Rank 86"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_01d9b99353467d29.jpg",
        "initials": null,
        "name": "Mahendra Choudhary",
        "rank": "Rank 88"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_7298cf37992f21db.jpg",
        "initials": null,
        "name": "Anchal Rungta",
        "rank": "Rank 90"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_7192ca4b13f24487.jpg",
        "initials": null,
        "name": "Riya Sharma",
        "rank": "Rank 92"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_c25ded54c8cf7c29.jpg",
        "initials": null,
        "name": "Shilrly Jain",
        "rank": "Rank 94"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_76cee7692b92d05e.jpg",
        "initials": null,
        "name": "Shubham Soni",
        "rank": "Rank 95"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_3b45a0eb21b1f987.jpg",
        "initials": null,
        "name": "Hemant Seervi",
        "rank": "Rank 96"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_3f2d0912f4030927.jpg",
        "initials": null,
        "name": "Pankaj Khichar",
        "rank": "Rank 98"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_5120713e8cdab9ca.jpg",
        "initials": null,
        "name": "Vandana Patel",
        "rank": "Rank 100"
      }
    ]
  },
  {
    "id": "exam-2",
    "badge": "72 in Top 100 Ranks",
    "title": "RAS 2023",
    "subtitle": "More than total 650 Selections",
    "toppers": [
      {
        "frame": "frame-silver",
        "photo": "/images/selections/20260514_d26f2f7de9eb7fe6.jpg",
        "initials": null,
        "name": "Ankita Parashar",
        "rank": "Rank 02"
      },
      {
        "frame": "frame-bronze",
        "photo": "/images/selections/20260514_53c66333d6081614.jpg",
        "initials": null,
        "name": "Parmeshwar Choudhary",
        "rank": "Rank 03"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_56b11ae9213f7560.jpg",
        "initials": null,
        "name": "Ranjan Sharma",
        "rank": "Rank 04"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_a358729ce7f4a27e.jpg",
        "initials": null,
        "name": "Vikram Singh",
        "rank": "Rank 05"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_42739eb22c16d84f.jpg",
        "initials": null,
        "name": "Rashi Kumawat",
        "rank": "Rank 06"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_d39129953e5fa259.jpg",
        "initials": null,
        "name": "Kamal Choudhary",
        "rank": "Rank 09"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_e8161d9923c30b0e.jpg",
        "initials": null,
        "name": "Vikash Siyag",
        "rank": "Rank 10"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_1fabdb21c3ed48b0.jpg",
        "initials": null,
        "name": "Kuldeep Kumawat",
        "rank": "Rank 11"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_e5334f73ac07ae48.jpg",
        "initials": null,
        "name": "Richhpal",
        "rank": "Rank 12"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_679475d5e6610398.jpg",
        "initials": null,
        "name": "Madan Lal Delu",
        "rank": "Rank 13"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_d7565e2885e92243.jpg",
        "initials": null,
        "name": "Balveer Singh Dhaka",
        "rank": "Rank 14"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_1b12733af991f88a.jpg",
        "initials": null,
        "name": "Avantika",
        "rank": "Rank 15"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_b803a06d381f8dcf.jpg",
        "initials": null,
        "name": "Priyanka Choudhay",
        "rank": "Rank 16"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_a4b2f3e72e3950df.jpg",
        "initials": null,
        "name": "Mahendra Kumar Yadav",
        "rank": "Rank 17"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_39da37a37e8f8a6b.jpg",
        "initials": null,
        "name": "Karan Kumar Meghwanshi",
        "rank": "Rank 18"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_231970732765b47e.jpg",
        "initials": null,
        "name": "Ashok Gaur",
        "rank": "Rank 20"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_b5b8af8a7d2f607e.jpg",
        "initials": null,
        "name": "Neha Bhojwani",
        "rank": "Rank 21"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_983fdbfb23d00da2.jpg",
        "initials": null,
        "name": "Vikas Choudhary",
        "rank": "Rank 23"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_b52a23366c99c871.jpg",
        "initials": null,
        "name": "Ritu Bhojwani",
        "rank": "Rank 24"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260514_3b39716b730617d9.jpg",
        "initials": null,
        "name": "Rupal Jhajhria",
        "rank": "Rank 25"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_1f504c4691ba79c1.jpg",
        "initials": null,
        "name": "Himani Rathore",
        "rank": "Rank 28"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_b0833751f427530f.jpg",
        "initials": null,
        "name": "Saroj Choyal",
        "rank": "Rank 29"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_d2340bfd089261eb.jpg",
        "initials": null,
        "name": "Virendra Kumar Icholiya",
        "rank": "Rank 30"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_b9ecbe46895ef31f.jpg",
        "initials": null,
        "name": "Dinesh",
        "rank": "Rank 31"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_120bd738bc9415d8.jpg",
        "initials": null,
        "name": "Neeraj Sharma",
        "rank": "Rank 32"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_e194548c20aea79d.jpg",
        "initials": null,
        "name": "Tariza Chahar",
        "rank": "Rank 33"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_74562c386c1f7d75.jpg",
        "initials": null,
        "name": "Payal Dadhich",
        "rank": "Rank 34"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_c4a826a7ddd7af89.jpg",
        "initials": null,
        "name": "Utkarsh Sattavan",
        "rank": "Rank 35"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_614ed98b7e72bc4a.jpg",
        "initials": null,
        "name": "Rahul Meena",
        "rank": "Rank 37"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_68211e6b4878fca2.jpg",
        "initials": null,
        "name": "Rajnish Bhakar",
        "rank": "Rank 38"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_0bebe31680156f43.jpg",
        "initials": null,
        "name": "Shankar Gurjar",
        "rank": "Rank 39"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_d246ac7cc3e94bf6.jpg",
        "initials": null,
        "name": "Sanjay Dukiya",
        "rank": "Rank 44"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_a531d1f47459dc63.jpg",
        "initials": null,
        "name": "Rajesh Jat",
        "rank": "Rank 47"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_76cb2b18bf3de661.jpg",
        "initials": null,
        "name": "Rajshree Kanawat",
        "rank": "Rank 48"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_1667e28f975379a4.jpg",
        "initials": null,
        "name": "Anand Patel",
        "rank": "Rank 49"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_fd8dc503db998509.jpg",
        "initials": null,
        "name": "Maneesh Singh",
        "rank": "Rank 51"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_9494a1ab72685cab.jpg",
        "initials": null,
        "name": "Ghewar Ram",
        "rank": "Rank 55"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_547b6387a3f84339.jpg",
        "initials": null,
        "name": "Dinesh Bishnoi",
        "rank": "Rank 57"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_5937985068be4eb4.jpg",
        "initials": null,
        "name": "Ajit Singh Choudhary",
        "rank": "Rank 59"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_72fcea8bdec660d7.jpg",
        "initials": null,
        "name": "Karni Singh",
        "rank": "Rank 60"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_ada6e3278bda642a.jpg",
        "initials": null,
        "name": "KalPana Meena",
        "rank": "Rank 61"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_c79509906daf0270.jpg",
        "initials": null,
        "name": "Amar Singh Rathore",
        "rank": "Rank 62"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_a7f96773c5e8741d.jpg",
        "initials": null,
        "name": "Nikita Rathore",
        "rank": "Rank 64"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_c17aced3851ae3bb.jpg",
        "initials": null,
        "name": "Anupam Sharma",
        "rank": "Rank 65"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260515_f319e9709e0ff73a.jpg",
        "initials": null,
        "name": "Pramveer Singh",
        "rank": "Rank 66"
      }
    ]
  },
  {
    "id": "exam-3",
    "badge": "State Services",
    "title": "RAS 2021",
    "subtitle": "More than total 650 Selections",
    "toppers": [
      {
        "frame": "frame-bronze",
        "photo": "/images/selections/20260527_9ad53e1b0499fdb3.png",
        "initials": null,
        "name": "Kiran Pal",
        "rank": "Rank 3"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_83a1e5ec5599b175.png",
        "initials": null,
        "name": "Vishwajeet",
        "rank": "Rank 4"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_8408544861885983.png",
        "initials": null,
        "name": "Bharti Gupta",
        "rank": "Rank 5"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_d18d0b4af041dce4.png",
        "initials": null,
        "name": "Aakansha",
        "rank": "Rank 6"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_824ee5f53ac95cbf.png",
        "initials": null,
        "name": "Satya Narayan",
        "rank": "Rank 10"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_f5e4c93a63e69c65.png",
        "initials": null,
        "name": "Shaheen Anjum",
        "rank": "Rank 12"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_05aaad1c501c5aec.png",
        "initials": null,
        "name": "Deepshikha",
        "rank": "Rank 13"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_50681969d9075a9c.png",
        "initials": null,
        "name": "Karamveer Singh",
        "rank": "Rank 15"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_aeb2801a18986591.png",
        "initials": null,
        "name": "Divya Soni",
        "rank": "Rank 16"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_389e33c82480b32a.png",
        "initials": null,
        "name": "Gaurav Sarswat",
        "rank": "Rank 18"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_63a1d010343c4680.png",
        "initials": null,
        "name": "Divya Bishnoi",
        "rank": "Rank 19"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_5b7c31df822175c0.png",
        "initials": null,
        "name": "Sejal Shekhawat",
        "rank": "Rank 20"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_4984bf958fc6267f.png",
        "initials": null,
        "name": "Ankur Vijay",
        "rank": "Rank 21"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_6900f2eae4bc6227.png",
        "initials": null,
        "name": "Ishwar Gurhar",
        "rank": "Rank 22"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_04ed551eec0b4e94.png",
        "initials": null,
        "name": "Pooja Pareel",
        "rank": "Rank 23"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_2231f06d8e583da8.png",
        "initials": null,
        "name": "Narendra",
        "rank": "Rank 24"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_990759c0960dfc39.png",
        "initials": null,
        "name": "Mohan Choudhary",
        "rank": "Rank 25"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_fcc9c2b3e76ecec5.png",
        "initials": null,
        "name": "Taniya",
        "rank": "Rank 26"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_4265ac012c198211.png",
        "initials": null,
        "name": "Paramjeet Singh",
        "rank": "Rank 27"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_483ed4c6c5003911.png",
        "initials": null,
        "name": "Rajat",
        "rank": "Rank 28"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_179ba744de269b77.png",
        "initials": null,
        "name": "Neeraj Gupta",
        "rank": "Rank 31"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_d6ed4c63ed662e63.png",
        "initials": null,
        "name": "Vikash Sharma",
        "rank": "Rank 34"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_04766d62b48ed942.png",
        "initials": null,
        "name": "Suhasi Jain",
        "rank": "Rank 36"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_6221ca6236ff437c.png",
        "initials": null,
        "name": "Pooja Choudhary",
        "rank": "Rank 37"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_ff164faeffd8b491.png",
        "initials": null,
        "name": "Kaushalya Bishnoi",
        "rank": "Rank 38"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_e51e5e2414e70593.png",
        "initials": null,
        "name": "Ram Kumar",
        "rank": "Rank 38"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_0e4ff5e1a5a788ff.png",
        "initials": null,
        "name": "Bhajan Jangir",
        "rank": "Rank 39"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_b39a99ffdfecda1d.png",
        "initials": null,
        "name": "Bindia Bishnoi",
        "rank": "Rank 40"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_17cd8377c4ce349c.png",
        "initials": null,
        "name": "Himanshu Panwar",
        "rank": "Rank 41"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_72fcfe0b1d952583.png",
        "initials": null,
        "name": "Parteek Sharma",
        "rank": "Rank 42"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_72f373fa3c80344b.png",
        "initials": null,
        "name": "Shispal Singh",
        "rank": "Rank 44"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_4e72e51aa2ca9255.png",
        "initials": null,
        "name": "Mukesh Kumar",
        "rank": "Rank 46"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_db47c021e652ce94.png",
        "initials": null,
        "name": "Arjan Rathore",
        "rank": "Rank 48"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_a9d83771dd7183af.png",
        "initials": null,
        "name": "Naveet Kaur",
        "rank": "Rank 49"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_acba00bab9645878.png",
        "initials": null,
        "name": "Jagvindra Singh",
        "rank": "Rank 51"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_311ddae2f3187f78.png",
        "initials": null,
        "name": "Vijay Yadav",
        "rank": "Rank 56"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_12fbe7cbc7a877fa.png",
        "initials": null,
        "name": "Swati Buri",
        "rank": "Rank 57"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_35e26998c1d1a78f.png",
        "initials": null,
        "name": "Tarun Tiwari",
        "rank": "Rank 58"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_cd28b74ffb2fee59.png",
        "initials": null,
        "name": "Suresh Bishnoi",
        "rank": "Rank 59"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_d7869b2140dceab4.png",
        "initials": null,
        "name": "Vinod Kumar",
        "rank": "Rank 60"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_4250a334c38dbbbd.png",
        "initials": null,
        "name": "Shiva Joshi",
        "rank": "Rank 61"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_59a8c674cac2cdb2.png",
        "initials": null,
        "name": "Anusha Jain",
        "rank": "Rank 62"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_9a6d1f8517c1be56.png",
        "initials": null,
        "name": "omprakash Godara",
        "rank": "Rank 64"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_697d7bd456c94e64.png",
        "initials": null,
        "name": "Madan Dhaka",
        "rank": "Rank 64"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_e4fc294de5731b17.png",
        "initials": null,
        "name": "Ankit Kuri",
        "rank": "Rank 66"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_2f11f06aba621272.png",
        "initials": null,
        "name": "Paras Mai",
        "rank": "Rank 67"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_acbdeb2c4c01a815.png",
        "initials": null,
        "name": "Bhanu Singh",
        "rank": "Rank 69"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_ba0353e2e0b29382.png",
        "initials": null,
        "name": "Rohit Choudhary",
        "rank": "Rank 70"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_6ec37a176e32b785.png",
        "initials": null,
        "name": "Mahendra Rajpurohit",
        "rank": "Rank 72"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_e66e641f33950f2b.png",
        "initials": null,
        "name": "Bharat Lal",
        "rank": "Rank 73"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_8c44ed43a207d7bc.png",
        "initials": null,
        "name": "Anuj Dall",
        "rank": "Rank 74"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_c4bada17c95b5218.png",
        "initials": null,
        "name": "Anant Gaur",
        "rank": "Rank 75"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_30fdf8152b331aa1.png",
        "initials": null,
        "name": "Neha Bishnoi",
        "rank": "Rank 76"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_5254a2b96644c823.png",
        "initials": null,
        "name": "Jogaram Choudhary",
        "rank": "Rank 77"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_e6e3944d8dac37e2.png",
        "initials": null,
        "name": "Rajan Lohia",
        "rank": "Rank 78"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_1a89755b26fb5c51.png",
        "initials": null,
        "name": "Bhupendra kumar",
        "rank": "Rank  80"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_8313f7eaf7096ea9.png",
        "initials": null,
        "name": "Garima Choudhary",
        "rank": "Rank 83"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_b19c29b055a373df.png",
        "initials": null,
        "name": "Ritu Bhojwani",
        "rank": "Rank 84"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_bdf837360dc0c07b.png",
        "initials": null,
        "name": "Shubham Goyal",
        "rank": "Rank 89"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_942befabd0ae1c73.png",
        "initials": null,
        "name": "Megha Gupta",
        "rank": "Rank 90"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_4df7a8c90e46fba0.png",
        "initials": null,
        "name": "Dilip Patel",
        "rank": "Rank 91"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_3fa41bd32a5c2209.png",
        "initials": null,
        "name": "Abhijeet Singh",
        "rank": "Rank 92"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_c45f4b4bad8966f6.png",
        "initials": null,
        "name": "Ritu Kumari",
        "rank": "Rank 93"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_c5d3dfcac83b0bda.png",
        "initials": null,
        "name": "Dr. Astha Sharma",
        "rank": "Rank 94"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_c1c49552816eb0ae.png",
        "initials": null,
        "name": "Neha Bhojwani",
        "rank": "Rank 95"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_ae039246a353b677.png",
        "initials": null,
        "name": "Prateek Maheri",
        "rank": "Rank 96"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_4ab6529f10b2772c.png",
        "initials": null,
        "name": "Ankita Chobdar",
        "rank": "Rank 97"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_7b05bf0dff4e0ace.png",
        "initials": null,
        "name": "Shital Choudhary",
        "rank": "Rank 98"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260527_ecf82d87e0453af1.png",
        "initials": null,
        "name": "Rajendra Rajpurohit",
        "rank": "Rank 99"
      }
    ]
  },
  {
    "id": "exam-4",
    "badge": "State Services",
    "title": "RAS 2018",
    "subtitle": "Outstanding Achievers in Rajasthan Administrative Service",
    "toppers": [
      {
        "frame": "frame-bronze",
        "photo": "/images/selections/20260626_b825f1a231b12fa0.png",
        "initials": null,
        "name": "Shivakshi Khandal",
        "rank": "Rank 03"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_da9d46f84ed1ae7a.png",
        "initials": null,
        "name": "Varsha Sharma",
        "rank": "Rank 05"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_fcbe53d73b27ec01.png",
        "initials": null,
        "name": "Ravi Kumar",
        "rank": "Rank 07"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_9f4880e69ae9d035.png",
        "initials": null,
        "name": "Binu Dewal",
        "rank": "Rank 08"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_bbc4debc4880b4af.png",
        "initials": null,
        "name": "Monika Samore",
        "rank": "Rank 11"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_ffc7fa825cb9fb6b.png",
        "initials": null,
        "name": "Poonam Choyal",
        "rank": "Rank 13"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_a531949af030d5c2.png",
        "initials": null,
        "name": "Niharika Sharma",
        "rank": "Rank 15"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_128404dd5103e7c9.png",
        "initials": null,
        "name": "Hukmichan Rulaniya",
        "rank": "Rank 18"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_f60daba6922b7097.png",
        "initials": null,
        "name": "Mawika Tyagi",
        "rank": "Rank 19"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_a68a68550b9b3d00.png",
        "initials": null,
        "name": "Rishi Pandey",
        "rank": "Rank 20"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_1a195b535feca33f.png",
        "initials": null,
        "name": "Sarita Sharma",
        "rank": "Rank 21"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_47618edf63d4dcc3.png",
        "initials": null,
        "name": "Padma Choudhary",
        "rank": "Rank 24"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_802d590cf7859e39.png",
        "initials": null,
        "name": "Kalpit Sheoran",
        "rank": "Rank 25"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_3d98f4207c54ef91.png",
        "initials": null,
        "name": "Vikas Prajata",
        "rank": "Rank 27"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_9246d3f1ed3607ad.png",
        "initials": null,
        "name": "Sunil Kumar",
        "rank": "Rank 28"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_d3e6a12ed35276f6.png",
        "initials": null,
        "name": "Devi Lal Yadav",
        "rank": "Rank 30"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_7a21c04ac6c4c4c7.png",
        "initials": null,
        "name": "Manisha Choudhary",
        "rank": "Rank 32"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_8ef7f3b139c0a982.png",
        "initials": null,
        "name": "Shiva Sharma",
        "rank": "Rank 32"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_3716bc1f376ba902.png",
        "initials": null,
        "name": "Amita Maan",
        "rank": "Rank 33"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_b2fdaf44ce6690fd.png",
        "initials": null,
        "name": "Divyaraj Singh",
        "rank": "Rank 38"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_c7d4d81d7d0f2c44.png",
        "initials": null,
        "name": "Sanjeev Khedar",
        "rank": "Rank 39"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_933535307ab55c50.png",
        "initials": null,
        "name": "Bajrang Swami",
        "rank": "Rank 47"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_97ced7662c05a931.png",
        "initials": null,
        "name": "Shivraj Shekhawat",
        "rank": "Rank 51"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_ce6502c1584e5e89.png",
        "initials": null,
        "name": "Vinay Choudhary",
        "rank": "Rank 52"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_bc90311425d0b02f.png",
        "initials": null,
        "name": "Neetu Rathore",
        "rank": "Rank 53"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_92a4adcabba12bc9.png",
        "initials": null,
        "name": "Rajendra Bhinchar",
        "rank": "Rank 54"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_d489f13e4f85fb23.png",
        "initials": null,
        "name": "Prithviraj",
        "rank": "Rank 56"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_4928311aea9c77c5.png",
        "initials": null,
        "name": "Neetu Karol",
        "rank": "Rank 58"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_6f3d8b1c5c54fb75.png",
        "initials": null,
        "name": "Ashok Joshi",
        "rank": "Rank 61"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_c32372b9e13446ba.png",
        "initials": null,
        "name": "Kratika Yadav",
        "rank": "Rank 62"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_b9c3bf57f71aa855.png",
        "initials": null,
        "name": "Brajesh Choudhary",
        "rank": "Rank 65"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_5a4479464eb4980f.png",
        "initials": null,
        "name": "Chacul Gupta",
        "rank": "Rank 66"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_333a013490fe8a2a.png",
        "initials": null,
        "name": "Archana Choudhary",
        "rank": "Rank 67"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_4d72f0ab17d1ae3c.png",
        "initials": null,
        "name": "Megha Goyal",
        "rank": "Rank 68"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_de09df8208ec7425.png",
        "initials": null,
        "name": "Narendra Nagar",
        "rank": "Rank 70"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_a3000fddbe627606.png",
        "initials": null,
        "name": "Anupam Mishra",
        "rank": "Rank 71"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_255eb725c72e7384.png",
        "initials": null,
        "name": "Versga Gehlot",
        "rank": "Rank 73"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_356e36eec31cbbc9.png",
        "initials": null,
        "name": "Shilpa",
        "rank": "Rank 75"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_7ca5710c11dc8291.png",
        "initials": null,
        "name": "Kartikay Lata",
        "rank": "Rank 77"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_a1f2baa8d9586e1e.png",
        "initials": null,
        "name": "Pooja Meena",
        "rank": "Rank 78"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_75c546c79e45969a.png",
        "initials": null,
        "name": "Sonu Choudhary",
        "rank": "Rank 79"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_9449f929fc978cf8.png",
        "initials": null,
        "name": "Manisha Meena",
        "rank": "Rank 80"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_00fa38b0730bf5d1.png",
        "initials": null,
        "name": "Deepak Khatana",
        "rank": "Rank 83"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_8d4b22c2443ee480.png",
        "initials": null,
        "name": "Pooja Yadav",
        "rank": "Rank 84"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_5439e7d139c6a38d.png",
        "initials": null,
        "name": "Gulab Verma",
        "rank": "Rank 85"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_877f4b145e5cee64.png",
        "initials": null,
        "name": "Shivam Joshi",
        "rank": "Rank 87"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_d129b2372737541a.png",
        "initials": null,
        "name": "Arvind Rathore",
        "rank": "Rank 88"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_6b29231c3925f30a.png",
        "initials": null,
        "name": "Dr. Rachna Rathore",
        "rank": "Rank 91"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_368d309e31291953.png",
        "initials": null,
        "name": "Anjali Singh",
        "rank": "Rank 94"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_e54c5a80cc57b13c.png",
        "initials": null,
        "name": "Praikshit",
        "rank": "Rank 95"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_68ad88ea2c2e97de.png",
        "initials": null,
        "name": "Meenakshi Saharan",
        "rank": "Rank 96"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_b8884f002419a503.png",
        "initials": null,
        "name": "Megha Shandilya",
        "rank": "Rank 98"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_1b0b0c08010e2c1d.png",
        "initials": null,
        "name": "Rajvendra Singh",
        "rank": "Rank 99"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_93763db87b0d5765.png",
        "initials": null,
        "name": "Kanha Jangid",
        "rank": "Rank 100"
      }
    ]
  },
  {
    "id": "exam-5",
    "badge": "State Services",
    "title": "RAS 2016",
    "subtitle": "Outstanding Achievers in Rajasthan Administration Service",
    "toppers": [
      {
        "frame": "",
        "photo": "/images/selections/20260626_65fb9e4597e9d8b5.png",
        "initials": null,
        "name": "Rubi Ansar",
        "rank": "Rank 04"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_7c67937cbe38fc6d.png",
        "initials": null,
        "name": "Upendra Sharma",
        "rank": "Rank 05"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_dc3ff1bb13080153.png",
        "initials": null,
        "name": "Pratibha Poonia",
        "rank": "Rank 09"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_4346c2a5cf8b3996.png",
        "initials": null,
        "name": "Sunil Panwar",
        "rank": "Rank 23"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_f0ca009cb86fa5a7.png",
        "initials": null,
        "name": "Sushil Maan",
        "rank": "Rank 24"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_8ad0bff4f98fde3b.png",
        "initials": null,
        "name": "Ashok Bishnoi",
        "rank": "Rank 38"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_53c5d524c79fea40.png",
        "initials": null,
        "name": "Jethu Singh",
        "rank": "Rank 56"
      }
    ]
  },
  {
    "id": "exam-6",
    "badge": "State Services",
    "title": "RAS 2013",
    "subtitle": "Outstanding Achievers in Rajasthan Administration Service",
    "toppers": [
      {
        "frame": "frame-gold",
        "photo": "/images/selections/20260626_13c0fc5eaee7cf25.png",
        "initials": null,
        "name": "Devyani",
        "rank": "Rank 01"
      },
      {
        "frame": "frame-silver",
        "photo": "/images/selections/20260626_c7fa8fa9e26897ae.png",
        "initials": null,
        "name": "Shyama Rathore",
        "rank": "Rank 02"
      },
      {
        "frame": "frame-bronze",
        "photo": "/images/selections/20260626_2dfa0f1013113f79.png",
        "initials": null,
        "name": "Pushpa Sisodia",
        "rank": "Rank 03"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_e0be59e8754c9278.png",
        "initials": null,
        "name": "Pramod Servi",
        "rank": "Rank 06"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_6c295c834f5f7d9e.png",
        "initials": null,
        "name": "Ramesh Servi",
        "rank": "Rank 09"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_513e5d082e2624c4.png",
        "initials": null,
        "name": "Devendra Parmar",
        "rank": "Rank 10"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_9f9bbd68fc52af45.png",
        "initials": null,
        "name": "Abhishek Sharma",
        "rank": "Rank 25"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_fa270cd47e5613fa.png",
        "initials": null,
        "name": "Khinw Rathore",
        "rank": "Rank 39"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_422d46541a8b866d.png",
        "initials": null,
        "name": "Himmat Charam",
        "rank": "Rank 51"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_3c4fbb184c771064.png",
        "initials": null,
        "name": "Dharmendra Dukiya",
        "rank": "Rank 64"
      }
    ]
  },
  {
    "id": "exam-7",
    "badge": "State Services",
    "title": "RAS 2008",
    "subtitle": "Outstanding Achievers in Rajasthan Administration Service",
    "toppers": [
      {
        "frame": "",
        "photo": "/images/selections/20260626_8db805ab2c0ddb76.jpg",
        "initials": null,
        "name": "Mahendra Singh",
        "rank": "Rank 08"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_bf356f14a5e586a4.png",
        "initials": null,
        "name": "Jyoti Kakwani",
        "rank": "Rank 18"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_31b65e49bf5019a6.png",
        "initials": null,
        "name": "Geetesh Malviya",
        "rank": "Rank 34"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_e5d6e2f9836dfe70.png",
        "initials": null,
        "name": "Dalpat Rathore",
        "rank": "Rank 55"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_6814fc7b60240e97.png",
        "initials": null,
        "name": "Dhan Singh",
        "rank": "Rank 57"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_0b3311298421bdbc.png",
        "initials": null,
        "name": "Pinki Bhati",
        "rank": null
      }
    ]
  },
  {
    "id": "exam-8",
    "badge": "Hall of Fame",
    "title": "IAS 2023",
    "subtitle": "Our Pride",
    "toppers": [
      {
        "frame": "",
        "photo": "/images/selections/20260802_c9b9468d53812d1a.jpg",
        "initials": null,
        "name": "Mohan Lal",
        "rank": null
      },
      {
        "frame": "",
        "photo": "/images/selections/20260802_4f30de5344205b62.jpg",
        "initials": null,
        "name": "Mohan Lal Mangava",
        "rank": null
      },
      {
        "frame": "",
        "photo": "/images/selections/20260802_43d993657956c9df.jpg",
        "initials": null,
        "name": "Ishwar Lal Gurjar",
        "rank": null
      },
      {
        "frame": "",
        "photo": "/images/selections/20260802_01215a06cb257750.jpg",
        "initials": null,
        "name": "Deepak Choudhary",
        "rank": null
      },
      {
        "frame": "",
        "photo": "/images/selections/20260802_4ed96a69215ac721.jpg",
        "initials": null,
        "name": "Sachin Gurjar",
        "rank": null
      }
    ]
  },
  {
    "id": "exam-9",
    "badge": "A Legacy of Excellence",
    "title": "IAS Selection - Previous Years",
    "subtitle": null,
    "toppers": [
      {
        "frame": "",
        "photo": "/images/selections/20260626_92ff87df00d27e2f.jpg",
        "initials": null,
        "name": "Nathmal Didal",
        "rank": "IAS #2013"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_4b087dec74cb0665.jpg",
        "initials": null,
        "name": "Kana Ram",
        "rank": "IAS #2013"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_c22192088344e28a.jpg",
        "initials": null,
        "name": "Supendra Lamba",
        "rank": "IAS #2013"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_869c618c2cccbd21.jpg",
        "initials": null,
        "name": "Supendra Meena",
        "rank": "IAS #2013"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_0b0952dec3e9f959.jpg",
        "initials": null,
        "name": "Sudeep Kaur",
        "rank": "IAS #2013"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_9c1462cd78149beb.jpg",
        "initials": null,
        "name": "Ajitesh Meena",
        "rank": "IRS #2015"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_50722aa859a5b425.jpg",
        "initials": null,
        "name": "Ashok Charan",
        "rank": "IRS #2016"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_a51e40201355dc8f.jpg",
        "initials": null,
        "name": "Narendra Asseri",
        "rank": "IRS #2016"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_2768d1b22de86242.jpg",
        "initials": null,
        "name": "Ganga Singh",
        "rank": "IRS #2017"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_950e9048ea40beb9.jpg",
        "initials": null,
        "name": "Mukesh Soni",
        "rank": "IRS #2017"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_8b78dad05d62c730.jpg",
        "initials": null,
        "name": "Hari Om Meena",
        "rank": "IRS #2017"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_563ddd305789ce83.jpg",
        "initials": null,
        "name": "Mahendra Pal Gurjar",
        "rank": "IAS #2018"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_682f9813e82d2ee0.jpg",
        "initials": null,
        "name": "Jagdish Bangarwa",
        "rank": "IPS #2018"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_91421652a77633bf.jpg",
        "initials": null,
        "name": "Hemant Kalal",
        "rank": "IAS #2020"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_f703b36aeaf0620c.jpg",
        "initials": null,
        "name": "Pariskshit",
        "rank": "IPS #2021"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_4af0296871647112.jpg",
        "initials": null,
        "name": "Maina",
        "rank": "IAS # 2022"
      },
      {
        "frame": "",
        "photo": "/images/selections/20260626_ad66d7e2e8e37318.jpg",
        "initials": null,
        "name": "Ishwar Lal Gurjar",
        "rank": "IAS #2022"
      }
    ]
  }
];
