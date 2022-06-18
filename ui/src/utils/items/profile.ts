import { BeakerIcon, BriefcaseIcon, BookOpenIcon, ChipIcon } from '@heroicons/vue/outline';
import { IProfileChip, ILicenses } from '../interface/main';
import { url } from '../url';

export const ProfileChips: Array<IProfileChip> = [
  {
    name: 'My Academic History',
    description:
      "Currently, I'm a member of Waseda University, and studing Alzheimer's disease in the Biophysical Properties Science Laboratory...",
    icon: BeakerIcon,
    url: url.Academic,
    extract: false,
  },
  {
    name: 'My Business Experience',
    description:
      "I've been an engineer for 7years now (4years since I started my business). This is a motley summary of what has happend there.",
    icon: BriefcaseIcon,
    url: url.Work,
    extract: false,
  },
  {
    name: 'Zenn',
    description:
      'Technical scrap: some of the items that I have compiled as articles in my Tech Note, etc.',
    icon: BookOpenIcon,
    url: "https://zenn.dev/as_pml",
    extract: true,
  },
  {
    name: 'GitHub',
    description:
      "it's my github. If you contact me, you can also here.",
    icon: ChipIcon,
    url: "https://github.com/shiho-aoki",
    extract: true,
  },
]

export const LicensesAndCertifications: Array<ILicenses>= [
  {
    name: "2022.03",
    discription: "Micro MBA 取得"
  },
  {
    name: "2022.01",
    discription: "情報セキュリティマネジメント試験 合格"
  },
  {
    name: "2021.07",
    discription: "認定Scrum master（alliance）"
  },
  {
    name: "2020.10",
    discription: "書道（師範部準4段）"
  },
  {
    name: "（受賞）Capter The Flag",
    discription: "2021.08 NSSOL 4位"
  },
  {
    name: "（受賞）Treasure",
    discription: "2021.08 CI/CD賞"
  },
  {
    name: "（受賞）株式会社トモノカイ",
    discription: "2020.12 革新賞"
  },
  {
    name: "（受賞）株式会社トモノカイ",
    discription: "2019.12 全社研修会 優勝"
  },
  {
    name: "（受賞）株式会社トモノカイ",
    discription: "2019.12 新人賞"
  },
  {
    name: "（受賞）早稲田大学本庄高等学院学院長賞",
    discription: "2019.03 卒業論文「造血幹細胞の分化における系統選択とその分化成熟モデル」の成果により取得"
  }
]