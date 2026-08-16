const categories = {
  all: "全部",
  gross: "大运动",
  fine: "精细运动",
  cognitive: "认知探索",
  language: "语言交流",
  sensory: "感官音乐",
  social: "社交情绪"
};

const activities = [
  {
    id: "sit-to-crawl", category: "gross", title: "从坐到爬，再回来", goal: "练习姿势转换、身体计划和左右支撑。", materials: "防滑地垫、一个喜欢的大玩具。",
    setup: "宝宝坐在地垫中央，成人跪坐在侧后方保护，不拉手带动。",
    steps: ["把玩具放在身体侧前方一臂外。", "等她转身、单手撑地并自己进入爬姿。", "爬到玩具后让她玩一会，再把玩具移到另一侧。", "给足时间尝试从爬姿回到坐姿。"],
    words: "“你看到球了。慢慢来，我在这里。”动作发生后再描述，不连续发指令。", observe: "两侧是否都愿意转；是否能用手撑地控制身体，而不是直接侧倒。", stop: "身体僵住、反复跌倒后烦躁、持续只向一侧转。", safety: "只在地面进行，成人手臂保持在可保护范围内。",
    easier: "玩具放近一些，成人用手掌在髋部提供稳定支撑。", harder: "将玩具放到斜后方，鼓励更完整的转身和自主回坐。"
  },
  {
    id: "crawl-lane", category: "gross", title: "左右寻找爬行路线", goal: "保持对称爬行，练习改变方向和空间判断。", materials: "地垫、两个大而醒目的玩具。",
    setup: "清空地面危险物，把两个玩具分别放在左前方和右前方。",
    steps: ["让嘻嘻先选择看向哪个玩具。", "成人移动到玩具后方，用表情和声音回应。", "她到达后停下来共同玩，不立刻安排下一趟。", "休息后再邀请她选择另一侧。"],
    words: "“你选了左边。你爬过来了，到了！”", observe: "双手双膝是否轮流承重；转弯时是否总拖同一条腿。", stop: "动作质量明显下降、趴下不再抬头或主动离开。", safety: "地面防滑，路线远离台阶、桌角和可拉倒家具。",
    easier: "距离缩短，只做一次方向变化。", harder: "摆成宽缓的S形路线，但不限制她另选路径。"
  },
  {
    id: "low-obstacle", category: "gross", title: "越过低障碍找爸爸", goal: "练习重心转移、障碍规划和家庭共同注意。", materials: "卷紧并固定的薄浴巾，不能使用枕头。",
    setup: "把薄浴巾固定成很低的软障碍，爸爸在另一端，妈妈在侧面保护。",
    steps: ["爸爸先与嘻嘻对视并轻声呼唤。", "等她自己靠近、摸障碍并决定怎样越过。", "妈妈只在失衡时保护，不推脚或搬腿。", "到达后爸爸回应拥抱或声音，再让她自由离开。"],
    words: "“爸爸在这里。你摸到了。你自己过来了。”", observe: "是否会停下观察、调整手脚位置，并能用两侧身体跨越。", stop: "头部连续撞向障碍、明显害怕或反复卡住。", safety: "障碍不高于宝宝小腿，必须固定、防滑，成人全程在旁。",
    easier: "把浴巾摊平，只练习跨过材质变化。", harder: "放两个间隔很大的低障碍，中间留足休息区。"
  },
  {
    id: "stand-lower", category: "gross", title: "拉站后的安全回落", goal: "巩固弯膝、跪坐和受控降低，而不是催促扶走。", materials: "固定在墙体的矮稳家具、防滑地垫。",
    setup: "确认家具不会滑动或倾倒，移走硬角物品，成人蹲在宝宝侧后方。",
    steps: ["允许她自己从跪姿抓住支撑拉站。", "把玩具放到膝盖以下，引导她低头看。", "等待她弯膝、单膝着地或回到坐姿。", "成功回落后让她休息，不马上重复。"],
    words: "“玩具在下面。你弯膝了，慢慢坐下来。”", observe: "能否弯膝控制下降；是否总向后直倒或踮脚僵站。", stop: "腿持续僵硬、脚尖持续承重、明显疲劳或连续后仰。", safety: "不使用枕头、移动家具或成人身体作为主要支撑；不拉手练走。",
    easier: "玩具放在较高位置，只需稍微屈膝。", harder: "在她稳定后，把玩具放到左右两侧，练习不同方向回落。"
  },
  {
    id: "hand-transfer", category: "fine", title: "左右手传递", goal: "练习双手配合、跨越身体中线和主动释放。", materials: "一件可清洗、无小零件、比吞咽口径大的轻玩具。",
    setup: "宝宝坐稳或趴卧，玩具放在身体中间，成人与她面对面。",
    steps: ["等她主动抓起，不把玩具塞进手里。", "在持物手的另一侧展示空手掌或第二件大玩具。", "等待她把原玩具换到另一只手。", "模仿她的敲击或摇动，再停下来等回应。"],
    words: "“你右手拿着。换到左手了。咚、咚。”", observe: "两只手是否都能抓住并主动松开；是否持续只用一只手。", stop: "抓握变弱、频繁掉落后烦躁或不再看玩具。", safety: "每次检查破损和松动部件，入口尺寸必须大于宝宝口腔。",
    easier: "使用有把手、容易抓的大摇铃。", harder: "从身体一侧递入，鼓励跨中线交给另一只手。"
  },
  {
    id: "two-object-bang", category: "fine", title: "两件物品碰一碰", goal: "练习双手同时持物、敲击和声音因果。", materials: "两个轻质硅胶杯或大木勺，不使用金属重物。",
    setup: "宝宝坐在地垫上，成人先把一件放到每只手可触及处。",
    steps: ["等她分别拿起，不强行摆手。", "成人慢慢示范两件物品碰一下。", "她有任何靠近动作都回应声音。", "交换材质，比较轻响与闷响。"],
    words: "“碰！你让它们发出声音了。再听一次。”", observe: "能否双手各持一物并在中间靠拢；是否会等待声音结果。", stop: "声音让她惊跳、遮耳、哭闹或反复砸向自己。", safety: "声音保持柔和，物品无尖角且不能套住口鼻。",
    easier: "一手持物，另一只手拍打软垫。", harder: "提供两组安全材质，让她自主选择声音。"
  },
  {
    id: "container-out", category: "fine", title: "从宽口盒里取出来", goal: "练习手眼协调、抓取方向和解决简单问题。", materials: "浅而稳的宽口盒、两块大积木或软布球。",
    setup: "将一件物品露出大半，盒子固定在宝宝两手之间。",
    steps: ["先让她看见成人把物品放进去。", "等待她伸手探索盒沿和物品。", "取出后允许敲、咬和传递。", "她仍有兴趣时再放入第二件。"],
    words: "“进去了。你找到它了，拿出来了。”", observe: "是否能调整手腕越过盒沿；会不会看向物品消失的位置。", stop: "手被卡住、反复翻倒盒子后受惊或失去兴趣。", safety: "盒口不能夹手，盒体不能套住头脸，不放小物件。",
    easier: "不用盒子，物品只放在浅盘里。", harder: "把物品完全放入，但保持清晰可见。"
  },
  {
    id: "cloth-reveal", category: "fine", title: "拉开小布找玩具", goal: "结合抓布、拉动和初步物体恒存。", materials: "薄透气小方巾、熟悉的大玩具。",
    setup: "宝宝看着时，用方巾遮住玩具的一半并留出容易抓的布角。",
    steps: ["指向露出的部分，等她伸手。", "她抓到布角后让布自然滑开。", "找到玩具时用表情回应，不替她完成。", "换一个遮挡方向再玩一轮。"],
    words: "“球在哪里？你拉开了，在这里！”", observe: "是否在玩具被遮住后继续看、伸手或拉布。", stop: "布靠近口鼻、宝宝紧张或连续把布缠在手臂上。", safety: "仅在成人手边进行，结束立即收走方巾，绝不用于睡眠环境。",
    easier: "只遮住四分之一。", harder: "完全遮住一瞬间，但让方巾轮廓和布角清楚可见。"
  },
  {
    id: "drop-find", category: "cognitive", title: "掉下去，去哪里了", goal: "建立动作与结果联系，练习追视和寻找。", materials: "一个不会弹跳过远的大软球、浅篮子。",
    setup: "宝宝稳定坐在地垫上，篮子放在前方近处，成人在侧面防跌。",
    steps: ["让她看见球在手中。", "慢慢把球放开落入篮子。", "等她低头寻找，再把球交回。", "如果她主动松手，描述结果并重复。"],
    words: "“球掉下去了。你在找。球在篮子里。”", observe: "是否沿下落方向追视；是否会期待成人把球交回。", stop: "身体前倾失衡、反复够取导致头部接近硬边。", safety: "篮子柔软无硬边，成人随时保护坐姿。",
    easier: "球落在两腿之间的地垫上。", harder: "准备两个落点，让她观察球进入哪一个。"
  },
  {
    id: "cause-effect", category: "cognitive", title: "按一下，声音来了", goal: "理解简单因果并练习动作重复。", materials: "容易按压且音量柔和的大按钮玩具，或会响的硅胶玩具。",
    setup: "关闭其他声音，玩具放在宝宝正前方。",
    steps: ["成人只示范一次按压。", "把玩具推近，等待她用手掌探索。", "出现声音后看着她，等待表情或发声。", "她再次动作时立即用语言回应。"],
    words: "“你按了，声音来了。你还想再试吗？”", observe: "是否把自己的动作与声音联系起来并尝试重复。", stop: "被声音吓到、连续拍打越来越用力或明显过度兴奋。", safety: "控制音量，不把电子玩具放入口中，电池仓必须螺丝固定。",
    easier: "成人扶住玩具防滑，不扶宝宝的手。", harder: "放两个不同结果的安全玩具，让她自主比较。"
  },
  {
    id: "choose-one", category: "cognitive", title: "两个里面选一个", goal: "支持主动选择、注意转移和偏好表达。", materials: "两个熟悉但不同的大玩具。",
    setup: "成人面对宝宝，两件玩具保持相同距离，间隔约一个手掌宽。",
    steps: ["同时展示两件物品，不先夸其中一个。", "等待她看得更久、伸手或移动。", "把她选择的物品交给她并命名。", "让她充分探索，不马上要求换另一个。"],
    words: "“你在看杯子。你选了杯子，这是你的选择。”", observe: "她用目光、伸手还是移动表达选择；偏好是否稳定。", stop: "来回摆动物品使她疲劳，或成人反复纠正她的选择。", safety: "两件物品都必须适合入口探索且没有小部件。",
    easier: "一个熟悉物和一个空手掌。", harder: "把选择用于真实流程，例如先看哪本布书。"
  },
  {
    id: "sound-turns", category: "language", title: "你一句，我一句", goal: "强化咿呀轮流、声音模仿和交流节奏。", materials: "不需要材料。",
    setup: "成人与宝宝同高度面对面，环境安静，先等她发声。",
    steps: ["听到一个声音后模仿它一次。", "停顿并保持柔和表情。", "她回应后再模仿，并加一个轻微变化。", "三四轮后用固定结束语收尾。"],
    words: "模仿“ba”后可回“ba-ba”，结束说“我听见你了，聊完啦”。", observe: "是否等待成人、改变音高或主动再次发声。", stop: "转头、打哈欠、揉眼、声音变成求助哭声。", safety: "音量接近日常说话，不贴近耳朵制造声音。",
    easier: "只模仿表情或嘴形。", harder: "在她的声音后加入一个简单手势，让她选择模仿声音或动作。"
  },
  {
    id: "book-follow", category: "language", title: "跟着她看一本书", goal: "建立共同注意、图像与真实语言联系。", materials: "圆角硬页书或布书。",
    setup: "宝宝靠在成人身体前方或独坐，书放在双方都能看到的位置。",
    steps: ["让她自己摸、拍或翻，不按页讲完。", "她看哪里，成人就只说那个图。", "加入一个动作或拟声，再停下来。", "她推开书就说结束并收好。"],
    words: "“你看到小狗。汪汪。小狗跑走了。”", observe: "是否在图和成人脸之间转移目光；是否用声音回应。", stop: "咬书导致纸张破损、反复扭身离开或开始烦躁。", safety: "检查书页无脱落涂层和尖角，纸书需防止吞食碎片。",
    easier: "每次只看一个跨页。", harder: "把书中物品与家里真实物品做一次对应。"
  },
  {
    id: "texture-pair", category: "sensory", title: "软和滑，摸一摸", goal: "丰富触觉辨别，同时保持宝宝的自主选择。", materials: "干净棉布和食品级硅胶杯各一件。",
    setup: "物品分别放在左右手可触及处，不摩擦宝宝皮肤强迫体验。",
    steps: ["让她先选择一个物品。", "她触摸时用一个词描述质感。", "展示另一件但不拿走原物。", "如果她交换，描述变化并等待。"],
    words: "“这是软软的布。这只杯子滑滑的。”", observe: "是否偏好某种质感；会用手掌、手指还是嘴探索。", stop: "缩手、皱眉、打颤、皮肤发红或明显回避。", safety: "材料可清洗、无香味、无绒毛脱落，不使用冷热刺激。",
    easier: "只提供一种熟悉材质。", harder: "加入第三种安全材质，但一次仍只比较两件。"
  },
  {
    id: "rhythm-pause", category: "sensory", title: "拍拍停停", goal: "体验节奏、预测和抑制等待。", materials: "成人双手或一个软鼓面。",
    setup: "宝宝坐稳，成人保持一臂距离，环境没有背景音乐。",
    steps: ["慢拍两下后停住。", "观察她是否等待、发声或拍打。", "回应她的动作，再重复同一节奏。", "最后用更慢的两拍结束。"],
    words: "“拍、拍……停。你在等。再来一次。”", observe: "暂停时是否注视成人、期待声音或自己接续。", stop: "惊跳、呼吸加快、过度兴奋或转身离开。", safety: "保持低音量和慢节奏，不在耳边拍手或播放持续强节拍。",
    easier: "只做一拍一停。", harder: "让爸爸妈妈轮流拍，宝宝决定看向谁。"
  },
  {
    id: "mirror-face", category: "social", title: "镜子里的我们", goal: "练习面孔关注、情绪模仿和身体意识。", materials: "固定牢靠、不会破碎的婴儿安全镜。",
    setup: "镜子竖直固定在地面活动区，成人与宝宝并排。",
    steps: ["等她主动看镜子，再说出名字。", "模仿她当前的表情。", "做一个简单表情后停下来。", "指向镜中爸爸、妈妈和嘻嘻。"],
    words: "“镜子里是嘻嘻。你笑了，妈妈也笑了。”", observe: "是否在镜像与真人之间看；是否模仿表情或发声。", stop: "镜面反光刺眼、宝宝后仰或反复撞向镜面。", safety: "只能使用不可碎安全镜并牢固固定，普通玻璃镜不可放在地面。",
    easier: "成人抱稳，只看一张脸。", harder: "爸爸从镜子侧边出现，玩一次预期和重逢。"
  },
  {
    id: "hello-goodbye", category: "social", title: "看得见的短交接", goal: "建立爸爸的安抚经验和可预测的离开重逢。", materials: "一个熟悉玩具。",
    setup: "选择宝宝状态轻松时，妈妈始终先留在视线内，爸爸坐在地垫上。",
    steps: ["妈妈说固定告别句，把玩具交给爸爸。", "爸爸接住宝宝的目光或声音，不急着抱。", "妈妈退开一步但保持可见，数秒后回来。", "妈妈明确说“妈妈回来了”，三人一起结束。"],
    words: "“妈妈走开一下。爸爸在这里。妈妈回来了。”", observe: "她能否看向爸爸、接受声音安抚，并在妈妈回来后恢复探索。", stop: "哭声快速升级、身体强烈后仰或无法被熟悉方式安抚。", safety: "不偷偷离开，不把哭泣当作必须坚持的训练。",
    easier: "妈妈不移动，只把互动主导交给爸爸。", harder: "数天稳定后，妈妈短暂移到门边但仍可见。"
  },
  {
    id: "family-roll", category: "social", title: "爸爸妈妈轮流滚球", goal: "练习三人共同注意、轮流和名字对应。", materials: "一个大而柔软、不能入口的球。",
    setup: "爸爸妈妈面对面坐在地垫两侧，宝宝在中间有足够移动空间。",
    steps: ["宝宝看向谁，就由谁先轻轻滚球。", "另一位家长接球并说出自己的名字。", "把球停在宝宝可触及处，等待她拍、推或看。", "跟随她的选择继续两三轮。"],
    words: "“球到爸爸。球到妈妈。现在到嘻嘻。”", observe: "是否在人物和球之间转移目光；会不会期待下一位行动。", stop: "球速让她受惊、成人指令过多或她离开游戏区。", safety: "只在地面慢速滚球，不把球抛向宝宝。",
    easier: "爸爸妈妈坐近，球只滚很短距离。", harder: "滚球前停顿，让嘻嘻用目光选择下一位。"
  }
];

