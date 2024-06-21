const project_name = `Workshop on Unseen Dimension of Robotic Foundation Models`
const proj_small_caps = `<span class="small-caps">NeuRL-RMW</span>: `
const conference_details = ['CoRL 2024', 'https://www.corl.org/home', 'Muse 5', 'assets/images/corl23_pink_logo.jpg']
const workshop_date = `November 9, 2024`

const talk_speaker_details = {
  'df': ['Dieter Fox', './assets/images/talks/dieter_fox.jpg', 'Professor', 'University of Washington', 'https://homes.cs.washington.edu/~fox/', 'Policy Representation for Robot Manipulation', ''],
  'ke': ['Jianwei Yang', './assets/images/talks/jianwei.png', 'Principal Research Scientist', 'Microsoft', 'https://jwyang.github.io/', 'Neural Object Representations for Grasping and Manipulation', ''],
  'ag': ['Xiaolong Wang', './assets/images/talks/xiaolong.jpg', 'Assistant Professor', 'UCSD', 'https://xiaolonw.github.io/', '', ''],
  'wm': ['Yunzhu Li', './assets/images/talks/yunzhu.jpg', 'Assistant Professor', 'Columbia University', 'https://yunzhuli.github.io/', '', ''],
  'sj': ['Vincent Vanhoucke', './assets/images/talks/vincent.jpg', '', 'Google, Deepmind', 'https://vincent.vanhoucke.com/', 'Nonparametric Belief Propagation: Differentiable, Diagnosable, and Decisive', ''],
  'sj': ['Harold Soh', './assets/images/talks/harold.jpg', '', 'NUS', 'https://haroldsoh.com/', 'Nonparametric Belief Propagation: Differentiable, Diagnosable, and Decisive', ''],
  'sj': ['David Held', './assets/images/talks/DavidHeld.jpg', '', 'CMU', 'https://davheld.github.io/', 'Nonparametric Belief Propagation: Differentiable, Diagnosable, and Decisive', ''],
}

const organizers_details = [
  ['Jiafei Duan', 'assets/images/organizers/jiafei_duan.png', 'PhD Student', 'University of Washington', 'https://duanjiafei.com/'],
  ['Helen Yi Ru Wang', 'assets/images/organizers/helen.jpg', 'PhD Student', 'University of Washington', 'https://helen9975.github.io/'],
  ['Wentao Yao', 'assets/images/organizers/wentao.jpg', 'PhD Student', 'University of Washington', 'https://wentaoyuan.github.io/'],
  ['Ishika Singh', 'assets/images/organizers/ishika_singh.jpg', 'PhD Student', 'University of Southern California', 'https://ishikasingh.github.io/'],
  ['Dieter Fox', 'assets/images/organizers/fox.jpg', 'Professor', 'University of Washington', 'https://homes.cs.washington.edu/~fox/'],
]

const accepted_presentations = [
  // ['Fullname', 'website', 'photo', 'Affiliation-title', 'Affiliation', 'Presentation title', 'abstract'],
]

const org_affiliation_logos = [
  // 'assets/images/affiliation-logos/LOGO.png',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '08:45 - 09:00', 'Introduction'],
  ['inv-talk', '09:00 - 09:30', 'Invited Talk', 'dh', 'in-person'],
  ['spot-ppt', '09:30 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:30', '<span class="bold has-text-info">Spotlight Posters (Muse 1)</span> & Coffee Break'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'cp', 'online'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk',  'gc', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'pf', 'online'],
  ['spot-ppt', '14:30 - 15:30', 'Spotlight presentations'],
  ['coffee-break', '15:30 - 16:00', 'Coffee Break'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'ss', 'in-person'],
  ['inv-talk', '16:30 - 17:00', 'Invited Talk', 'cj', 'in-person'],
  ['disc', '17:00 - 17:05', 'Conclusion'], 
]
