import { db } from '../connector';
import { collection, addDoc } from "@firebase/firestore";


// import { paper, schools } from '../../store/profile/academic/univ';
// import { internships } from '../../store/profile/business/internship';
// import { jobs } from '../../store/profile/business/jobs';  
// import { certified } from '../../store/profile/certifications';
// import { licenses } from '../../store/profile/licenses';

// 文字列から開始日と終了日を取り出す関数
// function extractDatesFromString(str: string) {
//   const datePattern = /(\d{4}\.\d{2})-(\d{4}\.\d{2})/;
//   const match = str.match(datePattern);

//   if (match) {
//     return { startDate: match[1], endDate: match[2] };
//   } else {
//     const dataPattern2 =  /(\d{4}\.\d{2})-present/;
//     const match2 = str.match(dataPattern2);
//     if(match2){
//       return { startDate: match2[1], endDate:null }
//     }
//     return null;
//   }
// }


// export const transferNewDataSets = async() => {
//   //paper
//   for (let i=0; i<paper.length; i++){
//     let data = {
//       id: paper[i].id,
//       author: paper[i].auther,
//       title: paper[i].title,
//       date: paper[i].date,
//       publishedBy: paper[i].publicedBy,
//       edition: paper[i].edition,
//       number: paper[i].number,
//       doi: paper[i].doi
//     }
//     const docRef = await addDoc(collection(db, "paper"), data);
//     console.log("@paper Document written with ID: ", docRef.id);
//   }
  
  // //conference
  // const docRef = await addDoc(collection(db, "conference"), {
  //   id: 0,
  //   conferencename: 'The 46th Annual Meeting of the Molecular Biology Society of Japan(MBSJ2023)',
  //   type: 'poster',
  //   title: 'Functional analysis of a low-complexity region specific to the primate E3 ubiquitin ligase Praja1.',
  //   presenter: '〇Shiho Aoki, Wataru Onodera, Toru Asahi',
  //   number: '1P-334',
  //   date: new Date('2023/12/06')
  
  // });
  // console.log("@conference Document written with ID: ", docRef.id);

  // //academic
  // await addDoc(collection(db, "achives_academic"), {
  //   id: 0,
  //   type: 'adoption',
  //   name: 'Nakatani Foundation Scholarship for Graduate Students',
  //   nameJp: '中谷医工計測技術振興財団 大学院生奨学金',
  //   url: 'https://www.nakatani-foundation.jp/business/scholarship/',
  //   date: new Date('2023/10/1')
  // });
  // await addDoc(collection(db, "achives_academic"), {
  //   id: 1,
  //   type: 'outreach',
  //   name: 'Cooperation with "Unilab" science experiment class for elementary and junior high school students at Waseda University',
  //   nameJp: '早稲田大学小中学生のための科学実験教室「ユニラブ」実験教室協力',
  //   url: '',
  //   date: new Date('2022/8/9')
  // });
  // await addDoc(collection(db, "achives_academic"), {
  //   id: 2,
  //   type: 'outreach',
  //   name: 'Cooperation with "Unilab" science experiment class for elementary and junior high school students at Waseda University',
  //   nameJp: '早稲田大学小中学生のための科学実験教室「ユニラブ」実験教室協力',
  //   url: '',
  //   date: new Date('2023/8/8')
  // });
  // await addDoc(collection(db, "achives_academic"), {
  //   id: 3,
  //   type: 'outreach',
  //   name: 'International Research Center for Neurointelligence | The University of Tokyo | Institutes for Advanced Study, Conference Management Staff',
  //   nameJp: '東京大学 ニューロインテリジェンス国際研究機構 学会運営スタッフ',
  //   url: 'https://ircn.jp/en/',
  //   date: new Date('2022/8/9')
  // });
  // await addDoc(collection(db, "achives_academic"), {
  //   id: 4,
  //   type: 'outreach',
  //   name: 'Laboratory assistant at a municipal junior high school under the Shinjuku Science Partnership Program (SPP)',
  //   nameJp: '新宿サイエンス・パートナーシップ・プログラム（SPP）区立中学校 実験助手',
  //   url: 'https://www.shinjuku.ed.jp/~center-a/gyoumu/newdir0/kenshu.html',
  //   date: '2023'
  // });
  // await addDoc(collection(db, "achives_academic"), {
  //   id: 5,
  //   type: 'outreach',
  //   name: 'Management of the 64th Meeting of Young Biophysicists (in charge of sponsorship)',
  //   nameJp: '第64回 生物物理若手の会運営（協賛担当）',
  //   url: 'http://bpwakate.net/',
  //   date: '2023'
  // });
  
  // //education
  // const schoolhistory = schools[0].sp.steps
  // const degree = ['', 'Bachelor of Science（B.Sc.）', 'Ph.D. Course']
  // for (let i=0; i<schoolhistory.length; i++){
  //   let fulldata = extractDatesFromString(schoolhistory[i].time);
  //   let data = {
  //     id: i,
  //     schoolname: schoolhistory[i].step,
  //     course: schoolhistory[i].position,
  //     specific: schoolhistory[i].context,
  //     start: fulldata?.startDate,
  //     end: fulldata?.endDate,
  //     degree: degree[i]
  //   }
  //   const docRef = await addDoc(collection(db, 'education'), data);
  //   console.log("@School Document written with ID: ", docRef.id);
  // }

  // //internship
  // const internshipitems = internships[0].sp.steps
  // for (let i=0; i<internshipitems.length; i++){
  //   //let fulldata = extractDatesFromString(internshipitems[i].time);
  //   let data = {
  //     id: i,
  //     companyname: internshipitems[i].step,
  //     position: internshipitems[i].position,
  //     context:internshipitems[i].context,
  //     time: internshipitems[i].time,
  //   };
  //   const docRef = await addDoc(collection(db, 'exprience_inter'), data);
  //   console.log("@internship Document written with ID: ", docRef.id);
  // }
  // //job
  // const jobi = jobs[0].sp.steps;
  // for (let i=0; i<jobi.length; i++){
  //   let fulldata = extractDatesFromString(jobi[i].time);
  //   let data = {
  //     id: i,
  //     companyname:jobi[i].step,
  //     position: jobi[i].position,
  //     context: jobi[i].context,
  //     start: fulldata?.startDate,
  //     end: fulldata?.endDate
  //   };

  //   const docRef = await addDoc(collection(db, 'experience_jobs'), data);
  //   console.log("@job Document written with ID: ", docRef.id);
  // }
  // //award
  // for(let i=0; i<certified.length; i++){
  //   const docRef = await addDoc(collection(db, 'award'), certified[i]);
  //   console.log("@award Document written with ID: ", docRef.id);
  // }
  // //licenses
  // for(let i=0; i<licenses.length; i++){
  //   const docRef = await addDoc(collection(db, 'licenses'), licenses[i]);
  //   console.log("@licenses Document written with ID: ", docRef.id);
  // }


// }