const scenarios = [
  {id:"hello",name:"早晨问候",goal:"用名字、眼神和停顿开始一天。",action:"靠近后先等嘻嘻看向你，再说短句；她发声时模仿一次。",response:"看向父母、微笑、动身体或咿呀都算回应。",zh:"早上好，嘻嘻。你醒来了。妈妈在这里。",en:"Good morning, Xixi. You're awake. Mommy is here.",fr:"Bonjour, Xixi. Tu es réveillée. Maman est là."},
  {id:"diaper",name:"换尿布",goal:"让照护步骤可预测，并练习身体词汇。",action:"每个动作开始前先说，停一下再抬腿或穿好衣服。",response:"看向手、放松身体、踢腿或发声。",zh:"我们来换尿布。抬起小腿。换好了。",en:"Let's change your diaper. Legs up. All done.",fr:"On change ta couche. On lève les jambes. C'est fini."},
  {id:"milk",name:"喝奶前后",goal:"把饥饿、等待和结束信号连接到语言。",action:"喂奶前说开始，过程中少说话；宝宝转头或闭嘴时尊重结束。",response:"张嘴靠近、看向奶或转头表示不同需要。",zh:"你饿了。奶来了。你喝好了。",en:"You're hungry. Here is your milk. You're all done.",fr:"Tu as faim. Voilà ton lait. Tu as fini."},
  {id:"food",name:"辅食时间",goal:"支持自主进食和饥饱表达。",action:"拿起一勺前命名食物，等待张嘴；转头或闭嘴就停止。",response:"前倾、张嘴、伸手、闭嘴或推开都是交流。",zh:"这是南瓜。你想尝一口吗？你吃够了。",en:"This is pumpkin. Would you like a taste? You've had enough.",fr:"C'est de la courge. Tu veux goûter ? Tu en as assez."},
  {id:"dress",name:"穿衣服",goal:"练习身体部位、动作预期和合作。",action:"把衣袖放到手边等待伸手，再慢慢穿过。",response:"看手、伸手、踢腿或放松身体。",zh:"小手在哪里？穿进去。你的手出来了。",en:"Where is your hand? In it goes. There is your hand.",fr:"Où est ta main ? On la met dedans. Voilà ta main."},
  {id:"bath",name:"洗澡",goal:"连接水、触觉和顺序词。",action:"先让宝宝看到并摸到少量温水，再按固定顺序清洗。",response:"拍水、看水滴、微笑或缩手都要回应。",zh:"水暖暖的。洗洗小手。现在擦干。",en:"The water is warm. Let's wash your hands. Now we dry off.",fr:"L'eau est tiède. On lave tes mains. Maintenant, on se sèche."},
  {id:"ball",name:"家庭滚球",goal:"在三人之间练习轮流和共同注意。",action:"爸爸妈妈坐在两侧慢慢滚球，宝宝看向谁就让谁接续。",response:"目光转移、拍球、推球或期待等待。",zh:"球来了。轮到爸爸。轮到妈妈。轮到嘻嘻。",en:"Here comes the ball. Daddy's turn. Mommy's turn. Xixi's turn.",fr:"Voici le ballon. C'est au tour de papa. C'est au tour de maman. C'est au tour de Xixi."},
  {id:"peekaboo",name:"躲猫猫",goal:"练习预期、物体恒存和重逢愉悦。",action:"只用双手短暂遮住成人自己的脸，不盖宝宝的脸。",response:"等待、盯着手、笑、发声或伸手。",zh:"爸爸在哪里？爸爸在这里！再来一次吗？",en:"Where is Daddy? Here he is! Again?",fr:"Où est papa ? Le voilà ! Encore ?"},
  {id:"book",name:"一起看书",goal:"跟随宝宝兴趣建立图像与词语联系。",action:"宝宝看哪张图就说哪张，不要求按顺序翻完。",response:"摸图、拍书、看父母或咿呀。",zh:"你看到小狗。小狗跑呀跑。再见，小狗。",en:"You see the dog. The dog is running. Bye-bye, dog.",fr:"Tu vois le chien. Le chien court. Au revoir, le chien."},
  {id:"music",name:"拍拍停停",goal:"练习节奏预测、轮流和等待。",action:"慢拍两下后停住，看宝宝是否接续，再回应她的节奏。",response:"注视、挥手、拍打、发声或等待。",zh:"拍、拍……停。你在等。再来。",en:"Clap, clap... stop. You're waiting. Again.",fr:"Tape, tape... stop. Tu attends. Encore."},
  {id:"outside",name:"外出观察",goal:"把共同注意连接到真实人物和环境。",action:"跟随宝宝目光，只命名她正在看的一个事物。",response:"转头、追视、伸手或发声。",zh:"你看到树了。树叶在动。风吹过来了。",en:"You see the tree. The leaves are moving. Here comes the wind.",fr:"Tu vois l'arbre. Les feuilles bougent. Le vent arrive."},
  {id:"sleep",name:"睡前收尾",goal:"用稳定短句帮助活动结束和情绪过渡。",action:"降低声音和动作，只说固定句，不把语言游戏拖长。",response:"靠近、放松、转开目光或打哈欠。",zh:"天黑了。爸爸妈妈在这里。晚安，嘻嘻。",en:"It's dark now. Mommy and Daddy are here. Good night, Xixi.",fr:"Il fait nuit. Maman et papa sont là. Bonne nuit, Xixi."}
];

const familyGames = [
  {title:"三人滚球接力",detail:"爸爸妈妈坐在两侧，跟随嘻嘻的目光慢慢滚球；谁接到球就说名字，再把选择权留给她。",activity:"family-roll"},
  {title:"声音传到下一位",detail:"嘻嘻先发声，妈妈模仿一次，爸爸再模仿一次，然后两人安静等待她开启下一轮。",activity:"sound-turns"},
  {title:"镜子里的全家",detail:"三人并排看安全镜。嘻嘻看向谁，谁就模仿她的表情或声音，再由另一位家长回应。",activity:"mirror-face"},
  {title:"爸爸藏、妈妈找",detail:"爸爸用双手短暂遮住自己的脸，妈妈跟随嘻嘻的目光说“爸爸在哪里”，出现后共同回应。",scenario:"peekaboo"},
  {title:"看得见的短交接",detail:"妈妈保持可见，把互动主导交给爸爸数秒；爸爸接住嘻嘻的信号，妈妈回来时明确说“妈妈回来了”。",activity:"hello-goodbye"},
  {title:"家庭节奏轮流",detail:"妈妈慢拍两下，爸爸等待后接两下，再停下来让嘻嘻用动作或声音决定是否继续。",activity:"rhythm-pause"},
  {title:"全家一起看一本书",detail:"嘻嘻负责选图，爸爸模仿声音，妈妈说一个短句；下一页交换父母角色。",activity:"book-follow"}
];

function readStore(key, fallback = {}) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}

const birthDate = new Date(2026, 0, 11);
const now = new Date();
let ageMonths = (now.getFullYear() - birthDate.getFullYear()) * 12 + now.getMonth() - birthDate.getMonth();
let monthAnchor = new Date(birthDate.getFullYear(), birthDate.getMonth() + ageMonths, birthDate.getDate());
if (now < monthAnchor) {
  ageMonths -= 1;
  monthAnchor = new Date(birthDate.getFullYear(), birthDate.getMonth() + ageMonths, birthDate.getDate());
}
const ageDays = Math.max(0, Math.floor((now - monthAnchor) / 86400000));
const ageText = `${ageMonths} 个月 ${ageDays} 天`;
document.getElementById("age-label").textContent = ageText;
document.getElementById("side-age").textContent = `2026-01-11 出生 · ${ageText}`;
document.getElementById("care-reminder").textContent = ageMonths < 8 ? "准备 8 月龄儿保记录" : "按当前能力持续观察";

const dateId = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
const dayIndex = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(2026, 0, 11)) / 86400000);
const todayKey = `xixi-care-${dateId}`;
const todayDone = readStore(todayKey);
const grossPool = activities.filter(item => item.category === "gross");
const handMindPool = activities.filter(item => ["fine", "cognitive"].includes(item.category));
const dailyGross = grossPool[Math.abs(dayIndex) % grossPool.length];
const dailyHandMind = handMindPool[Math.abs(dayIndex + 2) % handMindPool.length];
const dailyScenario = scenarios[Math.abs(dayIndex + 3) % scenarios.length];
const dailyFamily = familyGames[Math.abs(dayIndex + 1) % familyGames.length];
const todayItems = [
  {type:"大运动", title:dailyGross.title, detail:dailyGross.goal, href:`#activity-${dailyGross.id}`},
  {type:dailyHandMind.category === "fine" ? "精细运动" : "认知探索", title:dailyHandMind.title, detail:dailyHandMind.goal, href:`#activity-${dailyHandMind.id}`},
  {type:"三语互动", title:dailyScenario.name, detail:`中文完成一轮后，选择英语或法语再玩一轮：${dailyScenario.goal}`, href:"#trilingual", scenario:dailyScenario.id},
  {type:"爸爸 · 妈妈 · 宝宝", title:dailyFamily.title, detail:dailyFamily.detail, href:dailyFamily.activity ? `#activity-${dailyFamily.activity}` : "#trilingual", scenario:dailyFamily.scenario}
];

document.getElementById("today-list").innerHTML = todayItems.map((item, index) => `
  <article class="card task">
    <input type="checkbox" aria-label="完成：${item.title}" data-task="${index}" ${todayDone[index] ? "checked" : ""}>
    <div><span class="tag ${index > 1 ? "sky" : ""}">${item.type}</span><h3>${item.title}</h3><p>${item.detail}</p><a href="${item.href}" ${item.scenario ? `data-open-scenario="${item.scenario}"` : ""}>查看做法</a></div>
  </article>`).join("");

const activityStoreKey = "xixi-early-learning-feedback-v2";
const activityFeedback = readStore(activityStoreKey);
const filters = document.getElementById("activity-filters");
const activityList = document.getElementById("activity-list");
let activeCategory = "all";

filters.innerHTML = Object.entries(categories).map(([key, label]) => `<button class="filter-btn" type="button" data-category="${key}" aria-pressed="${key === "all"}">${label}</button>`).join("");

function renderActivities() {
  const shown = activeCategory === "all" ? activities : activities.filter(item => item.category === activeCategory);
  document.getElementById("library-count").textContent = `${shown.length} 个游戏`;
  activityList.innerHTML = shown.map(item => `
    <details class="activity" id="activity-${item.id}">
      <summary><div><div class="activity-title"><span class="tag">${categories[item.category]}</span><h3>${item.title}</h3></div><p class="activity-goal">${item.goal}</p></div></summary>
      <div class="activity-body">
        <div class="activity-columns">
          <div class="info-block"><h4>材料</h4><p>${item.materials}</p></div>
          <div class="info-block"><h4>环境准备</h4><p>${item.setup}</p></div>
          <div class="info-block wide"><h4>怎么玩</h4><ol>${item.steps.map(step => `<li>${step}</li>`).join("")}</ol></div>
          <div class="info-block"><h4>父母可以这样说</h4><p>${item.words}</p></div>
          <div class="info-block"><h4>观察什么</h4><p>${item.observe}</p></div>
          <div class="info-block"><h4>停止信号</h4><p>${item.stop}</p></div>
          <div class="info-block"><h4>安全边界</h4><p>${item.safety}</p></div>
          <div class="info-block wide levels"><div class="level"><h4>简单一点</h4><p>${item.easier}</p></div><div class="level"><h4>进阶一点</h4><p>${item.harder}</p></div></div>
        </div>
        <div class="feedback"><span>本次观察</span>${[["tried","尝试了"],["liked","喜欢"],["hard","有困难"],["stop","出现停止信号"]].map(([value,label]) => `<label><input type="radio" name="feedback-${item.id}" value="${value}" data-feedback="${item.id}" ${activityFeedback[item.id] === value ? "checked" : ""}>${label}</label>`).join("")}</div>
      </div>
    </details>`).join("");
}
renderActivities();

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  filters.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  renderActivities();
});

const scenarioSelect = document.getElementById("scenario-select");
const scenarioCard = document.getElementById("scenario-card");
const scenarioStoreKey = "xixi-trilingual-scenario-v1";
scenarioSelect.innerHTML = scenarios.map(item => `<option value="${item.id}">${item.name}</option>`).join("");
scenarioSelect.value = localStorage.getItem(scenarioStoreKey) || dailyScenario.id;

function renderScenario() {
  const item = scenarios.find(scenario => scenario.id === scenarioSelect.value) || scenarios[0];
  localStorage.setItem(scenarioStoreKey, item.id);
  scenarioCard.innerHTML = `
    <div class="scenario-head"><div><span class="tag sky">${item.name}</span><h3>${item.goal}</h3></div><p>每种语言单独玩一轮，不要求跟读</p></div>
    <div class="language-grid">
      <div class="language-block"><strong>中文</strong><p lang="zh-CN">${item.zh}</p><div class="voice-actions"><button class="btn" type="button" data-speak="zh-CN" data-text="${item.zh}">▶ 播放中文</button></div></div>
      <div class="language-block"><strong>English · 美式</strong><p lang="en-US">${item.en}</p><div class="translation">${item.zh}</div><div class="voice-actions"><button class="btn primary" type="button" data-speak="en-US" data-text="${item.en}">▶ 播放英语</button></div></div>
      <div class="language-block"><strong>Français · France</strong><p lang="fr-FR">${item.fr}</p><div class="translation">${item.zh}</div><div class="voice-actions"><button class="btn primary" type="button" data-speak="fr-FR" data-text="${item.fr}">▶ 播放法语</button></div></div>
    </div>
    <div class="scenario-steps"><div><h4>父母怎么做</h4><p>${item.action}</p></div><div><h4>宝宝怎样算回应</h4><p>${item.response}</p></div></div>
    <div class="voice-actions" style="margin-top:12px"><button class="btn" type="button" id="stop-voice">■ 停止播放</button></div>
    <div class="voice-status" id="voice-status" aria-live="polite">语音用于父母练习，不作为宝宝课程。</div>`;
}
renderScenario();
scenarioSelect.addEventListener("change", renderScenario);

function chooseVoice(lang) {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const exact = voices.find(voice => voice.lang.toLowerCase() === lang.toLowerCase());
  return exact || voices.find(voice => voice.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase())) || null;
}

scenarioCard.addEventListener("click", event => {
  const speakButton = event.target.closest("[data-speak]");
  const status = document.getElementById("voice-status");
  if (event.target.closest("#stop-voice")) {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    status.textContent = "已停止播放。";
    return;
  }
  if (!speakButton) return;
  if (!("speechSynthesis" in window)) {
    status.textContent = "当前浏览器不支持语音播放，请直接按原文示范。";
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(speakButton.dataset.text);
  utterance.lang = speakButton.dataset.speak;
  utterance.rate = utterance.lang === "zh-CN" ? 0.88 : 0.78;
  utterance.pitch = 1;
  const voice = chooseVoice(utterance.lang);
  if (voice) utterance.voice = voice;
  utterance.onstart = () => status.textContent = `正在播放 ${utterance.lang} 示范。`;
  utterance.onend = () => status.textContent = "播放完成。请用自己的声音面对嘻嘻说，并等待她回应。";
  utterance.onerror = () => status.textContent = "播放被浏览器中断，请稍后重试或直接按原文示范。";
  speechSynthesis.speak(utterance);
});

document.addEventListener("click", event => {
  const link = event.target.closest("[data-open-scenario]");
  if (!link) return;
  scenarioSelect.value = link.dataset.openScenario;
  renderScenario();
});

const observationKey = "xixi-development-observations-v1";
const observations = readStore(observationKey);
const observationItems = [
  ["熟人偏好与分离反应", "认识熟悉照护者；妈妈离开时用哭或寻找表达不安。这不是需要纠正的问题。"],
  ["来回交流", "会用声音、表情或动作发起互动；成人回应后愿意继续。"],
  ["双手传递和敲击", "两只手都参与探索，能在手间转移并尝试让物品碰撞。"],
  ["寻找半遮物", "玩具被遮住一部分后仍会看、伸手或拉开遮挡。"],
  ["坐爬双向转换", "能从坐姿进入爬姿，并逐渐练习从爬姿自主回坐。"],
  ["对称爬行", "双手双膝交替承重，转弯和越障时没有持续明显偏侧。"],
  ["自主拉站", "从地面主动抓住固定支撑拉到站立；成人扶起或枕头支撑不计。"],
  ["安全回落", "拉站后能弯膝回到跪姿或坐姿，而不是总向后直倒。"]
];
document.getElementById("observe-list").innerHTML = observationItems.map((item, index) => `<div class="observe-item"><div><h3>${item[0]}</h3><p>${item[1]}</p></div><div class="choices" role="radiogroup" aria-label="${item[0]}">${[["steady","已稳定"],["sometimes","偶尔"],["not-yet","尚未"]].map(([value,label]) => `<label class="choice"><input type="radio" name="observe-${index}" value="${value}" data-observe="${index}" ${observations[index] === value ? "checked" : ""}>${label}</label>`).join("")}</div></div>`).join("");

document.addEventListener("change", event => {
  const task = event.target.getAttribute("data-task");
  const observe = event.target.getAttribute("data-observe");
  const feedback = event.target.getAttribute("data-feedback");
  if (task !== null) {
    todayDone[task] = event.target.checked;
    localStorage.setItem(todayKey, JSON.stringify(todayDone));
  }
  if (observe !== null) {
    observations[observe] = event.target.value;
    localStorage.setItem(observationKey, JSON.stringify(observations));
  }
  if (feedback !== null) {
    activityFeedback[feedback] = event.target.value;
    localStorage.setItem(activityStoreKey, JSON.stringify(activityFeedback));
  }
});

window.addEventListener("hashchange", () => {
  const target = document.querySelector(location.hash);
  if (target && target.matches("details")) target.open = true;
});
if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target && target.matches("details")) target.open = true;
}

const pwaStatus = document.getElementById("pwa-status");
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
      pwaStatus.textContent = "离线缓存已准备，联网时会自动获取更新";
    } catch {
      pwaStatus.textContent = "离线缓存注册失败";
    }
  });
} else {
  pwaStatus.textContent = "当前浏览器不支持离线缓存";
}

